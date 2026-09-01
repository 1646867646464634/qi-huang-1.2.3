/**
 * 岐黄·辅助诊疗系统 — 方剂数据库
 * 包含 223 首经典中医方剂，覆盖 17 大类方剂（2026-08-31 按"十五五"《方剂学》补充 53 首）
 * 数据来源：《方剂学》教材及相关经典医籍
 */

// ============================================================================
// 第一部分：方剂数据
// ============================================================================

const formulasDatabase = [
    // ===================================================================
    // 一、解表剂 — 辛温解表
    // ===================================================================
    {
        id: "formula_001",
        name: "麻黄汤",
        pinyin: "Ma Huang Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "麻黄", dosage: "9g", role: "君药" },
            { herbName: "桂枝", dosage: "6g", role: "臣药" },
            { herbName: "杏仁", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["发汗解表", "宣肺平喘"],
        indications: ["外感风寒表实证", "恶寒发热", "头身疼痛", "无汗而喘", "舌苔薄白", "脉浮紧"],
        analysis: "本方为发汗解表之峻剂。方中麻黄为君，辛温发汗解表，宣肺平喘；桂枝为臣，辛温解肌发表，助麻黄发汗之力；杏仁为佐，降利肺气，止咳平喘，与麻黄相伍一宣一降，调畅肺气；炙甘草为使，调和诸药，兼以和中。四药合用，共奏发汗解表、宣肺平喘之功。",
        keyPoints: ["恶寒发热", "无汗而喘", "脉浮紧"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "喘急较甚", modification: "加苏子、葶苈子以泻肺平喘" },
            { condition: "项背强痛", modification: "加葛根以升津舒筋" }
        ],
        contraindications: ["表虚自汗者禁用", "风热表证者禁用", "出血倾向者慎用"]
    },
    {
        id: "formula_002",
        name: "桂枝汤",
        pinyin: "Gui Zhi Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "桂枝", dosage: "9g", role: "君药" },
            { herbName: "白芍", dosage: "9g", role: "臣药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "6枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["解肌发表", "调和营卫"],
        indications: ["外感风寒表虚证", "头痛发热", "汗出恶风", "鼻鸣干呕", "苔白不渴", "脉浮缓或浮弱"],
        analysis: "本方为群方之冠，调和营卫之祖方。方中桂枝为君，辛甘而温，解肌发表以散外感之风寒；白芍为臣，酸苦微寒，敛阴和营，与桂枝相伍，一散一收，调和营卫；生姜辛温，助桂枝解表，兼和胃止呕；大枣甘平，益气补中，与白芍配伍养阴和营；炙甘草调和诸药，与桂枝辛甘化阳以实卫，与白芍酸甘化阴以和营。",
        keyPoints: ["汗出", "恶风", "脉浮缓", "发热"],
        relatedSyndromes: ["太阳中风证"],
        relatedConstitutions: ["气虚质", "阳虚质"],
        modifications: [
            { condition: "兼喘者", modification: "加厚朴、杏仁（桂枝加厚朴杏子汤）" },
            { condition: "项背强几几", modification: "加葛根（桂枝加葛根汤）" }
        ],
        contraindications: ["表实无汗者禁用", "湿热内蕴者慎用", "饮酒后不宜服用"]
    },
    {
        id: "formula_003",
        name: "小青龙汤",
        pinyin: "Xiao Qing Long Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "麻黄", dosage: "9g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "干姜", dosage: "9g", role: "佐药" },
            { herbName: "细辛", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" }
        ],
        functions: ["解表散寒", "温肺化饮"],
        indications: ["外寒内饮证", "恶寒发热", "头身疼痛", "无汗", "喘咳痰多清稀", "胸膈痞满", "舌苔白滑", "脉浮"],
        analysis: "本方为治外寒内饮之要方。方中麻黄、桂枝为君，发汗解表散寒；干姜、细辛为臣，温肺化饮，助麻黄桂枝以解表；佐以半夏燥湿化痰、和胃降逆，五味子敛肺止咳、防辛散太过，白芍和营养血，与桂枝一散一收，调和营卫；炙甘草为使，益气和中，调和诸药。全方散中寓收、开中有阖，散寒化饮而不伤正。",
        keyPoints: ["恶寒发热", "喘咳", "痰多清稀", "舌苔白滑", "脉浮紧"],
        relatedSyndromes: ["风寒表实证", "水饮内停证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "烦躁口渴", modification: "加石膏（小青龙加石膏汤）" },
            { condition: "喉中痰鸣", modification: "加射干、紫菀、冬花" }
        ],
        contraindications: ["阴虚干咳者禁用", "痰热咳嗽者禁用", "虚喘者慎用"]
    },
    {
        id: "formula_004",
        name: "九味羌活汤",
        pinyin: "Jiu Wei Qiang Huo Tang",
        source: "《此事难知》引张元素方",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "羌活", dosage: "9g", role: "君药" },
            { herbName: "防风", dosage: "9g", role: "臣药" },
            { herbName: "苍术", dosage: "9g", role: "臣药" },
            { herbName: "细辛", dosage: "3g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "白芷", dosage: "6g", role: "佐药" },
            { herbName: "生地黄", dosage: "6g", role: "佐药" },
            { herbName: "黄芩", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["发汗祛湿", "兼清里热"],
        indications: ["外感风寒湿邪，内有蕴热证", "恶寒发热", "无汗", "头痛项强", "肢体酸楚疼痛", "口苦微渴", "舌苔白或微黄", "脉浮"],
        analysis: "本方为四时感冒风寒湿邪之通剂。方中羌活为君，辛苦而温，祛风散寒除湿，通治周身关节疼痛；防风、苍术为臣，助羌活祛风除湿；细辛散寒止痛，川芎活血行气止痛，白芷散寒通窍止痛，三药共为佐使以止头身疼痛；生地黄、黄芩清泄里热，兼制诸药之温燥；甘草调和诸药。全方发表而不伤阴，清热而不碍表。",
        keyPoints: ["恶寒发热", "无汗", "头身疼痛", "口苦微渴", "脉浮"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质", "湿热质"],
        modifications: [
            { condition: "湿重胸满", modification: "去生地黄，加厚朴、枳壳" },
            { condition: "头痛剧", modification: "倍用川芎" }
        ],
        contraindications: ["风热表证者禁用", "阴虚内热者慎用"]
    },

    // ===================================================================
    // 二、解表剂 — 辛凉解表
    // ===================================================================
    {
        id: "formula_005",
        name: "银翘散",
        pinyin: "Yin Qiao San",
        source: "《温病条辨》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "金银花", dosage: "15g", role: "君药" },
            { herbName: "连翘", dosage: "15g", role: "君药" },
            { herbName: "薄荷", dosage: "6g", role: "臣药" },
            { herbName: "牛蒡子", dosage: "9g", role: "臣药" },
            { herbName: "荆芥穗", dosage: "6g", role: "佐药" },
            { herbName: "淡豆豉", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "9g", role: "佐药" },
            { herbName: "竹叶", dosage: "6g", role: "佐药" },
            { herbName: "芦根", dosage: "15g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["辛凉透表", "清热解毒"],
        indications: ["温病初起", "风热感冒", "发热", "微恶风寒", "无汗或有汗不畅", "头痛口渴", "咳嗽咽痛", "舌尖红", "苔薄白或薄黄", "脉浮数"],
        analysis: "本方为辛凉解表之平剂，温病初起之代表方。方中金银花、连翘为君，辛凉透邪清热，芳香辟秽解毒；薄荷、牛蒡子为臣，疏散风热，清利头目咽喉，且助清热解毒；荆芥穗、淡豆豉辛温解表，透邪外出，防银翘过凉之弊；桔梗宣肺利咽，竹叶清心利水，芦根清热生津，共为佐药；甘草调和诸药为使。全方辛凉与辛温并用，透表与清热同施。",
        keyPoints: ["发热重恶寒轻", "咽痛", "口渴", "脉浮数", "舌尖红"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["平和质", "阴虚质"],
        modifications: [
            { condition: "咽喉肿痛甚", modification: "加马勃、玄参" },
            { condition: "口渴甚", modification: "加天花粉" }
        ],
        contraindications: ["风寒感冒者禁用"]
    },
    {
        id: "formula_006",
        name: "桑菊饮",
        pinyin: "Sang Ju Yin",
        source: "《温病条辨》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "桑叶", dosage: "12g", role: "君药" },
            { herbName: "菊花", dosage: "9g", role: "臣药" },
            { herbName: "薄荷", dosage: "6g", role: "臣药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "9g", role: "佐药" },
            { herbName: "杏仁", dosage: "9g", role: "佐药" },
            { herbName: "芦根", dosage: "12g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["疏风清热", "宣肺止咳"],
        indications: ["风温初起证", "风热咳嗽证", "但咳", "身热不甚", "口微渴", "舌苔薄白", "脉浮数"],
        analysis: "本方为治风热咳嗽之常用方。方中桑叶为君，疏风散热，清肺止咳；菊花、薄荷为臣，疏散风热，清利头目；连翘清热解毒，桔梗宣肺祛痰利咽，杏仁降利肺气止咳，芦根清热生津止渴，共为佐药；甘草调和诸药为使，兼能化痰止咳。全方辛凉轻清，宣肺止咳为主，清热解毒之力较银翘散为轻。",
        keyPoints: ["咳嗽", "身热不甚", "口微渴", "脉浮数"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["阴虚质", "平和质"],
        modifications: [
            { condition: "咳痰黄稠", modification: "加黄芩、瓜蒌" },
            { condition: "口渴甚", modification: "加天花粉、知母" }
        ],
        contraindications: ["风寒咳嗽者禁用", "肺寒咳嗽者慎用"]
    },
    {
        id: "formula_007",
        name: "麻黄杏仁甘草石膏汤",
        pinyin: "Ma Xing Shi Gan Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "麻黄", dosage: "9g", role: "君药" },
            { herbName: "石膏", dosage: "24g", role: "臣药" },
            { herbName: "杏仁", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["辛凉宣泄", "清肺平喘"],
        indications: ["表邪入里化热壅肺证", "身热不解", "咳逆气急", "甚则鼻煽", "口渴", "有汗或无汗", "舌苔薄白或薄黄", "脉浮数或滑数"],
        analysis: "本方为清宣肺热之祖方。方中麻黄为君，辛温宣肺平喘，且兼解表透邪；石膏为臣，辛甘大寒，清泄肺热，与麻黄相伍，一辛温一辛寒，相辅相成，增强宣肺泄热之功，且石膏倍于麻黄，制其辛温之性而存宣肺之用；杏仁为佐，宣降肺气，止咳平喘，助麻黄平喘之力；甘草为使，调和诸药，益气和中。全方寒温并用，清宣相合。",
        keyPoints: ["身热喘咳", "口渴", "脉浮数滑数", "舌红苔黄"],
        relatedSyndromes: ["痰热壅肺证"],
        relatedConstitutions: ["平和质", "痰湿质", "阴虚质"],
        modifications: [
            { condition: "痰多黄稠", modification: "加瓜蒌、黄芩、贝母" },
            { condition: "壮热烦渴", modification: "加知母、天花粉" }
        ],
        contraindications: ["风寒喘咳者禁用"]
    },

    // ===================================================================
    // 三、泻下剂 — 寒下剂
    // ===================================================================
    {
        id: "formula_008",
        name: "大承气汤",
        pinyin: "Da Cheng Qi Tang",
        source: "《伤寒论》",
        category: "泻下剂",
        subcategory: "寒下剂",
        composition: [
            { herbName: "大黄", dosage: "12g", role: "君药" },
            { herbName: "芒硝", dosage: "9g", role: "臣药" },
            { herbName: "厚朴", dosage: "12g", role: "佐药" },
            { herbName: "枳实", dosage: "12g", role: "佐药" }
        ],
        functions: ["峻下热结"],
        indications: ["阳明腑实证", "大便不通", "频转矢气", "脘腹痞满", "腹痛拒按", "按之硬", "甚或潮热谵语", "舌苔焦黄起刺或焦黑燥裂", "脉沉实"],
        analysis: "本方为峻下热结之代表方，寒下峻剂。方中大黄为君，苦寒泻热通便，荡涤肠胃积滞；芒硝为臣，咸寒软坚润燥，助大黄泻下热结；厚朴为佐，苦温宽肠下气，除满消胀；枳实为佐，苦辛微寒破气消积，助厚朴行气散结。四药合用，大黄、芒硝泻热荡积以治燥实，厚朴、枳实行气消痞以治痞满，共成攻下热结之峻剂。",
        keyPoints: ["痞", "满", "燥", "实", "苔焦黄", "脉沉实"],
        relatedSyndromes: ["实热证"],
        relatedConstitutions: ["平和质", "湿热质"],
        modifications: [
            { condition: "无燥结", modification: "去芒硝（小承气汤）" },
            { condition: "痞满为主", modification: "去芒硝，加甘草（调胃承气汤）" }
        ],
        contraindications: ["孕妇禁用", "气虚便秘者禁用", "阴虚便秘者禁用", "表证未解者禁用"]
    },
    {
        id: "formula_009",
        name: "大黄牡丹汤",
        pinyin: "Da Huang Mu Dan Tang",
        source: "《金匮要略》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "大黄", dosage: "12g", role: "君药" },
            { herbName: "牡丹皮", dosage: "9g", role: "臣药" },
            { herbName: "桃仁", dosage: "12g", role: "臣药" },
            { herbName: "冬瓜仁", dosage: "30g", role: "佐药" },
            { herbName: "芒硝", dosage: "9g", role: "佐药" }
        ],
        functions: ["泻热破瘀", "散结消肿"],
        indications: ["肠痈初起", "右下腹疼痛拒按", "右足屈而不伸", "时时发热", "自汗恶寒", "舌苔薄腻微黄", "脉滑数"],
        analysis: "本方为治肠痈之祖方。方中大黄为君，泻热通便、逐瘀攻积；牡丹皮为臣，清热凉血、活血散瘀，与大黄相伍，共治肠中瘀热互结；桃仁破血祛瘀，助大黄、牡丹皮活血消肿，冬瓜仁清热利湿、消痈排脓，为治肠痈要药，芒硝咸寒软坚，助大黄泻下热结，共为佐药。全方泻热逐瘀并用，消散肠中瘀热壅结。",
        keyPoints: ["右下腹疼痛拒按", "发热恶寒", "苔薄黄", "脉滑数"],
        relatedSyndromes: ["湿热蕴结证"],
        relatedConstitutions: ["湿热质", "血瘀质"],
        modifications: [
            { condition: "脓未成", modification: "加强泻下活血之力" },
            { condition: "高热不退", modification: "加金银花、蒲公英、败酱草" }
        ],
        contraindications: ["肠痈已溃破者禁用", "孕妇禁用", "老人体弱者慎用"]
    },

    // ===================================================================
    // 四、泻下剂 — 温下剂/润下剂
    // ===================================================================
    {
        id: "formula_010",
        name: "温脾汤",
        pinyin: "Wen Pi Tang",
        source: "《备急千金要方》",
        category: "泻下剂",
        subcategory: "温下剂",
        composition: [
            { herbName: "大黄", dosage: "12g", role: "君药" },
            { herbName: "附子", dosage: "9g", role: "臣药" },
            { herbName: "干姜", dosage: "9g", role: "臣药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["温补脾阳", "攻下寒积"],
        indications: ["脾阳不足，寒积内停证", "腹痛便秘", "脐下绞痛", "手足不温", "口不渴", "舌淡苔白", "脉沉弦而迟"],
        analysis: "本方为温下寒积之代表方。方中大黄为君，泻下通便以荡涤积滞；附子、干姜为臣，大辛大热，温中助阳以散寒凝，使大黄去其寒性而存其泻下之力；人参为佐，益气健脾，扶正以助祛邪，防大黄、附子攻伐太过而伤正；甘草为使，调和诸药，与干姜、人参相伍，益气温中。全方温中与攻下并施，寓补于攻之中。",
        keyPoints: ["腹痛便秘", "手足不温", "脉沉弦", "舌淡苔白"],
        relatedSyndromes: ["脾阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "腹痛甚", modification: "加肉桂、木香" },
            { condition: "腹胀", modification: "加厚朴、莱菔子" }
        ],
        contraindications: ["热结便秘者禁用", "阴虚便秘者禁用"]
    },
    {
        id: "formula_011",
        name: "麻子仁丸",
        pinyin: "Ma Zi Ren Wan",
        source: "《伤寒论》",
        category: "泻下剂",
        subcategory: "润下剂",
        composition: [
            { herbName: "火麻仁", dosage: "30g", role: "君药" },
            { herbName: "杏仁", dosage: "12g", role: "臣药" },
            { herbName: "白芍", dosage: "12g", role: "臣药" },
            { herbName: "大黄", dosage: "9g", role: "佐药" },
            { herbName: "厚朴", dosage: "9g", role: "佐药" },
            { herbName: "枳实", dosage: "9g", role: "佐药" },
            { herbName: "蜂蜜", dosage: "为丸", role: "使药" }
        ],
        functions: ["润肠泄热", "行气通便"],
        indications: ["脾约证", "大便干结", "小便频数", "脘腹胀满", "舌红苔微黄少津", "脉数"],
        analysis: "本方为润下缓剂，治肠胃燥热、津液不足之脾约便秘。方中火麻仁为君，甘平质润多脂，润肠通便；杏仁为臣，降气润肠，白芍酸甘养阴和血，助火麻仁润燥通便；大黄泄热通便，厚朴行气除满，枳实破气消积，共为佐药，助通便之力但不峻猛；蜂蜜为使，润燥滑肠，调和诸药。全方润而不峻，攻补兼施。",
        keyPoints: ["大便干结", "小便频数", "舌红苔少"],
        relatedSyndromes: ["肠燥津亏证"],
        relatedConstitutions: ["阴虚质", "气虚质"],
        modifications: [
            { condition: "津伤严重", modification: "加生地黄、玄参、麦冬" },
            { condition: "痔疮便秘", modification: "加桃仁、当归" }
        ],
        contraindications: ["孕妇慎用", "气虚下陷之便秘者禁用"]
    },

    // ===================================================================
    // 五、和解剂 — 和解少阳
    // ===================================================================
    {
        id: "formula_012",
        name: "小柴胡汤",
        pinyin: "Xiao Chai Hu Tang",
        source: "《伤寒论》",
        category: "和解剂",
        subcategory: "和解少阳剂",
        composition: [
            { herbName: "柴胡", dosage: "24g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "6枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["和解少阳"],
        indications: ["伤寒少阳证", "往来寒热", "胸胁苦满", "默默不欲饮食", "心烦喜呕", "口苦咽干", "目眩", "舌苔薄白", "脉弦"],
        analysis: "本方为和解少阳之代表方，伤寒少阳病之专方。方中柴胡为君，苦平而散，透达少阳之邪，疏解少阳经气郁滞；黄芩为臣，苦寒清泄少阳之热，与柴胡相伍，一散一清，共解少阳之邪；半夏、生姜和胃降逆止呕，人参、大枣益气健脾扶正，四药共为佐药，扶正祛邪；甘草为使，调和诸药，兼能和中。全方寒温并用，升降协调，扶正祛邪。",
        keyPoints: ["往来寒热", "胸胁苦满", "口苦咽干", "脉弦"],
        relatedSyndromes: ["少阳病证"],
        relatedConstitutions: ["气郁质", "平和质"],
        modifications: [
            { condition: "胸中烦不呕", modification: "去半夏、人参，加瓜蒌实" },
            { condition: "口渴", modification: "去半夏，加天花粉" }
        ],
        contraindications: ["阴虚血少者慎用"]
    },
    {
        id: "formula_013",
        name: "蒿芩清胆汤",
        pinyin: "Hao Qin Qing Dan Tang",
        source: "《重订通俗伤寒论》",
        category: "和解剂",
        subcategory: "和解少阳剂",
        composition: [
            { herbName: "青蒿", dosage: "12g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "竹茹", dosage: "12g", role: "佐药" },
            { herbName: "枳壳", dosage: "9g", role: "佐药" },
            { herbName: "半夏", dosage: "6g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "赤茯苓", dosage: "12g", role: "佐药" },
            { herbName: "碧玉散", dosage: "12g", role: "佐药" }
        ],
        functions: ["清胆利湿", "和胃化痰"],
        indications: ["少阳湿热证", "寒热如疟", "寒轻热重", "口苦胸闷", "吐酸苦水", "或呕黄涎而粘", "胸胁胀痛", "舌红苔白腻或黄腻", "脉数而右滑左弦"],
        analysis: "本方为治少阳湿热痰浊之方。方中青蒿为君，苦寒芳香，清透少阳邪热，且能化湿辟秽；黄芩为臣，苦寒清泄胆腑邪热，与青蒿相合，清胆泄热之力更著；竹茹清胆胃之热、化痰止呕，枳壳宽中下气除满，半夏燥湿化痰降逆，陈皮理气和胃化痰，赤茯苓、碧玉散清热利湿引邪从小便出，共为佐药。全方清胆与和胃并用，利湿与化痰兼顾。",
        keyPoints: ["寒轻热重", "口苦吐酸", "胸胁胀痛", "舌红苔黄腻"],
        relatedSyndromes: ["胆郁痰扰证"],
        relatedConstitutions: ["湿热质", "痰湿质"],
        modifications: [
            { condition: "呕多", modification: "倍半夏，加黄连" },
            { condition: "黄疸", modification: "加茵陈、栀子" }
        ],
        contraindications: ["寒湿证者禁用", "阴虚内热者慎用"]
    },

    // ===================================================================
    // 六、和解剂 — 调和肝脾/调和肠胃
    // ===================================================================
    {
        id: "formula_014",
        name: "逍遥散",
        pinyin: "Xiao Yao San",
        source: "《太平惠民和剂局方》",
        category: "和解剂",
        subcategory: "调和肝脾剂",
        composition: [
            { herbName: "柴胡", dosage: "9g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "薄荷", dosage: "3g", role: "佐药" },
            { herbName: "烧生姜", dosage: "3g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["疏肝解郁", "健脾养血"],
        indications: ["肝郁脾虚血弱证", "两胁胀痛", "头痛目眩", "口燥咽干", "神疲食少", "月经不调", "乳房胀痛", "脉弦而虚"],
        analysis: "本方为疏肝解郁之名方，治肝郁脾虚血弱之要方。方中柴胡为君，疏肝解郁，条达肝气；当归、白芍为臣，养血柔肝，与柴胡一疏一养，使肝气条达而不伤阴血；白术、茯苓健脾益气以实土防肝乘，薄荷少许可散肝郁所生之热，烧生姜温中和胃，共为佐药；甘草为使，调和诸药，与白芍配伍缓急止痛。全方疏养并用，肝脾同调。",
        keyPoints: ["两胁胀痛", "神疲食少", "月经不调", "脉弦虚"],
        relatedSyndromes: ["肝郁脾虚证", "肝气郁结证"],
        relatedConstitutions: ["气郁质", "气虚质"],
        modifications: [
            { condition: "肝郁化热", modification: "加牡丹皮、栀子（丹栀逍遥散）" },
            { condition: "血虚甚", modification: "加熟地黄" }
        ],
        contraindications: ["阴虚阳亢者慎用"]
    },
    {
        id: "formula_015",
        name: "痛泻要方",
        pinyin: "Tong Xie Yao Fang",
        source: "《丹溪心法》",
        category: "和解剂",
        subcategory: "调和肝脾剂",
        composition: [
            { herbName: "白术", dosage: "12g", role: "君药" },
            { herbName: "白芍", dosage: "12g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "佐药" },
            { herbName: "防风", dosage: "6g", role: "使药" }
        ],
        functions: ["补脾柔肝", "祛湿止泻"],
        indications: ["脾虚肝旺之痛泻证", "肠鸣腹痛", "大便泄泻", "泻必腹痛", "泻后痛减", "舌苔薄白", "脉两关不调、左弦而右缓"],
        analysis: "本方为治脾虚肝旺腹痛泄泻之专方。方中白术为君，甘苦而温，健脾燥湿止泻；白芍为臣，酸寒柔肝，缓急止痛，与白术相配，土中泻木，肝脾同调；陈皮为佐，理气和中，燥湿醒脾；防风为使，辛散肝气、舒脾升清，且能胜湿止泻。四药配伍，补脾柔肝、祛湿止泻，使脾健肝柔则痛泻自止。",
        keyPoints: ["痛泻", "泻后痛减", "脉左弦右缓"],
        relatedSyndromes: ["肝郁脾虚证"],
        relatedConstitutions: ["气郁质", "气虚质"],
        modifications: [
            { condition: "久泻不止", modification: "加升麻、赤石脂" },
            { condition: "夹食滞", modification: "加山楂、神曲" }
        ],
        contraindications: ["湿热泻痢者禁用", "伤食泻者慎用"]
    },
    {
        id: "formula_016",
        name: "半夏泻心汤",
        pinyin: "Ban Xia Xie Xin Tang",
        source: "《伤寒论》",
        category: "和解剂",
        subcategory: "调和肠胃剂",
        composition: [
            { herbName: "半夏", dosage: "12g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "黄连", dosage: "3g", role: "臣药" },
            { herbName: "干姜", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "6枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["寒热平调", "散结消痞"],
        indications: ["寒热错杂之痞证", "心下痞满", "但满不痛", "恶心呕吐", "肠鸣下利", "舌苔腻微黄", "脉弦数"],
        analysis: "本方为治中虚寒热错杂、升降失常而心下痞满之代表方。方中半夏为君，辛苦而温，散结消痞、降逆止呕；黄芩、黄连为臣，苦寒泄热除痞；干姜为佐，辛热温中散寒，与芩、连寒热并用、辛开苦降；人参、大枣益气健脾以补中虚，助脾胃升降之枢机；甘草为使，调和诸药，兼以补中。全方寒热并用，辛开苦降，补泻兼施。",
        keyPoints: ["心下痞满", "但满不痛", "呕而肠鸣", "下利"],
        relatedSyndromes: ["脾气虚证"],
        relatedConstitutions: ["湿热质", "气虚质"],
        modifications: [
            { condition: "水气痞", modification: "减黄芩，加生姜（生姜泻心汤）" },
            { condition: "胃虚甚", modification: "倍甘草（甘草泻心汤）" }
        ],
        contraindications: ["纯实无虚者慎用", "纯寒无热者禁用"]
    },

    // ===================================================================
    // 七、清热剂 — 清气分热
    // ===================================================================
    {
        id: "formula_017",
        name: "白虎汤",
        pinyin: "Bai Hu Tang",
        source: "《伤寒论》",
        category: "清热剂",
        subcategory: "清气分热剂",
        composition: [
            { herbName: "石膏", dosage: "50g", role: "君药" },
            { herbName: "知母", dosage: "18g", role: "臣药" },
            { herbName: "粳米", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清热生津"],
        indications: ["阳明气分热盛证", "壮热面赤", "烦渴引饮", "汗出恶热", "脉洪大有力"],
        analysis: "本方为清阳明气分热盛之祖方和代表方。方中石膏为君，辛甘大寒，直清阳明气分之壮热；知母为臣，苦寒质润，清热养阴，助石膏清热生津；粳米为佐，益胃护津，防石膏、知母大寒伤中；甘草为使，调和诸药，助粳米和中。四药合用，清透气分大热与滋养阴液并行，使热清津复、烦渴自解。",
        keyPoints: ["四大", "大热", "大汗", "大渴", "脉洪大"],
        relatedSyndromes: ["气分热盛证"],
        relatedConstitutions: ["平和质", "阴虚质"],
        modifications: [
            { condition: "气津两伤", modification: "加人参（白虎加人参汤）" },
            { condition: "身重", modification: "加苍术（白虎加苍术汤）" }
        ],
        contraindications: ["表证未解者禁用", "血虚发热者禁用", "真寒假热者禁用"]
    },
    {
        id: "formula_018",
        name: "竹叶石膏汤",
        pinyin: "Zhu Ye Shi Gao Tang",
        source: "《伤寒论》",
        category: "清热剂",
        subcategory: "清气分热剂",
        composition: [
            { herbName: "竹叶", dosage: "12g", role: "君药" },
            { herbName: "石膏", dosage: "30g", role: "臣药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "麦冬", dosage: "12g", role: "佐药" },
            { herbName: "半夏", dosage: "6g", role: "佐药" },
            { herbName: "粳米", dosage: "12g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清热生津", "益气和胃"],
        indications: ["伤寒、温热、暑病余热未清，气阴两伤证", "身热多汗", "心胸烦闷", "气逆欲呕", "口干喜饮", "虚烦不寐", "舌红少苔", "脉虚数"],
        analysis: "本方为清补之剂，由白虎汤化裁而来，治热病后期余热未清、气阴两伤。方中竹叶为君，甘淡而寒，清热除烦；石膏为臣，辛甘大寒，直清气分余热；人参、麦冬益气养阴生津，半夏降逆止呕，粳米益胃和中，共为佐药；甘草为使，调和诸药。全方清热与益气养阴并用，使余热得清、气阴得复。",
        keyPoints: ["身热多汗", "虚烦不寐", "气逆欲呕", "舌红少苔", "脉虚数"],
        relatedSyndromes: ["气阴两虚证"],
        relatedConstitutions: ["阴虚质", "气虚质"],
        modifications: [
            { condition: "口渴甚", modification: "加天花粉、石斛" },
            { condition: "胃阴不足", modification: "加沙参、玉竹" }
        ],
        contraindications: ["实热证者慎用", "阳虚者禁用"]
    },

    // ===================================================================
    // 八、清热剂 — 清营凉血/清热解毒
    // ===================================================================
    {
        id: "formula_019",
        name: "清营汤",
        pinyin: "Qing Ying Tang",
        source: "《温病条辨》",
        category: "清热剂",
        subcategory: "清营凉血剂",
        composition: [
            { herbName: "水牛角", dosage: "30g", role: "君药" },
            { herbName: "生地黄", dosage: "15g", role: "臣药" },
            { herbName: "玄参", dosage: "9g", role: "臣药" },
            { herbName: "麦冬", dosage: "9g", role: "臣药" },
            { herbName: "金银花", dosage: "9g", role: "佐药" },
            { herbName: "连翘", dosage: "6g", role: "佐药" },
            { herbName: "竹叶", dosage: "3g", role: "佐药" },
            { herbName: "丹参", dosage: "6g", role: "佐药" },
            { herbName: "黄连", dosage: "5g", role: "佐药" }
        ],
        functions: ["清营解毒", "透热养阴"],
        indications: ["热入营分证", "身热夜甚", "心烦不寐", "神昏谵语", "斑疹隐隐", "口渴或不渴", "舌绛而干", "脉细数"],
        analysis: "本方为治热入营分之代表方。方中犀角（现用水牛角代）为君，咸寒清营凉血解毒；生地黄、玄参、麦冬为臣，甘寒清热凉血、养阴生津；金银花、连翘、竹叶轻清宣透，使营分之热有外达之路，寓「透热转气」之意，黄连清心泻火，丹参凉血活血，共为佐药。全方清营解毒、透热养阴，使入营之热透出气分而解。",
        keyPoints: ["身热夜甚", "心烦不寐", "神昏谵语", "舌绛而干", "脉细数"],
        relatedSyndromes: ["热入营分证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "神昏谵语重", modification: "加紫雪丹或安宫牛黄丸" },
            { condition: "斑疹透露", modification: "加紫草、大青叶" }
        ],
        contraindications: ["舌苔白滑者禁用（湿邪内阻）"]
    },
    {
        id: "formula_020",
        name: "犀角地黄汤",
        pinyin: "Xi Jiao Di Huang Tang",
        source: "《外台秘要》引《小品方》",
        category: "清热剂",
        subcategory: "清营凉血剂",
        composition: [
            { herbName: "水牛角", dosage: "30g", role: "君药" },
            { herbName: "生地黄", dosage: "30g", role: "臣药" },
            { herbName: "赤芍", dosage: "12g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" }
        ],
        functions: ["清热解毒", "凉血散瘀"],
        indications: ["热入血分证", "身热谵语", "斑色紫黑", "吐血衄血", "尿血便血", "舌绛起刺", "脉细数"],
        analysis: "本方为治热入血分、热盛动血之要方。方中犀角（水牛角代）为君，咸寒凉血解毒，直清血分之热毒；生地黄为臣，甘寒凉血养阴，助犀角清解血分热毒，又能滋阴复其已伤之阴血；赤芍、牡丹皮为佐，凉血活血散瘀，防热与血结。四药合用，凉血与散血并用，使热清血宁而无留瘀之弊。",
        keyPoints: ["斑色紫黑", "出血", "舌绛起刺", "脉细数"],
        relatedSyndromes: ["血热证"],
        relatedConstitutions: ["血瘀质", "阴虚质"],
        modifications: [
            { condition: "吐血重", modification: "加侧柏叶、白茅根" },
            { condition: "神昏重", modification: "送服安宫牛黄丸" }
        ],
        contraindications: ["阳虚失血者禁用", "脾不统血者禁用"]
    },
    {
        id: "formula_021",
        name: "黄连解毒汤",
        pinyin: "Huang Lian Jie Du Tang",
        source: "《外台秘要》引崔氏方",
        category: "清热剂",
        subcategory: "清热解毒剂",
        composition: [
            { herbName: "黄连", dosage: "9g", role: "君药" },
            { herbName: "黄芩", dosage: "6g", role: "臣药" },
            { herbName: "黄柏", dosage: "6g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" }
        ],
        functions: ["泻火解毒"],
        indications: ["三焦火毒热盛证", "大热烦躁", "口燥咽干", "错语不眠", "热病吐衄", "热甚发斑", "外科痈疡疔毒", "小便黄赤", "舌红苔黄", "脉数有力"],
        analysis: "本方为清热解毒之基础方，治三焦火毒壅盛证。方中黄连为君，苦寒清心泻火，兼泻中焦之火；黄芩为臣，苦寒清上焦肺火；黄柏为臣，苦寒泻下焦之火；栀子为佐，苦寒通泻三焦之火，导热下行从小便而出。四药合用，三焦同清，表里兼顾，使火邪去而热毒解。全方纯泻无补，力专效宏。",
        keyPoints: ["三焦火毒", "烦躁错语", "吐衄发斑", "舌红苔黄", "脉数有力"],
        relatedSyndromes: ["实热证"],
        relatedConstitutions: ["湿热质", "湿热质"],
        modifications: [
            { condition: "便秘", modification: "加大黄" },
            { condition: "发黄", modification: "加茵陈、大黄" }
        ],
        contraindications: ["非实火者禁用", "脾胃虚寒者禁用"]
    },
    {
        id: "formula_022",
        name: "普济消毒饮",
        pinyin: "Pu Ji Xiao Du Yin",
        source: "《东垣试效方》",
        category: "清热剂",
        subcategory: "清热解毒剂",
        composition: [
            { herbName: "黄芩", dosage: "15g", role: "君药" },
            { herbName: "黄连", dosage: "15g", role: "君药" },
            { herbName: "牛蒡子", dosage: "6g", role: "臣药" },
            { herbName: "连翘", dosage: "6g", role: "臣药" },
            { herbName: "薄荷", dosage: "6g", role: "臣药" },
            { herbName: "僵蚕", dosage: "6g", role: "臣药" },
            { herbName: "板蓝根", dosage: "6g", role: "佐药" },
            { herbName: "马勃", dosage: "6g", role: "佐药" },
            { herbName: "玄参", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "柴胡", dosage: "6g", role: "使药" },
            { herbName: "升麻", dosage: "6g", role: "使药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "生甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清热解毒", "疏风散邪"],
        indications: ["大头瘟（风热疫毒壅于上焦）", "头面红肿焮痛", "咽喉不利", "目不能开", "舌燥口渴", "恶寒发热", "舌红苔薄白或微黄", "脉浮数有力"],
        analysis: "本方为治风热疫毒壅于上焦之大头瘟名方。方中黄芩、黄连为君，苦寒直折上焦热毒；牛蒡子、连翘、薄荷、僵蚕辛凉疏散风热，共为臣药，四药轻清上浮，升散郁火；板蓝根、马勃清热解毒利咽，玄参清热养阴，桔梗宣肺利咽，陈皮理气散结，共为佐药；升麻、柴胡升散郁热兼引药上达，甘草调和诸药，共为使药。全方清散并用，以清为主。",
        keyPoints: ["头面红肿焮痛", "恶寒发热", "咽喉不利", "脉浮数"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["平和质", "阴虚质"],
        modifications: [
            { condition: "表证已解", modification: "去薄荷、柴胡" },
            { condition: "大便秘结", modification: "加大黄" }
        ],
        contraindications: ["非风热疫毒所致头面肿痛者禁用"]
    },

    // ===================================================================
    // 九、清热剂 — 清脏腑热/清虚热
    // ===================================================================
    {
        id: "formula_023",
        name: "龙胆泻肝汤",
        pinyin: "Long Dan Xie Gan Tang",
        source: "《医方集解》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "龙胆草", dosage: "9g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "臣药" },
            { herbName: "泽泻", dosage: "12g", role: "佐药" },
            { herbName: "木通", dosage: "9g", role: "佐药" },
            { herbName: "车前子", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "生地黄", dosage: "12g", role: "佐药" },
            { herbName: "柴胡", dosage: "9g", role: "使药" },
            { herbName: "生甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清泻肝胆实火", "清利肝胆湿热"],
        indications: ["肝胆实火上炎证", "肝胆湿热下注证", "头痛目赤", "胁痛口苦", "耳聋耳肿", "阴肿阴痒", "带下黄臭", "小便淋浊", "舌红苔黄腻", "脉弦数有力"],
        analysis: "本方为清泻肝胆实火湿热之代表方。方中龙胆草为君，大苦大寒，直泻肝胆实火，兼清下焦湿热；黄芩、栀子为臣，苦寒清热泻火，助龙胆草清泄肝胆之火；泽泻、木通、车前子清热利湿，使湿热从小便而出，当归、生地黄滋阴养血，防苦寒伤阴、使邪去而不伤正，柴胡疏肝引经，共为佐药；甘草为使，调和诸药。全方清泻与渗利并用，标本兼顾。",
        keyPoints: ["胁痛口苦", "目赤耳聋", "舌红苔黄腻", "脉弦数有力"],
        relatedSyndromes: ["肝火上炎证", "肝胆湿热证"],
        relatedConstitutions: ["湿热质", "气郁质"],
        modifications: [
            { condition: "目赤甚", modification: "加菊花、夏枯草" },
            { condition: "胁痛甚", modification: "加川楝子、延胡索" }
        ],
        contraindications: ["脾胃虚寒者禁用", "阴虚火旺者慎用"]
    },
    {
        id: "formula_024",
        name: "青蒿鳖甲汤",
        pinyin: "Qing Hao Bie Jia Tang",
        source: "《温病条辨》",
        category: "清热剂",
        subcategory: "清虚热剂",
        composition: [
            { herbName: "青蒿", dosage: "9g", role: "君药" },
            { herbName: "鳖甲", dosage: "15g", role: "君药" },
            { herbName: "生地黄", dosage: "12g", role: "臣药" },
            { herbName: "知母", dosage: "9g", role: "臣药" },
            { herbName: "牡丹皮", dosage: "9g", role: "臣药" }
        ],
        functions: ["养阴透热"],
        indications: ["温病后期，邪伏阴分证", "夜热早凉", "热退无汗", "舌红少苔", "脉细数"],
        analysis: "本方为治温病后期阴虚邪伏之代表方。方中青蒿、鳖甲共为君药，青蒿苦寒芳香，清热透络，引邪外出；鳖甲咸寒滋阴，直入阴分，入络搜邪。两药相伍，有「先入后出」之妙——鳖甲引青蒿入阴分以搜邪，青蒿领邪气出阳分而解。生地黄、知母养阴清热，牡丹皮凉血散瘀，共为臣佐。全方养阴与透邪并举，使阴复而邪无所藏。",
        keyPoints: ["夜热早凉", "热退无汗", "舌红少苔", "脉细数"],
        relatedSyndromes: ["肾阴虚证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "阴虚甚", modification: "加麦冬、玄参" },
            { condition: "咳嗽", modification: "加川贝母、沙参" }
        ],
        contraindications: ["实热证者禁用", "邪在气分者禁用"]
    },

    // ===================================================================
    // 十、温里剂 — 温中祛寒
    // ===================================================================
    {
        id: "formula_025",
        name: "理中丸",
        pinyin: "Li Zhong Wan",
        source: "《伤寒论》",
        category: "温里剂",
        subcategory: "温中祛寒剂",
        composition: [
            { herbName: "干姜", dosage: "9g", role: "君药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["温中祛寒", "健脾益气"],
        indications: ["中焦虚寒证", "脘腹冷痛", "喜温喜按", "呕吐便溏", "自利不渴", "畏寒肢冷", "舌淡苔白", "脉沉细"],
        analysis: "本方为温中祛寒之基础方。方中干姜为君，大辛大热，温中祛寒，扶阳抑阴；人参为臣，甘温益气健脾，助干姜振奋脾阳；白术为佐，甘苦而温，健脾燥湿，助人参培补后天之本；炙甘草为使，益气和中，调和诸药。四药合用，温补并行，以温为主，使中焦之寒得散、阳气来复，脾胃健运。",
        keyPoints: ["脘腹冷痛", "喜温喜按", "自利不渴", "畏寒肢冷", "舌淡苔白"],
        relatedSyndromes: ["脾阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "寒重痛剧", modification: "加附子、肉桂" },
            { condition: "兼痰饮", modification: "加茯苓、半夏（理中化痰丸）" }
        ],
        contraindications: ["实热证者禁用", "阴虚内热者禁用"]
    },
    {
        id: "formula_026",
        name: "小建中汤",
        pinyin: "Xiao Jian Zhong Tang",
        source: "《伤寒论》",
        category: "温里剂",
        subcategory: "温中祛寒剂",
        composition: [
            { herbName: "饴糖", dosage: "30g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "18g", role: "臣药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "6枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["温中补虚", "缓急止痛"],
        indications: ["虚劳里急证", "腹中时痛", "喜温喜按", "心悸虚烦", "面色无华", "四肢酸楚", "咽干口燥", "舌淡苔白", "脉细弦"],
        analysis: "本方为桂枝汤倍白芍加饴糖而成，变解表方为温中补虚之方。方中饴糖为君，甘温质润，温中补虚、缓急止痛；桂枝为臣，辛甘而温，温助阳气，与饴糖合用辛甘化阳以建中阳；白芍用量倍于桂枝，酸甘养阴、柔肝缓急止痛，与饴糖酸甘化阴以滋营血；生姜温胃散寒，大枣补脾益气，共为佐药；甘草为使，调和诸药。全方以甘味为主，辛甘化阳、酸甘化阴。",
        keyPoints: ["腹中时痛", "喜温喜按", "面色无华", "脉细弦"],
        relatedSyndromes: ["脾阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质", "阴虚质"],
        modifications: [
            { condition: "气虚甚", modification: "加黄芪（黄芪建中汤）" },
            { condition: "血虚甚", modification: "加当归（当归建中汤）" }
        ],
        contraindications: ["湿热内蕴者禁用", "实热腹痛者禁用"]
    },

    // ===================================================================
    // 十一、温里剂 — 回阳救逆/温经散寒
    // ===================================================================
    {
        id: "formula_027",
        name: "四逆汤",
        pinyin: "Si Ni Tang",
        source: "《伤寒论》",
        category: "温里剂",
        subcategory: "回阳救逆剂",
        composition: [
            { herbName: "附子", dosage: "15g", role: "君药" },
            { herbName: "干姜", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["回阳救逆"],
        indications: ["少阴病阳气衰微证", "四肢厥逆", "恶寒蜷卧", "神疲欲寐", "呕吐腹痛", "下利清谷", "舌淡苔白滑", "脉沉微细欲绝"],
        analysis: "本方为回阳救逆之主方。方中附子为君，大辛大热，纯阳之品，温肾壮阳、回阳救逆，通行十二经脉；干姜为臣，辛热温中焦之阳、散里寒，与附子配合，一主先天温肾，一主后天暖脾，相须为用；炙甘草为使，益气补中、调和诸药，且甘缓以制附子之毒，又能助干姜温中。三药合用，大温大补，力挽垂绝之阳。",
        keyPoints: ["四肢厥逆", "神疲欲寐", "下利清谷", "脉沉微细欲绝"],
        relatedSyndromes: ["虚寒证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "阴阳俱脱", modification: "加人参（四逆加人参汤）" },
            { condition: "戴阳", modification: "加葱白（白通汤）" }
        ],
        contraindications: ["真热假寒者禁用", "阴虚内热者禁用"]
    },
    {
        id: "formula_028",
        name: "当归四逆汤",
        pinyin: "Dang Gui Si Ni Tang",
        source: "《伤寒论》",
        category: "温里剂",
        subcategory: "温经散寒剂",
        composition: [
            { herbName: "当归", dosage: "12g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "臣药" },
            { herbName: "细辛", dosage: "3g", role: "佐药" },
            { herbName: "通草", dosage: "6g", role: "佐药" },
            { herbName: "大枣", dosage: "8枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["温经散寒", "养血通脉"],
        indications: ["血虚寒厥证", "手足厥寒", "肢体痹痛", "腰腿冷痛", "舌淡苔白", "脉细欲绝或沉细"],
        analysis: "本方为温经散寒、养血通脉之代表方。方中当归为君，甘辛而温，养血活血通脉；桂枝为臣，辛甘而温，温经散寒、宣通阳气，与当归配伍，温通血脉；白芍养血和营，助当归养血之力，细辛辛温散寒，通达表里上下，共为臣药；通草通利经脉，大枣益气健脾养血，共为佐药；甘草为使，调和诸药。全方温而不燥、补而不滞。",
        keyPoints: ["手足厥寒", "脉细欲绝", "舌淡苔白"],
        relatedSyndromes: ["虚寒证"],
        relatedConstitutions: ["阳虚质", "血瘀质"],
        modifications: [
            { condition: "内有久寒", modification: "加吴茱萸、生姜（当归四逆加吴茱萸生姜汤）" },
            { condition: "腰膝冷痛", modification: "加川断、杜仲、牛膝" }
        ],
        contraindications: ["热厥者禁用", "阴虚内热者慎用"]
    },

    // ===================================================================
    // 十二、补益剂 — 补气剂
    // ===================================================================
    {
        id: "formula_029",
        name: "四君子汤",
        pinyin: "Si Jun Zi Tang",
        source: "《太平惠民和剂局方》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["益气健脾"],
        indications: ["脾胃气虚证", "面色萎白", "语声低微", "气短乏力", "食少便溏", "舌淡苔白", "脉虚弱"],
        analysis: "本方为补气基础方。方中人参为君，甘温益气，大补脾胃之气；白术为臣，苦温健脾燥湿，与人参相须，增强益气健脾之力；茯苓为佐，甘淡渗湿健脾，与白术合用，健脾渗湿之功益彰；炙甘草为使，甘温益气和中，调和诸药。四药合用，甘温和缓，益气健脾而不燥烈，为补气之祖方。",
        keyPoints: ["面色萎白", "食少便溏", "气短乏力", "舌淡苔白", "脉虚弱"],
        relatedSyndromes: ["脾气虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "兼脘腹胀闷", modification: "加陈皮（异功散）" },
            { condition: "兼痰湿", modification: "加陈皮、半夏（六君子汤）" }
        ],
        contraindications: ["实热证者禁用"]
    },
    {
        id: "formula_030",
        name: "补中益气汤",
        pinyin: "Bu Zhong Yi Qi Tang",
        source: "《内外伤辨惑论》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "黄芪", dosage: "18g", role: "君药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "升麻", dosage: "6g", role: "佐药" },
            { herbName: "柴胡", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["补中益气", "升阳举陷"],
        indications: ["脾胃气虚证", "气虚下陷证", "气虚发热证", "少气懒言", "体倦肢软", "面色萎黄", "大便溏薄", "脱肛", "子宫脱垂", "久泻久痢", "舌淡苔白", "脉虚大或细弱"],
        analysis: "本方为补气升阳、甘温除热之代表方。方中黄芪为君，甘温补中益气、升阳举陷；人参、白术为臣，益气健脾，助黄芪补中之力；当归养血和血，使气有所依，陈皮理气和胃，使补而不滞，升麻、柴胡升阳举陷，共为佐药；甘草为使，调和诸药。全方补气与升提并用，使脾胃之气得充，清阳得升，诸症自除。",
        keyPoints: ["少气懒言", "体倦肢软", "气虚下陷内脏下垂", "舌淡苔白", "脉虚"],
        relatedSyndromes: ["中气下陷证", "脾气虚证", "气虚证"],
        relatedConstitutions: ["气虚质", "阳虚质"],
        modifications: [
            { condition: "头痛", modification: "加蔓荆子、川芎" },
            { condition: "腹痛", modification: "加白芍" }
        ],
        contraindications: ["实热证者禁用", "阴虚火旺者禁用"]
    },

    // ===================================================================
    // 十三、补益剂 — 补血剂
    // ===================================================================
    {
        id: "formula_031",
        name: "四物汤",
        pinyin: "Si Wu Tang",
        source: "《仙授理伤续断秘方》",
        category: "补益剂",
        subcategory: "补血剂",
        composition: [
            { herbName: "熟地黄", dosage: "15g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "使药" }
        ],
        functions: ["补血和血"],
        indications: ["营血虚滞证", "面色萎黄", "头晕目眩", "心悸失眠", "唇爪无华", "月经不调", "经行腹痛", "舌淡", "脉细弦或细涩"],
        analysis: "本方为补血调经之基础方，妇科第一方。方中熟地黄为君，甘温味厚，滋阴养血填精，为养血补虚要药；当归为臣，甘辛而温，养血活血调经，既可助熟地黄补血之力，又可行滞通脉；白芍为佐，酸甘养血柔肝，敛阴止痛；川芎为使，辛温活血行气，使补而不滞。四药合用，动静结合，补血而不滞血，活血而不伤血。",
        keyPoints: ["面色萎黄", "头晕心悸", "唇甲色淡", "月经不调", "舌淡", "脉细"],
        relatedSyndromes: ["血虚证", "气血两虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "血热妄行", modification: "熟地黄改为生地黄，白芍改为赤芍，去川芎" },
            { condition: "兼气虚", modification: "加人参、黄芪" }
        ],
        contraindications: ["湿盛中满者禁用", "阴虚发热者慎用"]
    },
    {
        id: "formula_032",
        name: "当归补血汤",
        pinyin: "Dang Gui Bu Xue Tang",
        source: "《内外伤辨惑论》",
        category: "补益剂",
        subcategory: "补血剂",
        composition: [
            { herbName: "黄芪", dosage: "30g", role: "君药" },
            { herbName: "当归", dosage: "6g", role: "臣药" }
        ],
        functions: ["补气生血"],
        indications: ["血虚发热证", "妇女经期或产后血虚发热头痛", "面赤肌热", "烦渴引饮", "脉洪大而虚", "重按无力"],
        analysis: "本方为补气生血之代表方，体现了「有形之血不能速生，无形之气所当急固」之旨。方中黄芪为君，用量五倍于当归，大补脾肺之气以资气血生化之源，使气旺血生；当归为臣，甘辛而温，养血和营。全方虽仅两味，但以黄芪为主，取其补气以生血，少量当归引血归经，使阳生阴长，血随气生。",
        keyPoints: ["血虚发热", "面色萎黄", "脉洪大重按无力"],
        relatedSyndromes: ["血虚证", "气血两虚证"],
        relatedConstitutions: ["阴虚质", "气虚质"],
        modifications: [
            { condition: "出血不止", modification: "加阿胶、艾叶、炮姜" },
            { condition: "气虚甚", modification: "加人参、白术" }
        ],
        contraindications: ["实热证者禁用"]
    },

    // ===================================================================
    // 十四、补益剂 — 气血双补/补阴
    // ===================================================================
    {
        id: "formula_033",
        name: "八珍汤",
        pinyin: "Ba Zhen Tang",
        source: "《瑞竹堂经验方》",
        category: "补益剂",
        subcategory: "气血双补剂",
        composition: [
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "熟地黄", dosage: "12g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["益气补血"],
        indications: ["气血两虚证", "面色萎黄或苍白", "头晕目眩", "四肢倦怠", "气短懒言", "心悸怔忡", "食欲减退", "舌淡苔薄白", "脉细弱或虚大无力"],
        analysis: "本方由四君子汤合四物汤而成，为气血双补之基础方。方中人参、熟地黄为君，人参甘温益气健脾，熟地黄甘温滋阴养血，二药相合，益气养血；白术、当归为臣，助人参、熟地黄补气养血；茯苓健脾渗湿，白芍养血柔肝，川芎活血行气，共为佐药，使补而不滞；甘草益气和中，调和诸药为使。全方补气与养血并重。",
        keyPoints: ["面色萎黄或苍白", "四肢倦怠", "气短懒言", "舌淡苔白", "脉细弱"],
        relatedSyndromes: ["气血两虚证", "心脾两虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "兼阳虚", modification: "加肉桂、黄芪（十全大补汤）" },
            { condition: "血虚失眠", modification: "加酸枣仁、远志" }
        ],
        contraindications: ["实热证者禁用", "湿热内蕴者慎用"]
    },
    {
        id: "formula_034",
        name: "六味地黄丸",
        pinyin: "Liu Wei Di Huang Wan",
        source: "《小儿药证直诀》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "熟地黄", dosage: "24g", role: "君药" },
            { herbName: "山茱萸", dosage: "12g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" }
        ],
        functions: ["滋阴补肾"],
        indications: ["肾阴虚证", "腰膝酸软", "头晕目眩", "耳鸣耳聋", "盗汗梦遗", "消渴", "骨蒸潮热", "手足心热", "咽燥口干", "牙齿动摇", "舌红少苔", "脉细数"],
        analysis: "本方为补肾阴之祖方，治肾阴虚诸证。方中熟地黄为君，甘温味厚，滋阴补肾填精益髓，壮水之主；山茱萸补肝肾、固精气，山药补脾固精，二药为臣，助熟地黄补肾固精；泽泻利湿泄肾浊、防熟地黄滋腻，牡丹皮清泄虚火、制山茱萸之温涩，茯苓淡渗脾湿、助山药之健运，三补三泻，以补为主，补中有泻，寓泻于补。",
        keyPoints: ["腰膝酸软", "头晕目眩", "盗汗遗精", "舌红少苔", "脉细数"],
        relatedSyndromes: ["肾阴虚证", "肾精不足证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴虚火旺", modification: "加知母、黄柏（知柏地黄丸）" },
            { condition: "视物昏花", modification: "加枸杞子、菊花（杞菊地黄丸）" }
        ],
        contraindications: ["脾虚便溏者慎用", "湿热内蕴者禁用"]
    },

    // ===================================================================
    // 十五、补益剂 — 补阳/阴阳双补
    // ===================================================================
    {
        id: "formula_035",
        name: "肾气丸",
        pinyin: "Shen Qi Wan",
        source: "《金匮要略》",
        category: "补益剂",
        subcategory: "补阳剂",
        composition: [
            { herbName: "干地黄", dosage: "24g", role: "君药" },
            { herbName: "山茱萸", dosage: "12g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "附子", dosage: "3g", role: "臣药" },
            { herbName: "桂枝", dosage: "3g", role: "臣药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" }
        ],
        functions: ["补肾助阳"],
        indications: ["肾阳不足证", "腰痛脚软", "下半身常有冷感", "少腹拘急", "小便不利或反多", "阳痿早泄", "舌淡而胖", "脉沉细"],
        analysis: "本方为补肾阳之祖方，体现「阴中求阳」之妙。方中重用干地黄（或熟地黄）为君，滋阴补肾填精；山茱萸、山药补肝肾、固精，为臣；附子、桂枝用量极轻，于大队滋阴药中少佐补阳之品，意在微微生火以生肾气，取「少火生气」之意，亦为臣药；泽泻、牡丹皮、茯苓三泻以制滋补之腻，共为佐药。全方阴中求阳，温而不燥。",
        keyPoints: ["腰痛", "下半身冷感", "小便不利或反多", "舌淡胖", "脉沉细"],
        relatedSyndromes: ["肾阳虚证", "肾气不固证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "腰重脚肿", modification: "加牛膝、车前子（济生肾气丸）" },
            { condition: "阳痿", modification: "加淫羊藿、巴戟天" }
        ],
        contraindications: ["肾阴虚火旺者禁用", "湿热内盛者慎用"]
    },
    {
        id: "formula_036",
        name: "地黄饮子",
        pinyin: "Di Huang Yin Zi",
        source: "《圣济总录》",
        category: "补益剂",
        subcategory: "阴阳双补剂",
        composition: [
            { herbName: "熟地黄", dosage: "15g", role: "君药" },
            { herbName: "山茱萸", dosage: "9g", role: "臣药" },
            { herbName: "肉苁蓉", dosage: "9g", role: "臣药" },
            { herbName: "巴戟天", dosage: "9g", role: "臣药" },
            { herbName: "附子", dosage: "6g", role: "臣药" },
            { herbName: "肉桂", dosage: "6g", role: "臣药" },
            { herbName: "石斛", dosage: "9g", role: "佐药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" },
            { herbName: "石菖蒲", dosage: "6g", role: "佐药" },
            { herbName: "远志", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "3g", role: "使药" },
            { herbName: "大枣", dosage: "3枚", role: "使药" },
            { herbName: "薄荷", dosage: "3g", role: "使药" }
        ],
        functions: ["滋肾阴", "补肾阳", "开窍化痰"],
        indications: ["暗痱（肾阴阳两虚，痰浊上泛）", "舌强不能言", "足废不能用", "口干不欲饮", "足冷面赤", "脉沉细弱"],
        analysis: "本方为治肾阴阳两虚、痰浊上泛之暗痱的专方。方中熟地黄为君，滋阴补肾填精；山茱萸、肉苁蓉、巴戟天补肾助阳，附子、肉桂温肾阳以助气化，共为臣药；石斛、麦冬滋阴养液，五味子敛阴固肾，石菖蒲、远志化痰开窍，茯苓利水化痰，共为佐药；生姜、大枣、薄荷为使，调和营卫。全方阴阳并补，标本兼顾。",
        keyPoints: ["舌强不能言", "足废不能用", "脉沉细弱"],
        relatedSyndromes: ["肾阴阳两虚证"],
        relatedConstitutions: ["阳虚质", "阴虚质"],
        modifications: [
            { condition: "阴虚甚", modification: "去附子、肉桂，加知母、黄柏" },
            { condition: "痰浊重", modification: "加半夏、天南星" }
        ],
        contraindications: ["纯实热痰火者禁用"]
    },

    // ===================================================================
    // 十六、固涩剂
    // ===================================================================
    {
        id: "formula_037",
        name: "玉屏风散",
        pinyin: "Yu Ping Feng San",
        source: "《究原方》",
        // 注：原归固涩剂·固表止汗剂；2026-08-31 按教材《方剂学》移至补益剂·补气剂（保持原位置）
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "黄芪", dosage: "30g", role: "君药" },
            { herbName: "白术", dosage: "30g", role: "臣药" },
            { herbName: "防风", dosage: "15g", role: "佐药" }
        ],
        functions: ["益气固表", "止汗"],
        indications: ["表虚自汗证", "汗出恶风", "面色萎白", "平素易感风邪", "舌淡苔薄白", "脉浮虚"],
        analysis: "本方为益气固表止汗之经典方。方中黄芪为君，甘温益气，内可大补脾肺之气，外可固表止汗；白术为臣，健脾益气，助黄芪固表之力，使气旺表实，汗不外泄，邪不易侵；防风为佐，走表祛风并御风邪，与黄芪相伍，黄芪得防风，固表而不留邪，防风得黄芪，祛邪而不伤正。三药合用，散中寓补，补中兼疏。",
        keyPoints: ["自汗恶风", "易感风邪", "面色萎白", "脉虚"],
        relatedSyndromes: ["肺气虚证", "气虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "汗多不止", modification: "加浮小麦、牡蛎、麻黄根" },
            { condition: "兼阴虚", modification: "加生熟地黄、白芍" }
        ],
        contraindications: ["阴虚盗汗者慎用", "实热汗出者禁用"]
    },
    {
        id: "formula_038",
        name: "四神丸",
        pinyin: "Si Shen Wan",
        source: "《内科摘要》",
        category: "固涩剂",
        subcategory: "涩肠止泻剂",
        composition: [
            { herbName: "补骨脂", dosage: "12g", role: "君药" },
            { herbName: "肉豆蔻", dosage: "9g", role: "臣药" },
            { herbName: "吴茱萸", dosage: "6g", role: "佐药" },
            { herbName: "五味子", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "12g", role: "佐药" },
            { herbName: "大枣", dosage: "5枚", role: "使药" }
        ],
        functions: ["温补脾肾", "涩肠止泻"],
        indications: ["脾肾虚寒之五更泄泻", "五更泄泻（黎明前脐下作痛，肠鸣即泻）", "完谷不化", "饮食不思", "腰酸肢冷", "舌淡苔白", "脉沉迟无力"],
        analysis: "本方为治脾肾虚寒、五更泄泻之专方。方中补骨脂为君，辛苦大温，补命门之火以温暖脾土；肉豆蔻为臣，辛温暖脾涩肠止泻，与补骨脂相配，一温肾一温脾；吴茱萸辛热暖脾温肾散寒，五味子酸温收敛固涩、涩肠止泻，共为佐药；生姜暖胃散寒，大枣补脾益气，以助温涩之力。全方温补与涩敛并用。",
        keyPoints: ["五更泄泻", "完谷不化", "腰酸肢冷", "脉沉迟无力"],
        relatedSyndromes: ["脾肾阳虚证", "肾阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "久泻脱肛", modification: "加黄芪、升麻" },
            { condition: "腹痛甚", modification: "加木香、白芍" }
        ],
        contraindications: ["湿热泄泻者禁用", "伤食泄泻者禁用"]
    },
    {
        id: "formula_039",
        name: "金锁固精丸",
        pinyin: "Jin Suo Gu Jing Wan",
        source: "《医方集解》",
        category: "固涩剂",
        subcategory: "固精止遗剂",
        composition: [
            { herbName: "沙苑蒺藜", dosage: "12g", role: "君药" },
            { herbName: "芡实", dosage: "12g", role: "臣药" },
            { herbName: "莲须", dosage: "12g", role: "臣药" },
            { herbName: "龙骨", dosage: "15g", role: "佐药" },
            { herbName: "牡蛎", dosage: "15g", role: "佐药" },
            { herbName: "莲子肉", dosage: "15g", role: "使药" }
        ],
        functions: ["补肾涩精"],
        indications: ["肾虚精关不固证", "遗精滑泄", "夜梦遗精", "腰酸耳鸣", "四肢酸软", "神疲乏力", "舌淡苔白", "脉细弱"],
        analysis: "本方为固肾涩精之专方。方中沙苑蒺藜为君，甘温补益肝肾、固精缩尿；芡实、莲须为臣，固肾涩精，助沙苑蒺藜增强固涩之力；龙骨、牡蛎重镇安神、收敛固涩，共为佐药，潜镇浮阳、安神定志，使心神宁静以制相火妄动；莲子肉为使，清心益肾，补脾固涩。全方以固涩为主，配合补肾，标本兼顾。",
        keyPoints: ["遗精滑泄", "腰酸耳鸣", "脉细弱"],
        relatedSyndromes: ["肾气不固证"],
        relatedConstitutions: ["阳虚质", "阴虚质"],
        modifications: [
            { condition: "相火妄动", modification: "加知母、黄柏" },
            { condition: "肾阳虚甚", modification: "加锁阳、巴戟天" }
        ],
        contraindications: ["湿热下注所致遗精者禁用", "君相火动之遗精者慎用"]
    },

    // ===================================================================
    // 十七、安神剂 — 重镇安神/滋养安神
    // ===================================================================
    {
        id: "formula_040",
        name: "朱砂安神丸",
        pinyin: "Zhu Sha An Shen Wan",
        source: "《内外伤辨惑论》",
        category: "安神剂",
        subcategory: "重镇安神剂",
        composition: [
            { herbName: "朱砂", dosage: "15g（为极细末）", role: "君药" },
            { herbName: "黄连", dosage: "18g", role: "臣药" },
            { herbName: "当归", dosage: "8g", role: "佐药" },
            { herbName: "生地黄", dosage: "8g", role: "佐药" },
            { herbName: "炙甘草", dosage: "16g", role: "使药" }
        ],
        functions: ["重镇安神", "清心泻火"],
        indications: ["心火上扰阴血不足之神志不安证", "心神烦乱", "惊悸不安", "失眠多梦", "胸中烦热", "舌红", "脉细数"],
        analysis: "本方为治疗心火上扰、阴血不足之心烦失眠证的常用方。方中朱砂为君，性寒质重，直入心经，镇心安神，清泄心火；黄连为臣，苦寒清心泻火除烦，助朱砂清火安神之力；当归、生地黄为佐，养血滋阴以补其被火灼伤之阴血；甘草为使，调和诸药，且能缓朱砂、黄连之峻。全方镇清并用，辅以滋养，使心火清、阴血复、心神安。",
        keyPoints: ["惊悸不安", "心烦失眠", "舌红", "脉细数"],
        relatedSyndromes: ["心火亢盛证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "惊悸甚", modification: "加龙骨、牡蛎" },
            { condition: "失眠多梦", modification: "加酸枣仁、柏子仁" }
        ],
        contraindications: ["朱砂有毒，不宜久服多服", "脾胃虚弱者慎用", "肝肾功能不全者禁用"]
    },
    {
        id: "formula_041",
        name: "酸枣仁汤",
        pinyin: "Suan Zao Ren Tang",
        source: "《金匮要略》",
        category: "安神剂",
        subcategory: "补养安神剂",
        composition: [
            { herbName: "酸枣仁", dosage: "30g", role: "君药" },
            { herbName: "知母", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["养血安神", "清热除烦"],
        indications: ["肝血不足，虚热扰神证", "虚烦不得眠", "失眠心悸", "头晕目眩", "咽干口燥", "舌红少苔", "脉细弦"],
        analysis: "本方为治肝血不足、血不养心之虚烦失眠的要方。方中酸枣仁为君，重用甘平入心肝之经，养血补肝、宁心安神；知母为臣，苦寒滋阴清热除烦，与酸枣仁相配，一补一清，使肝血充、虚热除；茯苓宁心安神，川芎辛散，调肝血、疏肝气，与酸枣仁一收一散，相反相成，共为佐药；甘草为使，调和诸药，兼可和中。全方以养血安神为主。",
        keyPoints: ["虚烦不眠", "心悸", "舌红少苔", "脉细弦"],
        relatedSyndromes: ["肝血虚证", "心血虚证"],
        relatedConstitutions: ["阴虚质", "阴虚质"],
        modifications: [
            { condition: "多梦易惊", modification: "加龙骨、牡蛎" },
            { condition: "阴虚燥热甚", modification: "加生地黄、麦冬" }
        ],
        contraindications: ["实热烦躁者禁用"]
    },
    {
        id: "formula_042",
        name: "天王补心丹",
        pinyin: "Tian Wang Bu Xin Dan",
        source: "《校注妇人良方》",
        category: "安神剂",
        subcategory: "补养安神剂",
        composition: [
            { herbName: "生地黄", dosage: "30g", role: "君药" },
            { herbName: "玄参", dosage: "15g", role: "臣药" },
            { herbName: "天冬", dosage: "15g", role: "臣药" },
            { herbName: "麦冬", dosage: "15g", role: "臣药" },
            { herbName: "丹参", dosage: "15g", role: "臣药" },
            { herbName: "当归", dosage: "15g", role: "臣药" },
            { herbName: "酸枣仁", dosage: "30g", role: "佐药" },
            { herbName: "柏子仁", dosage: "15g", role: "佐药" },
            { herbName: "远志", dosage: "15g", role: "佐药" },
            { herbName: "茯苓", dosage: "15g", role: "佐药" },
            { herbName: "人参", dosage: "15g", role: "佐药" },
            { herbName: "五味子", dosage: "15g", role: "佐药" },
            { herbName: "桔梗", dosage: "15g", role: "使药" },
            { herbName: "朱砂", dosage: "极少量", role: "使药" }
        ],
        functions: ["滋阴养血", "补心安神"],
        indications: ["阴虚血少，神志不安证", "心悸失眠", "虚烦神疲", "梦遗健忘", "手足心热", "口舌生疮", "舌红少苔", "脉细数"],
        analysis: "本方为治心肾阴虚血少之心悸失眠的常用方。方中生地黄为君，甘寒滋阴清热，滋补心肾之阴；玄参、天冬、麦冬助生地黄滋阴清热，共为臣药；酸枣仁、柏子仁养心安神，远志交通心肾，茯苓宁心安神，人参益气生血，五味子酸收敛阴，当归、丹参养血活血，共为佐药；桔梗载药上行，朱砂镇心安神，共为使药。全方滋中寓清，心肾同调。",
        keyPoints: ["心悸失眠", "手足心热", "舌红少苔", "脉细数"],
        relatedSyndromes: ["心阴虚证", "心肾不交证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴虚火旺甚", modification: "加知母、黄柏" },
            { condition: "失眠重", modification: "加夜交藤、合欢皮" }
        ],
        contraindications: ["朱砂有毒，不宜久服", "脾胃虚弱便溏者慎用"]
    },

    // ===================================================================
    // 十八、开窍剂
    // ===================================================================
    {
        id: "formula_043",
        name: "安宫牛黄丸",
        pinyin: "An Gong Niu Huang Wan",
        source: "《温病条辨》",
        category: "开窍剂",
        subcategory: "凉开剂",
        composition: [
            { herbName: "牛黄", dosage: "30g", role: "君药" },
            { herbName: "水牛角", dosage: "30g", role: "君药" },
            { herbName: "麝香", dosage: "7.5g", role: "君药" },
            { herbName: "黄连", dosage: "30g", role: "臣药" },
            { herbName: "黄芩", dosage: "30g", role: "臣药" },
            { herbName: "栀子", dosage: "30g", role: "臣药" },
            { herbName: "冰片", dosage: "7.5g", role: "佐药" },
            { herbName: "郁金", dosage: "30g", role: "佐药" },
            { herbName: "雄黄", dosage: "30g", role: "佐药" },
            { herbName: "朱砂", dosage: "30g", role: "佐药" },
            { herbName: "珍珠", dosage: "15g", role: "佐药" },
            { herbName: "金箔衣", dosage: "适量", role: "使药" }
        ],
        functions: ["清热解毒", "豁痰开窍"],
        indications: ["热陷心包证", "高热烦躁", "神昏谵语", "痉厥抽搐", "舌红绛", "脉细数"],
        analysis: "本方为凉开之代表方，治热陷心包之高热神昏谵语证。方中牛黄清心解毒、豁痰开窍，犀角（水牛角代）清心凉血解毒，麝香芳香辟秽、开窍通闭，三药共为君药，力专效宏；黄连、黄芩、栀子为臣，苦寒清热泻火解毒，助牛黄、犀角清解心包热毒；冰片、郁金芳香辟秽、通窍开闭，雄黄豁痰解毒，朱砂、珍珠镇心安神，共为佐药。",
        keyPoints: ["高热烦躁", "神昏谵语", "舌红绛", "脉细数"],
        relatedSyndromes: ["痰热扰心证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "昏迷重", modification: "合用至宝丹" },
            { condition: "热盛惊厥", modification: "合用紫雪" }
        ],
        contraindications: ["寒闭证禁用", "孕妇禁用", "脱证禁用"]
    },
    {
        id: "formula_044",
        name: "紫雪",
        pinyin: "Zi Xue",
        source: "《外台秘要》引《苏恭方》",
        category: "开窍剂",
        subcategory: "凉开剂",
        composition: [
            { herbName: "石膏", dosage: "144g", role: "君药" },
            { herbName: "寒水石", dosage: "144g", role: "君药" },
            { herbName: "滑石", dosage: "144g", role: "君药" },
            { herbName: "水牛角", dosage: "15g", role: "臣药" },
            { herbName: "羚羊角", dosage: "15g", role: "臣药" },
            { herbName: "麝香", dosage: "3.6g", role: "臣药" },
            { herbName: "升麻", dosage: "15g", role: "佐药" },
            { herbName: "玄参", dosage: "48g", role: "佐药" },
            { herbName: "甘草", dosage: "24g", role: "使药" },
            { herbName: "朱砂", dosage: "9g", role: "佐药" },
            { herbName: "芒硝", dosage: "480g", role: "佐药" }
        ],
        functions: ["清热开窍", "息风止痉"],
        indications: ["热陷心包热盛动风证", "高热烦躁", "神昏谵语", "痉厥抽搐", "口渴唇焦", "尿赤便秘", "舌红绛", "脉弦数"],
        analysis: "本方为凉开三宝之一，擅长清热镇痉。方中石膏、寒水石、滑石为君，甘寒大寒，清气分实热，泻火除烦；犀角（水牛角代）清心凉血，羚羊角凉肝息风止痉，麝香芳香开窍，共为臣药；升麻清热解毒透邪，玄参养阴清热，芒硝泄热通便，朱砂镇心安神，共为佐药；甘草为使，调和诸药且解毒。全方清热与开窍并重，尤擅息风止痉。",
        keyPoints: ["高热神昏", "痉厥抽搐", "舌红绛", "脉弦数"],
        relatedSyndromes: ["急惊风痰热证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "抽搐重", modification: "加钩藤、地龙" },
            { condition: "痰涎壅盛", modification: "加竹沥、天竺黄" }
        ],
        contraindications: ["寒闭证禁用", "虚风内动者禁用", "孕妇禁用"]
    },
    {
        id: "formula_045",
        name: "苏合香丸",
        pinyin: "Su He Xiang Wan",
        source: "《太平惠民和剂局方》",
        category: "开窍剂",
        subcategory: "温开剂",
        composition: [
            { herbName: "苏合香", dosage: "30g", role: "君药" },
            { herbName: "麝香", dosage: "60g", role: "君药" },
            { herbName: "冰片", dosage: "30g", role: "君药" },
            { herbName: "安息香", dosage: "60g", role: "君药" },
            { herbName: "青木香", dosage: "60g", role: "臣药" },
            { herbName: "白檀香", dosage: "60g", role: "臣药" },
            { herbName: "沉香", dosage: "60g", role: "臣药" },
            { herbName: "乳香", dosage: "30g", role: "臣药" },
            { herbName: "丁香", dosage: "60g", role: "臣药" },
            { herbName: "荜茇", dosage: "60g", role: "佐药" },
            { herbName: "白术", dosage: "60g", role: "佐药" },
            { herbName: "诃子", dosage: "60g", role: "佐药" },
            { herbName: "朱砂", dosage: "60g", role: "佐药" },
            { herbName: "水牛角", dosage: "60g", role: "佐药" }
        ],
        functions: ["芳香开窍", "行气温中"],
        indications: ["寒闭证", "突然昏倒", "牙关紧闭", "不省人事", "苔白滑", "脉迟"],
        analysis: "本方为温开之代表方，治寒邪、痰浊蒙闭心窍所致的寒闭证。方中苏合香、麝香、冰片、安息香为君，芳香辟秽、开窍醒神，四香协同，通闭之力强大；青木香、白檀香、沉香、乳香、丁香为臣，行气解郁、散寒化浊；荜茇辛热散寒，白术健脾化浊，诃子温涩敛气防辛散太过，朱砂、犀角（水牛角）镇心安神，共为佐药。全方以芳香温通为主。",
        keyPoints: ["突然昏倒", "不省人事", "牙关紧闭", "苔白滑", "脉迟"],
        relatedSyndromes: ["痰蒙清窍证"],
        relatedConstitutions: ["痰湿质", "阳虚质"],
        modifications: [
            { condition: "寒盛", modification: "加附子、吴茱萸" },
            { condition: "痰盛", modification: "加胆南星、石菖蒲" }
        ],
        contraindications: ["热闭证禁用", "脱证禁用", "孕妇禁用"]
    },

    // ===================================================================
    // 十九、理气剂 — 行气剂
    // ===================================================================
    {
        id: "formula_046",
        name: "越鞠丸",
        pinyin: "Yue Ju Wan",
        source: "《丹溪心法》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "香附", dosage: "12g", role: "君药" },
            { herbName: "川芎", dosage: "9g", role: "臣药" },
            { herbName: "苍术", dosage: "9g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "神曲", dosage: "9g", role: "佐药" }
        ],
        functions: ["行气解郁"],
        indications: ["六郁证（气、血、痰、火、湿、食郁）", "胸膈痞闷", "脘腹胀痛", "吞酸呕吐", "饮食不消", "舌苔薄腻", "脉弦"],
        analysis: "本方为治六郁证之基础方，尤以气郁为主。方中香附为君，辛香行气解郁，专治气郁；川芎为臣，辛温活血行气，治血郁，助香附行气之功；苍术为臣，燥湿健脾，治湿郁痰郁；栀子苦寒清热泻火，治火郁；神曲消食和胃，治食郁。五药合用，分别治疗气、血、湿、火、食之五郁。痰郁由气郁、湿郁而生，治气、治湿则痰郁自解。诸药合用，调理诸郁。",
        keyPoints: ["胸膈痞闷", "脘腹胀痛", "六郁征象", "脉弦"],
        relatedSyndromes: ["肝气郁结证"],
        relatedConstitutions: ["气郁质", "湿热质"],
        modifications: [
            { condition: "气郁偏重", modification: "加木香、枳壳" },
            { condition: "火郁偏重", modification: "倍栀子，加黄连" }
        ],
        contraindications: ["阴虚火旺者慎用", "脾胃虚寒者禁用"]
    },
    {
        id: "formula_047",
        name: "半夏厚朴汤",
        pinyin: "Ban Xia Hou Po Tang",
        source: "《金匮要略》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "半夏", dosage: "12g", role: "君药" },
            { herbName: "厚朴", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "12g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "苏叶", dosage: "6g", role: "佐药" }
        ],
        functions: ["行气散结", "降逆化痰"],
        indications: ["梅核气（痰气互结咽中）", "咽中如有物阻", "咯吐不出", "吞咽不下", "胸膈满闷", "或咳或呕", "舌苔白润或白滑", "脉弦缓或弦滑"],
        analysis: "本方为治痰气互结咽喉之梅核气的代表方。方中半夏为君，辛温燥湿化痰、降逆和胃；厚朴为臣，辛苦温下气除满、散结消痰，助半夏降逆化痰、行气散结；茯苓甘淡渗湿健脾，助半夏祛痰，生姜辛温散结和胃止呕，且制半夏之毒，苏叶芳香行气、宽中散郁，共为佐药。全方辛开苦降，化痰与行气并施。",
        keyPoints: ["咽中如有物阻", "咯之不出咽之不下", "苔白滑", "脉弦滑"],
        relatedSyndromes: ["痰气互结证"],
        relatedConstitutions: ["气郁质", "痰湿质"],
        modifications: [
            { condition: "痰郁较重", modification: "加陈皮、贝母" },
            { condition: "心烦口苦", modification: "加竹茹、黄连" }
        ],
        contraindications: ["阴虚咽干者禁用"]
    },

    // ===================================================================
    // 二十、理气剂 — 降气剂
    // ===================================================================
    {
        id: "formula_048",
        name: "苏子降气汤",
        pinyin: "Su Zi Jiang Qi Tang",
        source: "《太平惠民和剂局方》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "苏子", dosage: "9g", role: "君药" },
            { herbName: "半夏", dosage: "9g", role: "臣药" },
            { herbName: "厚朴", dosage: "6g", role: "臣药" },
            { herbName: "前胡", dosage: "9g", role: "臣药" },
            { herbName: "肉桂", dosage: "3g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "6g", role: "佐药" },
            { herbName: "大枣", dosage: "3枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["降气平喘", "祛痰止咳"],
        indications: ["上实下虚之喘咳证", "痰涎壅盛", "喘咳短气", "胸膈满闷", "或腰膝酸软", "或肢体浮肿", "舌苔白滑或白腻", "脉弦滑"],
        analysis: "本方为治上实下虚喘咳之要方。所谓「上实」指痰涎壅肺、肺气上逆，「下虚」指肾阳不足、肾不纳气。方中苏子为君，降气化痰平喘，止咳兼润肠通便；半夏、厚朴、前胡为臣，降气化痰，助苏子平喘；肉桂温肾纳气，当归养血润燥且治咳逆上气，生姜、大枣和胃调中，共为佐药；甘草为使，调和诸药。全方治上顾下，以降为主。",
        keyPoints: ["喘咳短气", "痰多稀白", "腰酸", "苔白滑", "脉弦滑"],
        relatedSyndromes: ["肺气虚证"],
        relatedConstitutions: ["痰湿质", "阳虚质"],
        modifications: [
            { condition: "痰涎壅盛", modification: "加葶苈子、莱菔子" },
            { condition: "肾虚重", modification: "加沉香、蛤蚧" }
        ],
        contraindications: ["阴虚燥热之喘咳者禁用"]
    },
    {
        id: "formula_049",
        name: "定喘汤",
        pinyin: "Ding Chuan Tang",
        source: "《摄生众妙方》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "麻黄", dosage: "9g", role: "君药" },
            { herbName: "白果", dosage: "12g", role: "臣药" },
            { herbName: "桑白皮", dosage: "9g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "苏子", dosage: "9g", role: "佐药" },
            { herbName: "杏仁", dosage: "9g", role: "佐药" },
            { herbName: "款冬花", dosage: "9g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["宣降肺气", "清热化痰"],
        indications: ["痰热内蕴哮喘证", "哮喘咳嗽", "痰多气急", "痰黄稠或白粘", "胸闷气促", "舌苔黄腻", "脉滑数"],
        analysis: "本方为治痰热内蕴所致咳嗽哮喘之常用方。方中麻黄、桑白皮共为君药，麻黄宣肺散邪平喘，白皮泻肺清热平喘，一宣一降；白果敛肺定喘止咳，黄芩清泄肺热，共为臣药；苏子、杏仁降气化痰平喘，款冬花润肺化痰止咳，半夏燥湿化痰降逆，共为佐药；甘草为使，调和诸药且化痰止咳。全方宣降肺气、清热化痰同施。",
        keyPoints: ["哮喘咳嗽", "痰黄粘稠", "舌苔黄腻", "脉滑数"],
        relatedSyndromes: ["痰热壅肺证"],
        relatedConstitutions: ["痰湿质", "湿热质"],
        modifications: [
            { condition: "痰多壅盛", modification: "加葶苈子、鱼腥草" },
            { condition: "热重", modification: "加石膏、知母" }
        ],
        contraindications: ["风寒哮喘者禁用"]
    },

    // ===================================================================
    // 二十一、理血剂 — 活血化瘀剂
    // ===================================================================
    {
        id: "formula_050",
        name: "血府逐瘀汤",
        pinyin: "Xue Fu Zhu Yu Tang",
        source: "《医林改错》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "桃仁", dosage: "12g", role: "君药" },
            { herbName: "红花", dosage: "9g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "生地黄", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "9g", role: "臣药" },
            { herbName: "赤芍", dosage: "6g", role: "臣药" },
            { herbName: "牛膝", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "柴胡", dosage: "6g", role: "佐药" },
            { herbName: "枳壳", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["活血化瘀", "行气止痛"],
        indications: ["胸中血瘀证", "胸痛头痛日久不愈", "痛如针刺而有定处", "心悸怔忡", "失眠多梦", "唇黯舌紫或有瘀斑瘀点", "脉涩弦"],
        analysis: "本方为王清任所创五大逐瘀汤之首，专治胸中血瘀证。方中桃仁、红花为君，活血化瘀、通经止痛；当归、生地黄、川芎、赤芍为臣，即桃红四物汤去熟地黄换生地黄，养血活血，助桃红化瘀之力，且生地黄凉血，防瘀久化热；牛膝活血引血下行，桔梗载药上行、宣利肺气，柴胡疏肝理气，枳壳行气宽胸，共为佐药，使气行血行；甘草为使，调和诸药。全方气血并治。",
        keyPoints: ["胸痛刺痛", "固定不移", "舌紫瘀斑", "脉涩"],
        relatedSyndromes: ["气滞血瘀证", "心脉痹阻证"],
        relatedConstitutions: ["血瘀质", "气郁质"],
        modifications: [
            { condition: "胸胁刺痛重", modification: "加延胡索、郁金" },
            { condition: "瘀热甚", modification: "加大黄、牡丹皮" }
        ],
        contraindications: ["孕妇禁用", "出血性疾病者禁用"]
    },
    {
        id: "formula_051",
        name: "补阳还五汤",
        pinyin: "Bu Yang Huan Wu Tang",
        source: "《医林改错》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "黄芪", dosage: "60-120g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "赤芍", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "桃仁", dosage: "6g", role: "佐药" },
            { herbName: "红花", dosage: "6g", role: "佐药" },
            { herbName: "地龙", dosage: "9g", role: "佐药" }
        ],
        functions: ["补气活血通络"],
        indications: ["气虚血瘀中风后半身不遂证", "半身不遂", "口眼㖞斜", "口角流涎", "言语謇涩", "小便频数", "舌淡紫有瘀斑", "脉缓无力或细涩"],
        analysis: "本方为治气虚血瘀之中风偏瘫的名方。方中黄芪重用至四两为君，大补元气，使气旺以推动血行，为「气行则血行」之典范；当归为臣，养血活血，化瘀而不伤正；赤芍、川芎、桃仁、红花活血化瘀，共为佐药，助当归化瘀通络；地龙通经活络，力专善走，引诸药直达经络，亦为佐药。全方以大剂量补气药为主，少少配伍活血之品。",
        keyPoints: ["半身不遂", "口眼㖞斜", "舌淡紫", "脉缓无力"],
        relatedSyndromes: ["气虚血瘀证"],
        relatedConstitutions: ["气虚质", "血瘀质"],
        modifications: [
            { condition: "语言不利", modification: "加石菖蒲、远志" },
            { condition: "偏寒", modification: "加桂枝、附子" }
        ],
        contraindications: ["实热中风者禁用", "肝阳化风者慎用"]
    },
    {
        id: "formula_052",
        name: "生化汤",
        pinyin: "Sheng Hua Tang",
        source: "《傅青主女科》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "当归", dosage: "24g", role: "君药" },
            { herbName: "川芎", dosage: "9g", role: "臣药" },
            { herbName: "桃仁", dosage: "6g", role: "佐药" },
            { herbName: "炮姜", dosage: "2g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["活血化瘀", "温经止痛"],
        indications: ["产后恶露不行或行而不畅证", "小腹冷痛", "恶露不行", "或行而不畅", "夹有血块", "舌淡或黯有瘀点", "脉沉涩"],
        analysis: "本方为产后活血化瘀生新之祖方。方中当归为君，重用至八钱，养血活血、化瘀生新，为产后要药；川芎为臣，辛散活血行气，助当归化瘀止痛；桃仁为佐，破血祛瘀，助当归、川芎化瘀之力；炮姜为佐，性微温，温经散寒止痛，与当归相配，养血温经；甘草为使，调和诸药，兼以和中。全方活血与温经并用，寓生新于化瘀之中。",
        keyPoints: ["产后恶露不行", "小腹冷痛", "舌淡黯", "脉沉涩"],
        relatedSyndromes: ["气滞血瘀证", "寒凝血瘀证"],
        relatedConstitutions: ["血瘀质", "阳虚质"],
        modifications: [
            { condition: "血块多痛剧", modification: "加蒲黄、五灵脂" },
            { condition: "兼气虚", modification: "加人参、黄芪" }
        ],
        contraindications: ["产后血热瘀滞者禁用", "非产后血瘀者慎用"]
    },

    // ===================================================================
    // 二十二、理血剂 — 止血剂
    // ===================================================================
    {
        id: "formula_053",
        name: "十灰散",
        pinyin: "Shi Hui San",
        source: "《十药神书》",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "大蓟", dosage: "15g", role: "君药" },
            { herbName: "小蓟", dosage: "15g", role: "君药" },
            { herbName: "侧柏叶", dosage: "15g", role: "臣药" },
            { herbName: "荷叶", dosage: "15g", role: "臣药" },
            { herbName: "白茅根", dosage: "15g", role: "臣药" },
            { herbName: "茜草根", dosage: "15g", role: "臣药" },
            { herbName: "大黄", dosage: "15g", role: "佐药" },
            { herbName: "栀子", dosage: "15g", role: "佐药" },
            { herbName: "棕榈皮", dosage: "15g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "15g", role: "佐药" }
        ],
        functions: ["凉血止血"],
        indications: ["血热妄行之各种出血证", "吐血", "咯血", "衄血", "崩漏", "血色鲜红", "来势急暴", "舌红苔黄", "脉弦数"],
        analysis: "本方为凉血止血的急用方，治疗血热妄行的各种上部出血证。方中大蓟、小蓟为君，甘凉清热凉血止血，兼可散瘀；侧柏叶、荷叶、白茅根凉血止血，茜草活血兼止血，共为臣药，助君药止血而不留瘀；大黄、栀子清热泻火、导热下行，棕榈皮收涩止血，牡丹皮凉血散瘀，共为佐药。全方止血与清热并用，寓散瘀于止血之中。各药均炒炭存性，以增止血之功。",
        keyPoints: ["急性出血", "血色鲜红", "舌红苔黄", "脉弦数"],
        relatedSyndromes: ["血热证"],
        relatedConstitutions: ["湿热质", "阴虚质"],
        modifications: [
            { condition: "肺热咯血", modification: "倍用侧柏叶、荷叶" },
            { condition: "胃热吐血", modification: "倍用大黄" }
        ],
        contraindications: ["虚寒性出血者禁用"]
    },
    {
        id: "formula_054",
        name: "小蓟饮子",
        pinyin: "Xiao Ji Yin Zi",
        source: "《济生方》",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "小蓟", dosage: "15g", role: "君药" },
            { herbName: "生地黄", dosage: "30g", role: "臣药" },
            { herbName: "藕节", dosage: "15g", role: "臣药" },
            { herbName: "蒲黄", dosage: "9g", role: "臣药" },
            { herbName: "滑石", dosage: "15g", role: "佐药" },
            { herbName: "木通", dosage: "9g", role: "佐药" },
            { herbName: "淡竹叶", dosage: "9g", role: "佐药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["凉血止血", "利尿通淋"],
        indications: ["下焦血淋证", "尿中带血", "小便频数", "赤涩热痛", "舌红苔黄", "脉数"],
        analysis: "本方为治下焦瘀热所致血淋、尿血的代表方。方中小蓟为君，甘凉清热凉血止血，兼可利尿；生地黄为臣，凉血养阴，藕节凉血止血散瘀，蒲黄止血化瘀利尿，共助君药止血利尿；滑石、木通、淡竹叶清热利尿通淋，栀子清泄三焦之火、引热从小便出，当归养血活血，共为佐药；甘草为使，调和诸药，兼能和中缓急止痛。全方止血与化瘀兼顾。",
        keyPoints: ["尿血", "小便赤涩热痛", "舌红苔黄", "脉数"],
        relatedSyndromes: ["血热证", "湿热下注证"],
        relatedConstitutions: ["湿热质", "湿热质"],
        modifications: [
            { condition: "尿血多", modification: "加白茅根、琥珀" },
            { condition: "尿道剧痛", modification: "加海金沙、金钱草" }
        ],
        contraindications: ["虚寒之尿血者禁用"]
    },

    // ===================================================================
    // 二十三、治风剂 — 疏散外风
    // ===================================================================
    {
        id: "formula_055",
        name: "川芎茶调散",
        pinyin: "Chuan Xiong Cha Tiao San",
        source: "《太平惠民和剂局方》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "川芎", dosage: "9g", role: "君药" },
            { herbName: "荆芥", dosage: "9g", role: "臣药" },
            { herbName: "薄荷", dosage: "9g", role: "臣药" },
            { herbName: "羌活", dosage: "6g", role: "佐药" },
            { herbName: "白芷", dosage: "6g", role: "佐药" },
            { herbName: "细辛", dosage: "3g", role: "佐药" },
            { herbName: "防风", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["疏风止痛"],
        indications: ["外感风邪头痛证", "偏正头痛", "巅顶作痛", "恶寒发热", "鼻塞", "舌苔薄白", "脉浮"],
        analysis: "本方为治外感风邪头痛之专方，堪称「治头痛第一方」。方中川芎为君，辛温升散，上行头目，祛风活血止痛，为治头痛要药；荆芥、薄荷为臣，辛散风邪，清利头目；羌活善治太阳经头痛，白芷善治阳明经头痛，细辛善治少阴经头痛，防风疏散风邪，共为佐药，助芎、荆、薄疏散诸经之头风；甘草为使，调和诸药。清茶调服取其苦寒上清头目、引热下行。",
        keyPoints: ["头痛", "恶寒发热", "鼻塞", "苔薄白", "脉浮"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质", "气郁质"],
        modifications: [
            { condition: "风寒甚", modification: "倍用荆芥、防风" },
            { condition: "风热甚", modification: "加菊花、桑叶" }
        ],
        contraindications: ["气血亏虚头痛者禁用", "阴虚阳亢头痛者禁用"]
    },
    {
        id: "formula_056",
        name: "消风散",
        pinyin: "Xiao Feng San",
        source: "《外科正宗》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "荆芥", dosage: "9g", role: "君药" },
            { herbName: "防风", dosage: "9g", role: "君药" },
            { herbName: "牛蒡子", dosage: "9g", role: "君药" },
            { herbName: "蝉蜕", dosage: "9g", role: "君药" },
            { herbName: "苍术", dosage: "9g", role: "臣药" },
            { herbName: "苦参", dosage: "9g", role: "臣药" },
            { herbName: "知母", dosage: "9g", role: "臣药" },
            { herbName: "石膏", dosage: "15g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "生地黄", dosage: "9g", role: "佐药" },
            { herbName: "胡麻", dosage: "9g", role: "佐药" },
            { herbName: "木通", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["疏风清热", "除湿止痒"],
        indications: ["风疹、湿疹", "皮肤瘙痒难忍", "疹出色红", "抓破后渗出津水", "舌苔黄", "脉浮数有力"],
        analysis: "本方为治风热湿邪浸淫血脉所致的风疹、湿疹常用方。方中荆芥、防风、牛蒡子、蝉蜕为君，疏风止痒、透达肌表之邪；苍术燥湿祛风，苦参清热燥湿，知母、石膏清热泻火，共为臣药，助君药清热除湿止痒；当归、生地黄、胡麻养血活血滋阴，取「治风先治血，血行风自灭」之意，木通清热利湿，共为佐药；甘草为使，调和诸药兼解毒。",
        keyPoints: ["皮肤瘙痒", "疹出色红", "舌苔黄", "脉浮数"],
        relatedSyndromes: ["热毒蕴肤证"],
        relatedConstitutions: ["湿热质", "特禀质"],
        modifications: [
            { condition: "湿热甚", modification: "加地肤子、白鲜皮" },
            { condition: "瘙痒难忍", modification: "加乌梢蛇、地骨皮" }
        ],
        contraindications: ["气血亏虚之瘙痒者慎用", "风寒型荨麻疹者禁用"]
    },

    // ===================================================================
    // 二十四、治风剂 — 平息内风
    // ===================================================================
    {
        id: "formula_057",
        name: "羚角钩藤汤",
        pinyin: "Ling Jiao Gou Teng Tang",
        source: "《通俗伤寒论》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "羚羊角", dosage: "4.5g（先煎）", role: "君药" },
            { herbName: "钩藤", dosage: "9g（后下）", role: "君药" },
            { herbName: "桑叶", dosage: "6g", role: "臣药" },
            { herbName: "菊花", dosage: "9g", role: "臣药" },
            { herbName: "生地黄", dosage: "15g", role: "佐药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "川贝母", dosage: "12g", role: "佐药" },
            { herbName: "竹茹", dosage: "15g", role: "佐药" },
            { herbName: "茯神", dosage: "9g", role: "佐药" },
            { herbName: "生甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["凉肝息风", "增液舒筋"],
        indications: ["肝经热盛、热极生风证", "高热不退", "烦躁不安", "手足抽搐", "甚则神昏痉厥", "舌绛而干", "脉弦数"],
        analysis: "本方为治热盛动风之代表方。方中羚羊角、钩藤为君，羚羊角咸寒直入肝经，清肝凉血息风，钩藤甘凉清热平肝、息风止痉，二药相须为用，凉肝息风之力更强；桑叶、菊花为臣，清肝散热以助息风；生地黄、白芍滋阴养血柔肝，川贝母清热化痰，竹茹清热化痰通络，茯神宁心安神，共为佐药；甘草为使，调和诸药，与白芍酸甘化阴柔筋。",
        keyPoints: ["高热抽搐", "舌绛而干", "脉弦数"],
        relatedSyndromes: ["急惊风痰热证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "神昏重", modification: "加安宫牛黄丸" },
            { condition: "抽搐重", modification: "加全蝎、蜈蚣" }
        ],
        contraindications: ["虚风内动者禁用", "寒证者禁用"]
    },
    {
        id: "formula_058",
        name: "镇肝熄风汤",
        pinyin: "Zhen Gan Xi Feng Tang",
        source: "《医学衷中参西录》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "怀牛膝", dosage: "30g", role: "君药" },
            { herbName: "代赭石", dosage: "30g", role: "君药" },
            { herbName: "龙骨", dosage: "15g", role: "臣药" },
            { herbName: "牡蛎", dosage: "15g", role: "臣药" },
            { herbName: "龟甲", dosage: "15g", role: "臣药" },
            { herbName: "白芍", dosage: "15g", role: "臣药" },
            { herbName: "玄参", dosage: "15g", role: "臣药" },
            { herbName: "天冬", dosage: "15g", role: "臣药" },
            { herbName: "川楝子", dosage: "6g", role: "佐药" },
            { herbName: "麦芽", dosage: "6g", role: "佐药" },
            { herbName: "茵陈", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "4.5g", role: "使药" }
        ],
        functions: ["镇肝息风", "滋阴潜阳"],
        indications: ["肝肾阴虚、肝阳上亢之类中风证", "头目眩晕", "脑中热痛", "面色如醉", "心中烦热", "或肢体渐觉不利", "口眼渐形㖞斜", "脉弦长有力"],
        analysis: "本方为治肝阳上亢、气血上逆之类中风的代表方。方中怀牛膝为君，重用至一两，引血下行，折其亢阳，兼补益肝肾；代赭石亦为君，重镇降逆、平肝潜阳；龙骨、牡蛎、龟甲、白芍潜阳镇逆、柔肝息风，玄参、天冬滋阴清热，共为臣药，助牛膝、代赭石滋阴潜阳之力；川楝子疏肝理气，茵陈清肝利湿，麦芽和胃疏肝，共为佐药；甘草为使，调和诸药，与麦芽和胃和中。全方镇潜与滋阴并用。",
        keyPoints: ["头目眩晕", "脑中热痛", "面色如醉", "脉弦长有力"],
        relatedSyndromes: ["肝阳上亢证"],
        relatedConstitutions: ["阴虚质", "气郁质", "血瘀质"],
        modifications: [
            { condition: "心中热甚", modification: "加石膏" },
            { condition: "尺脉虚", modification: "加山茱萸、熟地黄" }
        ],
        contraindications: ["血虚生风者禁用", "气虚中风者慎用"]
    },

    // ===================================================================
    // 二十五、治燥剂 — 外燥/内燥
    // ===================================================================
    {
        id: "formula_059",
        name: "杏苏散",
        pinyin: "Xing Su San",
        source: "《温病条辨》",
        category: "治燥剂",
        subcategory: "轻宣外燥剂",
        composition: [
            { herbName: "杏仁", dosage: "9g", role: "君药" },
            { herbName: "苏叶", dosage: "9g", role: "君药" },
            { herbName: "前胡", dosage: "9g", role: "臣药" },
            { herbName: "桔梗", dosage: "6g", role: "臣药" },
            { herbName: "枳壳", dosage: "6g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "3片", role: "使药" },
            { herbName: "大枣", dosage: "3枚", role: "使药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["轻宣凉燥", "理肺化痰"],
        indications: ["外感凉燥证", "头微痛", "恶寒无汗", "咳嗽痰稀", "鼻塞咽干", "苔白", "脉弦"],
        analysis: "本方为治感受凉燥之专方。方中杏仁为君，苦辛而温，宣肺止咳、润燥化痰；苏叶亦为君，辛温发散解表，与杏仁相伍一直一降；前胡、桔梗、枳壳为臣，宣降肺气，助杏仁止咳化痰；半夏燥湿化痰，陈皮理气化痰，茯苓健脾渗湿，共为佐药，四药合用乃二陈汤之意，燥湿化痰以杜生痰之源；生姜、大枣、甘草为使，调和营卫，兼能和中。",
        keyPoints: ["恶寒无汗", "咳嗽痰稀", "鼻塞咽干", "苔白脉弦"],
        relatedSyndromes: ["风寒犯肺证", "温燥伤肺证"],
        relatedConstitutions: ["平和质", "阴虚质"],
        modifications: [
            { condition: "表证轻", modification: "去苏叶" },
            { condition: "痰多壅肺", modification: "加瓜蒌、紫菀" }
        ],
        contraindications: ["风热袭肺者禁用"]
    },
    {
        id: "formula_060",
        name: "清燥救肺汤",
        pinyin: "Qing Zao Jiu Fei Tang",
        source: "《医门法律》",
        category: "治燥剂",
        subcategory: "轻宣外燥剂",
        composition: [
            { herbName: "桑叶", dosage: "9g", role: "君药" },
            { herbName: "石膏", dosage: "15g", role: "臣药" },
            { herbName: "麦冬", dosage: "6g", role: "臣药" },
            { herbName: "人参", dosage: "3g", role: "佐药" },
            { herbName: "阿胶", dosage: "6g", role: "佐药" },
            { herbName: "胡麻仁", dosage: "6g", role: "佐药" },
            { herbName: "杏仁", dosage: "6g", role: "佐药" },
            { herbName: "枇杷叶", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["清燥润肺"],
        indications: ["温燥伤肺证", "身热头痛", "干咳少痰", "气逆而喘", "咽干鼻燥", "心烦口渴", "舌干无苔", "脉虚大而数"],
        analysis: "本方为治温燥伤肺之营卫燥热内盛的主方。方中桑叶为君，苦寒清宣肺燥，透邪外出；石膏为臣，辛寒大清肺热；麦冬为臣，甘寒养阴润肺，二臣一清一润；人参益气生津，阿胶、胡麻仁滋阴养血润燥，杏仁、枇杷叶降利肺气止咳平喘，共为佐药；甘草为使，调和诸药。全方清宣润降并用，使燥热得清、肺津得复。",
        keyPoints: ["干咳少痰", "咽干鼻燥", "舌干无苔", "脉虚大而数"],
        relatedSyndromes: ["温燥伤肺证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴虚甚", modification: "加生地黄、知母" },
            { condition: "咳血", modification: "加白茅根、侧柏叶" }
        ],
        contraindications: ["凉燥咳嗽者禁用", "风寒咳嗽者禁用"]
    },
    {
        id: "formula_061",
        name: "增液汤",
        pinyin: "Zeng Ye Tang",
        source: "《温病条辨》",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "玄参", dosage: "30g", role: "君药" },
            { herbName: "麦冬", dosage: "24g", role: "臣药" },
            { herbName: "生地黄", dosage: "24g", role: "臣药" }
        ],
        functions: ["增液润燥"],
        indications: ["阳明温病津液不足证", "津亏肠燥便秘", "大便秘结", "口渴", "舌干红", "脉细数或沉而无力"],
        analysis: "本方为增水行舟之代表方，治阳明温病津亏之大便不通。方中玄参为君，重用一两，苦咸而寒，滋阴清热、生津润燥，启肾水以滋肠燥；麦冬为臣，甘寒养阴，润肺胃之燥；生地黄为臣，甘寒凉血滋阴，三药共奏养阴增液之功。全方重用养阴增液之品，使肠中津液得复，犹如「增水行舟」，燥屎得下，非以通便药强行通便。",
        keyPoints: ["大便秘结", "口渴", "舌干红", "脉细数"],
        relatedSyndromes: ["肠燥津亏证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "燥结甚", modification: "加芒硝、大黄以助通便" },
            { condition: "口干渴甚", modification: "加天花粉、石斛" }
        ],
        contraindications: ["阳明腑实之实热便秘者禁用", "气虚便秘者禁用"]
    },

    // ===================================================================
    // 二十六、祛湿剂 — 和胃化湿/清热祛湿
    // ===================================================================
    {
        id: "formula_062",
        name: "藿香正气散",
        pinyin: "Huo Xiang Zheng Qi San",
        source: "《太平惠民和剂局方》",
        category: "祛湿剂",
        subcategory: "化湿和胃剂",
        composition: [
            { herbName: "广藿香", dosage: "15g", role: "君药" },
            { herbName: "紫苏", dosage: "6g", role: "臣药" },
            { herbName: "白芷", dosage: "6g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "厚朴", dosage: "9g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "大腹皮", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "3片", role: "使药" },
            { herbName: "大枣", dosage: "3枚", role: "使药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["解表化湿", "理气和中"],
        indications: ["外感风寒，内伤湿滞证", "恶寒发热", "头痛", "胸膈满闷", "脘腹疼痛", "恶心呕吐", "肠鸣泄泻", "舌苔白腻", "脉浮缓"],
        analysis: "本方为治外感风寒、内伤湿滞的代表方，也是夏季暑湿感冒的常用方。方中藿香为君，辛散风寒，芳香化湿浊，辟秽和中，为治霍乱吐泻之要药；紫苏、白芷为臣，辛温助藿香解表散寒；陈皮、厚朴、半夏行气燥湿、降逆和胃；白术、茯苓健脾祛湿；大腹皮行气利水消肿；桔梗宣肺利气，共为佐药；生姜、大枣、甘草为使，调和诸药，兼以和中。",
        keyPoints: ["恶寒发热", "脘腹胀痛", "呕吐泄泻", "苔白腻"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质", "湿热质"],
        modifications: [
            { condition: "寒重痛剧", modification: "加干姜、吴茱萸" },
            { condition: "食滞", modification: "加神曲、山楂" }
        ],
        contraindications: ["阴虚内热者禁用", "湿热霍乱者禁用"]
    },
    {
        id: "formula_063",
        name: "茵陈蒿汤",
        pinyin: "Yin Chen Hao Tang",
        source: "《伤寒论》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "茵陈蒿", dosage: "30g", role: "君药" },
            { herbName: "栀子", dosage: "15g", role: "臣药" },
            { herbName: "大黄", dosage: "9g", role: "佐药" }
        ],
        functions: ["清热利湿", "退黄"],
        indications: ["湿热黄疸之阳黄证", "一身面目俱黄", "黄色鲜明", "发热", "腹微满", "口渴", "恶心欲吐", "小便短赤", "大便秘结", "舌红苔黄腻", "脉弦数或滑数"],
        analysis: "本方为治湿热黄疸之第一要方。方中茵陈蒿为君，重用至一两，苦寒清热利湿退黄，为治黄疸之专药；栀子为臣，苦寒清泄三焦之热，兼利小便，导湿热从小便而去，助茵陈分消其湿热；大黄为佐，苦寒泻热通便，利胆退黄，使湿热从大便而下。三药合用，前后分消，使湿去热清则黄疸自退。",
        keyPoints: ["黄疸（黄色鲜明）", "小便短赤", "舌红苔黄腻", "脉弦滑数"],
        relatedSyndromes: ["肝胆湿热证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "胁痛", modification: "加柴胡、郁金" },
            { condition: "呕吐", modification: "加竹茹、生姜" }
        ],
        contraindications: ["阴黄（寒湿黄疸）者禁用", "孕妇禁用"]
    },

    // ===================================================================
    // 二十七、祛湿剂 — 利水渗湿/温化寒湿/祛风胜湿
    // ===================================================================
    {
        id: "formula_064",
        name: "五苓散",
        pinyin: "Wu Ling San",
        source: "《伤寒论》",
        category: "祛湿剂",
        subcategory: "利水渗湿剂",
        composition: [
            { herbName: "猪苓", dosage: "9g", role: "君药" },
            { herbName: "茯苓", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "泽泻", dosage: "15g", role: "君药" },
            { herbName: "桂枝", dosage: "6g", role: "佐药" }
        ],
        functions: ["利水渗湿", "温阳化气"],
        indications: ["膀胱气化不利之蓄水证", "小便不利", "头痛微热", "烦渴欲饮", "水入即吐（水逆证）", "舌苔白腻", "脉浮"],
        analysis: "本方为利水渗湿之基础方。方中泽泻为君，重用甘淡而寒，直入膀胱，利水渗湿；猪苓、茯苓为臣，淡渗利水，猪苓力强，茯苓兼能健脾，二药助泽泻利水之力；白术为佐，苦温健脾燥湿，使水湿得以运化，与茯苓相兼，实脾土以制水；桂枝为佐，辛甘而温，温阳化气，外解太阳之表邪，内助膀胱气化以利水行。",
        keyPoints: ["小便不利", "水入即吐", "苔白腻脉浮"],
        relatedSyndromes: ["水饮内停证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "水肿甚", modification: "加桑白皮、大腹皮" },
            { condition: "兼表寒", modification: "加麻黄" }
        ],
        contraindications: ["津伤燥渴者禁用", "小便通利者慎用"]
    },
    {
        id: "formula_065",
        name: "苓桂术甘汤",
        pinyin: "Ling Gui Zhu Gan Tang",
        source: "《金匮要略》",
        category: "祛湿剂",
        subcategory: "温化寒湿剂",
        composition: [
            { herbName: "茯苓", dosage: "12g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["温阳化饮", "健脾利水"],
        indications: ["中阳不足之痰饮证", "胸胁支满", "目眩心悸", "咳而气短", "舌苔白滑", "脉弦滑"],
        analysis: "本方为治痰饮之和剂，「病痰饮者，当以温药和之」的代表方。方中茯苓为君，甘淡而平，健脾渗湿利水，使水饮从小便而出；桂枝为臣，辛甘而温，温阳化气，与茯苓相配，一利一化，通阳化水；白术为佐，苦温健脾燥湿，助茯苓运化水湿；炙甘草为使，益气和中，调和诸药，与桂枝辛甘化阳，助温阳之力。四药共奏温阳化饮之功。",
        keyPoints: ["胸胁支满", "目眩心悸", "苔白滑", "脉弦滑"],
        relatedSyndromes: ["脾阳虚证", "水饮内停证"],
        relatedConstitutions: ["痰湿质", "阳虚质"],
        modifications: [
            { condition: "呕吐痰涎", modification: "加半夏、生姜" },
            { condition: "水肿", modification: "加猪苓、泽泻" }
        ],
        contraindications: ["热痰咳嗽者禁用"]
    },

    // ===================================================================
    // 二十八、祛痰剂
    // ===================================================================
    {
        id: "formula_066",
        name: "二陈汤",
        pinyin: "Er Chen Tang",
        source: "《太平惠民和剂局方》",
        category: "祛痰剂",
        subcategory: "燥湿化痰剂",
        composition: [
            { herbName: "半夏", dosage: "15g", role: "君药" },
            { herbName: "陈皮", dosage: "15g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "3g", role: "佐药" },
            { herbName: "乌梅", dosage: "1枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "4.5g", role: "使药" }
        ],
        functions: ["燥湿化痰", "理气和中"],
        indications: ["湿痰证", "咳嗽痰多", "色白易咯", "胸膈痞闷", "恶心呕吐", "肢体困倦", "头眩心悸", "舌苔白润或白滑", "脉滑"],
        analysis: "本方为治湿痰证之基础方，世称「治痰之总剂」。方中半夏为君，辛温而燥，燥湿化痰、降逆和胃，为治湿痰要药；陈皮为臣，辛苦而温，理气燥湿化痰，使气顺则痰消，与半夏相伍，增强化痰之功；茯苓为佐，甘淡渗湿健脾，使湿无所聚则痰无由生；生姜降逆化痰、制半夏之毒，乌梅酸敛肺气，与半夏相伍一散一收，相反相成；甘草为使，调和诸药，兼能润肺和中。全方结构严谨，以半夏、陈皮二药陈久者良，故名「二陈」。",
        keyPoints: ["咳嗽痰多", "色白易咯", "胸膈痞闷", "苔白滑", "脉滑"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒痰", modification: "加干姜、细辛以温化寒痰" },
            { condition: "热痰", modification: "加瓜蒌、黄芩以清热化痰" }
        ],
        contraindications: ["阴虚燥咳者禁用", "痰中带血者禁用"]
    },
    {
        id: "formula_067",
        name: "保和丸",
        pinyin: "Bao He Wan",
        source: "《丹溪心法》",
        category: "消食剂",
        subcategory: "消食化滞剂",
        composition: [
            { herbName: "山楂", dosage: "18g", role: "君药" },
            { herbName: "神曲", dosage: "6g", role: "臣药" },
            { herbName: "莱菔子", dosage: "3g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "连翘", dosage: "3g", role: "佐药" }
        ],
        functions: ["消食导滞", "和胃清热"],
        indications: ["食积停滞证", "脘腹痞满胀痛", "嗳腐吞酸", "恶食呕恶", "或大便泄泻", "舌苔厚腻微黄", "脉滑"],
        analysis: "本方为治一切食积之通用方。方中山楂为君，重用消一切食积，尤善消肉食油腻之积；神曲消食健脾、化酒食陈腐之积，莱菔子消食下气、消麦面痰气之积，共为臣药；半夏、陈皮行气化滞、和胃止呕，茯苓健脾渗湿，连翘清解食积所生之郁热，共为佐药。全方消食化滞力强，兼能行气和胃清热，使食积得消、胃气得和。",
        keyPoints: ["脘腹痞满胀痛", "嗳腐吞酸", "舌苔厚腻", "脉滑"],
        relatedSyndromes: ["食积证", "食滞胃脘证"],
        relatedConstitutions: ["痰湿质", "湿热质"],
        modifications: [
            { condition: "食积较重", modification: "加枳实、槟榔" },
            { condition: "食积化热明显", modification: "加黄芩、黄连" }
        ],
        contraindications: ["脾胃虚寒无食积者禁用"]
    },
    {
        id: "formula_068",
        name: "乌梅丸",
        pinyin: "Wu Mei Wan",
        source: "《伤寒论》",
        category: "驱虫剂",
        subcategory: "驱虫剂",
        composition: [
            { herbName: "乌梅", dosage: "30g", role: "君药" },
            { herbName: "黄连", dosage: "12g", role: "臣药" },
            { herbName: "黄柏", dosage: "6g", role: "臣药" },
            { herbName: "附子", dosage: "6g", role: "佐药" },
            { herbName: "桂枝", dosage: "6g", role: "佐药" },
            { herbName: "干姜", dosage: "9g", role: "佐药" },
            { herbName: "蜀椒", dosage: "6g", role: "佐药" },
            { herbName: "细辛", dosage: "3g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" }
        ],
        functions: ["温脏安蛔"],
        indications: ["蛔厥证", "腹痛时作", "手足逆冷", "烦闷呕吐", "时发时止", "得食则呕", "甚则吐蛔", "舌苔薄白", "脉弦"],
        analysis: "本方为治蛔厥之代表方，集酸、苦、辛三味于一炉。方中乌梅为君，重用而极酸，酸能安蛔，使蛔静而痛止；黄连、黄柏为臣，苦寒清热，苦能下蛔，与乌梅酸味相伍，合「蛔得酸则静、得苦则下」之旨；附子、桂枝、干姜、蜀椒、细辛大辛大热，温脏散寒以使蛔安，合「蛔得辛则伏」之意；当归、人参益气养血扶正，共为佐药。全方寒热并用，酸苦辛兼备，为治蛔厥之专方。",
        keyPoints: ["蛔厥腹痛", "时发时止", "手足逆冷", "脉弦"],
        relatedSyndromes: ["蛔厥证"],
        relatedConstitutions: ["平和质", "气虚质"],
        modifications: [
            { condition: "虫积腹痛剧烈", modification: "加使君子、苦楝皮" },
            { condition: "热重", modification: "去附子、干姜，黄柏、黄连" }
        ],
        contraindications: ["非虫积腹痛者禁用", "孕妇慎用"]
    },

    // ============================================================================
    // 扩充批（2026-08）— 新增32首（formula_069 ~ formula_100），按教材高频与临床常用选录
    // ============================================================================

    // 二、和解剂扩充
    {
        id: "formula_069",
        name: "大柴胡汤",
        pinyin: "Da Chai Hu Tang",
        source: "《伤寒论》",
        category: "表里双解剂",
        subcategory: "解表攻里剂",
        composition: [
            { herbName: "柴胡", dosage: "15g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "芍药", dosage: "9g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "枳实", dosage: "9g", role: "佐药" },
            { herbName: "大黄", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "15g", role: "佐药" },
            { herbName: "大枣", dosage: "4枚", role: "使药" }
        ],
        functions: ["和解少阳", "内泻热结"],
        indications: ["少阳阳明合病", "往来寒热", "胸胁苦满", "呕不止", "郁郁微烦", "心下痞硬", "心下满痛", "大便不解", "协热下利", "舌苔黄", "脉弦有力"],
        analysis: "本方为和解少阳兼泻热结之代表方。方中柴胡为君，疏透少阳之邪；黄芩为臣，清泄少阳之热，柴芩合用外解内清，和解少阳。大黄、枳实内泻阳明热结、行气消痞，与柴芩相配则少阳阳明双解；芍药缓急止痛，配大黄治腹中实痛，伍枳实行气和血；半夏、生姜降逆止呕；大枣益气和中。诸药相合，外解少阳、内泻热结，枢机得运，腑气得通。",
        keyPoints: ["往来寒热", "胸胁苦满", "便秘或下利", "脉弦有力"],
        relatedSyndromes: ["少阳病证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "热盛", modification: "加黄连以清热" },
            { condition: "黄疸", modification: "加茵陈、栀子以利湿退黄" },
            { condition: "胆结石绞痛", modification: "加金钱草、海金沙以利胆排石" }
        ],
        contraindications: ["单纯少阳证无阳明热结者不宜", "气血两虚者慎用"]
    },
    {
        id: "formula_070",
        name: "四逆散",
        pinyin: "Si Ni San",
        source: "《伤寒论》",
        category: "和解剂",
        subcategory: "调和肝脾剂",
        composition: [
            { herbName: "柴胡", dosage: "6g", role: "君药" },
            { herbName: "枳实", dosage: "6g", role: "臣药" },
            { herbName: "白芍", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["透邪解郁", "疏肝理脾"],
        indications: ["阳郁厥逆证", "手足不温", "或咳", "或悸", "或小便不利", "或腹中痛", "肝脾气郁证", "胁肋胀闷", "脘腹疼痛", "脉弦"],
        analysis: "本方为调和肝脾之祖方。方中柴胡为君，升发阳气、疏肝解郁，使阳气得伸、郁邪外透；白芍为臣，养血敛阴、柔肝缓急，与柴胡相配一散一收、一升一敛，疏肝而不伤阴；枳实为佐，理气解郁、泄热破结，与柴胡相配一升一降，升清降浊，调畅气机；炙甘草为使，调和诸药，益气和中。四药合用，透邪解郁，疏肝理脾，气机条达则四肢自温。",
        keyPoints: ["手足不温", "胁肋胀闷", "脘腹疼痛", "脉弦"],
        relatedSyndromes: ["肝气郁结证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "兼食积", modification: "加神曲、山楂以消食" },
            { condition: "气滞较重", modification: "加香附、郁金以行气解郁" }
        ],
        contraindications: ["阳虚寒厥者不宜使用"]
    },
    {
        id: "formula_071",
        name: "导赤散",
        pinyin: "Dao Chi San",
        source: "《小儿药证直诀》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "生地黄", dosage: "6g", role: "君药" },
            { herbName: "木通", dosage: "6g", role: "君药" },
            { herbName: "竹叶", dosage: "3g", role: "臣药" },
            { herbName: "甘草梢", dosage: "3g", role: "佐药" }
        ],
        functions: ["清心利水养阴"],
        indications: ["心经火热证", "心胸烦热", "口渴面赤", "意欲冷饮", "口舌生疮", "心热移于小肠", "小便赤涩刺痛"],
        analysis: "本方为清心火、利小便之常用方。方中生地黄甘寒，凉血滋阴以制心火，水旺则火自降；木通苦寒，上清心经之火，下利小肠之热，导心火下行从小便而出，两药共为君药。竹叶甘淡寒，清心除烦、利水通淋为臣，助君药清心导热。甘草梢直达茎中而止痛，且调和诸药为佐。四药合用，清心养阴、利水通淋，使心火得清、心阴得养、热从小便去。",
        keyPoints: ["口舌生疮", "心胸烦热", "小便赤涩刺痛"],
        relatedSyndromes: ["心火亢盛证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "心火较盛", modification: "加黄连以清心泻火" },
            { condition: "小便赤涩明显", modification: "加车前子、滑石以利水通淋" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_072",
        name: "清胃散",
        pinyin: "Qing Wei San",
        source: "《脾胃论》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "黄连", dosage: "6g", role: "君药" },
            { herbName: "升麻", dosage: "6g", role: "臣药" },
            { herbName: "生地黄", dosage: "12g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" }
        ],
        functions: ["清胃凉血"],
        indications: ["胃火牙痛", "牙痛牵引头脑", "面颊发热", "其齿喜冷恶热", "牙宣出血", "牙龈红肿溃烂", "唇舌颊腮肿痛", "口气热臭", "口干舌燥", "舌红苔黄", "脉滑数"],
        analysis: "本方为治胃火牙痛之专方。方中黄连苦寒，直清胃腑之火为君。升麻辛凉，清热解毒、升而能散，引药直达阳明经为臣，与黄连相伍，使胃火得清、毒热得散，且升麻与黄连升降相因，升清降浊。生地黄、牡丹皮凉血滋阴、清热散瘀为佐，治热伤血络之出血。当归养血活血为佐，合丹皮以消肿止痛。五药合用，清胃凉血，火降血宁则牙痛自止。",
        keyPoints: ["牙痛牵引头痛", "喜冷恶热", "口气热臭", "牙龈红肿"],
        relatedSyndromes: ["胃热炽盛证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "便秘", modification: "加大黄以泻热通腑" },
            { condition: "口渴明显", modification: "加天花粉以生津止渴" }
        ],
        contraindications: ["牙痛属虚火或风寒者不宜使用"]
    },
    {
        id: "formula_073",
        name: "玉女煎",
        pinyin: "Yu Nv Jian",
        source: "《景岳全书》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "石膏", dosage: "15-30g", role: "君药" },
            { herbName: "熟地黄", dosage: "9-15g", role: "君药" },
            { herbName: "麦冬", dosage: "6g", role: "臣药" },
            { herbName: "知母", dosage: "4.5g", role: "臣药" },
            { herbName: "牛膝", dosage: "4.5g", role: "佐药" }
        ],
        functions: ["清胃热", "滋肾阴"],
        indications: ["胃热阴虚证", "头痛", "牙痛", "齿松牙龈", "烦热干渴", "舌红苔黄而干", "消渴", "消谷善饥"],
        analysis: "本方为清胃滋肾之剂。方中石膏辛甘大寒，清阳明胃火之有余为君；熟地黄甘温，滋少阴肾水之不足为君，二药相配，清火滋水并举。知母苦寒质润，助石膏清胃泻火，兼能滋阴润燥；麦冬养阴清热、益胃生津，共为臣药。牛膝导热下行、补益肝肾，引血热下行，为佐药。五药合用，清胃火、滋肾阴，虚实兼顾，火降阴复则牙痛、消渴自愈。",
        keyPoints: ["牙痛齿松", "烦热干渴", "舌红苔黄而干"],
        relatedSyndromes: ["胃阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "火盛明显", modification: "加栀子以清热泻火" },
            { condition: "肾虚明显", modification: "加山茱萸、枸杞子以补肾" }
        ],
        contraindications: ["脾虚便溏者不宜使用"]
    },
    {
        id: "formula_074",
        name: "白头翁汤",
        pinyin: "Bai Tou Weng Tang",
        source: "《伤寒论》",
        category: "清热剂",
        subcategory: "清热解毒剂",
        composition: [
            { herbName: "白头翁", dosage: "15g", role: "君药" },
            { herbName: "黄连", dosage: "6g", role: "臣药" },
            { herbName: "黄柏", dosage: "12g", role: "臣药" },
            { herbName: "秦皮", dosage: "12g", role: "佐药" }
        ],
        functions: ["清热解毒", "凉血止痢"],
        indications: ["热毒痢疾", "腹痛", "里急后重", "肛门灼热", "下痢脓血", "赤多白少", "渴欲饮水", "舌红苔黄", "脉弦数"],
        analysis: "本方为治热毒血痢之代表方。方中白头翁为君，味苦性寒，清热解毒、凉血止痢，为治热毒血痢之要药。黄连苦寒，泻火解毒、燥湿厚肠；黄柏清下焦湿热，二药共为臣，协助君药清热燥湿止痢。秦皮苦寒而涩，清热燥湿、收涩止痢，兼能凉肝明目为佐。四药合用，共奏清热解毒、凉血止痢之功，使热毒解、湿热清、血痢止。",
        keyPoints: ["下痢脓血赤多白少", "里急后重", "肛门灼热", "舌红苔黄"],
        relatedSyndromes: ["湿热蕴结证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "赤痢较重", modification: "加赤芍、地榆以凉血止血" },
            { condition: "腹痛里急明显", modification: "加木香、槟榔以行气导滞" }
        ],
        contraindications: ["虚寒痢疾者禁用"]
    },
    {
        id: "formula_075",
        name: "芍药汤",
        pinyin: "Shao Yao Tang",
        source: "《素问病机气宜保命集》",
        category: "清热剂",
        subcategory: "清热解毒剂",
        composition: [
            { herbName: "芍药", dosage: "30g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "黄连", dosage: "9g", role: "臣药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "大黄", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "6g", role: "佐药" },
            { herbName: "槟榔", dosage: "6g", role: "佐药" },
            { herbName: "肉桂", dosage: "2.5g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清热燥湿", "调气和血"],
        indications: ["湿热痢疾", "腹痛", "便脓血", "赤白相兼", "里急后重", "肛门灼热", "小便短赤", "舌苔黄腻", "脉弦数"],
        analysis: "本方为治湿热痢疾之要方。方中重用芍药为君，泻肝火、和营血、缓急止痛。黄芩、黄连清热燥湿、厚肠止痢为臣。大黄泻热通腑，使湿热积滞从大便而去，体现「通因通用」之法。木香、槟榔行气导滞，寓「调气则后重自除」之意；当归养血和血，寓「行血则便脓自愈」之意，共为佐药。肉桂少量反佐，防苦寒太过伤中阳。甘草调和诸药为使。全方气血并调、通因通用，湿热清、气血和则痢疾自愈。",
        keyPoints: ["下痢赤白相兼", "里急后重", "舌苔黄腻"],
        relatedSyndromes: ["湿热蕴结证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "痢疾初起兼表证", modification: "加葛根以解表升清" },
            { condition: "血痢明显", modification: "加白头翁、地榆以凉血止痢" }
        ],
        contraindications: ["虚寒痢疾者禁用"]
    },
    {
        id: "formula_076",
        name: "吴茱萸汤",
        pinyin: "Wu Zhu Yu Tang",
        source: "《伤寒论》",
        category: "温里剂",
        subcategory: "温中祛寒剂",
        composition: [
            { herbName: "吴茱萸", dosage: "9g", role: "君药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "生姜", dosage: "18g", role: "佐药" },
            { herbName: "大枣", dosage: "4枚", role: "使药" }
        ],
        functions: ["温中补虚", "降逆止呕"],
        indications: ["胃寒呕吐证", "食谷欲呕", "胃脘冷痛", "肝寒上逆证", "干呕吐涎沫", "巅顶头痛", "肾寒上逆证", "吐利", "手足逆冷", "烦躁欲死"],
        analysis: "本方为温中降逆之代表方。方中吴茱萸为君，味辛苦性热，温中散寒、降逆止呕、下气止痛，一药而肝、胃、脾、肾四经兼顾，为治三经虚寒之要药。生姜温胃散寒、降逆止呕为臣，与吴茱萸相配，温降之力更强。人参补气健脾、扶正祛邪为佐。大枣益气和中为使，与生姜相配调和脾胃。四药合用，温中补虚、降逆止呕，使寒散、虚复、呕止。",
        keyPoints: ["食谷欲呕或吐涎沫", "巅顶头痛", "手足逆冷"],
        relatedSyndromes: ["寒凝胃脘证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "呕吐较重", modification: "加半夏以增强降逆止呕之力" },
            { condition: "腹痛明显", modification: "加肉桂以温中止痛" }
        ],
        contraindications: ["郁热犯胃之呕逆者禁用"]
    },
    {
        id: "formula_077",
        name: "参苓白术散",
        pinyin: "Shen Ling Bai Zhu San",
        source: "《太平惠民和剂局方》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "人参", dosage: "15g", role: "君药" },
            { herbName: "白术", dosage: "15g", role: "臣药" },
            { herbName: "茯苓", dosage: "15g", role: "臣药" },
            { herbName: "山药", dosage: "15g", role: "臣药" },
            { herbName: "莲子肉", dosage: "9g", role: "佐药" },
            { herbName: "薏苡仁", dosage: "9g", role: "佐药" },
            { herbName: "白扁豆", dosage: "12g", role: "佐药" },
            { herbName: "砂仁", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "10g", role: "使药" }
        ],
        functions: ["益气健脾", "渗湿止泻"],
        indications: ["脾虚湿盛证", "饮食不化", "胸脘痞闷", "肠鸣泄泻", "四肢乏力", "形体消瘦", "面色萎黄", "舌淡苔白腻", "脉虚缓"],
        analysis: "本方为治脾虚夹湿之代表方。方中人参补脾胃之气为君。白术健脾燥湿、茯苓健脾渗湿为臣，二者相配健脾祛湿之力尤著。山药、莲子肉助人参健脾益气，兼能涩肠止泻；薏苡仁、白扁豆助白术、茯苓健脾渗湿；砂仁醒脾和胃、行气化滞，使补而不滞；桔梗宣肺利气、载药上行，兼有培土生金之意，共为佐药。甘草健脾和中、调和诸药为使。诸药合用，益气健脾、渗湿止泻，脾运健则湿自除。",
        keyPoints: ["肠鸣泄泻", "四肢乏力", "面色萎黄", "舌淡苔白腻"],
        relatedSyndromes: ["脾气虚证", "脾虚泄泻证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "久泻不止", modification: "加乌梅、石榴皮以涩肠止泻" },
            { condition: "兼食积", modification: "加神曲、山楂以消食和胃" }
        ],
        contraindications: ["阴虚火旺者慎用"]
    },
    {
        id: "formula_078",
        name: "归脾汤",
        pinyin: "Gui Pi Tang",
        source: "《济生方》",
        category: "补益剂",
        subcategory: "补血剂",
        composition: [
            { herbName: "白术", dosage: "9g", role: "君药" },
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "黄芪", dosage: "12g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "龙眼肉", dosage: "9g", role: "臣药" },
            { herbName: "茯神", dosage: "9g", role: "佐药" },
            { herbName: "酸枣仁", dosage: "9g", role: "佐药" },
            { herbName: "远志", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" },
            { herbName: "生姜", dosage: "3片", role: "使药" },
            { herbName: "大枣", dosage: "3枚", role: "使药" }
        ],
        functions: ["益气补血", "健脾养心"],
        indications: ["心脾气血两虚证", "心悸怔忡", "健忘失眠", "盗汗虚热", "体倦食少", "面色萎黄", "舌淡苔薄白", "脉细弱", "脾不统血证", "便血", "皮下紫癜", "妇女崩漏", "月经超前", "量多色淡"],
        analysis: "本方为益气补血、健脾养心之要方。方中黄芪、人参、白术甘温补气健脾为君，气旺则血生、脾健则统血。当归、龙眼肉养血补心为臣，与补气药相配气血双补。茯神、酸枣仁、远志宁心安神为佐；木香理气醒脾，使补而不滞；生姜、大枣调和脾胃。炙甘草补气健脾、调和诸药为使。全方心脾同治、气血双补，脾健则统血有权，心血足则神安志定。",
        keyPoints: ["心悸失眠", "体倦食少", "面色萎黄", "舌淡脉细弱"],
        relatedSyndromes: ["心脾两虚证", "脾不统血证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "崩漏下血", modification: "加山茱萸、茜草以固冲止血" },
            { condition: "失眠较重", modification: "加五味子、柏子仁以养心安神" }
        ],
        contraindications: ["阴虚火旺者慎用"]
    },
    {
        id: "formula_079",
        name: "生脉散",
        pinyin: "Sheng Mai San",
        source: "《医学启源》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "麦冬", dosage: "9g", role: "臣药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" }
        ],
        functions: ["益气生津", "敛阴止汗"],
        indications: ["温热暑热耗气伤阴证", "汗多神疲", "体倦乏力", "气短懒言", "咽干口渴", "舌干红少苔", "脉虚数", "久咳伤肺气阴两虚证", "干咳少痰", "短气自汗", "口干舌燥", "脉虚细"],
        analysis: "本方为益气养阴之基础方。方中人参为君，大补元气、益肺生津，使气旺则津生。麦冬为臣，养阴清热、润肺生津，与人参相配则气阴双补。五味子为佐，酸收敛肺、止汗固脱，与麦冬相配酸甘化阴，与人参相配则补敛兼施。三药一补、一润、一敛，合而益气生津、敛阴止汗，使气复津生、汗止阴存。",
        keyPoints: ["体倦气短", "咽干口渴", "汗多", "脉虚"],
        relatedSyndromes: ["气阴两虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "阴虚明显", modification: "加玉竹、沙参以养阴生津" },
            { condition: "汗出过多", modification: "加牡蛎、浮小麦以固表止汗" }
        ],
        contraindications: ["外感表证未解者慎用"]
    },
    {
        id: "formula_080",
        name: "炙甘草汤",
        pinyin: "Zhi Gan Cao Tang",
        source: "《伤寒论》",
        category: "补益剂",
        subcategory: "补血剂",
        composition: [
            { herbName: "炙甘草", dosage: "12g", role: "君药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "生地黄", dosage: "30g", role: "臣药" },
            { herbName: "阿胶", dosage: "6g", role: "臣药" },
            { herbName: "麦冬", dosage: "10g", role: "佐药" },
            { herbName: "麻子仁", dosage: "10g", role: "佐药" },
            { herbName: "桂枝", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "10枚", role: "使药" }
        ],
        functions: ["益气滋阴", "通阳复脉"],
        indications: ["阴血阳气虚弱心脉失养证", "脉结代", "心动悸", "虚羸少气", "舌光少苔", "质干而萎", "虚劳肺痿", "干咳无痰", "或咯吐涎沫", "气短"],
        analysis: "本方为气血阴阳并补、复脉定悸之名方。方中重用炙甘草为君，补气复脉。生地黄、阿胶、麦冬、麻子仁滋阴补血以充血脉为臣。人参益气，桂枝、生姜通阳复脉，使滋阴药得温通则补而不滞，气血阴阳同调。大枣益气滋脾为使。全方滋阴养血、益气通阳，气血充足、阴阳协调则脉气接续，脉结代、心动悸自平。",
        keyPoints: ["脉结代", "心动悸", "虚羸少气"],
        relatedSyndromes: ["气血两虚证", "心血虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "心悸较甚", modification: "加酸枣仁、柏子仁以养心安神" },
            { condition: "阴虚明显", modification: "加五味子以敛阴" }
        ],
        contraindications: ["湿浊中阻者慎用"]
    },
    {
        id: "formula_081",
        name: "瓜蒌薤白白酒汤",
        pinyin: "Gua Lou Xie Bai Bai Jiu Tang",
        source: "《金匮要略》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "瓜蒌", dosage: "12g", role: "君药" },
            { herbName: "薤白", dosage: "9g", role: "臣药" },
            { herbName: "白酒", dosage: "适量", role: "佐药" }
        ],
        functions: ["通阳散结", "行气祛痰"],
        indications: ["胸痹证", "胸背疼痛", "心痛彻背", "喘息咳唾", "短气", "舌苔白腻", "脉沉弦或紧"],
        analysis: "本方为治胸痹之代表方。方中瓜蒌为君，涤痰散结、宽胸利气，能化胸中痰浊。薤白为臣，辛温通阳、行气止痛，善散阴寒凝结，与瓜蒌相配则化浊通阳、痰去阳通。白酒辛温通阳、轻扬善行，助药力上达胸膈而通阳散结为佐。三药合用，通阳散结、行气祛痰，胸阳宣通则痹痛自解。",
        keyPoints: ["胸背痛", "喘息短气", "舌苔白腻"],
        relatedSyndromes: ["心脉痹阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "痰浊较重", modification: "加半夏以燥湿化痰" },
            { condition: "气滞明显", modification: "加枳实、厚朴以行气消痞" }
        ],
        contraindications: ["阴虚肺燥者不宜使用"]
    },
    {
        id: "formula_082",
        name: "桂枝茯苓丸",
        pinyin: "Gui Zhi Fu Ling Wan",
        source: "《金匮要略》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "桂枝", dosage: "9g", role: "君药" },
            { herbName: "茯苓", dosage: "9g", role: "臣药" },
            { herbName: "牡丹皮", dosage: "9g", role: "臣药" },
            { herbName: "桃仁", dosage: "9g", role: "佐药" },
            { herbName: "芍药", dosage: "9g", role: "佐药" }
        ],
        functions: ["活血化瘀", "缓消癥块"],
        indications: ["瘀阻胞宫证", "妇人素有癥块", "妊娠漏下不止", "胎动不安", "血瘀经闭", "行经腹痛", "产后恶露不尽", "血色紫暗"],
        analysis: "本方为缓消癥块之代表方。方中桂枝为君，温通经脉、行散瘀滞，以畅血行。茯苓为臣，渗湿利水、益心脾之气，与桂枝相配则温通渗利。牡丹皮、桃仁为臣佐，活血化瘀、消癥散结。芍药养血和营、缓急止痛为佐，使化瘀而不伤正。五药合用，活血化瘀、缓消癥块，使瘀去新生、癥块渐消，妇人诸疾得愈。",
        keyPoints: ["癥块", "腹痛拒按", "血色紫暗"],
        relatedSyndromes: ["癥瘕血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "疼痛较甚", modification: "加延胡索、五灵脂以活血止痛" },
            { condition: "瘀血较重", modification: "加三棱、莪术以破血消癥" }
        ],
        contraindications: ["孕妇忌用", "月经过多者慎用"]
    },
    {
        id: "formula_083",
        name: "温经汤",
        pinyin: "Wen Jing Tang",
        source: "《金匮要略》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "吴茱萸", dosage: "9g", role: "君药" },
            { herbName: "桂枝", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "6g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "臣药" },
            { herbName: "芍药", dosage: "6g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "6g", role: "佐药" },
            { herbName: "阿胶", dosage: "6g", role: "佐药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "佐药" },
            { herbName: "半夏", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "6g", role: "使药" }
        ],
        functions: ["温经散寒", "养血祛瘀"],
        indications: ["冲任虚寒瘀血阻滞证", "月经不调", "或前或后", "或逾期不止", "或一月再行", "傍晚发热", "手心烦热", "唇口干燥", "小腹冷痛", "久不受孕"],
        analysis: "本方为妇科调经之祖方。方中吴茱萸、桂枝为君，温经散寒、通利血脉。当归、川芎、芍药为臣，养血活血调经。牡丹皮活血祛瘀，兼退虚热；阿胶、麦冬养血滋阴润燥，防温燥伤阴；人参、甘草益气健脾，资生化之源；半夏、生姜和胃降逆。全方温经散寒与养血祛瘀并用，兼益气温阳滋阴，寒去瘀消、血行经调，则诸症自愈。",
        keyPoints: ["月经不调", "小腹冷痛", "唇口干燥", "手心烦热"],
        relatedSyndromes: ["痛经寒凝血瘀证"],
        relatedConstitutions: ["阴虚质", "阳虚质"],
        modifications: [
            { condition: "小腹冷痛明显", modification: "加小茴香、乌药以温经止痛" },
            { condition: "血虚明显", modification: "加熟地黄以养血填精" }
        ],
        contraindications: ["实热证者忌用"]
    },
    {
        id: "formula_084",
        name: "黄土汤",
        pinyin: "Huang Tu Tang",
        source: "《金匮要略》",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "灶心黄土", dosage: "30g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "附子", dosage: "9g", role: "臣药" },
            { herbName: "生地黄", dosage: "9g", role: "佐药" },
            { herbName: "阿胶", dosage: "9g", role: "佐药" },
            { herbName: "黄芩", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["温阳健脾", "养血止血"],
        indications: ["脾阳不足脾不统血证", "大便下血", "先便后血", "吐血衄血", "血色暗淡", "四肢不温", "面色萎黄", "舌淡苔白", "脉沉细无力"],
        analysis: "本方为温阳止血之代表方。方中灶心黄土为君，温中涩肠、收敛止血。白术、附子为臣，温阳健脾，以复脾统血之权。生地黄、阿胶滋阴养血、止血，为佐；黄芩苦寒坚阴，制约白术、附子之温燥，使温阳而不动血，为佐药。甘草调和诸药为使。全方温阳与滋阴并用，标本兼顾，脾阳复则统血有权，血归其经则下血自止。",
        keyPoints: ["便血暗淡", "四肢不温", "面色萎黄", "舌淡苔白"],
        relatedSyndromes: ["脾不统血证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "气虚明显", modification: "加黄芪以益气摄血" },
            { condition: "出血较多", modification: "加大蓟、小蓟以凉血止血" }
        ],
        contraindications: ["实热出血者禁用"]
    },

    // 十三、治风剂扩充
    {
        id: "formula_085",
        name: "天麻钩藤饮",
        pinyin: "Tian Ma Gou Teng Yin",
        source: "《中医内科杂病证治新义》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "天麻", dosage: "9g", role: "君药" },
            { herbName: "钩藤", dosage: "12g", role: "君药" },
            { herbName: "石决明", dosage: "18g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "黄芩", dosage: "9g", role: "佐药" },
            { herbName: "川牛膝", dosage: "12g", role: "佐药" },
            { herbName: "杜仲", dosage: "9g", role: "佐药" },
            { herbName: "益母草", dosage: "9g", role: "佐药" },
            { herbName: "桑寄生", dosage: "9g", role: "佐药" },
            { herbName: "夜交藤", dosage: "9g", role: "佐药" },
            { herbName: "茯神", dosage: "9g", role: "佐药" }
        ],
        functions: ["平肝息风", "清热活血", "补益肝肾"],
        indications: ["肝阳偏亢肝风上扰证", "头痛", "眩晕", "失眠多梦", "口苦面红", "舌红苔黄", "脉弦或数"],
        analysis: "本方为治肝阳上亢、肝风上扰之常用方。方中天麻、钩藤为君，平肝息风，为治眩晕之要药。石决明为臣，平肝潜阳、清热明目，助君药平息肝风。栀子、黄芩清热泻火，使肝经之热得清；川牛膝引血下行，兼能活血通络；杜仲、桑寄生补益肝肾，治病求本；益母草活血利水；夜交藤、茯神宁心安神，共为佐药。全方平肝息风与清热活血、补益肝肾并举，标本兼顾。",
        keyPoints: ["头痛眩晕", "失眠多梦", "舌红苔黄", "脉弦数"],
        relatedSyndromes: ["肝阳上亢证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "眩晕较重", modification: "加菊花、白蒺藜以平肝明目" },
            { condition: "阴虚明显", modification: "加白芍、生地黄以滋阴柔肝" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_086",
        name: "桑杏汤",
        pinyin: "Sang Xing Tang",
        source: "《温病条辨》",
        category: "治燥剂",
        subcategory: "轻宣外燥剂",
        composition: [
            { herbName: "桑叶", dosage: "3g", role: "君药" },
            { herbName: "杏仁", dosage: "4.5g", role: "君药" },
            { herbName: "沙参", dosage: "6g", role: "臣药" },
            { herbName: "象贝母", dosage: "3g", role: "佐药" },
            { herbName: "香豉", dosage: "3g", role: "佐药" },
            { herbName: "栀子皮", dosage: "3g", role: "佐药" },
            { herbName: "梨皮", dosage: "3g", role: "佐药" }
        ],
        functions: ["清宣温燥", "润肺止咳"],
        indications: ["外感温燥证", "身热不甚", "口渴", "咽干鼻燥", "干咳无痰", "或痰少而黏", "舌红苔薄白而干", "脉浮数而右脉大"],
        analysis: "本方为治温燥伤肺轻证之代表方。方中桑叶清宣上焦燥热、杏仁宣利肺气止咳，共为君药。沙参润肺生津为臣。象贝母清化痰热；香豉、栀子皮清泄郁热；梨皮润肺生津，共为佐药。全方轻宣凉润，使燥热得清、肺津得复，则咳嗽自止。",
        keyPoints: ["干咳无痰", "咽干鼻燥", "苔薄白而干"],
        relatedSyndromes: ["温燥伤肺证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咽痛明显", modification: "加牛蒡子、薄荷以利咽" },
            { condition: "咳血", modification: "加白茅根、仙鹤草以凉血止血" }
        ],
        contraindications: ["风寒咳嗽者忌用"]
    },
    {
        id: "formula_087",
        name: "麦门冬汤",
        pinyin: "Mai Men Dong Tang",
        source: "《金匮要略》",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "麦门冬", dosage: "70g", role: "君药" },
            { herbName: "半夏", dosage: "10g", role: "臣药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "甘草", dosage: "6g", role: "佐药" },
            { herbName: "粳米", dosage: "5g", role: "佐药" },
            { herbName: "大枣", dosage: "4枚", role: "佐药" }
        ],
        functions: ["滋养肺胃", "降逆下气"],
        indications: ["肺阴不足证", "咳逆上气", "咯痰不爽", "或咳吐涎沫", "口干咽燥", "手足心热", "舌红少苔", "脉虚数", "胃阴不足证", "呕吐", "或噎膈", "舌干红少苔"],
        analysis: "本方为滋养肺胃阴津之代表方。方中重用麦门冬为君，其性甘寒，滋养肺胃之阴、清虚火。半夏为臣，降逆下气、化痰止呕，与麦冬相配（七比一）则润而不腻、降而不燥，为「去性取用」之典范。人参补脾益气为臣。甘草、粳米、大枣补脾益胃、培土生金，使中气健运则肺津自生。诸药合用，滋阴润燥、降逆下气，肺胃得养则咳逆、呕吐自止。",
        keyPoints: ["咳逆上气", "口干咽燥", "舌红少苔"],
        relatedSyndromes: ["肺阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "肺痿咳甚", modification: "加桑叶、天花粉以润肺" },
            { condition: "呕吐明显", modification: "加竹茹、旋覆花以降逆止呕" }
        ],
        contraindications: ["痰湿壅盛者不宜使用"]
    },
    {
        id: "formula_088",
        name: "养阴清肺汤",
        pinyin: "Yang Yin Qing Fei Tang",
        source: "《重楼玉钥》",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "生地黄", dosage: "6g", role: "君药" },
            { herbName: "麦冬", dosage: "3.6g", role: "臣药" },
            { herbName: "玄参", dosage: "4.5g", role: "臣药" },
            { herbName: "贝母", dosage: "2.4g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "2.4g", role: "佐药" },
            { herbName: "白芍", dosage: "2.4g", role: "佐药" },
            { herbName: "薄荷", dosage: "1.5g", role: "佐药" },
            { herbName: "甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["养阴清肺", "解毒利咽"],
        indications: ["白喉", "喉间起白如腐", "不易拭去", "咽喉肿痛", "初起发热", "或不发热", "鼻干唇燥", "或咳或不咳", "呼吸有声", "似喘非喘", "脉数无力或细数"],
        analysis: "本方为治白喉之专方。方中生地黄养阴清热、凉血解毒为君。玄参、麦冬养阴生津、润肺利咽为臣，与生地相配滋阴之力更著。牡丹皮清热凉血散瘀；贝母润肺化痰；白芍敛阴和营；薄荷宣肺利咽；甘草清热解毒、调和诸药。全方养阴清肺、解毒利咽，阴复毒解则咽喉自利。",
        keyPoints: ["咽喉肿痛", "喉间白腐", "鼻干唇燥"],
        relatedSyndromes: ["肺阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "热毒较重", modification: "加金银花、连翘以清热解毒" },
            { condition: "咽痛甚", modification: "加射干、山豆根以利咽止痛" }
        ],
        contraindications: ["脾虚便溏者慎用"]
    },
    {
        id: "formula_089",
        name: "百合固金汤",
        pinyin: "Bai He Gu Jin Tang",
        source: "《慎斋遗书》",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "熟地黄", dosage: "9g", role: "君药" },
            { herbName: "生地黄", dosage: "6g", role: "君药" },
            { herbName: "百合", dosage: "3g", role: "君药" },
            { herbName: "麦冬", dosage: "4.5g", role: "臣药" },
            { herbName: "贝母", dosage: "3g", role: "佐药" },
            { herbName: "玄参", dosage: "2.4g", role: "佐药" },
            { herbName: "当归", dosage: "3g", role: "佐药" },
            { herbName: "白芍", dosage: "3g", role: "佐药" },
            { herbName: "桔梗", dosage: "2.4g", role: "佐药" },
            { herbName: "甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["滋养肺肾", "止咳化痰"],
        indications: ["肺肾阴虚证", "咳嗽气喘", "痰中带血", "咽喉燥痛", "头晕目眩", "午后潮热", "舌红少苔", "脉细数"],
        analysis: "本方为治肺肾阴虚咳血之代表方。方中百合润肺止咳、清心安神为君；熟地黄、生地黄滋阴补肾、凉血止血为君。麦冬、玄参养阴清热、润肺生津为臣。贝母润肺化痰止咳；当归、白芍养血和血；桔梗宣肺利咽、载药上行，使药力达于肺；甘草调和诸药为使。全方滋养肺肾之阴，阴复火降则咳嗽、咯血自止。",
        keyPoints: ["咳痰带血", "咽喉燥痛", "午后潮热", "舌红少苔"],
        relatedSyndromes: ["肺肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咳血明显", modification: "加白茅根、仙鹤草以凉血止血" },
            { condition: "盗汗明显", modification: "加牡蛎、五味子以敛汗" }
        ],
        contraindications: ["脾虚便溏者慎用"]
    },

    // 十四、祛湿剂扩充
    {
        id: "formula_090",
        name: "平胃散",
        pinyin: "Ping Wei San",
        source: "《太平惠民和剂局方》",
        category: "祛湿剂",
        subcategory: "化湿和胃剂",
        composition: [
            { herbName: "苍术", dosage: "12g", role: "君药" },
            { herbName: "厚朴", dosage: "9g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "生姜", dosage: "2片", role: "使药" },
            { herbName: "大枣", dosage: "2枚", role: "使药" }
        ],
        functions: ["燥湿运脾", "行气和胃"],
        indications: ["湿滞脾胃证", "脘腹胀满", "不思饮食", "口淡无味", "呕吐恶心", "嗳气吞酸", "肢体沉重", "怠惰嗜卧", "常多自利", "舌苔白腻而厚", "脉缓"],
        analysis: "本方为燥湿运脾、行气和胃之基础方。方中苍术为君，苦温性燥，燥湿运脾。厚朴为臣，行气除满、芳香化湿，与苍术相配则燥湿以助运化。陈皮为佐，理气化滞、和胃止呕。甘草为使，调和诸药。生姜、大枣调和脾胃。四药合用，燥湿运脾、行气和胃，湿去脾健则胀满呕恶自除。",
        keyPoints: ["脘腹胀满", "口淡无味", "舌苔白腻而厚"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "兼食积", modification: "加山楂、神曲以消食化积" },
            { condition: "兼寒", modification: "加干姜、肉桂以温中散寒" }
        ],
        contraindications: ["阴虚内热者慎用"]
    },
    {
        id: "formula_091",
        name: "三仁汤",
        pinyin: "San Ren Tang",
        source: "《温病条辨》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "杏仁", dosage: "15g", role: "君药" },
            { herbName: "白蔻仁", dosage: "6g", role: "臣药" },
            { herbName: "薏苡仁", dosage: "18g", role: "君药" },
            { herbName: "飞滑石", dosage: "18g", role: "臣药" },
            { herbName: "通草", dosage: "6g", role: "佐药" },
            { herbName: "竹叶", dosage: "6g", role: "佐药" },
            { herbName: "厚朴", dosage: "6g", role: "佐药" },
            { herbName: "半夏", dosage: "10g", role: "佐药" }
        ],
        functions: ["宣畅气机", "清利湿热"],
        indications: ["湿温初起暑温夹湿湿重于热证", "头痛恶寒", "身重疼痛", "肢体倦怠", "面色淡黄", "胸闷不饥", "午后身热", "苔白不渴", "脉弦细而濡"],
        analysis: "本方为治湿温初起之代表方。方中杏仁宣利上焦肺气以开肺气（开上）；白蔻仁芳香化湿、行气宽中以畅中焦（畅中）；薏苡仁甘淡渗利湿热、健脾以渗下焦（渗下），三仁分利三焦，共为君药。飞滑石、通草、竹叶清利湿热为臣佐。厚朴、半夏行气化湿、散满除痞，使气行则湿化。诸药合用，宣上畅中渗下，使湿热之邪从三焦分消。",
        keyPoints: ["身重倦怠", "胸闷不饥", "午后身热", "苔白腻"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "兼表证", modification: "加藿香、香薷以解表化湿" },
            { condition: "热象明显", modification: "加黄芩、栀子以清热" }
        ],
        contraindications: ["阴虚津亏者忌用"]
    },
    {
        id: "formula_092",
        name: "八正散",
        pinyin: "Ba Zheng San",
        source: "《太平惠民和剂局方》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "车前子", dosage: "9g", role: "君药" },
            { herbName: "瞿麦", dosage: "9g", role: "臣药" },
            { herbName: "萹蓄", dosage: "9g", role: "臣药" },
            { herbName: "滑石", dosage: "9g", role: "臣药" },
            { herbName: "山栀子仁", dosage: "9g", role: "臣药" },
            { herbName: "木通", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草梢", dosage: "9g", role: "佐药" },
            { herbName: "大黄", dosage: "9g", role: "佐药" }
        ],
        functions: ["清热泻火", "利水通淋"],
        indications: ["湿热淋证", "尿频尿急", "溺时涩痛", "淋沥不畅", "尿色浑赤", "甚则癃闭不通", "小腹急满", "口燥咽干", "舌苔黄腻", "脉滑数"],
        analysis: "本方为治热淋之代表方。方中车前子、木通为君，清热利水通淋。瞿麦、萹蓄、滑石为臣，助君药清热利湿通淋。栀子清泄三焦湿热；大黄泻热降火、通腑导热，使湿热从二便分消；炙甘草梢缓急止痛、调和诸药。八药合用，清热泻火、利水通淋，使湿热清、水道通则淋证自愈。",
        keyPoints: ["尿频涩痛", "淋沥不畅", "舌苔黄腻"],
        relatedSyndromes: ["湿热下注证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "血淋", modification: "加小蓟、白茅根以凉血止血" },
            { condition: "石淋", modification: "加金钱草、海金沙以化石通淋" }
        ],
        contraindications: ["体虚久淋者慎用", "孕妇慎用"]
    },
    {
        id: "formula_093",
        name: "二妙散",
        pinyin: "Er Miao San",
        source: "《丹溪心法》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "黄柏", dosage: "15g", role: "君药" },
            { herbName: "苍术", dosage: "15g", role: "臣药" }
        ],
        functions: ["清热燥湿"],
        indications: ["湿热下注证", "筋骨疼痛", "或两足痿软", "或足膝红肿热痛", "或下部湿疮", "或湿热带下", "或湿热痿证", "小便短赤", "舌苔黄腻"],
        analysis: "本方为治湿热下注之基础方。方中黄柏为君，苦寒清热燥湿，善清下焦湿热。苍术为臣，苦温燥湿健脾，使湿去则热孤。二药相伍，一寒一温、一清一燥，清热燥湿之力专一，为治下焦湿热诸证之基础方。",
        keyPoints: ["足膝肿痛", "下部湿疮", "苔黄腻"],
        relatedSyndromes: ["湿热下注证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "湿热痿证兼足膝肿痛", modification: "加牛膝、薏苡仁（即三妙丸、四妙丸）" },
            { condition: "湿热带下", modification: "加芡实、椿皮以燥湿止带" }
        ],
        contraindications: ["阴虚者慎用"]
    },
    {
        id: "formula_094",
        name: "甘露消毒丹",
        pinyin: "Gan Lu Xiao Du Dan",
        source: "《温热经纬》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "飞滑石", dosage: "15g", role: "君药" },
            { herbName: "绵茵陈", dosage: "11g", role: "君药" },
            { herbName: "淡黄芩", dosage: "10g", role: "臣药" },
            { herbName: "石菖蒲", dosage: "6g", role: "佐药" },
            { herbName: "川贝母", dosage: "5g", role: "佐药" },
            { herbName: "木通", dosage: "5g", role: "佐药" },
            { herbName: "广藿香", dosage: "4g", role: "佐药" },
            { herbName: "连翘", dosage: "4g", role: "佐药" },
            { herbName: "白蔻仁", dosage: "4g", role: "佐药" },
            { herbName: "薄荷", dosage: "4g", role: "佐药" },
            { herbName: "射干", dosage: "4g", role: "佐药" }
        ],
        functions: ["利湿化浊", "清热解毒"],
        indications: ["湿温时疫邪在气分湿热并重证", "发热倦怠", "胸闷腹胀", "肢酸咽痛", "身目发黄", "颐肿口渴", "小便短赤", "泄泻淋浊", "舌苔淡白或厚腻或干黄"],
        analysis: "本方为治湿温时疫、湿热并重之代表方。方中滑石、茵陈、黄芩为君，清利湿热、清热解毒，为「三宝」之一。石菖蒲、藿香、白蔻仁芳香化浊、醒脾和中；连翘、薄荷、射干、贝母清热解毒、利咽散结；木通助滑石清利湿热。全方芳香与清热并施，上中下三焦同治，使湿热毒邪从内外分消。",
        keyPoints: ["发热倦怠", "胸闷腹胀", "咽痛身黄", "苔腻"],
        relatedSyndromes: ["脾胃湿热证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "黄疸明显", modification: "加栀子、大黄以利湿退黄" },
            { condition: "咽痛较重", modification: "加板蓝根、山豆根以解毒利咽" }
        ],
        contraindications: ["阴证湿温者忌用"]
    },
    {
        id: "formula_095",
        name: "真武汤",
        pinyin: "Zhen Wu Tang",
        source: "《伤寒论》",
        category: "祛湿剂",
        subcategory: "温化寒湿剂",
        composition: [
            { herbName: "附子", dosage: "9g", role: "君药" },
            { herbName: "白术", dosage: "6g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "臣药" },
            { herbName: "芍药", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" }
        ],
        functions: ["温阳利水"],
        indications: ["阳虚水泛证", "小便不利", "四肢沉重疼痛", "腹痛下利", "或咳或呕", "舌质淡胖", "苔白滑", "脉沉细", "太阳病发汗太过阳虚水泛", "振振欲擗地"],
        analysis: "本方为温阳利水之名方。方中附子为君，大辛大热，温肾助阳、化气行水，为治阳虚水泛之主药。白术健脾燥湿、茯苓淡渗利水为臣，使水湿从小便而去。生姜为佐，温散水气，助附子温阳。芍药为佐，利小便、缓急止痛，并制约附子之刚燥。五药合用，温肾健脾、化气行水，阳复水行则水肿、下利自愈。",
        keyPoints: ["小便不利", "肢体浮肿沉重", "舌淡胖苔白滑"],
        relatedSyndromes: ["脾肾阳虚证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "咳嗽明显", modification: "加五味子、细辛以温肺化饮" },
            { condition: "水肿较重", modification: "加猪苓、泽泻以利水消肿" }
        ],
        contraindications: ["阴虚内热者禁用"]
    },
    {
        id: "formula_096",
        name: "独活寄生汤",
        pinyin: "Du Huo Ji Sheng Tang",
        source: "《备急千金要方》",
        category: "祛湿剂",
        subcategory: "祛风胜湿剂",
        composition: [
            { herbName: "独活", dosage: "9g", role: "君药" },
            { herbName: "桑寄生", dosage: "6g", role: "臣药" },
            { herbName: "杜仲", dosage: "6g", role: "臣药" },
            { herbName: "牛膝", dosage: "6g", role: "臣药" },
            { herbName: "细辛", dosage: "6g", role: "佐药" },
            { herbName: "秦艽", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "6g", role: "佐药" },
            { herbName: "肉桂心", dosage: "6g", role: "佐药" },
            { herbName: "防风", dosage: "6g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "芍药", dosage: "6g", role: "佐药" },
            { herbName: "干地黄", dosage: "6g", role: "佐药" }
        ],
        functions: ["祛风湿", "止痹痛", "益肝肾", "补气血"],
        indications: ["痹证日久肝肾两虚气血不足证", "腰膝疼痛", "肢节屈伸不利", "或麻木不仁", "畏寒喜温", "心悸气短", "舌淡苔白", "脉细弱"],
        analysis: "本方为治痹证日久、正虚邪恋之代表方。方中独活为君，祛下焦与筋骨间之风寒湿邪。桑寄生、杜仲、牛膝为臣，补肝肾、强筋骨。细辛、秦艽、防风祛风散寒除湿；肉桂温经散寒通脉；茯苓利水渗湿；当归、川芎、地黄、芍药养血活血，寓「治风先治血，血行风自灭」之意；人参、甘草益气健脾。全方祛邪与扶正并用，邪去正复则痹痛自除。",
        keyPoints: ["腰膝冷痛", "屈伸不利", "畏寒喜温", "脉细弱"],
        relatedSyndromes: ["风寒湿痹证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "寒邪较重", modification: "加附子、干姜以温经散寒" },
            { condition: "湿邪较重", modification: "加薏苡仁、防己以祛湿" }
        ],
        contraindications: ["湿热痹证者慎用"]
    },

    // 十五、祛痰剂扩充
    {
        id: "formula_097",
        name: "温胆汤",
        pinyin: "Wen Dan Tang",
        source: "《三因极一病证方论》",
        category: "祛痰剂",
        subcategory: "燥湿化痰剂",
        composition: [
            { herbName: "半夏", dosage: "6g", role: "君药" },
            { herbName: "竹茹", dosage: "6g", role: "臣药" },
            { herbName: "枳实", dosage: "6g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "4.5g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "生姜", dosage: "5片", role: "使药" },
            { herbName: "大枣", dosage: "1枚", role: "使药" }
        ],
        functions: ["理气化痰", "和胃利胆"],
        indications: ["胆郁痰扰证", "胆怯易惊", "头眩心悸", "心烦不眠", "夜多异梦", "或呕恶呃逆", "眩晕癫痫", "苔白腻", "脉弦滑"],
        analysis: "本方为治胆郁痰扰之代表方。方中半夏为君，燥湿化痰、降逆和胃。竹茹为臣，清胆和胃、止呕除烦，与半夏相配温凉相济。枳实、陈皮理气化痰，使气顺则痰消。茯苓健脾渗湿，以杜生痰之源。甘草和中。生姜、大枣调和脾胃。全方清温并用、化痰与理气并行，胆胃和则痰扰诸症自解。",
        keyPoints: ["胆怯易惊", "心烦不眠", "苔白腻", "脉弦滑"],
        relatedSyndromes: ["胆郁痰扰证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "失眠较重", modification: "加酸枣仁、夜交藤以安神" },
            { condition: "惊悸明显", modification: "加龙齿、磁石以镇惊" }
        ],
        contraindications: ["阴虚痰热者慎用"]
    },
    {
        id: "formula_098",
        name: "清气化痰丸",
        pinyin: "Qing Qi Hua Tan Wan",
        source: "《医方考》",
        category: "祛痰剂",
        subcategory: "清热化痰剂",
        composition: [
            { herbName: "瓜蒌仁", dosage: "9g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "臣药" },
            { herbName: "枳实", dosage: "9g", role: "佐药" },
            { herbName: "胆南星", dosage: "9g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "杏仁", dosage: "9g", role: "佐药" },
            { herbName: "姜汁", dosage: "适量", role: "佐药" }
        ],
        functions: ["清热化痰", "理气止咳"],
        indications: ["痰热咳嗽", "咳嗽气喘", "咯痰黄稠", "胸膈痞闷", "甚则气急呕恶", "烦躁不宁", "舌质红", "苔黄腻", "脉滑数"],
        analysis: "本方为治痰热咳嗽之代表方。方中胆南星为君，清热化痰。黄芩、瓜蒌仁为臣，清热化痰、润肺止咳。枳实、陈皮理气化痰，使气顺痰消；茯苓健脾渗湿；杏仁宣肺降气止咳；半夏燥湿化痰，姜汁制其毒并助化痰。全方清热化痰、理气止咳，热清痰化则咳嗽自止。",
        keyPoints: ["咳痰黄稠", "胸膈痞闷", "苔黄腻", "脉滑数"],
        relatedSyndromes: ["痰热壅肺证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "痰多难咯", modification: "加浙贝母、竹沥以清化痰热" },
            { condition: "便秘", modification: "加大黄以泻热通便" }
        ],
        contraindications: ["寒痰咳嗽者忌用"]
    },
    {
        id: "formula_099",
        name: "半夏白术天麻汤",
        pinyin: "Ban Xia Bai Zhu Tian Ma Tang",
        source: "《医学心悟》",
        category: "祛痰剂",
        subcategory: "治风化痰剂",
        composition: [
            { herbName: "半夏", dosage: "9g", role: "君药" },
            { herbName: "天麻", dosage: "6g", role: "臣药" },
            { herbName: "茯苓", dosage: "6g", role: "佐药" },
            { herbName: "橘红", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "生姜", dosage: "3片", role: "使药" },
            { herbName: "大枣", dosage: "2枚", role: "使药" }
        ],
        functions: ["化痰息风", "健脾祛湿"],
        indications: ["风痰上扰证", "眩晕头痛", "胸膈痞闷", "恶心呕吐", "舌苔白腻", "脉弦滑"],
        analysis: "本方为治风痰眩晕之代表方。方中半夏为君，燥湿化痰、降逆止呕。天麻为臣，平肝息风而止眩晕，为治风痰眩晕之要药。白术、茯苓健脾祛湿，以杜生痰之源；橘红理气化痰；甘草和中；生姜、大枣调和脾胃。诸药合用，化痰息风、健脾祛湿，痰消风息则眩晕自止。",
        keyPoints: ["眩晕头痛", "恶心呕吐", "苔白腻", "脉弦滑"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "头痛明显", modification: "加蔓荆子、菊花以清利头目" },
            { condition: "呕吐较重", modification: "加旋覆花、代赭石以降逆止呕" }
        ],
        contraindications: ["阴虚阳亢眩晕者慎用"]
    },

    // 十七、消食剂扩充
    {
        id: "formula_100",
        name: "枳实导滞丸",
        pinyin: "Zhi Shi Dao Zhi Wan",
        source: "《内外伤辨惑论》",
        category: "消食剂",
        subcategory: "消食化滞剂",
        composition: [
            { herbName: "大黄", dosage: "9g", role: "君药" },
            { herbName: "枳实", dosage: "9g", role: "臣药" },
            { herbName: "神曲", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "黄芩", dosage: "6g", role: "佐药" },
            { herbName: "黄连", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "泽泻", dosage: "6g", role: "佐药" }
        ],
        functions: ["消食导滞", "清热祛湿"],
        indications: ["湿热食积证", "脘腹胀痛", "下痢泄泻", "或大便秘结", "小便短赤", "舌苔黄腻", "脉沉有力"],
        analysis: "本方为治湿热食积之代表方。方中大黄为君，攻积泻热，使积滞从大便而去。枳实为臣，行气消痞，与大黄相配攻下之力更强；神曲消食和胃。黄芩、黄连清热燥湿；茯苓、泽泻利水渗湿，使湿热从小便而去；白术健脾和中，使攻积而不伤正。全方消导与清利并用，积去热清则胀痛、泻痢自愈。",
        keyPoints: ["脘腹胀痛", "下痢或便秘", "舌苔黄腻"],
        relatedSyndromes: ["食滞胃脘证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "食积较重", modification: "加山楂、莱菔子以消食化积" },
            { condition: "腹痛明显", modification: "加木香、槟榔以行气止痛" }
        ],
        contraindications: ["脾虚无积滞者禁用"]
    },

    // ============================================================================
    // 扩充批（2026-08 第二轮）— 新增5首（formula_101 ~ formula_105），补齐证候库引用所需
    // ============================================================================

    // 一、解表剂补（止嗽散）
    {
        id: "formula_101",
        name: "止嗽散",
        pinyin: "Zhi Sou San",
        source: "《医学心悟》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "桔梗", dosage: "9g", role: "君药" },
            { herbName: "荆芥", dosage: "9g", role: "臣药" },
            { herbName: "紫菀", dosage: "9g", role: "臣药" },
            { herbName: "百部", dosage: "9g", role: "臣药" },
            { herbName: "白前", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" }
        ],
        functions: ["宣利肺气", "疏风止咳"],
        indications: ["风邪犯肺证", "咳嗽咽痒", "咯痰不爽", "或微恶风发热", "舌苔薄白", "脉浮缓"],
        analysis: "本方为治风邪犯肺咳嗽之常用方。方中桔梗为君，宣肺祛痰利咽。荆芥疏风解表、宣透肺邪；紫菀、百部润肺止咳，温润而不燥，为臣药。白前降气祛痰，与桔梗一宣一降，复肺气之宣降；陈皮理气化痰；甘草调和诸药，共为佐药。全方温润平和、不寒不热，宣利肺气、疏风止咳，为治新久咳嗽之平剂。",
        keyPoints: ["咳嗽咽痒", "咯痰不爽", "苔薄白"],
        relatedSyndromes: ["风寒犯肺证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "风寒初起头痛鼻塞", modification: "加防风、紫苏叶以疏风散寒" },
            { condition: "痰多", modification: "加半夏、茯苓以化痰" }
        ],
        contraindications: ["阴虚劳嗽者慎用"]
    },

    // 三、和解剂补（柴胡疏肝散）
    {
        id: "formula_102",
        name: "柴胡疏肝散",
        pinyin: "Chai Hu Shu Gan San",
        source: "《景岳全书》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "柴胡", dosage: "6g", role: "君药" },
            { herbName: "陈皮", dosage: "6g", role: "臣药" },
            { herbName: "川芎", dosage: "4.5g", role: "臣药" },
            { herbName: "香附", dosage: "4.5g", role: "臣药" },
            { herbName: "枳壳", dosage: "4.5g", role: "佐药" },
            { herbName: "芍药", dosage: "4.5g", role: "佐药" },
            { herbName: "炙甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["疏肝理气", "活血止痛"],
        indications: ["肝气郁滞证", "胁肋疼痛", "胸闷喜太息", "情志抑郁易怒", "嗳气", "脘腹胀满", "脉弦"],
        analysis: "本方为疏肝解郁之代表方。方中柴胡为君，疏肝解郁、条达气机。香附理气疏肝、川芎行气活血止痛，共为臣药，助柴胡疏肝而兼活血。陈皮理气和胃、枳壳行气宽中，与柴胡相配升降相因；芍药养血柔肝、缓急止痛，与柴胡相配一散一收，疏肝而不伤阴；炙甘草调和诸药为使。全方疏肝理气、活血止痛，气行血畅则胁痛自除。",
        keyPoints: ["胁肋疼痛", "情志抑郁", "胸闷太息", "脉弦"],
        relatedSyndromes: ["肝气郁结证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "胁痛较甚", modification: "加郁金、延胡索以活血止痛" },
            { condition: "嗳气吞酸", modification: "加左金丸以和胃降逆" }
        ],
        contraindications: ["阴虚血燥者慎用"]
    },

    // 四、清热剂补（左金丸）
    {
        id: "formula_103",
        name: "左金丸",
        pinyin: "Zuo Jin Wan",
        source: "《丹溪心法》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "黄连", dosage: "6g", role: "君药" },
            { herbName: "吴茱萸", dosage: "1g", role: "佐药" }
        ],
        functions: ["清泻肝火", "降逆止呕"],
        indications: ["肝火犯胃证", "胁肋疼痛", "嘈杂吞酸", "呕吐口苦", "舌红苔黄", "脉弦数"],
        analysis: "本方为治肝火犯胃之代表方。方中重用黄连为君，苦寒清泻肝火，肝火得清则自不横逆犯胃；黄连亦善清胃热、燥湿。少佐吴茱萸为佐，辛热开郁降逆、下气止呕，与黄连相配一寒一热、辛开苦降，共奏清泻肝火、降逆止呕之功。二药合用，肝胃同治，火降呕止，为「反佐」配伍之典范。",
        keyPoints: ["胁痛", "嘈杂吞酸", "呕吐口苦", "舌红苔黄"],
        relatedSyndromes: ["肝胃不和证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "吞酸较重", modification: "加煅瓦楞子、乌贼骨以制酸" },
            { condition: "胃热明显", modification: "加栀子、蒲公英以清热" }
        ],
        contraindications: ["脾胃虚寒者忌用"]
    },

    // 七、补益剂补（左归丸/右归丸）
    {
        id: "formula_104",
        name: "左归丸",
        pinyin: "Zuo Gui Wan",
        source: "《景岳全书》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "熟地黄", dosage: "24g", role: "君药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "枸杞子", dosage: "12g", role: "臣药" },
            { herbName: "山茱萸", dosage: "12g", role: "臣药" },
            { herbName: "川牛膝", dosage: "9g", role: "佐药" },
            { herbName: "菟丝子", dosage: "12g", role: "臣药" },
            { herbName: "鹿角胶", dosage: "12g", role: "佐药" },
            { herbName: "龟板胶", dosage: "12g", role: "佐药" }
        ],
        functions: ["滋阴补肾", "填精益髓"],
        indications: ["真阴不足证", "头晕目眩", "腰酸腿软", "遗精滑泄", "自汗盗汗", "口燥舌干", "舌红少苔", "脉细"],
        analysis: "本方为纯甘壮水之剂。方中重用熟地黄为君，滋肾填精、大补真阴。山药补脾固精、枸杞子滋补肝肾、山茱萸涩精敛汗，共为臣药，助君药滋阴填精。菟丝子补阳益阴、固精缩尿，鹿角胶温肾填精，龟板胶滋阴潜阳，三药合用以阳中求阴、补髓填精；川牛膝补肝肾、强腰膝，引药下行，共为佐药。全方峻补真阴、填精益髓，为治真阴不足之要方。",
        keyPoints: ["头晕目眩", "腰酸腿软", "遗精", "舌红少苔"],
        relatedSyndromes: ["肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "虚热明显", modification: "加地骨皮、知母以退虚热" },
            { condition: "遗精较甚", modification: "加金樱子、芡实以涩精止遗" }
        ],
        contraindications: ["脾虚便溏者慎用"]
    },
    {
        id: "formula_105",
        name: "右归丸",
        pinyin: "You Gui Wan",
        source: "《景岳全书》",
        category: "补益剂",
        subcategory: "补阳剂",
        composition: [
            { herbName: "熟地黄", dosage: "24g", role: "君药" },
            { herbName: "附子", dosage: "6g", role: "臣药" },
            { herbName: "肉桂", dosage: "6g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "山茱萸", dosage: "9g", role: "臣药" },
            { herbName: "枸杞子", dosage: "9g", role: "臣药" },
            { herbName: "菟丝子", dosage: "12g", role: "臣药" },
            { herbName: "鹿角胶", dosage: "12g", role: "臣药" },
            { herbName: "杜仲", dosage: "12g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" }
        ],
        functions: ["温补肾阳", "填精益髓"],
        indications: ["肾阳不足命门火衰证", "畏寒肢冷", "腰膝软弱", "阳痿遗精", "大便不实", "小便自遗", "舌淡苔白", "脉沉而迟"],
        analysis: "本方为温补肾阳、填精益髓之剂。方中重用熟地黄为君，滋阴填精，为「阴中求阳」奠定物质基础。附子、肉桂温补肾阳、峻补命门之火为臣。山药、山茱萸、枸杞子、菟丝子、鹿角胶补肾固精、助阳填髓，杜仲补肝肾强腰膝，共为臣佐；当归养血和血，使补而不滞为佐。全方温阳与填精并用，命门火旺、肾精充足，则诸虚寒之症自愈。",
        keyPoints: ["畏寒肢冷", "腰膝软弱", "阳痿遗精", "舌淡苔白"],
        relatedSyndromes: ["肾阳虚证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "气虚明显", modification: "加人参、黄芪以益气" },
            { condition: "大便不实", modification: "加肉豆蔻、五味子以涩肠止泻" }
        ],
        contraindications: ["阴虚火旺者忌用"]
    }
,
    {
        id: "formula_106",
        name: "三子养亲汤",
        pinyin: "San Zi Yang Qin Tang",
        source: "《韩氏医通》",
        category: "祛痰剂",
        subcategory: "燥湿化痰剂",
        composition: [
            { herbName: "紫苏子", dosage: "9g", role: "君药" },
            { herbName: "白芥子", dosage: "6g", role: "臣药" },
            { herbName: "莱菔子", dosage: "9g", role: "臣药" }
        ],
        functions: ["温肺化痰", "降气消食"],
        indications: ["痰壅气逆", "咳嗽气喘", "痰多胸痞", "食少难消", "舌苔白腻", "脉滑"],
        analysis: "本方为温肺化痰、降气消食之剂。方中白芥子温肺化痰、利气散结为君；苏子降气化痰、止咳平喘，莱菔子消食导滞、行气祛痰，共为臣佐。三药皆以子名，药性平和，温而不燥，尤宜老年痰壅气滞、食少难消之证。",
        keyPoints: ["咳嗽痰多", "胸痞食少", "苔白腻", "脉滑"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒痰较重", modification: "加干姜、细辛以温肺化饮" },
            { condition: "兼食积", modification: "加山楂、神曲以消食导滞" }
        ],
        contraindications: ["肺虚久咳者慎用", "热痰黄稠者忌用"]
    },
    {
        id: "formula_107",
        name: "二至丸",
        pinyin: "Er Zhi Wan",
        source: "《医方集解》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "女贞子", dosage: "15g", role: "君药" },
            { herbName: "墨旱莲", dosage: "15g", role: "臣药" }
        ],
        functions: ["补益肝肾", "滋阴止血"],
        indications: ["肝肾阴虚", "头目眩晕", "失眠多梦", "腰膝酸软", "须发早白", "鼻衄齿衄"],
        analysis: "本方为补益肝肾、滋阴止血之剂。女贞子甘苦凉，补肝肾、清虚热、明目乌发为君；墨旱莲甘酸寒，滋阴益肾、凉血止血为臣。二药相配，补而不腻，尤宜肝肾阴虚、虚火内扰所致眩晕失眠、须发早白之证。",
        keyPoints: ["眩晕失眠", "腰膝酸软", "须发早白"],
        relatedSyndromes: ["肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴虚火旺明显", modification: "加知母、黄柏以滋阴降火" },
            { condition: "腰膝酸软甚", modification: "加杜仲、牛膝以补肝肾强筋骨" }
        ],
        contraindications: ["脾胃虚寒泄泻者慎用"]
    },
    {
        id: "formula_108",
        name: "一贯煎",
        pinyin: "Yi Guan Jian",
        source: "《续名医类案》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "北沙参", dosage: "10g", role: "君药" },
            { herbName: "麦冬", dosage: "10g", role: "君药" },
            { herbName: "当归", dosage: "10g", role: "臣药" },
            { herbName: "生地黄", dosage: "30g", role: "臣药" },
            { herbName: "枸杞子", dosage: "12g", role: "臣药" },
            { herbName: "川楝子", dosage: "5g", role: "佐药" }
        ],
        functions: ["滋阴疏肝"],
        indications: ["肝肾阴虚", "肝气不舒", "胸脘胁痛", "吞酸吐苦", "咽干口燥", "舌红少津"],
        analysis: "本方为滋阴疏肝之剂。重用生地黄滋阴养血、补益肝肾为君；沙参、麦冬、枸杞子滋阴生津、柔肝养肝为臣；当归养血活血为佐；川楝子疏肝泄热、理气止痛为使，与滋阴药相伍，使肝体得养、肝气得舒。全方滋水涵木，尤宜阴虚肝郁之胁痛。",
        keyPoints: ["胁痛吞酸", "咽干口燥", "舌红少津", "脉细弱"],
        relatedSyndromes: ["肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "胁痛明显", modification: "加白芍、郁金以柔肝止痛" },
            { condition: "口苦咽干甚", modification: "加石斛、天花粉以养阴生津" }
        ],
        contraindications: ["实热证、痰湿盛者忌用"]
    },
    {
        id: "formula_109",
        name: "桃红四物汤",
        pinyin: "Tao Hong Si Wu Tang",
        source: "《医宗金鉴》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "熟地黄", dosage: "12g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "臣药" },
            { herbName: "桃仁", dosage: "9g", role: "佐药" },
            { herbName: "红花", dosage: "6g", role: "佐药" }
        ],
        functions: ["养血活血", "逐瘀调经"],
        indications: ["血虚兼瘀", "月经不调", "痛经", "经行不畅", "色紫有块", "跌打损伤瘀痛"],
        analysis: "本方为养血活血之剂，即四物汤加桃仁、红花而成。四物汤养血和血，桃仁、红花活血化瘀。全方养血与化瘀并行，使瘀血去而新血生，尤宜血虚兼血瘀之月经不调、经色紫暗有块者。",
        keyPoints: ["月经不调", "色紫有块", "舌紫暗", "脉涩"],
        relatedSyndromes: ["血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "痛经剧烈", modification: "加延胡索、五灵脂以化瘀止痛" },
            { condition: "兼气滞", modification: "加香附、乌药以行气活血" }
        ],
        contraindications: ["孕妇忌用", "月经过多者慎用"]
    },
    {
        id: "formula_110",
        name: "失笑散",
        pinyin: "Shi Xiao San",
        source: "《太平惠民和剂局方》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "五灵脂", dosage: "6g", role: "君药" },
            { herbName: "蒲黄", dosage: "6g", role: "臣药" }
        ],
        functions: ["活血祛瘀", "散结止痛"],
        indications: ["瘀血停滞", "心腹刺痛", "痛经", "产后恶露不行", "月经不调"],
        analysis: "本方为活血祛瘀、散结止痛之剂。五灵脂活血散瘀止痛为君，蒲黄活血止血、行血散瘀为臣。二药合用，通利血脉、祛瘀止痛，瘀血得去则痛自止，故名『失笑』，言其效速也。",
        keyPoints: ["心腹刺痛", "痛有定处", "舌紫暗", "脉涩"],
        relatedSyndromes: ["血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "瘀滞甚", modification: "加川芎、赤芍以活血化瘀" },
            { condition: "兼寒凝", modification: "加桂枝、艾叶以温经散寒" }
        ],
        contraindications: ["孕妇忌用", "血虚无瘀者慎用"]
    },
    {
        id: "formula_111",
        name: "膈下逐瘀汤",
        pinyin: "Ge Xia Zhu Yu Tang",
        source: "《医林改错》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "桃仁", dosage: "9g", role: "君药" },
            { herbName: "红花", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "臣药" },
            { herbName: "赤芍", dosage: "9g", role: "臣药" },
            { herbName: "丹皮", dosage: "6g", role: "佐药" },
            { herbName: "乌药", dosage: "6g", role: "佐药" },
            { herbName: "延胡索", dosage: "6g", role: "佐药" },
            { herbName: "香附", dosage: "9g", role: "佐药" },
            { herbName: "枳壳", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["活血祛瘀", "行气止痛"],
        indications: ["膈下瘀血蓄积", "腹中积块", "固定不移", "腹痛拒按", "痛处不移", "舌暗有瘀斑"],
        analysis: "本方为活血祛瘀、行气止痛之剂。桃仁、红花、川芎、赤芍活血化瘀为君药；当归、丹皮养血活血为臣；乌药、延胡索、香附、枳壳疏肝行气止痛为佐；甘草调和诸药为使。气血同治，尤宜瘀血结于膈下之癥积腹痛。",
        keyPoints: ["腹中积块", "固定不移", "痛处不移", "舌暗有瘀斑"],
        relatedSyndromes: ["血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "积块坚硬", modification: "加三棱、莪术以破血消癥" },
            { condition: "兼气虚", modification: "加黄芪、党参以益气行血" }
        ],
        contraindications: ["孕妇忌用", "血虚无瘀者慎用"]
    },
    {
        id: "formula_112",
        name: "少腹逐瘀汤",
        pinyin: "Shao Fu Zhu Yu Tang",
        source: "《医林改错》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "小茴香", dosage: "6g", role: "君药" },
            { herbName: "干姜", dosage: "3g", role: "臣药" },
            { herbName: "延胡索", dosage: "6g", role: "臣药" },
            { herbName: "没药", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "臣药" },
            { herbName: "肉桂", dosage: "3g", role: "佐药" },
            { herbName: "赤芍", dosage: "9g", role: "佐药" },
            { herbName: "蒲黄", dosage: "9g", role: "佐药" },
            { herbName: "五灵脂", dosage: "6g", role: "佐药" }
        ],
        functions: ["活血祛瘀", "温经止痛"],
        indications: ["少腹瘀血积块", "少腹疼痛", "痛经", "月经后期色紫有块", "不孕", "舌暗苔白"],
        analysis: "本方为活血祛瘀、温经止痛之剂。小茴香、干姜、肉桂温经散寒为君；延胡索、没药、蒲黄、五灵脂活血化瘀止痛为臣；当归、川芎、赤芍养血活血为佐。全方温通并用，尤宜寒凝血脉之少腹冷痛、痛经、经色紫暗有块者。",
        keyPoints: ["少腹冷痛", "痛经色紫有块", "畏寒", "舌暗苔白"],
        relatedSyndromes: ["寒凝血瘀证"],
        relatedConstitutions: ["血瘀质", "阳虚质"],
        modifications: [
            { condition: "痛甚", modification: "加乳香、乌药以行气活血止痛" },
            { condition: "月经量少", modification: "加益母草、泽兰以活血调经" }
        ],
        contraindications: ["孕妇忌用", "热证腹痛者忌用"]
    },
    {
        id: "formula_113",
        name: "活络效灵丹",
        pinyin: "Huo Luo Xiao Ling Dan",
        source: "《医学衷中参西录》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "当归", dosage: "15g", role: "君药" },
            { herbName: "丹参", dosage: "15g", role: "臣药" },
            { herbName: "乳香", dosage: "15g", role: "臣药" },
            { herbName: "没药", dosage: "15g", role: "臣药" }
        ],
        functions: ["活血祛瘀", "通络止痛"],
        indications: ["气血凝滞", "心腹疼痛", "腿痛臂痛", "癥瘕积聚", "跌打损伤"],
        analysis: "本方为活血祛瘀、通络止痛之剂。当归养血活血为君，丹参活血祛瘀为臣，乳香、没药活血行气、消肿止痛为佐。四药合用，活血行气、通络止痛，尤宜气血凝滞所致的各种疼痛与癥瘕积聚。",
        keyPoints: ["痛处固定", "舌紫暗", "脉涩"],
        relatedSyndromes: ["血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "偏于上肢", modification: "加桂枝、姜黄以通络止痛" },
            { condition: "偏于下肢", modification: "加牛膝、木瓜以引药下行" }
        ],
        contraindications: ["孕妇忌用", "血虚无瘀者慎用"]
    },
    {
        id: "formula_114",
        name: "仙方活命饮",
        pinyin: "Xian Fang Huo Ming Yin",
        source: "《校注妇人良方》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "金银花", dosage: "15g", role: "君药" },
            { herbName: "当归尾", dosage: "6g", role: "臣药" },
            { herbName: "赤芍", dosage: "6g", role: "臣药" },
            { herbName: "乳香", dosage: "6g", role: "臣药" },
            { herbName: "没药", dosage: "6g", role: "臣药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "白芷", dosage: "6g", role: "佐药" },
            { herbName: "贝母", dosage: "6g", role: "佐药" },
            { herbName: "天花粉", dosage: "6g", role: "佐药" },
            { herbName: "穿山甲", dosage: "6g", role: "佐药" },
            { herbName: "皂角刺", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["清热解毒", "消肿溃坚", "活血止痛"],
        indications: ["痈疡肿毒初起", "红肿焮痛", "身热凛寒", "苔薄白或黄", "脉数有力"],
        analysis: "本方为外科『疮疡之圣药』。金银花清热解毒为君；当归尾、赤芍、乳香、没药活血散瘀、消肿止痛为臣；陈皮理气，白芷、贝母、天花粉消肿散结，穿山甲、皂角刺溃坚透脓为佐；甘草清热解毒、调和诸药为使。全方清热解毒与活血消肿并用，使痈肿初起可消、成脓可溃。",
        keyPoints: ["疮疡红肿热痛", "发热恶寒", "苔薄黄", "脉数有力"],
        relatedSyndromes: ["热毒蕴肤证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "热毒重", modification: "加蒲公英、紫花地丁以加强解毒" },
            { condition: "脓已成未溃", modification: "加黄芪、白芷以托毒排脓" }
        ],
        contraindications: ["阴证疮疡者忌用", "脾胃虚寒者慎用"]
    },
    {
        id: "formula_115",
        name: "五味消毒饮",
        pinyin: "Wu Wei Xiao Du Yin",
        source: "《医宗金鉴》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "金银花", dosage: "20g", role: "君药" },
            { herbName: "野菊花", dosage: "15g", role: "臣药" },
            { herbName: "蒲公英", dosage: "15g", role: "臣药" },
            { herbName: "紫花地丁", dosage: "15g", role: "臣药" },
            { herbName: "紫背天葵子", dosage: "10g", role: "佐药" }
        ],
        functions: ["清热解毒", "消散疔疮"],
        indications: ["火毒结聚之痈疖疔疮", "疮形如粟", "坚硬根深", "红肿热痛", "发热恶寒", "舌红苔黄"],
        analysis: "本方为清热解毒之要方。金银花清热解毒为君；野菊花、蒲公英、紫花地丁均能清热解毒、消肿散结，共为臣药；紫背天葵子凉血解毒为佐。五味药皆清热解毒之品，合力消散疔毒，为治疗火毒疔疮之专方。",
        keyPoints: ["疔疮红肿热痛", "疮形坚硬根深", "舌红苔黄", "脉数"],
        relatedSyndromes: ["热毒蕴肤证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "热毒甚", modification: "加连翘、黄连以加强解毒" },
            { condition: "肿痛甚", modification: "加乳香、没药以活血消肿" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_116",
        name: "四妙丸",
        pinyin: "Si Miao Wan",
        source: "《成方便读》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "黄柏", dosage: "12g", role: "君药" },
            { herbName: "苍术", dosage: "9g", role: "臣药" },
            { herbName: "牛膝", dosage: "9g", role: "佐药" },
            { herbName: "薏苡仁", dosage: "15g", role: "佐药" }
        ],
        functions: ["清热利湿", "舒筋壮骨"],
        indications: ["湿热痿证", "下肢痿软无力", "足膝红肿热痛", "湿热下注之痹证", "湿疹", "带下"],
        analysis: "本方为清热利湿之剂。黄柏清热燥湿为君，苍术健脾燥湿为臣，牛膝引药下行、补肝肾强筋骨为佐，薏苡仁清热利湿、舒筋除痹为佐。全方清利下焦湿热，尤宜湿热下注所致足膝红肿热痛、下肢痿软之证。",
        keyPoints: ["下肢痿软", "足膝红肿热痛", "舌红苔黄腻", "脉滑数"],
        relatedSyndromes: ["湿热下注证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "湿热甚", modification: "加防己、木通以利湿清热" },
            { condition: "红肿热痛甚", modification: "加赤芍、丹皮以凉血活血" }
        ],
        contraindications: ["肝肾阴虚者慎用", "脾虚便溏者慎用"]
    },
    {
        id: "formula_117",
        name: "完带汤",
        pinyin: "Wan Dai Tang",
        source: "《傅青主女科》",
        category: "祛湿剂",
        subcategory: "祛湿化浊剂",
        composition: [
            { herbName: "白术", dosage: "30g", role: "君药" },
            { herbName: "山药", dosage: "30g", role: "君药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "苍术", dosage: "9g", role: "臣药" },
            { herbName: "车前子", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "白芍", dosage: "15g", role: "佐药" },
            { herbName: "荆芥穗", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["补脾疏肝", "化湿止带"],
        indications: ["脾虚肝郁", "湿浊带下", "带下色白或淡黄", "清稀无臭", "倦怠便溏", "舌淡苔白"],
        analysis: "本方为补脾疏肝、化湿止带之剂。重用白术、山药健脾益气止带为君；人参补中益气，苍术燥湿运脾为臣；车前子利湿清热，陈皮理气化湿，白芍柔肝养血，荆芥穗疏风胜湿为佐；甘草调和诸药为使。全方补脾止带，使脾气健运、湿浊自化。",
        keyPoints: ["带下色白清稀", "倦怠乏力", "便溏", "舌淡苔白"],
        relatedSyndromes: ["脾虚带下证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "带下量多清稀", modification: "加芡实、金樱子以固涩止带" },
            { condition: "小腹冷痛", modification: "加艾叶、小茴香以温经散寒" }
        ],
        contraindications: ["湿热下注之黄带者慎用"]
    },
    {
        id: "formula_118",
        name: "易黄汤",
        pinyin: "Yi Huang Tang",
        source: "《傅青主女科》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "山药", dosage: "30g", role: "君药" },
            { herbName: "芡实", dosage: "30g", role: "君药" },
            { herbName: "黄柏", dosage: "6g", role: "臣药" },
            { herbName: "车前子", dosage: "6g", role: "臣药" },
            { herbName: "白果", dosage: "12g", role: "佐药" }
        ],
        functions: ["补肾清热", "祛湿止带"],
        indications: ["肾虚湿热带下", "带下色黄", "黏腻腥臭", "阴部瘙痒", "腰膝酸软"],
        analysis: "本方为补肾清热、祛湿止带之剂。山药、芡实补脾益肾、固涩止带为君；黄柏清热燥湿，车前子清热利湿为臣；白果收涩止带为佐。全方标本兼治，使湿热得清、肾气得固，尤宜肾虚湿热之黄带黏腻腥臭者。",
        keyPoints: ["带下色黄腥臭", "腰膝酸软", "舌红苔黄腻"],
        relatedSyndromes: ["湿热下注带下证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "阴痒明显", modification: "加苦参、白鲜皮以燥湿止痒" },
            { condition: "腰膝酸软甚", modification: "加杜仲、续断以补肾强腰" }
        ],
        contraindications: ["脾虚寒湿带下者慎用"]
    },
    {
        id: "formula_119",
        name: "固冲汤",
        pinyin: "Gu Chong Tang",
        source: "《医学衷中参西录》",
        category: "固涩剂",
        subcategory: "固崩止带剂",
        composition: [
            { herbName: "白术", dosage: "30g", role: "君药" },
            { herbName: "黄芪", dosage: "18g", role: "君药" },
            { herbName: "龙骨", dosage: "24g", role: "臣药" },
            { herbName: "牡蛎", dosage: "24g", role: "臣药" },
            { herbName: "山茱萸", dosage: "24g", role: "臣药" },
            { herbName: "白芍", dosage: "12g", role: "佐药" },
            { herbName: "茜草", dosage: "9g", role: "佐药" },
            { herbName: "海螵蛸", dosage: "12g", role: "佐药" },
            { herbName: "棕榈炭", dosage: "6g", role: "佐药" },
            { herbName: "五倍子", dosage: "6g", role: "佐药" }
        ],
        functions: ["益气健脾", "固冲摄血"],
        indications: ["脾气虚弱", "冲脉不固", "血崩或月经过多", "色淡质稀", "心悸气短", "腰膝酸软"],
        analysis: "本方为益气健脾、固冲摄血之剂。重用白术、黄芪补气健脾以固摄冲脉为君；龙骨、牡蛎、山茱萸收敛固涩、补益肝肾为臣；白芍养血敛阴，茜草、海螵蛸、棕榈炭、五倍子收敛止血为佐。全方补气与固涩并用，使血崩得止。",
        keyPoints: ["崩漏下血", "色淡质稀", "心悸气短", "舌淡苔白"],
        relatedSyndromes: ["冲任不固崩漏证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "出血量多", modification: "加三七粉、仙鹤草以化瘀止血" },
            { condition: "气虚甚", modification: "加人参、山药以益气摄血" }
        ],
        contraindications: ["血热妄行之崩漏者忌用"]
    },
    {
        id: "formula_120",
        name: "圣愈汤",
        pinyin: "Sheng Yu Tang",
        source: "《医宗金鉴》",
        category: "补益剂",
        subcategory: "气血双补剂",
        composition: [
            { herbName: "熟地黄", dosage: "15g", role: "君药" },
            { herbName: "白芍", dosage: "12g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "臣药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "黄芪", dosage: "15g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "佐药" }
        ],
        functions: ["补气养血"],
        indications: ["气血两虚", "面色无华", "神疲乏力", "头晕目眩", "月经量少色淡", "疮疡久溃不敛"],
        analysis: "本方为气血双补之剂，即四物汤加人参、黄芪而成。四物汤养血调血，人参、黄芪大补元气，益气以生血。全方气血双补，使气旺血充，尤宜气血两虚之面色无华、神疲乏力、月经量少者。",
        keyPoints: ["面色无华", "神疲乏力", "头晕目眩", "舌淡脉弱"],
        relatedSyndromes: ["气血两虚月经不调证"],
        relatedConstitutions: ["气虚质", "血瘀质"],
        modifications: [
            { condition: "心悸失眠", modification: "加酸枣仁、远志以养心安神" },
            { condition: "食欲不振", modification: "加砂仁、陈皮以理气和胃" }
        ],
        contraindications: ["外感表证未解者慎用"]
    },
    {
        id: "formula_121",
        name: "苍耳子散",
        pinyin: "Cang Er Zi San",
        source: "《济生方》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "苍耳子", dosage: "9g", role: "君药" },
            { herbName: "辛夷", dosage: "9g", role: "臣药" },
            { herbName: "白芷", dosage: "6g", role: "臣药" },
            { herbName: "薄荷", dosage: "3g", role: "佐药" }
        ],
        functions: ["疏风通窍"],
        indications: ["风邪上扰之鼻渊", "鼻塞不通", "流涕不止", "前额头痛", "嗅觉减退"],
        analysis: "本方为疏风通窍之剂。苍耳子疏风通鼻窍为君；辛夷散风寒、通鼻窍，白芷祛风止痛、通窍排脓为臣；薄荷疏散风热、清利头目为佐。全方合用，使风邪外散、鼻窍得通，为治疗鼻渊之要方。",
        keyPoints: ["鼻塞流涕", "前额头痛", "嗅觉减退"],
        relatedSyndromes: ["鼻渊肺经风热证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "鼻流黄涕", modification: "加黄芩、鱼腥草以清肺热" },
            { condition: "头痛甚", modification: "加川芎、蔓荆子以祛风止痛" }
        ],
        contraindications: ["血虚头痛者慎用", "苍耳子有毒，用量不宜过大"]
    },
    {
        id: "formula_122",
        name: "石决明散",
        pinyin: "Shi Jue Ming San",
        source: "《证治准绳》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "石决明", dosage: "30g", role: "君药" },
            { herbName: "决明子", dosage: "15g", role: "臣药" },
            { herbName: "菊花", dosage: "12g", role: "臣药" },
            { herbName: "枸杞子", dosage: "12g", role: "臣药" },
            { herbName: "青葙子", dosage: "9g", role: "佐药" },
            { herbName: "木贼", dosage: "6g", role: "佐药" },
            { herbName: "谷精草", dosage: "9g", role: "佐药" },
            { herbName: "密蒙花", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["平肝潜阳", "清肝明目"],
        indications: ["肝阳上亢", "头晕目眩", "目赤肿痛", "翳障", "视物昏花", "羞明多泪"],
        analysis: "本方为平肝潜阳、清肝明目之剂。重用石决明平肝潜阳、清肝明目为君；决明子、菊花清肝明目，枸杞子养肝明目为臣；青葙子、木贼、谷精草、密蒙花明目退翳为佐；甘草调和诸药为使。全方清肝明目，尤宜肝火上炎之目赤翳障。",
        keyPoints: ["目赤肿痛", "头晕目眩", "翳障视昏"],
        relatedSyndromes: ["目赤肝经风热证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "肝火甚", modification: "加夏枯草、栀子以清肝泻火" },
            { condition: "阴虚明显", modification: "加生地黄、女贞子以滋养肝阴" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_123",
        name: "泻白散",
        pinyin: "Xie Bai San",
        source: "《小儿药证直诀》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "桑白皮", dosage: "15g", role: "君药" },
            { herbName: "地骨皮", dosage: "15g", role: "臣药" },
            { herbName: "甘草", dosage: "3g", role: "佐药" },
            { herbName: "粳米", dosage: "9g", role: "使药" }
        ],
        functions: ["清泻肺热", "止咳平喘"],
        indications: ["肺热咳嗽", "气喘", "皮肤蒸热", "日晡尤甚", "舌红苔黄", "脉细数"],
        analysis: "本方为清泻肺热之剂。桑白皮清泻肺热、止咳平喘为君；地骨皮清肺中伏火、退虚热为臣；甘草润肺和中，粳米养胃和中为使。全方清肺不伤阴，尤宜肺热咳嗽、皮肤蒸热之证。",
        keyPoints: ["咳嗽气喘", "皮肤蒸热", "舌红苔黄", "脉细数"],
        relatedSyndromes: ["肺热咳嗽证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "热甚", modification: "加黄芩、知母以清肺热" },
            { condition: "兼阴虚", modification: "加沙参、麦冬以养阴润肺" }
        ],
        contraindications: ["肺寒咳嗽者忌用"]
    },
    {
        id: "formula_124",
        name: "健脾丸",
        pinyin: "Jian Pi Wan",
        source: "《证治准绳》",
        category: "消食剂",
        subcategory: "健脾消食剂",
        composition: [
            { herbName: "白术", dosage: "15g", role: "君药" },
            { herbName: "木香", dosage: "6g", role: "臣药" },
            { herbName: "黄连", dosage: "3g", role: "臣药" },
            { herbName: "甘草", dosage: "6g", role: "使药" },
            { herbName: "白茯苓", dosage: "15g", role: "佐药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "神曲", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "9g", role: "佐药" },
            { herbName: "砂仁", dosage: "6g", role: "佐药" },
            { herbName: "麦芽", dosage: "9g", role: "佐药" },
            { herbName: "山楂", dosage: "9g", role: "佐药" },
            { herbName: "山药", dosage: "15g", role: "佐药" },
            { herbName: "肉豆蔻", dosage: "6g", role: "佐药" }
        ],
        functions: ["健脾和胃", "消食止泻"],
        indications: ["脾虚食积", "脘腹痞满", "食少难化", "大便溏薄", "苔腻微黄", "脉虚弱"],
        analysis: "本方为健脾消食之剂。白术、茯苓、人参健脾益气为君；山楂、神曲、麦芽消食化积为臣；木香、陈皮、砂仁理气醒脾，黄连清热燥湿，山药、肉豆蔻健脾止泻为佐；甘草调和诸药为使。全方补消兼施，使脾运健、食积化。",
        keyPoints: ["脘腹痞满", "食少难化", "大便溏薄", "舌淡苔腻"],
        relatedSyndromes: ["食积证", "脾虚泄泻证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "食积甚", modification: "加鸡内金、莱菔子以消食导滞" },
            { condition: "脘腹胀痛", modification: "加枳实、厚朴以行气消胀" }
        ],
        contraindications: ["实热积滞者慎用"]
    },
    {
        id: "formula_125",
        name: "七味白术散",
        pinyin: "Qi Wei Bai Zhu San",
        source: "《小儿药证直诀》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "人参", dosage: "6g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "君药" },
            { herbName: "茯苓", dosage: "9g", role: "臣药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "藿香叶", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "3g", role: "佐药" },
            { herbName: "葛根", dosage: "9g", role: "佐药" }
        ],
        functions: ["健脾益气", "和胃生津"],
        indications: ["脾胃虚弱", "呕吐泄泻", "不思饮食", "口干口渴", "肌热虚烦"],
        analysis: "本方为健脾益气、和胃生津之剂，即四君子汤加藿香、木香、葛根。四君子汤益气健脾为底，藿香芳香化湿、和胃止呕，木香行气止痛，葛根升阳止泻、生津止渴。全方补脾止泻、生津除渴，尤宜脾虚泄泻、津液耗伤之证。",
        keyPoints: ["呕吐泄泻", "不思饮食", "口干口渴"],
        relatedSyndromes: ["脾虚泄泻证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "泄泻甚", modification: "加山药、扁豆以健脾止泻" },
            { condition: "口渴甚", modification: "加麦冬、石斛以生津止渴" }
        ],
        contraindications: ["湿热泻痢者慎用"]
    },
    {
        id: "formula_126",
        name: "抱龙丸",
        pinyin: "Bao Long Wan",
        source: "《太平惠民和剂局方》",
        category: "开窍剂",
        subcategory: "凉开剂",
        composition: [
            { herbName: "天竺黄", dosage: "9g", role: "君药" },
            { herbName: "胆南星", dosage: "6g", role: "臣药" },
            { herbName: "雄黄", dosage: "3g", role: "臣药" },
            { herbName: "朱砂", dosage: "1.5g", role: "佐药" },
            { herbName: "麝香", dosage: "0.3g", role: "佐药" },
            { herbName: "琥珀", dosage: "6g", role: "佐药" }
        ],
        functions: ["清热化痰", "开窍定惊"],
        indications: ["小儿急惊风", "痰热内闭", "高热惊厥", "神昏抽搐", "痰鸣气粗"],
        analysis: "本方为清热化痰、开窍定惊之剂。天竺黄清热豁痰、凉心定惊为君；胆南星清热化痰，雄黄解毒定惊为臣；朱砂镇心安神，麝香开窍醒神，琥珀镇惊安神为佐。全方清热化痰、开窍定惊，为治疗小儿急惊风之要方。",
        keyPoints: ["高热惊厥", "神昏抽搐", "痰鸣气粗"],
        relatedSyndromes: ["急惊风痰热证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "热甚", modification: "加羚羊角、钩藤以清热息风" },
            { condition: "痰甚", modification: "加竹沥、瓜蒌以豁痰" }
        ],
        contraindications: ["慢惊风者忌用", "朱砂、雄黄有毒，不宜久服"]
    },
    {
        id: "formula_127",
        name: "荆防败毒散",
        pinyin: "Jing Fang Bai Du San",
        source: "《摄生众妙方》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "荆芥", dosage: "9g", role: "君药" },
            { herbName: "防风", dosage: "9g", role: "君药" },
            { herbName: "羌活", dosage: "9g", role: "臣药" },
            { herbName: "独活", dosage: "9g", role: "臣药" },
            { herbName: "柴胡", dosage: "9g", role: "臣药" },
            { herbName: "前胡", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "9g", role: "佐药" },
            { herbName: "枳壳", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["发汗解表", "散风祛湿"],
        indications: ["外感风寒湿邪", "恶寒发热", "头身重痛", "无汗", "鼻塞流涕", "咳嗽痰多"],
        analysis: "本方为发汗解表、散风祛湿之剂。荆芥、防风祛风解表为君；羌活、独活祛风除湿止痛，柴胡、前胡解表宣肺为臣；川芎行气活血，枳壳、桔梗宽胸理气，茯苓渗湿为佐；甘草调和诸药为使。全方发汗解表，尤宜外感风寒湿邪、头身重痛者。",
        keyPoints: ["恶寒发热", "头身重痛", "无汗鼻塞", "苔白腻"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "咳嗽痰多", modification: "加杏仁、浙贝母以宣肺化痰" },
            { condition: "项背强痛", modification: "加葛根以解肌舒筋" }
        ],
        contraindications: ["风热表证者忌用", "表虚自汗者慎用"]
    },
    {
        id: "formula_128",
        name: "金铃子散",
        pinyin: "Jin Ling Zi San",
        source: "《太平圣惠方》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "川楝子", dosage: "9g", role: "君药" },
            { herbName: "延胡索", dosage: "9g", role: "臣药" }
        ],
        functions: ["疏肝泄热", "活血止痛"],
        indications: ["肝郁化火", "心胸胁肋诸痛", "痛经", "疝气疼痛", "时发时止", "烦躁易怒"],
        analysis: "本方为疏肝泄热、活血止痛之剂。川楝子苦寒，疏肝气、泄肝火为君；延胡索辛温，活血行气止痛为臣。二药合用，气血并治，尤宜肝郁化火之心胸胁肋疼痛、痛经、疝气。",
        keyPoints: ["心胸胁肋疼痛", "烦躁易怒", "舌红苔黄", "脉弦数"],
        relatedSyndromes: ["肝气郁结证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "痛甚", modification: "加白芍、甘草以缓急止痛" },
            { condition: "兼气滞", modification: "加香附、郁金以疏肝理气" }
        ],
        contraindications: ["孕妇慎用", "脾胃虚寒者慎用"]
    },
    {
        id: "formula_129",
        name: "参苏饮",
        pinyin: "Shen Su Yin",
        source: "《太平惠民和剂局方》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "人参", dosage: "6g", role: "君药" },
            { herbName: "紫苏叶", dosage: "9g", role: "臣药" },
            { herbName: "葛根", dosage: "9g", role: "臣药" },
            { herbName: "前胡", dosage: "9g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "枳壳", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["益气解表", "理气化痰"],
        indications: ["气虚外感风寒", "恶寒发热", "无汗", "咳嗽痰白", "气短乏力", "胸脘满闷"],
        analysis: "本方为益气解表、理气化痰之剂。人参扶正祛邪为君；紫苏叶、葛根解表散寒为臣；前胡、半夏、桔梗宣肺化痰，陈皮、枳壳、木香理气宽中，茯苓健脾渗湿为佐；甘草调和诸药为使。全方扶正与解表并用，尤宜气虚外感、兼有痰湿者。",
        keyPoints: ["恶寒发热", "咳嗽痰白", "气短乏力", "苔白腻"],
        relatedSyndromes: ["气虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "表寒甚", modification: "加荆芥、防风以解表散寒" },
            { condition: "咳嗽痰多", modification: "加杏仁、款冬花以止咳化痰" }
        ],
        contraindications: ["实热证者忌用"]
    },
    {
        id: "formula_130",
        name: "麦味地黄丸",
        pinyin: "Mai Wei Di Huang Wan",
        source: "《医级宝鉴》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "熟地黄", dosage: "24g", role: "君药" },
            { herbName: "山茱萸", dosage: "12g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" }
        ],
        functions: ["滋补肺肾"],
        indications: ["肺肾阴虚", "干咳少痰", "潮热盗汗", "咽干口燥", "腰膝酸软", "久咳虚喘"],
        analysis: "本方为滋补肺肾之剂，即六味地黄丸加麦冬、五味子而成。六味地黄丸滋补肾阴，加麦冬养阴润肺，五味子敛肺止咳、滋肾涩精。全方肺肾同治，尤宜肺肾阴虚之久咳虚喘、潮热盗汗。",
        keyPoints: ["干咳少痰", "潮热盗汗", "咽干口燥", "舌红少苔"],
        relatedSyndromes: ["肺肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "盗汗甚", modification: "加浮小麦、牡蛎以敛汗" },
            { condition: "干咳甚", modification: "加百合、川贝母以润肺止咳" }
        ],
        contraindications: ["脾虚便溏者慎用", "外感咳嗽者忌用"]
    },

    // ===================================================================
    // 数据扩充批次 v3（formula_131 ~ formula_170）— 据《方剂学》教材与经典原籍补录
    // ===================================================================

    {
        id: "formula_131",
        name: "葛根汤",
        pinyin: "Ge Gen Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "葛根", dosage: "12g", role: "君药" },
            { herbName: "麻黄", dosage: "9g", role: "臣药" },
            { herbName: "桂枝", dosage: "6g", role: "臣药" },
            { herbName: "白芍", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "大枣", dosage: "12g", role: "佐药" }
        ],
        functions: ["发汗解表", "升津舒筋", "解肌退热"],
        indications: ["风寒表实兼项背强几几", "恶寒发热", "无汗身痛", "项背强直不舒", "苔薄白", "脉浮紧"],
        analysis: "本方即桂枝汤加葛根、麻黄而成。方中葛根为君，解肌发表、升津液、濡筋脉，以除项背强几几；麻黄、桂枝为臣，发汗解表散风寒；白芍、生姜、大枣、炙甘草调和营卫为佐使。全方发汗与升津并举，散风寒与舒经脉兼顾，为治风寒表实兼项背强者之良方。",
        keyPoints: ["恶寒无汗", "项背强几几", "脉浮紧"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质", "阳虚质"],
        modifications: [
            { condition: "呕吐较甚", modification: "加半夏以和胃降逆（葛根加半夏汤）" },
            { condition: "表虚有汗者", modification: "去麻黄，桂枝减量" }
        ],
        contraindications: ["表虚有汗者慎用", "温病初起口渴者禁用"]
    },
    {
        id: "formula_132",
        name: "柴葛解肌汤",
        pinyin: "Chai Ge Jie Ji Tang",
        source: "《伤寒六书》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "柴胡", dosage: "6g", role: "君药" },
            { herbName: "葛根", dosage: "9g", role: "君药" },
            { herbName: "羌活", dosage: "3g", role: "臣药" },
            { herbName: "白芷", dosage: "3g", role: "臣药" },
            { herbName: "黄芩", dosage: "6g", role: "佐药" },
            { herbName: "石膏", dosage: "6g", role: "佐药" },
            { herbName: "白芍", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "3g", role: "佐药" },
            { herbName: "生姜", dosage: "3g", role: "佐药" },
            { herbName: "大枣", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["解肌清热"],
        indications: ["外感风寒郁而化热", "恶寒渐轻", "身热增盛", "头痛眼眶痛", "心烦不眠", "鼻干目痛", "苔薄黄", "脉浮微洪"],
        analysis: "本方主治太阳风寒未罢、阳明郁热已成之证。方中柴胡、葛根为君，解肌退热；羌活、白芷为臣，助解表散邪；黄芩、石膏清泄郁热为佐；白芍敛阴和营，桔梗宣利肺气，姜枣和中为佐；甘草调和诸药为使。诸药相合，三阳并治，表里同解。",
        keyPoints: ["身热增盛", "恶寒渐轻", "眼眶痛", "鼻干"],
        relatedSyndromes: ["实热证", "风热表证"],
        relatedConstitutions: ["湿热质", "平和质"],
        modifications: [
            { condition: "心烦甚", modification: "加栀子以清热除烦" },
            { condition: "无恶寒头痛", modification: "去羌活、白芷" }
        ],
        contraindications: ["太阳表证未入里化热者慎用", "阴虚发热者忌用"]
    },
    {
        id: "formula_133",
        name: "越婢汤",
        pinyin: "Yue Bi Tang",
        source: "《伤寒论》", 
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "麻黄", dosage: "12g", role: "君药" },
            { herbName: "石膏", dosage: "24g", role: "臣药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "15g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["发汗利水", "宣肺散水", "清热"],
        indications: ["风水夹热", "一身悉肿", "恶风发热", "汗出口渴", "小便不利", "脉浮"],
        analysis: "本方为治风水夹热之代表方。方中麻黄为君，宣肺发汗，利水消肿；石膏为臣，清泄肺胃郁热，与麻黄相伍一辛温一辛寒，发越水气而不助热；生姜、大枣为佐，和中助运，助水湿宣散；炙甘草为使，调和诸药。全方开鬼门以散水气，清郁热而保津液。",
        keyPoints: ["一身悉肿", "恶风汗出", "口渴", "小便不利"],
        relatedSyndromes: ["水饮内停证"],
        relatedConstitutions: ["湿热质", "平和质"],
        modifications: [
            { condition: "水湿极重", modification: "加白术以健脾利湿（越婢加术汤）" },
            { condition: "恶风者", modification: "加附子以温经助阳" }
        ],
        contraindications: ["水肿属脾肾阳虚者慎用", "汗出较多者慎用"]
    },
    {
        id: "formula_134",
        name: "防己黄芪汤",
        pinyin: "Fang Ji Huang Qi Tang",
        source: "《金匮要略》",
        category: "祛湿剂",
        subcategory: "利水渗湿剂",
        composition: [
            { herbName: "防己", dosage: "12g", role: "君药" },
            { herbName: "黄芪", dosage: "15g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "6g", role: "佐药" }
        ],
        functions: ["益气祛风", "健脾利水"],
        indications: ["表虚不固之风水或风湿", "汗出恶风", "身重", "小便不利", "浮肿", "舌淡苔白", "脉浮"],
        analysis: "本方为风湿、风水属表虚证之常用方。方中防己为君，祛风行水；黄芪为君，益气固表、利水消肿，与防己相配祛风除湿而不伤正；白术为臣，健脾燥湿，助黄芪益气固表；甘草、姜、枣为佐使，调和营卫、培土和中。全方补卫气、祛风湿、利水湿，标本兼顾。",
        keyPoints: ["汗出恶风", "身重浮肿", "小便不利", "脉浮"],
        relatedSyndromes: ["水饮内停证", "气虚证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "腹痛明显", modification: "加白芍以缓急止痛" },
            { condition: "喘者", modification: "加麻黄以宣肺平喘" }
        ],
        contraindications: ["水湿壅盛之实证水肿慎用", "阴虚津亏者慎用"]
    },
    {
        id: "formula_135",
        name: "人参败毒散",
        pinyin: "Ren Can Bai Du San",
        source: "《太平惠民和剂局方》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "柴胡", dosage: "9g", role: "君药" },
            { herbName: "前胡", dosage: "9g", role: "臣药" },
            { herbName: "川芎", dosage: "9g", role: "臣药" },
            { herbName: "枳壳", dosage: "9g", role: "臣药" },
            { herbName: "羌活", dosage: "9g", role: "佐药" },
            { herbName: "独活", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "薄荷", dosage: "3g", role: "佐药" },
            { herbName: "生姜", dosage: "6g", role: "佐药" }
        ],
        functions: ["益气解表", "散风祛湿"],
        indications: ["气虚外感风寒湿", "憎寒壮热", "头项强痛", "肢体酸痛", "无汗", "鼻塞声重", "咳嗽有痰", "舌苔白腻", "脉浮而重按无力"],
        analysis: "本方为益气解表之代表方。方中羌活、独活为君，散一身上下之风寒湿邪；柴胡、川芎为臣，助解表疏邪，行血中气滞；枳壳、前胡、桔梗宣降肺气、化痰止咳，茯苓渗湿健脾，均为佐药；人参为佐，扶助正气以助驱邪，使发散不伤正；甘草、薄荷、生姜为使，调和诸药。喻昌称此方\"培其正气，败其邪毒\"，故名败毒。",
        keyPoints: ["憎寒壮热", "肢体酸痛", "脉浮重按无力"],
        relatedSyndromes: ["风寒表实证", "气虚证"],
        relatedConstitutions: ["气虚质", "平和质"],
        modifications: [
            { condition: "咳嗽痰多", modification: "加半夏、陈皮以化痰止咳" },
            { condition: "疫毒重", modification: "加大青叶、蒲公英以清热解毒" }
        ],
        contraindications: ["外感风热者慎用", "阴虚液亏者忌用", "湿热证者慎用"]
    },
    {
        id: "formula_136",
        name: "麻黄细辛附子汤",
        pinyin: "Ma Huang Xi Xin Fu Zi Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "麻黄", dosage: "6g", role: "君药" },
            { herbName: "附子", dosage: "9g", role: "君药" },
            { herbName: "细辛", dosage: "3g", role: "臣药" }
        ],
        functions: ["助阳解表"],
        indications: ["素体阳虚外感风寒", "发热恶寒", "头痛无汗", "神疲欲寐", "脉沉"],
        analysis: "本方为助阳解表之代表方，治少阴阳虚兼太阳表寒之证。方中麻黄为君，发汗解表散寒；附子为君，温肾助阳，与麻黄同用温经发汗而卫阳不损；细辛为臣，通彻表里，外助麻黄解表，内助附子温阳。三药相合，补散兼施，于发汗中顾及阳气。",
        keyPoints: ["发热恶寒无汗", "神疲欲寐", "脉沉"],
        relatedSyndromes: ["虚寒证", "风寒表实证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "头痛身痛较甚", modification: "加羌活、川芎以祛风止痛" },
            { condition: "阳虚较甚", modification: "加黄芪、党参以益气固表" }
        ],
        contraindications: ["阴虚阳亢者禁用", "风热表证者禁用"]
    },
    {
        id: "formula_137",
        name: "大黄附子汤",
        pinyin: "Da Huang Fu Zi Tang",
        source: "《金匮要略》",
        category: "泻下剂",
        subcategory: "温下剂",
        composition: [
            { herbName: "大黄", dosage: "9g", role: "君药" },
            { herbName: "附子", dosage: "12g", role: "君药" },
            { herbName: "细辛", dosage: "3g", role: "臣药" }
        ],
        functions: ["温里散寒", "通便止痛"],
        indications: ["寒积里实", "腹痛便秘", "胁下偏痛", "发热", "手足厥冷", "苔白腻", "脉紧张"],
        analysis: "本方为温下剂之代表方，主治寒积里实之证。方中附子为君，温里散寒止痛；大黄为君，泻下通便攻积，性虽苦寒，得附子辛热则寒性减而泻下之功存；细辛为臣，温散寒邪，助附子温里止痛。三药合用，温里与攻下并行，为治疗寒实内结之良方。",
        keyPoints: ["腹痛便秘", "手足厥冷", "苔白腻", "脉紧张"],
        relatedSyndromes: ["虚寒证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "腹痛甚", modification: "加肉桂、木香以温中行气止痛" },
            { condition: "腹胀明显", modification: "加厚朴、陈皮以行气除胀" }
        ],
        contraindications: ["热结便秘者禁用", "阴虚里热者忌用"]
    },
    {
        id: "formula_138",
        name: "济川煎",
        pinyin: "Ji Chuan Jian",
        source: "《景岳全书》",
        category: "泻下剂",
        subcategory: "润下剂",
        composition: [
            { herbName: "肉苁蓉", dosage: "9g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "牛膝", dosage: "6g", role: "臣药" },
            { herbName: "泽泻", dosage: "4.5g", role: "佐药" },
            { herbName: "升麻", dosage: "3g", role: "佐药" },
            { herbName: "枳壳", dosage: "3g", role: "佐药" }
        ],
        functions: ["温肾益精", "润肠通便"],
        indications: ["肾虚便秘", "大便秘结", "小便清长", "腰膝酸软", "头晕目眩", "舌淡苔白", "脉沉迟"],
        analysis: "本方为温润通便之代表方。方中肉苁蓉为君，温肾益精、润肠通便；当归为臣，养血润肠；牛膝为臣，补肾强腰，引药下行；泽泻渗利，使浊阴下降；升麻升清阳，清升浊降；枳壳宽肠下气为佐。全方寓升于降，寄通于补，故名\"济川\"（济河川之意）。",
        keyPoints: ["大便秘结", "小便清长", "腰膝酸软", "脉沉迟"],
        relatedSyndromes: ["肾阳虚证", "肠燥津亏证"],
        relatedConstitutions: ["阳虚质", "阴虚质"],
        modifications: [
            { condition: "气虚者", modification: "加人参以益气" },
            { condition: "肾虚较甚", modification: "加熟地黄以补肾填精" }
        ],
        contraindications: ["热结津亏之便秘慎用", "实热证者禁用"]
    },
    {
        id: "formula_139",
        name: "增液承气汤",
        pinyin: "Zeng Ye Cheng Qi Tang",
        source: "《温病条辨》",
        category: "泻下剂",
        subcategory: "攻补兼施剂",
        composition: [
            { herbName: "玄参", dosage: "30g", role: "君药" },
            { herbName: "麦冬", dosage: "24g", role: "臣药" },
            { herbName: "生地黄", dosage: "24g", role: "臣药" },
            { herbName: "大黄", dosage: "9g", role: "佐药" },
            { herbName: "芒硝", dosage: "4.5g", role: "佐药" }
        ],
        functions: ["滋阴增液", "泄热通便"],
        indications: ["热结阴亏", "燥屎不行", "下之不通", "口干舌燥", "舌红苔黄", "脉细数"],
        analysis: "本方为攻补兼施之剂，主治温病热结阴亏之便秘。方中玄参为君，滋阴降火、清热润燥；麦冬、生地黄为臣，甘寒滋阴生津，与玄参相合即增液汤，\"以补药之体作泻药之用\"；大黄、芒硝为佐，软坚润燥、泄热通便。全方增水行舟，润下并用。",
        keyPoints: ["燥屎不行", "口干舌燥", "舌红苔黄", "脉细数"],
        relatedSyndromes: ["津液亏虚证", "肠燥津亏证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "燥结甚", modification: "大黄后下以增强通腑之力" },
            { condition: "阴伤甚", modification: "去芒硝，加大麦冬用量" }
        ],
        contraindications: ["脾虚便溏者忌用", "湿盛中满者慎用"]
    },
    {
        id: "formula_140",
        name: "白虎加人参汤",
        pinyin: "Bai Hu Jia Ren Shen Tang",
        source: "《伤寒论》",
        category: "清热剂",
        subcategory: "清气分热剂",
        composition: [
            { herbName: "石膏", dosage: "50g", role: "君药" },
            { herbName: "知母", dosage: "18g", role: "臣药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "佐药" },
            { herbName: "粳米", dosage: "9g", role: "佐药" }
        ],
        functions: ["清热益气", "生津止渴"],
        indications: ["气分热盛兼气阴两伤", "壮热", "烦渴引饮", "汗出", "背微恶寒", "舌红苔燥", "脉大无力"],
        analysis: "本方即白虎汤加人参而成，主治气分热盛而气阴两伤之证。白虎汤清气分之大热，石膏、知母相须为用；加人参益气生津，使清热而不伤正，生津而能固脱。凡暑热耗气伤津、白虎汤证而见烦渴不止、脉大无力者宜之。",
        keyPoints: ["壮热烦渴", "汗出", "背微恶寒", "脉大无力"],
        relatedSyndromes: ["气分热盛证", "气虚证"],
        relatedConstitutions: ["湿热质", "平和质"],
        modifications: [
            { condition: "烦渴甚", modification: "加天花粉、芦根以生津止渴" },
            { condition: "心烦不寐", modification: "加栀子、竹叶以清心除烦" }
        ],
        contraindications: ["表证未解之无汗者慎用", "脉浮细或沉者禁用", "血虚发热者忌用"]
    },
    {
        id: "formula_141",
        name: "凉膈散",
        pinyin: "Liang Ge San",
        source: "《太平惠民和剂局方》",
        category: "清热剂",
        subcategory: "清气分热剂",
        composition: [
            { herbName: "连翘", dosage: "25g", role: "君药" },
            { herbName: "黄芩", dosage: "15g", role: "臣药" },
            { herbName: "栀子", dosage: "15g", role: "臣药" },
            { herbName: "大黄", dosage: "9g", role: "佐药" },
            { herbName: "芒硝", dosage: "9g", role: "佐药" },
            { herbName: "薄荷", dosage: "6g", role: "佐药" },
            { herbName: "淡竹叶", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "12g", role: "使药" }
        ],
        functions: ["泻火通便", "清上泄下"],
        indications: ["上中二焦郁热", "烦躁口渴", "面赤唇焦", "胸膈烦热", "口舌生疮", "咽痛吐衄", "便秘溲赤", "舌红苔黄", "脉滑数"],
        analysis: "本方为清上泄下之剂，主治上中二焦郁热之证。方中连翘为君，清热解毒，轻清透散；黄芩、栀子为臣，清泻上焦郁热；大黄、芒硝为佐，荡涤中焦燥热，导热下行；薄荷、淡竹叶为佐，清疏胸膈之热；甘草为使，调和诸药。全方清上与泻下并行，使郁热从二便而解。",
        keyPoints: ["胸膈烦热", "口舌生疮", "便秘溲赤"],
        relatedSyndromes: ["实热证", "心火亢盛证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "咽痛甚", modification: "加桔梗、射干以清热利咽" },
            { condition: "衄血", modification: "加白茅根、侧柏叶以凉血止血" }
        ],
        contraindications: ["脾胃虚寒便溏者忌用", "孕妇慎用"]
    },
    {
        id: "formula_142",
        name: "泻心汤",
        pinyin: "Xie Xin Tang",
        source: "《金匮要略》",
        category: "清热剂",
        subcategory: "清热解毒剂",
        composition: [
            { herbName: "大黄", dosage: "6g", role: "君药" },
            { herbName: "黄连", dosage: "3g", role: "臣药" },
            { herbName: "黄芩", dosage: "3g", role: "臣药" }
        ],
        functions: ["泻火解毒", "燥湿泄热"],
        indications: ["邪火内炽迫血妄行", "吐血衄血", "心烦", "面赤", "便秘溲赤", "舌红苔黄腻", "脉数"],
        analysis: "本方为泻火止血之基础方，三黄同用，苦寒直折。方中大黄为君，泻火凉血，导热下行，使邪火从二便而去；黄连为臣，清心泻火；黄芩为臣，清肺与上焦之热。三药合用，泻心火、清三焦，火降则血自宁，为\"以泻代清\"之法。",
        keyPoints: ["吐血衄血", "心烦面赤", "便秘溲赤"],
        relatedSyndromes: ["实热证", "血热证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "血热甚", modification: "加生地黄、牡丹皮以凉血止血" },
            { condition: "便秘甚", modification: "大黄加量以通腑泄热" }
        ],
        contraindications: ["脾胃虚寒之出血者禁用", "阳虚失血者禁用", "孕妇慎用"]
    },
    {
        id: "formula_143",
        name: "四妙勇安汤",
        pinyin: "Si Miao Yong An Tang",
        source: "《验方新编》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "金银花", dosage: "90g", role: "君药" },
            { herbName: "玄参", dosage: "90g", role: "臣药" },
            { herbName: "当归", dosage: "30g", role: "佐药" },
            { herbName: "甘草", dosage: "15g", role: "使药" }
        ],
        functions: ["清热解毒", "活血止痛"],
        indications: ["热毒炽盛之脱疽", "患肢黯红微肿灼热", "疼痛剧烈", "久不溃脓", "发热口渴", "舌红脉数"],
        analysis: "本方为治脱疽之专方。方中金银花为君，重用以清热解毒；玄参为臣，滋阴清热，软坚散结，与金银花相伍清热解毒力专；当归为佐，养血活血，化瘀止痛；甘草为使，清热解毒，调和诸药。四药量大力专，连续服用，使热毒解、瘀血化、血脉通而疼痛止，故名\"四妙勇安\"。",
        keyPoints: ["患肢黯红灼热", "疼痛剧烈", "舌红脉数"],
        relatedSyndromes: ["热毒蕴肤证"],
        relatedConstitutions: ["湿热质", "血瘀质"],
        modifications: [
            { condition: "痛剧", modification: "加乳香、没药以活血止痛" },
            { condition: "热毒甚", modification: "加蒲公英、紫花地丁以增清热解毒之力" }
        ],
        contraindications: ["脾胃虚寒者慎用", "阳虚寒凝之脱疽禁用"]
    },
    {
        id: "formula_144",
        name: "千金苇茎汤",
        pinyin: "Qian Jin Wei Jing Tang",
        source: "《备急千金要方》",
        category: "清热剂",
        subcategory: "清脏腑热剂",
        composition: [
            { herbName: "芦根", dosage: "60g", role: "君药" },
            { herbName: "薏苡仁", dosage: "30g", role: "臣药" },
            { herbName: "冬瓜子", dosage: "24g", role: "臣药" },
            { herbName: "桃仁", dosage: "9g", role: "佐药" }
        ],
        functions: ["清肺化痰", "逐瘀排脓"],
        indications: ["肺痈", "咳嗽有微热", "咳吐腥臭脓血", "胸中隐隐作痛", "舌红苔黄腻", "脉滑数"],
        analysis: "本方为治肺痈之代表方。方中芦根（苇茎）为君，清肺泄热，为治肺痈之要药；薏苡仁为臣，清热利湿排脓；冬瓜子为臣，清热化痰排脓；桃仁为佐，活血逐瘀，润燥滑肠，助消痈排脓。四药相合，清热于上，排脓于内，瘀消痰化，脓去痈消。",
        keyPoints: ["咳吐腥臭脓血", "胸中隐痛", "脉滑数"],
        relatedSyndromes: ["痰热壅肺证", "肺热咳嗽证"],
        relatedConstitutions: ["湿热质", "痰湿质"],
        modifications: [
            { condition: "脓多", modification: "加鱼腥草、桔梗以解毒排脓" },
            { condition: "发热甚", modification: "加金银花、连翘以清热解毒" }
        ],
        contraindications: ["风寒咳嗽者忌用", "虚寒性肺痿者慎用"]
    },
    {
        id: "formula_145",
        name: "黄连阿胶汤",
        pinyin: "Huang Lian E Jiao Tang",
        source: "《伤寒论》",
        // 注：原归清热剂·清虚热剂；2026-08-31 按教材《方剂学》移至安神剂·交通心肾剂（保持原位置）
        category: "安神剂",
        subcategory: "交通心肾剂",
        composition: [
            { herbName: "黄连", dosage: "12g", role: "君药" },
            { herbName: "黄芩", dosage: "6g", role: "臣药" },
            { herbName: "白芍", dosage: "6g", role: "臣药" },
            { herbName: "阿胶", dosage: "9g", role: "佐药" },
            { herbName: "鸡子黄", dosage: "2枚", role: "佐药" }
        ],
        functions: ["滋阴降火", "除烦安神"],
        indications: ["阴虚火旺之失眠", "心烦不得卧", "口燥咽干", "五心烦热", "舌红少苔", "脉细数"],
        analysis: "本方为少阴阴虚火旺之证而设。方中黄连为君，清心泻火以除烦；黄芩为臣，助黄连清热；白芍为臣，酸甘化阴，敛阴和营；阿胶为佐，滋阴养血润燥；鸡子黄为佐，血肉有情之品，滋肾阴、养心血。全方泻南补北，心肾相交，则烦除寐安。",
        keyPoints: ["心烦不得卧", "五心烦热", "舌红少苔", "脉细数"],
        relatedSyndromes: ["肾阴虚证", "心阴虚证", "心火亢盛证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "失眠甚", modification: "加酸枣仁、龙骨以养心镇惊安神" },
            { condition: "阴虚甚", modification: "加生地黄、麦冬以滋阴" }
        ],
        contraindications: ["实热证者慎用", "脾胃虚寒便溏者慎用"]
    },
    {
        id: "formula_146",
        name: "黄芪建中汤",
        pinyin: "Huang Qi Jian Zhong Tang",
        source: "《金匮要略》",
        category: "温里剂",
        subcategory: "温中祛寒剂",
        composition: [
            { herbName: "黄芪", dosage: "9g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "18g", role: "臣药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "大枣", dosage: "12g", role: "佐药" },
            { herbName: "饴糖", dosage: "30g", role: "佐药" }
        ],
        functions: ["温中补气", "和里缓急"],
        indications: ["阴阳气血俱虚之中虚里急", "腹中拘急疼痛", "喜温喜按", "自汗短气", "面色无华", "舌淡脉弦细"],
        analysis: "本方即小建中汤加黄芪而成。小建中汤温中补虚、缓急止痛；加黄芪增强益气建中之力，使中气立而化源足。方中饴糖、黄芪为君，甘温补中；桂枝温阳气，白芍益阴血，共为臣；姜枣和中，甘草调诸药为佐使。全方甘温与酸甘并用，阴阳并调，为虚劳里急之要方。",
        keyPoints: ["腹中拘急疼痛", "喜温喜按", "自汗短气"],
        relatedSyndromes: ["虚寒证", "脾阳虚证", "气血两虚证"],
        relatedConstitutions: ["气虚质", "阳虚质"],
        modifications: [
            { condition: "气短胸满", modification: "加生姜以温中散寒" },
            { condition: "腹满者", modification: "去大枣，加茯苓以健脾渗湿" }
        ],
        contraindications: ["阴虚火旺者忌用", "实热腹痛者禁用", "呕家慎用"]
    },
    {
        id: "formula_147",
        name: "猪苓汤",
        pinyin: "Zhu Ling Tang",
        source: "《伤寒论》",
        category: "祛湿剂",
        subcategory: "利水渗湿剂",
        composition: [
            { herbName: "猪苓", dosage: "12g", role: "君药" },
            { herbName: "茯苓", dosage: "12g", role: "臣药" },
            { herbName: "泽泻", dosage: "12g", role: "臣药" },
            { herbName: "阿胶", dosage: "9g", role: "佐药" },
            { herbName: "滑石", dosage: "9g", role: "佐药" }
        ],
        functions: ["利水渗湿", "清热养阴"],
        indications: ["水热互结伤阴", "小便不利", "发热", "口渴欲饮", "心烦不寐", "或咳嗽", "或呕恶", "或下利", "舌红苔薄黄", "脉细数"],
        analysis: "本方为利水清热养阴之剂。方中猪苓为君，淡渗利水；茯苓、泽泻为臣，助猪苓利水渗湿，兼健脾；滑石为佐，清热利窍，导热下行；阿胶为佐，滋阴润燥，既益已伤之阴，又防利水伤阴。五药合用，利水而不伤阴，滋阴而不敛邪，为利水清热养阴之良方。",
        keyPoints: ["小便不利", "口渴心烦", "舌红脉细数"],
        relatedSyndromes: ["水饮内停证", "肾阴虚证"],
        relatedConstitutions: ["阴虚质", "湿热质"],
        modifications: [
            { condition: "尿血者", modification: "加白茅根、小蓟以凉血止血" },
            { condition: "阴虚甚", modification: "加生地黄以滋阴清热" }
        ],
        contraindications: ["阳虚水泛者慎用", "脾虚便溏者慎用"]
    },
    {
        id: "formula_148",
        name: "知柏地黄丸",
        pinyin: "Zhi Bai Di Huang Wan",
        source: "《医宗金鉴》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "熟地黄", dosage: "24g", role: "君药" },
            { herbName: "知母", dosage: "12g", role: "臣药" },
            { herbName: "黄柏", dosage: "12g", role: "臣药" },
            { herbName: "山茱萸", dosage: "12g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "臣药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" }
        ],
        functions: ["滋阴降火"],
        indications: ["阴虚火旺", "骨蒸潮热", "盗汗", "口干咽痛", "耳鸣遗精", "小便短赤", "舌红少苔", "脉细数"],
        analysis: "本方即六味地黄丸加知母、黄柏而成，为滋阴降火之代表方。六味地黄丸三补三泻，滋补肾阴；加知母清热泻火、滋阴润燥，黄柏清相火、退虚热，使滋阴与降火并施。凡阴虚火旺之潮热盗汗、遗精耳鸣者宜之。",
        keyPoints: ["骨蒸潮热", "盗汗遗精", "舌红少苔", "脉细数"],
        relatedSyndromes: ["肾阴虚证", "肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "潮热甚", modification: "加地骨皮、银柴胡以退虚热" },
            { condition: "遗精滑泄", modification: "加芡实、金樱子以固精止遗" }
        ],
        contraindications: ["脾虚便溏者慎用", "阳虚者忌用"]
    },
    {
        id: "formula_149",
        name: "二仙汤",
        pinyin: "Er Xian Tang",
        source: "《中医方剂临床手册》",
        category: "补益剂",
        subcategory: "补阳剂",
        composition: [
            { herbName: "仙茅", dosage: "9g", role: "君药" },
            { herbName: "淫羊藿", dosage: "9g", role: "君药" },
            { herbName: "巴戟天", dosage: "9g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "黄柏", dosage: "6g", role: "佐药" },
            { herbName: "知母", dosage: "6g", role: "佐药" }
        ],
        functions: ["温补肾阳", "滋阴泻火", "调理冲任"],
        indications: ["肾阴阳两虚之更年期综合征", "月经紊乱", "潮热汗出", "头晕耳鸣", "烦躁抑郁", "腰膝酸冷", "舌淡或红", "脉沉细"],
        analysis: "本方为温肾阳、泻相火之剂。方中仙茅、淫羊藿为君，温补肾阳而壮命门之火；巴戟天为臣，助君药温肾益精；当归为臣，养血调冲任；黄柏、知母为佐，滋阴降火，制温药之燥性。全方温而不燥，补泻兼施，使阴阳调和，冲任通盛。",
        keyPoints: ["潮热汗出", "腰膝酸冷", "月经紊乱"],
        relatedSyndromes: ["肾阴阳两虚证"],
        relatedConstitutions: ["阳虚质", "阴虚质"],
        modifications: [
            { condition: "潮热汗出甚", modification: "加牡蛎、浮小麦以敛阴止汗" },
            { condition: "失眠", modification: "加酸枣仁、夜交藤以养心安神" }
        ],
        contraindications: ["实热证者禁用", "阴虚火旺明显者慎用"]
    },
    {
        id: "formula_150",
        name: "当归芍药散",
        pinyin: "Dang Gui Shao Yao San",
        source: "《金匮要略》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "当归", dosage: "9g", role: "君药" },
            { herbName: "白芍", dosage: "18g", role: "君药" },
            { herbName: "川芎", dosage: "9g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "泽泻", dosage: "12g", role: "佐药" }
        ],
        functions: ["养血调肝", "健脾利湿"],
        indications: ["肝脾不和之妊娠腹痛", "腹中拘急", "绵绵作痛", "头晕心悸", "下肢浮肿", "小便不利", "舌淡苔白腻"],
        analysis: "本方为调肝养血、健脾除湿之剂。方中当归、白芍为君，养血柔肝、缓急止痛；川芎为臣，行血中之滞，助当归活血调肝；白术、茯苓、泽泻为佐，健脾渗湿，除湿消肿。全方肝脾同调，血水同治，使肝血足而腹痛止，脾气运而湿邪除。",
        keyPoints: ["腹中拘急绵绵作痛", "下肢浮肿", "舌淡苔白腻"],
        relatedSyndromes: ["肝血虚证", "脾气虚证", "痛经寒凝血瘀证"],
        relatedConstitutions: ["血瘀质", "气虚质"],
        modifications: [
            { condition: "腹痛甚", modification: "加重白芍用量以缓急止痛" },
            { condition: "水肿甚", modification: "加猪苓、车前子以利水消肿" }
        ],
        contraindications: ["湿热蕴结者慎用", "血瘀化热者慎用"]
    },
    {
        id: "formula_151",
        name: "牡蛎散",
        pinyin: "Mu Li San",
        source: "《太平惠民和剂局方》",
        category: "固涩剂",
        subcategory: "固表止汗剂",
        composition: [
            { herbName: "牡蛎", dosage: "30g", role: "君药" },
            { herbName: "黄芪", dosage: "30g", role: "君药" },
            { herbName: "麻黄根", dosage: "9g", role: "臣药" },
            { herbName: "浮小麦", dosage: "30g", role: "佐药" }
        ],
        functions: ["敛阴止汗", "益气固表"],
        indications: ["自汗盗汗", "心悸惊惕", "短气烦倦", "舌淡红", "脉细弱"],
        analysis: "本方为止汗之代表方，主治体虚卫外不固、心阳不潜之自汗盗汗。方中牡蛎为君，敛阴潜阳、固涩止汗；黄芪为君，益气实卫、固表止汗；麻黄根为臣，收玫止汗，为止汗专药；浮小麦为佐，养心敛汗、退虚热。四药相合，益气固表、敛阴潜阳，汗止而心悸烦倦自除。",
        keyPoints: ["自汗盗汗", "心悸惊惕", "短气烦倦"],
        relatedSyndromes: ["气虚证", "心气虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "气虚甚", modification: "加人参、白术以益气健脾" },
            { condition: "阴虚甚", modification: "加生地黄、白芍以养阴敛汗" }
        ],
        contraindications: ["实热汗出者禁用", "阴虚火旺而无气虚者慎用"]
    },
    {
        id: "formula_152",
        name: "桑螵蛸散",
        pinyin: "Sang Piao Xiao San",
        source: "《本草衍义》",
        category: "固涩剂",
        subcategory: "固精止遗剂",
        composition: [
            { herbName: "桑螵蛸", dosage: "30g", role: "君药" },
            { herbName: "龙骨", dosage: "30g", role: "臣药" },
            { herbName: "龟甲", dosage: "30g", role: "臣药" },
            { herbName: "人参", dosage: "30g", role: "臣药" },
            { herbName: "当归", dosage: "30g", role: "佐药" },
            { herbName: "茯神", dosage: "60g", role: "佐药" },
            { herbName: "远志", dosage: "30g", role: "佐药" },
            { herbName: "石菖蒲", dosage: "30g", role: "佐药" }
        ],
        functions: ["调补心肾", "涩精止遗"],
        indications: ["心肾两虚之尿频遗尿", "小便频数", "色白如米泔", "遗精滑泄", "心神恍惚", "健忘", "舌淡苔白", "脉细弱"],
        analysis: "本方为调补心肾、涩精止遗之剂。方中桑螵蛸为君，补肾固精止遗；龙骨为臣，收敛固涩、镇心安神；龟甲为臣，滋阴潜阳、益肾健骨；人参、当归为佐，益气养血补心；茯神、远志、石菖蒲为佐，安神定志、交通心肾。全方涩补并行，心肾同调，遗泄自止。",
        keyPoints: ["尿频遗尿", "遗精滑泄", "心神恍惚健忘"],
        relatedSyndromes: ["肾气不固证"],
        relatedConstitutions: ["气虚质", "阳虚质"],
        modifications: [
            { condition: "遗尿频数", modification: "加益智仁、覆盆子以固涩缩尿" },
            { condition: "心悸失眠", modification: "加酸枣仁、柏子仁以养心安神" }
        ],
        contraindications: ["下焦湿热之尿频者禁用", "膀胱湿热尿浊者禁用"]
    },
    {
        id: "formula_153",
        name: "真人养脏汤",
        pinyin: "Zhen Ren Yang Zang Tang",
        source: "《太平惠民和剂局方》",
        category: "固涩剂",
        subcategory: "涩肠止泻剂",
        composition: [
            { herbName: "罂粟壳", dosage: "18g", role: "君药" },
            { herbName: "诃子", dosage: "12g", role: "臣药" },
            { herbName: "肉豆蔻", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "15g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "白术", dosage: "12g", role: "佐药" },
            { herbName: "肉桂", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["涩肠固脱", "温补脾肾"],
        indications: ["久泻久痢", "大便滑脱不禁", "腹痛喜温喜按", "食少神疲", "脱肛坠下", "舌淡苔白", "脉沉迟无力"],
        analysis: "本方为涩肠固脱之代表方。方中罂粟壳为君，涩肠止泻固脱；诃子、肉豆蔻为臣，助涩肠止泻、温中涩肠；白芍、当归为佐，养血和血、缓急止痛；人参、白术为佐，益气健脾；肉桂为佐，温肾暖脾散寒；木香为佐，行气醒脾，使涩而不滞；甘草为使，调和诸药。全方涩肠与补脾同施，标本兼顾。",
        keyPoints: ["滑脱不禁", "腹痛喜温喜按", "神疲乏力"],
        relatedSyndromes: ["脾肾阳虚证", "脾阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "脱肛坠下", modification: "加黄芪、升麻以升阳举陷" },
            { condition: "寒甚", modification: "加干姜、附子以温阳散寒" }
        ],
        contraindications: ["湿热痢疾初起者禁用", "食积泄泻者禁用", "罂粟壳不宜久服过量"]
    },
    {
        id: "formula_154",
        name: "甘麦大枣汤",
        pinyin: "Gan Mai Da Zao Tang",
        source: "《金匮要略》",
        category: "安神剂",
        subcategory: "补养安神剂",
        composition: [
            { herbName: "浮小麦", dosage: "30g", role: "君药" },
            { herbName: "甘草", dosage: "9g", role: "臣药" },
            { herbName: "大枣", dosage: "10枚", role: "佐药" }
        ],
        functions: ["养心安神", "和中缓急"],
        indications: ["脏躁", "精神恍惚", "悲伤欲哭", "数欠伸", "心中烦乱", "睡眠不安", "舌红少苔", "脉细数"],
        analysis: "本方为治脏躁之专方。方中浮小麦（小麦）为君，养心气、安心神、敛汗液；甘草为臣，补益心气、和中缓急；大枣为佐，补益脾气、滋腻柔润，与甘草相伍甘润补中。三药甘润平补，养心脾、缓情志，使脏阴充、躁扰止，悲伤欲哭自愈。",
        keyPoints: ["悲伤欲哭", "精神恍惚", "数欠伸"],
        relatedSyndromes: ["心血虚证", "心气虚证", "心脾两虚证"],
        relatedConstitutions: ["气郁质", "气虚质"],
        modifications: [
            { condition: "失眠多梦", modification: "加酸枣仁、柏子仁以养心安神" },
            { condition: "心烦甚", modification: "加竹叶、灯心草以清心除烦" }
        ],
        contraindications: ["痰火扰心者慎用", "湿浊中阻者慎用"]
    },
    {
        id: "formula_155",
        name: "天台乌药散",
        pinyin: "Tian Tai Wu Yao San",
        source: "《医学发明》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "乌药", dosage: "12g", role: "君药" },
            { herbName: "木香", dosage: "6g", role: "臣药" },
            { herbName: "小茴香", dosage: "6g", role: "臣药" },
            { herbName: "青皮", dosage: "6g", role: "佐药" },
            { herbName: "高良姜", dosage: "6g", role: "佐药" },
            { herbName: "槟榔", dosage: "9g", role: "佐药" },
            { herbName: "川楝子", dosage: "12g", role: "佐药" },
            { herbName: "巴豆", dosage: "少许", role: "佐药" }
        ],
        functions: ["行气疏肝", "散寒止痛"],
        indications: ["寒凝气滞之小肠疝气", "少腹引控睾丸而痛", "偏坠肿胀", "苔白", "脉弦紧"],
        analysis: "本方为治寒疝之代表方。方中乌药为君，行气疏肝、散寒止痛；木香、小茴香为臣，行气止痛、温肾散寒；青皮、高良姜为佐，疏肝破气、温中散寒；槟榔为佐，下气导滞；川楝子与巴豆同炒后去巴豆，取其性存其用，增行气散结止痛之力。诸药合用，气行寒散，则疝痛可除。",
        keyPoints: ["少腹引控睾丸而痛", "偏坠肿胀", "脉弦紧"],
        relatedSyndromes: ["虚寒证", "寒凝血瘀证"],
        relatedConstitutions: ["阳虚质", "气郁质"],
        modifications: [
            { condition: "寒甚", modification: "加吴茱萸、肉桂以温阳散寒" },
            { condition: "痛甚", modification: "加延胡索以活血止痛" }
        ],
        contraindications: ["肝经湿热之疝痛禁用", "阴虚火旺者慎用"]
    },
    {
        id: "formula_156",
        name: "暖肝煎",
        pinyin: "Nuan Gan Jian",
        source: "《景岳全书》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "肉桂", dosage: "6g", role: "君药" },
            { herbName: "小茴香", dosage: "6g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "枸杞子", dosage: "9g", role: "臣药" },
            { herbName: "茯苓", dosage: "6g", role: "佐药" },
            { herbName: "乌药", dosage: "6g", role: "佐药" },
            { herbName: "沉香", dosage: "3g", role: "佐药" },
            { herbName: "生姜", dosage: "3g", role: "佐药" }
        ],
        functions: ["温补肝肾", "行气止痛"],
        indications: ["肝肾虚寒之睾丸冷痛", "小腹疼痛", "畏寒喜暖", "舌淡苔白", "脉沉迟"],
        analysis: "本方为温补肝肾、行气止痛之剂。方中肉桂、小茴香为君，温肾暖肝、散寒止痛；当归、枸杞子为臣，滋补肝肾精血，使温而不燥；茯苓为佐，渗湿健脾；乌药、沉香为佐，温肾行气止痛；生姜为佐，温散寒邪。全方温补与行气并用，标本兼顾，补而不滞。",
        keyPoints: ["睾丸冷痛", "小腹疼痛", "畏寒喜暖", "脉沉迟"],
        relatedSyndromes: ["肾阳虚证", "虚寒证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "寒甚", modification: "加吴茱萸、干姜以温中散寒" },
            { condition: "腹痛甚", modification: "加香附、延胡索以行气止痛" }
        ],
        contraindications: ["肝经湿热之疝痛禁用", "阴虚火旺者禁用"]
    },
    {
        id: "formula_157",
        name: "桃核承气汤",
        pinyin: "Tao He Cheng Qi Tang",
        source: "《伤寒论》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "桃仁", dosage: "12g", role: "君药" },
            { herbName: "大黄", dosage: "12g", role: "君药" },
            { herbName: "桂枝", dosage: "6g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "芒硝", dosage: "6g", role: "佐药" }
        ],
        functions: ["逐瘀泻热"],
        indications: ["下焦蓄血", "少腹急结", "小便自利", "其人如狂", "至夜发热", "或谵语烦渴", "舌紫暗", "脉沉涩"],
        analysis: "本方为下焦蓄血证之代表方。方中桃仁为君，活血破瘀；大黄为君，泻热逐瘀，二者相伍瘀热并治；桂枝为臣，通行血脉，助桃仁活血，得大黄则不助热；芒硝为佐，泻热软坚；炙甘草为使，护胃安中、缓和药性。全方破血下瘀，使蓄血从下而解。",
        keyPoints: ["少腹急结", "其人如狂", "小便自利"],
        relatedSyndromes: ["癥瘕血瘀证", "气滞血瘀证"],
        relatedConstitutions: ["血瘀质", "湿热质"],
        modifications: [
            { condition: "瘀重", modification: "加丹参、赤芍以活血化瘀" },
            { condition: "兼气滞", modification: "加香附、乌药以行气活血" }
        ],
        contraindications: ["孕妇禁用", "表证未解者慎用", "体虚者慎用"]
    },
    {
        id: "formula_158",
        name: "大黄䗪虫丸",
        pinyin: "Da Huang Zhe Chong Wan",
        source: "《金匮要略》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "大黄", dosage: "75g", role: "君药" },
            { herbName: "䗪虫", dosage: "30g", role: "君药" },
            { herbName: "水蛭", dosage: "60g", role: "臣药" },
            { herbName: "虻虫", dosage: "45g", role: "臣药" },
            { herbName: "蛴螬", dosage: "45g", role: "臣药" },
            { herbName: "干漆", dosage: "30g", role: "臣药" },
            { herbName: "桃仁", dosage: "60g", role: "佐药" },
            { herbName: "苦杏仁", dosage: "60g", role: "佐药" },
            { herbName: "生地黄", dosage: "300g", role: "佐药" },
            { herbName: "白芍", dosage: "120g", role: "佐药" },
            { herbName: "黄芩", dosage: "60g", role: "佐药" },
            { herbName: "甘草", dosage: "90g", role: "使药" }
        ],
        functions: ["祛瘀生新", "缓中补虚"],
        indications: ["五劳虚极羸瘦", "腹满不能饮食", "肌肤甲错", "两目黯黑", "内有干血", "腹部积块"],
        analysis: "本方为祛瘀生新之代表方，治五劳虚极之内有干血证。方中大黄、䗪虫为君，破血逐瘀、攻下积血；水蛭、虻虫、蛴螬、干漆为臣，助破瘀消癥之力；桃仁、苦杏仁为佐，润肠通便，助活血消癥；生地黄、白芍为佐，养血滋阴，寓补于攻；黄芩清郁热，甘草为使调和药性。全方峻药丸服，祛瘀生新，缓中补虚。",
        keyPoints: ["肌肤甲错", "两目黯黑", "腹部积块", "羸瘦"],
        relatedSyndromes: ["癥瘕血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "瘀积甚", modification: "加大三棱、莪术以增破瘀之力" },
            { condition: "正气虚甚", modification: "加人参、黄芪以扶正" }
        ],
        contraindications: ["孕妇禁用", "血虚无瘀者禁用", "脾胃虚弱者慎用"]
    },
    {
        id: "formula_159",
        name: "槐花散",
        pinyin: "Huai Hua San",
        source: "《普济本事方》",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "槐花", dosage: "12g", role: "君药" },
            { herbName: "侧柏叶", dosage: "12g", role: "臣药" },
            { herbName: "荆芥", dosage: "6g", role: "佐药" },
            { herbName: "枳壳", dosage: "9g", role: "佐药" }
        ],
        functions: ["清肠止血", "疏风行气"],
        indications: ["风热湿毒壅遏大肠之肠风下血", "便前出血", "血色鲜红或晦暗", "或大便带血", "舌红苔黄腻"],
        analysis: "本方为治肠风下血之代表方。方中槐花为君，清大肠湿热、凉血止血；侧柏叶为臣，凉血止血、燥湿；荆芥穗为佐，疏风理血，炒炭入血分止血；枳壳为佐，宽肠行气，气行则血行而不滞。四药合用，寓行气于止血之中，寄疏风于清肠之内。",
        keyPoints: ["便前出血", "血色鲜红", "舌红苔黄腻"],
        relatedSyndromes: ["血热证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "热甚", modification: "加黄芩、黄连以清热燥湿" },
            { condition: "下血多", modification: "加地榆、茜草以凉血止血" }
        ],
        contraindications: ["虚寒性便血者禁用", "脾虚便溏者慎用"]
    },
    {
        id: "formula_160",
        name: "牵正散",
        pinyin: "Qian Zheng San",
        source: "《杨氏家藏方》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "白附子", dosage: "6g", role: "君药" },
            { herbName: "僵蚕", dosage: "6g", role: "臣药" },
            { herbName: "全蝎", dosage: "6g", role: "臣药" }
        ],
        functions: ["祛风化痰", "通络止痉"],
        indications: ["风痰阻络之口眼㖞斜", "口角流涎", "面部肌肉抽动", "或半身不遂", "苔白腻", "脉弦滑"],
        analysis: "本方为治口眼㖞斜之专方。方中白附子为君，祛风化痰，善散头面之风痰；僵蚕、全蝎为臣，祛风止痉，通络化痰，与白附子相须为用。三药合用，酒调服以助药力，风痰去、络脉通，则口眼牵正。",
        keyPoints: ["口眼歪斜", "面部抽动", "苔白腻"],
        relatedSyndromes: ["痰蒙清窍证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "风邪重", modification: "加羌活、防风以祛风散邪" },
            { condition: "病程日久", modification: "加蜈蚣以增通络止痉之力" }
        ],
        contraindications: ["气虚血瘀之中风后遗症慎用", "阴虚阳亢者慎用", "孕妇忌用", "白附子生品有毒须制用"]
    },
    {
        id: "formula_161",
        name: "大秦艽汤",
        pinyin: "Da Qin Jiao Tang",
        source: "《素问病机气宜保命集》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "秦艽", dosage: "30g", role: "君药" },
            { herbName: "羌活", dosage: "30g", role: "臣药" },
            { herbName: "独活", dosage: "30g", role: "臣药" },
            { herbName: "防风", dosage: "30g", role: "臣药" },
            { herbName: "白芷", dosage: "30g", role: "臣药" },
            { herbName: "细辛", dosage: "15g", role: "佐药" },
            { herbName: "川芎", dosage: "30g", role: "佐药" },
            { herbName: "当归", dosage: "30g", role: "佐药" },
            { herbName: "白芍", dosage: "30g", role: "佐药" },
            { herbName: "生地黄", dosage: "30g", role: "佐药" },
            { herbName: "熟地黄", dosage: "30g", role: "佐药" },
            { herbName: "白术", dosage: "30g", role: "佐药" },
            { herbName: "茯苓", dosage: "30g", role: "佐药" },
            { herbName: "黄芩", dosage: "30g", role: "佐药" },
            { herbName: "石膏", dosage: "30g", role: "佐药" },
            { herbName: "甘草", dosage: "30g", role: "使药" }
        ],
        functions: ["祛风清热", "养血活血"],
        indications: ["风邪初中经络", "口眼㖞斜", "舌强不能言语", "手足不能运动", "或恶寒发热", "肢体拘急", "苔白或黄", "脉浮紧或弦细"],
        analysis: "本方为风邪初中经络之代表方。方中秦艽为君，祛风通络；羌活、独活、防风、白芷、细辛为臣，祛风散邪；川芎、当归、白芍、生熟地黄为佐，养血活血，\"治风先治血，血行风自灭\"；白术、茯苓为佐，健脾祛湿；黄芩、石膏为佐，清郁热，防风药化燥；甘草为使，调和诸药。全方搜风与养血并施，祛邪与扶正兼顾。",
        keyPoints: ["口眼歪斜", "舌强不语", "手足不能运动"],
        relatedSyndromes: ["风寒湿痹证"],
        relatedConstitutions: ["平和质", "阳虚质"],
        modifications: [
            { condition: "无内热", modification: "去黄芩、石膏" },
            { condition: "痰多", modification: "加半夏、天南星以祛风化痰" }
        ],
        contraindications: ["阴虚阳亢之眩晕者慎用", "肝风内动之中风慎用"]
    },
    {
        id: "formula_162",
        name: "羌活胜湿汤",
        pinyin: "Qiang Huo Sheng Shi Tang",
        source: "《脾胃论》",
        category: "祛湿剂",
        subcategory: "祛风胜湿剂",
        composition: [
            { herbName: "羌活", dosage: "9g", role: "君药" },
            { herbName: "独活", dosage: "9g", role: "君药" },
            { herbName: "藁本", dosage: "6g", role: "臣药" },
            { herbName: "防风", dosage: "6g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "蔓荆子", dosage: "6g", role: "佐药" }
        ],
        functions: ["祛风胜湿", "止痛"],
        indications: ["风湿在表之痹证", "肩背痛不可回顾", "头痛身重", "或腰脊疼痛", "苔白脉浮"],
        analysis: "本方为风湿在表之代表方。方中羌活、独活为君，散周身风湿、利关节而止痹痛；藁本、防风为臣，助君药祛上部风湿而止头痛；川芎为佐，行气活血、祛风止痛；蔓荆子为佐，清利头目；甘草为使，调和诸药。全方发汗祛湿，微汗而风湿俱去。",
        keyPoints: ["肩背痛不可回顾", "头痛身重", "苔白脉浮"],
        relatedSyndromes: ["风寒湿痹证"],
        relatedConstitutions: ["平和质", "阳虚质"],
        modifications: [
            { condition: "湿重", modification: "加苍术、薏苡仁以祛湿" },
            { condition: "痛甚", modification: "加延胡索、乳香以活血止痛" }
        ],
        contraindications: ["湿热痹痛者慎用", "阴虚血亏者慎用"]
    },
    {
        id: "formula_163",
        name: "实脾饮",
        pinyin: "Shi Pi Yin",
        source: "《重订严氏济生方》",
        category: "祛湿剂",
        subcategory: "温化寒湿剂",
        composition: [
            { herbName: "附子", dosage: "9g", role: "君药" },
            { herbName: "干姜", dosage: "9g", role: "君药" },
            { herbName: "茯苓", dosage: "12g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "厚朴", dosage: "9g", role: "佐药" },
            { herbName: "木香", dosage: "6g", role: "佐药" },
            { herbName: "草果", dosage: "6g", role: "佐药" },
            { herbName: "大腹皮", dosage: "9g", role: "佐药" },
            { herbName: "木瓜", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "生姜", dosage: "6g", role: "佐药" },
            { herbName: "大枣", dosage: "6g", role: "佐药" }
        ],
        functions: ["温阳健脾", "行气利水"],
        indications: ["脾肾阳虚之阴水", "半身以下肿甚", "胸腹胀满", "身重食少", "手足不温", "口中不渴", "舌淡苔腻", "脉沉迟"],
        analysis: "本方为温阳利水之代表方。方中附子、干姜为君，温养脾肾、扶阳抑阴；茯苓、白术为臣，健脾渗湿、利水消肿；厚朴、木香、草果、大腹皮为佐，行气导滞、化湿利水，气行则水行；木瓜为佐，芳香醒脾、化湿和中；姜、枣、甘草为使，益脾和中、调和诸药。全方脾肾同治，温阳与行气利水并行。",
        keyPoints: ["半身以下肿甚", "胸腹胀满", "手足不温", "脉沉迟"],
        relatedSyndromes: ["脾肾阳虚证", "水饮内停证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "水肿甚", modification: "加猪苓、泽泻以利水消肿" },
            { condition: "气虚", modification: "加人参、黄芪以益气健脾" }
        ],
        contraindications: ["阳水属湿热者禁用", "阴虚者慎用"]
    },
    {
        id: "formula_164",
        name: "胃苓汤",
        pinyin: "Wei Ling Tang",
        source: "《丹溪心法》",
        category: "祛湿剂",
        subcategory: "化湿和胃剂",
        composition: [
            { herbName: "苍术", dosage: "9g", role: "君药" },
            { herbName: "厚朴", dosage: "9g", role: "臣药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "猪苓", dosage: "9g", role: "佐药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "桂枝", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "生姜", dosage: "6g", role: "佐药" },
            { herbName: "大枣", dosage: "6g", role: "佐药" }
        ],
        functions: ["燥湿运脾", "化气利水"],
        indications: ["寒湿内盛之泄泻水肿", "泄泻清稀", "脘腹胀满", "小便不利", "水肿", "苔白腻", "脉濡缓"],
        analysis: "本方即平胃散合五苓散而成，为燥湿与利水并施之剂。平胃散燥湿运脾、行气和胃，以除内盛之寒湿；五苓散化气行水、通利小便，使湿从小便而去。两方相合，湿去而脾运，水行而肿消，主治寒湿泄泻、水肿身重之证。",
        keyPoints: ["泄泻清稀", "脘腹胀满", "小便不利", "苔白腻"],
        relatedSyndromes: ["寒湿困脾证", "水饮内停证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "泄泻甚", modification: "加车前子以利小便实大便" },
            { condition: "腹胀甚", modification: "加砂仁、木香以行气化湿" }
        ],
        contraindications: ["湿热泄泻者禁用", "阴虚津亏者慎用"]
    },
    {
        id: "formula_165",
        name: "萆薢分清饮",
        pinyin: "Bi Xie Fen Qing Yin",
        source: "《杨氏家藏方》",
        category: "祛湿剂",
        subcategory: "祛湿化浊剂",
        composition: [
            { herbName: "萆薢", dosage: "12g", role: "君药" },
            { herbName: "益智仁", dosage: "9g", role: "臣药" },
            { herbName: "乌药", dosage: "9g", role: "臣药" },
            { herbName: "石菖蒲", dosage: "9g", role: "佐药" }
        ],
        functions: ["温肾利湿", "分清化浊"],
        indications: ["下焦虚寒之膏淋白浊", "小便频数", "白如米泔", "凝如膏糊", "舌淡苔白", "脉沉"],
        analysis: "本方为治下焦虚寒膏淋白浊之代表方。方中萆薢为君，利湿化浊，为治小便混浊之要药；益智仁为臣，温肾固精、缩泉止遗；乌药为臣，温肾行气、散寒止痛；石菖蒲为佐，化浊辟秽、通窍分利。原方以盐煎，取其入肾之意。全方温肾与利湿并行，分清别浊而小便自清。",
        keyPoints: ["小便白如米泔", "小便频数", "舌淡苔白"],
        relatedSyndromes: ["肾气不固证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "虚甚", modification: "加山药、芡实以健脾益肾" },
            { condition: "寒甚", modification: "加肉桂、附子以温阳散寒" }
        ],
        contraindications: ["膀胱湿热之白浊者禁用", "湿热下注者禁用"]
    },
    {
        id: "formula_166",
        name: "五皮饮",
        pinyin: "Wu Pi Yin",
        source: "《华氏中藏经》",
        category: "祛湿剂",
        subcategory: "利水渗湿剂",
        composition: [
            { herbName: "生姜皮", dosage: "9g", role: "君药" },
            { herbName: "桑白皮", dosage: "9g", role: "君药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "大腹皮", dosage: "9g", role: "臣药" },
            { herbName: "茯苓皮", dosage: "15g", role: "臣药" }
        ],
        functions: ["利水消肿", "理气健脾"],
        indications: ["皮水", "一身悉肿", "肢体沉重", "心腹胀满", "上气喘急", "小便不利", "苔白腻", "脉沉缓"],
        analysis: "本方为皮水之代表方，五药皆用其皮，以皮行皮。方中生姜皮为君，辛散水气；桑白皮为君，泻肺利水、下气消肿；陈皮为臣，理气健脾化湿；大腹皮为臣，行气宽中利水；茯苓皮为臣，淡渗利水。全方行气与利水并施，气行水散，肿满自消。",
        keyPoints: ["一身悉肿", "心腹胀满", "小便不利"],
        relatedSyndromes: ["水饮内停证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "腰以上肿甚", modification: "加紫苏叶、防风以发汗散水" },
            { condition: "腰以下肿甚", modification: "加车前子、泽泻以利水消肿" }
        ],
        contraindications: ["阴虚水肿者慎用", "脾肾阳虚水肿者慎用"]
    },
    {
        id: "formula_167",
        name: "射干麻黄汤",
        pinyin: "She Gan Ma Huang Tang",
        source: "《金匮要略》",
        category: "祛痰剂",
        subcategory: "温化寒痰剂",
        composition: [
            { herbName: "射干", dosage: "9g", role: "君药" },
            { herbName: "麻黄", dosage: "9g", role: "君药" },
            { herbName: "生姜", dosage: "9g", role: "臣药" },
            { herbName: "细辛", dosage: "3g", role: "臣药" },
            { herbName: "紫菀", dosage: "9g", role: "佐药" },
            { herbName: "款冬花", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" },
            { herbName: "大枣", dosage: "6g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" }
        ],
        functions: ["宣肺散寒", "化痰降逆平喘"],
        indications: ["痰饮郁肺之寒咳哮喘", "咳而上气", "喉中有水鸡声", "痰多清稀", "恶寒", "苔白滑", "脉弦紧"],
        analysis: "本方为治寒饮郁肺哮喘之代表方。方中射干为君，消痰利咽、开结平喘；麻黄为君，宣肺散寒平喘；生姜、细辛为臣，温肺化饮、散寒；紫菀、款冬花为佐，润肺止咳化痰；半夏为佐，燥湿化痰降逆；五味子为佐，敛肺止咳，防辛散太过；大枣为佐，和中护正。全方散中有收，燥中有润，标本兼治。",
        keyPoints: ["喉中水鸡声", "痰多清稀", "苔白滑"],
        relatedSyndromes: ["风寒犯肺证", "痰湿内阻证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "痰多", modification: "加陈皮、茯苓以燥湿化痰" },
            { condition: "寒甚", modification: "加干姜以温肺化饮" }
        ],
        contraindications: ["痰热哮喘者禁用", "阴虚干咳者慎用"]
    },
    {
        id: "formula_168",
        name: "贝母瓜蒌散",
        pinyin: "Bei Mu Gua Lou San",
        source: "《医学心悟》",
        category: "祛痰剂",
        subcategory: "润燥化痰剂",
        composition: [
            { herbName: "川贝母", dosage: "9g", role: "君药" },
            { herbName: "瓜蒌", dosage: "12g", role: "君药" },
            { herbName: "天花粉", dosage: "6g", role: "臣药" },
            { herbName: "茯苓", dosage: "6g", role: "佐药" },
            { herbName: "橘红", dosage: "6g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" }
        ],
        functions: ["润肺清热", "理气化痰"],
        indications: ["燥痰咳嗽", "咳嗽呛急", "咯痰不爽", "涩而难出", "咽喉干燥", "苔白而干"],
        analysis: "本方为燥痰咳嗽之代表方。方中川贝母为君，润肺清热、化痰止咳；瓜蒌为君，润燥化痰、清热生津；天花粉为臣，清热生津润燥；茯苓为佐，健脾渗湿，杜绝生痰之源；橘红为佐，理气化痰，使气顺痰消；桔梗为佐，宣利肺气、载药上行。全方润燥与化痰并用，肺脾同调。",
        keyPoints: ["咳嗽呛急", "咯痰不爽涩而难出", "咽喉干燥"],
        relatedSyndromes: ["肺阴虚证", "津液亏虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咽干痛甚", modification: "加玄参、麦冬以滋阴利咽" },
            { condition: "燥热甚", modification: "加桑叶、杏仁以清宣凉润" }
        ],
        contraindications: ["湿痰咳嗽者禁用", "寒痰咳嗽者禁用"]
    },
    {
        id: "formula_169",
        name: "复元活血汤",
        pinyin: "Fu Yuan Huo Xue Tang",
        source: "《医学发明》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "柴胡", dosage: "15g", role: "君药" },
            { herbName: "瓜蒌", dosage: "9g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "红花", dosage: "6g", role: "臣药" },
            { herbName: "甘草", dosage: "6g", role: "使药" },
            { herbName: "穿山甲", dosage: "6g", role: "佐药" },
            { herbName: "大黄", dosage: "30g", role: "佐药" },
            { herbName: "桃仁", dosage: "9g", role: "佐药" }
        ],
        functions: ["活血祛瘀", "疏肝通络"],
        indications: ["跌打损伤", "瘀血留于胁下", "痛不可忍", "或胁肋刺痛", "痛处固定不移"],
        analysis: "本方为跌打损伤、瘀留胁下之代表方。方中柴胡为君，疏肝行气，引诸药入肝经；当归、红花、桃仁为臣，活血祛瘀、消肿止痛；穿山甲为佐，破瘀通络、消肿散结；瓜蒌根为佐，消扑损瘀血、清热润燥；大黄为佐，荡涤凝瘀败血，导瘀血从下而去；甘草为使，缓急止痛、调和诸药。全方气血同治，升降兼顾。",
        keyPoints: ["跌打损伤", "胁下瘀痛", "痛处固定"],
        relatedSyndromes: ["气滞血瘀证", "癥瘕血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "痛甚", modification: "加三七、乳香、没药以化瘀止痛" },
            { condition: "气滞甚", modification: "加香附、郁金以疏肝理气" }
        ],
        contraindications: ["孕妇禁用", "气血虚弱者慎用"]
    },
    {
        id: "formula_170",
        name: "大定风珠",
        pinyin: "Da Ding Feng Zhu",
        source: "《温病条辨》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "白芍", dosage: "18g", role: "君药" },
            { herbName: "阿胶", dosage: "9g", role: "君药" },
            { herbName: "龟甲", dosage: "12g", role: "臣药" },
            { herbName: "生地黄", dosage: "18g", role: "臣药" },
            { herbName: "火麻仁", dosage: "6g", role: "佐药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" },
            { herbName: "牡蛎", dosage: "12g", role: "佐药" },
            { herbName: "麦冬", dosage: "18g", role: "佐药" },
            { herbName: "炙甘草", dosage: "12g", role: "使药" },
            { herbName: "鸡子黄", dosage: "2枚", role: "佐药" },
            { herbName: "鳖甲", dosage: "12g", role: "佐药" }
        ],
        functions: ["滋阴息风"],
        indications: ["温病后期阴虚风动", "手足蠕动", "瘛疭", "神倦瘛疭", "脉气虚弱", "舌绛苔少", "时时欲脱"],
        analysis: "本方为滋阴息风之代表方，治温病后期真阴大亏、虚风内动之证。方中鸡子黄、阿胶为君，血肉有情之品，滋阴养液以息虚风；白芍、地黄、麦冬为臣，滋水涵木、柔肝息风；龟甲、鳖甲、牡蛎为佐，滋阴潜阳，介类潜镇；火麻仁为佐，养阴润燥；五味子为佐，敛阴气以防虚脱；炙甘草为使，和中调药。全方\"血肉有情，胶膏有情\"，峻补真阴，定风止瘛。",
        keyPoints: ["手足蠕动瘛疭", "神倦脉虚", "舌绛苔少", "时时欲脱"],
        relatedSyndromes: ["虚风内动证", "肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "喘者", modification: "加人参以益气固脱" },
            { condition: "自汗者", modification: "加人参、龙骨、浮小麦以固表敛汗" }
        ],
        contraindications: ["实热动风者禁用", "阳虚者禁用", "痰热扰神者慎用"]
    },

    // ================================================================================
    // 以下为"十五五"规划教材《方剂学》（李冀、许二平主编，中国中医药出版社 2026）补充正方
    // 2026-08-31 批次补充，共 53 首（解表5/泻下4/和解1/清热4/温里3/补益5/固涩4/安神2/开窍2/理气5/理血4/治风3/治燥2/祛湿3/祛痰3/消食2/驱虫1）
    // ================================================================================

    // —— 解表剂（5首） ——
    {
        id: "formula_171",
        name: "香薷散",
        pinyin: "Xiang Ru San",
        source: "《太平惠民和剂局方》",
        category: "祛暑剂",
        subcategory: "祛暑解表剂",
        composition: [
            { herbName: "香薷", dosage: "12g", role: "君药" },
            { herbName: "白扁豆", dosage: "9g", role: "佐药" },
            { herbName: "厚朴", dosage: "9g", role: "臣药" },
            { herbName: "酒", dosage: "适量", role: "引经" }
        ],
        functions: ["祛暑解表", "化湿和中"],
        indications: ["阴暑证", "恶寒发热", "头痛身重", "无汗", "腹痛吐泻", "胸脘痞闷", "舌苔白腻", "脉浮紧"],
        analysis: "本方为夏月乘凉饮冷、外感风寒、内伤于湿之阴暑证而设。香薷辛温芳香，解表散寒、祛暑化湿，为君药；厚朴苦辛而温，行气化湿、宽中除满，为臣药；白扁豆甘平，健脾和中、渗湿消暑，为佐药；少许酒煎，温通经脉、助药力布达，为使药。三药合用，共成祛暑解表、化湿和中之剂。",
        keyPoints: ["恶寒发热", "头痛身重", "无汗", "腹痛吐泻", "苔白腻"],
        relatedSyndromes: ["风寒表实证", "寒湿困脾证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "暑热烦渴", modification: "去白扁豆之壅滞，加黄连以清暑热（四味香薷饮）" },
            { condition: "湿盛于里、腹胀泄泻", modification: "加茯苓、甘草以健脾利湿（五物香薷饮）" }
        ],
        contraindications: ["表虚有汗者忌用", "中暑发热汗出、心烦口渴之阳暑证禁用"]
    },
    {
        id: "formula_172",
        name: "升麻葛根汤",
        pinyin: "Sheng Ma Ge Gen Tang",
        source: "《阎氏小儿方论》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "升麻", dosage: "6g", role: "君药" },
            { herbName: "葛根", dosage: "9g", role: "君药" },
            { herbName: "芍药", dosage: "6g", role: "臣药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["解肌透疹"],
        indications: ["麻疹初起", "疹发不出", "身热头痛", "咳嗽", "目赤流泪", "口渴", "舌红苔薄而干", "脉浮数"],
        analysis: "麻疹为阳毒，宜透发不宜清解。方中升麻辛甘微寒，入肺胃经，善解肌透疹、清热解毒，为君药；葛根甘辛性凉，解肌透疹、生津除热，助升麻透发麻疹，为臣药；芍药和营泄热，使透疹而不伤阴血，为佐药；炙甘草调和诸药，为使药。四药合用，共奏解肌透疹之功。",
        keyPoints: ["麻疹初起", "疹发不出", "身热", "目赤流泪"],
        relatedSyndromes: ["风热表证", "实热证"],
        relatedConstitutions: ["平和质", "湿热质"],
        modifications: [
            { condition: "麻疹欲出不出", modification: "加蝉蜕、薄荷、牛蒡子以增强透疹之力" },
            { condition: "咽喉肿痛", modification: "加桔梗、玄参、马勃以利咽消肿" }
        ],
        contraindications: ["麻疹已透者禁用", "麻疹逆证（毒陷心肝）者不宜单用"]
    },
    {
        id: "formula_173",
        name: "再造散",
        pinyin: "Zai Zao San",
        source: "《伤寒六书》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "黄芪", dosage: "6g", role: "君药" },
            { herbName: "人参", dosage: "3g", role: "臣药" },
            { herbName: "桂枝", dosage: "3g", role: "臣药" },
            { herbName: "羌活", dosage: "3g", role: "佐药" },
            { herbName: "防风", dosage: "3g", role: "佐药" },
            { herbName: "细辛", dosage: "1.5g", role: "佐药" },
            { herbName: "熟附子", dosage: "3g", role: "佐药" },
            { herbName: "川芎", dosage: "3g", role: "佐药" },
            { herbName: "煨生姜", dosage: "3g", role: "佐药" },
            { herbName: "芍药", dosage: "3g", role: "佐药" },
            { herbName: "大枣", dosage: "2枚", role: "佐药" },
            { herbName: "甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["助阳益气", "解表散寒"],
        indications: ["阳气虚弱", "外感风寒", "恶寒发热", "热轻寒重", "无汗肢冷", "倦怠嗜卧", "面色苍白", "舌淡苔白", "脉沉无力或浮大无力"],
        analysis: "本方为阳气虚弱、感邪无汗者设。若单纯发汗则汗出愈虚其阳，单纯扶正则表邪不去，故扶正与解表并投。方中以桂枝、羌活、防风、细辛、川芎、煨生姜发散风寒、解表止痛；黄芪、人参益气固表、助药力以鼓邪外出；熟附子温壮元阳，补阳以助解表；芍药和营，并制诸辛温药之燥；大枣、甘草和中益营，调和诸药。全方散不伤正、补不留邪。",
        keyPoints: ["恶寒发热", "热轻寒重", "无汗肢冷", "倦怠嗜卧", "脉沉无力"],
        relatedSyndromes: ["风寒表实证", "气虚证", "心阳虚证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "阳虚气弱较甚、面色苍白", modification: "重用人参、黄芪以益气固表" },
            { condition: "兼咳嗽有痰", modification: "加杏仁、半夏以化痰止咳" }
        ],
        contraindications: ["外感风热者忌用", "阴虚阳亢者禁用"]
    },
    {
        id: "formula_174",
        name: "加减葳蕤汤",
        pinyin: "Jia Jian Wei Rui Tang",
        source: "《重订通俗伤寒论》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "玉竹", dosage: "9g", role: "君药" },
            { herbName: "薄荷", dosage: "5g", role: "臣药" },
            { herbName: "葱白", dosage: "3g", role: "臣药" },
            { herbName: "淡豆豉", dosage: "6g", role: "臣药" },
            { herbName: "桔梗", dosage: "5g", role: "佐药" },
            { herbName: "白薇", dosage: "5g", role: "佐药" },
            { herbName: "大枣", dosage: "2枚", role: "佐药" },
            { herbName: "炙甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["滋阴解表"],
        indications: ["素体阴虚", "外感风热", "头痛身热", "微恶风寒", "无汗或有汗不多", "咳嗽心烦", "口渴咽干", "舌红脉数"],
        analysis: "本方为素体阴虚、感受风热之证而设。葳蕤（玉竹）甘平柔润，滋阴益液而润燥，为君药；薄荷、葱白、淡豆豉疏散风热、发汗解表，为臣药；白薇清热而不伤阴，桔梗宣肺止咳祛痰，大枣甘润养血，共为佐药；甘草调和诸药，为使药。全方发汗不伤阴，滋阴不碍邪。",
        keyPoints: ["身热微恶风寒", "口渴咽干", "心烦", "舌红脉数"],
        relatedSyndromes: ["风热表证", "肺阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咳嗽咽干明显", modification: "加杏仁、瓜蒌皮、浙贝母以润肺化痰" },
            { condition: "心烦较甚", modification: "加竹叶、天花粉以清热生津除烦" }
        ],
        contraindications: ["外感风寒表证者不宜", "无阴虚表现者慎用"]
    },
    {
        id: "formula_175",
        name: "葱白七味饮",
        pinyin: "Cong Bai Qi Wei Yin",
        source: "《外台秘要》",
        category: "解表剂",
        subcategory: "扶正解表剂",
        composition: [
            { herbName: "葱白", dosage: "9g", role: "君药" },
            { herbName: "干葛", dosage: "9g", role: "臣药" },
            { herbName: "淡豆豉", dosage: "6g", role: "臣药" },
            { herbName: "生地黄", dosage: "15g", role: "君药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "生姜", dosage: "3g", role: "佐药" },
            { herbName: "劳水", dosage: "适量", role: "佐药" }
        ],
        functions: ["养血滋阴", "发汗解表"],
        indications: ["血虚或阴液亏虚之人外感风寒", "头痛身热", "微恶风寒", "无汗", "面色无华", "唇甲色淡", "舌淡苔白", "脉浮细无力"],
        analysis: "本方为血虚或阴亏之人复感风寒而设。生地黄、麦冬养血滋阴为君，使汗出有源而不伤正；葱白、淡豆豉、生姜辛散解表为臣，宣散风寒而不燥烈；干葛解肌发表、升津液为佐；劳水（再扬之水）助药力以行，为使。诸药合用，养血滋阴与解表散寒并行，标本兼顾。",
        keyPoints: ["头痛身热", "微恶风寒", "无汗", "血虚阴亏见症"],
        relatedSyndromes: ["风寒表实证", "血虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "恶寒较重", modification: "加荆芥、防风以增强解表之力" },
            { condition: "血虚明显", modification: "加当归、白芍以养血和营" }
        ],
        contraindications: ["湿热内蕴者禁用", "外感风热者不宜"]
    },

    // —— 泻下剂（4首） ——
    {
        id: "formula_176",
        name: "大陷胸汤",
        pinyin: "Da Xian Xiong Tang",
        source: "《伤寒论》",
        category: "泻下剂",
        subcategory: "寒下剂",
        composition: [
            { herbName: "甘遂", dosage: "1g（研末冲服）", role: "君药" },
            { herbName: "大黄", dosage: "12g", role: "臣药" },
            { herbName: "芒硝", dosage: "9g（冲服）", role: "佐使" },
        ],
        functions: ["泻热逐水"],
        indications: ["水热互结之结胸证", "心下硬满而痛", "拒按", "从心下至少腹硬满而痛不可近", "大便秘结", "日晡潮热", "短气烦躁", "舌上燥而渴", "脉沉紧有力"],
        analysis: "本方为水热互结于胸腹之结胸证而设。甘遂苦寒峻下，攻逐水饮，为君药；大黄泻热通便，芒硝软坚泻热，二者与甘遂相伍，泻热与逐水并施，使水热之邪从大便而去。三药力专效宏，为泻热逐水之峻剂。",
        keyPoints: ["心下硬满而痛拒按", "便秘", "潮热", "脉沉紧有力"],
        relatedSyndromes: ["实热证", "湿热蕴结证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "结胸证轻而兼呕", modification: "去芒硝，加半夏、生姜以辛开散结（小陷胸汤化裁）" },
            { condition: "水热互结而津伤较甚", modification: "加生地、玄参以养阴生津" }
        ],
        contraindications: ["平素虚弱者慎用", "孕妇禁用", "中病即止，不可久服"]
    },
    {
        id: "formula_177",
        name: "十枣汤",
        pinyin: "Shi Zao Tang",
        source: "《伤寒论》",
        category: "泻下剂",
        subcategory: "逐水剂",
        composition: [
            { herbName: "甘遂", dosage: "等份（与京大戟、芫花等份研末）", role: "君药" },
            { herbName: "京大戟", dosage: "等份", role: "君药" },
            { herbName: "芫花", dosage: "等份", role: "君药" },
            { herbName: "大枣", dosage: "10枚（煎汤送服）", role: "佐使" },
        ],
        functions: ["攻逐水饮"],
        indications: ["悬饮", "咳唾胸胁引痛", "心下痞硬", "干呕短气", "头痛目眩", "或胸背掣痛不得息", "脉沉弦；亦治水肿腹胀属实者"],
        analysis: "本方为水饮壅盛于里之实证而设。甘遂善行经隧水湿，京大戟善泻脏腑水湿，芫花善消胸胁伏饮痰癖，三药相须，峻下逐水之力尤强；然三药俱峻猛有毒，易伤正气，故以肥大枣十枚煎汤送服，益脾护胃、缓和诸药之毒，使逐水而不伤正。",
        keyPoints: ["咳唾胸胁引痛", "心下痞硬", "干呕短气", "脉沉弦"],
        relatedSyndromes: ["水饮内停证", "实热证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "体虚邪实非攻不可者", modification: "与人参、黄芪等扶正药间隔使用，先攻后补" },
            { condition: "咳唾引胁痛甚者", modification: "加香附、旋覆花以理气降逆" }
        ],
        contraindications: ["孕妇禁用", "体虚者慎用", "三药均峻猛有毒，须研末空腹枣汤送服，剂量由小渐增，中病即止", "服后泻下不止者可进冷粥止之"]
    },
    {
        id: "formula_178",
        name: "黄龙汤",
        pinyin: "Huang Long Tang",
        source: "《伤寒六书》",
        category: "泻下剂",
        subcategory: "攻补兼施剂",
        composition: [
            { herbName: "大黄", dosage: "9g", role: "君药" },
            { herbName: "芒硝", dosage: "6g（冲服）", role: "臣药" },
            { herbName: "枳实", dosage: "6g", role: "臣药" },
            { herbName: "厚朴", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" },
            { herbName: "大枣", dosage: "2枚", role: "佐药" },
            { herbName: "桔梗", dosage: "3g", role: "佐药" }
        ],
        functions: ["攻下通便", "补气养血"],
        indications: ["阳明腑实", "气血不足", "自利清水", "色纯青", "或大便秘结", "腹痛拒按", "身热口渴", "神倦少气", "谵语，甚则循衣撮空", "舌苔焦黄或黑", "脉虚"],
        analysis: "本方为阳明腑实兼气血不足者设。大黄、芒硝、枳实、厚朴（大承气汤）攻下热结，荡涤肠胃实热积滞；人参、当归益气养血，扶正以助攻下，使攻不伤正；桔梗开宣肺气以通降大肠，生姜、大枣和胃助运，甘草调和诸药。全方攻补兼施，为攻下热结与补益气血并行之代表方。",
        keyPoints: ["自利清水或便秘", "腹痛拒按", "身热口渴", "神倦少气", "苔焦黄"],
        relatedSyndromes: ["实热证", "气血两虚证"],
        relatedConstitutions: ["湿热质", "气虚质"],
        modifications: [
            { condition: "年老气血虚甚者", modification: "去芒硝，减缓攻下之力" },
            { condition: "热结液亏、口燥咽干", modification: "加生地黄、玄参、麦冬以增液通便" }
        ],
        contraindications: ["孕妇禁用", "无气血虚弱者不宜滥用"]
    },
    {
        id: "formula_179",
        name: "五仁丸",
        pinyin: "Wu Ren Wan",
        source: "《世医得效方》",
        category: "泻下剂",
        subcategory: "润下剂",
        composition: [
            { herbName: "桃仁", dosage: "30g", role: "君药" },
            { herbName: "杏仁", dosage: "30g", role: "臣药" },
            { herbName: "柏子仁", dosage: "15g", role: "佐药" },
            { herbName: "郁李仁", dosage: "6g", role: "佐药" },
            { herbName: "松子仁", dosage: "15g", role: "佐药" },
            { herbName: "陈皮", dosage: "120g", role: "佐药" }
        ],
        functions: ["润肠通便"],
        indications: ["津枯肠燥证", "大便艰难", "老年人或产后血虚便秘", "习惯性便秘", "舌燥少津", "脉细涩"],
        analysis: "本方为津枯肠燥、大便艰难者设。方中五仁皆富含油脂，以润燥滑肠为用：桃仁、杏仁质润多脂，润肠通便且能降肺气，为君臣；柏子仁养心安神、润肠，郁李仁润肠利水，松子仁润五脏，共为佐；重用陈皮理气行滞，使润而不腻。全方润下与行气相合，用治津枯便秘。",
        keyPoints: ["大便艰难", "老年或产后便秘", "舌燥少津"],
        relatedSyndromes: ["肠燥津亏证"],
        relatedConstitutions: ["阴虚质", "气虚质"],
        modifications: [
            { condition: "津亏较甚", modification: "加生地黄、玄参以增液润燥" },
            { condition: "兼气滞腹胀", modification: "加枳壳、莱菔子以行气导滞" }
        ],
        contraindications: ["实热积滞之便秘禁用", "孕妇慎用"]
    },

    // —— 和解剂（1首） ——
    {
        id: "formula_180",
        name: "达原饮",
        pinyin: "Da Yuan Yin",
        source: "《温疫论》",
        category: "和解剂",
        subcategory: "和解少阳剂",
        composition: [
            { herbName: "槟榔", dosage: "6g", role: "君药" },
            { herbName: "厚朴", dosage: "3g", role: "臣药" },
            { herbName: "草果", dosage: "2g", role: "臣药" },
            { herbName: "知母", dosage: "3g", role: "佐药" },
            { herbName: "芍药", dosage: "3g", role: "佐药" },
            { herbName: "黄芩", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "1.5g", role: "使药" }
        ],
        functions: ["开达膜原", "辟秽化浊"],
        indications: ["温疫或疟疾", "邪伏膜原", "憎寒壮热", "或一日二三次发热", "胸闷呕恶", "头痛烦躁", "舌边深红", "舌苔白厚如积粉", "脉数"],
        analysis: "本方为温疫邪伏膜原而设。槟榔辛散湿邪、化痰破结，厚朴芳香化浊、理气祛湿，草果辛香辟秽、宣透伏邪，三药协力直达膜原、逐邪外出，为君臣；热易伤津，以知母清热滋阴，黄芩清热燥湿，芍药敛阴和营，共为佐；甘草清热和中，调和诸药，为使。全方透邪与清热滋阴并投，开达膜原、辟秽化浊。",
        keyPoints: ["憎寒壮热", "胸闷呕恶", "苔白厚如积粉", "舌边深红"],
        relatedSyndromes: ["少阳病证", "湿热蕴结证"],
        relatedConstitutions: ["痰湿质", "湿热质"],
        modifications: [
            { condition: "胁痛耳聋", modification: "加柴胡以疏肝胆" },
            { condition: "腰背项痛", modification: "加羌活以疏散太阳经邪" },
            { condition: "目痛眉棱骨痛", modification: "加葛根以解肌升津" }
        ],
        contraindications: ["温疫已传入胃、大渴大汗者不宜单用", "阴虚火旺者慎用"]
    },

    // —— 清热剂（4首） ——
    {
        id: "formula_181",
        name: "栀子豉汤",
        pinyin: "Zhi Zi Chi Tang",
        source: "《伤寒论》",
        category: "清热剂",
        subcategory: "清气分热剂",
        composition: [
            { herbName: "栀子", dosage: "9g", role: "君药" },
            { herbName: "淡豆豉", dosage: "9g", role: "臣药" }
        ],
        functions: ["清宣郁热"],
        indications: ["发汗吐下后", "虚烦不得眠", "反复颠倒", "心中懊憹", "甚则烦闷窒塞", "舌苔薄黄", "脉数"],
        analysis: "本方为汗吐下后余热留扰胸膈、气机不宣之虚烦证而设。栀子苦寒，清泻心胸郁热而除烦，为君药；淡豆豉辛凉宣散，既解表除烦，又宣散胸中郁结，助栀子清宣胸膈郁热，为臣药。二药一清一宣，郁热得散，虚烦自除。",
        keyPoints: ["虚烦不得眠", "心中懊憹", "苔薄黄"],
        relatedSyndromes: ["心火亢盛证", "实热证"],
        relatedConstitutions: ["湿热质", "平和质"],
        modifications: [
            { condition: "兼少气者", modification: "加炙甘草（栀子甘草豉汤）以益气和中" },
            { condition: "兼呕者", modification: "加生姜（栀子生姜豉汤）以降逆止呕" }
        ],
        contraindications: ["脾胃虚寒、大便溏者慎用（栀子苦寒伤中）"]
    },
    {
        id: "formula_182",
        name: "清瘟败毒饮",
        pinyin: "Qing Wen Bai Du Yin",
        source: "《疫疹一得》",
        category: "清热剂",
        subcategory: "气血两清剂",
        composition: [
            { herbName: "生石膏", dosage: "大剂180-240g/中剂60-120g/小剂24-36g", role: "君药" },
            { herbName: "水牛角", dosage: "大剂24-30g/中剂9-15g/小剂6-12g", role: "臣药" },
            { herbName: "生地黄", dosage: "大剂30g/中剂15g/小剂9g", role: "臣药" },
            { herbName: "黄连", dosage: "大剂18g/中剂9g/小剂3-6g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "黄芩", dosage: "9g", role: "佐药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "知母", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "赤芍", dosage: "9g", role: "佐药" },
            { herbName: "玄参", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "竹叶", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["清热解毒", "凉血泻火"],
        indications: ["温疫热毒", "气血两燔证", "大热渴饮", "头痛如劈", "干呕狂躁", "谵语神昏", "视物昏瞀", "或发斑疹", "或吐血衄血", "四肢抽搐", "舌绛唇焦", "脉沉数或浮大而数"],
        analysis: "本方由白虎汤、犀角地黄汤、黄连解毒汤三方加减合并而成，主治温疫热毒、气血两燔之证。生石膏、知母清气分之热而保津；水牛角、生地黄、牡丹皮、赤芍、玄参凉血救阴、解毒化斑；黄连、黄芩、栀子、连翘泻火解毒；桔梗、竹叶载药上行宣透，甘草调和诸药。全方气血两清，为十二经泻火之剂。",
        keyPoints: ["大热渴饮", "头痛如劈", "谵语神昏", "发斑吐衄", "舌绛唇焦"],
        relatedSyndromes: ["实热证", "血热证", "热毒蕴肤证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "头痛欲裂", modification: "重用石膏，加菊花、蔓荆子以清利头目" },
            { condition: "斑疹显露", modification: "加大青叶、青黛以凉血化斑" }
        ],
        contraindications: ["素体阳虚者禁用", "脾胃虚寒者忌用"]
    },
    {
        id: "formula_183",
        name: "当归六黄汤",
        pinyin: "Dang Gui Liu Huang Tang",
        source: "《兰室秘藏》",
        category: "清热剂",
        subcategory: "清虚热剂",
        composition: [
            { herbName: "当归", dosage: "9g", role: "君药" },
            { herbName: "生地黄", dosage: "15g", role: "君药" },
            { herbName: "熟地黄", dosage: "15g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "黄连", dosage: "9g", role: "臣药" },
            { herbName: "黄柏", dosage: "9g", role: "臣药" },
            { herbName: "黄芪", dosage: "18g", role: "佐使" }
        ],
        functions: ["滋阴泻火", "固表止汗"],
        indications: ["阴虚火旺之盗汗", "发热盗汗", "面赤心烦", "口干唇燥", "大便干结", "小便黄赤", "舌红苔黄", "脉数"],
        analysis: "本方为阴虚火旺之盗汗而设。当归、生地黄、熟地黄滋阴养血，使阴血充则虚火自降，为君药；黄连、黄芩、黄柏三黄泻火除烦、清热坚阴，为臣药；倍用黄芪益气实卫、固表止汗，为佐使。全方养血育阴与泻火清热并进，益气固表与育阴泻火相配，标本兼顾。",
        keyPoints: ["发热盗汗", "面赤心烦", "口干唇燥", "舌红苔黄"],
        relatedSyndromes: ["肾阴虚证", "心火亢盛证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴虚实火不太甚、汗出多", modification: "减三黄之量，加煅牡蛎、浮小麦以增强固表敛汗" },
            { condition: "潮热咽干明显", modification: "加知母、龟甲以滋阴退热" }
        ],
        contraindications: ["脾胃虚弱、纳减便溏者不宜", "阳虚发热之汗出禁用"]
    },
    {
        id: "formula_184",
        name: "清骨散",
        pinyin: "Qing Gu San",
        source: "《证治准绳》",
        category: "清热剂",
        subcategory: "清虚热剂",
        composition: [
            { herbName: "银柴胡", dosage: "6g", role: "君药" },
            { herbName: "胡黄连", dosage: "3g", role: "臣药" },
            { herbName: "秦艽", dosage: "3g", role: "佐药" },
            { herbName: "鳖甲", dosage: "9g（先煎）", role: "佐药" },
            { herbName: "地骨皮", dosage: "3g", role: "佐药" },
            { herbName: "青蒿", dosage: "3g", role: "佐药" },
            { herbName: "知母", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "2g", role: "使药" }
        ],
        functions: ["清虚热", "退骨蒸"],
        indications: ["阴虚内热之骨蒸潮热", "或低热日久不退", "唇红颧赤", "形体消瘦", "困倦盗汗", "或五心烦热", "舌红少苔", "脉细数"],
        analysis: "本方为阴虚骨蒸劳热而设。银柴胡甘苦微寒，清虚热、退骨蒸，为君药；胡黄连、知母、地骨皮助银柴胡退骨蒸劳热，为臣药；青蒿、秦艽清虚热并透伏热于外，鳖甲滋阴潜阳、引药入阴分，共为佐药；甘草调和诸药，为使药。全方集退热除蒸之品于一方，重在清透伏热，兼以滋养阴分。",
        keyPoints: ["骨蒸潮热", "五心烦热", "盗汗消瘦", "舌红少苔"],
        relatedSyndromes: ["肾阴虚证", "肺肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "血虚甚者", modification: "加当归、白芍以养血" },
            { condition: "咳嗽", modification: "加阿胶、五味子以养阴敛肺" }
        ],
        contraindications: ["外感发热者禁用", "脾胃虚寒者忌用"]
    },

    // —— 温里剂（3首） ——
    {
        id: "formula_185",
        name: "大建中汤",
        pinyin: "Da Jian Zhong Tang",
        source: "《金匮要略》",
        category: "温里剂",
        subcategory: "温中祛寒剂",
        composition: [
            { herbName: "花椒", dosage: "6g", role: "君药" },
            { herbName: "干姜", dosage: "12g", role: "君药" },
            { herbName: "人参", dosage: "9g", role: "臣药" },
            { herbName: "饴糖", dosage: "30g（烊化）", role: "佐使" }
        ],
        functions: ["温中补虚", "降逆止痛"],
        indications: ["中阳衰弱", "阴寒内盛之脘腹剧痛", "腹痛连及胸脘", "痛势剧烈", "上下攻冲", "呕不能食", "或腹中漉漉有声", "手足厥冷", "舌质淡苔白滑", "脉沉紧或沉迟"],
        analysis: "本方为脾胃阳衰、中焦寒盛之腹痛呕吐而设。花椒温脾胃、助命火、散寒止痛，为君药；干姜温中散寒、助花椒温中，为君药之辅；人参补益中气、扶助中阳，为臣药；重用饴糖温补中虚、缓急止痛，且缓和椒、姜之燥烈，为佐使。全方纯用辛甘温热之品，温中与降逆并施，急建中阳。",
        keyPoints: ["脘腹剧痛", "上下攻冲", "呕不能食", "手足厥冷"],
        relatedSyndromes: ["虚寒证", "寒凝胃脘证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "兼呕吐清水", modification: "加半夏、生姜以温胃降逆" },
            { condition: "寒甚肢冷", modification: "加附子以温阳祛寒" }
        ],
        contraindications: ["热性腹痛者禁用", "阴虚火旺者忌用"]
    },
    {
        id: "formula_186",
        name: "回阳救急汤",
        pinyin: "Hui Yang Jiu Ji Tang",
        source: "《伤寒六书》",
        category: "温里剂",
        subcategory: "回阳救逆剂",
        composition: [
            { herbName: "熟附子", dosage: "9g", role: "君药" },
            { herbName: "干姜", dosage: "6g", role: "君药" },
            { herbName: "肉桂", dosage: "3g", role: "臣药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "3g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" },
            { herbName: "麝香", dosage: "0.1g（冲服）", role: "佐药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" }
        ],
        functions: ["回阳救逆", "益气生脉"],
        indications: ["寒邪直中三阴", "真阳衰微", "四肢厥冷", "神衰欲寐", "恶寒蜷卧", "吐泻腹痛", "口不渴", "或指甲口唇青紫", "舌淡苔白滑", "脉沉微甚则无脉"],
        analysis: "本方为真阳衰微、阴寒极盛之危重证而设，由四逆汤合六君子汤加味。附子、干姜、肉桂温壮元阳、祛寒救逆，为君臣；人参大补元气，五味子敛气生津，白术、茯苓健脾益气渗湿，陈皮、半夏理气化痰、和胃降逆，共为佐药；麝香辛香走窜、通行十二经，引导诸药布达周身，为佐使；甘草调和诸药。全方回阳与益气并施，峻补元气以挽垂绝之阳。",
        keyPoints: ["四肢厥冷", "神衰欲寐", "吐泻腹痛", "脉沉微"],
        relatedSyndromes: ["虚寒证", "心阳虚证", "脾肾阳虚证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "呕吐涎沫或少腹痛", modification: "加盐炒吴茱萸以温肝散寒" },
            { condition: "泄泻不止", modification: "加升麻、黄芪以升阳止泻" },
            { condition: "无脉者", modification: "加猪胆汁以反佐通脉" }
        ],
        contraindications: ["热厥者禁用", "阴虚阳衰欲脱者慎用（须防燥烈伤阴）"]
    },
    {
        id: "formula_187",
        name: "阳和汤",
        pinyin: "Yang He Tang",
        source: "《外科证治全生集》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "熟地黄", dosage: "30g", role: "君药" },
            { herbName: "鹿角胶", dosage: "9g（烊化）", role: "君药" },
            { herbName: "肉桂", dosage: "3g", role: "臣药" },
            { herbName: "麻黄", dosage: "2g", role: "臣药" },
            { herbName: "白芥子", dosage: "6g", role: "佐药" },
            { herbName: "姜炭", dosage: "2g", role: "佐药" },
            { herbName: "生甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["温阳补血", "散寒通滞"],
        indications: ["阴疽", "漫肿无头", "皮色不变", "酸痛无热", "口淡不渴", "贴骨疽（流注）", "脱疽", "痰核", "鹤膝风", "舌淡苔白", "脉沉细或迟细"],
        analysis: "本方为阳虚血弱、寒凝痰滞之阴疽而设。重用熟地黄温补营血、填精益髓，鹿角胶温肾助阳、益精养血，二药相伍补精血、壮元阳，为君药；肉桂、姜炭温阳散寒、通利血脉，为臣药；少量麻黄辛温达卫，开腠理以逐寒外出，白芥子祛除皮里膜外之痰，二者一散一化，使补而不滞、温而能通，为佐药；甘草生用解毒和中，为使药。全方温阳补血以治本，散寒通滞以治标，如离照当空、阴霾自散。",
        keyPoints: ["阴疽漫肿无头", "皮色不变", "酸痛无热", "脉沉细"],
        relatedSyndromes: ["虚寒证", "寒凝血瘀证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "寒甚痛剧", modification: "加熟附子以温阳散寒" },
            { condition: "兼气虚", modification: "加人参、黄芪以益气托毒" }
        ],
        contraindications: ["阳证疮疡（红肿热痛）禁用", "阴虚有热及破溃日久阴血亏耗者慎用"]
    },

    // —— 补益剂（5首） ——
    {
        id: "formula_188",
        name: "大补阴丸",
        pinyin: "Da Bu Yin Wan",
        source: "《丹溪心法》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "熟地黄", dosage: "120g", role: "君药" },
            { herbName: "龟甲", dosage: "120g", role: "君药" },
            { herbName: "黄柏", dosage: "90g", role: "臣药" },
            { herbName: "知母", dosage: "90g", role: "臣药" },
            { herbName: "猪脊髓", dosage: "适量（炼蜜为丸）", role: "佐使" }
        ],
        functions: ["滋阴降火"],
        indications: ["阴虚火旺证", "骨蒸潮热", "盗汗遗精", "咳嗽咯血", "心烦易怒", "足膝疼热酸软", "舌红少苔", "尺脉数而有力"],
        analysis: "本方为阴虚火旺、真阴不足之证而设，为培本清源之剂。熟地黄、龟甲滋阴潜阳、峻补真阴，以制相火，为君药；黄柏、知母苦寒泻相火而坚阴，并保阴津，为臣药；猪脊髓、蜂蜜为血肉甘润之品，填精补髓、兼制知柏之苦燥，为佐使。全方滋阴与降火并重，阴平阳秘，虚火自敛。",
        keyPoints: ["骨蒸潮热", "盗汗遗精", "咳嗽咯血", "足膝疼热"],
        relatedSyndromes: ["肾阴虚证", "肝肾阴虚证", "肺肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咳嗽咯血", modification: "加天冬、麦冬、旱莲草以润肺止血" },
            { condition: "遗精盗汗甚", modification: "加牡蛎、金樱子以固涩精关" }
        ],
        contraindications: ["脾胃虚弱、食少便溏者慎用", "阳虚火衰者禁用"]
    },
    {
        id: "formula_189",
        name: "泰山磐石散",
        pinyin: "Tai Shan Pan Shi San",
        source: "《古今医统大全》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "人参", dosage: "3g", role: "君药" },
            { herbName: "黄芪", dosage: "6g", role: "君药" },
            { herbName: "白术", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "6g", role: "臣药" },
            { herbName: "白芍", dosage: "6g", role: "佐药" },
            { herbName: "熟地黄", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "3g", role: "佐药" },
            { herbName: "续断", dosage: "6g", role: "佐药" },
            { herbName: "黄芩", dosage: "3g", role: "佐药" },
            { herbName: "砂仁", dosage: "3g", role: "佐药" },
            { herbName: "糯米", dosage: "一撮", role: "佐药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["益气健脾", "养血安胎"],
        indications: ["妇人妊娠", "气血两虚", "胎动不安", "或屡有滑胎史", "面色淡白", "倦怠乏力", "不思饮食", "舌淡苔薄白", "脉滑无力或沉弱"],
        analysis: "本方为气血两虚、冲任不固之胎动不安而设，由八珍汤去茯苓加黄芪、续断、黄芩、砂仁、糯米而成。人参、黄芪、白术、炙甘草益气健脾，使气固而胎有所载；当归、白芍、熟地黄、川芎养血和血，使血足而胎有所养；续断补肝肾、强腰膝以固冲任，为安胎要药；砂仁理气安胎、醒脾开胃；黄芩清热，与诸甘温药相配防其化热；糯米养胃。全方补气养血、固肾安胎，使胎元如泰山磐石之固。",
        keyPoints: ["妊娠胎动不安", "面色淡白", "倦怠乏力", "屡有滑胎史"],
        relatedSyndromes: ["气血两虚证", "冲任不固崩漏证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "呕恶不食", modification: "加陈皮、竹茹以和胃降逆" },
            { condition: "腰酸下坠", modification: "重用续断，加杜仲、桑寄生以固肾安胎" }
        ],
        contraindications: ["胎漏因血热或外伤者非本方所宜"]
    },
    {
        id: "formula_190",
        name: "龟鹿二仙胶",
        pinyin: "Gui Lu Er Xian Jiao",
        source: "《医便》",
        category: "补益剂",
        subcategory: "阴阳双补剂",
        composition: [
            { herbName: "鹿角", dosage: "5000g", role: "君药" },
            { herbName: "龟甲", dosage: "2500g", role: "君药" },
            { herbName: "人参", dosage: "450g", role: "臣药" },
            { herbName: "枸杞子", dosage: "900g", role: "臣药" }
        ],
        functions: ["填阴补精", "益气壮阳"],
        indications: ["肾中阴阳两虚", "任督精血亏虚", "瘦弱少气", "梦遗泄精", "阳痿早泄", "目视不明", "腰膝酸软", "神疲乏力", "久不孕育"],
        analysis: "本方为真元虚拟、精血亏耗之证而设。鹿角胶通督脉而补阳，龟甲胶通任脉而补阴，二味血肉有情之品峻补阴阳、填精补髓，共为君药；人参大补元气以生精，枸杞子滋补肾阴以助阳，为臣药。四药合用，阴阳并补、气血兼顾，故名二仙胶。",
        keyPoints: ["瘦弱少气", "梦遗阳痿", "目视不明", "腰膝酸软"],
        relatedSyndromes: ["肾阴阳两虚证", "肾精不足证"],
        relatedConstitutions: ["阳虚质", "阴虚质"],
        modifications: [
            { condition: "遗精频作", modification: "加芡实、莲须以固涩精关" },
            { condition: "目视昏花", modification: "加菊花、女贞子以养肝明目" }
        ],
        contraindications: ["脾胃虚弱、食少便溏者慎用（胶质滋腻碍胃）", "感冒发热时停服"]
    },
    {
        id: "formula_191",
        name: "七宝美髯丹",
        pinyin: "Qi Bao Mei Ran Dan",
        source: "《积善堂方》（录于《本草纲目》）",
        category: "补益剂",
        subcategory: "补阳剂",
        composition: [
            { herbName: "何首乌", dosage: "1000g（制）", role: "君药" },
            { herbName: "茯苓", dosage: "250g", role: "佐药" },
            { herbName: "牛膝", dosage: "250g", role: "佐药" },
            { herbName: "当归", dosage: "250g", role: "佐药" },
            { herbName: "枸杞子", dosage: "250g", role: "佐药" },
            { herbName: "菟丝子", dosage: "250g", role: "佐药" },
            { herbName: "补骨脂", dosage: "120g", role: "佐药" }
        ],
        functions: ["补益肝肾", "乌发壮骨"],
        indications: ["肝肾不足", "须发早白", "脱发", "齿牙动摇", "腰膝酸软", "梦遗滑精", "肾虚不育"],
        analysis: "本方为肝肾不足、精血亏虚之证而设。重用制何首乌补肝肾、益精血、乌须发，为君药；枸杞子、菟丝子、补骨脂补肾阳、益肾精，牛膝补肝肾、强筋骨，共为臣佐；当归养血活血，茯苓健脾渗湿以助运化，防滋腻碍胃。全方七药相合，精血同补、阴阳兼顾，以乌须发、固齿、壮骨为著效。",
        keyPoints: ["须发早白", "齿牙动摇", "腰膝酸软", "梦遗滑精"],
        relatedSyndromes: ["肾精不足证", "肾气不固证"],
        relatedConstitutions: ["阳虚质", "气虚质"],
        modifications: [
            { condition: "须发早白甚", modification: "加黑芝麻、桑椹以养血乌发" },
            { condition: "遗精滑泄", modification: "加金樱子、芡实以固精止遗" }
        ],
        contraindications: ["脾虚便溏者慎用", "湿滞中焦者不宜"]
    },
    {
        id: "formula_192",
        name: "人参蛤蚧散",
        pinyin: "Ren Shen Ge Jie San",
        source: "《卫生宝鉴》",
        category: "补益剂",
        subcategory: "补气剂",
        composition: [
            { herbName: "蛤蚧", dosage: "1对（酥炙）", role: "君药" },
            { herbName: "人参", dosage: "60g", role: "臣药" },
            { herbName: "茯苓", dosage: "60g", role: "佐药" },
            { herbName: "贝母", dosage: "60g", role: "佐药" },
            { herbName: "桑白皮", dosage: "90g", role: "佐药" },
            { herbName: "知母", dosage: "60g", role: "佐药" },
            { herbName: "杏仁", dosage: "90g", role: "佐药" },
            { herbName: "炙甘草", dosage: "150g", role: "使药" }
        ],
        functions: ["补肺益肾", "止咳定喘"],
        indications: ["肺肾气虚", "痰热内蕴之喘咳", "咳嗽气喘", "呼多吸少", "声音低怯", "痰稠色黄", "或咳吐脓血", "胸中烦热", "身体羸瘦", "或遍身浮肿", "脉浮虚"],
        analysis: "本方为肺肾两虚、痰热内蕴之久咳虚喘而设。蛤蚧补肺益肾、定喘止嗽，为君药；人参大补肺气以固根本，为臣药；茯苓健脾渗湿以绝生痰之源，贝母、杏仁润肺化痰止咳，桑白皮、知母泻肺清热，共为佐药；炙甘草补肺益气、调和诸药，为使药。全方补虚与清化并用，标本同治。",
        keyPoints: ["咳嗽气喘", "呼多吸少", "痰稠色黄", "身体羸瘦"],
        relatedSyndromes: ["肺肾阴虚证", "肾气不固证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "虚喘甚者", modification: "加胡桃肉、五味子以纳气归肾" },
            { condition: "咳吐脓血", modification: "加苇茎、薏苡仁以清肺排脓" }
        ],
        contraindications: ["外感喘咳者禁用", "痰热壅盛而无虚象者不宜"]
    },

    // —— 固涩剂（4首） ——
    {
        id: "formula_193",
        name: "九仙散",
        pinyin: "Jiu Xian San",
        source: "《医学正传》引《卫生宝鉴》",
        category: "固涩剂",
        subcategory: "敛肺止咳剂",
        composition: [
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "罂粟壳", dosage: "6g", role: "臣药" },
            { herbName: "五味子", dosage: "6g", role: "佐药" },
            { herbName: "乌梅", dosage: "6g", role: "佐药" },
            { herbName: "款冬花", dosage: "9g", role: "佐药" },
            { herbName: "桑白皮", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "9g", role: "佐药" },
            { herbName: "阿胶", dosage: "9g（烊化）", role: "佐药" },
            { herbName: "贝母", dosage: "6g", role: "佐药" }
        ],
        functions: ["敛肺止咳", "益气养阴"],
        indications: ["久咳肺虚", "咳嗽不已", "咳甚则气喘自汗", "痰少而黏", "或痰中带血", "脉虚数"],
        analysis: "本方为久咳不已、肺气耗散之证而设。重用罂粟壳敛肺止咳，为君药；五味子、乌梅助其敛肺，人参益气生津补肺，为臣药；阿胶养阴润肺，贝母、款冬花润肺止咳化痰，桑白皮泻肺平喘，桔梗宣肺载药上行，为佐药。诸药合用，敛中有宣、补中有泻，敛肺而不留邪。",
        keyPoints: ["久咳不已", "气喘自汗", "痰少而黏", "脉虚"],
        relatedSyndromes: ["肺气虚证", "肺阴虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "虚热明显", modification: "加地骨皮、知母以清虚热" },
            { condition: "自汗多", modification: "加煅牡蛎、浮小麦以敛汗固表" }
        ],
        contraindications: ["外感咳嗽及痰多者禁用（关门留寇）", "罂粟壳有成瘾性，不宜久服"]
    },
    {
        id: "formula_194",
        name: "桃花汤",
        pinyin: "Tao Hua Tang",
        source: "《伤寒论》",
        category: "固涩剂",
        subcategory: "涩肠止泻剂",
        composition: [
            { herbName: "赤石脂", dosage: "30g（一半入煎、一半冲服）", role: "君药" },
            { herbName: "干姜", dosage: "9g", role: "臣药" },
            { herbName: "粳米", dosage: "30g", role: "佐药" }
        ],
        functions: ["温中涩肠止痢"],
        indications: ["虚寒血痢", "下痢不止", "便脓血", "色暗不鲜", "腹痛喜温喜按", "小便不利", "舌淡苔白", "脉迟弱或微细"],
        analysis: "本方为脾肾阳虚、统摄无权之久痢滑脱而设。重用赤石脂涩肠固脱、止血止痢，为君药；干姜温中散寒、温运脾阳，为臣药；粳米养胃和中，助赤石脂、干姜厚肠胃，为佐药。三药合用，涩肠止泻与温中散寒并施，为温涩止痢之代表方。",
        keyPoints: ["下痢脓血", "腹痛喜温喜按", "舌淡苔白", "脉迟弱"],
        relatedSyndromes: ["虚寒证", "脾虚泄泻证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "脾肾阳虚甚、腹痛肢冷", modification: "加人参、附子以温阳益气" },
            { condition: "久痢滑脱不禁", modification: "加诃子、罂粟壳以增强涩肠固脱之力" }
        ],
        contraindications: ["热痢便脓血者禁用", "实邪未去者忌用（防留邪）"]
    },
    {
        id: "formula_195",
        name: "缩泉丸",
        pinyin: "Suo Quan Wan",
        source: "《魏氏家藏方》",
        category: "固涩剂",
        subcategory: "固精止遗剂",
        composition: [
            { herbName: "益智仁", dosage: "9g", role: "君药" },
            { herbName: "乌药", dosage: "9g", role: "臣药" },
            { herbName: "山药", dosage: "12g", role: "佐药" }
        ],
        functions: ["温肾祛寒", "缩尿止遗"],
        indications: ["膀胱虚寒证", "小便频数", "或遗尿不禁", "色清白", "舌淡苔白", "脉沉弱"],
        analysis: "本方为下元虚寒、膀胱失约之小便频数而设。益智仁温肾散寒、缩尿止遗，为君药；乌药温肾散寒、行气，助益智仁温暖下元，为臣药；山药健脾补肾、固涩精微，为佐药。三药合用，温而不燥，肾气得温、膀胱得约，尿频遗尿自止。",
        keyPoints: ["小便频数", "遗尿", "尿色清白", "舌淡脉沉弱"],
        relatedSyndromes: ["肾气不固证", "肾阳虚证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "肾阳虚甚、腰膝冷痛", modification: "加菟丝子、补骨脂以温补肾阳" },
            { condition: "夜遗尿频甚", modification: "加桑螵蛸、覆盆子以固涩缩尿" }
        ],
        contraindications: ["湿热下注之尿频涩痛者禁用"]
    },
    {
        id: "formula_196",
        name: "固经丸",
        pinyin: "Gu Jing Wan",
        source: "《医学入门》",
        category: "固涩剂",
        subcategory: "固崩止带剂",
        composition: [
            { herbName: "龟甲", dosage: "30g", role: "君药" },
            { herbName: "白芍", dosage: "30g", role: "臣药" },
            { herbName: "黄芩", dosage: "30g", role: "臣药" },
            { herbName: "椿根皮", dosage: "21g", role: "佐药" },
            { herbName: "黄柏", dosage: "9g", role: "佐药" },
            { herbName: "香附", dosage: "7.5g", role: "佐药" }
        ],
        functions: ["滋阴清热", "固经止血"],
        indications: ["阴虚血热之崩漏", "经水过期不止", "或下血量多", "色深红或紫黑稠黏", "手足心热", "腰膝酸软", "舌红苔少", "脉弦数"],
        analysis: "本方为阴虚血热、迫血妄行之崩漏而设。龟甲滋阴降火、益肾固冲任，为君药；白芍敛阴养血柔肝，黄芩、黄柏清热泻火坚阴，共为臣药；椿根皮固经止血，香附理气调经（气顺则血调），为佐药。全方滋阴清热与固经止血并施，热去血安而崩漏自止。",
        keyPoints: ["经水过期不止", "下血色深红", "手足心热", "舌红少苔"],
        relatedSyndromes: ["冲任不固崩漏证", "肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "出血量多", modification: "加棕榈炭、侧柏叶以收涩止血" },
            { condition: "阴虚甚", modification: "加生地黄、麦冬以滋阴凉血" }
        ],
        contraindications: ["气虚不摄之崩漏禁用", "寒凝血瘀之崩漏禁用"]
    },

    // —— 安神剂（2首） ——
    {
        id: "formula_197",
        name: "磁朱丸",
        pinyin: "Ci Zhu Wan",
        source: "《备急千金要方》",
        category: "安神剂",
        subcategory: "重镇安神剂",
        composition: [
            { herbName: "磁石", dosage: "60g（煅）", role: "君药" },
            { herbName: "朱砂", dosage: "30g", role: "臣药" },
            { herbName: "神曲", dosage: "120g", role: "佐药" },
        ],
        functions: ["重镇安神", "潜阳明目"],
        indications: ["心肾不交之失眠心悸", "耳鸣耳聋", "视物昏花", "癫痫"],
        analysis: "本方为心肾不交、浮阳上扰之证而设。磁石入肾，重镇潜阳、益阴明目，使肾水上济于心，为君药；朱砂入心，重镇安神、清心降火，使心火下通于肾，为臣药；二药相配，交通心肾、水火既济。神曲健脾胃、助运化，防金石药碍胃，且利于药力运化，为佐药。诸药合用则心悸失眠、耳鸣目昏诸症自安。",
        keyPoints: ["心悸失眠", "耳鸣耳聋", "视物昏花"],
        relatedSyndromes: ["心火亢盛证", "肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴血不足", modification: "配伍熟地黄、当归等滋养阴血之品同用" },
            { condition: "癫痫抽搐者", modification: "加钩藤、天麻、全蝎以息风止痉" }
        ],
        contraindications: ["朱砂有毒、汞剂不可久服，肝肾功能不全者禁用", "脾胃虚弱者慎用"]
    },
    {
        id: "formula_198",
        name: "珍珠母丸",
        pinyin: "Zhen Zhu Mu Wan",
        source: "《普济本事方》",
        category: "安神剂",
        subcategory: "补养安神剂",
        composition: [
            { herbName: "珍珠母", dosage: "22.5g", role: "君药" },
            { herbName: "当归", dosage: "45g", role: "臣药" },
            { herbName: "熟地黄", dosage: "45g", role: "臣药" },
            { herbName: "人参", dosage: "30g", role: "佐药" },
            { herbName: "酸枣仁", dosage: "30g", role: "佐药" },
            { herbName: "柏子仁", dosage: "30g", role: "佐药" },
            { herbName: "水牛角", dosage: "15g", role: "佐药" },
            { herbName: "茯苓", dosage: "15g", role: "佐药" },
            { herbName: "沉香", dosage: "15g", role: "佐药" },
            { herbName: "龙齿", dosage: "15g", role: "佐药" },
            { herbName: "朱砂", dosage: "15g（研细水飞，少许为衣）", role: "佐药" }
        ],
        functions: ["滋阴养血", "镇心安神"],
        indications: ["阴血不足", "肝阳偏亢", "神志不宁", "入夜少寐", "时而惊悸", "头目眩晕", "脉细弦"],
        analysis: "本方为阴血不足、肝阳偏亢之神志不宁而设。珍珠母、龙齿平肝潜阳、镇惊安神，为君药；当归、熟地黄补血养阴，人参、茯苓益气安神，酸枣仁、柏子仁养心安神，共为臣佐；水牛角粉清心定惊，沉香摄纳浮阳，朱砂为衣重镇安神。全方以滋养阴血治本，镇心平肝治标，养心与镇心并行。",
        keyPoints: ["少寐惊悸", "头目眩晕", "脉细弦"],
        relatedSyndromes: ["心阴虚证", "肝阳上亢证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "肝阳上亢眩晕甚", modification: "加天麻、钩藤以平肝息风" },
            { condition: "心悸甚", modification: "加龙眼肉、炙甘草以养心定悸" }
        ],
        contraindications: ["朱砂有毒不可久服", "痰火扰心之失眠不宜"]
    },

    // —— 开窍剂（2首） ——
    {
        id: "formula_199",
        name: "至宝丹",
        pinyin: "Zhi Bao Dan",
        source: "《灵苑方》引《指南方》（通行于《太平惠民和剂局方》）",
        category: "开窍剂",
        subcategory: "凉开剂",
        composition: [
            { herbName: "水牛角", dosage: "30g", role: "君药" },
            { herbName: "麝香", dosage: "0.3g", role: "君药" },
            { herbName: "牛黄", dosage: "0.3g", role: "君药" },
            { herbName: "安息香", dosage: "0.3g", role: "臣药" },
            { herbName: "玳瑁", dosage: "30g", role: "臣药" },
            { herbName: "冰片", dosage: "0.3g", role: "臣药" },
            { herbName: "朱砂", dosage: "30g", role: "佐药" },
            { herbName: "雄黄", dosage: "30g", role: "佐药" },
            { herbName: "琥珀", dosage: "30g", role: "佐药" },
            { herbName: "金银箔", dosage: "各50片", role: "佐药" },
        ],
        functions: ["化浊开窍", "清热解毒"],
        indications: ["痰热内扰心包", "神昏谵语", "身热烦躁", "痰盛气粗", "舌绛苔黄垢腻", "脉滑数；亦治中风、中暑、小儿惊厥属于痰热内闭者"],
        analysis: "本方为痰热内闭心包之证而设，与安宫牛黄丸、紫雪合称凉开三宝。水牛角、牛黄、玳瑁清热凉血解毒，麝香、安息香、冰片芳香开窍、辟秽化浊，两组相配为君臣，突出化浊开窍之力；朱砂、琥珀、金银箔重镇安神，雄黄祛痰解毒，共为佐药。本方长于化浊辟秽开窍，清热之力不及安宫牛黄丸，息风之效逊于紫雪。",
        keyPoints: ["神昏谵语", "痰盛气粗", "舌绛苔黄垢腻"],
        relatedSyndromes: ["痰蒙清窍证", "痰热扰心证"],
        relatedConstitutions: ["痰湿质", "湿热质"],
        modifications: [
            { condition: "痰热壅盛", modification: "配竹沥、天竺黄以涤痰开窍" },
            { condition: "热盛动风抽搐者", modification: "配羚羊角、钩藤以凉肝息风" }
        ],
        contraindications: ["寒闭与脱证禁用", "孕妇慎用", "中病即止，不可久服"]
    },
    {
        id: "formula_200",
        name: "紫金锭",
        pinyin: "Zi Jin Ding",
        source: "《百一选方》（王璆）",
        category: "开窍剂",
        subcategory: "温开剂",
        composition: [
            { herbName: "山慈菇", dosage: "90g", role: "君药" },
            { herbName: "五倍子", dosage: "90g", role: "臣药" },
            { herbName: "千金子霜", dosage: "30g", role: "佐药" },
            { herbName: "红大戟", dosage: "45g", role: "佐药" },
            { herbName: "麝香", dosage: "9g", role: "佐药" },
            { herbName: "雄黄", dosage: "30g", role: "佐药" },
            { herbName: "朱砂", dosage: "30g", role: "佐药" },
        ],
        functions: ["化痰开窍", "辟秽解毒", "消肿止痛"],
        indications: ["暑令时疫", "脘腹胀闷疼痛", "恶心呕吐", "泄泻", "痢疾", "或小儿痰厥惊风", "咽喉肿痛；外敷治疔疮疖肿", "痄腮", "乳痈", "无名肿毒"],
        analysis: "本方为暑令感秽浊之气或疫毒之证而设。山慈菇清热解毒、化痰散结消肿，为君药；麝香芳香开窍、辟秽化浊、行气止痛，为臣药；红大戟攻毒消肿、泻下逐秽，千金子霜导滞通肠、逐痰利水，五倍子涩肠解毒，雄黄、朱砂辟秽解毒、镇心安神，共为佐药。内服辟秽化浊开窍，外用消肿散结止痛。",
        keyPoints: ["脘腹胀闷疼痛", "恶心呕吐泄泻", "疔疮疖肿"],
        relatedSyndromes: ["湿热蕴结证", "痰蒙清窍证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "霍乱吐泻腹痛", modification: "以姜汤送服以温中止呕" },
            { condition: "痈疽疮疡初起", modification: "以醋调敷患处以消肿止痛" }
        ],
        contraindications: ["孕妇忌服", "千金子霜、大戟、雄黄均有毒性，不可过量或久服", "气血虚弱者慎用"]
    },

    // —— 理气剂（5首） ——
    {
        id: "formula_201",
        name: "四磨汤",
        pinyin: "Si Mo Tang",
        source: "《济生方》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "槟榔", dosage: "9g", role: "君药" },
            { herbName: "沉香", dosage: "6g", role: "臣药" },
            { herbName: "乌药", dosage: "6g", role: "臣药" },
            { herbName: "人参", dosage: "3g", role: "佐药" }
        ],
        functions: ["行气降逆", "宽胸散结"],
        indications: ["肝气郁结之胸膈烦闷", "上气喘急", "心下痞满", "不思饮食", "苔白脉弦"],
        analysis: "本方为肝气郁结、气逆不降之证而设。乌药行气疏肝解郁，为君药；沉香降气平喘，槟榔行气化滞破结，共为臣佐，三药行气降逆之力甚捷；人参益气扶正，使郁开而气不耗伤，为佐药。四药磨汁服取其味厚气全，功专力速，行气而不伤正。",
        keyPoints: ["胸膈烦闷", "上气喘急", "心下痞满"],
        relatedSyndromes: ["肝气郁结证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "体壮气实而气结甚者", modification: "人参可改用党参或减量（六磨汤加枳实、木香）" },
            { condition: "兼大便秘结", modification: "加枳实、大黄以通腑导滞" }
        ],
        contraindications: ["气虚体弱者慎用（本方行气破滞力强）"]
    },
    {
        id: "formula_202",
        name: "枳实薤白桂枝汤",
        pinyin: "Zhi Shi Xie Bai Gui Zhi Tang",
        source: "《金匮要略》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "枳实", dosage: "12g", role: "君药" },
            { herbName: "薤白", dosage: "9g", role: "君药" },
            { herbName: "厚朴", dosage: "12g", role: "臣药" },
            { herbName: "瓜蒌", dosage: "12g", role: "臣药" },
            { herbName: "桂枝", dosage: "3g", role: "佐药" }
        ],
        functions: ["通阳散结", "祛痰下气"],
        indications: ["胸痹", "气从胁下上逆抢心", "胸满腹胀", "或胸痛彻背", "苔白腻", "脉沉弦或紧"],
        analysis: "本方为胸痹气结在胸、水气胁下逆而抢心之实证而设。枳实下气破结、消痞除满，厚朴燥湿行气、宽胸除满，共开痞塞之气；薤白、瓜蒌通阳散结、宽胸涤痰；桂枝通阳散寒、降逆平冲。五药相合，使胸阳振、痰浊消、气逆降，则胸痹诸症自除。",
        keyPoints: ["胸满腹胀", "气从胁下上逆抢心", "苔白腻"],
        relatedSyndromes: ["心脉痹阻证", "痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒甚胸痛彻背", modification: "加干姜、附子以温阳散寒" },
            { condition: "痰浊盛", modification: "加半夏、陈皮以燥湿化痰" }
        ],
        contraindications: ["胸痹属中气虚者慎用（本方破气之力较峻）"]
    },
    {
        id: "formula_203",
        name: "旋覆代赭汤",
        pinyin: "Xuan Fu Dai Zhe Tang",
        source: "《伤寒论》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "旋覆花", dosage: "9g（包煎）", role: "君药" },
            { herbName: "代赭石", dosage: "6g（先煎）", role: "臣药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "15g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "炙甘草", dosage: "9g", role: "使药" },
            { herbName: "大枣", dosage: "4枚", role: "佐药" }
        ],
        functions: ["降逆化痰", "益气和胃"],
        indications: ["胃气虚弱", "痰浊内阻", "心下痞硬", "噫气频作（嗳气）不除", "或反胃呕逆", "吐涎沫", "舌淡苔白滑", "脉弦而虚"],
        analysis: "本方为胃气虚弱、痰浊内阻之噫气痞硬而设。旋覆花下气消痰、降逆除噫，为君药；代赭石质重沉降、平肝降逆，助旋覆花镇逆止噫，为臣药；生姜、半夏和胃降逆、化痰散结，人参、大枣、炙甘草益气补虚、和中护胃，共为佐使。全方降逆与补虚并行，使痰浊降、胃气复，痞硬噫气自除。",
        keyPoints: ["心下痞硬", "噫气频作不除", "舌淡苔白滑", "脉弦虚"],
        relatedSyndromes: ["肝胃不和证", "痰湿内阻证"],
        relatedConstitutions: ["气郁质", "痰湿质"],
        modifications: [
            { condition: "胃气不虚", modification: "去人参、大枣，加重代赭石以增强降逆之力" },
            { condition: "痰多者", modification: "加茯苓、陈皮以化痰和胃" }
        ],
        contraindications: ["胃热呕吐者慎用（方中姜、夏偏温）"]
    },
    {
        id: "formula_204",
        name: "橘皮竹茹汤",
        pinyin: "Ju Pi Zhu Ru Tang",
        source: "《金匮要略》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "橘皮", dosage: "15g", role: "君药" },
            { herbName: "竹茹", dosage: "15g", role: "臣药" },
            { herbName: "人参", dosage: "3g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "9g", role: "使药" },
            { herbName: "大枣", dosage: "5枚", role: "佐药" }
        ],
        functions: ["降逆止呃", "益气清热"],
        indications: ["胃虚有热之呃逆", "呃逆或干呕", "虚烦少气", "口干", "舌红嫩", "脉虚数"],
        analysis: "本方为胃虚有热、气逆不降之呃逆而设。橘皮行气和胃以止呃，竹茹清热安中而止呕，二者相配降逆与清热并行，共为君臣；人参益气补虚，与橘皮合用行中有补，生姜和胃止呕，为佐药；甘草、大枣益气和胃、调和诸药，为佐使。全方补而不滞、清而不寒，为胃虚有热呃逆之良方。",
        keyPoints: ["呃逆干呕", "虚烦少气", "口干", "舌红嫩脉虚数"],
        relatedSyndromes: ["胃阴虚证", "肝胃不和证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "胃热明显、口苦烦渴", modification: "加黄连、麦冬以清胃生津" },
            { condition: "呃逆频频", modification: "加丁香、柿蒂以增降逆止呃之力（虚寒者宜）" }
        ],
        contraindications: ["实热或虚寒性呃逆非本方所宜"]
    },
    {
        id: "formula_205",
        name: "丁香柿蒂汤",
        pinyin: "Ding Xiang Shi Di Tang",
        source: "《症因脉治》",
        category: "理气剂",
        subcategory: "降气剂",
        composition: [
            { herbName: "丁香", dosage: "6g", role: "君药" },
            { herbName: "柿蒂", dosage: "9g", role: "君药" },
            { herbName: "人参", dosage: "3g", role: "佐药" },
            { herbName: "生姜", dosage: "6g", role: "佐药" }
        ],
        functions: ["降逆止呃", "温中益气"],
        indications: ["胃气虚寒之呃逆", "呃逆不已", "胸脘痞闷", "舌淡苔白", "脉沉迟"],
        analysis: "本方为胃气虚寒、气逆不降之呃逆而设。丁香温中散寒、降逆止呃，柿蒂降逆止呃，二味相须为用为君药，为止呃之要药对；人参益气补虚、温中助阳，为佐药；生姜温胃降逆，助丁香、柿蒂止呃之力，为佐使。四药合用，温中与降逆并行，胃气得复，呃逆自止。",
        keyPoints: ["呃逆不已", "胸脘痞闷", "舌淡苔白", "脉沉迟"],
        relatedSyndromes: ["虚寒证", "寒凝胃脘证"],
        relatedConstitutions: ["阳虚质"],
        modifications: [
            { condition: "寒重腹痛", modification: "加高良姜、香附以温中行气" },
            { condition: "兼气滞痰阻", modification: "加半夏、陈皮以化痰降逆" }
        ],
        contraindications: ["胃热呃逆者禁用"]
    },

    // —— 理血剂（4首） ——
    {
        id: "formula_206",
        name: "通窍活血汤",
        pinyin: "Tong Qiao Huo Xue Tang",
        source: "《医林改错》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "赤芍", dosage: "3g", role: "臣药" },
            { herbName: "川芎", dosage: "3g", role: "臣药" },
            { herbName: "桃仁", dosage: "9g", role: "臣药" },
            { herbName: "红花", dosage: "9g", role: "臣药" },
            { herbName: "麝香", dosage: "0.15g（绢包）", role: "君药" },
            { herbName: "老葱", dosage: "3根", role: "佐药" },
            { herbName: "鲜姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "7枚", role: "佐药" },
            { herbName: "黄酒", dosage: "250g", role: "佐药" }
        ],
        functions: ["活血通窍", "行气止痛"],
        indications: ["瘀阻头面之头痛昏晕", "或耳聋年久", "脱发", "面色青紫", "或酒渣鼻", "白癜风", "妇女干血痨", "小儿疳积见肌肉消瘦、腹大青筋、潮热等"],
        analysis: "本方为王清任以逐瘀法治疗瘀阻头面之方。赤芍、川芎、桃仁、红花活血化瘀，行血分之瘀滞；麝香辛香走窜，开窍通闭、引药上行头面，为君药；老葱、鲜姜辛散升腾，通阳开窍，黄酒温通血脉、助药力上达巅顶；大枣缓和芳香药之辛散。全方活血与通窍并用，使瘀去窍通，诸症得愈。",
        keyPoints: ["头痛昏晕", "面色青紫", "耳聋年久", "脱发"],
        relatedSyndromes: ["气滞血瘀证", "心脉痹阻证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "头痛剧烈", modification: "加全蝎、蜈蚣以通络止痛" },
            { condition: "瘀阻目疾", modification: "加菊花、决明子以清肝明目" }
        ],
        contraindications: ["孕妇禁用", "麝香稀缺可代以人工麝香或白芷、冰片少量"]
    },
    {
        id: "formula_207",
        name: "七厘散",
        pinyin: "Qi Li San",
        source: "《同寿录》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "血竭", dosage: "30g", role: "君药" },
            { herbName: "麝香", dosage: "0.36g", role: "佐药" },
            { herbName: "冰片", dosage: "0.36g", role: "佐药" },
            { herbName: "乳香", dosage: "4.5g", role: "臣药" },
            { herbName: "没药", dosage: "4.5g", role: "臣药" },
            { herbName: "红花", dosage: "4.5g", role: "臣药" },
            { herbName: "朱砂", dosage: "3.6g", role: "佐药" },
            { herbName: "儿茶", dosage: "7.2g", role: "佐药" },
        ],
        functions: ["散瘀消肿", "定痛止血"],
        indications: ["跌打损伤", "筋断骨折之瘀血肿痛", "或刀伤出血", "无名肿毒", "烧烫伤（外用）"],
        analysis: "本方为跌打损伤、瘀滞肿痛之常用方。血竭散瘀消肿、定痛止血，为君药；红花、乳香、没药活血行气、消肿止痛，为臣药；麝香、冰片辛香走窜、行气通络、散瘀止痛，儿茶收敛止血生肌，朱砂镇心安神，共为佐药。内服外用皆可，散瘀与止血并行，消肿与生肌兼顾。",
        keyPoints: ["跌打损伤", "瘀血肿痛", "刀伤出血"],
        relatedSyndromes: ["气滞血瘀证"],
        relatedConstitutions: ["血瘀质"],
        modifications: [
            { condition: "筋断骨折", modification: "配伍续断、自然铜等接骨续筋之品" },
            { condition: "瘀肿疼痛剧烈者", modification: "可加乳香、延胡索以增活血止痛之力" }
        ],
        contraindications: ["孕妇禁用", "朱砂为汞剂不宜久服"]
    },
    {
        id: "formula_208",
        name: "胶艾汤",
        pinyin: "Jiao Ai Tang",
        source: "《金匮要略》（一名芎归胶艾汤）",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "阿胶", dosage: "9g（烊化）", role: "君药" },
            { herbName: "艾叶", dosage: "9g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "12g", role: "臣药" },
            { herbName: "干地黄", dosage: "18g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["养血止血", "调经安胎"],
        indications: ["冲任虚损", "阴血不能内守之崩漏", "月经过多", "淋漓不止", "产后或半产后下血不绝", "或妊娠下血", "腹中疼痛", "舌淡苔白", "脉沉细"],
        analysis: "本方为冲任虚损、阴血不能内守之崩漏下血而设。阿胶补血止血、艾叶温经止血，二者相配止血而有温养之功，共为君药；当归、白芍、干地黄、川芎（四物汤）养血和血、调补冲任，使补血而不滞瘀，为臣药；甘草调和诸药，为使药。全方止血之中寓以补血，温而不燥，为治冲任虚损下血之要方。",
        keyPoints: ["崩漏下血", "月经过多", "妊娠下血", "腹中疼痛"],
        relatedSyndromes: ["冲任不固崩漏证", "气血两虚证", "脾不统血证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "气虚下陷", modification: "加党参、黄芪以益气摄血" },
            { condition: "腹痛明显", modification: "加香附、延胡索以理气止痛" }
        ],
        contraindications: ["血热妄行之崩漏禁用", "瘀血未尽者慎用"]
    },
    {
        id: "formula_209",
        name: "丹参饮",
        pinyin: "Dan Shen Yin",
        source: "《时方歌括》",
        category: "理血剂",
        subcategory: "活血祛瘀剂",
        composition: [
            { herbName: "丹参", dosage: "30g", role: "君药" },
            { herbName: "檀香", dosage: "3g", role: "臣药" },
            { herbName: "砂仁", dosage: "3g", role: "佐药" }
        ],
        functions: ["活血祛瘀", "行气止痛"],
        indications: ["血瘀气滞之心胃诸痛", "胸闷脘痞", "痛有定处", "舌质暗红或有瘀斑", "脉弦涩"],
        analysis: "本方为血瘀气滞之心胃疼痛而设。重用丹参活血祛瘀、通利血脉，为君药；檀香、砂仁行气宽中、温胃止痛，气行则血行，共为臣佐。药仅三味，药性平和而气血并治，为化瘀行气止痛之轻剂，冠心病心绞痛属气滞血瘀者常用之。",
        keyPoints: ["心胃疼痛", "痛有定处", "舌暗有瘀斑"],
        relatedSyndromes: ["气滞血瘀证", "心脉痹阻证"],
        relatedConstitutions: ["血瘀质", "气郁质"],
        modifications: [
            { condition: "瘀痛甚", modification: "加川芎、郁金以增强活血止痛之力" },
            { condition: "寒痛", modification: "加桂枝、荜茇以温通止痛" }
        ],
        contraindications: ["孕妇慎用", "血虚无瘀者不宜"]
    },

    // —— 治风剂（3首） ——
    {
        id: "formula_210",
        name: "小活络丹",
        pinyin: "Xiao Huo Luo Dan",
        source: "《太平惠民和剂局方》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "川乌", dosage: "18g（炮）", role: "君药" },
            { herbName: "草乌", dosage: "18g（炮）", role: "君药" },
            { herbName: "地龙", dosage: "18g", role: "臣药" },
            { herbName: "天南星", dosage: "18g（炮）", role: "臣药" },
            { herbName: "乳香", dosage: "6g", role: "佐药" },
            { herbName: "没药", dosage: "6g", role: "佐药" }
        ],
        functions: ["祛风除湿", "化痰通络", "活血止痛"],
        indications: ["风寒湿痹", "肢体筋脉疼痛麻木", "关节屈伸不利", "疼痛游走不定", "或中风后手足不仁", "日久不愈", "经络中有湿痰死血", "腿臂间一二点作痛"],
        analysis: "本方为风寒湿邪与痰瘀交阻经络之痹证而设。川乌、草乌大辛大热，祛风除湿、温经散寒、通络止痛，为君药；天南星祛风除湿化痰，地龙通经活络，为臣药；乳香、没药行气活血、化瘀止痛，为佐药。全方风寒湿与痰瘀同治，使风寒湿邪与痰浊瘀血俱去，经络通而痹痛止。",
        keyPoints: ["肢体疼痛麻木", "关节屈伸不利", "腿臂局部作痛"],
        relatedSyndromes: ["风寒湿痹证", "气滞血瘀证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "痹痛以寒为主", modification: "重用川乌、草乌，加桂枝以温经散寒" },
            { condition: "血瘀明显", modification: "加当归、鸡血藤以养血活血" }
        ],
        contraindications: ["孕妇禁用（川乌、草乌有毒）", "阴虚有热者及血虚痹痛者慎用", "不宜过量久服"]
    },
    {
        id: "formula_211",
        name: "玉真散",
        pinyin: "Yu Zhen San",
        source: "《外科正宗》",
        category: "治风剂",
        subcategory: "疏散外风剂",
        composition: [
            { herbName: "白附子", dosage: "6g（生用）", role: "君药" },
            { herbName: "天南星", dosage: "6g（生用）", role: "君药" },
            { herbName: "防风", dosage: "6g", role: "臣药" },
            { herbName: "白芷", dosage: "6g", role: "佐药" },
            { herbName: "天麻", dosage: "6g", role: "佐药" },
            { herbName: "羌活", dosage: "6g", role: "佐药" }
        ],
        functions: ["祛风化痰", "定搐止痉"],
        indications: ["破伤风", "牙关紧急", "身体强直", "角弓反张", "甚则咬牙缩舌", "苦笑面容", "脉弦紧"],
        analysis: "本方为破伤风（风毒入络）而设。白附子、天南星祛风化痰、定搐解痉，为君药；羌活、防风、白芷疏散经络中风邪，导邪外出，为臣佐；天麻息风止痉，助君药定搐之力，为佐药。全方以祛风止痉为主，化痰与发散并行，使风散搐定。亦可用于破伤风之预防及风毒肿痛外用。",
        keyPoints: ["牙关紧急", "角弓反张", "苦笑面容"],
        relatedSyndromes: ["急惊风痰热证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "抽搐甚", modification: "加全蝎、蜈蚣以增强息风止痉之力" },
            { condition: "兼发热", modification: "加金银花、连翘以清热解毒" }
        ],
        contraindications: ["孕妇忌用（生南星、生白附子有毒）", "血虚发痉者禁用"]
    },
    {
        id: "formula_212",
        name: "阿胶鸡子黄汤",
        pinyin: "E Jiao Zi Huang Tang",
        source: "《通俗伤寒论》",
        category: "治风剂",
        subcategory: "平息内风剂",
        composition: [
            { herbName: "阿胶", dosage: "9g（烊化）", role: "君药" },
            { herbName: "鸡子黄", dosage: "2枚（冲入）", role: "君药" },
            { herbName: "生地黄", dosage: "15g", role: "臣药" },
            { herbName: "生白芍", dosage: "12g", role: "臣药" },
            { herbName: "生牡蛎", dosage: "15g（先煎）", role: "佐药" },
            { herbName: "石决明", dosage: "15g（先煎）", role: "佐药" },
            { herbName: "钩藤", dosage: "9g", role: "佐药" },
            { herbName: "茯神木", dosage: "12g", role: "佐药" },
            { herbName: "络石藤", dosage: "9g", role: "佐药" },
            { herbName: "生甘草", dosage: "2g", role: "使药" }
        ],
        functions: ["滋阴养血", "柔肝息风"],
        indications: ["温病后期", "阴血亏虚之虚风内动", "筋脉拘急", "手足蠕动", "头晕目眩", "舌绛苔少", "脉细数"],
        analysis: "本方为温病后期邪去正伤、阴血大亏之虚风内动而设。阿胶、鸡子黄为血肉有情之品，滋阴养血以息风，为君药；生地黄、白芍滋阴养血、柔肝缓急，为臣药；石决明、生牡蛎潜阳镇逆，钩藤、茯神木平肝息风、宁心安神，络石藤通络舒筋，共为佐药；甘草调和诸药。全方滋阴养血以固本，平肝潜阳以息风，与大定风珠相比，兼有清泄余热、通络之用。",
        keyPoints: ["手足蠕动", "筋脉拘急", "舌绛苔少", "脉细数"],
        relatedSyndromes: ["虚风内动证", "肝肾阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "阴伤甚、五心烦热", modification: "加龟甲、麦冬以滋阴清热" },
            { condition: "抽搐明显", modification: "加羚羊角以凉肝息风" }
        ],
        contraindications: ["实热动风者禁用"]
    },

    // —— 治燥剂（2首） ——
    {
        id: "formula_213",
        name: "玉液汤",
        pinyin: "Yu Ye Tang",
        source: "《医学衷中参西录》",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "生山药", dosage: "30g", role: "君药" },
            { herbName: "生黄芪", dosage: "15g", role: "君药" },
            { herbName: "知母", dosage: "18g", role: "臣药" },
            { herbName: "天花粉", dosage: "9g", role: "臣药" },
            { herbName: "鸡内金", dosage: "6g", role: "佐药" },
            { herbName: "葛根", dosage: "4.5g", role: "佐药" },
            { herbName: "五味子", dosage: "9g", role: "佐药" }
        ],
        functions: ["益气滋阴", "固肾止渴"],
        indications: ["消渴气阴两虚证", "口渴引饮", "饮水不解", "小便频数量多", "或小便浑浊", "困倦气短", "脉虚细无力"],
        analysis: "本方为消渴日久、气阴两虚之证而设。生山药、黄芪补脾固肾、益气升阳，使脾气健运、津液得升，为君药；知母、天花粉滋阴清热、生津止渴，为臣药；葛根升发津液，鸡内金助运化，五味子固肾生津、敛阴缩尿，共为佐药。全方益气与滋阴并举，为治疗消渴气阴两虚之常用方。",
        keyPoints: ["口渴引饮", "小便频数量多", "困倦气短", "脉虚细"],
        relatedSyndromes: ["肾阴虚证", "气虚证"],
        relatedConstitutions: ["阴虚质", "气虚质"],
        modifications: [
            { condition: "烦热甚", modification: "加生石膏以清肺胃之热" },
            { condition: "遗尿频多", modification: "加山茱萸、桑螵蛸以固肾缩尿" }
        ],
        contraindications: ["实热消渴者不宜单用"]
    },
    {
        id: "formula_214",
        name: "琼玉膏",
        pinyin: "Qiong Yu Gao",
        source: "《洪氏集验方》（引自申铁瓮方）",
        category: "治燥剂",
        subcategory: "滋润内燥剂",
        composition: [
            { herbName: "生地黄", dosage: "4000g（取汁）", role: "君药" },
            { herbName: "人参", dosage: "750g", role: "臣药" },
            { herbName: "茯苓", dosage: "1500g", role: "佐药" },
            { herbName: "白蜜", dosage: "2000g", role: "佐使" },
        ],
        functions: ["滋阴润肺", "益气补脾"],
        indications: ["肺肾阴亏之肺痨干咳", "咽燥咯血", "肌肉消瘦", "气短乏力", "舌红少苔", "脉细数"],
        analysis: "本方为肺肾阴亏、虚劳干咳而设。生地黄滋阴壮水、养肺肾之阴，为君药；人参益气补脾生津，使气旺则津生，为臣药；白蜜补中润肺，茯苓健脾益气以杜生痰之源，为佐使。四药合用，肺肾同滋、脾肺兼顾，填精补髓、开胃壮神，为虚劳咳嗽之缓补剂。",
        keyPoints: ["干咳咯血", "咽燥消瘦", "气短乏力", "舌红少苔"],
        relatedSyndromes: ["肺肾阴虚证", "肺阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "咯血不止", modification: "加白及、藕节以敛肺止血" },
            { condition: "气虚甚者", modification: "加人参以增益气之功" }
        ],
        contraindications: ["脾虚便溏者慎用（地黄、白蜜滋腻）", "外感咳嗽者禁用"]
    },

    // —— 祛湿剂（3首） ——
    {
        id: "formula_215",
        name: "连朴饮",
        pinyin: "Lian Pu Yin",
        source: "《霍乱论》",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "黄连", dosage: "3g（姜汁炒）", role: "君药" },
            { herbName: "制厚朴", dosage: "6g", role: "臣药" },
            { herbName: "焦栀子", dosage: "9g", role: "臣药" },
            { herbName: "石菖蒲", dosage: "3g", role: "佐药" },
            { herbName: "制半夏", dosage: "3g", role: "佐药" },
            { herbName: "香豉", dosage: "9g", role: "佐药" },
            { herbName: "芦根", dosage: "60g", role: "佐药" }
        ],
        functions: ["清热化湿", "理气和中"],
        indications: ["湿热霍乱", "上吐下泻", "胸脘痞闷", "心烦躁扰", "小便短赤", "舌苔黄腻", "脉濡数"],
        analysis: "本方为湿热蕴伏、清浊相干之霍乱吐泻而设。黄连清热燥湿、厚朴理气化湿辟秽，共为君药；栀子、香豉清宣郁热除烦，为臣药；半夏、石菖蒲燥湿化浊、降逆和胃，芦根清热生津、止呕除烦，共为佐药。全方湿热同治、升降并调，使吐泻止而烦渴除。",
        keyPoints: ["上吐下泻", "胸脘痞闷", "舌苔黄腻"],
        relatedSyndromes: ["脾胃湿热证", "湿热蕴结证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "吐泻频繁", modification: "加藿香、佩兰以芳香化浊辟秽" },
            { condition: "小便短赤甚", modification: "加滑石、甘草梢以清热利尿" }
        ],
        contraindications: ["寒湿霍乱（吐泻清水、肢冷舌淡）禁用"]
    },
    {
        id: "formula_216",
        name: "当归拈痛汤",
        pinyin: "Dang Gui Nian Tong Tang",
        source: "《医学启源》（又名拈痛汤）",
        category: "祛湿剂",
        subcategory: "清热祛湿剂",
        composition: [
            { herbName: "羌活", dosage: "15g", role: "君药" },
            { herbName: "防风", dosage: "9g", role: "臣药" },
            { herbName: "升麻", dosage: "9g", role: "臣药" },
            { herbName: "葛根", dosage: "9g", role: "臣药" },
            { herbName: "茵陈", dosage: "15g", role: "佐药" },
            { herbName: "苍术", dosage: "9g", role: "佐药" },
            { herbName: "白术", dosage: "4.5g", role: "佐药" },
            { herbName: "苦参", dosage: "6g", role: "佐药" },
            { herbName: "黄芩", dosage: "3g", role: "佐药" },
            { herbName: "知母", dosage: "9g", role: "佐药" },
            { herbName: "猪苓", dosage: "9g", role: "佐药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "15g", role: "使药" }
        ],
        functions: ["利湿清热", "疏风止痛"],
        indications: ["湿热相搏", "外受风邪之周身肢节肿痛", "肩背沉重", "或脚气肿痛", "或一身尽痛", "或遍身疮疡", "苔黄腻", "脉滑数"],
        analysis: "本方为湿热痹阻、外感风邪之肢节疼痛而设。羌活祛风胜湿、通利关节而止上半身之痛，为君药；防风、升麻、葛根助羌活疏风胜湿，苍术、白术健脾燥湿，苦参、黄芩、知母、茵陈清利湿热，猪苓、泽泻渗湿泄热，使湿热从小便而去，共为臣佐；当归养血活血，治风先治血，人参、甘草益气扶正，为佐使。全方清利湿热与疏风止痛并行，邪正兼顾。",
        keyPoints: ["周身肢节肿痛", "肩背沉重", "苔黄腻"],
        relatedSyndromes: ["风湿热痹证", "湿热蕴结证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "痛处游走不定", modification: "重用羌活、防风并加威灵仙以祛风止痛" },
            { condition: "下肢肿痛甚", modification: "加木瓜、防己以利湿消肿" }
        ],
        contraindications: ["寒湿痹痛者禁用"]
    },
    {
        id: "formula_217",
        name: "鸡鸣散",
        pinyin: "Ji Ming San",
        source: "《证治准绳》",
        category: "祛湿剂",
        subcategory: "温化寒湿剂",
        composition: [
            { herbName: "槟榔", dosage: "12g", role: "君药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "木瓜", dosage: "9g", role: "臣药" },
            { herbName: "吴茱萸", dosage: "3g", role: "佐药" },
            { herbName: "桔梗", dosage: "4.5g", role: "佐药" },
            { herbName: "生姜", dosage: "5g", role: "佐药" },
            { herbName: "紫苏茎叶", dosage: "9g", role: "佐药" }
        ],
        functions: ["行气降浊", "宣化寒湿"],
        indications: ["湿脚气", "足胫肿重无力", "麻木冷痛", "或挛急上冲", "胸闷泛恶", "舌苔白腻", "脉沉细；亦治风湿流注之脚气腿足肿痛"],
        analysis: "本方为寒湿壅滞、流注于脚之湿脚气而设。槟榔质重下达，行气逐湿，为君药；木瓜祛湿舒筋，陈皮理气健脾，共为臣药；紫苏叶、桔梗宣通气机，吴茱萸、生姜温化寒湿、降逆止呕，共为佐药。诸药以冷服，五更鸡鸣时服，取其鸡鸣则阳升，使药力直达病所，故名鸡鸣散。",
        keyPoints: ["足胫肿重无力", "麻木冷痛", "胸闷泛恶", "苔白腻"],
        relatedSyndromes: ["寒湿困脾证", "寒凝血瘀证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "寒甚足冷", modification: "加附子、干姜以温阳散寒" },
            { condition: "小便不利", modification: "加茯苓、泽泻以渗湿消肿" }
        ],
        contraindications: ["湿热脚气（红肿热痛）禁用", "孕妇慎用"]
    },

    // —— 祛痰剂（3首） ——
    {
        id: "formula_218",
        name: "小陷胸汤",
        pinyin: "Xiao Xian Xiong Tang",
        source: "《伤寒论》",
        category: "祛痰剂",
        subcategory: "清热化痰剂",
        composition: [
            { herbName: "瓜蒌", dosage: "30g", role: "君药" },
            { herbName: "黄连", dosage: "3g", role: "臣药" },
            { herbName: "半夏", dosage: "12g（洗）", role: "臣药" }
        ],
        functions: ["清热化痰", "宽胸散结"],
        indications: ["痰热互结之小结胸证", "心下痞闷", "按之则痛", "或咳吐黄痰", "胸脘烦热", "舌苔黄腻", "脉浮滑或滑数"],
        analysis: "本方为痰热互结心下之小结胸证而设。瓜蒌甘寒，清热涤痰、宽胸散结，为君药；黄连苦寒，清热降火、开痞散结，为臣药；半夏辛温，化痰散结、和胃降逆，与黄连相伍一辛一苦、一温一寒，辛开苦降，共奏清热化痰、宽胸散结之效，为佐使。三药相合，痰去热除，结开痛止。",
        keyPoints: ["心下痞闷", "按之则痛", "咳吐黄痰", "苔黄腻", "脉浮滑"],
        relatedSyndromes: ["痰热壅肺证", "痰热扰心证", "脾胃湿热证"],
        relatedConstitutions: ["湿热质", "痰湿质"],
        modifications: [
            { condition: "痰热甚、咳吐黄稠痰", modification: "加胆南星、黄芩以清热化痰" },
            { condition: "胁痛", modification: "加郁金、柴胡以疏肝理气" }
        ],
        contraindications: ["寒痰结胸者禁用", "脾胃虚寒者慎用"]
    },
    {
        id: "formula_219",
        name: "苓甘五味姜辛汤",
        pinyin: "Ling Gan Wu Wei Jiang Xin Tang",
        source: "《金匮要略》",
        category: "祛痰剂",
        subcategory: "温化寒痰剂",
        composition: [
            { herbName: "茯苓", dosage: "12g", role: "君药" },
            { herbName: "干姜", dosage: "9g", role: "君药" },
            { herbName: "细辛", dosage: "5g", role: "臣药" },
            { herbName: "五味子", dosage: "5g", role: "佐药" },
            { herbName: "甘草", dosage: "9g", role: "使药" }
        ],
        functions: ["温肺化饮"],
        indications: ["寒饮咳嗽", "咳痰清稀色白量多", "胸膈痞满", "舌苔白滑", "脉弦滑"],
        analysis: "本方为痰饮停留、寒饮犯肺之咳嗽而设。干姜温肺散寒以化饮，茯苓健脾渗湿以杜生痰之源，共为君药；细辛温肺散寒、助干姜温化寒饮，为臣药；五味子敛肺止咳，与细辛配伍一散一收，散不伤正、收不留邪，为佐药；甘草和中调药，为使药。五药合用，开合相济、温散并行，为温化寒饮之良方。",
        keyPoints: ["咳痰清稀色白量多", "胸膈痞满", "苔白滑"],
        relatedSyndromes: ["痰湿内阻证", "风寒犯肺证"],
        relatedConstitutions: ["阳虚质", "痰湿质"],
        modifications: [
            { condition: "痰多欲呕", modification: "加半夏以化痰降逆" },
            { condition: "咳甚", modification: "加杏仁、紫菀以止咳化痰" }
        ],
        contraindications: ["肺热咳喘及阴虚干咳者禁用", "细辛有小毒，用量不宜过大"]
    },
    {
        id: "formula_220",
        name: "定痫丸",
        pinyin: "Ding Xian Wan",
        source: "《医学心悟》",
        category: "祛痰剂",
        subcategory: "治风化痰剂",
        composition: [
            { herbName: "竹沥", dosage: "适量（冲服）", role: "君药" },
            { herbName: "石菖蒲", dosage: "9g", role: "臣药" },
            { herbName: "胆南星", dosage: "9g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "天麻", dosage: "9g", role: "佐药" },
            { herbName: "全蝎", dosage: "3g", role: "佐药" },
            { herbName: "僵蚕", dosage: "9g", role: "佐药" },
            { herbName: "琥珀", dosage: "6g（冲服）", role: "佐药" },
            { herbName: "远志", dosage: "9g", role: "佐药" },
            { herbName: "朱砂", dosage: "3g（冲服）", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "茯神", dosage: "9g", role: "佐药" },
            { herbName: "丹参", dosage: "9g", role: "佐药" },
            { herbName: "麦冬", dosage: "12g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["涤痰息风", "开窍安神"],
        indications: ["痫证", "突然发作", "眩晕跌仆", "昏不知人", "口吐白沫", "两目上视", "四肢抽搐", "发出异声", "苔白腻", "脉弦滑"],
        analysis: "本方为痰浊内扰、肝风内动之痫证而设。竹沥、胆南星清热涤痰，石菖蒲芳香开窍醒神，共为君臣；半夏、陈皮、茯苓燥湿化痰、理气和中，天麻、全蝎、僵蚕平肝息风止痉，为佐药；琥珀、朱砂、茯神、远志镇惊安神，丹参活血通脑窍，麦冬养阴护心，人参补虚益智，共为佐药；甘草调和诸药为使。全方痰风并治、标本兼顾。",
        keyPoints: ["昏不知人", "口吐白沫", "四肢抽搐", "苔白腻脉弦滑"],
        relatedSyndromes: ["痰蒙清窍证", "胆郁痰扰证", "急惊风痰热证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "痰火偏盛", modification: "加黄芩、瓜蒌以清化热痰" },
            { condition: "抽搐频繁", modification: "加钩藤、蜈蚣以增强息风止痉之力" }
        ],
        contraindications: ["朱砂有毒不宜久服", "虚证痫厥者慎用"]
    },

    // —— 消食剂（2首） ——
    {
        id: "formula_221",
        name: "木香槟榔丸",
        pinyin: "Mu Xiang Bin Lang Wan",
        source: "《儒门事亲》（《卫生宝鉴》方增味）",
        category: "消食剂",
        subcategory: "消食化滞剂",
        composition: [
            { herbName: "槟榔", dosage: "30g", role: "君药" },
            { herbName: "大黄", dosage: "30g", role: "臣药" },
            { herbName: "木香", dosage: "30g", role: "臣药" },
            { herbName: "牵牛子", dosage: "60g", role: "佐药" },
            { herbName: "青皮", dosage: "30g", role: "佐药" },
            { herbName: "陈皮", dosage: "30g", role: "佐药" },
            { herbName: "莪术", dosage: "30g", role: "佐药" },
            { herbName: "香附", dosage: "30g", role: "佐药" },
            { herbName: "黄连", dosage: "30g", role: "佐药" },
            { herbName: "黄柏", dosage: "30g", role: "佐药" }
        ],
        functions: ["行气导滞", "攻积泄热"],
        indications: ["积滞内停", "湿蕴生热之痢疾", "脘腹痞满胀痛", "赤白痢疾", "里急后重", "或大便秘结", "舌苔黄腻", "脉沉实"],
        analysis: "本方为湿热积滞内停肠胃之证而设。槟榔、牵牛子导滞通便、行气消积，为君药；大黄攻积泄热，木香、香附、青皮、陈皮、莪术行气活血化积，共为臣佐；黄连、黄柏清热燥湿，厚肠止痢，为佐药。全方以行气导滞为主，配以攻积泄热，气行则积消、热清则痢止，通则不痛。",
        keyPoints: ["脘腹胀痛", "赤白痢疾", "里急后重", "便秘", "苔黄腻"],
        relatedSyndromes: ["食积证", "脾胃湿热证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "积滞较轻", modification: "减牵牛子、大黄之量，防攻伐太过" },
            { condition: "痢下赤多", modification: "加白芍、当归以和血止痛" }
        ],
        contraindications: ["孕妇禁用", "虚证积滞（脾虚食积）不宜", "中病即止，不宜久服"]
    },
    {
        id: "formula_222",
        name: "枳实消痞丸",
        pinyin: "Zhi Shi Xiao Pi Wan",
        source: "《兰室秘藏》（又名失笑丸）",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "干姜", dosage: "3g", role: "君药" },
            { herbName: "枳实", dosage: "15g", role: "臣药" },
            { herbName: "厚朴", dosage: "12g", role: "臣药" },
            { herbName: "黄连", dosage: "15g", role: "佐药" },
            { herbName: "麦芽曲", dosage: "6g", role: "佐药" },
            { herbName: "半夏曲", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "9g", role: "佐药" },
            { herbName: "白术", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" }
        ],
        functions: ["消痞除满", "健脾和胃"],
        indications: ["脾虚气滞", "寒热互结之心下痞满", "不欲饮食", "倦怠乏力", "大便不畅", "苔腻微黄", "脉弦"],
        analysis: "本方由枳术丸合半夏泻心汤加减而成，为脾虚气滞、寒热互结之心下痞满而设。枳实行气消痞，为臣药；黄连清热燥湿以除痞，配少量干姜温中散寒，辛开苦降、寒热同调，共为君佐；厚朴行气除满，麦芽曲、半夏曲消食和胃化痰，人参、白术、茯苓、炙甘草（四君子）益气健脾，使消补兼施，共为佐；炙甘草调和诸药为使。全方消痞与扶正并行，为消补兼施之剂。",
        keyPoints: ["心下痞满", "不欲饮食", "倦怠乏力", "苔腻微黄"],
        relatedSyndromes: ["食积证", "肝胃不和证", "寒湿困脾证"],
        relatedConstitutions: ["气虚质", "痰湿质"],
        modifications: [
            { condition: "痞满甚", modification: "重用枳实、厚朴以行气消痞" },
            { condition: "脾虚甚", modification: "重用人参、白术以健脾益气" }
        ],
        contraindications: ["纯实证痞满（无脾虚）者慎用"]
    },

    // —— 驱虫剂（1首） ——
    {
        id: "formula_223",
        name: "化虫丸",
        pinyin: "Hua Chong Wan",
        source: "《太平惠民和剂局方》",
        category: "驱虫剂",
        subcategory: "驱虫剂",
        composition: [
            { herbName: "鹤虱", dosage: "15g", role: "君药" },
            { herbName: "苦楝皮", dosage: "15g", role: "臣药" },
            { herbName: "槟榔", dosage: "15g", role: "臣药" },
            { herbName: "枯矾", dosage: "3g", role: "佐药" },
            { herbName: "铅粉（现多以使君子、芜荑替代）", dosage: "15g", role: "佐药" }
        ],
        functions: ["杀肠中诸虫"],
        indications: ["肠中诸虫", "发作时腹中疼痛", "往来上下", "或呕吐清水涎沫", "或多食善饥", "或不思饮食", "面色萎黄", "形体消瘦"],
        analysis: "本方为肠道诸虫之通用方。鹤虱、苦楝皮、槟榔、铅粉皆具杀虫之功，其中鹤虱、苦楝皮专杀蛔虫，槟榔杀绦虫并能导滞下虫，铅粉（胡粉）杀诸虫，共为君臣佐使；枯矾燥湿辟秽。诸药合用，使虫得辛则伏、得苦则下，虫去则腹痛自止、饮食渐安。",
        keyPoints: ["腹中疼痛往来上下", "呕吐清水", "面色萎黄消瘦"],
        relatedSyndromes: ["食积证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "腹痛剧", modification: "加延胡索以行气止痛" },
            { condition: "虫积日久脾虚", modification: "虫下后服健脾之剂（异功散之类）以善其后" }
        ],
        contraindications: ["铅粉有毒，现代临床多用使君子、芜荑等替代，不可过量或久服", "孕妇禁用", "脾虚体弱者慎用"]
    },

    // ====================================================================
    // 第四批（2026-09-01 按"十五五"《方剂学》21章结构补充 39 首）
    // 涌吐剂 / 表里双解剂 / 治痈疡剂 / 其余 13 章
    // ====================================================================

    // —— 涌吐剂（3首） ——
    {
        id: "formula_224",
        name: "瓜蒂散",
        pinyin: "Gua Di San",
        source: "《伤寒论》",
        category: "涌吐剂",
        subcategory: "涌吐剂",
        composition: [
            { herbName: "瓜蒂", dosage: "3g（熬黄）", role: "君药" },
            { herbName: "赤小豆", dosage: "3g", role: "臣药" },
            { herbName: "香豉", dosage: "9g", role: "佐药" }
        ],
        functions: ["涌吐痰涎宿食"],
        indications: ["痰涎壅盛", "胸中痞硬", "烦懊不安", "欲吐不出", "或宿食停滞", "胸脘胀满", "气上冲咽喉不得息"],
        analysis: "本方为涌吐痰涎、宿食之剂。瓜蒂苦寒有毒，善于涌吐痰涎宿食，为君药；赤小豆酸平，与瓜蒂相伍则酸苦涌泄，共为臣药；香豉轻清宣泄，助君臣涌吐，兼护胃气，为佐药。三药合用，涌吐之力峻而不伤正，使停于胸膈之痰涎宿食从吐而解。",
        keyPoints: ["胸中痞硬", "烦懊不安", "欲吐不出"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "宿食停滞", modification: "重用瓜蒂以加强涌吐之力" },
            { condition: "吐后胃气不和", modification: "少与糜粥自养，不可骤进补益" }
        ],
        contraindications: ["瓜蒂有毒，不可过量", "孕妇禁用", "年老体弱、吐血咯血者禁用"]
    },
    {
        id: "formula_225",
        name: "救急稀涎散",
        pinyin: "Jiu Ji Xi Xian San",
        source: "《圣济总录》",
        category: "涌吐剂",
        subcategory: "涌吐剂",
        composition: [
            { herbName: "猪牙皂", dosage: "15g", role: "君药" },
            { herbName: "白矾", dosage: "30g", role: "臣药" }
        ],
        functions: ["涌吐痰涎", "开窍通关"],
        indications: ["中风闭证", "痰涎壅盛", "喉中痰声漉漉", "气闭不通", "心神瞀闷", "四肢不收", "或倒仆不省人事"],
        analysis: "本方为中风闭证痰涎壅盛而设。猪牙皂辛能开窍，咸能软坚，善祛胶固之顽痰，为君药；白矾酸苦涌泄，能化顽痰，为臣药。二药相合，涌吐痰涎，通关开窍，使痰去窍开，神志自苏。",
        keyPoints: ["中风闭证", "喉中痰声漉漉", "不省人事"],
        relatedSyndromes: ["痰蒙清窍证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "牙关紧闭", modification: "先用乌梅擦牙令开，再灌药" },
            { condition: "痰去而正虚", modification: "吐后继以益气养血、化痰通络之剂调理" }
        ],
        contraindications: ["孕妇禁用", "脱证（目合口开、手撒遗尿）禁用", "不可久用"]
    },
    {
        id: "formula_226",
        name: "盐汤探吐方",
        pinyin: "Yan Tang Tan Tu Fang",
        source: "《备急千金要方》",
        category: "涌吐剂",
        subcategory: "涌吐剂",
        composition: [
            { herbName: "食盐", dosage: "适量", role: "君药" },
            { herbName: "温汤", dosage: "适量", role: "佐药" }
        ],
        functions: ["涌吐宿食毒物"],
        indications: ["宿食停滞不消", "或干霍乱", "欲吐不得吐", "欲泻不得泻", "腹中绞痛", "心烦闷乱"],
        analysis: "本方为涌吐宿食、毒物之简便验方。食盐咸寒，涌泄力专，能刺激胃脘使之涌吐，为君药；以温汤送服，助其发越宣达。食毒壅塞于中，吐之则浊邪上越而出，气机自通，为救急之良法。",
        keyPoints: ["干霍乱", "腹中绞痛", "欲吐不得吐"],
        relatedSyndromes: ["食积证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "毒物内停", modification: "急以盐汤灌服探吐，吐后视情就医" },
            { condition: "吐后口渴", modification: "饮温水，忌骤进生冷" }
        ],
        contraindications: ["孕妇禁用", "年老体弱者慎用", "吐后当以糜粥自养"]
    },

    // —— 表里双解剂（4首） ——
    {
        id: "formula_227",
        name: "葛根黄芩黄连汤",
        pinyin: "Ge Gen Huang Qin Huang Lian Tang",
        source: "《伤寒论》",
        category: "表里双解剂",
        subcategory: "解表清里剂",
        composition: [
            { herbName: "葛根", dosage: "15g", role: "君药" },
            { herbName: "黄芩", dosage: "9g", role: "臣药" },
            { herbName: "黄连", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "佐使药" }
        ],
        functions: ["解表清里"],
        indications: ["协热下利", "身热下利", "胸脘烦热", "口中作渴", "喘而汗出", "舌红苔黄", "脉数"],
        analysis: "本方为表证未解、邪陷阳明之协热下利而设。葛根轻清升发，解肌发表、升津止利，为君药；黄芩、黄连苦寒清里热、坚阴止利，为臣药；炙甘草甘缓和中，调和诸药，为佐使药。四药相合，外解表热、内清里热，表里同治，热利自止。",
        keyPoints: ["身热下利", "胸脘烦热", "舌红苔黄"],
        relatedSyndromes: ["湿热蕴结证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "腹痛甚", modification: "加白芍以缓急止痛" },
            { condition: "里热盛", modification: "加银花、白头翁以清热解毒" }
        ],
        contraindications: ["虚寒下利者禁用", "痢疾初起而里热不盛者慎用"]
    },
    {
        id: "formula_228",
        name: "五积散",
        pinyin: "Wu Ji San",
        source: "《太平惠民和剂局方》",
        category: "表里双解剂",
        subcategory: "解表温里剂",
        composition: [
            { herbName: "麻黄", dosage: "6g", role: "君药" },
            { herbName: "白芷", dosage: "6g", role: "臣药" },
            { herbName: "干姜", dosage: "6g", role: "臣药" },
            { herbName: "肉桂", dosage: "3g", role: "臣药" },
            { herbName: "苍术", dosage: "12g", role: "佐药" },
            { herbName: "厚朴", dosage: "6g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "枳壳", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "6g", role: "使药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" }
        ],
        functions: ["发表温里", "顺气化痰", "活血消积"],
        indications: ["外感风寒", "内伤生冷", "身热无汗", "头痛身疼", "胸满恶食", "呕吐腹痛", "以及妇人血气不调", "心腹撮痛", "月经不调"],
        analysis: "本方为寒、食、气、血、痰五积而设，故名五积散。方以麻黄、白芷解表散寒，干姜、肉桂温里散寒，四药表里同治，共为君臣；苍术、厚朴、陈皮、半夏、茯苓燥湿化痰，当归、川芎、白芍活血和血，桔梗、枳壳一升一降调畅气机，共为佐药；炙甘草调和诸药为使。全方表里双解、气血痰食并调，为治五积之通剂。",
        keyPoints: ["身热无汗", "胸满恶食", "腹痛呕吐"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒重", modification: "重用干姜、肉桂以温里散寒" },
            { condition: "气滞甚", modification: "加木香、砂仁以行气和中" }
        ],
        contraindications: ["孕妇慎用", "热证、阴虚火旺者忌用"]
    },
    {
        id: "formula_229",
        name: "防风通圣散",
        pinyin: "Fang Feng Tong Sheng San",
        source: "《宣明论方》",
        category: "表里双解剂",
        subcategory: "解表攻里剂",
        composition: [
            { herbName: "防风", dosage: "6g", role: "君药" },
            { herbName: "荆芥", dosage: "6g", role: "臣药" },
            { herbName: "麻黄", dosage: "3g", role: "臣药" },
            { herbName: "薄荷", dosage: "6g", role: "臣药" },
            { herbName: "大黄", dosage: "6g", role: "臣药" },
            { herbName: "芒硝", dosage: "6g", role: "臣药" },
            { herbName: "栀子", dosage: "6g", role: "佐药" },
            { herbName: "滑石", dosage: "12g", role: "佐药" },
            { herbName: "黄芩", dosage: "9g", role: "佐药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "石膏", dosage: "12g", role: "佐药" },
            { herbName: "桔梗", dosage: "6g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "白芍", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "6g", role: "佐药" },
            { herbName: "甘草", dosage: "6g", role: "使药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" }
        ],
        functions: ["疏风解表", "泻热通便"],
        indications: ["风热壅盛", "表里俱实", "憎寒壮热", "头目昏眩", "目赤睛痛", "口苦口干", "咽喉不利", "胸膈痞闷", "咳呕喘满", "涕唾稠黏", "大便秘结", "小便赤涩"],
        analysis: "本方为表里俱实之证而设，汗、下、清、利四法并施。防风、荆芥、麻黄、薄荷疏风解表，使表邪从汗而解，为君臣；大黄、芒硝泻热通便，栀子、滑石清热利湿，使里热从二便而去，黄芩、连翘、石膏、桔梗清解肺胃之热，共为臣佐；川芎、当归、白芍养血活血，白术、甘草健脾和中，使汗不伤正、下不伤中，共为佐使。全方表里同治、上下分消，为表里双解之代表方。",
        keyPoints: ["憎寒壮热", "大便秘结", "小便赤涩"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "表证重", modification: "加羌活、白芷以疏风解表" },
            { condition: "里热重", modification: "重用大黄、芒硝以通腑泻热" }
        ],
        contraindications: ["孕妇慎用", "体虚外感者禁用", "脾胃虚寒者忌用"]
    },
    {
        id: "formula_230",
        name: "疏凿饮子",
        pinyin: "Shu Zao Yin Zi",
        source: "《济生方》",
        category: "表里双解剂",
        subcategory: "解表攻里剂",
        composition: [
            { herbName: "泽泻", dosage: "12g", role: "君药" },
            { herbName: "赤小豆", dosage: "15g", role: "臣药" },
            { herbName: "商陆", dosage: "6g", role: "臣药" },
            { herbName: "羌活", dosage: "6g", role: "佐药" },
            { herbName: "大腹皮", dosage: "9g", role: "佐药" },
            { herbName: "椒目", dosage: "3g", role: "佐药" },
            { herbName: "木通", dosage: "6g", role: "佐药" },
            { herbName: "秦艽", dosage: "6g", role: "佐药" },
            { herbName: "槟榔", dosage: "9g", role: "佐药" },
            { herbName: "茯苓皮", dosage: "15g", role: "佐药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" }
        ],
        functions: ["泻下逐水", "疏风发表"],
        indications: ["阳水水肿", "遍身浮肿", "喘息口渴", "二便不利", "脉沉实"],
        analysis: "本方为阳水实证而设，上下表里分消之法。泽泻、商陆、槟榔、大腹皮、椒目、赤小豆利水逐水，使水湿从二便而去，共为君臣；羌活、秦艽疏风解表，使水邪从汗而泄，木通、茯苓皮通利水道，共为佐药；生姜发散水气、和胃止呕为使。全方发表以散水、攻里以逐水，使水去肿消、喘平便利。",
        keyPoints: ["遍身浮肿", "喘息口渴", "二便不利"],
        relatedSyndromes: ["水饮内停证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "腹水胀甚", modification: "重用商陆、槟榔以逐水消胀" },
            { condition: "肿消过半", modification: "中病即止，改用健脾利水之剂善后" }
        ],
        contraindications: ["孕妇禁用", "阴水、虚肿者忌用", "中病即止，不可过服"]
    },

    // —— 治痈疡剂·后半（8首） ——
    {
        id: "formula_231",
        name: "犀黄丸",
        pinyin: "Xi Huang Wan",
        source: "《外科全生集》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "牛黄", dosage: "1g", role: "君药" },
            { herbName: "麝香", dosage: "0.3g", role: "臣药" },
            { herbName: "乳香", dosage: "30g", role: "佐药" },
            { herbName: "没药", dosage: "30g", role: "佐药" }
        ],
        functions: ["解毒消痈", "化痰散结", "活血祛瘀"],
        indications: ["乳岩", "横痃", "瘰疬", "痰核", "流注", "肺痈", "小肠痈等"],
        analysis: "本方为火毒郁结、痰瘀互结之痈疡而设。牛黄清热解毒、化痰散结，为君药；麝香走窜通络、散结止痛，为臣药；乳香、没药活血祛瘀、消肿定痛，为佐药。以陈酒送服，助药力通行血脉。全方清热解毒与活血散结并用，使火毒得清、痰瘀得化。",
        keyPoints: ["痈疡肿毒", "痰核流注"],
        relatedSyndromes: ["热毒蕴肤证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "热毒盛", modification: "加蒲公英、连翘以清热解毒" },
            { condition: "疼痛甚", modification: "加延胡索以活血止痛" }
        ],
        contraindications: ["孕妇禁用", "疮疡已溃者慎用", "体虚者慎用"]
    },
    {
        id: "formula_232",
        name: "牛蒡解肌汤",
        pinyin: "Niu Bang Jie Ji Tang",
        source: "《疡科心得集》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "牛蒡子", dosage: "12g", role: "君药" },
            { herbName: "薄荷", dosage: "6g", role: "臣药" },
            { herbName: "荆芥", dosage: "6g", role: "臣药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "牡丹皮", dosage: "9g", role: "佐药" },
            { herbName: "石斛", dosage: "12g", role: "佐药" },
            { herbName: "玄参", dosage: "9g", role: "佐药" },
            { herbName: "夏枯草", dosage: "9g", role: "佐药" }
        ],
        functions: ["疏风清热", "凉血消肿"],
        indications: ["头面风热", "颈项痰毒", "风热牙痛", "头面生疮"],
        analysis: "本方为风热上攻之头面疮疡而设。牛蒡子疏散风热、解毒消肿，为君药；薄荷、荆芥疏风清热透邪，为臣药；连翘、栀子清热解毒，牡丹皮、玄参凉血清热，石斛养阴生津，夏枯草散结消肿，共为佐药。全方疏风清解、凉血消肿，使风热得散、肿毒得消。",
        keyPoints: ["头面疮疡", "风热牙痛"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "肿甚", modification: "加蒲公英、金银花以解毒消肿" },
            { condition: "便秘", modification: "加瓜蒌、大黄以通腑泻热" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_233",
        name: "小金丹",
        pinyin: "Xiao Jin Dan",
        source: "《外科全生集》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "白胶香", dosage: "45g", role: "君药" },
            { herbName: "草乌", dosage: "45g", role: "臣药" },
            { herbName: "五灵脂", dosage: "45g", role: "臣药" },
            { herbName: "地龙", dosage: "45g", role: "佐药" },
            { herbName: "木鳖子", dosage: "45g", role: "佐药" },
            { herbName: "乳香", dosage: "22.5g", role: "佐药" },
            { herbName: "没药", dosage: "22.5g", role: "佐药" },
            { herbName: "当归", dosage: "45g", role: "佐药" },
            { herbName: "麝香", dosage: "9g", role: "佐药" },
            { herbName: "墨炭", dosage: "3.6g", role: "佐药" }
        ],
        functions: ["化痰祛湿", "祛瘀通络"],
        indications: ["流注", "痰核", "瘰疬", "乳岩", "横痃", "贴骨疽等初起"],
        analysis: "本方为寒湿痰瘀凝滞之阴证肿疡而设。白胶香消肿止痛，草乌温经散寒、除湿通络，共为君臣；五灵脂、乳香、没药活血祛瘀、消肿定痛，木鳖子散结消肿，地龙通络，当归和血，麝香走窜开结，墨炭消肿散结，共为佐药。全方温散寒凝、化痰祛瘀，使阴疽痰核得消。",
        keyPoints: ["阴证肿疡", "痰核流注"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒重", modification: "加肉桂以温经散寒" },
            { condition: "肿硬不消", modification: "加牡蛎、浙贝母以软坚散结" }
        ],
        contraindications: ["孕妇禁用", "有毒之品，不可过量或久服", "疮疡已溃者慎用"]
    },
    {
        id: "formula_234",
        name: "海藻玉壶汤",
        pinyin: "Hai Zao Yu Hu Tang",
        source: "《医宗金鉴》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "海藻", dosage: "15g", role: "君药" },
            { herbName: "昆布", dosage: "15g", role: "臣药" },
            { herbName: "贝母", dosage: "9g", role: "臣药" },
            { herbName: "半夏", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "青皮", dosage: "6g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "使药" },
            { herbName: "独活", dosage: "6g", role: "佐药" },
            { herbName: "海带", dosage: "9g", role: "佐药" }
        ],
        functions: ["化痰软坚", "消散瘿瘤"],
        indications: ["瘿瘤初起", "或肿或硬", "皮色不变"],
        analysis: "本方为瘿瘤初起而设。海藻、昆布、海带咸寒软坚、消痰散结，为君臣；贝母、半夏化痰散结，青皮、陈皮理气化痰，川芎、当归活血和血，连翘清热解毒，独活祛风通络，共为佐药；甘草调和诸药为使。海藻与甘草相伍为十八反之配伍，本方取其相反相激以增软坚散结之力，为特殊用药。",
        keyPoints: ["瘿瘤初起", "皮色不变"],
        relatedSyndromes: ["痰气互结证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "瘿瘤坚硬", modification: "加牡蛎、玄参以软坚散结" },
            { condition: "胸闷胁胀", modification: "加柴胡、郁金以疏肝理气" }
        ],
        contraindications: ["瘿瘤破溃者慎用", "海藻反甘草，须遵原方配伍，不可随意加减"]
    },
    {
        id: "formula_235",
        name: "消瘰丸",
        pinyin: "Xiao Luo Wan",
        source: "《医学心悟》",
        category: "治痈疡剂",
        subcategory: "散结消痈剂",
        composition: [
            { herbName: "牡蛎", dosage: "15g", role: "君药" },
            { herbName: "玄参", dosage: "12g", role: "臣药" },
            { herbName: "贝母", dosage: "9g", role: "臣药" }
        ],
        functions: ["清热化痰", "软坚散结"],
        indications: ["瘰疬", "痰核", "咽干", "舌红", "脉弦滑"],
        analysis: "本方为瘰疬痰核而设。牡蛎咸寒软坚散结，为君药；玄参清热养阴、解毒散结，贝母清热化痰、消肿散结，共为臣药。三药合用，使热清痰化、坚结消散，为治瘰疬之平剂。",
        keyPoints: ["瘰疬痰核", "咽干舌红"],
        relatedSyndromes: ["痰热扰心证"],
        relatedConstitutions: ["阴虚质", "痰湿质"],
        modifications: [
            { condition: "瘰疬肿硬", modification: "加夏枯草、海藻以加强散结之力" },
            { condition: "阴虚甚", modification: "加麦冬、生地黄以养阴清热" }
        ],
        contraindications: ["脾胃虚寒者慎用"]
    },
    {
        id: "formula_236",
        name: "透脓散",
        pinyin: "Tou Nong San",
        source: "《外科正宗》",
        category: "治痈疡剂",
        subcategory: "托里透脓剂",
        composition: [
            { herbName: "黄芪", dosage: "12g", role: "君药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "穿山甲", dosage: "6g", role: "臣药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "皂角刺", dosage: "6g", role: "佐药" }
        ],
        functions: ["托毒溃脓"],
        indications: ["痈疡肿毒", "正虚不能托毒", "内已成脓", "外不易溃", "漫肿无头", "或酸胀热痛"],
        analysis: "本方为痈疡脓成难溃、正虚托毒无力而设。黄芪大补元气、托毒外出，为君药；当归养血活血，穿山甲攻坚溃脓，共为臣药；川芎活血行气，皂角刺消肿溃脓，共为佐药。全方补托与溃破并用，使脓透毒出、疮口得愈。",
        keyPoints: ["脓成难溃", "漫肿无头"],
        relatedSyndromes: ["正虚毒恋证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "气血虚甚", modification: "加党参、白术以益气养血" },
            { condition: "脓成日久不溃", modification: "重用皂角刺、穿山甲以溃坚" }
        ],
        contraindications: ["疮疡已溃者不宜", "脓未成者慎用"]
    },
    {
        id: "formula_237",
        name: "内补黄芪汤",
        pinyin: "Nei Bu Huang Qi Tang",
        source: "《外科正宗》",
        category: "治痈疡剂",
        subcategory: "托里透脓剂",
        composition: [
            { herbName: "黄芪", dosage: "15g", role: "君药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "熟地黄", dosage: "12g", role: "佐药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "肉桂", dosage: "3g", role: "佐药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "远志", dosage: "6g", role: "佐药" },
            { herbName: "生姜", dosage: "3片", role: "佐药" },
            { herbName: "大枣", dosage: "3枚", role: "佐药" }
        ],
        functions: ["补益气血", "生肌收口"],
        indications: ["痈疽溃后", "气血两虚", "溃处作痛", "或疮口久不收敛", "神倦食少"],
        analysis: "本方为痈疽溃后气血两虚而设。黄芪益气托毒生肌，为君药；人参、白术、茯苓、甘草（四君子）补气健脾，当归、川芎、熟地黄、白芍（四物）养血活血，肉桂温阳通脉、鼓舞气血，共为臣佐；麦冬养阴，远志宁心，姜枣调和营卫，共为佐使。全方气血双补、阴阳并调，使气血充足则疮口生肌收口。",
        keyPoints: ["痈疽溃后", "疮口久不收敛"],
        relatedSyndromes: ["气血两虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "疮口不敛", modification: "重用黄芪以益气生肌" },
            { condition: "脓水清稀", modification: "加鹿角胶以温补精血" }
        ],
        contraindications: ["疮疡初起热毒壅盛者不宜"]
    },
    {
        id: "formula_238",
        name: "薏苡附子败酱散",
        pinyin: "Yi Yi Fu Zi Bai Jiang San",
        source: "《金匮要略》",
        category: "治痈疡剂",
        subcategory: "托里透脓剂",
        composition: [
            { herbName: "薏苡仁", dosage: "30g", role: "君药" },
            { herbName: "附子", dosage: "6g", role: "臣药" },
            { herbName: "败酱草", dosage: "15g", role: "佐药" }
        ],
        functions: ["排脓消肿"],
        indications: ["肠痈内已成脓", "身无热", "肌肤甲错", "腹皮急", "按之濡", "如肿状"],
        analysis: "本方为肠痈脓已成而阳气不振之证而设。薏苡仁利湿排脓、舒筋缓急，为君药；附子振奋阳气、辛热散结，为臣药；败酱草清热解毒、排脓破瘀，为佐药。三药合用，扶正与祛邪并施，使脓排毒解、阳气来复，肠痈自愈。",
        keyPoints: ["肠痈脓成", "腹皮急按之濡"],
        relatedSyndromes: ["湿热蕴结证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "脓成而热盛", modification: "加金银花、蒲公英以清热解毒" },
            { condition: "痛甚", modification: "加赤芍、丹皮以凉血散瘀" }
        ],
        contraindications: ["肠痈脓未成而热毒壅盛者慎用", "孕妇慎用（附子有毒）"]
    },

    // —— 解表剂（3首） ——
    {
        id: "formula_239",
        name: "大青龙汤",
        pinyin: "Da Qing Long Tang",
        source: "《伤寒论》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "麻黄", dosage: "12g", role: "君药" },
            { herbName: "桂枝", dosage: "6g", role: "臣药" },
            { herbName: "炙甘草", dosage: "6g", role: "佐药" },
            { herbName: "杏仁", dosage: "6g", role: "佐药" },
            { herbName: "石膏", dosage: "18g", role: "佐药" },
            { herbName: "生姜", dosage: "9g", role: "佐药" },
            { herbName: "大枣", dosage: "10枚", role: "佐药" }
        ],
        functions: ["发汗解表", "清热除烦"],
        indications: ["外感风寒", "发热恶寒", "寒热俱重", "身疼痛", "不汗出而烦躁", "脉浮紧"],
        analysis: "本方为麻黄汤倍麻黄、加石膏、姜、枣而成。麻黄重用为君，发汗解表、宣肺平喘；桂枝解肌发表、助麻黄发汗，为臣药；石膏清泄里热、除烦止渴，配麻黄以发越在里之郁热，杏仁降利肺气，生姜、大枣调和营卫，共为佐药；炙甘草调和诸药为使。全方发汗与清热并用，为表寒里热证之主方。",
        keyPoints: ["发热恶寒", "不汗出而烦躁"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "汗出后", modification: "中病即止，不可过服，防亡阳" },
            { condition: "烦躁甚", modification: "重用石膏以清热除烦" }
        ],
        contraindications: ["孕妇慎用", "汗多亡阳者禁用", "脉微弱、汗出恶风者不可服"]
    },
    {
        id: "formula_240",
        name: "香苏散",
        pinyin: "Xiang Su San",
        source: "《太平惠民和剂局方》",
        category: "解表剂",
        subcategory: "辛温解表剂",
        composition: [
            { herbName: "香附", dosage: "9g", role: "君药" },
            { herbName: "紫苏叶", dosage: "9g", role: "君药" },
            { herbName: "陈皮", dosage: "6g", role: "臣药" },
            { herbName: "炙甘草", dosage: "3g", role: "佐使药" }
        ],
        functions: ["疏散风寒", "理气和中"],
        indications: ["外感风寒", "内有气滞", "形寒身热", "头痛无汗", "胸脘痞闷", "不思饮食"],
        analysis: "本方为外感风寒兼气机郁滞之证而设。紫苏叶辛温芳香，外散风寒、内行气滞，为君药；香附疏肝理气、解郁宽中，与紫苏相配共奏解表理气之功，同为君药；陈皮理气化湿和中，为臣药；炙甘草调和诸药为使。全方药性平和，为四时外感气滞之通用方。",
        keyPoints: ["形寒身热", "胸脘痞闷"],
        relatedSyndromes: ["风寒表实证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "头痛甚", modification: "加川芎、白芷以祛风止痛" },
            { condition: "食滞", modification: "加神曲、麦芽以消食和中" }
        ],
        contraindications: ["风热感冒、咽喉红肿热痛者不宜"]
    },
    {
        id: "formula_241",
        name: "葱豉桔梗汤",
        pinyin: "Cong Chi Jie Geng Tang",
        source: "《通俗伤寒论》",
        category: "解表剂",
        subcategory: "辛凉解表剂",
        composition: [
            { herbName: "葱白", dosage: "9g", role: "君药" },
            { herbName: "豆豉", dosage: "9g", role: "臣药" },
            { herbName: "桔梗", dosage: "6g", role: "臣药" },
            { herbName: "薄荷", dosage: "6g", role: "佐药" },
            { herbName: "连翘", dosage: "9g", role: "佐药" },
            { herbName: "栀子", dosage: "9g", role: "佐药" },
            { herbName: "甘草", dosage: "3g", role: "佐使药" },
            { herbName: "竹叶", dosage: "6g", role: "佐药" }
        ],
        functions: ["疏风解表", "清宣肺热"],
        indications: ["风温初起", "头痛身热", "微恶风寒", "咳嗽咽痛", "舌尖红", "脉浮数"],
        analysis: "本方为风温初起之证而设。葱白、豆豉辛温通阳、疏散表邪，为君药；薄荷疏风清热，桔梗宣肺利咽，共为臣药；连翘、栀子、竹叶清透上焦之热，甘草调和诸药，共为佐使。全方辛凉透表、轻清宣肺，使风热之邪从外而解。",
        keyPoints: ["风温初起", "咳嗽咽痛"],
        relatedSyndromes: ["风热表证"],
        relatedConstitutions: ["平和质"],
        modifications: [
            { condition: "咽痛甚", modification: "加牛蒡子、射干以利咽止痛" },
            { condition: "咳嗽甚", modification: "加前胡、杏仁以宣肺止咳" }
        ],
        contraindications: ["风寒表证、恶寒无汗明显者不宜"]
    },

    // —— 祛暑剂（3首） ——
    {
        id: "formula_242",
        name: "六一散",
        pinyin: "Liu Yi San",
        source: "《伤寒直格》",
        category: "祛暑剂",
        subcategory: "祛暑利湿剂",
        composition: [
            { herbName: "滑石", dosage: "18g", role: "君药" },
            { herbName: "甘草", dosage: "3g", role: "臣药" }
        ],
        functions: ["清暑利湿"],
        indications: ["感受暑湿", "身热烦渴", "小便不利", "或泄泻"],
        analysis: "本方为暑湿内蕴之证而设。滑石质重性寒，清热解暑、利尿渗湿，为君药；甘草清热和中，与滑石相伍，六一之比，使利水而不伤正，为臣药。二药合用，使暑热清、湿邪去，则身热烦渴、小便不利诸症自解，为治暑湿之基础方。",
        keyPoints: ["身热烦渴", "小便不利"],
        relatedSyndromes: ["暑湿证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "心烦不安", modification: "加朱砂（益元散）以镇心安神" },
            { condition: "兼表证", modification: "加薄荷（鸡苏散）以疏风解表" }
        ],
        contraindications: ["阴暑者不宜", "小便清长者慎用"]
    },
    {
        id: "formula_243",
        name: "桂苓甘露散",
        pinyin: "Gui Ling Gan Lu San",
        source: "《宣明论方》",
        category: "祛暑剂",
        subcategory: "祛暑利湿剂",
        composition: [
            { herbName: "茯苓", dosage: "12g", role: "君药" },
            { herbName: "甘草", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "泽泻", dosage: "12g", role: "臣药" },
            { herbName: "肉桂", dosage: "3g", role: "佐药" },
            { herbName: "石膏", dosage: "15g", role: "臣药" },
            { herbName: "寒水石", dosage: "15g", role: "臣药" },
            { herbName: "滑石", dosage: "15g", role: "臣药" },
            { herbName: "猪苓", dosage: "9g", role: "佐药" }
        ],
        functions: ["清暑解热", "化气利湿"],
        indications: ["暑湿证", "发热头痛", "烦渴引饮", "小便不利"],
        analysis: "本方由六一散合五苓散加石膏、寒水石而成。滑石、石膏、寒水石清解暑热，为君臣；茯苓、猪苓、泽泻、白术健脾利湿，共为臣佐；肉桂化气行水，使湿从小便而去，为佐药；甘草调和诸药为使。全方清热与利湿并施，使暑热得清、水湿得利。",
        keyPoints: ["发热烦渴", "小便不利"],
        relatedSyndromes: ["暑湿证"],
        relatedConstitutions: ["湿热质"],
        modifications: [
            { condition: "暑热甚", modification: "重用石膏、寒水石以清热" },
            { condition: "湿重", modification: "加薏苡仁以利湿" }
        ],
        contraindications: ["阴暑（暑月感寒）者不宜"]
    },
    {
        id: "formula_244",
        name: "清暑益气汤",
        pinyin: "Qing Shu Yi Qi Tang",
        source: "《脾胃论》",
        category: "祛暑剂",
        subcategory: "清暑益气剂",
        composition: [
            { herbName: "黄芪", dosage: "12g", role: "君药" },
            { herbName: "苍术", dosage: "6g", role: "佐药" },
            { herbName: "升麻", dosage: "3g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "神曲", dosage: "9g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" },
            { herbName: "麦冬", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "6g", role: "佐药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" },
            { herbName: "青皮", dosage: "3g", role: "佐药" },
            { herbName: "黄柏", dosage: "3g", role: "佐药" },
            { herbName: "葛根", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "3g", role: "佐药" }
        ],
        functions: ["清暑益气", "除湿健脾"],
        indications: ["平素气虚", "又感暑湿", "身热头痛", "口渴自汗", "四肢困倦", "不思饮食", "胸满身重", "大便溏薄", "小便短赤", "苔腻脉虚"],
        analysis: "本方为气虚之人感受暑湿之证而设。黄芪、人参益气固表，为君药；苍术、白术健脾燥湿，升麻、葛根升发清阳、解肌退热，麦冬、五味子养阴生津敛汗，黄柏清热燥湿，泽泻利湿泄热，青皮、陈皮理气和中，神曲消食和胃，当归养血，共为臣佐；炙甘草调和诸药为使。全方益气与祛暑并用，清补兼施，为治气虚暑湿之代表方。",
        keyPoints: ["身热困倦", "口渴自汗", "便溏溺赤"],
        relatedSyndromes: ["暑湿证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "暑热盛", modification: "加荷叶、西瓜翠衣以清暑解热" },
            { condition: "气虚甚", modification: "重用黄芪、人参以益气" }
        ],
        contraindications: ["暑热炽盛、津气大伤而无湿邪者慎用"]
    },

    // —— 安神剂（3首） ——
    {
        id: "formula_245",
        name: "桂枝甘草龙骨牡蛎汤",
        pinyin: "Gui Zhi Gan Cao Long Gu Mu Li Tang",
        source: "《伤寒论》",
        category: "安神剂",
        subcategory: "重镇安神剂",
        composition: [
            { herbName: "桂枝", dosage: "6g", role: "君药" },
            { herbName: "炙甘草", dosage: "6g", role: "臣药" },
            { herbName: "龙骨", dosage: "15g", role: "佐药" },
            { herbName: "牡蛎", dosage: "15g", role: "佐药" }
        ],
        functions: ["温通心阳", "潜镇安神"],
        indications: ["心阳不振", "心悸怔忡", "烦躁不安", "汗出肢冷", "舌淡苔白"],
        analysis: "本方为心阳受损、心神浮越之证而设。桂枝辛温，温通心阳，为君药；炙甘草甘温益气，助桂枝以复心阳，为臣药；龙骨、牡蛎重镇潜敛、安神定悸，为佐药。四药相合，使心阳得复、神气安敛，则心悸烦躁自平。",
        keyPoints: ["心悸怔忡", "烦躁汗出"],
        relatedSyndromes: ["心阳虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "心悸甚", modification: "加酸枣仁、柏子仁以养心安神" },
            { condition: "阳虚甚", modification: "加附子以温阳" }
        ],
        contraindications: ["阴虚火旺、舌红少苔者忌用"]
    },
    {
        id: "formula_246",
        name: "养心汤",
        pinyin: "Yang Xin Tang",
        source: "《证治准绳》",
        category: "安神剂",
        subcategory: "补养安神剂",
        composition: [
            { herbName: "黄芪", dosage: "12g", role: "君药" },
            { herbName: "人参", dosage: "6g", role: "臣药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "茯神", dosage: "9g", role: "佐药" },
            { herbName: "半夏曲", dosage: "9g", role: "佐药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "川芎", dosage: "6g", role: "佐药" },
            { herbName: "远志", dosage: "6g", role: "佐药" },
            { herbName: "肉桂", dosage: "3g", role: "佐药" },
            { herbName: "柏子仁", dosage: "9g", role: "佐药" },
            { herbName: "酸枣仁", dosage: "9g", role: "佐药" },
            { herbName: "五味子", dosage: "3g", role: "佐药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" }
        ],
        functions: ["补益气血", "养心安神"],
        indications: ["心虚血少", "心悸怔忡", "失眠多梦", "神疲乏力"],
        analysis: "本方为气血亏虚、心神失养之证而设。黄芪、人参补益心气，为君药；当归、川芎养血活血，为臣药；茯苓、茯神健脾宁心，酸枣仁、柏子仁、远志养心安神，五味子敛心安神，半夏曲和胃化痰，肉桂温阳通脉以助气血生化，共为佐药；炙甘草调和诸药为使。全方气血双补、心脾同调，使神有所养而悸眠自安。",
        keyPoints: ["心悸怔忡", "失眠多梦", "神疲乏力"],
        relatedSyndromes: ["心脾两虚证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "失眠甚", modification: "加龙骨、牡蛎以重镇安神" },
            { condition: "血虚甚", modification: "加熟地黄、白芍以养血" }
        ],
        contraindications: ["痰热内盛者慎用"]
    },
    {
        id: "formula_247",
        name: "交泰丸",
        pinyin: "Jiao Tai Wan",
        source: "《韩氏医通》",
        category: "安神剂",
        subcategory: "交通心肾剂",
        composition: [
            { herbName: "黄连", dosage: "15g", role: "君药" },
            { herbName: "肉桂", dosage: "1.5g", role: "臣药" }
        ],
        functions: ["交通心肾", "清火安神"],
        indications: ["心肾不交", "怔忡失眠", "心烦不安", "下肢不温"],
        analysis: "本方为心肾不交之证而设。黄连苦寒，清心泻火以制亢盛之心阳，为君药；肉桂辛热，温肾助阳以引火归元，为臣药。二药寒热并用、相反相成，使心火下降、肾水上济，心肾交泰，则失眠怔忡自愈。",
        keyPoints: ["心烦失眠", "下肢不温"],
        relatedSyndromes: ["心肾不交证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "失眠甚", modification: "加酸枣仁、茯神以安神" },
            { condition: "肾虚甚", modification: "加熟地黄、山茱萸以补肾" }
        ],
        contraindications: ["下焦纯虚无热、胃酸过多者慎用"]
    },

    // —— 理气剂（3首） ——
    {
        id: "formula_248",
        name: "厚朴温中汤",
        pinyin: "Hou Po Wen Zhong Tang",
        source: "《内外伤辨惑论》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "厚朴", dosage: "12g", role: "君药" },
            { herbName: "陈皮", dosage: "9g", role: "臣药" },
            { herbName: "炙甘草", dosage: "3g", role: "使药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "草豆蔻", dosage: "6g", role: "臣药" },
            { herbName: "木香", dosage: "6g", role: "佐药" },
            { herbName: "干姜", dosage: "6g", role: "佐药" }
        ],
        functions: ["温中行气", "燥湿除满"],
        indications: ["脾胃寒湿", "脘腹胀满", "或客寒犯胃", "时作疼痛"],
        analysis: "本方为脾胃寒湿气滞之证而设。厚朴辛苦温燥，行气消胀、燥湿除满，为君药；草豆蔻温中散寒、燥湿行气，陈皮理气化湿，共为臣药；木香行气止痛，干姜温中散寒，茯苓健脾渗湿，共为佐药；炙甘草调和诸药为使。全方温中与行气并用，使寒湿得化、气机通畅。",
        keyPoints: ["脘腹胀满", "时作疼痛"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒甚", modification: "加附子以温阳散寒" },
            { condition: "痛甚", modification: "加延胡索以行气止痛" }
        ],
        contraindications: ["孕妇慎用", "湿热中阻者忌用"]
    },
    {
        id: "formula_249",
        name: "橘核丸",
        pinyin: "Ju He Wan",
        source: "《济生方》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "橘核", dosage: "12g", role: "君药" },
            { herbName: "海藻", dosage: "9g", role: "臣药" },
            { herbName: "昆布", dosage: "9g", role: "臣药" },
            { herbName: "海带", dosage: "9g", role: "臣药" },
            { herbName: "川楝子", dosage: "9g", role: "佐药" },
            { herbName: "桃仁", dosage: "9g", role: "佐药" },
            { herbName: "厚朴", dosage: "6g", role: "佐药" },
            { herbName: "木通", dosage: "6g", role: "佐药" },
            { herbName: "枳实", dosage: "6g", role: "佐药" },
            { herbName: "延胡索", dosage: "9g", role: "佐药" },
            { herbName: "桂心", dosage: "3g", role: "佐药" },
            { herbName: "木香", dosage: "6g", role: "佐药" }
        ],
        functions: ["行气止痛", "软坚散结"],
        indications: ["疝气", "睾丸肿胀偏坠", "或坚硬如石", "或痛引脐腹"],
        analysis: "本方为寒湿疝气、睾丸肿胀之证而设。橘核行气散结、专治疝痛，为君药；海藻、昆布、海带软坚散结，川楝子、木香行气止痛，共为臣药；桃仁、延胡索活血止痛，厚朴、枳实破气散结，木通通利下焦，桂心温散寒邪，共为佐药。全方行气活血、软坚散结，使寒散气行、肿痛自消。",
        keyPoints: ["睾丸肿胀偏坠", "痛引脐腹"],
        relatedSyndromes: ["寒凝血瘀证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "痛甚", modification: "加乌药、小茴香以行气止痛" },
            { condition: "寒甚", modification: "加吴茱萸以温肝散寒" }
        ],
        contraindications: ["孕妇慎用"]
    },
    {
        id: "formula_250",
        name: "加味乌药汤",
        pinyin: "Jia Wei Wu Yao Tang",
        source: "《济阴纲目》",
        category: "理气剂",
        subcategory: "行气剂",
        composition: [
            { herbName: "乌药", dosage: "12g", role: "君药" },
            { herbName: "砂仁", dosage: "6g", role: "臣药" },
            { herbName: "木香", dosage: "6g", role: "臣药" },
            { herbName: "延胡索", dosage: "9g", role: "臣药" },
            { herbName: "香附", dosage: "12g", role: "臣药" },
            { herbName: "甘草", dosage: "3g", role: "佐使药" }
        ],
        functions: ["行气活血", "调经止痛"],
        indications: ["气滞血瘀之痛经", "经前或经行小腹胀痛", "胸胁乳房胀痛"],
        analysis: "本方为气滞血瘀之痛经而设。乌药行气散寒止痛，为君药；香附疏肝理气调经，为臣药；木香、砂仁行气和中，延胡索活血行气止痛，共为佐药；甘草调和诸药为使。全方以行气为主、活血为辅，使气行血畅，则经行畅通、腹痛自止。",
        keyPoints: ["经前小腹胀痛", "胸胁乳房胀痛"],
        relatedSyndromes: ["气滞血瘀证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "血瘀甚", modification: "加川芎、赤芍以活血祛瘀" },
            { condition: "寒凝痛甚", modification: "加艾叶、吴茱萸以温经散寒" }
        ],
        contraindications: ["孕妇慎用"]
    },

    // —— 泻下剂（2首） ——
    {
        id: "formula_251",
        name: "三物备急丸",
        pinyin: "San Wu Bei Ji Wan",
        source: "《金匮要略》",
        category: "泻下剂",
        subcategory: "温下剂",
        composition: [
            { herbName: "巴豆", dosage: "0.3g", role: "君药" },
            { herbName: "干姜", dosage: "9g", role: "臣药" },
            { herbName: "大黄", dosage: "9g", role: "臣药" }
        ],
        functions: ["攻逐寒积"],
        indications: ["寒实冷积", "卒然心腹胀痛", "痛如锥刺", "气急口噤", "大便不通"],
        analysis: "本方为寒实冷积、病情危急之证而设。巴豆辛热峻下，攻逐肠胃寒积，为君药；干姜温中散寒，助巴豆以逐寒，为臣药；大黄荡涤肠胃，推陈致新，与巴豆相配制其毒性，共为臣药。三药合用，攻逐寒积之力峻猛，为急救之剂，中病即止。",
        keyPoints: ["卒然心腹胀痛", "大便不通"],
        relatedSyndromes: ["虚寒证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "服后吐利", modification: "中病即止，以糜粥自养" },
            { condition: "年老体弱", modification: "减量服用，不可过剂" }
        ],
        contraindications: ["孕妇禁用", "巴豆有毒，不可过量或久服", "热结旁流者禁用"]
    },
    {
        id: "formula_252",
        name: "禹功散",
        pinyin: "Yu Gong San",
        source: "《儒门事亲》",
        category: "泻下剂",
        subcategory: "逐水剂",
        composition: [
            { herbName: "牵牛子", dosage: "12g", role: "君药" },
            { herbName: "小茴香", dosage: "9g", role: "臣药" }
        ],
        functions: ["行气逐水"],
        indications: ["阳水", "遍身水肿", "腹胀喘满", "二便不利"],
        analysis: "本方为阳水实证而设。牵牛子苦寒，峻下逐水、通利二便，为君药；小茴香辛温行气，使气行则水行，为臣药。二药相合，逐水之力峻而兼行气之功，使水邪从二便分消，水肿自退。",
        keyPoints: ["遍身水肿", "腹胀喘满"],
        relatedSyndromes: ["水饮内停证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "水肿甚", modification: "加泽泻、茯苓以利水渗湿" },
            { condition: "肿消过半", modification: "中病即止，改用健脾利湿方善后" }
        ],
        contraindications: ["孕妇禁用", "体虚者慎用", "中病即止，不可久服"]
    },

    // —— 补益剂（2首） ——
    {
        id: "formula_253",
        name: "益胃汤",
        pinyin: "Yi Wei Tang",
        source: "《温病条辨》",
        category: "补益剂",
        subcategory: "补阴剂",
        composition: [
            { herbName: "沙参", dosage: "9g", role: "君药" },
            { herbName: "麦冬", dosage: "15g", role: "君药" },
            { herbName: "生地黄", dosage: "15g", role: "臣药" },
            { herbName: "玉竹", dosage: "4.5g", role: "臣药" },
            { herbName: "冰糖", dosage: "3g", role: "佐药" }
        ],
        functions: ["养阴益胃"],
        indications: ["阳明温病", "胃阴损伤", "食欲不振", "口干咽燥", "舌红少苔", "脉细数"],
        analysis: "本方为胃阴不足之证而设。沙参、麦冬养阴清热、益胃生津，共为君药；生地黄、玉竹养阴生津，共为臣药；冰糖甘润和中，为佐药。全方甘凉濡润，使胃阴得复、津液自生，则饥而不欲食诸症自愈。",
        keyPoints: ["食欲不振", "口干咽燥", "舌红少苔"],
        relatedSyndromes: ["胃阴虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "口渴甚", modification: "加天花粉以生津止渴" },
            { condition: "便秘", modification: "加火麻仁以润肠通便" }
        ],
        contraindications: ["湿困脾胃、舌苔厚腻者不宜"]
    },
    {
        id: "formula_254",
        name: "补天大造丸",
        pinyin: "Bu Tian Da Zao Wan",
        source: "《医学心悟》",
        category: "补益剂",
        subcategory: "阴阳双补剂",
        composition: [
            { herbName: "人参", dosage: "9g", role: "君药" },
            { herbName: "白术", dosage: "9g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "臣药" },
            { herbName: "酸枣仁", dosage: "9g", role: "佐药" },
            { herbName: "炙黄芪", dosage: "12g", role: "臣药" },
            { herbName: "远志", dosage: "6g", role: "佐药" },
            { herbName: "白芍", dosage: "9g", role: "佐药" },
            { herbName: "山药", dosage: "12g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "枸杞子", dosage: "9g", role: "佐药" },
            { herbName: "紫河车", dosage: "3g", role: "君药" },
            { herbName: "龟甲", dosage: "9g", role: "佐药" },
            { herbName: "鹿角胶", dosage: "6g", role: "佐药" },
            { herbName: "熟地黄", dosage: "12g", role: "臣药" }
        ],
        functions: ["大补气血", "滋阴助阳"],
        indications: ["虚劳", "气血阴阳俱虚", "形体羸瘦", "精神倦怠", "心悸怔忡", "腰膝酸软"],
        analysis: "本方为虚劳气血阴阳俱虚之证而设。人参大补元气，紫河车大补精血，共为君药；黄芪、白术、山药、茯苓益气健脾，熟地黄、当归、白芍养血补血，共为臣药；枸杞子、龟甲、鹿角胶填精补髓、阴阳并补，酸枣仁、远志宁心安神，共为佐药。全方气血阴阳并补、五脏同调，为培元固本之重剂。",
        keyPoints: ["形体羸瘦", "心悸怔忡", "腰膝酸软"],
        relatedSyndromes: ["气血两虚证", "肾阴阳两虚证"],
        relatedConstitutions: ["气虚质", "阴虚质"],
        modifications: [
            { condition: "阴虚甚", modification: "加重龟甲、枸杞子以滋阴" },
            { condition: "阳虚甚", modification: "加肉桂、附子以温阳" }
        ],
        contraindications: ["实证、热证不宜", "感冒发热者暂缓"]
    },

    // —— 祛痰剂（2首） ——
    {
        id: "formula_255",
        name: "茯苓丸",
        pinyin: "Fu Ling Wan",
        source: "《全生指迷方》",
        category: "祛痰剂",
        subcategory: "燥湿化痰剂",
        composition: [
            { herbName: "半夏", dosage: "12g", role: "君药" },
            { herbName: "茯苓", dosage: "15g", role: "臣药" },
            { herbName: "枳壳", dosage: "6g", role: "佐药" },
            { herbName: "芒硝", dosage: "6g", role: "佐药" },
            { herbName: "姜汁", dosage: "适量", role: "佐药" }
        ],
        functions: ["燥湿行气", "软坚消痰"],
        indications: ["痰停中脘", "流于四肢", "两臂疼痛", "或四肢浮肿"],
        analysis: "本方为痰伏中脘、流注四肢之证而设。半夏燥湿化痰，为君药；茯苓健脾渗湿，杜生痰之源，为臣药；枳壳行气宽中，使气顺则痰消，芒硝软坚消痰、荡涤中脘之伏痰，共为佐药；姜汁制半夏之毒并和胃止呕为佐。全方燥湿行气、软坚消痰，使伏痰得去，则臂痛自愈。",
        keyPoints: ["两臂疼痛", "四肢浮肿"],
        relatedSyndromes: ["痰湿内阻证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "臂痛甚", modification: "加姜黄、桂枝以通络止痛" },
            { condition: "痰多", modification: "加陈皮、白术以健脾化痰" }
        ],
        contraindications: ["孕妇慎用（芒硝）", "阴虚燥痰者不宜"]
    },
    {
        id: "formula_256",
        name: "滚痰丸",
        pinyin: "Gun Tan Wan",
        source: "《丹溪心法附余》",
        category: "祛痰剂",
        subcategory: "清热化痰剂",
        composition: [
            { herbName: "礞石", dosage: "30g", role: "君药" },
            { herbName: "大黄", dosage: "24g", role: "臣药" },
            { herbName: "黄芩", dosage: "24g", role: "臣药" },
            { herbName: "沉香", dosage: "6g", role: "佐药" }
        ],
        functions: ["泻火逐痰"],
        indications: ["实热老痰", "癫狂惊悸", "或怔忡昏迷", "或咳喘痰稠", "大便秘结"],
        analysis: "本方为实热老痰、蒙蔽清窍之证而设。礞石咸寒质重，攻逐顽痰、平肝镇惊，为君药；大黄荡涤实热、开痰下行之路，黄芩清上焦之火，共为臣药；沉香降气，使气降则痰降，为佐药。全方泻火逐痰之力峻猛，使痰火从下而去，为治顽痰之峻剂。",
        keyPoints: ["癫狂惊悸", "咳喘痰稠", "大便秘结"],
        relatedSyndromes: ["痰热扰心证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "痰火甚", modification: "加竹沥、胆南星以清热化痰" },
            { condition: "服后大便稀溏", modification: "中病即止，减量或停药" }
        ],
        contraindications: ["孕妇禁用", "体虚者不宜", "中病即止，不可久服"]
    },

    // —— 温里剂（1首） ——
    {
        id: "formula_257",
        name: "黄芪桂枝五物汤",
        pinyin: "Huang Qi Gui Zhi Wu Wu Tang",
        source: "《金匮要略》",
        category: "温里剂",
        subcategory: "温经散寒剂",
        composition: [
            { herbName: "黄芪", dosage: "12g", role: "君药" },
            { herbName: "桂枝", dosage: "9g", role: "臣药" },
            { herbName: "白芍", dosage: "9g", role: "臣药" },
            { herbName: "生姜", dosage: "12g", role: "佐药" },
            { herbName: "大枣", dosage: "4枚", role: "佐药" }
        ],
        functions: ["益气温经", "和血通痹"],
        indications: ["血痹", "肌肤麻木不仁", "脉微涩而紧"],
        analysis: "本方由桂枝汤去甘草倍生姜加黄芪而成，为血痹证而设。黄芪补气固卫，为君药；桂枝温经通阳、活血通痹，白芍养血和营，共为臣药；生姜倍量，辛温散寒、助桂枝以通痹，大枣益气养血，共为佐药。全方益气温阳、和血通痹，使气血通畅，则肌肤麻木自除。",
        keyPoints: ["肌肤麻木不仁"],
        relatedSyndromes: ["气虚血瘀证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "麻木甚", modification: "加当归、鸡血藤以养血活血" },
            { condition: "畏寒甚", modification: "加附子以温阳散寒" }
        ],
        contraindications: ["热证、阴虚内热者不宜"]
    },

    // —— 固涩剂（1首） ——
    {
        id: "formula_258",
        name: "驻车丸",
        pinyin: "Zhu Che Wan",
        source: "《备急千金要方》",
        category: "固涩剂",
        subcategory: "涩肠止泻剂",
        composition: [
            { herbName: "黄连", dosage: "18g", role: "君药" },
            { herbName: "干姜", dosage: "6g", role: "臣药" },
            { herbName: "当归", dosage: "9g", role: "佐药" },
            { herbName: "阿胶", dosage: "9g", role: "佐药" }
        ],
        functions: ["清热燥湿", "养阴止痢"],
        indications: ["久痢伤阴", "湿热未尽", "下痢赤白", "腹痛里急", "舌红少苔"],
        analysis: "本方为久痢伤阴、湿热未尽之证而设。黄连清热燥湿、坚阴止痢，为君药；干姜温中散寒，与黄连相配辛开苦降、调和肠胃，为臣药；当归、阿胶养血滋阴，为佐药。全方寒热并用、邪正兼顾，使湿热得清、阴血得养，则久痢自止。",
        keyPoints: ["久痢", "下痢赤白", "舌红少苔"],
        relatedSyndromes: ["津液亏虚证"],
        relatedConstitutions: ["阴虚质"],
        modifications: [
            { condition: "里急后重甚", modification: "加木香、槟榔以行气导滞" },
            { condition: "阴血虚甚", modification: "加白芍、熟地黄以养血滋阴" }
        ],
        contraindications: ["痢疾初起、湿热壅盛者慎用"]
    },

    // —— 理血剂（1首） ——
    {
        id: "formula_259",
        name: "咳血方",
        pinyin: "Ke Xue Fang",
        source: "《丹溪心法》",
        category: "理血剂",
        subcategory: "止血剂",
        composition: [
            { herbName: "青黛", dosage: "6g", role: "君药" },
            { herbName: "瓜蒌仁", dosage: "9g", role: "臣药" },
            { herbName: "海浮石", dosage: "9g", role: "臣药" },
            { herbName: "栀子", dosage: "9g", role: "臣药" },
            { herbName: "诃子", dosage: "6g", role: "佐药" }
        ],
        functions: ["清肝宁肺", "凉血止血"],
        indications: ["肝火犯肺之咳血", "咳嗽痰中带血", "痰质浓稠", "咯吐不爽", "心烦易怒", "胸胁作痛", "咽干口苦", "颊赤便秘", "舌红苔黄", "脉弦数"],
        analysis: "本方为肝火犯肺之咳血而设。青黛咸寒清肝泻火、凉血止血，为君药；栀子清泻肝肺之火，瓜蒌仁清热化痰、润肺滑肠，海浮石清肺化痰、软坚散结，共为臣药；诃子敛肺止咳下气，为佐药。全方直折肝火、清肺化痰，使火清气降则血自宁，为图本之治。",
        keyPoints: ["咳痰带血", "心烦易怒", "胸胁作痛"],
        relatedSyndromes: ["肝火上炎证"],
        relatedConstitutions: ["气郁质"],
        modifications: [
            { condition: "咳血甚", modification: "加白茅根、侧柏叶以凉血止血" },
            { condition: "痰多", modification: "加贝母、竹沥以化痰" }
        ],
        contraindications: ["脾胃虚寒、便溏者慎用"]
    },

    // —— 祛湿剂（1首） ——
    {
        id: "formula_260",
        name: "甘草干姜茯苓白术汤",
        pinyin: "Gan Cao Gan Jiang Fu Ling Bai Zhu Tang",
        source: "《金匮要略》",
        category: "祛湿剂",
        subcategory: "温化寒湿剂",
        composition: [
            { herbName: "甘草", dosage: "6g", role: "佐药" },
            { herbName: "干姜", dosage: "12g", role: "君药" },
            { herbName: "茯苓", dosage: "12g", role: "臣药" },
            { herbName: "白术", dosage: "12g", role: "臣药" }
        ],
        functions: ["温脾胜湿"],
        indications: ["肾著病", "身重", "腰中冷", "如坐水中", "形如水状", "反不渴", "小便自利", "饮食如故"],
        analysis: "本方为肾著病而设，虽以肾著名之，实属寒湿困脾之证。干姜辛热温中散寒，为君药；白术、茯苓健脾燥湿、渗利水湿，共为臣药；甘草益气和中，为佐药。全方重在温脾胜湿，使寒散湿化，则身重腰冷自除。",
        keyPoints: ["身重", "腰中冷", "小便自利"],
        relatedSyndromes: ["寒湿困脾证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "寒甚", modification: "加附子以温阳散寒" },
            { condition: "湿甚", modification: "加薏苡仁、泽泻以利湿" }
        ],
        contraindications: ["阴虚内热者忌用"]
    },

    // —— 消食剂（1首） ——
    {
        id: "formula_261",
        name: "葛花解酲汤",
        pinyin: "Ge Hua Jie Cheng Tang",
        source: "《兰室秘藏》",
        category: "消食剂",
        subcategory: "消食化滞剂",
        composition: [
            { herbName: "葛花", dosage: "15g", role: "君药" },
            { herbName: "砂仁", dosage: "6g", role: "臣药" },
            { herbName: "白豆蔻", dosage: "6g", role: "臣药" },
            { herbName: "神曲", dosage: "9g", role: "佐药" },
            { herbName: "干姜", dosage: "6g", role: "佐药" },
            { herbName: "木香", dosage: "6g", role: "佐药" },
            { herbName: "陈皮", dosage: "6g", role: "佐药" },
            { herbName: "青皮", dosage: "6g", role: "佐药" },
            { herbName: "茯苓", dosage: "9g", role: "佐药" },
            { herbName: "猪苓", dosage: "9g", role: "佐药" },
            { herbName: "泽泻", dosage: "9g", role: "佐药" },
            { herbName: "人参", dosage: "6g", role: "佐药" },
            { herbName: "白术", dosage: "9g", role: "佐药" }
        ],
        functions: ["分消酒湿", "理气健脾"],
        indications: ["饮酒过度", "酒积伤脾", "眩晕呕吐", "胸膈痞闷", "食少体倦", "小便不利"],
        analysis: "本方为酒积伤脾之证而设。葛花甘凉，专解酒毒、醒脾和胃，为君药；砂仁、白豆蔻芳香化湿、行气和中，为臣药；神曲消食和胃，木香、陈皮、青皮理气化滞，茯苓、猪苓、泽泻利湿泄浊，使酒湿从下而去，干姜温中和胃，人参、白术健脾益气，共为佐药。全方上下分消、消补兼施，使酒湿得去、脾胃得健。",
        keyPoints: ["眩晕呕吐", "胸膈痞闷", "食少体倦"],
        relatedSyndromes: ["食滞胃脘证"],
        relatedConstitutions: ["痰湿质"],
        modifications: [
            { condition: "呕恶甚", modification: "加半夏、竹茹以和胃止呕" },
            { condition: "口渴", modification: "加葛根、天花粉以生津" }
        ],
        contraindications: ["酒毒化热、口干舌红苔黄者不宜"]
    },

    // —— 驱虫剂（1首） ——
    {
        id: "formula_262",
        name: "肥儿丸",
        pinyin: "Fei Er Wan",
        source: "《太平惠民和剂局方》",
        category: "驱虫剂",
        subcategory: "驱虫剂",
        composition: [
            { herbName: "神曲", dosage: "9g", role: "佐药" },
            { herbName: "黄连", dosage: "6g", role: "佐药" },
            { herbName: "肉豆蔻", dosage: "6g", role: "佐药" },
            { herbName: "使君子", dosage: "9g", role: "君药" },
            { herbName: "麦芽", dosage: "9g", role: "佐药" },
            { herbName: "槟榔", dosage: "9g", role: "臣药" },
            { herbName: "木香", dosage: "6g", role: "佐药" }
        ],
        functions: ["杀虫消积", "健脾清热"],
        indications: ["虫积腹痛", "消化不良", "面黄体瘦", "肚腹胀满", "发热口臭"],
        analysis: "本方为小儿虫积脾虚之证而设。使君子杀虫消积、健脾，为君药；槟榔驱虫下气，为臣药；神曲、麦芽消食化积，黄连清热燥湿，木香行气止痛，肉豆蔻温中涩肠，共为佐药。全方杀虫与消积健脾并用，使虫去积消、脾胃得健，小儿自然肥壮，故名肥儿丸。",
        keyPoints: ["虫积腹痛", "面黄体瘦", "肚腹胀满"],
        relatedSyndromes: ["食积证"],
        relatedConstitutions: ["气虚质"],
        modifications: [
            { condition: "虫积甚", modification: "加苦楝皮、鹤虱以杀虫" },
            { condition: "脾虚甚", modification: "加党参、白术以健脾" }
        ],
        contraindications: ["脾虚泄泻者慎用", "不可久服"]
    }
];

// ============================================================================
// 第二部分：方剂分类索引
// ============================================================================

const formulaCategories = {
    "解表剂": {
        "辛温解表剂": [
            "formula_001",
            "formula_002",
            "formula_003",
            "formula_004",
            "formula_101",
            "formula_127",
            "formula_131",
            "formula_239",
            "formula_240"
        ],
        "辛凉解表剂": [
            "formula_005",
            "formula_006",
            "formula_007",
            "formula_132",
            "formula_133",
            "formula_172",
            "formula_241"
        ],
        "扶正解表剂": [
            "formula_129",
            "formula_135",
            "formula_136",
            "formula_173",
            "formula_174",
            "formula_175"
        ]
    },
    "泻下剂": {
        "寒下剂": [
            "formula_008",
            "formula_176"
        ],
        "温下剂": [
            "formula_010",
            "formula_137",
            "formula_251"
        ],
        "润下剂": [
            "formula_011",
            "formula_138",
            "formula_179"
        ],
        "攻补兼施剂": [
            "formula_139",
            "formula_178"
        ],
        "逐水剂": [
            "formula_177",
            "formula_252"
        ]
    },
    "和解剂": {
        "和解少阳剂": [
            "formula_012",
            "formula_013",
            "formula_180"
        ],
        "调和肝脾剂": [
            "formula_014",
            "formula_015",
            "formula_070"
        ],
        "调和肠胃剂": [
            "formula_016"
        ]
    },
    "清热剂": {
        "清气分热剂": [
            "formula_017",
            "formula_018",
            "formula_140",
            "formula_141",
            "formula_181"
        ],
        "清营凉血剂": [
            "formula_019",
            "formula_020"
        ],
        "清热解毒剂": [
            "formula_021",
            "formula_022",
            "formula_074",
            "formula_075",
            "formula_142"
        ],
        "清脏腑热剂": [
            "formula_023",
            "formula_071",
            "formula_072",
            "formula_073",
            "formula_103",
            "formula_123",
            "formula_144"
        ],
        "清虚热剂": [
            "formula_024",
            "formula_183",
            "formula_184"
        ],
        "气血两清剂": [
            "formula_182"
        ]
    },
    "祛暑剂": {
        "祛暑解表剂": [
            "formula_171"
        ],
        "祛暑利湿剂": [
            "formula_242",
            "formula_243"
        ],
        "清暑益气剂": [
            "formula_244"
        ]
    },
    "温里剂": {
        "温中祛寒剂": [
            "formula_025",
            "formula_026",
            "formula_076",
            "formula_146",
            "formula_185"
        ],
        "回阳救逆剂": [
            "formula_027",
            "formula_186"
        ],
        "温经散寒剂": [
            "formula_028",
            "formula_257"
        ]
    },
    "表里双解剂": {
        "解表攻里剂": [
            "formula_069",
            "formula_229",
            "formula_230"
        ],
        "解表清里剂": [
            "formula_227"
        ],
        "解表温里剂": [
            "formula_228"
        ]
    },
    "补益剂": {
        "补气剂": [
            "formula_029",
            "formula_030",
            "formula_037",
            "formula_077",
            "formula_079",
            "formula_125",
            "formula_189",
            "formula_192"
        ],
        "补血剂": [
            "formula_031",
            "formula_032",
            "formula_078",
            "formula_080"
        ],
        "气血双补剂": [
            "formula_033",
            "formula_120"
        ],
        "补阴剂": [
            "formula_034",
            "formula_104",
            "formula_107",
            "formula_108",
            "formula_130",
            "formula_148",
            "formula_188",
            "formula_253"
        ],
        "补阳剂": [
            "formula_035",
            "formula_105",
            "formula_149",
            "formula_191"
        ],
        "阴阳双补剂": [
            "formula_036",
            "formula_190",
            "formula_254"
        ]
    },
    "固涩剂": {
        "涩肠止泻剂": [
            "formula_038",
            "formula_153",
            "formula_194",
            "formula_258"
        ],
        "固精止遗剂": [
            "formula_039",
            "formula_152",
            "formula_195"
        ],
        "固崩止带剂": [
            "formula_119",
            "formula_196"
        ],
        "固表止汗剂": [
            "formula_151"
        ],
        "敛肺止咳剂": [
            "formula_193"
        ]
    },
    "安神剂": {
        "重镇安神剂": [
            "formula_040",
            "formula_197",
            "formula_245"
        ],
        "补养安神剂": [
            "formula_041",
            "formula_042",
            "formula_154",
            "formula_198",
            "formula_246"
        ],
        "交通心肾剂": [
            "formula_145",
            "formula_247"
        ]
    },
    "开窍剂": {
        "凉开剂": [
            "formula_043",
            "formula_044",
            "formula_126",
            "formula_199"
        ],
        "温开剂": [
            "formula_045",
            "formula_200"
        ]
    },
    "理气剂": {
        "行气剂": [
            "formula_046",
            "formula_047",
            "formula_081",
            "formula_102",
            "formula_128",
            "formula_155",
            "formula_156",
            "formula_202",
            "formula_222",
            "formula_248",
            "formula_249",
            "formula_250"
        ],
        "降气剂": [
            "formula_048",
            "formula_049",
            "formula_201",
            "formula_203",
            "formula_204",
            "formula_205"
        ]
    },
    "理血剂": {
        "活血祛瘀剂": [
            "formula_050",
            "formula_051",
            "formula_052",
            "formula_082",
            "formula_083",
            "formula_109",
            "formula_110",
            "formula_111",
            "formula_112",
            "formula_113",
            "formula_150",
            "formula_157",
            "formula_158",
            "formula_169",
            "formula_206",
            "formula_207",
            "formula_209"
        ],
        "止血剂": [
            "formula_053",
            "formula_054",
            "formula_084",
            "formula_159",
            "formula_208",
            "formula_259"
        ]
    },
    "治风剂": {
        "疏散外风剂": [
            "formula_055",
            "formula_056",
            "formula_121",
            "formula_160",
            "formula_161",
            "formula_210",
            "formula_211"
        ],
        "平息内风剂": [
            "formula_057",
            "formula_058",
            "formula_085",
            "formula_122",
            "formula_170",
            "formula_212"
        ]
    },
    "治燥剂": {
        "轻宣外燥剂": [
            "formula_059",
            "formula_060",
            "formula_086"
        ],
        "滋润内燥剂": [
            "formula_061",
            "formula_087",
            "formula_088",
            "formula_089",
            "formula_213",
            "formula_214"
        ]
    },
    "祛湿剂": {
        "化湿和胃剂": [
            "formula_062",
            "formula_090",
            "formula_164"
        ],
        "清热祛湿剂": [
            "formula_063",
            "formula_091",
            "formula_092",
            "formula_093",
            "formula_094",
            "formula_116",
            "formula_118",
            "formula_215",
            "formula_216"
        ],
        "利水渗湿剂": [
            "formula_064",
            "formula_134",
            "formula_147",
            "formula_166"
        ],
        "温化寒湿剂": [
            "formula_065",
            "formula_095",
            "formula_163",
            "formula_217",
            "formula_260"
        ],
        "祛风胜湿剂": [
            "formula_096",
            "formula_162"
        ],
        "祛湿化浊剂": [
            "formula_117",
            "formula_165"
        ]
    },
    "祛痰剂": {
        "燥湿化痰剂": [
            "formula_066",
            "formula_097",
            "formula_106",
            "formula_255"
        ],
        "清热化痰剂": [
            "formula_098",
            "formula_218",
            "formula_256"
        ],
        "治风化痰剂": [
            "formula_099",
            "formula_220"
        ],
        "温化寒痰剂": [
            "formula_167",
            "formula_219"
        ],
        "润燥化痰剂": [
            "formula_168"
        ]
    },
    "消食剂": {
        "消食化滞剂": [
            "formula_067",
            "formula_100",
            "formula_221",
            "formula_261"
        ],
        "健脾消食剂": [
            "formula_124"
        ]
    },
    "驱虫剂": {
        "驱虫剂": [
            "formula_068",
            "formula_223",
            "formula_262"
        ]
    },
    "涌吐剂": {
        "涌吐剂": [
            "formula_224",
            "formula_225",
            "formula_226"
        ]
    },
    "治痈疡剂": {
        "散结消痈剂": [
            "formula_009",
            "formula_114",
            "formula_115",
            "formula_143",
            "formula_187",
            "formula_231",
            "formula_232",
            "formula_233",
            "formula_234",
            "formula_235"
        ],
        "托里透脓剂": [
            "formula_236",
            "formula_237",
            "formula_238"
        ]
    }
};

// 浏览器全局导出（兼容 script 标签加载）
if (typeof window !== 'undefined') {
    window.formulasDatabase = formulasDatabase;
    window.formulaCategories = formulaCategories;
}

// Node 导出（供数据校验脚本使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formulasDatabase, formulaCategories };
}

