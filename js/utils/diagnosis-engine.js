// ===== 岐黄·辅助诊疗系统 - 问诊辨证引擎 v3 =====
// 保留旧接口 collectKeywords / scoreSyndromes（舌诊/面诊模块继续使用，勿破坏），
// v3 在 v2 分层辨证基础上增强：
//   1. 症状同义词归一（normalizeSymptom，symptom-mapping.js 提供）
//   2. 脉象层（PulseRules，权重 +5/项，与舌象层独立）
//   3. 面象层语义修复（改在证型 faceFeatures + 面部相关症状文本中检索，不再误入舌象文本）
//   4. 体质加成梯度化（CONSTITUTION_BONUS = [12, 8, 5]，替代固定 +15）
//   5. 舌象/症状互斥防御（SymptomMutexGroups，同组互斥词各 -2 并提示，不排除）
//   6. 匹配度归一化改为饱和函数（95 * (1 - e^(-score/S))，S=25），多候选自然分层
//   7. 方剂加减动态推荐（formulaAdvice：依据用户症状/舌象/脉象匹配 modifications）
//   8. searchSyndromes（symptom-mapping.js）单症状路径统一委托本引擎
const DiagnosisEngine = {
    // 归一化饱和常数：score=S 时约 60 分、2S 约 82 分、3S 约 91 分
    SCORE_SATURATION: 25,
    // 体质加成梯度：relatedConstitutions 首位 +12、次位 +8、第三位 +5，未收录不加分
    CONSTITUTION_BONUS: [12, 8, 5],

    // ==== 旧接口（兼容）：将规则选项转换为 keywords 集合 ====
    collectKeywords(rules, selection) {
        const allKeywords = [];
        rules.fields.forEach(field => {
            const values = selection[field.key];
            if (!values || values.length === 0) return;
            values.forEach(v => {
                const opt = field.options.find(o => o.value === v);
                if (opt && opt.keywords) {
                    opt.keywords.forEach(k => allKeywords.push({ kw: k, weight: 2 }));
                }
            });
        });
        return allKeywords;
    },

    // ==== 旧接口（兼容）：对全部证型按关键词打分（舌诊/面诊模块使用） ====
    scoreSyndromes(keywords) {
        const db = window.syndromesDatabase || [];
        const results = db.map(s => {
            let score = 0;
            const hits = [];
            const tongueText = s.tongueAppearance
                ? (typeof s.tongueAppearance === 'string' ? s.tongueAppearance
                    : [s.tongueAppearance.tongueBody, s.tongueAppearance.tongueCoating].filter(Boolean).join('，'))
                : '';
            const symptomText = (s.symptoms || []).join('，');
            const pulseText = s.pulseCondition || '';

            keywords.forEach(({ kw, weight }) => {
                if (tongueText.includes(kw)) { score += weight * 2; hits.push(kw); }
                else if (symptomText.includes(kw)) { score += weight; hits.push(kw); }
                else if (pulseText.includes(kw)) { score += weight; hits.push(kw); }
            });

            return { syndrome: s, score, hits };
        });

        results.sort((a, b) => b.score - a.score);
        const matched = results.filter(r => r.score > 0);
        if (matched.length === 0) return [];
        const maxScore = matched[0].score;
        return matched.slice(0, 8).map(r => ({
            syndrome: r.syndrome,
            matchScore: Math.round(r.score / maxScore * 95),
            hits: r.hits
        }));
    },

    // ==== v3：四诊合参综合辨证 ====
    // input = {
    //   symptoms: ['头痛','恶寒重'],       // 已选症状（symptomSyndromeMapping key）
    //   tongue: { tongueColor:[], tongueShape:[], coatingColor:[], coatingQuality:[] },
    //   face:   { faceColor:[], faceLuster:[], facePart:[], faceFeature:[] },
    //   pulse:  { pulseDepth:[], pulseRate:[], pulseForce:[], pulseWidth:[], pulseShape:[] },
    //   constitution: '气虚质' | ''
    // }
    diagnose(input) {
        input = input || {};
        const symptoms = Array.isArray(input.symptoms) ? input.symptoms : [];
        const tongue = input.tongue || {};
        const face = input.face || {};
        const pulse = input.pulse || {};
        const constitution = input.constitution || '';
        const db = window.syndromesDatabase || [];
        const mapping = window.symptomSyndromeMapping || {};

        // 症状同义词归一（normalizeSymptom 由 symptom-mapping.js 提供，缺失时原样返回）
        const normalizedSymptoms = symptoms.map(sym => {
            if (typeof normalizeSymptom === 'function') return normalizeSymptom(sym);
            return sym;
        });

        // 收集舌象/面象/脉象关键词（按规则表；规则数据缺失时降级为空，避免 ReferenceError）
        const tongueKws = this._collectFieldKeywords((typeof TongueRules !== 'undefined') ? TongueRules : null, tongue);
        const faceKws = this._collectFieldKeywords((typeof FaceRules !== 'undefined') ? FaceRules : null, face);
        const pulseKws = this._collectFieldKeywords((typeof PulseRules !== 'undefined') ? PulseRules : null, pulse);

        // 症状间互斥检测（如"舌淡/舌红"同选）：记入推理依据并各 -2，不排除
        const mutexHits = this._detectMutex(normalizedSymptoms);

        const scored = db.map(s => {
            const reasoning = [];
            let score = 0;
            const hits = [];
            const matchedSymptoms = [];
            const keyHits = [];
            const missingKey = [];
            const conflicts = [];

            // ---- 症状层（权重取自 symptomSyndromeMapping，主症 10 为主） ----
            normalizedSymptoms.forEach(sym => {
                const mappings = mapping[sym];
                if (!mappings) return;
                mappings.forEach(m => {
                    if (m.syndromeId !== s.id) return;
                    score += m.weight;
                    if (!matchedSymptoms.includes(sym)) matchedSymptoms.push(sym);
                    if (!hits.includes(sym)) hits.push(sym);
                    reasoning.push({ layer: '症状', key: sym, weight: m.weight });
                });
            });

            // ---- 必见症状机制 ----
            const keys = s.keySymptoms || [];
            if (keys.length) {
                keys.forEach(k => {
                    if (normalizedSymptoms.includes(k)) keyHits.push(k);
                    else missingKey.push(k);
                });
                // 必见症状一条未命中 → 不作为候选（排除）
                if (keyHits.length === 0) return null;
            }

            // ---- 矛盾互斥机制 ----
            const contras = s.contradictions || [];
            if (contras.length) {
                contras.forEach(c => {
                    if (normalizedSymptoms.includes(c)) {
                        conflicts.push(c);
                        reasoning.push({ layer: '矛盾', key: c, weight: -8 });
                    }
                });
                if (conflicts.length >= 2) return null; // 多个矛盾 → 排除
                if (conflicts.length === 1) score += -8; // 单个矛盾 → 明显降权
            }

            // ---- 舌象层（权重 +4/项） ----
            if (tongueKws.length) {
                const tongueText = this._tongueText(s);
                tongueKws.forEach(kw => {
                    if (tongueText.includes(kw)) {
                        score += 4;
                        hits.push(kw);
                        reasoning.push({ layer: '舌象', key: kw, weight: 4 });
                    }
                });
            }

            // ---- 脉象层（权重 +5/项，限定在证型脉象文本内匹配，避免"浮肿"误命中"脉浮"） ----
            if (pulseKws.length) {
                const pulseText = s.pulseCondition || '';
                pulseKws.forEach(kw => {
                    if (pulseText.includes(kw)) {
                        score += 5;
                        hits.push(kw);
                        reasoning.push({ layer: '脉象', key: kw, weight: 5 });
                    }
                });
            }

            // ---- 面象层（权重 +2/项，v3 语义修复：在证型 faceFeatures 与面部相关症状文本中检索） ----
            if (faceKws.length) {
                const faceText = this._faceText(s);
                faceKws.forEach(kw => {
                    if (faceText.includes(kw)) {
                        score += 2;
                        hits.push(kw);
                        reasoning.push({ layer: '面象', key: kw, weight: 2 });
                    }
                });
            }

            // ---- 体质层（梯度加成 +12/+8/+5，仅当症状层已有得分时生效，防"纯体质空判"） ----
            if (constitution && score > 0 && (s.relatedConstitutions || []).includes(constitution)) {
                const idx = s.relatedConstitutions.indexOf(constitution);
                const bonus = this.CONSTITUTION_BONUS[Math.min(idx, this.CONSTITUTION_BONUS.length - 1)];
                score += bonus;
                reasoning.push({ layer: '体质', key: constitution, weight: bonus });
            }

            // ---- 症状互斥惩罚 ----
            if (mutexHits.length) {
                mutexHits.forEach(m => {
                    score += -2;
                    reasoning.push({ layer: '互斥', key: m, weight: -2 });
                });
            }

            if (score <= 0) return null;
            return { syndrome: s, score, hits, matchedSymptoms, keyHits, missingKey, conflicts, reasoning, keys };
        }).filter(Boolean);

        scored.sort((a, b) => b.score - a.score);
        if (scored.length === 0) return [];

        // 饱和函数归一化：score=S 时约 60 分、2S 约 82 分、3S 约 91 分
        // 多候选自然分层，单一候选不再恒定 95%
        const S = this.SCORE_SATURATION;
        const top = scored.slice(0, 8).map(r => {
            const matchScore = Math.round(95 * (1 - Math.exp(-r.score / S)));
            const confidence = r.keys.length ? Math.round((r.keyHits.length / r.keys.length) * 100) : null;
            return {
                syndrome: r.syndrome,
                score: r.score,
                matchScore,
                hits: r.hits,
                matchedSymptoms: r.matchedSymptoms,
                keyHits: r.keyHits,
                missingKey: r.missingKey,
                conflicts: r.conflicts,
                reasoning: r.reasoning,
                danger: (r.syndrome.dangerSignals || []).slice(),
                insufficient: matchScore < 50,
                confidence,
                reasoningText: this._formatReasoning(r.reasoning)
            };
        });

        // ---- 方剂加减动态推荐（仅 top3 证型，控制开销） ----
        const ctx = {
            symptomText: normalizedSymptoms.join('，'),
            tongueKws, faceKws, pulseKws
        };
        top.slice(0, 3).forEach(r => {
            r.formulaAdvice = this._matchModifications(r.syndrome, ctx);
        });

        return top;
    },

    // 按规则表收集选择项对应的关键词（供 diagnose 使用）
    _collectFieldKeywords(rules, selection) {
        if (!rules || !rules.fields || !selection) return [];
        const kws = [];
        rules.fields.forEach(field => {
            const values = selection[field.key];
            if (!values || values.length === 0) return;
            values.forEach(v => {
                const opt = field.options.find(o => o.value === v);
                if (opt && opt.keywords) kws.push(...opt.keywords);
            });
        });
        return kws;
    },

    _tongueText(s) {
        const t = s.tongueAppearance;
        if (!t) return '';
        return typeof t === 'string' ? t : [t.tongueBody, t.tongueCoating].filter(Boolean).join('，');
    },

    // v3：证型面象文本 = faceFeatures + 面部相关症状（面/颧/唇开头或含关键词的症状条目）
    _faceText(s) {
        const faceFromFeatures = (s.faceFeatures || []).join('，');
        const faceFromSymptoms = (s.symptoms || [])
            .filter(x => x.startsWith('面') || x.includes('颧') || x.includes('唇'))
            .join('，');
        return faceFromFeatures + (faceFromFeatures && faceFromSymptoms ? '，' : '') + faceFromSymptoms;
    },

    // 检测输入症状中的同组互斥对（SymptomMutexGroups 由 tongue-rules.js 提供）
    _detectMutex(symptoms) {
        const groups = (typeof SymptomMutexGroups !== 'undefined') ? SymptomMutexGroups
            : (typeof window !== 'undefined' && window.SymptomMutexGroups) || [];
        const hits = [];
        groups.forEach(group => {
            const present = group.filter(g => symptoms.some(sym => sym.includes(g) || g.includes(sym)));
            if (present.length >= 2) hits.push(present.join('/'));
        });
        return hits;
    },

    // v3：随证加减动态匹配 —— 将证型推荐方剂的 modifications 与用户四诊信息做包含匹配
    // 返回 [{ formulaId, formulaName, adjustments: [{condition, modification, matchedBy}] }]
    _matchModifications(syndrome, ctx) {
        const formulas = window.formulasDatabase || [];
        const advice = [];
        (syndrome.recommendedFormulas || []).slice(0, 3).forEach(ref => {
            const f = formulas.find(x => x.id === ref.id);
            if (!f || !Array.isArray(f.modifications)) return;
            const adjustments = [];
            f.modifications.forEach(m => {
                if (!m || !m.condition) return;
                const condText = m.condition;
                // condition 拆词：按顿号/逗号/分号及"较甚""加重"等短语粒度匹配
                const tokens = condText.split(/[、，,;；]/).map(t => t.trim()).filter(Boolean);
                const matchedBy = [];
                tokens.forEach(tok => {
                    // 提取有效片段（去掉"加/去/兼/甚"等引导字后的实体词匹配）
                    if (ctx.symptomText.includes(tok)) { matchedBy.push(tok); return; }
                    if (ctx.tongueKws.some(kw => tok.includes(kw))) { matchedBy.push(tok); return; }
                    if (ctx.pulseKws.some(kw => tok.includes(kw))) { matchedBy.push(tok); return; }
                    if (ctx.faceKws.some(kw => tok.includes(kw))) { matchedBy.push(tok); return; }
                });
                if (matchedBy.length) {
                    adjustments.push({ condition: condText, modification: m.modification || '', matchedBy });
                }
            });
            if (adjustments.length) {
                advice.push({ formulaId: f.id, formulaName: f.name, adjustments });
            }
        });
        return advice;
    },

    // 将分层推理依据格式化为人类可读文本列表
    _formatReasoning(reasoning) {
        if (!reasoning || !reasoning.length) return [];
        const out = [];
        reasoning.forEach(r => {
            if (r.layer === '矛盾') { out.push('⚠ 矛盾：' + r.key + '（不支持此证型）'); return; }
            if (r.layer === '互斥') { out.push('⚠ 互斥：' + r.key + '（同时选择降低可信度）'); return; }
            out.push(r.layer + '「' + r.key + '」（+' + r.weight + '）');
        });
        return out;
    }
};

if (typeof window !== 'undefined') {
    window.DiagnosisEngine = DiagnosisEngine;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DiagnosisEngine };
}
