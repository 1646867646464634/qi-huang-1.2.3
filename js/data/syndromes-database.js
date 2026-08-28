// ===== 岐黄·辅助诊疗系统 - 辨证知识库 =====
const syndromesDatabase = [
    // === 八纲辨证 ===
    {
        id: "syn_001", name: "风寒表实证", category: "八纲辨证", pattern: "表寒实证",
        symptoms: ["恶寒重", "发热轻", "无汗", "头痛", "身痛", "鼻塞", "流清涕", "咳嗽", "痰白清稀", "口不渴"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白而润" },
        pulseCondition: "脉浮紧",
        etiology: "外感风寒之邪，侵袭肌表，卫阳被郁，营阴郁滞",
        pathogenesis: "风寒束表，卫阳被郁，营阴郁滞，肺气失宣",
        treatmentPrinciple: "辛温解表，宣肺散寒",
        treatmentMethod: "发汗解表，宣肺散寒",
        recommendedFormulas: [
            { id: "formula_001", name: "麻黄汤", matchScore: 95 },
            { id: "formula_002", name: "桂枝汤", matchScore: 85 },
            { id: "formula_004", name: "九味羌活汤", matchScore: 80 }
        ],
        relatedConstitutions: ["平和质"]
    },
    {
        id: "syn_002", name: "风热表证", category: "八纲辨证", pattern: "表热证",
        symptoms: ["发热重", "恶寒轻", "有汗", "头痛", "咽痛", "口渴", "咳嗽", "痰黄黏稠", "鼻塞", "流浊涕"],
        tongueAppearance: { tongueBody: "边尖红", tongueCoating: "苔薄白而干或薄黄" },
        pulseCondition: "脉浮数",
        etiology: "外感风热之邪，侵袭肺卫",
        pathogenesis: "风热袭表，卫气被郁，肺失清肃",
        treatmentPrinciple: "辛凉解表，清热解毒",
        treatmentMethod: "辛凉透表，清热解毒",
        recommendedFormulas: [
            { id: "formula_005", name: "银翘散", matchScore: 95 },
            { id: "formula_006", name: "桑菊饮", matchScore: 85 }
        ],
        relatedConstitutions: ["平和质"]
    },
    {
        id: "syn_003", name: "实热证", category: "八纲辨证", pattern: "里实热证",
        symptoms: ["高热", "烦躁", "口渴喜冷饮", "面红目赤", "大便秘结", "小便黄赤", "舌红苔黄"],
        tongueAppearance: { tongueBody: "红或绛红", tongueCoating: "苔黄燥或灰黑起刺" },
        pulseCondition: "脉洪数或滑数",
        etiology: "外邪入里化热，或脏腑功能失调，阳热亢盛",
        pathogenesis: "热邪炽盛，充斥内外，耗伤津液",
        treatmentPrinciple: "清热泻火，凉血解毒",
        treatmentMethod: "清气分热，或清营凉血",
        recommendedFormulas: [
            { id: "formula_017", name: "白虎汤", matchScore: 95 },
            { id: "formula_021", name: "黄连解毒汤", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质"]
    },
    {
        id: "syn_004", name: "虚寒证", category: "八纲辨证", pattern: "里虚寒证",
        symptoms: ["畏寒怕冷", "四肢不温", "面色苍白", "神疲乏力", "小便清长", "大便溏薄", "口淡不渴"],
        tongueAppearance: { tongueBody: "淡胖或有齿痕", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉迟无力",
        etiology: "先天禀赋不足，或久病耗伤阳气",
        pathogenesis: "阳气虚衰，温煦失职，气化无力",
        treatmentPrinciple: "温阳散寒，补火助阳",
        treatmentMethod: "温补阳气，散寒通脉",
        recommendedFormulas: [
            { id: "formula_025", name: "理中丸", matchScore: 85 },
            { id: "formula_027", name: "四逆汤", matchScore: 80 }
        ],
        relatedConstitutions: ["阳虚质"]
    },
    
    // === 脏腑辨证 - 心 ===
    {
        id: "syn_010", name: "心血虚证", category: "脏腑辨证", organ: "心", pattern: "血虚证",
        symptoms: ["心悸", "失眠", "多梦", "健忘", "头晕", "面色淡白或萎黄", "唇舌色淡"],
        tongueAppearance: { tongueBody: "淡白", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "失血过多，或脾胃虚弱，生化不足，或思虑过度暗耗心血",
        pathogenesis: "心血不足，心神失养",
        treatmentPrinciple: "养血安神",
        treatmentMethod: "补血养心，安神定志",
        recommendedFormulas: [
            { id: "formula_078", name: "归脾汤", matchScore: 90 },
            { id: "formula_041", name: "酸枣仁汤", matchScore: 80 }
        ],
        relatedConstitutions: ["气虚质", "阴虚质"]
    },
    {
        id: "syn_011", name: "心阴虚证", category: "脏腑辨证", organ: "心", pattern: "阴虚证",
        symptoms: ["心悸", "心烦", "失眠", "多梦", "五心烦热", "潮热盗汗", "口燥咽干", "舌红少津"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔或无苔" },
        pulseCondition: "脉细数",
        etiology: "思虑过度，耗伤阴血，或热病后期，阴液亏虚",
        pathogenesis: "心阴不足，虚热内扰，心神不宁",
        treatmentPrinciple: "滋阴养血，宁心安神",
        treatmentMethod: "滋阴降火，养心安神",
        recommendedFormulas: [
            { id: "formula_042", name: "天王补心丹", matchScore: 95 },
            { id: "formula_040", name: "朱砂安神丸", matchScore: 75 }
        ],
        relatedConstitutions: ["阴虚质"]
    },
    
    // === 脏腑辨证 - 肝 ===
    {
        id: "syn_020", name: "肝气郁结证", category: "脏腑辨证", organ: "肝", pattern: "气滞证",
        symptoms: ["胸胁胀痛", "情绪抑郁", "善太息", "乳房胀痛", "月经不调", "嗳气", "脘腹胀满"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白" },
        pulseCondition: "脉弦",
        etiology: "情志不遂，郁怒伤肝，或突然精神刺激",
        pathogenesis: "肝失疏泄，气机郁滞",
        treatmentPrinciple: "疏肝解郁，理气止痛",
        treatmentMethod: "疏肝理气，解郁散结",
        recommendedFormulas: [
            { id: "formula_102", name: "柴胡疏肝散", matchScore: 95 },
            { id: "formula_014", name: "逍遥散", matchScore: 90 },
            { id: "formula_046", name: "越鞠丸", matchScore: 80 }
        ],
        relatedConstitutions: ["气郁质"]
    },
    {
        id: "syn_021", name: "肝火上炎证", category: "脏腑辨证", organ: "肝", pattern: "实热证",
        symptoms: ["头痛眩晕", "面红目赤", "口苦咽干", "急躁易怒", "耳鸣耳聋", "胁肋灼痛", "失眠多梦", "小便黄赤", "大便秘结"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄" },
        pulseCondition: "脉弦数",
        etiology: "情志不遂，肝气郁结，久郁化火；或过食辛辣温热之品",
        pathogenesis: "肝火炽盛，气火上逆",
        treatmentPrinciple: "清肝泻火",
        treatmentMethod: "清泻肝火，降逆止痛",
        recommendedFormulas: [
            { id: "formula_023", name: "龙胆泻肝汤", matchScore: 95 },
            { id: "formula_103", name: "左金丸", matchScore: 75 }
        ],
        relatedConstitutions: ["湿热质", "气郁质"]
    },
    {
        id: "syn_022", name: "肝阳上亢证", category: "脏腑辨证", organ: "肝", pattern: "上实下虚证",
        symptoms: ["眩晕耳鸣", "头目胀痛", "面红目赤", "急躁易怒", "失眠多梦", "腰膝酸软", "头重脚轻"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄或少苔" },
        pulseCondition: "脉弦有力或弦细数",
        etiology: "肝阴不足，阴不制阳，肝阳亢逆于上",
        pathogenesis: "肝肾阴虚，阴不制阳，肝阳上亢",
        treatmentPrinciple: "平肝潜阳，滋阴降火",
        treatmentMethod: "平肝潜阳，滋养肝肾",
        recommendedFormulas: [
            { id: "formula_085", name: "天麻钩藤饮", matchScore: 95 },
            { id: "formula_058", name: "镇肝熄风汤", matchScore: 85 }
        ],
        relatedConstitutions: ["阴虚质", "气郁质"]
    },
    {
        id: "syn_023", name: "肝血虚证", category: "脏腑辨证", organ: "肝", pattern: "血虚证",
        symptoms: ["头晕目眩", "面色无华", "爪甲不荣", "视物模糊", "肢体麻木", "筋脉拘急", "月经量少色淡", "失眠多梦"],
        tongueAppearance: { tongueBody: "淡白", tongueCoating: "苔薄白" },
        pulseCondition: "脉弦细",
        etiology: "脾肾亏虚，生化不足；或失血过多；或久病耗伤肝血",
        pathogenesis: "肝血不足，筋脉失养，头目失荣",
        treatmentPrinciple: "补血养肝",
        treatmentMethod: "养血柔肝，舒筋明目",
        recommendedFormulas: [
            { id: "formula_031", name: "四物汤", matchScore: 95 },
            { id: "formula_032", name: "当归补血汤", matchScore: 80 }
        ],
        relatedConstitutions: ["血瘀质", "阴虚质"]
    },
    {
        id: "syn_024", name: "肝胆湿热证", category: "脏腑辨证", organ: "肝胆", pattern: "湿热证",
        symptoms: ["胁肋胀痛", "口苦", "纳呆", "恶心呕吐", "小便黄赤", "或身目发黄", "带下黄臭", "阴囊湿疹"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉弦滑数",
        etiology: "湿热之邪侵袭肝胆，或嗜食肥甘厚味，湿热内生",
        pathogenesis: "湿热蕴结肝胆，疏泄失常",
        treatmentPrinciple: "清热利湿，疏肝利胆",
        treatmentMethod: "清利肝胆湿热",
        recommendedFormulas: [
            { id: "formula_023", name: "龙胆泻肝汤", matchScore: 95 },
            { id: "formula_063", name: "茵陈蒿汤", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质"]
    },
    
    // === 脏腑辨证 - 脾 ===
    {
        id: "syn_030", name: "脾气虚证", category: "脏腑辨证", organ: "脾", pattern: "气虚证",
        symptoms: ["食欲不振", "腹胀", "食后胀甚", "大便溏薄", "肢体倦怠", "神疲乏力", "少气懒言", "形体消瘦", "面色萎黄", "浮肿"],
        tongueAppearance: { tongueBody: "淡胖或有齿痕", tongueCoating: "苔薄白" },
        pulseCondition: "脉缓弱",
        etiology: "饮食不节，劳倦过度，思虑伤脾，久病耗伤脾气",
        pathogenesis: "脾胃气虚，运化无权，升降失常，气血生化不足",
        treatmentPrinciple: "健脾益气",
        treatmentMethod: "益气健脾，助运化湿",
        recommendedFormulas: [
            { id: "formula_029", name: "四君子汤", matchScore: 95 },
            { id: "formula_030", name: "补中益气汤", matchScore: 85 },
            { id: "formula_077", name: "参苓白术散", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质"]
    },
    {
        id: "syn_031", name: "脾阳虚证", category: "脏腑辨证", organ: "脾", pattern: "阳虚证",
        symptoms: ["腹胀纳少", "腹痛喜温喜按", "大便溏薄清稀", "四肢不温", "肢体困重", "或肢体浮肿", "小便不利", "带下清稀量多"],
        tongueAppearance: { tongueBody: "淡胖有齿痕", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉迟无力",
        etiology: "脾气虚进一步发展，或过食生冷，或肾阳虚不能温煦脾阳",
        pathogenesis: "脾阳虚衰，温煦失职，运化无权，水湿内停",
        treatmentPrinciple: "温中健脾",
        treatmentMethod: "温补脾阳，散寒除湿",
        recommendedFormulas: [
            { id: "formula_025", name: "理中丸", matchScore: 95 },
            { id: "formula_026", name: "小建中汤", matchScore: 80 }
        ],
        relatedConstitutions: ["阳虚质"]
    },
    {
        id: "syn_032", name: "寒湿困脾证", category: "脏腑辨证", organ: "脾", pattern: "寒湿证",
        symptoms: ["脘腹痞闷", "腹痛便溏", "口腻纳呆", "泛恶欲吐", "头身困重", "面色晦黄", "肢体浮肿", "小便短少"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白腻" },
        pulseCondition: "脉濡缓",
        etiology: "外感寒湿，或过食生冷，寒湿内停，损伤脾阳",
        pathogenesis: "寒湿内盛，困阻脾阳，运化失职",
        treatmentPrinciple: "温中散寒，燥湿健脾",
        treatmentMethod: "温化寒湿，健脾和胃",
        recommendedFormulas: [
            { id: "formula_090", name: "平胃散", matchScore: 90 },
            { id: "formula_062", name: "藿香正气散", matchScore: 85 }
        ],
        relatedConstitutions: ["痰湿质", "阳虚质"]
    },
    {
        id: "syn_033", name: "脾胃湿热证", category: "脏腑辨证", organ: "脾胃", pattern: "湿热证",
        symptoms: ["脘腹痞满", "纳呆呕恶", "口黏而甜", "肢体困重", "大便溏泄不爽", "小便黄赤", "身热不扬", "汗出不解"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉濡数或滑数",
        etiology: "外感湿热，或过食肥甘厚味，湿热内生",
        pathogenesis: "湿热蕴结脾胃，气机阻滞，升降失常",
        treatmentPrinciple: "清热化湿，理气和胃",
        treatmentMethod: "清热利湿，健脾和胃",
        recommendedFormulas: [
            { id: "formula_091", name: "三仁汤", matchScore: 85 },
            { id: "formula_062", name: "藿香正气散", matchScore: 75 }
        ],
        relatedConstitutions: ["湿热质"]
    },
    
    // === 脏腑辨证 - 肺 ===
    {
        id: "syn_040", name: "肺气虚证", category: "脏腑辨证", organ: "肺", pattern: "气虚证",
        symptoms: ["咳嗽无力", "气短而喘", "痰液清稀", "声低懒言", "神疲乏力", "自汗畏风", "面色淡白", "易感冒"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉虚弱",
        etiology: "久咳伤肺，或脾虚土不生金，或先天禀赋不足",
        pathogenesis: "肺气虚弱，宣降失职，卫外不固",
        treatmentPrinciple: "补益肺气",
        treatmentMethod: "补肺益气，固表止汗",
        recommendedFormulas: [
            { id: "formula_037", name: "玉屏风散", matchScore: 90 },
            { id: "formula_030", name: "补中益气汤", matchScore: 80 }
        ],
        relatedConstitutions: ["气虚质"]
    },
    {
        id: "syn_041", name: "肺阴虚证", category: "脏腑辨证", organ: "肺", pattern: "阴虚证",
        symptoms: ["干咳无痰", "或痰少而黏", "口燥咽干", "声音嘶哑", "形体消瘦", "五心烦热", "潮热盗汗", "颧红"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔或无苔" },
        pulseCondition: "脉细数",
        etiology: "燥热伤肺，或痨虫袭肺，或汗下伤阴",
        pathogenesis: "肺阴不足，虚热内生，肺失滋润",
        treatmentPrinciple: "滋阴润肺",
        treatmentMethod: "养阴清肺，润燥止咳",
        recommendedFormulas: [
            { id: "formula_089", name: "百合固金汤", matchScore: 95 },
            { id: "formula_087", name: "麦门冬汤", matchScore: 85 }
        ],
        relatedConstitutions: ["阴虚质"]
    },
    {
        id: "syn_042", name: "风寒犯肺证", category: "脏腑辨证", organ: "肺", pattern: "风寒证",
        symptoms: ["咳嗽声重", "痰白清稀", "鼻塞流清涕", "恶寒发热", "无汗", "头痛身痛", "咽痒"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白" },
        pulseCondition: "脉浮紧",
        etiology: "外感风寒，侵袭肺卫",
        pathogenesis: "风寒束肺，肺气失宣",
        treatmentPrinciple: "疏风散寒，宣肺止咳",
        treatmentMethod: "辛温解表，宣肺止咳化痰",
        recommendedFormulas: [
            { id: "formula_003", name: "小青龙汤", matchScore: 85 },
            { id: "formula_101", name: "止嗽散", matchScore: 90 }
        ],
        relatedConstitutions: ["平和质"]
    },
    {
        id: "syn_043", name: "痰热壅肺证", category: "脏腑辨证", organ: "肺", pattern: "痰热证",
        symptoms: ["咳嗽", "痰黄稠", "或脓血腥臭", "胸痛", "气喘", "发热口渴", "烦躁不安", "小便黄赤", "大便干结"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "外感风热，或风寒入里化热，炼液为痰",
        pathogenesis: "痰热壅肺，肺失清肃",
        treatmentPrinciple: "清热化痰，宣肺平喘",
        treatmentMethod: "清肺化痰，降气平喘",
        recommendedFormulas: [
            { id: "formula_007", name: "麻黄杏仁甘草石膏汤", matchScore: 90 },
            { id: "formula_098", name: "清气化痰丸", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质"]
    },
    
    // === 脏腑辨证 - 肾 ===
    {
        id: "syn_050", name: "肾阴虚证", category: "脏腑辨证", organ: "肾", pattern: "阴虚证",
        symptoms: ["腰膝酸软", "眩晕耳鸣", "失眠多梦", "五心烦热", "潮热盗汗", "咽干颧红", "男子遗精", "女子经少经闭"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔" },
        pulseCondition: "脉细数",
        etiology: "久病伤肾，或先天不足，或房劳过度，或过服温燥之品",
        pathogenesis: "肾阴不足，虚火内生，髓海失养",
        treatmentPrinciple: "滋补肾阴",
        treatmentMethod: "滋阴补肾，降火潜阳",
        recommendedFormulas: [
            { id: "formula_034", name: "六味地黄丸", matchScore: 95 },
            { id: "formula_104", name: "左归丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阴虚质"]
    },
    {
        id: "syn_051", name: "肾阳虚证", category: "脏腑辨证", organ: "肾", pattern: "阳虚证",
        symptoms: ["腰膝酸冷", "畏寒肢冷", "下肢尤甚", "面色苍白或黧黑", "神疲乏力", "性欲减退", "男子阳痿", "女子宫寒不孕", "小便清长", "夜尿频多"],
        tongueAppearance: { tongueBody: "淡胖有齿痕", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉迟无力，尺部尤甚",
        etiology: "先天不足，或年老体衰，或久病耗伤肾阳",
        pathogenesis: "肾阳虚衰，温煦失职，气化无权",
        treatmentPrinciple: "温补肾阳",
        treatmentMethod: "温肾助阳，填精补髓",
        recommendedFormulas: [
            { id: "formula_035", name: "肾气丸（即金匮肾气丸）", matchScore: 95 },
            { id: "formula_105", name: "右归丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阳虚质"]
    },
    {
        id: "syn_052", name: "肾精不足证", category: "脏腑辨证", organ: "肾", pattern: "精亏证",
        symptoms: ["小儿发育迟缓", "成人早衰", "腰膝酸软", "发脱齿摇", "耳鸣耳聋", "健忘恍惚", "动作迟缓", "足痿无力"],
        tongueAppearance: { tongueBody: "瘦薄", tongueCoating: "苔少" },
        pulseCondition: "脉细弱",
        etiology: "先天不足，或后天失养，或久病耗伤肾精",
        pathogenesis: "肾精亏虚，髓海不足，生长发育迟缓",
        treatmentPrinciple: "补肾填精",
        treatmentMethod: "益精填髓，强壮筋骨",
        recommendedFormulas: [
            { id: "formula_104", name: "左归丸", matchScore: 85 },
            { id: "formula_105", name: "右归丸", matchScore: 80 }
        ],
        relatedConstitutions: ["阴虚质", "平和质"]
    },
    {
        id: "syn_053", name: "肾气不固证", category: "脏腑辨证", organ: "肾", pattern: "气虚不固",
        symptoms: ["腰膝酸软", "神疲乏力", "小便频数而清", "夜尿频多", "尿后余沥不尽", "遗尿", "男子滑精早泄", "女子带下清稀", "胎动易滑"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔白" },
        pulseCondition: "脉沉弱",
        etiology: "年老体弱，或久病耗伤肾气",
        pathogenesis: "肾气亏虚，固摄无权",
        treatmentPrinciple: "补肾固摄",
        treatmentMethod: "补益肾气，固精缩尿",
        recommendedFormulas: [
            { id: "formula_035", name: "肾气丸（即金匮肾气丸）", matchScore: 80 },
            { id: "formula_039", name: "金锁固精丸", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质", "阳虚质"]
    },
    
    // === 脏腑辨证 - 胃 ===
    {
        id: "syn_060", name: "胃阴虚证", category: "脏腑辨证", organ: "胃", pattern: "阴虚证",
        symptoms: ["胃脘嘈杂", "饥不欲食", "口燥咽干", "大便干结", "脘痞不舒", "干呕呃逆", "舌红少津"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔或无苔" },
        pulseCondition: "脉细数",
        etiology: "热病伤阴，或过食辛辣，或情志化火伤胃阴",
        pathogenesis: "胃阴不足，胃失濡养",
        treatmentPrinciple: "养阴益胃",
        treatmentMethod: "滋阴养胃，和中降逆",
        recommendedFormulas: [
            { id: "formula_061", name: "增液汤", matchScore: 80 },
            { id: "formula_073", name: "玉女煎", matchScore: 75 }
        ],
        relatedConstitutions: ["阴虚质"]
    },
    {
        id: "syn_061", name: "胃热炽盛证", category: "脏腑辨证", organ: "胃", pattern: "实热证",
        symptoms: ["胃脘灼痛", "渴喜冷饮", "消谷善饥", "口臭", "牙龈肿痛", "大便秘结", "小便短赤"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄" },
        pulseCondition: "脉滑数",
        etiology: "过食辛辣温热之品，或情志化火犯胃",
        pathogenesis: "胃热炽盛，灼伤胃络",
        treatmentPrinciple: "清胃泻火",
        treatmentMethod: "清胃凉血，泻火止痛",
        recommendedFormulas: [
            { id: "formula_072", name: "清胃散", matchScore: 95 },
            { id: "formula_073", name: "玉女煎", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质"]
    },
    {
        id: "syn_062", name: "食滞胃脘证", category: "脏腑辨证", organ: "胃", pattern: "食积证",
        symptoms: ["脘腹胀满疼痛", "嗳腐吞酸", "厌食呕恶", "大便不爽", "矢气酸臭"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔厚腻" },
        pulseCondition: "脉滑",
        etiology: "饮食不节，暴饮暴食，损伤脾胃",
        pathogenesis: "食积停滞，胃失和降",
        treatmentPrinciple: "消食导滞，和胃降逆",
        treatmentMethod: "消食化积，理气和胃",
        recommendedFormulas: [
            { id: "formula_067", name: "保和丸", matchScore: 95 },
            { id: "formula_100", name: "枳实导滞丸", matchScore: 85 }
        ],
        relatedConstitutions: ["痰湿质"]
    },
    
    // === 气血津液辨证 ===
    {
        id: "syn_070", name: "气虚证", category: "气血津液辨证", pattern: "气虚",
        symptoms: ["少气懒言", "神疲乏力", "头晕目眩", "自汗", "活动时诸症加剧", "面色淡白", "舌淡苔白"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉虚无力",
        etiology: "先天不足，或后天失养，或劳倦过度，或久病耗气",
        pathogenesis: "元气不足，脏腑功能减退",
        treatmentPrinciple: "补气益气",
        treatmentMethod: "培补元气，益气健脾",
        recommendedFormulas: [
            { id: "formula_029", name: "四君子汤", matchScore: 90 },
            { id: "formula_030", name: "补中益气汤", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质"]
    },
    {
        id: "syn_071", name: "血虚证", category: "气血津液辨证", pattern: "血虚",
        symptoms: ["面色淡白或萎黄", "头晕眼花", "心悸失眠", "手足发麻", "妇女月经量少色淡", "唇舌爪甲色淡"],
        tongueAppearance: { tongueBody: "淡白", tongueCoating: "苔薄白" },
        pulseCondition: "脉细无力",
        etiology: "失血过多，或脾胃虚弱生化不足，或久病耗伤阴血",
        pathogenesis: "血液亏虚，脏腑组织失于濡养",
        treatmentPrinciple: "养血补血",
        treatmentMethod: "补血养血，调经止痛",
        recommendedFormulas: [
            { id: "formula_031", name: "四物汤", matchScore: 95 },
            { id: "formula_033", name: "八珍汤", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质", "阴虚质"]
    },
    {
        id: "syn_072", name: "气滞血瘀证", category: "气血津液辨证", pattern: "气滞血瘀",
        symptoms: ["胸胁胀闷疼痛", "刺痛拒按", "痛处固定不移", "面色晦暗", "肌肤甲错", "舌质紫暗或有瘀斑"],
        tongueAppearance: { tongueBody: "暗紫或有瘀斑瘀点", tongueCoating: "苔薄" },
        pulseCondition: "脉涩或弦涩",
        etiology: "情志不遂，气机郁滞，日久致瘀；或外伤致瘀，影响气机运行",
        pathogenesis: "气滞导致血瘀，瘀血又加重气滞，相互影响",
        treatmentPrinciple: "理气活血，化瘀止痛",
        treatmentMethod: "行气活血，通络止痛",
        recommendedFormulas: [
            { id: "formula_050", name: "血府逐瘀汤", matchScore: 95 },
            { id: "formula_051", name: "补阳还五汤", matchScore: 80 }
        ],
        relatedConstitutions: ["血瘀质", "气郁质"]
    },
    {
        id: "syn_073", name: "气血两虚证", category: "气血津液辨证", pattern: "气血双亏",
        symptoms: ["面色淡白或萎黄", "少气懒言", "神疲乏力", "头晕目眩", "心悸失眠", "唇舌爪甲色淡", "形体消瘦"],
        tongueAppearance: { tongueBody: "淡白嫩", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "久病耗伤气血，或脾胃虚弱生化不足，或失血过多兼气虚",
        pathogenesis: "气虚与血虚并存，脏腑组织失于濡养温煦",
        treatmentPrinciple: "气血双补",
        treatmentMethod: "益气养血，健脾和胃",
        recommendedFormulas: [
            { id: "formula_033", name: "八珍汤", matchScore: 95 },
            { id: "formula_029", name: "四君子汤", matchScore: 75 },
            { id: "formula_031", name: "四物汤", matchScore: 75 }
        ],
        relatedConstitutions: ["气虚质"]
    },
    {
        id: "syn_074", name: "痰湿内阻证", category: "气血津液辨证", pattern: "痰湿证",
        symptoms: ["咳嗽痰多", "胸闷", "恶心呕吐", "头晕目眩", "肢体困重", "形体肥胖", "口中黏腻"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白腻" },
        pulseCondition: "脉滑或濡缓",
        etiology: "脾虚运化失职，水湿内停，聚湿生痰",
        pathogenesis: "痰湿内盛，阻滞气机，蒙蔽清阳",
        treatmentPrinciple: "燥湿化痰，理气和中",
        treatmentMethod: "健脾燥湿，化痰降逆",
        recommendedFormulas: [
            { id: "formula_066", name: "二陈汤", matchScore: 95 },
            { id: "formula_097", name: "温胆汤", matchScore: 85 },
            { id: "formula_099", name: "半夏白术天麻汤", matchScore: 80 }
        ],
        relatedConstitutions: ["痰湿质"]
    },
    {
        id: "syn_075", name: "津液亏虚证", category: "气血津液辨证", pattern: "津亏证",
        symptoms: ["口燥咽干", "唇焦舌燥", "皮肤干枯", "小便短少", "大便干结", "口渴欲饮"],
        tongueAppearance: { tongueBody: "红干瘦", tongueCoating: "少津或干燥无苔" },
        pulseCondition: "脉细数",
        etiology: "汗吐下太过，或热病伤津，或久病耗伤津液",
        pathogenesis: "津液亏虚，脏腑组织失于濡润",
        treatmentPrinciple: "生津润燥",
        treatmentMethod: "滋阴增液，润燥生津",
        recommendedFormulas: [
            { id: "formula_061", name: "增液汤", matchScore: 90 },
            { id: "formula_087", name: "麦门冬汤", matchScore: 80 }
        ],
        relatedConstitutions: ["阴虚质"]
    },
    
    // === 六经辨证 ===
    {
        id: "syn_080", name: "太阳中风证", category: "六经辨证", pattern: "表虚证",
        symptoms: ["发热", "恶风", "汗出", "头痛", "鼻鸣", "干呕", "脉浮缓"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白" },
        pulseCondition: "脉浮缓",
        etiology: "外感风邪，营卫不和",
        pathogenesis: "风邪袭表，卫外不固，营阴外泄",
        treatmentPrinciple: "解肌祛风，调和营卫",
        treatmentMethod: "解肌发表，调和营卫",
        recommendedFormulas: [
            { id: "formula_002", name: "桂枝汤", matchScore: 95 }
        ],
        relatedConstitutions: ["平和质"]
    },
    {
        id: "syn_081", name: "少阳病证", category: "六经辨证", pattern: "半表半里证",
        symptoms: ["往来寒热", "胸胁苦满", "默默不欲饮食", "心烦喜呕", "口苦", "咽干", "目眩"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白或薄黄" },
        pulseCondition: "脉弦",
        etiology: "邪入少阳，枢机不利",
        pathogenesis: "邪在半表半里，正邪分争，胆火内郁",
        treatmentPrinciple: "和解少阳",
        treatmentMethod: "和解少阳，调达枢机",
        recommendedFormulas: [
            { id: "formula_012", name: "小柴胡汤", matchScore: 95 }
        ],
        relatedConstitutions: ["气郁质"]
    },
    
    // === 卫气营血辨证 ===
    {
        id: "syn_090", name: "气分热盛证", category: "卫气营血辨证", pattern: "气分证",
        symptoms: ["壮热", "烦渴", "大汗出", "面赤", "脉洪大", "舌红苔黄"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄燥" },
        pulseCondition: "脉洪大有力",
        etiology: "温邪入里，或寒邪入里化热，传入气分",
        pathogenesis: "热邪炽盛于气分，正邪剧争",
        treatmentPrinciple: "清气分热",
        treatmentMethod: "辛寒清气，生津除烦",
        recommendedFormulas: [
            { id: "formula_017", name: "白虎汤", matchScore: 95 },
            { id: "formula_018", name: "竹叶石膏汤", matchScore: 80 }
        ],
        relatedConstitutions: ["平和质"]
    },

    // ================================================================
    // 扩充证型（syn_100 起）— 高频证型补全，含辨证要点/鉴别/禁忌
    // 新增字段：keySymptoms 必见症状 / contradictions 矛盾症状 /
    //           dangerSignals 危险信号 / source 出处 / level 分层 / lastUpdated
    // ================================================================

    // === 心系 ===
    {
        id: "syn_100", name: "心气虚证", category: "脏腑辨证", organ: "心", pattern: "气虚证",
        symptoms: ["心悸", "气短", "神疲乏力", "自汗", "活动后加重", "面色淡白", "舌淡", "苔薄白", "脉虚无力"],
        keySymptoms: ["心悸", "气短"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉虚无力",
        etiology: "久病耗伤心气，或先天禀赋不足",
        pathogenesis: "心气亏虚，鼓动无力，血行不畅",
        treatmentPrinciple: "补益心气",
        treatmentMethod: "益气养心，宁心安神",
        recommendedFormulas: [
            { id: "formula_079", name: "生脉散", matchScore: 95 },
            { id: "formula_029", name: "四君子汤", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },
    {
        id: "syn_101", name: "心阳虚证", category: "脏腑辨证", organ: "心", pattern: "阳虚证",
        symptoms: ["心悸怔忡", "心胸憋闷或疼痛", "畏寒肢冷", "神疲乏力", "面色晄白或青紫", "舌淡胖或紫暗", "脉沉迟无力"],
        keySymptoms: ["心悸怔忡", "畏寒肢冷"],
        contradictions: ["五心烦热"],
        tongueAppearance: { tongueBody: "淡胖或紫暗", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉迟无力",
        etiology: "心气虚进一步发展，或久病阳虚",
        pathogenesis: "心阳衰微，温煦失职，心脉瘀阻",
        treatmentPrinciple: "温补心阳",
        treatmentMethod: "温通心阳，散寒止痛",
        recommendedFormulas: [
            { id: "formula_027", name: "四逆汤", matchScore: 85 },
            { id: "formula_095", name: "真武汤", matchScore: 80 }
        ],
        relatedConstitutions: ["阳虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_102", name: "痰热扰心证", category: "脏腑辨证", organ: "心", pattern: "痰热证",
        symptoms: ["心悸", "失眠", "心烦", "口苦", "胸闷脘痞", "痰多黄稠", "舌红", "苔黄腻", "脉滑数"],
        keySymptoms: ["心悸", "失眠", "痰多黄稠"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "情志不遂，气郁化火，炼液为痰，痰热内扰",
        pathogenesis: "痰热内蕴，扰动心神",
        treatmentPrinciple: "清热化痰，宁心安神",
        treatmentMethod: "清化痰热，镇心安神",
        recommendedFormulas: [
            { id: "formula_097", name: "温胆汤", matchScore: 95 },
            { id: "formula_098", name: "清气化痰丸", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质", "痰湿质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_103", name: "心脉痹阻证", category: "脏腑辨证", organ: "心", pattern: "瘀阻证",
        symptoms: ["心胸憋闷疼痛", "痛引肩背", "时发时止", "舌质紫暗或有瘀斑", "苔白", "脉涩或结代"],
        keySymptoms: ["心胸憋闷疼痛"],
        dangerSignals: ["心胸憋闷疼痛"],
        tongueAppearance: { tongueBody: "紫暗或有瘀斑瘀点", tongueCoating: "苔白" },
        pulseCondition: "脉涩或结代",
        etiology: "年高体弱，或情志内伤，或寒凝痰阻，心脉痹阻",
        pathogenesis: "心脉瘀阻，气血运行不畅",
        treatmentPrinciple: "活血化瘀，通脉止痛",
        treatmentMethod: "活血祛瘀，宽胸通痹",
        recommendedFormulas: [
            { id: "formula_050", name: "血府逐瘀汤", matchScore: 95 },
            { id: "formula_081", name: "瓜蒌薤白白酒汤", matchScore: 90 }
        ],
        relatedConstitutions: ["血瘀质", "气郁质"],
        keyPoints: ["心胸憋闷疼痛", "痛引肩背", "脉涩或结代"],
        taboos: ["胸痛持续不解伴大汗出、厥脱者，当立即就医"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },

    // === 脾系 ===
    {
        id: "syn_104", name: "脾不统血证", category: "脏腑辨证", organ: "脾", pattern: "气虚不摄",
        symptoms: ["便血", "尿血", "肌衄", "鼻衄", "齿衄", "月经过多", "食少便溏", "神疲乏力", "面色萎黄", "舌淡", "脉细弱"],
        keySymptoms: ["食少便溏", "神疲乏力"],
        dangerSignals: ["便血"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "脾气虚衰，统摄无权，血溢脉外",
        pathogenesis: "脾气虚弱，统摄失职，血不循经",
        treatmentPrinciple: "补脾摄血",
        treatmentMethod: "益气健脾，摄血止血",
        recommendedFormulas: [
            { id: "formula_078", name: "归脾汤", matchScore: 95 },
            { id: "formula_084", name: "黄土汤", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质"],
        keyPoints: ["出血与脾虚并见", "出血色淡质稀"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_105", name: "中气下陷证", category: "脏腑辨证", organ: "脾", pattern: "气虚下陷",
        symptoms: ["脘腹坠胀", "食后益甚", "久泻久痢", "脱肛", "子宫下垂", "胃下垂", "头晕目眩", "神疲乏力", "少气懒言", "舌淡", "苔白", "脉虚弱"],
        keySymptoms: ["脘腹坠胀", "神疲乏力"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉虚弱",
        etiology: "脾气虚弱，中气不足，升举无力而下陷",
        pathogenesis: "中气下陷，升举无力，脏器下垂",
        treatmentPrinciple: "补中益气，升阳举陷",
        treatmentMethod: "益气升提，举陷固脱",
        recommendedFormulas: [
            { id: "formula_030", name: "补中益气汤", matchScore: 95 }
        ],
        relatedConstitutions: ["气虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_106", name: "寒凝胃脘证", category: "脏腑辨证", organ: "胃", pattern: "寒实证",
        symptoms: ["胃脘冷痛", "遇寒加剧", "得温则减", "口淡不渴", "呕吐清水", "舌淡", "苔白滑", "脉沉紧或弦迟"],
        keySymptoms: ["胃脘冷痛"],
        contradictions: ["消谷善饥", "胃脘灼痛"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉紧或弦迟",
        etiology: "外寒直中胃脘，或过食生冷，寒凝气滞",
        pathogenesis: "寒邪凝滞胃脘，气机阻滞，胃失和降",
        treatmentPrinciple: "温胃散寒，行气止痛",
        treatmentMethod: "温中散寒，和胃止痛",
        recommendedFormulas: [
            { id: "formula_076", name: "吴茱萸汤", matchScore: 95 },
            { id: "formula_025", name: "理中丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },
    {
        id: "syn_107", name: "肠燥津亏证", category: "脏腑辨证", organ: "大肠", pattern: "津亏证",
        symptoms: ["大便秘结", "数日一行", "口干", "腹胀", "舌红少津", "苔黄燥或焦黑", "脉细涩"],
        keySymptoms: ["大便秘结"],
        contradictions: ["便溏"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "苔黄燥" },
        pulseCondition: "脉细涩",
        etiology: "素体阴亏，或热病伤津，或年老津液不足",
        pathogenesis: "津液亏虚，肠失濡润，传导失职",
        treatmentPrinciple: "润肠通便",
        treatmentMethod: "滋阴润燥，增水行舟",
        recommendedFormulas: [
            { id: "formula_061", name: "增液汤", matchScore: 95 },
            { id: "formula_011", name: "麻子仁丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阴虚质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },

    // === 肝系 ===
    {
        id: "syn_110", name: "肝胃不和证", category: "脏腑辨证", organ: "肝胃", pattern: "气滞证",
        symptoms: ["脘胁胀痛", "嗳气", "吞酸", "呃逆", "烦躁易怒", "情志不遂则加重", "苔薄白或薄黄", "脉弦"],
        keySymptoms: ["脘胁胀痛", "嗳气"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白或薄黄" },
        pulseCondition: "脉弦",
        etiology: "情志不遂，肝气郁结，横逆犯胃",
        pathogenesis: "肝气犯胃，胃失和降",
        treatmentPrinciple: "疏肝理气，和胃降逆",
        treatmentMethod: "疏肝解郁，降逆和胃",
        recommendedFormulas: [
            { id: "formula_102", name: "柴胡疏肝散", matchScore: 90 },
            { id: "formula_103", name: "左金丸", matchScore: 85 }
        ],
        relatedConstitutions: ["气郁质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },
    {
        id: "syn_111", name: "肝阴虚证", category: "脏腑辨证", organ: "肝", pattern: "阴虚证",
        symptoms: ["头晕耳鸣", "两目干涩", "视物模糊", "胁肋隐痛", "五心烦热", "潮热盗汗", "口干咽燥", "舌红少津", "脉弦细数"],
        keySymptoms: ["两目干涩", "胁肋隐痛"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔" },
        pulseCondition: "脉弦细数",
        etiology: "久病耗伤肝阴，或情志不遂化火伤阴",
        pathogenesis: "肝阴不足，目窍失养，虚热内生",
        treatmentPrinciple: "滋养肝阴",
        treatmentMethod: "滋阴柔肝，养肝明目",
        recommendedFormulas: [
            { id: "formula_034", name: "六味地黄丸", matchScore: 85 },
            { id: "formula_104", name: "左归丸", matchScore: 85 }
        ],
        relatedConstitutions: ["阴虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_112", name: "胆郁痰扰证", category: "脏腑辨证", organ: "胆", pattern: "痰气郁结",
        symptoms: ["惊悸不宁", "烦躁不寐", "眩晕耳鸣", "口苦", "胸闷胁胀", "泛恶欲吐", "舌苔黄腻", "脉弦滑"],
        keySymptoms: ["惊悸不宁", "口苦"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉弦滑",
        etiology: "情志不遂，胆气郁结，气郁生痰化火",
        pathogenesis: "胆失疏泄，痰热内扰，神志不宁",
        treatmentPrinciple: "清胆化痰，和胃安神",
        treatmentMethod: "化痰清热，理气安神",
        recommendedFormulas: [
            { id: "formula_097", name: "温胆汤", matchScore: 95 }
        ],
        relatedConstitutions: ["气郁质", "痰湿质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },

    // === 肾系 ===
    {
        id: "syn_113", name: "肾阴阳两虚证", category: "脏腑辨证", organ: "肾", pattern: "阴阳两虚",
        symptoms: ["腰膝酸软", "畏寒肢冷", "五心烦热", "眩晕耳鸣", "失眠健忘", "遗精阳痿", "舌淡红", "苔薄少", "脉沉细弱"],
        keySymptoms: ["腰膝酸软", "畏寒肢冷"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄少" },
        pulseCondition: "脉沉细弱",
        etiology: "久病耗伤肾阴肾阳，或阴损及阳、阳损及阴",
        pathogenesis: "肾之阴阳两虚，温养失职",
        treatmentPrinciple: "滋阴补阳，阴阳并调",
        treatmentMethod: "补阴益阳，填精益髓",
        recommendedFormulas: [
            { id: "formula_036", name: "地黄饮子", matchScore: 95 },
            { id: "formula_035", name: "肾气丸", matchScore: 85 }
        ],
        relatedConstitutions: ["阴虚质", "阳虚质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },

    // === 复合证型 ===
    {
        id: "syn_114", name: "肝肾阴虚证", category: "脏腑辨证", organ: "肝肾", pattern: "阴虚证",
        symptoms: ["头晕目眩", "耳鸣健忘", "腰膝酸软", "胁痛", "五心烦热", "颧红盗汗", "口干咽燥", "遗精", "月经量少", "舌红少苔", "脉细数"],
        keySymptoms: ["腰膝酸软", "头晕目眩"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔" },
        pulseCondition: "脉细数",
        etiology: "久病失调，或情志内伤，或房劳过度，耗伤肝肾之阴",
        pathogenesis: "肝肾阴亏，虚热内扰，筋骨失养",
        treatmentPrinciple: "滋补肝肾",
        treatmentMethod: "滋养肝肾，育阴潜阳",
        recommendedFormulas: [
            { id: "formula_034", name: "六味地黄丸", matchScore: 95 },
            { id: "formula_104", name: "左归丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阴虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_115", name: "脾肾阳虚证", category: "脏腑辨证", organ: "脾肾", pattern: "阳虚证",
        symptoms: ["腰膝酸冷", "畏寒肢冷", "食少纳呆", "腹胀", "久泻久痢", "五更泄泻", "完谷不化", "浮肿", "小便不利", "舌淡胖", "苔白滑", "脉沉迟无力"],
        keySymptoms: ["五更泄泻", "腰膝酸冷"],
        tongueAppearance: { tongueBody: "淡胖有齿痕", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉迟无力",
        etiology: "脾阳虚衰日久，累及肾阳，或肾阳亏虚不能温煦脾阳",
        pathogenesis: "脾肾阳虚，温运失职，水湿内停",
        treatmentPrinciple: "温补脾肾",
        treatmentMethod: "温肾健脾，散寒止泻",
        recommendedFormulas: [
            { id: "formula_095", name: "真武汤", matchScore: 90 },
            { id: "formula_038", name: "四神丸", matchScore: 90 }
        ],
        relatedConstitutions: ["阳虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_116", name: "心脾两虚证", category: "脏腑辨证", organ: "心脾", pattern: "气血两虚",
        symptoms: ["心悸怔忡", "失眠多梦", "头晕健忘", "食少腹胀", "大便溏薄", "神疲乏力", "面色萎黄", "舌淡", "苔薄白", "脉细弱"],
        keySymptoms: ["心悸怔忡", "失眠多梦", "食少腹胀"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "思虑过度，劳伤心脾，脾虚生血不足，心血暗耗",
        pathogenesis: "心脾气血两虚，心神失养，运化失职",
        treatmentPrinciple: "补益心脾，养血安神",
        treatmentMethod: "益气补血，健脾养心",
        recommendedFormulas: [
            { id: "formula_078", name: "归脾汤", matchScore: 95 }
        ],
        relatedConstitutions: ["气虚质", "阴虚质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },

    // === 气血津液及其他 ===
    {
        id: "syn_117", name: "血热证", category: "气血津液辨证", pattern: "血分热证",
        symptoms: ["身热夜甚", "心烦不寐", "斑疹隐隐", "衄血", "吐血", "便血", "尿血", "大量出血", "舌绛", "脉数"],
        keySymptoms: ["身热夜甚", "斑疹隐隐"],
        dangerSignals: ["大量出血"],
        tongueAppearance: { tongueBody: "绛红", tongueCoating: "少苔" },
        pulseCondition: "脉数",
        etiology: "外感温热之邪入血分，或情志化火、嗜食辛辣动血",
        pathogenesis: "热入血分，迫血妄行，血热内盛",
        treatmentPrinciple: "清热凉血，解毒化斑",
        treatmentMethod: "清热凉血，止血宁络",
        recommendedFormulas: [
            { id: "formula_020", name: "犀角地黄汤", matchScore: 95 },
            { id: "formula_019", name: "清营汤", matchScore: 90 },
            { id: "formula_053", name: "十灰散", matchScore: 80 }
        ],
        relatedConstitutions: ["阴虚质", "湿热质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_118", name: "风寒湿痹证", category: "其他辨证", pattern: "寒湿痹阻",
        symptoms: ["肢体关节疼痛", "屈伸不利", "遇寒加剧", "得热痛减", "痛处游走", "重着肿胀", "舌苔薄白", "脉弦紧"],
        keySymptoms: ["肢体关节疼痛", "遇寒加剧"],
        contradictions: ["关节红肿热痛"],
        tongueAppearance: { tongueBody: "淡红", tongueCoating: "苔薄白" },
        pulseCondition: "脉弦紧",
        etiology: "风寒湿邪侵袭，阻滞经络关节",
        pathogenesis: "风寒湿留注经络，气血痹阻不通",
        treatmentPrinciple: "祛风散寒，除湿通络",
        treatmentMethod: "祛风散寒除湿，通络止痛",
        recommendedFormulas: [
            { id: "formula_096", name: "独活寄生汤", matchScore: 90 },
            { id: "formula_004", name: "九味羌活汤", matchScore: 80 }
        ],
        relatedConstitutions: ["痰湿质", "阳虚质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_119", name: "风湿热痹证", category: "其他辨证", pattern: "热痹",
        symptoms: ["关节红肿热痛", "屈伸不利", "发热", "口渴", "心烦", "汗出不解", "舌红", "苔黄腻", "脉滑数"],
        keySymptoms: ["关节红肿热痛"],
        contradictions: ["遇寒加剧", "得热痛减"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "风湿热邪侵袭，或风寒湿痹郁久化热",
        pathogenesis: "风湿热壅滞关节，气血痹阻不通",
        treatmentPrinciple: "清热通络，祛风除湿",
        treatmentMethod: "清热化湿，疏风通络",
        recommendedFormulas: [
            { id: "formula_093", name: "二妙散", matchScore: 90 },
            { id: "formula_017", name: "白虎汤", matchScore: 75 }
        ],
        relatedConstitutions: ["湿热质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_120", name: "寒凝血瘀证", category: "气血津液辨证", pattern: "寒凝血瘀",
        symptoms: ["痛处固定", "刺痛拒按", "遇寒加重", "得温痛减", "四肢厥冷", "皮肤紫暗", "舌质紫暗", "苔白", "脉沉迟涩"],
        keySymptoms: ["刺痛拒按", "遇寒加重"],
        tongueAppearance: { tongueBody: "紫暗或有瘀斑瘀点", tongueCoating: "苔白" },
        pulseCondition: "脉沉迟涩",
        etiology: "外寒侵袭，或阳虚内寒，寒凝血脉",
        pathogenesis: "寒凝血脉，血行瘀滞，不通则痛",
        treatmentPrinciple: "温经散寒，活血止痛",
        treatmentMethod: "温经散寒，化瘀通络",
        recommendedFormulas: [
            { id: "formula_083", name: "温经汤", matchScore: 90 },
            { id: "formula_052", name: "生化汤", matchScore: 85 }
        ],
        relatedConstitutions: ["血瘀质", "阳虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_121", name: "气不摄血证", category: "气血津液辨证", pattern: "气虚失血",
        symptoms: ["吐血", "衄血", "便血", "尿血", "月经过多", "崩漏", "大量出血", "神疲乏力", "气短懒言", "面色淡白", "舌淡", "脉细弱"],
        keySymptoms: ["神疲乏力", "气短懒言"],
        dangerSignals: ["大量出血"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "久病气虚，统摄无权，血不循经",
        pathogenesis: "气虚不摄，血溢脉外",
        treatmentPrinciple: "益气摄血",
        treatmentMethod: "补气摄血，健脾止血",
        recommendedFormulas: [
            { id: "formula_078", name: "归脾汤", matchScore: 95 },
            { id: "formula_084", name: "黄土汤", matchScore: 85 }
        ],
        relatedConstitutions: ["气虚质"],
        keyPoints: ["出血伴气虚证", "出血色淡质稀"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_122", name: "湿热蕴结证", category: "气血津液辨证", pattern: "湿热证",
        symptoms: ["身热不扬", "头身困重", "脘腹胀满", "口苦口黏", "纳呆", "恶心", "小便黄赤", "大便黏滞不爽", "舌红", "苔黄腻", "脉濡数"],
        keySymptoms: ["口苦口黏", "大便黏滞不爽"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉濡数",
        etiology: "外感湿热，或嗜食肥甘厚味，湿热内生",
        pathogenesis: "湿热蕴结中焦，气机阻滞",
        treatmentPrinciple: "清热利湿，理气和中",
        treatmentMethod: "清热化湿，消痞除满",
        recommendedFormulas: [
            { id: "formula_091", name: "三仁汤", matchScore: 90 },
            { id: "formula_094", name: "甘露消毒丹", matchScore: 90 },
            { id: "formula_063", name: "茵陈蒿汤", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_123", name: "痰蒙清窍证", category: "气血津液辨证", pattern: "痰蒙神窍",
        symptoms: ["神识痴呆", "昏蒙", "喉中痰鸣", "胸闷痰多", "意识障碍", "舌淡胖", "苔白腻", "脉滑"],
        keySymptoms: ["神识痴呆", "喉中痰鸣"],
        dangerSignals: ["意识障碍"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白腻" },
        pulseCondition: "脉滑",
        etiology: "脾虚生痰，或情志不遂气滞痰凝，痰蒙心窍",
        pathogenesis: "痰浊蒙蔽清窍，神明失用",
        treatmentPrinciple: "涤痰开窍",
        treatmentMethod: "化痰开窍，醒神定志",
        recommendedFormulas: [
            { id: "formula_045", name: "苏合香丸", matchScore: 90 },
            { id: "formula_099", name: "半夏白术天麻汤", matchScore: 80 }
        ],
        relatedConstitutions: ["痰湿质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_124", name: "水饮内停证", category: "气血津液辨证", pattern: "水饮证",
        symptoms: ["肢体浮肿", "小便不利", "脘腹胀满", "咳逆倚息", "痰多清稀", "舌淡胖", "苔白滑", "脉沉弦"],
        keySymptoms: ["肢体浮肿", "小便不利"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白滑" },
        pulseCondition: "脉沉弦",
        etiology: "脾肾阳虚，水湿运化失常，水饮内停",
        pathogenesis: "水饮停聚，气化不利",
        treatmentPrinciple: "温阳化饮，利水渗湿",
        treatmentMethod: "温化水饮，健脾利水",
        recommendedFormulas: [
            { id: "formula_064", name: "五苓散", matchScore: 95 },
            { id: "formula_065", name: "苓桂术甘汤", matchScore: 90 },
            { id: "formula_095", name: "真武汤", matchScore: 85 }
        ],
        relatedConstitutions: ["痰湿质", "阳虚质"],
        source: "《中医诊断学》规划教材", level: "进阶", lastUpdated: "2026-08"
    },
    {
        id: "syn_125", name: "虚风内动证", category: "其他辨证", pattern: "阴虚动风",
        symptoms: ["手足蠕动", "筋惕肉瞤", "眩晕耳鸣", "腰膝酸软", "五心烦热", "舌红少苔", "脉细数无力"],
        keySymptoms: ["手足蠕动", "筋惕肉瞤"],
        tongueAppearance: { tongueBody: "红少津", tongueCoating: "少苔" },
        pulseCondition: "脉细数无力",
        etiology: "肝肾阴虚，阴不制阳，虚风内动",
        pathogenesis: "阴虚血少，筋脉失养，虚风内动",
        treatmentPrinciple: "滋阴息风",
        treatmentMethod: "滋阴潜阳，柔肝息风",
        recommendedFormulas: [
            { id: "formula_058", name: "镇肝熄风汤", matchScore: 85 },
            { id: "formula_057", name: "羚角钩藤汤", matchScore: 80 }
        ],
        relatedConstitutions: ["阴虚质"],
        source: "《中医诊断学》规划教材", level: "临床", lastUpdated: "2026-08"
    },
    {
        id: "syn_126", name: "心火亢盛证", category: "脏腑辨证", organ: "心", pattern: "实热证",
        symptoms: ["心烦失眠", "口舌生疮", "面赤口渴", "小便短赤", "舌尖红", "苔黄", "脉数"],
        keySymptoms: ["口舌生疮", "心烦失眠"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄" },
        pulseCondition: "脉数",
        etiology: "情志化火，或过食辛辣，心火亢盛",
        pathogenesis: "心火内炽，上炎口舌，下移小肠",
        treatmentPrinciple: "清心泻火",
        treatmentMethod: "清心利尿，导热下行",
        recommendedFormulas: [
            { id: "formula_071", name: "导赤散", matchScore: 95 },
            { id: "formula_040", name: "朱砂安神丸", matchScore: 85 }
        ],
        relatedConstitutions: ["湿热质", "阴虚质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    },
    {
        id: "syn_127", name: "肺脾气虚证", category: "脏腑辨证", organ: "肺脾", pattern: "气虚证",
        symptoms: ["咳嗽气短", "痰白清稀", "食少腹胀", "便溏", "神疲乏力", "面色淡白", "自汗易感冒", "舌淡", "苔白", "脉虚弱"],
        keySymptoms: ["食少腹胀", "神疲乏力"],
        tongueAppearance: { tongueBody: "淡", tongueCoating: "苔薄白" },
        pulseCondition: "脉虚弱",
        etiology: "久病咳喘耗伤肺气，脾虚化源不足，土不生金",
        pathogenesis: "肺脾气虚，宣降与运化失职",
        treatmentPrinciple: "补肺健脾",
        treatmentMethod: "益气健脾，培土生金",
        recommendedFormulas: [
            { id: "formula_029", name: "四君子汤", matchScore: 90 },
            { id: "formula_077", name: "参苓白术散", matchScore: 90 }
        ],
        relatedConstitutions: ["气虚质"],
        source: "《中医诊断学》规划教材", level: "基础", lastUpdated: "2026-08"
    }
,
    {
        id: "syn_128",
        name: "热毒蕴肤证",
        category: "外科辨证",
        pattern: "热毒炽盛证",
        organ: "皮肤",
        symptoms: ["局部红肿热痛", "疮疡初起", "发热恶寒", "口渴", "小便黄", "舌红苔黄", "脉数有力"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄" },
        pulseCondition: "脉数有力",
        etiology: "外感火毒，或饮食不节，过食辛辣厚味，蕴生热毒",
        pathogenesis: "热毒蕴结肌肤，气血壅滞，血肉腐败，发为疮疡",
        description: "热毒蕴肤证为外科疮疡初期之常见证候，以局部红肿热痛、疮形高突为特征，多伴全身发热恶寒、口渴等实热表现，属阳证、热证范畴。",
        treatmentPrinciple: "清热解毒，消肿散结",
        treatmentMethod: "清热解毒，活血消肿",
        recommendedFormulas: [
            { id: "formula_114", name: "仙方活命饮", matchScore: 95 },
            { id: "formula_115", name: "五味消毒饮", matchScore: 90 }
        ],
        relatedConstitutions: ["湿热质"],
        keyPoints: ["疮疡初起红肿热痛", "疮形高突", "发热口渴", "舌红苔黄"]
    },
    {
        id: "syn_129",
        name: "湿热下注证",
        category: "外科辨证",
        pattern: "湿热证",
        organ: "下肢",
        symptoms: ["下肢红肿热痛", "局部灼热", "皮肤湿疹", "口苦", "小便黄赤", "大便黏滞", "舌红苔黄腻", "脉滑数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "外感湿热之邪，或嗜食肥甘厚味，酿生湿热，流注下焦",
        pathogenesis: "湿热蕴结下焦，气血壅滞，经脉痹阻",
        description: "湿热下注证以下肢红肿热痛、皮肤湿疹或带下异常为特征，多伴口苦、小便黄赤等湿热内蕴之象，常见于丹毒、下肢静脉曲张伴感染及湿热痹证。",
        treatmentPrinciple: "清热利湿，通络止痛",
        treatmentMethod: "清热利湿，活血通络",
        recommendedFormulas: [
            { id: "formula_116", name: "四妙丸", matchScore: 95 },
            { id: "formula_117", name: "完带汤", matchScore: 70 }
        ],
        relatedConstitutions: ["湿热质"],
        keyPoints: ["下肢红肿热痛", "皮肤湿疹", "口苦尿黄", "舌红苔黄腻", "脉滑数"]
    },
    {
        id: "syn_130",
        name: "癥瘕血瘀证",
        category: "妇科辨证",
        pattern: "血瘀证",
        organ: "胞宫",
        symptoms: ["腹部积块", "固定不移", "疼痛拒按", "月经量多", "经色紫暗有块", "面色晦暗", "舌紫暗有瘀斑", "脉涩"],
        tongueAppearance: { tongueBody: "紫暗或有瘀斑", tongueCoating: "苔薄" },
        pulseCondition: "脉涩",
        etiology: "气滞血瘀，或经期产后感受寒邪，瘀血内停，积而成癥",
        pathogenesis: "瘀血内结，聚于胞宫，日久成癥瘕积聚",
        description: "癥瘕血瘀证为妇科腹部肿块之证，以腹中积块固定不移、疼痛拒按为特征，多伴月经异常、经色紫暗有块，属血瘀内结、癥积成块之候。",
        treatmentPrinciple: "活血化瘀，消癥散结",
        treatmentMethod: "活血破瘀，软坚消癥",
        recommendedFormulas: [
            { id: "formula_111", name: "膈下逐瘀汤", matchScore: 90 },
            { id: "formula_113", name: "活络效灵丹", matchScore: 80 }
        ],
        relatedConstitutions: ["血瘀质"],
        keyPoints: ["腹中积块固定不移", "疼痛拒按", "经色紫暗有块", "舌紫暗有瘀斑", "脉涩"]
    },
    {
        id: "syn_131",
        name: "痛经寒凝血瘀证",
        category: "妇科辨证",
        pattern: "寒凝血瘀证",
        organ: "胞宫",
        symptoms: ["经前或经期小腹冷痛", "得温则减", "经血量少", "经色紫暗有块", "畏寒肢冷", "面色青白", "舌暗苔白", "脉沉紧"],
        tongueAppearance: { tongueBody: "暗淡", tongueCoating: "苔白" },
        pulseCondition: "脉沉紧",
        etiology: "经期产后贪凉饮冷，或起居不慎，寒邪客于胞宫，血为寒凝",
        pathogenesis: "寒凝血脉，气血运行不畅，不通则痛",
        description: "痛经寒凝血瘀证以经期小腹冷痛、得温痛减为特征，多伴经血紫暗有块、畏寒肢冷，属寒凝胞宫、血脉瘀阻之候，多见于原发性及继发性痛经。",
        treatmentPrinciple: "温经散寒，化瘀止痛",
        treatmentMethod: "温经散寒，活血止痛",
        recommendedFormulas: [
            { id: "formula_112", name: "少腹逐瘀汤", matchScore: 95 },
            { id: "formula_110", name: "失笑散", matchScore: 80 }
        ],
        relatedConstitutions: ["血瘀质", "阳虚质"],
        keyPoints: ["小腹冷痛得温则减", "经色紫暗有块", "畏寒肢冷", "舌暗苔白", "脉沉紧"]
    },
    {
        id: "syn_132",
        name: "气血两虚月经不调证",
        category: "妇科辨证",
        pattern: "气血两虚证",
        organ: "胞宫",
        symptoms: ["月经后期", "经血量少色淡", "经质清稀", "面色苍白", "神疲乏力", "头晕心悸", "舌淡苔薄", "脉细弱"],
        tongueAppearance: { tongueBody: "淡白", tongueCoating: "苔薄白" },
        pulseCondition: "脉细弱",
        etiology: "素体虚弱，或久病失养，或思虑过度，暗耗气血",
        pathogenesis: "气血亏虚，冲任失养，血海不能按时满盈",
        description: "气血两虚月经不调证以月经后期、量少色淡为特征，多伴面色苍白、神疲乏力、头晕心悸等气血不足之象，常见于营养不良、慢性失血及大病久病后。",
        treatmentPrinciple: "补气养血调经",
        treatmentMethod: "益气补血，调理冲任",
        recommendedFormulas: [
            { id: "formula_120", name: "圣愈汤", matchScore: 90 },
            { id: "formula_109", name: "桃红四物汤", matchScore: 70 }
        ],
        relatedConstitutions: ["气虚质", "血瘀质"],
        keyPoints: ["月经后期量少色淡", "面色苍白", "神疲乏力", "舌淡脉细弱"]
    },
    {
        id: "syn_133",
        name: "冲任不固崩漏证",
        category: "妇科辨证",
        pattern: "气虚不摄证",
        organ: "胞宫",
        symptoms: ["经血非时而下", "量多如注", "或淋漓不尽", "色淡质稀", "面色萎黄", "神疲肢倦", "气短懒言", "舌淡苔白", "脉沉弱"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白" },
        pulseCondition: "脉沉弱",
        etiology: "素体脾虚，或劳倦过度，损伤脾气，冲任不固，不能统摄血液",
        pathogenesis: "脾虚气弱，冲任不固，血失统摄，经血妄行",
        description: "冲任不固崩漏证以经血非时而下、量多或淋漓不尽为特征，多伴面色萎黄、神疲肢倦、气短懒言等气虚之象，属脾虚气弱、冲任失固之候。",
        treatmentPrinciple: "补气固冲，摄血止崩",
        treatmentMethod: "益气健脾，固冲摄血",
        recommendedFormulas: [
            { id: "formula_119", name: "固冲汤", matchScore: 95 },
            { id: "formula_120", name: "圣愈汤", matchScore: 75 }
        ],
        relatedConstitutions: ["气虚质"],
        keyPoints: ["经血非时而下量多如注", "色淡质稀", "神疲肢倦", "舌淡脉沉弱"]
    },
    {
        id: "syn_134",
        name: "湿热下注带下证",
        category: "妇科辨证",
        pattern: "湿热证",
        organ: "带脉",
        symptoms: ["带下量多", "色黄质稠", "气味腥臭", "阴部瘙痒", "口苦咽干", "小便黄赤", "舌红苔黄腻", "脉滑数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "经行产后，胞脉空虚，湿热之邪乘虚入侵，或脾虚湿盛，郁久化热",
        pathogenesis: "湿热蕴结下焦，损伤任带二脉，带脉失约",
        description: "湿热下注带下证以带下量多、色黄质稠、气味腥臭为特征，多伴阴部瘙痒、口苦咽干、小便黄赤，属湿热蕴结、任带失约之候。",
        treatmentPrinciple: "清热利湿止带",
        treatmentMethod: "清热利湿，固涩止带",
        recommendedFormulas: [
            { id: "formula_118", name: "易黄汤", matchScore: 95 },
            { id: "formula_117", name: "完带汤", matchScore: 80 }
        ],
        relatedConstitutions: ["湿热质"],
        keyPoints: ["带下色黄质稠腥臭", "阴部瘙痒", "口苦尿黄", "舌红苔黄腻", "脉滑数"]
    },
    {
        id: "syn_135",
        name: "脾虚带下证",
        category: "妇科辨证",
        pattern: "脾虚湿盛证",
        organ: "带脉",
        symptoms: ["带下量多色白", "清稀无臭", "面色晄白", "四肢不温", "神疲乏力", "纳少便溏", "舌淡苔白", "脉缓弱"],
        tongueAppearance: { tongueBody: "淡胖", tongueCoating: "苔白腻" },
        pulseCondition: "脉缓弱",
        etiology: "素体脾虚，或饮食不节，劳倦过度，损伤脾气，运化失常",
        pathogenesis: "脾虚失运，水湿内停，下注任带，带脉失约",
        description: "脾虚带下证以带下量多色白、清稀无臭为特征，多伴面色晄白、四肢不温、神疲乏力、纳少便溏，属脾虚失运、湿浊下注之候。",
        treatmentPrinciple: "健脾益气，升阳除湿",
        treatmentMethod: "健脾化湿止带",
        recommendedFormulas: [
            { id: "formula_117", name: "完带汤", matchScore: 95 },
            { id: "formula_118", name: "易黄汤", matchScore: 70 }
        ],
        relatedConstitutions: ["气虚质", "痰湿质"],
        keyPoints: ["带下量多色白清稀", "面色晄白", "神疲纳少便溏", "舌淡苔白"]
    },
    {
        id: "syn_136",
        name: "急惊风痰热证",
        category: "儿科辨证",
        pattern: "痰热动风证",
        organ: "肝",
        symptoms: ["高热不退", "突然抽搐", "神志昏迷", "喉间痰鸣", "牙关紧闭", "目睛上视", "四肢抽动", "舌红苔黄腻", "脉滑数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄腻" },
        pulseCondition: "脉滑数",
        etiology: "小儿脏腑娇嫩，感受时邪，或乳食不节，痰热内蕴，引动肝风",
        pathogenesis: "热扰心神，痰蒙清窍，热极生风，肝风内动",
        description: "急惊风痰热证为儿科急症，以高热、抽搐、神昏、痰鸣四症并见为特征，属痰热内蕴、热极生风之危候，发病急骤，变化迅速。",
        treatmentPrinciple: "清热豁痰，开窍息风",
        treatmentMethod: "清热化痰，息风开窍",
        recommendedFormulas: [
            { id: "formula_126", name: "抱龙丸", matchScore: 95 },
            { id: "formula_124", name: "健脾丸", matchScore: 60 }
        ],
        relatedConstitutions: ["平和质"],
        keyPoints: ["高热突然抽搐", "神志昏迷", "喉间痰鸣", "舌红苔黄腻", "脉滑数"]
    },
    {
        id: "syn_137",
        name: "脾虚泄泻证",
        category: "儿科辨证",
        pattern: "脾虚证",
        organ: "脾",
        symptoms: ["大便溏薄", "久泻不止", "食后即泻", "面色萎黄", "神疲乏力", "食欲不振", "形体消瘦", "舌淡苔白", "脉弱"],
        tongueAppearance: { tongueBody: "淡胖有齿痕", tongueCoating: "苔白" },
        pulseCondition: "脉弱",
        etiology: "小儿脾胃薄弱，饮食不节，或久病失调，损伤脾胃",
        pathogenesis: "脾胃虚弱，运化失职，水谷不化，清浊不分",
        description: "脾虚泄泻证为儿科常见证候，以大便溏薄、久泻不止、食后即泻为特征，多伴面色萎黄、神疲乏力、食欲不振，属脾胃虚弱、运化失健之候。",
        treatmentPrinciple: "健脾益气，助运止泻",
        treatmentMethod: "健脾和胃，渗湿止泻",
        recommendedFormulas: [
            { id: "formula_124", name: "健脾丸", matchScore: 95 },
            { id: "formula_125", name: "七味白术散", matchScore: 90 }
        ],
        relatedConstitutions: ["气虚质", "痰湿质"],
        keyPoints: ["大便溏薄久泻不止", "面色萎黄", "食欲不振", "舌淡苔白", "脉弱"]
    },
    {
        id: "syn_138",
        name: "食积证",
        category: "儿科辨证",
        pattern: "食滞胃肠证",
        organ: "脾胃",
        symptoms: ["脘腹胀满", "嗳腐吞酸", "不思饮食", "呕吐酸腐", "大便酸臭", "夜卧不宁", "舌苔厚腻", "脉滑"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔厚腻" },
        pulseCondition: "脉滑",
        etiology: "乳食不节，喂养不当，损伤脾胃，运化不及，乳食停滞",
        pathogenesis: "乳食内停，阻滞中焦，气机不利，升降失常",
        description: "食积证为儿科常见脾胃病证，以脘腹胀满、嗳腐吞酸、不思饮食为特征，多伴呕吐酸腐、大便酸臭、夜卧不宁，属乳食内停、中焦阻滞之候。",
        treatmentPrinciple: "消食导滞，和中健脾",
        treatmentMethod: "消食化积，理气和胃",
        recommendedFormulas: [
            { id: "formula_124", name: "健脾丸", matchScore: 90 },
            { id: "formula_125", name: "七味白术散", matchScore: 75 }
        ],
        relatedConstitutions: ["痰湿质"],
        keyPoints: ["脘腹胀满嗳腐吞酸", "不思饮食", "大便酸臭", "舌苔厚腻", "脉滑"]
    },
    {
        id: "syn_139",
        name: "肺热咳嗽证",
        category: "儿科辨证",
        pattern: "肺热证",
        organ: "肺",
        symptoms: ["咳嗽气粗", "痰黄黏稠", "咽痛", "发热", "口渴", "小便黄", "舌红苔黄", "脉滑数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔黄" },
        pulseCondition: "脉滑数",
        etiology: "外感风热，或风寒化热，邪热犯肺，肺失清肃",
        pathogenesis: "热邪犯肺，肺气上逆，炼液为痰",
        description: "肺热咳嗽证为儿科常见病证，以咳嗽气粗、痰黄黏稠为特征，多伴咽痛、发热、口渴，属邪热犯肺、肺失清肃之候。",
        treatmentPrinciple: "清肺泻热，化痰止咳",
        treatmentMethod: "清肺化痰止咳",
        recommendedFormulas: [
            { id: "formula_123", name: "泻白散", matchScore: 95 },
            { id: "formula_106", name: "三子养亲汤", matchScore: 70 }
        ],
        relatedConstitutions: ["平和质"],
        keyPoints: ["咳嗽气粗", "痰黄黏稠", "咽痛口渴", "舌红苔黄", "脉滑数"]
    },
    {
        id: "syn_140",
        name: "鼻渊肺经风热证",
        category: "五官科辨证",
        pattern: "肺经风热证",
        organ: "鼻",
        symptoms: ["鼻塞", "流黄稠涕", "前额头痛", "嗅觉减退", "发热", "咽痛", "舌红苔薄黄", "脉浮数"],
        tongueAppearance: { tongueBody: "边尖红", tongueCoating: "苔薄黄" },
        pulseCondition: "脉浮数",
        etiology: "外感风热，或风寒化热，邪犯肺窍，熏蒸鼻窍",
        pathogenesis: "风热犯肺，肺失清肃，鼻窍壅塞不通",
        description: "鼻渊肺经风热证以鼻塞、流黄稠涕、前额头痛为特征，多伴发热、咽痛，属风热犯肺、鼻窍壅塞之候，常见于急慢性鼻窦炎。",
        treatmentPrinciple: "疏风清热，宣肺通窍",
        treatmentMethod: "疏风散热，通利鼻窍",
        recommendedFormulas: [
            { id: "formula_121", name: "苍耳子散", matchScore: 95 },
            { id: "formula_127", name: "荆防败毒散", matchScore: 70 }
        ],
        relatedConstitutions: ["平和质"],
        keyPoints: ["鼻塞流黄稠涕", "前额头痛", "嗅觉减退", "舌红苔薄黄", "脉浮数"]
    },
    {
        id: "syn_141",
        name: "目赤肝经风热证",
        category: "五官科辨证",
        pattern: "肝经风热证",
        organ: "目",
        symptoms: ["目赤肿痛", "羞明流泪", "目眵多", "头痛", "口苦", "舌红苔薄黄", "脉弦数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "苔薄黄" },
        pulseCondition: "脉弦数",
        etiology: "风热之邪侵袭肝经，或肝火上炎，循经上犯目窍",
        pathogenesis: "肝经风热上扰，气血壅滞目窍",
        description: "目赤肝经风热证以目赤肿痛、羞明流泪为特征，多伴头痛、口苦，属风热犯肝、循经上炎之候，常见于急性结膜炎、角膜炎等。",
        treatmentPrinciple: "疏风清热，清肝明目",
        treatmentMethod: "疏风散热，泻肝明目",
        recommendedFormulas: [
            { id: "formula_122", name: "石决明散", matchScore: 90 },
            { id: "formula_128", name: "金铃子散", matchScore: 70 }
        ],
        relatedConstitutions: ["阴虚质", "平和质"],
        keyPoints: ["目赤肿痛羞明流泪", "头痛口苦", "舌红苔薄黄", "脉弦数"]
    },
    {
        id: "syn_142",
        name: "肺肾阴虚证",
        category: "脏腑辨证",
        pattern: "肺肾阴虚证",
        organ: "肺肾",
        symptoms: ["干咳少痰", "或痰中带血", "潮热盗汗", "五心烦热", "咽干口燥", "腰膝酸软", "舌红少苔", "脉细数"],
        tongueAppearance: { tongueBody: "红", tongueCoating: "少苔或光剥" },
        pulseCondition: "脉细数",
        etiology: "久咳伤肺，或痨虫蚀肺，或热病后期，阴津耗伤，肺肾同病",
        pathogenesis: "肺肾阴虚，虚火内生，肺失滋润，肾失濡养",
        description: "肺肾阴虚证以干咳少痰、潮热盗汗、咽干口燥为特征，多伴腰膝酸软、五心烦热，属肺肾阴虚、虚火内灼之候，常见于慢性咳嗽、肺结核恢复期等。",
        treatmentPrinciple: "滋补肺肾，润燥止咳",
        treatmentMethod: "滋阴润肺，益肾止咳",
        recommendedFormulas: [
            { id: "formula_130", name: "麦味地黄丸", matchScore: 95 },
            { id: "formula_108", name: "一贯煎", matchScore: 75 }
        ],
        relatedConstitutions: ["阴虚质"],
        keyPoints: ["干咳少痰", "潮热盗汗", "咽干口燥", "腰膝酸软", "舌红少苔", "脉细数"]
    }

];

// 挂载到全局
if (typeof window !== 'undefined') {
    window.syndromesDatabase = syndromesDatabase;
}

// ============================================================================
// 数据补齐批次 v3 — 证型辨证机制全覆盖补丁
// 为全部 76 证型补齐 keySymptoms（必见主症）/ contradictions（矛盾互斥），
// 并为面色有辨证意义的证型补充 faceFeatures（取值须来自 FaceRules keywords 词表），
// 特禀质关联、新增方剂引用（数据扩充批次 v3 的 formula_131~170）。
// 采用加载后合并方式，不改动上方原始条目，保证历史数据可追溯。
// ============================================================================
const syndromeEnhancements = {
    "syn_001": { keySymptoms: ["恶寒重", "无汗"], contradictions: ["汗出", "发热重"] },
    "syn_002": { keySymptoms: ["发热重", "咽痛"], contradictions: ["恶寒重", "无汗"] },
    "syn_003": { keySymptoms: ["高热", "口渴喜冷饮"], contradictions: ["畏寒怕冷", "大便溏薄"], faceFeatures: ["面赤"], addFormulas: [{ id: "formula_141", name: "凉膈散", matchScore: 80 }] },
    "syn_004": { keySymptoms: ["畏寒怕冷", "四肢不温"], contradictions: ["高热", "口渴喜冷饮"], faceFeatures: ["面色苍白"], addFormulas: [{ id: "formula_146", name: "黄芪建中汤", matchScore: 78 }] },
    "syn_010": { keySymptoms: ["心悸", "失眠"], contradictions: ["心烦", "五心烦热"], faceFeatures: ["萎黄"], addFormulas: [{ id: "formula_154", name: "甘麦大枣汤", matchScore: 76 }] },
    "syn_011": { keySymptoms: ["心悸", "五心烦热"], contradictions: ["畏寒肢冷", "面色白"], faceFeatures: ["两颧红"], addFormulas: [{ id: "formula_145", name: "黄连阿胶汤", matchScore: 88 }] },
    "syn_020": { keySymptoms: ["胸胁胀痛", "情绪抑郁"], contradictions: ["高热"] },
    "syn_021": { keySymptoms: ["面红目赤", "急躁易怒"], contradictions: ["畏寒怕冷", "面色苍白"], faceFeatures: ["面赤"] },
    "syn_022": { keySymptoms: ["眩晕耳鸣", "头目胀痛"], contradictions: ["畏寒肢冷"], faceFeatures: ["面赤"] },
    "syn_023": { keySymptoms: ["视物模糊", "爪甲不荣"], contradictions: ["面红目赤"], faceFeatures: ["无华"] },
    "syn_024": { keySymptoms: ["胁肋胀痛", "口苦"], contradictions: ["畏寒怕冷"] },
    "syn_030": { keySymptoms: ["食欲不振", "食后胀甚"], contradictions: ["高热", "口渴喜冷饮"], faceFeatures: ["萎黄"] },
    "syn_031": { keySymptoms: ["腹痛喜温喜按", "大便溏薄清稀"], contradictions: ["身热不扬", "口渴喜冷饮"], faceFeatures: ["面色白"] },
    "syn_032": { keySymptoms: ["脘腹痞闷", "口腻纳呆"], contradictions: ["口渴喜冷饮", "身热夜甚"], faceFeatures: ["面色黄"], addFormulas: [{ id: "formula_164", name: "胃苓汤", matchScore: 76 }] },
    "syn_033": { keySymptoms: ["口黏而甜", "大便溏泄不爽"], contradictions: ["畏寒怕冷", "口淡不渴"] },
    "syn_040": { keySymptoms: ["咳嗽无力", "自汗畏风"], contradictions: ["高热", "痰黄黏稠"], faceFeatures: ["面色白"], addConstitutions: ["特禀质"] },
    "syn_041": { keySymptoms: ["干咳无痰", "口燥咽干"], contradictions: ["痰白清稀", "畏寒肢冷"], faceFeatures: ["两颧红"], addFormulas: [{ id: "formula_168", name: "贝母瓜蒌散", matchScore: 78 }] },
    "syn_042": { keySymptoms: ["咳嗽声重", "鼻塞流清涕"], contradictions: ["痰黄黏稠", "咽痛"], addFormulas: [{ id: "formula_167", name: "射干麻黄汤", matchScore: 80 }] },
    "syn_043": { keySymptoms: ["痰黄稠", "发热口渴"], contradictions: ["痰白清稀", "畏寒"], faceFeatures: ["面赤"], addFormulas: [{ id: "formula_144", name: "千金苇茎汤", matchScore: 85 }] },
    "syn_050": { keySymptoms: ["腰膝酸软", "五心烦热"], contradictions: ["畏寒肢冷", "小便清长"], faceFeatures: ["两颧红"], addFormulas: [{ id: "formula_148", name: "知柏地黄丸", matchScore: 88 }] },
    "syn_051": { keySymptoms: ["腰膝酸冷", "畏寒肢冷"], contradictions: ["五心烦热", "潮热盗汗"], faceFeatures: ["面色晄白"], addFormulas: [{ id: "formula_138", name: "济川煎", matchScore: 72 }] },
    "syn_052": { keySymptoms: ["发脱齿摇", "小儿发育迟缓"], contradictions: ["高热"], faceFeatures: ["晦暗"] },
    "syn_053": { keySymptoms: ["小便频数而清", "夜尿频多"], contradictions: ["小便短赤", "潮热盗汗"], addFormulas: [{ id: "formula_152", name: "桑螵蛸散", matchScore: 85 }, { id: "formula_165", name: "萆薢分清饮", matchScore: 76 }] },
    "syn_060": { keySymptoms: ["饥不欲食", "口燥咽干"], contradictions: ["消谷善饥", "口臭"] },
    "syn_061": { keySymptoms: ["消谷善饥", "胃脘灼痛"], contradictions: ["胃脘冷痛", "口淡不渴"], faceFeatures: ["面赤"] },
    "syn_062": { keySymptoms: ["嗳腐吞酸", "厌食呕恶"], contradictions: ["口淡不渴"] },
    "syn_070": { keySymptoms: ["少气懒言", "神疲乏力"], contradictions: ["高热", "烦躁"], faceFeatures: ["面色白"] },
    "syn_071": { keySymptoms: ["面色淡白或萎黄", "头晕眼花"], contradictions: ["面红目赤"], faceFeatures: ["萎黄"] },
    "syn_072": { keySymptoms: ["刺痛拒按", "痛处固定不移"], contradictions: ["面色苍白"], faceFeatures: ["晦暗"], addFormulas: [{ id: "formula_157", name: "桃核承气汤", matchScore: 80 }, { id: "formula_169", name: "复元活血汤", matchScore: 78 }] },
    "syn_073": { keySymptoms: ["少气懒言", "神疲乏力"], contradictions: ["高热"], faceFeatures: ["面色白"] },
    "syn_074": { keySymptoms: ["咳嗽痰多", "肢体困重"], contradictions: ["口渴喜冷饮", "干咳无痰"] },
    "syn_075": { keySymptoms: ["口燥咽干", "唇焦舌燥"], contradictions: ["口淡不渴", "痰白清稀"], faceFeatures: ["少华"] },
    "syn_080": { keySymptoms: ["汗出", "恶风"], contradictions: ["无汗", "恶寒重"] },
    "syn_081": { keySymptoms: ["往来寒热", "胸胁苦满"], contradictions: ["恶寒重", "高热"] },
    "syn_090": { keySymptoms: ["壮热", "烦渴"], contradictions: ["畏寒怕冷", "口淡不渴"], faceFeatures: ["面赤"], addFormulas: [{ id: "formula_140", name: "白虎加人参汤", matchScore: 82 }] },
    "syn_100": { contradictions: ["五心烦热"], faceFeatures: ["面色白"] },
    "syn_101": { faceFeatures: ["面色白"] },
    "syn_102": { contradictions: ["畏寒肢冷", "痰白清稀"], faceFeatures: ["面赤"] },
    "syn_103": { contradictions: ["五心烦热"] },
    "syn_104": { contradictions: ["高热", "身热夜甚"], faceFeatures: ["萎黄"] },
    "syn_105": { contradictions: ["高热"], faceFeatures: ["面色白"] },
    "syn_106": { faceFeatures: ["面色白"] },
    "syn_107": { addFormulas: [{ id: "formula_139", name: "增液承气汤", matchScore: 85 }] },
    "syn_110": { contradictions: ["畏寒肢冷"] },
    "syn_111": { contradictions: ["畏寒肢冷"] },
    "syn_112": { contradictions: ["畏寒肢冷"] },
    "syn_113": { contradictions: ["高热"] },
    "syn_114": { contradictions: ["畏寒肢冷"], faceFeatures: ["两颧红"] },
    "syn_115": { contradictions: ["身热夜甚", "口渴喜冷饮"], faceFeatures: ["面色白"], addFormulas: [{ id: "formula_153", name: "真人养脏汤", matchScore: 80 }] },
    "syn_116": { contradictions: ["高热"], faceFeatures: ["萎黄"] },
    "syn_117": { contradictions: ["畏寒怕冷"], faceFeatures: ["面赤"], addFormulas: [{ id: "formula_159", name: "槐花散", matchScore: 76 }], dangerSignals: ["大量出血"] },
    "syn_118": { addFormulas: [{ id: "formula_162", name: "羌活胜湿汤", matchScore: 76 }] },
    "syn_120": { contradictions: ["关节红肿热痛"], faceFeatures: ["青紫"] },
    "syn_121": { contradictions: ["身热夜甚"], faceFeatures: ["面色白"] },
    "syn_122": { contradictions: ["畏寒怕冷", "口淡不渴"], faceFeatures: ["面色黄"] },
    "syn_123": { contradictions: ["口渴喜冷饮"], faceFeatures: ["晦暗"] },
    "syn_124": { contradictions: ["口渴喜冷饮"], faceFeatures: ["浮肿"], addFormulas: [{ id: "formula_166", name: "五皮饮", matchScore: 82 }, { id: "formula_133", name: "越婢汤", matchScore: 70 }] },
    "syn_125": { contradictions: ["高热", "突然抽搐"], addFormulas: [{ id: "formula_170", name: "大定风珠", matchScore: 90 }] },
    "syn_126": { contradictions: ["畏寒怕冷", "面色苍白"], faceFeatures: ["面赤"], addFormulas: [{ id: "formula_142", name: "泻心汤", matchScore: 78 }] },
    "syn_127": { contradictions: ["痰黄黏稠", "高热"], faceFeatures: ["面色白"] },
    "syn_128": { keySymptoms: ["局部红肿热痛", "疮疡初起"], contradictions: ["畏寒怕冷"], faceFeatures: ["痤疮"] },
    "syn_129": { keySymptoms: ["下肢红肿热痛", "皮肤湿疹"], contradictions: ["畏寒怕冷"], faceFeatures: ["痤疮"], addConstitutions: ["特禀质"] },
    "syn_130": { keySymptoms: ["腹部积块", "固定不移"], contradictions: ["面色苍白"], faceFeatures: ["色斑"], addFormulas: [{ id: "formula_158", name: "大黄䗪虫丸", matchScore: 88 }] },
    "syn_131": { keySymptoms: ["经前或经期小腹冷痛", "经色紫暗有块"], contradictions: ["带下黄臭"], faceFeatures: ["面色青"] },
    "syn_132": { keySymptoms: ["月经后期", "经血量少色淡"], contradictions: ["经色紫暗有块"], faceFeatures: ["面色白"], addFormulas: [{ id: "formula_150", name: "当归芍药散", matchScore: 80 }] },
    "syn_133": { keySymptoms: ["经血非时而下", "色淡质稀"], contradictions: ["经色紫暗有块"], faceFeatures: ["面色白"] },
    "syn_134": { keySymptoms: ["带下量多", "色黄质稠"], contradictions: ["带下量多色白"] },
    "syn_135": { keySymptoms: ["带下量多色白", "纳少便溏"], contradictions: ["带下黄臭"], faceFeatures: ["面色白"] },
    "syn_136": { keySymptoms: ["高热不退", "突然抽搐"], contradictions: ["手足蠕动"], faceFeatures: ["面赤"], dangerSignals: ["高热不退", "神志昏迷"] },
    "syn_137": { keySymptoms: ["久泻不止", "食后即泻"], contradictions: ["大便干结"], faceFeatures: ["萎黄"] },
    "syn_138": { keySymptoms: ["嗳腐吞酸", "大便酸臭"], contradictions: ["口淡不渴"] },
    "syn_139": { keySymptoms: ["咳嗽气粗", "痰黄黏稠"], contradictions: ["痰白清稀"], faceFeatures: ["面赤"] },
    "syn_140": { keySymptoms: ["流黄稠涕", "前额头痛"], contradictions: ["流清涕"] },
    "syn_141": { keySymptoms: ["目赤肿痛", "目眵多"], contradictions: ["两目干涩", "视物模糊"] },
    "syn_142": { keySymptoms: ["干咳少痰", "潮热盗汗"], contradictions: ["痰白清稀", "畏寒肢冷"], faceFeatures: ["两颧红"], addFormulas: [{ id: "formula_148", name: "知柏地黄丸", matchScore: 80 }] }
};

// 合并补丁到证型数据（浏览器与 Node 加载后均生效，校验脚本可直接读取增强后的字段）
syndromesDatabase.forEach(s => {
    const e = syndromeEnhancements[s.id];
    if (!e) return;
    if (e.keySymptoms) s.keySymptoms = e.keySymptoms;
    if (e.contradictions) s.contradictions = e.contradictions;
    if (e.faceFeatures) s.faceFeatures = e.faceFeatures;
    if (e.dangerSignals) s.dangerSignals = e.dangerSignals;
    if (e.addConstitutions) {
        s.relatedConstitutions = s.relatedConstitutions || [];
        e.addConstitutions.forEach(c => { if (!s.relatedConstitutions.includes(c)) s.relatedConstitutions.push(c); });
    }
    if (e.addFormulas) {
        s.recommendedFormulas = s.recommendedFormulas || [];
        e.addFormulas.forEach(f => {
            if (!s.recommendedFormulas.some(x => x.id === f.id)) s.recommendedFormulas.push(f);
        });
    }
});

// Node 导出（供校验/测试脚本使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { syndromesDatabase };
}
