/**
 * 岐黄·辅助诊疗系统 — 诊断引擎冒烟测试
 * 运行：node scripts/test-engine.js            输出各用例 top8 摘要
 *       node scripts/test-engine.js --save     结果写入 scripts/engine-baseline.json（改造前基线）
 *       node scripts/test-engine.js --compare  与 baseline 对比，断言 top1 不劣化
 *
 * 用例覆盖：外感表证（风寒/风热）、八纲（实热/虚寒）、脏腑（心/肝/脾/肺/肾）、
 * 气血津液、痰热扰神鉴别、湿热、食滞、妇科，及四诊合参（症状+舌象+体质）综合病例。
 */
const path = require('path');
const fs = require('fs');

// 与 validate-data.js 一致：先建 global.window，再 require 数据文件（三兼容写法）
global.window = global;
const base = path.join(__dirname, '..', 'js', 'data');
const { syndromesDatabase } = require(path.join(base, 'syndromes-database.js'));
const { symptomSyndromeMapping } = require(path.join(base, 'symptom-mapping.js'));
const { symptomMappingExtension } = require(path.join(base, 'symptom-mapping-extension.js'));
Object.assign(symptomSyndromeMapping, symptomMappingExtension);
require(path.join(base, 'tongue-rules.js'));
require(path.join(base, 'face-rules.js'));
const { DiagnosisEngine } = require(path.join(__dirname, '..', 'js', 'utils', 'diagnosis-engine.js'));

const map = global.symptomSyndromeMapping || symptomSyndromeMapping;

// ---------- 用例定义 ----------
const cases = [
    { name: '风寒表实证', expect: 'syn_001', input: { symptoms: ['恶寒重', '发热轻', '无汗', '头痛'] } },
    { name: '风热表证', expect: 'syn_002', input: { symptoms: ['发热重', '恶寒轻', '有汗', '咽痛'] } },
    { name: '实热证', expect: 'syn_003', input: { symptoms: ['高热', '烦躁', '口渴喜冷饮', '面红目赤'] } },
    { name: '虚寒证', expect: 'syn_004', input: { symptoms: ['畏寒怕冷', '四肢不温', '神疲乏力', '小便清长'] } },
    { name: '心血虚证', expect: 'syn_010', input: { symptoms: ['心悸', '失眠', '多梦', '健忘'] } },
    { name: '肝气郁结证', expect: 'syn_020', input: { symptoms: ['胸胁胀痛', '情绪抑郁', '善太息', '乳房胀痛'] } },
    { name: '肝火上炎证', expect: 'syn_021', input: { symptoms: ['头痛眩晕', '面红目赤', '急躁易怒', '口苦咽干'] } },
    { name: '脾气虚证', expect: 'syn_030', input: { symptoms: ['食欲不振', '腹胀', '食后胀甚', '大便溏薄'] } },
    { name: '肾阴虚证', expect: 'syn_050', input: { symptoms: ['腰膝酸软', '眩晕耳鸣', '失眠多梦', '五心烦热'] } },
    { name: '心脾两虚证', expect: 'syn_116', input: { symptoms: ['心悸怔忡', '失眠多梦', '食少腹胀', '头晕健忘'] } },
    { name: '痰热扰心证（鉴别）', expect: 'syn_102', input: { symptoms: ['心悸', '失眠', '心烦', '口苦', '胸闷痰多'] } },
    { name: '肾阳虚证', expect: 'syn_051', input: { symptoms: ['腰膝酸冷', '畏寒肢冷', '夜尿频多', '下肢尤甚'] } },
    { name: '食滞胃脘证', expect: 'syn_062', input: { symptoms: ['脘腹胀满疼痛', '嗳腐吞酸', '厌食呕恶', '大便不爽'] } },
    { name: '风寒犯肺证', expect: 'syn_042', input: { symptoms: ['咳嗽声重', '痰白清稀', '鼻塞流清涕', '恶寒发热'] } },
    { name: '湿热下注证', expect: 'syn_129', input: { symptoms: ['下肢红肿热痛', '局部灼热', '皮肤湿疹', '口苦'] } },
    // 四诊合参综合病例（症状 + 舌象 + 体质）
    {
        name: '四诊合参·阴虚心神',
        expect: 'syn_011',
        input: {
            symptoms: ['心悸', '失眠', '五心烦热'],
            tongue: { tongueColor: ['红'], coatingQuality: ['燥'] },
            constitution: '阴虚质'
        }
    }
];

// ---------- 执行 ----------
function runAll() {
    return cases.map(c => {
        const results = DiagnosisEngine.diagnose(JSON.parse(JSON.stringify(c.input)));
        return {
            name: c.name,
            expect: c.expect,
            input: c.input,
            top8: results.map(r => ({
                id: r.syndrome.id,
                name: r.syndrome.name,
                score: r.score,
                matchScore: r.matchScore,
                confidence: r.confidence
            })),
            top1: results.length ? results[0].syndrome.id : null,
            top1Score: results.length ? results[0].score : 0
        };
    });
}

function summarize(out) {
    let pass = 0, fail = 0;
    out.forEach(c => {
        const ok = c.top1 === c.expect;
        const exp = syndromesDatabase.find(s => s.id === c.expect);
        const top = c.top8[0];
        if (ok) pass++; else fail++;
        console.log((ok ? 'PASS' : 'FAIL') + ' | ' + c.name
            + ' | 期望 ' + c.expect + (exp ? ' ' + exp.name : '')
            + ' | 实际 ' + (top ? top.id + ' ' + top.name + ' score=' + top.score : '(无结果)'));
        if (!ok && c.top8.length) {
            const expRank = c.top8.findIndex(x => x.id === c.expect);
            console.log('     期望证型排名: ' + (expRank >= 0 ? '第' + (expRank + 1) + '位' : '未进 top8'));
        }
    });
    console.log('----------------------------------------');
    console.log('通过 ' + pass + '/' + (pass + fail));
    return { pass, fail };
}

const args = process.argv.slice(2);
const out = runAll();

if (args.includes('--save')) {
    const file = path.join(__dirname, 'engine-baseline.json');
    fs.writeFileSync(file, JSON.stringify({ savedAt: new Date().toISOString(), cases: out }, null, 2), 'utf8');
    console.log('基线已保存: ' + file);
} else if (args.includes('--compare')) {
    const file = path.join(__dirname, 'engine-baseline.json');
    if (!fs.existsSync(file)) {
        console.error('未找到基线文件，请先运行 node scripts/test-engine.js --save');
        process.exit(1);
    }
    const baseline = JSON.parse(fs.readFileSync(file, 'utf8')).cases;
    let regressions = 0;
    console.log('===== 与基线对比（top1 不得劣化）=====');
    out.forEach(c => {
        const b = baseline.find(x => x.name === c.name);
        if (!b) { console.log('NEW  | ' + c.name); return; }
        const bTop1Ok = b.top1 === b.expect;
        const cTop1Ok = c.top1 === c.expect;
        const bRank = b.top8.findIndex(x => x.id === b.expect) + 1 || 99;
        const cRank = c.top8.findIndex(x => x.id === c.expect) + 1 || 99;
        if (cRank > bRank) {
            regressions++;
            console.log('REGRESS | ' + c.name + ' | 期望证型排名 ' + bRank + ' → ' + cRank);
        } else {
            console.log('OK (' + bRank + '→' + cRank + ') | ' + c.name);
        }
    });
    console.log('----------------------------------------');
    if (regressions > 0) { console.log('存在 ' + regressions + ' 处退化，请检查'); process.exit(1); }
    console.log('对比通过，无退化');
} else {
    console.log('===== 岐黄诊断引擎冒烟测试 =====');
    summarize(out);
    console.log('提示: --save 保存基线 | --compare 与基线对比');
}
