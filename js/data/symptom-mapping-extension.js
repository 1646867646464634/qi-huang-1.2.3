// 自动生成的症状映射扩展（从证型库提取，覆盖证型库全部可输入症状）
// 由 scripts/rebuild-mapping-weights.js 依据证型库（含 keySymptoms）重标定权重：
//   keySymptoms 主症 10 / 独有症状 8 / 强相关(2-3证型) 7-6 / 泛化症状(≥4证型) 5
const symptomMappingExtension = {
    "嗳腐吞酸": [
        { syndromeId: "syn_062", keyword: "嗳腐吞酸", weight: 10 },
        { syndromeId: "syn_138", keyword: "嗳腐吞酸", weight: 10 }
    ],
    "嗳气": [
        { syndromeId: "syn_110", keyword: "嗳气", weight: 10 },
        { syndromeId: "syn_020", keyword: "嗳气", weight: 7 }
    ],
    "斑疹隐隐": [
        { syndromeId: "syn_117", keyword: "斑疹隐隐", weight: 10 }
    ],
    "崩漏": [
        { syndromeId: "syn_121", keyword: "崩漏", weight: 8 }
    ],
    "鼻鸣": [
        { syndromeId: "syn_080", keyword: "鼻鸣", weight: 8 }
    ],
    "鼻衄": [
        { syndromeId: "syn_104", keyword: "鼻衄", weight: 8 }
    ],
    "鼻塞": [
        { syndromeId: "syn_001", keyword: "鼻塞", weight: 6 },
        { syndromeId: "syn_002", keyword: "鼻塞", weight: 6 },
        { syndromeId: "syn_140", keyword: "鼻塞", weight: 6 }
    ],
    "鼻塞流清涕": [
        { syndromeId: "syn_042", keyword: "鼻塞流清涕", weight: 10 }
    ],
    "便溏": [
        { syndromeId: "syn_127", keyword: "便溏", weight: 8 }
    ],
    "便血": [
        { syndromeId: "syn_104", keyword: "便血", weight: 6 },
        { syndromeId: "syn_117", keyword: "便血", weight: 6 },
        { syndromeId: "syn_121", keyword: "便血", weight: 6 }
    ],
    "不思饮食": [
        { syndromeId: "syn_138", keyword: "不思饮食", weight: 8 }
    ],
    "潮热盗汗": [
        { syndromeId: "syn_142", keyword: "潮热盗汗", weight: 10 },
        { syndromeId: "syn_011", keyword: "潮热盗汗", weight: 5 },
        { syndromeId: "syn_041", keyword: "潮热盗汗", weight: 5 },
        { syndromeId: "syn_050", keyword: "潮热盗汗", weight: 5 },
        { syndromeId: "syn_111", keyword: "潮热盗汗", weight: 5 }
    ],
    "成人早衰": [
        { syndromeId: "syn_052", keyword: "成人早衰", weight: 8 }
    ],
    "齿衄": [
        { syndromeId: "syn_104", keyword: "齿衄", weight: 8 }
    ],
    "疮疡初起": [
        { syndromeId: "syn_128", keyword: "疮疡初起", weight: 10 }
    ],
    "唇焦舌燥": [
        { syndromeId: "syn_075", keyword: "唇焦舌燥", weight: 10 }
    ],
    "唇舌色淡": [
        { syndromeId: "syn_010", keyword: "唇舌色淡", weight: 8 }
    ],
    "唇舌爪甲色淡": [
        { syndromeId: "syn_071", keyword: "唇舌爪甲色淡", weight: 7 },
        { syndromeId: "syn_073", keyword: "唇舌爪甲色淡", weight: 7 }
    ],
    "刺痛拒按": [
        { syndromeId: "syn_072", keyword: "刺痛拒按", weight: 10 },
        { syndromeId: "syn_120", keyword: "刺痛拒按", weight: 10 }
    ],
    "大便不爽": [
        { syndromeId: "syn_062", keyword: "大便不爽", weight: 8 }
    ],
    "大便干结": [
        { syndromeId: "syn_043", keyword: "大便干结", weight: 6 },
        { syndromeId: "syn_060", keyword: "大便干结", weight: 6 },
        { syndromeId: "syn_075", keyword: "大便干结", weight: 6 }
    ],
    "大便秘结": [
        { syndromeId: "syn_107", keyword: "大便秘结", weight: 10 },
        { syndromeId: "syn_003", keyword: "大便秘结", weight: 5 },
        { syndromeId: "syn_021", keyword: "大便秘结", weight: 5 },
        { syndromeId: "syn_061", keyword: "大便秘结", weight: 5 }
    ],
    "大便黏滞": [
        { syndromeId: "syn_129", keyword: "大便黏滞", weight: 8 }
    ],
    "大便黏滞不爽": [
        { syndromeId: "syn_122", keyword: "大便黏滞不爽", weight: 10 }
    ],
    "大便酸臭": [
        { syndromeId: "syn_138", keyword: "大便酸臭", weight: 10 }
    ],
    "大便溏薄": [
        { syndromeId: "syn_030", keyword: "大便溏薄", weight: 10 },
        { syndromeId: "syn_004", keyword: "大便溏薄", weight: 8 },
        { syndromeId: "syn_116", keyword: "大便溏薄", weight: 5 },
        { syndromeId: "syn_137", keyword: "大便溏薄", weight: 5 }
    ],
    "大便溏薄清稀": [
        { syndromeId: "syn_031", keyword: "大便溏薄清稀", weight: 10 }
    ],
    "大便溏泄不爽": [
        { syndromeId: "syn_033", keyword: "大便溏泄不爽", weight: 10 }
    ],
    "大汗出": [
        { syndromeId: "syn_090", keyword: "大汗出", weight: 8 }
    ],
    "大量出血": [
        { syndromeId: "syn_117", keyword: "大量出血", weight: 7 },
        { syndromeId: "syn_121", keyword: "大量出血", weight: 7 }
    ],
    "带下黄臭": [
        { syndromeId: "syn_024", keyword: "带下黄臭", weight: 8 }
    ],
    "带下量多": [
        { syndromeId: "syn_134", keyword: "带下量多", weight: 10 }
    ],
    "带下量多色白": [
        { syndromeId: "syn_135", keyword: "带下量多色白", weight: 10 }
    ],
    "带下清稀量多": [
        { syndromeId: "syn_031", keyword: "带下清稀量多", weight: 8 }
    ],
    "得热痛减": [
        { syndromeId: "syn_118", keyword: "得热痛减", weight: 8 }
    ],
    "得温痛减": [
        { syndromeId: "syn_120", keyword: "得温痛减", weight: 8 }
    ],
    "得温则减": [
        { syndromeId: "syn_106", keyword: "得温则减", weight: 7 },
        { syndromeId: "syn_131", keyword: "得温则减", weight: 7 }
    ],
    "动作迟缓": [
        { syndromeId: "syn_052", keyword: "动作迟缓", weight: 8 }
    ],
    "多梦": [
        { syndromeId: "syn_010", keyword: "多梦", weight: 10 },
        { syndromeId: "syn_011", keyword: "多梦", weight: 9 }
    ],
    "呃逆": [
        { syndromeId: "syn_110", keyword: "呃逆", weight: 8 }
    ],
    "恶风": [
        { syndromeId: "syn_080", keyword: "恶风", weight: 10 }
    ],
    "恶寒发热": [
        { syndromeId: "syn_042", keyword: "恶寒发热", weight: 8 }
    ],
    "恶寒轻": [
        { syndromeId: "syn_002", keyword: "恶寒轻", weight: 8 }
    ],
    "恶寒重": [
        { syndromeId: "syn_001", keyword: "恶寒重", weight: 10 }
    ],
    "恶心": [
        { syndromeId: "syn_122", keyword: "恶心", weight: 8 }
    ],
    "恶心呕吐": [
        { syndromeId: "syn_024", keyword: "恶心呕吐", weight: 7 },
        { syndromeId: "syn_074", keyword: "恶心呕吐", weight: 7 }
    ],
    "耳鸣耳聋": [
        { syndromeId: "syn_021", keyword: "耳鸣耳聋", weight: 7 },
        { syndromeId: "syn_052", keyword: "耳鸣耳聋", weight: 7 }
    ],
    "耳鸣健忘": [
        { syndromeId: "syn_114", keyword: "耳鸣健忘", weight: 8 }
    ],
    "发热": [
        { syndromeId: "syn_080", keyword: "发热", weight: 7 },
        { syndromeId: "syn_119", keyword: "发热", weight: 5 },
        { syndromeId: "syn_139", keyword: "发热", weight: 5 },
        { syndromeId: "syn_140", keyword: "发热", weight: 5 }
    ],
    "发热恶寒": [
        { syndromeId: "syn_128", keyword: "发热恶寒", weight: 8 }
    ],
    "发热口渴": [
        { syndromeId: "syn_043", keyword: "发热口渴", weight: 10 }
    ],
    "发热轻": [
        { syndromeId: "syn_001", keyword: "发热轻", weight: 8 }
    ],
    "发热重": [
        { syndromeId: "syn_002", keyword: "发热重", weight: 10 }
    ],
    "发脱齿摇": [
        { syndromeId: "syn_052", keyword: "发脱齿摇", weight: 10 }
    ],
    "烦渴": [
        { syndromeId: "syn_090", keyword: "烦渴", weight: 10 }
    ],
    "烦躁": [
        { syndromeId: "syn_003", keyword: "烦躁", weight: 9 }
    ],
    "烦躁不安": [
        { syndromeId: "syn_043", keyword: "烦躁不安", weight: 8 }
    ],
    "烦躁不寐": [
        { syndromeId: "syn_112", keyword: "烦躁不寐", weight: 8 }
    ],
    "烦躁易怒": [
        { syndromeId: "syn_110", keyword: "烦躁易怒", weight: 8 }
    ],
    "泛恶欲吐": [
        { syndromeId: "syn_032", keyword: "泛恶欲吐", weight: 7 },
        { syndromeId: "syn_112", keyword: "泛恶欲吐", weight: 7 }
    ],
    "浮肿": [
        { syndromeId: "syn_030", keyword: "浮肿", weight: 9 },
        { syndromeId: "syn_115", keyword: "浮肿", weight: 7 }
    ],
    "妇女月经量少色淡": [
        { syndromeId: "syn_071", keyword: "妇女月经量少色淡", weight: 8 }
    ],
    "腹部积块": [
        { syndromeId: "syn_130", keyword: "腹部积块", weight: 10 }
    ],
    "腹痛便溏": [
        { syndromeId: "syn_032", keyword: "腹痛便溏", weight: 8 }
    ],
    "腹痛喜温喜按": [
        { syndromeId: "syn_031", keyword: "腹痛喜温喜按", weight: 10 }
    ],
    "腹胀": [
        { syndromeId: "syn_030", keyword: "腹胀", weight: 10 },
        { syndromeId: "syn_107", keyword: "腹胀", weight: 6 },
        { syndromeId: "syn_115", keyword: "腹胀", weight: 6 }
    ],
    "腹胀纳少": [
        { syndromeId: "syn_031", keyword: "腹胀纳少", weight: 8 }
    ],
    "干咳少痰": [
        { syndromeId: "syn_142", keyword: "干咳少痰", weight: 10 }
    ],
    "干咳无痰": [
        { syndromeId: "syn_041", keyword: "干咳无痰", weight: 10 }
    ],
    "干呕": [
        { syndromeId: "syn_080", keyword: "干呕", weight: 8 }
    ],
    "干呕呃逆": [
        { syndromeId: "syn_060", keyword: "干呕呃逆", weight: 8 }
    ],
    "高热": [
        { syndromeId: "syn_003", keyword: "高热", weight: 10 }
    ],
    "高热不退": [
        { syndromeId: "syn_136", keyword: "高热不退", weight: 10 }
    ],
    "固定不移": [
        { syndromeId: "syn_130", keyword: "固定不移", weight: 10 }
    ],
    "关节红肿热痛": [
        { syndromeId: "syn_119", keyword: "关节红肿热痛", weight: 10 }
    ],
    "咳逆倚息": [
        { syndromeId: "syn_124", keyword: "咳逆倚息", weight: 8 }
    ],
    "咳嗽": [
        { syndromeId: "syn_043", keyword: "咳嗽", weight: 9 },
        { syndromeId: "syn_001", keyword: "咳嗽", weight: 7 },
        { syndromeId: "syn_002", keyword: "咳嗽", weight: 7 }
    ],
    "咳嗽气粗": [
        { syndromeId: "syn_139", keyword: "咳嗽气粗", weight: 10 }
    ],
    "咳嗽气短": [
        { syndromeId: "syn_127", keyword: "咳嗽气短", weight: 8 }
    ],
    "咳嗽声重": [
        { syndromeId: "syn_042", keyword: "咳嗽声重", weight: 10 }
    ],
    "咳嗽痰多": [
        { syndromeId: "syn_074", keyword: "咳嗽痰多", weight: 10 }
    ],
    "咳嗽无力": [
        { syndromeId: "syn_040", keyword: "咳嗽无力", weight: 10 }
    ],
    "汗出": [
        { syndromeId: "syn_080", keyword: "汗出", weight: 10 }
    ],
    "汗出不解": [
        { syndromeId: "syn_033", keyword: "汗出不解", weight: 7 },
        { syndromeId: "syn_119", keyword: "汗出不解", weight: 7 }
    ],
    "喉间痰鸣": [
        { syndromeId: "syn_136", keyword: "喉间痰鸣", weight: 8 }
    ],
    "喉中痰鸣": [
        { syndromeId: "syn_123", keyword: "喉中痰鸣", weight: 10 }
    ],
    "昏蒙": [
        { syndromeId: "syn_123", keyword: "昏蒙", weight: 8 }
    ],
    "活动后加重": [
        { syndromeId: "syn_100", keyword: "活动后加重", weight: 8 }
    ],
    "活动时诸症加剧": [
        { syndromeId: "syn_070", keyword: "活动时诸症加剧", weight: 8 }
    ],
    "或淋漓不尽": [
        { syndromeId: "syn_133", keyword: "或淋漓不尽", weight: 8 }
    ],
    "或脓血腥臭": [
        { syndromeId: "syn_043", keyword: "或脓血腥臭", weight: 8 }
    ],
    "或身目发黄": [
        { syndromeId: "syn_024", keyword: "或身目发黄", weight: 8 }
    ],
    "或痰少而黏": [
        { syndromeId: "syn_041", keyword: "或痰少而黏", weight: 8 }
    ],
    "或痰中带血": [
        { syndromeId: "syn_142", keyword: "或痰中带血", weight: 8 }
    ],
    "或肢体浮肿": [
        { syndromeId: "syn_031", keyword: "或肢体浮肿", weight: 8 }
    ],
    "饥不欲食": [
        { syndromeId: "syn_060", keyword: "饥不欲食", weight: 10 }
    ],
    "肌肤甲错": [
        { syndromeId: "syn_072", keyword: "肌肤甲错", weight: 8 }
    ],
    "肌衄": [
        { syndromeId: "syn_104", keyword: "肌衄", weight: 8 }
    ],
    "急躁易怒": [
        { syndromeId: "syn_021", keyword: "急躁易怒", weight: 10 },
        { syndromeId: "syn_022", keyword: "急躁易怒", weight: 9 }
    ],
    "健忘": [
        { syndromeId: "syn_010", keyword: "健忘", weight: 8 }
    ],
    "健忘恍惚": [
        { syndromeId: "syn_052", keyword: "健忘恍惚", weight: 8 }
    ],
    "筋脉拘急": [
        { syndromeId: "syn_023", keyword: "筋脉拘急", weight: 8 }
    ],
    "筋惕肉瞤": [
        { syndromeId: "syn_125", keyword: "筋惕肉瞤", weight: 10 }
    ],
    "经前或经期小腹冷痛": [
        { syndromeId: "syn_131", keyword: "经前或经期小腹冷痛", weight: 10 }
    ],
    "经色紫暗有块": [
        { syndromeId: "syn_131", keyword: "经色紫暗有块", weight: 10 },
        { syndromeId: "syn_130", keyword: "经色紫暗有块", weight: 7 }
    ],
    "经血非时而下": [
        { syndromeId: "syn_133", keyword: "经血非时而下", weight: 10 }
    ],
    "经血量少": [
        { syndromeId: "syn_131", keyword: "经血量少", weight: 8 }
    ],
    "经血量少色淡": [
        { syndromeId: "syn_132", keyword: "经血量少色淡", weight: 10 }
    ],
    "经质清稀": [
        { syndromeId: "syn_132", keyword: "经质清稀", weight: 8 }
    ],
    "惊悸不宁": [
        { syndromeId: "syn_112", keyword: "惊悸不宁", weight: 10 }
    ],
    "久泻不止": [
        { syndromeId: "syn_137", keyword: "久泻不止", weight: 10 }
    ],
    "久泻久痢": [
        { syndromeId: "syn_105", keyword: "久泻久痢", weight: 7 },
        { syndromeId: "syn_115", keyword: "久泻久痢", weight: 7 }
    ],
    "局部红肿热痛": [
        { syndromeId: "syn_128", keyword: "局部红肿热痛", weight: 10 }
    ],
    "局部灼热": [
        { syndromeId: "syn_129", keyword: "局部灼热", weight: 8 }
    ],
    "渴喜冷饮": [
        { syndromeId: "syn_061", keyword: "渴喜冷饮", weight: 8 }
    ],
    "口不渴": [
        { syndromeId: "syn_001", keyword: "口不渴", weight: 8 }
    ],
    "口臭": [
        { syndromeId: "syn_061", keyword: "口臭", weight: 10 }
    ],
    "口淡不渴": [
        { syndromeId: "syn_004", keyword: "口淡不渴", weight: 7 },
        { syndromeId: "syn_106", keyword: "口淡不渴", weight: 7 }
    ],
    "口干": [
        { syndromeId: "syn_107", keyword: "口干", weight: 8 }
    ],
    "口干咽燥": [
        { syndromeId: "syn_111", keyword: "口干咽燥", weight: 7 },
        { syndromeId: "syn_114", keyword: "口干咽燥", weight: 7 }
    ],
    "口渴": [
        { syndromeId: "syn_002", keyword: "口渴", weight: 5 },
        { syndromeId: "syn_119", keyword: "口渴", weight: 5 },
        { syndromeId: "syn_128", keyword: "口渴", weight: 5 },
        { syndromeId: "syn_139", keyword: "口渴", weight: 5 }
    ],
    "口渴喜冷饮": [
        { syndromeId: "syn_003", keyword: "口渴喜冷饮", weight: 10 }
    ],
    "口渴欲饮": [
        { syndromeId: "syn_075", keyword: "口渴欲饮", weight: 8 }
    ],
    "口苦": [
        { syndromeId: "syn_024", keyword: "口苦", weight: 10 },
        { syndromeId: "syn_081", keyword: "口苦", weight: 10 },
        { syndromeId: "syn_112", keyword: "口苦", weight: 10 },
        { syndromeId: "syn_102", keyword: "口苦", weight: 5 },
        { syndromeId: "syn_129", keyword: "口苦", weight: 5 },
        { syndromeId: "syn_141", keyword: "口苦", weight: 5 }
    ],
    "口苦口黏": [
        { syndromeId: "syn_122", keyword: "口苦口黏", weight: 10 }
    ],
    "口苦咽干": [
        { syndromeId: "syn_021", keyword: "口苦咽干", weight: 7 },
        { syndromeId: "syn_134", keyword: "口苦咽干", weight: 7 }
    ],
    "口腻纳呆": [
        { syndromeId: "syn_032", keyword: "口腻纳呆", weight: 10 }
    ],
    "口黏而甜": [
        { syndromeId: "syn_033", keyword: "口黏而甜", weight: 10 }
    ],
    "口舌生疮": [
        { syndromeId: "syn_126", keyword: "口舌生疮", weight: 10 }
    ],
    "口燥咽干": [
        { syndromeId: "syn_041", keyword: "口燥咽干", weight: 10 },
        { syndromeId: "syn_060", keyword: "口燥咽干", weight: 10 },
        { syndromeId: "syn_075", keyword: "口燥咽干", weight: 10 },
        { syndromeId: "syn_011", keyword: "口燥咽干", weight: 5 }
    ],
    "口中黏腻": [
        { syndromeId: "syn_074", keyword: "口中黏腻", weight: 8 }
    ],
    "两目干涩": [
        { syndromeId: "syn_111", keyword: "两目干涩", weight: 10 }
    ],
    "量多如注": [
        { syndromeId: "syn_133", keyword: "量多如注", weight: 8 }
    ],
    "流黄稠涕": [
        { syndromeId: "syn_140", keyword: "流黄稠涕", weight: 10 }
    ],
    "流清涕": [
        { syndromeId: "syn_001", keyword: "流清涕", weight: 8 }
    ],
    "流浊涕": [
        { syndromeId: "syn_002", keyword: "流浊涕", weight: 8 }
    ],
    "脉沉迟涩": [
        { syndromeId: "syn_120", keyword: "脉沉迟涩", weight: 8 }
    ],
    "脉沉迟无力": [
        { syndromeId: "syn_101", keyword: "脉沉迟无力", weight: 7 },
        { syndromeId: "syn_115", keyword: "脉沉迟无力", weight: 7 }
    ],
    "脉沉紧": [
        { syndromeId: "syn_131", keyword: "脉沉紧", weight: 8 }
    ],
    "脉沉紧或弦迟": [
        { syndromeId: "syn_106", keyword: "脉沉紧或弦迟", weight: 8 }
    ],
    "脉沉弱": [
        { syndromeId: "syn_133", keyword: "脉沉弱", weight: 8 }
    ],
    "脉沉细弱": [
        { syndromeId: "syn_113", keyword: "脉沉细弱", weight: 8 }
    ],
    "脉沉弦": [
        { syndromeId: "syn_124", keyword: "脉沉弦", weight: 8 }
    ],
    "脉浮缓": [
        { syndromeId: "syn_080", keyword: "脉浮缓", weight: 8 }
    ],
    "脉浮数": [
        { syndromeId: "syn_140", keyword: "脉浮数", weight: 8 }
    ],
    "脉洪大": [
        { syndromeId: "syn_090", keyword: "脉洪大", weight: 8 }
    ],
    "脉滑": [
        { syndromeId: "syn_123", keyword: "脉滑", weight: 7 },
        { syndromeId: "syn_138", keyword: "脉滑", weight: 7 }
    ],
    "脉滑数": [
        { syndromeId: "syn_102", keyword: "脉滑数", weight: 5 },
        { syndromeId: "syn_119", keyword: "脉滑数", weight: 5 },
        { syndromeId: "syn_129", keyword: "脉滑数", weight: 5 },
        { syndromeId: "syn_134", keyword: "脉滑数", weight: 5 },
        { syndromeId: "syn_136", keyword: "脉滑数", weight: 5 },
        { syndromeId: "syn_139", keyword: "脉滑数", weight: 5 }
    ],
    "脉缓弱": [
        { syndromeId: "syn_135", keyword: "脉缓弱", weight: 8 }
    ],
    "脉濡数": [
        { syndromeId: "syn_122", keyword: "脉濡数", weight: 8 }
    ],
    "脉弱": [
        { syndromeId: "syn_137", keyword: "脉弱", weight: 8 }
    ],
    "脉涩": [
        { syndromeId: "syn_130", keyword: "脉涩", weight: 8 }
    ],
    "脉涩或结代": [
        { syndromeId: "syn_103", keyword: "脉涩或结代", weight: 8 }
    ],
    "脉数": [
        { syndromeId: "syn_117", keyword: "脉数", weight: 7 },
        { syndromeId: "syn_126", keyword: "脉数", weight: 7 }
    ],
    "脉数有力": [
        { syndromeId: "syn_128", keyword: "脉数有力", weight: 8 }
    ],
    "脉细弱": [
        { syndromeId: "syn_104", keyword: "脉细弱", weight: 5 },
        { syndromeId: "syn_116", keyword: "脉细弱", weight: 5 },
        { syndromeId: "syn_121", keyword: "脉细弱", weight: 5 },
        { syndromeId: "syn_132", keyword: "脉细弱", weight: 5 }
    ],
    "脉细涩": [
        { syndromeId: "syn_107", keyword: "脉细涩", weight: 8 }
    ],
    "脉细数": [
        { syndromeId: "syn_114", keyword: "脉细数", weight: 7 },
        { syndromeId: "syn_142", keyword: "脉细数", weight: 7 }
    ],
    "脉细数无力": [
        { syndromeId: "syn_125", keyword: "脉细数无力", weight: 8 }
    ],
    "脉弦": [
        { syndromeId: "syn_110", keyword: "脉弦", weight: 8 }
    ],
    "脉弦滑": [
        { syndromeId: "syn_112", keyword: "脉弦滑", weight: 8 }
    ],
    "脉弦紧": [
        { syndromeId: "syn_118", keyword: "脉弦紧", weight: 8 }
    ],
    "脉弦数": [
        { syndromeId: "syn_141", keyword: "脉弦数", weight: 8 }
    ],
    "脉弦细数": [
        { syndromeId: "syn_111", keyword: "脉弦细数", weight: 8 }
    ],
    "脉虚弱": [
        { syndromeId: "syn_105", keyword: "脉虚弱", weight: 7 },
        { syndromeId: "syn_127", keyword: "脉虚弱", weight: 7 }
    ],
    "脉虚无力": [
        { syndromeId: "syn_100", keyword: "脉虚无力", weight: 8 }
    ],
    "面赤": [
        { syndromeId: "syn_090", keyword: "面赤", weight: 8 }
    ],
    "面赤口渴": [
        { syndromeId: "syn_126", keyword: "面赤口渴", weight: 8 }
    ],
    "面红目赤": [
        { syndromeId: "syn_021", keyword: "面红目赤", weight: 10 },
        { syndromeId: "syn_003", keyword: "面红目赤", weight: 6 },
        { syndromeId: "syn_022", keyword: "面红目赤", weight: 6 }
    ],
    "面色苍白": [
        { syndromeId: "syn_004", keyword: "面色苍白", weight: 10 },
        { syndromeId: "syn_132", keyword: "面色苍白", weight: 7 }
    ],
    "面色苍白或黧黑": [
        { syndromeId: "syn_051", keyword: "面色苍白或黧黑", weight: 8 }
    ],
    "面色淡白": [
        { syndromeId: "syn_040", keyword: "面色淡白", weight: 5 },
        { syndromeId: "syn_070", keyword: "面色淡白", weight: 5 },
        { syndromeId: "syn_100", keyword: "面色淡白", weight: 5 },
        { syndromeId: "syn_121", keyword: "面色淡白", weight: 5 },
        { syndromeId: "syn_127", keyword: "面色淡白", weight: 5 }
    ],
    "面色淡白或萎黄": [
        { syndromeId: "syn_071", keyword: "面色淡白或萎黄", weight: 10 },
        { syndromeId: "syn_010", keyword: "面色淡白或萎黄", weight: 6 },
        { syndromeId: "syn_073", keyword: "面色淡白或萎黄", weight: 6 }
    ],
    "面色晄白": [
        { syndromeId: "syn_135", keyword: "面色晄白", weight: 8 }
    ],
    "面色晄白或青紫": [
        { syndromeId: "syn_101", keyword: "面色晄白或青紫", weight: 8 }
    ],
    "面色晦暗": [
        { syndromeId: "syn_072", keyword: "面色晦暗", weight: 7 },
        { syndromeId: "syn_130", keyword: "面色晦暗", weight: 7 }
    ],
    "面色晦黄": [
        { syndromeId: "syn_032", keyword: "面色晦黄", weight: 8 }
    ],
    "面色青白": [
        { syndromeId: "syn_131", keyword: "面色青白", weight: 8 }
    ],
    "面色萎黄": [
        { syndromeId: "syn_030", keyword: "面色萎黄", weight: 10 },
        { syndromeId: "syn_104", keyword: "面色萎黄", weight: 5 },
        { syndromeId: "syn_116", keyword: "面色萎黄", weight: 5 },
        { syndromeId: "syn_133", keyword: "面色萎黄", weight: 5 },
        { syndromeId: "syn_137", keyword: "面色萎黄", weight: 5 }
    ],
    "面色无华": [
        { syndromeId: "syn_023", keyword: "面色无华", weight: 8 }
    ],
    "默默不欲饮食": [
        { syndromeId: "syn_081", keyword: "默默不欲饮食", weight: 8 }
    ],
    "目眵多": [
        { syndromeId: "syn_141", keyword: "目眵多", weight: 10 }
    ],
    "目赤肿痛": [
        { syndromeId: "syn_141", keyword: "目赤肿痛", weight: 10 }
    ],
    "目睛上视": [
        { syndromeId: "syn_136", keyword: "目睛上视", weight: 8 }
    ],
    "目眩": [
        { syndromeId: "syn_081", keyword: "目眩", weight: 8 }
    ],
    "纳呆": [
        { syndromeId: "syn_024", keyword: "纳呆", weight: 7 },
        { syndromeId: "syn_122", keyword: "纳呆", weight: 7 }
    ],
    "纳呆呕恶": [
        { syndromeId: "syn_033", keyword: "纳呆呕恶", weight: 8 }
    ],
    "纳少便溏": [
        { syndromeId: "syn_135", keyword: "纳少便溏", weight: 10 }
    ],
    "男子滑精早泄": [
        { syndromeId: "syn_053", keyword: "男子滑精早泄", weight: 8 }
    ],
    "男子阳痿": [
        { syndromeId: "syn_051", keyword: "男子阳痿", weight: 8 }
    ],
    "男子遗精": [
        { syndromeId: "syn_050", keyword: "男子遗精", weight: 8 }
    ],
    "尿后余沥不尽": [
        { syndromeId: "syn_053", keyword: "尿后余沥不尽", weight: 8 }
    ],
    "尿血": [
        { syndromeId: "syn_104", keyword: "尿血", weight: 6 },
        { syndromeId: "syn_117", keyword: "尿血", weight: 6 },
        { syndromeId: "syn_121", keyword: "尿血", weight: 6 }
    ],
    "女子带下清稀": [
        { syndromeId: "syn_053", keyword: "女子带下清稀", weight: 8 }
    ],
    "女子宫寒不孕": [
        { syndromeId: "syn_051", keyword: "女子宫寒不孕", weight: 8 }
    ],
    "女子经少经闭": [
        { syndromeId: "syn_050", keyword: "女子经少经闭", weight: 8 }
    ],
    "衄血": [
        { syndromeId: "syn_117", keyword: "衄血", weight: 7 },
        { syndromeId: "syn_121", keyword: "衄血", weight: 7 }
    ],
    "呕吐清水": [
        { syndromeId: "syn_106", keyword: "呕吐清水", weight: 8 }
    ],
    "呕吐酸腐": [
        { syndromeId: "syn_138", keyword: "呕吐酸腐", weight: 8 }
    ],
    "皮肤干枯": [
        { syndromeId: "syn_075", keyword: "皮肤干枯", weight: 8 }
    ],
    "皮肤湿疹": [
        { syndromeId: "syn_129", keyword: "皮肤湿疹", weight: 10 }
    ],
    "皮肤紫暗": [
        { syndromeId: "syn_120", keyword: "皮肤紫暗", weight: 8 }
    ],
    "气喘": [
        { syndromeId: "syn_043", keyword: "气喘", weight: 10 }
    ],
    "气短": [
        { syndromeId: "syn_100", keyword: "气短", weight: 10 }
    ],
    "气短而喘": [
        { syndromeId: "syn_040", keyword: "气短而喘", weight: 8 }
    ],
    "气短懒言": [
        { syndromeId: "syn_121", keyword: "气短懒言", weight: 10 },
        { syndromeId: "syn_133", keyword: "气短懒言", weight: 7 }
    ],
    "气味腥臭": [
        { syndromeId: "syn_134", keyword: "气味腥臭", weight: 8 }
    ],
    "前额头痛": [
        { syndromeId: "syn_140", keyword: "前额头痛", weight: 10 }
    ],
    "清稀无臭": [
        { syndromeId: "syn_135", keyword: "清稀无臭", weight: 8 }
    ],
    "情绪抑郁": [
        { syndromeId: "syn_020", keyword: "情绪抑郁", weight: 10 }
    ],
    "情志不遂则加重": [
        { syndromeId: "syn_110", keyword: "情志不遂则加重", weight: 8 }
    ],
    "屈伸不利": [
        { syndromeId: "syn_118", keyword: "屈伸不利", weight: 7 },
        { syndromeId: "syn_119", keyword: "屈伸不利", weight: 7 }
    ],
    "颧红": [
        { syndromeId: "syn_041", keyword: "颧红", weight: 8 }
    ],
    "颧红盗汗": [
        { syndromeId: "syn_114", keyword: "颧红盗汗", weight: 8 }
    ],
    "乳房胀痛": [
        { syndromeId: "syn_020", keyword: "乳房胀痛", weight: 8 }
    ],
    "色淡质稀": [
        { syndromeId: "syn_133", keyword: "色淡质稀", weight: 10 }
    ],
    "色黄质稠": [
        { syndromeId: "syn_134", keyword: "色黄质稠", weight: 10 }
    ],
    "善太息": [
        { syndromeId: "syn_020", keyword: "善太息", weight: 8 }
    ],
    "少气懒言": [
        { syndromeId: "syn_070", keyword: "少气懒言", weight: 10 },
        { syndromeId: "syn_073", keyword: "少气懒言", weight: 10 },
        { syndromeId: "syn_030", keyword: "少气懒言", weight: 5 },
        { syndromeId: "syn_105", keyword: "少气懒言", weight: 5 }
    ],
    "舌暗苔白": [
        { syndromeId: "syn_131", keyword: "舌暗苔白", weight: 8 }
    ],
    "舌淡": [
        { syndromeId: "syn_100", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_104", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_105", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_106", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_116", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_121", keyword: "舌淡", weight: 5 },
        { syndromeId: "syn_127", keyword: "舌淡", weight: 5 }
    ],
    "舌淡红": [
        { syndromeId: "syn_113", keyword: "舌淡红", weight: 8 }
    ],
    "舌淡胖": [
        { syndromeId: "syn_115", keyword: "舌淡胖", weight: 6 },
        { syndromeId: "syn_123", keyword: "舌淡胖", weight: 6 },
        { syndromeId: "syn_124", keyword: "舌淡胖", weight: 6 }
    ],
    "舌淡胖或紫暗": [
        { syndromeId: "syn_101", keyword: "舌淡胖或紫暗", weight: 8 }
    ],
    "舌淡苔白": [
        { syndromeId: "syn_070", keyword: "舌淡苔白", weight: 5 },
        { syndromeId: "syn_133", keyword: "舌淡苔白", weight: 5 },
        { syndromeId: "syn_135", keyword: "舌淡苔白", weight: 5 },
        { syndromeId: "syn_137", keyword: "舌淡苔白", weight: 5 }
    ],
    "舌淡苔薄": [
        { syndromeId: "syn_132", keyword: "舌淡苔薄", weight: 8 }
    ],
    "舌红": [
        { syndromeId: "syn_102", keyword: "舌红", weight: 6 },
        { syndromeId: "syn_119", keyword: "舌红", weight: 6 },
        { syndromeId: "syn_122", keyword: "舌红", weight: 6 }
    ],
    "舌红少津": [
        { syndromeId: "syn_011", keyword: "舌红少津", weight: 5 },
        { syndromeId: "syn_060", keyword: "舌红少津", weight: 5 },
        { syndromeId: "syn_107", keyword: "舌红少津", weight: 5 },
        { syndromeId: "syn_111", keyword: "舌红少津", weight: 5 }
    ],
    "舌红少苔": [
        { syndromeId: "syn_114", keyword: "舌红少苔", weight: 6 },
        { syndromeId: "syn_125", keyword: "舌红少苔", weight: 6 },
        { syndromeId: "syn_142", keyword: "舌红少苔", weight: 6 }
    ],
    "舌红苔薄黄": [
        { syndromeId: "syn_140", keyword: "舌红苔薄黄", weight: 7 },
        { syndromeId: "syn_141", keyword: "舌红苔薄黄", weight: 7 }
    ],
    "舌红苔黄": [
        { syndromeId: "syn_003", keyword: "舌红苔黄", weight: 5 },
        { syndromeId: "syn_090", keyword: "舌红苔黄", weight: 5 },
        { syndromeId: "syn_128", keyword: "舌红苔黄", weight: 5 },
        { syndromeId: "syn_139", keyword: "舌红苔黄", weight: 5 }
    ],
    "舌红苔黄腻": [
        { syndromeId: "syn_129", keyword: "舌红苔黄腻", weight: 6 },
        { syndromeId: "syn_134", keyword: "舌红苔黄腻", weight: 6 },
        { syndromeId: "syn_136", keyword: "舌红苔黄腻", weight: 6 }
    ],
    "舌尖红": [
        { syndromeId: "syn_126", keyword: "舌尖红", weight: 8 }
    ],
    "舌绛": [
        { syndromeId: "syn_117", keyword: "舌绛", weight: 8 }
    ],
    "舌苔薄白": [
        { syndromeId: "syn_118", keyword: "舌苔薄白", weight: 8 }
    ],
    "舌苔厚腻": [
        { syndromeId: "syn_138", keyword: "舌苔厚腻", weight: 8 }
    ],
    "舌苔黄腻": [
        { syndromeId: "syn_112", keyword: "舌苔黄腻", weight: 8 }
    ],
    "舌质紫暗": [
        { syndromeId: "syn_120", keyword: "舌质紫暗", weight: 8 }
    ],
    "舌质紫暗或有瘀斑": [
        { syndromeId: "syn_072", keyword: "舌质紫暗或有瘀斑", weight: 7 },
        { syndromeId: "syn_103", keyword: "舌质紫暗或有瘀斑", weight: 7 }
    ],
    "舌紫暗有瘀斑": [
        { syndromeId: "syn_130", keyword: "舌紫暗有瘀斑", weight: 8 }
    ],
    "身热不扬": [
        { syndromeId: "syn_033", keyword: "身热不扬", weight: 7 },
        { syndromeId: "syn_122", keyword: "身热不扬", weight: 7 }
    ],
    "身热夜甚": [
        { syndromeId: "syn_117", keyword: "身热夜甚", weight: 10 }
    ],
    "身痛": [
        { syndromeId: "syn_001", keyword: "身痛", weight: 8 }
    ],
    "神疲乏力": [
        { syndromeId: "syn_070", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_073", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_104", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_105", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_121", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_127", keyword: "神疲乏力", weight: 10 },
        { syndromeId: "syn_004", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_030", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_040", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_051", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_053", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_100", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_101", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_116", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_132", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_135", keyword: "神疲乏力", weight: 5 },
        { syndromeId: "syn_137", keyword: "神疲乏力", weight: 5 }
    ],
    "神疲肢倦": [
        { syndromeId: "syn_133", keyword: "神疲肢倦", weight: 8 }
    ],
    "神识痴呆": [
        { syndromeId: "syn_123", keyword: "神识痴呆", weight: 10 }
    ],
    "神志昏迷": [
        { syndromeId: "syn_136", keyword: "神志昏迷", weight: 8 }
    ],
    "声低懒言": [
        { syndromeId: "syn_040", keyword: "声低懒言", weight: 8 }
    ],
    "声音嘶哑": [
        { syndromeId: "syn_041", keyword: "声音嘶哑", weight: 8 }
    ],
    "失眠": [
        { syndromeId: "syn_010", keyword: "失眠", weight: 10 },
        { syndromeId: "syn_011", keyword: "失眠", weight: 10 },
        { syndromeId: "syn_102", keyword: "失眠", weight: 10 }
    ],
    "失眠多梦": [
        { syndromeId: "syn_116", keyword: "失眠多梦", weight: 10 },
        { syndromeId: "syn_021", keyword: "失眠多梦", weight: 5 },
        { syndromeId: "syn_022", keyword: "失眠多梦", weight: 5 },
        { syndromeId: "syn_023", keyword: "失眠多梦", weight: 5 },
        { syndromeId: "syn_050", keyword: "失眠多梦", weight: 5 }
    ],
    "失眠健忘": [
        { syndromeId: "syn_113", keyword: "失眠健忘", weight: 8 }
    ],
    "时发时止": [
        { syndromeId: "syn_103", keyword: "时发时止", weight: 8 }
    ],
    "食后即泻": [
        { syndromeId: "syn_137", keyword: "食后即泻", weight: 10 }
    ],
    "食后益甚": [
        { syndromeId: "syn_105", keyword: "食后益甚", weight: 8 }
    ],
    "食后胀甚": [
        { syndromeId: "syn_030", keyword: "食后胀甚", weight: 10 }
    ],
    "食少便溏": [
        { syndromeId: "syn_104", keyword: "食少便溏", weight: 10 }
    ],
    "食少腹胀": [
        { syndromeId: "syn_116", keyword: "食少腹胀", weight: 10 },
        { syndromeId: "syn_127", keyword: "食少腹胀", weight: 10 }
    ],
    "食少纳呆": [
        { syndromeId: "syn_115", keyword: "食少纳呆", weight: 8 }
    ],
    "食欲不振": [
        { syndromeId: "syn_030", keyword: "食欲不振", weight: 10 },
        { syndromeId: "syn_137", keyword: "食欲不振", weight: 7 }
    ],
    "矢气酸臭": [
        { syndromeId: "syn_062", keyword: "矢气酸臭", weight: 8 }
    ],
    "视物模糊": [
        { syndromeId: "syn_023", keyword: "视物模糊", weight: 10 },
        { syndromeId: "syn_111", keyword: "视物模糊", weight: 7 }
    ],
    "手足发麻": [
        { syndromeId: "syn_071", keyword: "手足发麻", weight: 8 }
    ],
    "手足蠕动": [
        { syndromeId: "syn_125", keyword: "手足蠕动", weight: 10 }
    ],
    "数日一行": [
        { syndromeId: "syn_107", keyword: "数日一行", weight: 8 }
    ],
    "四肢不温": [
        { syndromeId: "syn_004", keyword: "四肢不温", weight: 10 },
        { syndromeId: "syn_031", keyword: "四肢不温", weight: 8 },
        { syndromeId: "syn_135", keyword: "四肢不温", weight: 6 }
    ],
    "四肢抽动": [
        { syndromeId: "syn_136", keyword: "四肢抽动", weight: 8 }
    ],
    "四肢厥冷": [
        { syndromeId: "syn_120", keyword: "四肢厥冷", weight: 8 }
    ],
    "胎动易滑": [
        { syndromeId: "syn_053", keyword: "胎动易滑", weight: 8 }
    ],
    "苔白": [
        { syndromeId: "syn_103", keyword: "苔白", weight: 5 },
        { syndromeId: "syn_105", keyword: "苔白", weight: 5 },
        { syndromeId: "syn_120", keyword: "苔白", weight: 5 },
        { syndromeId: "syn_127", keyword: "苔白", weight: 5 }
    ],
    "苔白滑": [
        { syndromeId: "syn_106", keyword: "苔白滑", weight: 6 },
        { syndromeId: "syn_115", keyword: "苔白滑", weight: 6 },
        { syndromeId: "syn_124", keyword: "苔白滑", weight: 6 }
    ],
    "苔白腻": [
        { syndromeId: "syn_123", keyword: "苔白腻", weight: 8 }
    ],
    "苔薄白": [
        { syndromeId: "syn_100", keyword: "苔薄白", weight: 7 },
        { syndromeId: "syn_116", keyword: "苔薄白", weight: 7 }
    ],
    "苔薄白或薄黄": [
        { syndromeId: "syn_110", keyword: "苔薄白或薄黄", weight: 8 }
    ],
    "苔薄少": [
        { syndromeId: "syn_113", keyword: "苔薄少", weight: 8 }
    ],
    "苔黄": [
        { syndromeId: "syn_126", keyword: "苔黄", weight: 8 }
    ],
    "苔黄腻": [
        { syndromeId: "syn_102", keyword: "苔黄腻", weight: 6 },
        { syndromeId: "syn_119", keyword: "苔黄腻", weight: 6 },
        { syndromeId: "syn_122", keyword: "苔黄腻", weight: 6 }
    ],
    "苔黄燥或焦黑": [
        { syndromeId: "syn_107", keyword: "苔黄燥或焦黑", weight: 8 }
    ],
    "痰白清稀": [
        { syndromeId: "syn_001", keyword: "痰白清稀", weight: 6 },
        { syndromeId: "syn_042", keyword: "痰白清稀", weight: 6 },
        { syndromeId: "syn_127", keyword: "痰白清稀", weight: 6 }
    ],
    "痰多黄稠": [
        { syndromeId: "syn_102", keyword: "痰多黄稠", weight: 10 }
    ],
    "痰多清稀": [
        { syndromeId: "syn_124", keyword: "痰多清稀", weight: 8 }
    ],
    "痰黄稠": [
        { syndromeId: "syn_043", keyword: "痰黄稠", weight: 10 }
    ],
    "痰黄黏稠": [
        { syndromeId: "syn_139", keyword: "痰黄黏稠", weight: 10 },
        { syndromeId: "syn_002", keyword: "痰黄黏稠", weight: 7 }
    ],
    "痰液清稀": [
        { syndromeId: "syn_040", keyword: "痰液清稀", weight: 8 }
    ],
    "疼痛拒按": [
        { syndromeId: "syn_130", keyword: "疼痛拒按", weight: 8 }
    ],
    "痛处固定": [
        { syndromeId: "syn_120", keyword: "痛处固定", weight: 8 }
    ],
    "痛处固定不移": [
        { syndromeId: "syn_072", keyword: "痛处固定不移", weight: 10 }
    ],
    "痛处游走": [
        { syndromeId: "syn_118", keyword: "痛处游走", weight: 8 }
    ],
    "痛引肩背": [
        { syndromeId: "syn_103", keyword: "痛引肩背", weight: 8 }
    ],
    "头目胀痛": [
        { syndromeId: "syn_022", keyword: "头目胀痛", weight: 10 }
    ],
    "头身困重": [
        { syndromeId: "syn_032", keyword: "头身困重", weight: 7 },
        { syndromeId: "syn_122", keyword: "头身困重", weight: 7 }
    ],
    "头痛": [
        { syndromeId: "syn_001", keyword: "头痛", weight: 10 },
        { syndromeId: "syn_002", keyword: "头痛", weight: 10 },
        { syndromeId: "syn_080", keyword: "头痛", weight: 8 },
        { syndromeId: "syn_141", keyword: "头痛", weight: 5 }
    ],
    "头痛身痛": [
        { syndromeId: "syn_042", keyword: "头痛身痛", weight: 8 }
    ],
    "头痛眩晕": [
        { syndromeId: "syn_021", keyword: "头痛眩晕", weight: 8 }
    ],
    "头晕": [
        { syndromeId: "syn_010", keyword: "头晕", weight: 8 }
    ],
    "头晕耳鸣": [
        { syndromeId: "syn_111", keyword: "头晕耳鸣", weight: 8 }
    ],
    "头晕健忘": [
        { syndromeId: "syn_116", keyword: "头晕健忘", weight: 8 }
    ],
    "头晕目眩": [
        { syndromeId: "syn_114", keyword: "头晕目眩", weight: 10 },
        { syndromeId: "syn_023", keyword: "头晕目眩", weight: 5 },
        { syndromeId: "syn_070", keyword: "头晕目眩", weight: 5 },
        { syndromeId: "syn_073", keyword: "头晕目眩", weight: 5 },
        { syndromeId: "syn_074", keyword: "头晕目眩", weight: 5 },
        { syndromeId: "syn_105", keyword: "头晕目眩", weight: 5 }
    ],
    "头晕心悸": [
        { syndromeId: "syn_132", keyword: "头晕心悸", weight: 8 }
    ],
    "头晕眼花": [
        { syndromeId: "syn_071", keyword: "头晕眼花", weight: 10 }
    ],
    "头重脚轻": [
        { syndromeId: "syn_022", keyword: "头重脚轻", weight: 8 }
    ],
    "突然抽搐": [
        { syndromeId: "syn_136", keyword: "突然抽搐", weight: 10 }
    ],
    "吐血": [
        { syndromeId: "syn_117", keyword: "吐血", weight: 7 },
        { syndromeId: "syn_121", keyword: "吐血", weight: 7 }
    ],
    "吞酸": [
        { syndromeId: "syn_110", keyword: "吞酸", weight: 8 }
    ],
    "脱肛": [
        { syndromeId: "syn_105", keyword: "脱肛", weight: 8 }
    ],
    "完谷不化": [
        { syndromeId: "syn_115", keyword: "完谷不化", weight: 8 }
    ],
    "脘腹痞满": [
        { syndromeId: "syn_033", keyword: "脘腹痞满", weight: 8 }
    ],
    "脘腹痞闷": [
        { syndromeId: "syn_032", keyword: "脘腹痞闷", weight: 10 }
    ],
    "脘腹胀满": [
        { syndromeId: "syn_020", keyword: "脘腹胀满", weight: 5 },
        { syndromeId: "syn_122", keyword: "脘腹胀满", weight: 5 },
        { syndromeId: "syn_124", keyword: "脘腹胀满", weight: 5 },
        { syndromeId: "syn_138", keyword: "脘腹胀满", weight: 5 }
    ],
    "脘腹胀满疼痛": [
        { syndromeId: "syn_062", keyword: "脘腹胀满疼痛", weight: 8 }
    ],
    "脘腹坠胀": [
        { syndromeId: "syn_105", keyword: "脘腹坠胀", weight: 10 }
    ],
    "脘痞不舒": [
        { syndromeId: "syn_060", keyword: "脘痞不舒", weight: 8 }
    ],
    "脘胁胀痛": [
        { syndromeId: "syn_110", keyword: "脘胁胀痛", weight: 10 }
    ],
    "往来寒热": [
        { syndromeId: "syn_081", keyword: "往来寒热", weight: 10 }
    ],
    "畏寒怕冷": [
        { syndromeId: "syn_004", keyword: "畏寒怕冷", weight: 10 }
    ],
    "畏寒肢冷": [
        { syndromeId: "syn_051", keyword: "畏寒肢冷", weight: 10 },
        { syndromeId: "syn_101", keyword: "畏寒肢冷", weight: 10 },
        { syndromeId: "syn_113", keyword: "畏寒肢冷", weight: 10 },
        { syndromeId: "syn_115", keyword: "畏寒肢冷", weight: 5 },
        { syndromeId: "syn_131", keyword: "畏寒肢冷", weight: 5 }
    ],
    "胃脘嘈杂": [
        { syndromeId: "syn_060", keyword: "胃脘嘈杂", weight: 8 }
    ],
    "胃脘冷痛": [
        { syndromeId: "syn_106", keyword: "胃脘冷痛", weight: 10 }
    ],
    "胃脘灼痛": [
        { syndromeId: "syn_061", keyword: "胃脘灼痛", weight: 10 }
    ],
    "胃下垂": [
        { syndromeId: "syn_105", keyword: "胃下垂", weight: 8 }
    ],
    "无汗": [
        { syndromeId: "syn_001", keyword: "无汗", weight: 10 },
        { syndromeId: "syn_042", keyword: "无汗", weight: 7 }
    ],
    "五更泄泻": [
        { syndromeId: "syn_115", keyword: "五更泄泻", weight: 10 }
    ],
    "五心烦热": [
        { syndromeId: "syn_011", keyword: "五心烦热", weight: 10 },
        { syndromeId: "syn_050", keyword: "五心烦热", weight: 10 },
        { syndromeId: "syn_041", keyword: "五心烦热", weight: 5 },
        { syndromeId: "syn_111", keyword: "五心烦热", weight: 5 },
        { syndromeId: "syn_113", keyword: "五心烦热", weight: 5 },
        { syndromeId: "syn_114", keyword: "五心烦热", weight: 5 },
        { syndromeId: "syn_125", keyword: "五心烦热", weight: 5 },
        { syndromeId: "syn_142", keyword: "五心烦热", weight: 5 }
    ],
    "下肢红肿热痛": [
        { syndromeId: "syn_129", keyword: "下肢红肿热痛", weight: 10 }
    ],
    "下肢尤甚": [
        { syndromeId: "syn_051", keyword: "下肢尤甚", weight: 8 }
    ],
    "消谷善饥": [
        { syndromeId: "syn_061", keyword: "消谷善饥", weight: 10 }
    ],
    "小便不利": [
        { syndromeId: "syn_124", keyword: "小便不利", weight: 10 },
        { syndromeId: "syn_031", keyword: "小便不利", weight: 6 },
        { syndromeId: "syn_115", keyword: "小便不利", weight: 6 }
    ],
    "小便短赤": [
        { syndromeId: "syn_061", keyword: "小便短赤", weight: 7 },
        { syndromeId: "syn_126", keyword: "小便短赤", weight: 7 }
    ],
    "小便短少": [
        { syndromeId: "syn_032", keyword: "小便短少", weight: 7 },
        { syndromeId: "syn_075", keyword: "小便短少", weight: 7 }
    ],
    "小便黄": [
        { syndromeId: "syn_128", keyword: "小便黄", weight: 7 },
        { syndromeId: "syn_139", keyword: "小便黄", weight: 7 }
    ],
    "小便黄赤": [
        { syndromeId: "syn_003", keyword: "小便黄赤", weight: 9 },
        { syndromeId: "syn_024", keyword: "小便黄赤", weight: 8 },
        { syndromeId: "syn_033", keyword: "小便黄赤", weight: 7 },
        { syndromeId: "syn_021", keyword: "小便黄赤", weight: 5 },
        { syndromeId: "syn_043", keyword: "小便黄赤", weight: 5 },
        { syndromeId: "syn_122", keyword: "小便黄赤", weight: 5 },
        { syndromeId: "syn_129", keyword: "小便黄赤", weight: 5 },
        { syndromeId: "syn_134", keyword: "小便黄赤", weight: 5 }
    ],
    "小便频数而清": [
        { syndromeId: "syn_053", keyword: "小便频数而清", weight: 10 }
    ],
    "小便清长": [
        { syndromeId: "syn_004", keyword: "小便清长", weight: 10 },
        { syndromeId: "syn_051", keyword: "小便清长", weight: 10 }
    ],
    "小儿发育迟缓": [
        { syndromeId: "syn_052", keyword: "小儿发育迟缓", weight: 10 }
    ],
    "胁肋隐痛": [
        { syndromeId: "syn_111", keyword: "胁肋隐痛", weight: 10 }
    ],
    "胁肋胀痛": [
        { syndromeId: "syn_024", keyword: "胁肋胀痛", weight: 10 }
    ],
    "胁肋灼痛": [
        { syndromeId: "syn_021", keyword: "胁肋灼痛", weight: 8 }
    ],
    "胁痛": [
        { syndromeId: "syn_114", keyword: "胁痛", weight: 8 }
    ],
    "心烦": [
        { syndromeId: "syn_011", keyword: "心烦", weight: 6 },
        { syndromeId: "syn_102", keyword: "心烦", weight: 6 },
        { syndromeId: "syn_119", keyword: "心烦", weight: 6 }
    ],
    "心烦不寐": [
        { syndromeId: "syn_117", keyword: "心烦不寐", weight: 8 }
    ],
    "心烦失眠": [
        { syndromeId: "syn_126", keyword: "心烦失眠", weight: 10 }
    ],
    "心烦喜呕": [
        { syndromeId: "syn_081", keyword: "心烦喜呕", weight: 8 }
    ],
    "心悸": [
        { syndromeId: "syn_010", keyword: "心悸", weight: 10 },
        { syndromeId: "syn_100", keyword: "心悸", weight: 10 },
        { syndromeId: "syn_102", keyword: "心悸", weight: 10 },
        { syndromeId: "syn_011", keyword: "心悸", weight: 9 }
    ],
    "心悸失眠": [
        { syndromeId: "syn_071", keyword: "心悸失眠", weight: 7 },
        { syndromeId: "syn_073", keyword: "心悸失眠", weight: 7 }
    ],
    "心悸怔忡": [
        { syndromeId: "syn_101", keyword: "心悸怔忡", weight: 10 },
        { syndromeId: "syn_116", keyword: "心悸怔忡", weight: 10 }
    ],
    "心胸憋闷或疼痛": [
        { syndromeId: "syn_101", keyword: "心胸憋闷或疼痛", weight: 8 }
    ],
    "心胸憋闷疼痛": [
        { syndromeId: "syn_103", keyword: "心胸憋闷疼痛", weight: 10 }
    ],
    "形体肥胖": [
        { syndromeId: "syn_074", keyword: "形体肥胖", weight: 8 }
    ],
    "形体消瘦": [
        { syndromeId: "syn_030", keyword: "形体消瘦", weight: 5 },
        { syndromeId: "syn_041", keyword: "形体消瘦", weight: 5 },
        { syndromeId: "syn_073", keyword: "形体消瘦", weight: 5 },
        { syndromeId: "syn_137", keyword: "形体消瘦", weight: 5 }
    ],
    "性欲减退": [
        { syndromeId: "syn_051", keyword: "性欲减退", weight: 8 }
    ],
    "胸闷": [
        { syndromeId: "syn_074", keyword: "胸闷", weight: 10 }
    ],
    "胸闷痰多": [
        { syndromeId: "syn_123", keyword: "胸闷痰多", weight: 8 }
    ],
    "胸闷脘痞": [
        { syndromeId: "syn_102", keyword: "胸闷脘痞", weight: 8 }
    ],
    "胸闷胁胀": [
        { syndromeId: "syn_112", keyword: "胸闷胁胀", weight: 8 }
    ],
    "胸痛": [
        { syndromeId: "syn_043", keyword: "胸痛", weight: 8 }
    ],
    "胸胁苦满": [
        { syndromeId: "syn_081", keyword: "胸胁苦满", weight: 10 }
    ],
    "胸胁胀闷疼痛": [
        { syndromeId: "syn_072", keyword: "胸胁胀闷疼痛", weight: 8 }
    ],
    "胸胁胀痛": [
        { syndromeId: "syn_020", keyword: "胸胁胀痛", weight: 10 }
    ],
    "羞明流泪": [
        { syndromeId: "syn_141", keyword: "羞明流泪", weight: 8 }
    ],
    "嗅觉减退": [
        { syndromeId: "syn_140", keyword: "嗅觉减退", weight: 8 }
    ],
    "眩晕耳鸣": [
        { syndromeId: "syn_022", keyword: "眩晕耳鸣", weight: 10 },
        { syndromeId: "syn_050", keyword: "眩晕耳鸣", weight: 5 },
        { syndromeId: "syn_112", keyword: "眩晕耳鸣", weight: 5 },
        { syndromeId: "syn_113", keyword: "眩晕耳鸣", weight: 5 },
        { syndromeId: "syn_125", keyword: "眩晕耳鸣", weight: 5 }
    ],
    "牙关紧闭": [
        { syndromeId: "syn_136", keyword: "牙关紧闭", weight: 8 }
    ],
    "牙龈肿痛": [
        { syndromeId: "syn_061", keyword: "牙龈肿痛", weight: 8 }
    ],
    "厌食呕恶": [
        { syndromeId: "syn_062", keyword: "厌食呕恶", weight: 10 }
    ],
    "咽干": [
        { syndromeId: "syn_081", keyword: "咽干", weight: 8 }
    ],
    "咽干口燥": [
        { syndromeId: "syn_142", keyword: "咽干口燥", weight: 8 }
    ],
    "咽干颧红": [
        { syndromeId: "syn_050", keyword: "咽干颧红", weight: 8 }
    ],
    "咽痛": [
        { syndromeId: "syn_002", keyword: "咽痛", weight: 10 },
        { syndromeId: "syn_139", keyword: "咽痛", weight: 6 },
        { syndromeId: "syn_140", keyword: "咽痛", weight: 6 }
    ],
    "咽痒": [
        { syndromeId: "syn_042", keyword: "咽痒", weight: 8 }
    ],
    "腰膝酸冷": [
        { syndromeId: "syn_051", keyword: "腰膝酸冷", weight: 10 },
        { syndromeId: "syn_115", keyword: "腰膝酸冷", weight: 10 }
    ],
    "腰膝酸软": [
        { syndromeId: "syn_050", keyword: "腰膝酸软", weight: 10 },
        { syndromeId: "syn_113", keyword: "腰膝酸软", weight: 10 },
        { syndromeId: "syn_114", keyword: "腰膝酸软", weight: 10 },
        { syndromeId: "syn_052", keyword: "腰膝酸软", weight: 9 },
        { syndromeId: "syn_053", keyword: "腰膝酸软", weight: 8 },
        { syndromeId: "syn_022", keyword: "腰膝酸软", weight: 5 },
        { syndromeId: "syn_125", keyword: "腰膝酸软", weight: 5 },
        { syndromeId: "syn_142", keyword: "腰膝酸软", weight: 5 }
    ],
    "夜尿频多": [
        { syndromeId: "syn_051", keyword: "夜尿频多", weight: 10 },
        { syndromeId: "syn_053", keyword: "夜尿频多", weight: 9 }
    ],
    "夜卧不宁": [
        { syndromeId: "syn_138", keyword: "夜卧不宁", weight: 8 }
    ],
    "遗精": [
        { syndromeId: "syn_114", keyword: "遗精", weight: 8 }
    ],
    "遗精阳痿": [
        { syndromeId: "syn_113", keyword: "遗精阳痿", weight: 8 }
    ],
    "遗尿": [
        { syndromeId: "syn_053", keyword: "遗尿", weight: 8 }
    ],
    "易感冒": [
        { syndromeId: "syn_040", keyword: "易感冒", weight: 8 }
    ],
    "意识障碍": [
        { syndromeId: "syn_123", keyword: "意识障碍", weight: 8 }
    ],
    "阴部瘙痒": [
        { syndromeId: "syn_134", keyword: "阴部瘙痒", weight: 8 }
    ],
    "阴囊湿疹": [
        { syndromeId: "syn_024", keyword: "阴囊湿疹", weight: 8 }
    ],
    "有汗": [
        { syndromeId: "syn_002", keyword: "有汗", weight: 8 }
    ],
    "遇寒加剧": [
        { syndromeId: "syn_118", keyword: "遇寒加剧", weight: 10 },
        { syndromeId: "syn_106", keyword: "遇寒加剧", weight: 7 }
    ],
    "遇寒加重": [
        { syndromeId: "syn_120", keyword: "遇寒加重", weight: 10 }
    ],
    "月经不调": [
        { syndromeId: "syn_020", keyword: "月经不调", weight: 10 }
    ],
    "月经过多": [
        { syndromeId: "syn_104", keyword: "月经过多", weight: 7 },
        { syndromeId: "syn_121", keyword: "月经过多", weight: 7 }
    ],
    "月经后期": [
        { syndromeId: "syn_132", keyword: "月经后期", weight: 10 }
    ],
    "月经量多": [
        { syndromeId: "syn_130", keyword: "月经量多", weight: 8 }
    ],
    "月经量少": [
        { syndromeId: "syn_114", keyword: "月经量少", weight: 8 }
    ],
    "月经量少色淡": [
        { syndromeId: "syn_023", keyword: "月经量少色淡", weight: 8 }
    ],
    "爪甲不荣": [
        { syndromeId: "syn_023", keyword: "爪甲不荣", weight: 10 }
    ],
    "肢体浮肿": [
        { syndromeId: "syn_124", keyword: "肢体浮肿", weight: 10 },
        { syndromeId: "syn_032", keyword: "肢体浮肿", weight: 7 }
    ],
    "肢体关节疼痛": [
        { syndromeId: "syn_118", keyword: "肢体关节疼痛", weight: 10 }
    ],
    "肢体倦怠": [
        { syndromeId: "syn_030", keyword: "肢体倦怠", weight: 8 }
    ],
    "肢体困重": [
        { syndromeId: "syn_074", keyword: "肢体困重", weight: 10 },
        { syndromeId: "syn_033", keyword: "肢体困重", weight: 8 },
        { syndromeId: "syn_031", keyword: "肢体困重", weight: 6 }
    ],
    "肢体麻木": [
        { syndromeId: "syn_023", keyword: "肢体麻木", weight: 10 }
    ],
    "重着肿胀": [
        { syndromeId: "syn_118", keyword: "重着肿胀", weight: 8 }
    ],
    "壮热": [
        { syndromeId: "syn_090", keyword: "壮热", weight: 10 }
    ],
    "子宫下垂": [
        { syndromeId: "syn_105", keyword: "子宫下垂", weight: 8 }
    ],
    "自汗": [
        { syndromeId: "syn_070", keyword: "自汗", weight: 9 },
        { syndromeId: "syn_100", keyword: "自汗", weight: 7 }
    ],
    "自汗畏风": [
        { syndromeId: "syn_040", keyword: "自汗畏风", weight: 10 }
    ],
    "自汗易感冒": [
        { syndromeId: "syn_127", keyword: "自汗易感冒", weight: 8 }
    ],
    "足痿无力": [
        { syndromeId: "syn_052", keyword: "足痿无力", weight: 8 }
    ]
};

// 挂载到全局
if (typeof window !== 'undefined') {
    window.symptomMappingExtension = symptomMappingExtension;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { symptomMappingExtension };
}
