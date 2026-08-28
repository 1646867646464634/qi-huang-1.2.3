// ===== 岐黄·辅助诊疗系统 - 脉诊问诊规则表 =====
// 结构化问诊表单字段定义 + 选项 → 证型脉象关键词映射（供 diagnosis-engine 打分）
// 匹配范围限定在证型 pulseCondition 文本内，避免与症状词（如"浮肿"）误命中
const PulseRules = {
    fields: [
        {
            key: 'pulseDepth', label: '脉位', hint: '手指轻取中取沉取感知脉位深浅',
            options: [
                { value: '浮', label: '浮脉', keywords: ['浮'], desc: '轻取即得，主表证' },
                { value: '沉', label: '沉脉', keywords: ['沉'], desc: '重按始得，主里证' },
                { value: '伏', label: '伏脉', keywords: ['伏'], desc: '推筋着骨始得，主邪闭厥证' }
            ]
        },
        {
            key: 'pulseRate', label: '脉率', hint: '一息（正常呼吸一次）脉来次数',
            options: [
                { value: '迟', label: '迟脉', keywords: ['迟'], desc: '一息不足四至，主寒证' },
                { value: '缓', label: '缓脉', keywords: ['缓'], desc: '一息四至，主湿证或脾虚' },
                { value: '平', label: '平脉', keywords: [], desc: '一息四五至，从容和缓' },
                { value: '数', label: '数脉', keywords: ['数'], desc: '一息五六至，主热证' },
                { value: '疾', label: '疾脉', keywords: ['疾'], desc: '一息七八至，主阳极阴竭' }
            ]
        },
        {
            key: 'pulseForce', label: '脉力', hint: '脉搏应指的有力无力',
            options: [
                { value: '虚', label: '虚脉', keywords: ['虚', '无力', '弱'], desc: '应指无力，主虚证' },
                { value: '实', label: '实脉', keywords: ['有力'], desc: '应指有力，主实证' }
            ]
        },
        {
            key: 'pulseWidth', label: '脉宽', hint: '脉管应指的宽窄',
            options: [
                { value: '细', label: '细脉', keywords: ['细'], desc: '脉细如线，主气血两虚、湿证' },
                { value: '濡', label: '濡脉', keywords: ['濡'], desc: '浮而细软，主湿证' },
                { value: '洪', label: '洪脉', keywords: ['洪', '大'], desc: '脉来盛大，主热盛' }
            ]
        },
        {
            key: 'pulseShape', label: '脉形', hint: '脉搏的形态与节律特征',
            options: [
                { value: '滑', label: '滑脉', keywords: ['滑'], desc: '往来流利，主痰湿、食积、实热' },
                { value: '涩', label: '涩脉', keywords: ['涩'], desc: '往来艰涩，主血瘀、精伤血少' },
                { value: '弦', label: '弦脉', keywords: ['弦'], desc: '端直而长，主肝胆病、痛证、痰饮' },
                { value: '紧', label: '紧脉', keywords: ['紧'], desc: '绷急弹指，主寒证、痛证' },
                { value: '结', label: '结脉', keywords: ['结'], desc: '缓而时止，主阴盛气结' },
                { value: '代', label: '代脉', keywords: ['代'], desc: '止有定数，主脏气衰微' },
                { value: '促', label: '促脉', keywords: ['促'], desc: '数而时止，主阳盛实热' }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.PulseRules = PulseRules;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PulseRules };
}
