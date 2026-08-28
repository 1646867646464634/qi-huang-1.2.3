/**
 * 岐黄·辅助诊疗系统 — 症状映射权重重标定生成器（一次性脚本）
 * 运行：node scripts/rebuild-mapping-weights.js
 *
 * 依据证型库（含 v3 补齐后的 keySymptoms）自动重建 js/data/symptom-mapping-extension.js：
 *   - 键全集 = 全部证型 symptoms 的并集（消除映射覆盖率缺口）
 *   - 权重分层：
 *       1) key ∈ 该证型 keySymptoms        → 10（必见主症）
 *       2) key 为该证型独有（仅 1 证型含）  → 8
 *       3) key 与证型强相关（共享 2-3 型）  → 7 / 6
 *       4) 泛化症状（共享 ≥4 型）          → 5
 *   - 与 symptom-mapping.js 的 55 个手工分层键兼容：手工条目原权重保留，
 *     其覆盖缺失的证型按统一规则补齐（同名键整体重写，Object.assign 合并后为并集）。
 *
 * 输出统计：键数 / 条目数 / 各层权重分布。
 */
const path = require('path');
const fs = require('fs');

const base = path.join(__dirname, '..', 'js', 'data');
const { syndromesDatabase } = require(path.join(base, 'syndromes-database.js'));
const { symptomSyndromeMapping } = require(path.join(base, 'symptom-mapping.js'));

// 手工键集合（symptom-mapping.js 中已存在的键），用于统计提示
const manualKeys = new Set(Object.keys(symptomSyndromeMapping));

// 收集 key → 含此症状的证型列表
const keyMap = new Map();
syndromesDatabase.forEach(s => {
    (s.symptoms || []).forEach(sym => {
        if (!keyMap.has(sym)) keyMap.set(sym, []);
        keyMap.get(sym).push(s);
    });
});

// 手工键的既有条目（按 syndromeId 索引），生成时保留其权重并补齐缺失证型
const manualEntryMap = new Map();
Object.entries(symptomSyndromeMapping).forEach(([key, entries]) => {
    const byId = new Map();
    (entries || []).forEach(e => byId.set(e.syndromeId, e));
    manualEntryMap.set(key, byId);
});

const out = {};
let entryCount = 0;
const weightDist = {};

[...keyMap.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-Hans-CN')).forEach(([key, syndromes]) => {
    const manualById = manualEntryMap.get(key);
    const entries = syndromes.map(s => {
        // 手工键已有该证型条目 → 保留人工标定权重
        if (manualById && manualById.has(s.id)) {
            const e = manualById.get(s.id);
            weightDist[e.weight] = (weightDist[e.weight] || 0) + 1;
            entryCount++;
            return { syndromeId: s.id, keyword: key, weight: e.weight };
        }
        let weight;
        if ((s.keySymptoms || []).includes(key)) weight = 10;          // 必见主症
        else if (syndromes.length === 1) weight = 8;                    // 独有症状
        else if (syndromes.length <= 3) weight = syndromes.length === 2 ? 7 : 6; // 强相关
        else weight = 5;                                                // 泛化症状
        weightDist[weight] = (weightDist[weight] || 0) + 1;
        entryCount++;
        return { syndromeId: s.id, keyword: key, weight };
    }).sort((a, b) => b.weight - a.weight);
    out[key] = entries;
});

// 生成文件内容（三兼容写法，与原扩展文件一致）
const lines = Object.entries(out).map(([key, entries]) => {
    const body = entries
        .map(e => `        { syndromeId: "${e.syndromeId}", keyword: "${e.keyword}", weight: ${e.weight} }`)
        .join(',\n');
    return `    ${JSON.stringify(key)}: [\n${body}\n    ]`;
}).join(',\n');

const content = `// 自动生成的症状映射扩展（从证型库提取，覆盖证型库全部可输入症状）
// 由 scripts/rebuild-mapping-weights.js 依据证型库（含 keySymptoms）重标定权重：
//   keySymptoms 主症 10 / 独有症状 8 / 强相关(2-3证型) 7-6 / 泛化症状(≥4证型) 5
const symptomMappingExtension = {
${lines}
};

// 挂载到全局
if (typeof window !== 'undefined') {
    window.symptomMappingExtension = symptomMappingExtension;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { symptomMappingExtension };
}
`;

fs.writeFileSync(path.join(base, 'symptom-mapping-extension.js'), content, 'utf8');
console.log('symptom-mapping-extension.js 已重建');
console.log('键总数: ' + Object.keys(out).length + '（其中含手工键 ' + manualKeys.size + ' 个，人工权重保留）');
console.log('条目总数: ' + entryCount);
console.log('权重分布: ' + JSON.stringify(weightDist));
