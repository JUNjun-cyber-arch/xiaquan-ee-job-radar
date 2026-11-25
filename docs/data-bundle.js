/* 自动生成文件，请勿手动编辑。运行 node scripts/build_and_verify.mjs 更新 */
window.__RADAR_DATA__ = {
  "schemaVersion": 2,
  "generatedAt": "2026-11-25",
  "overview": {
    "totalCompanies": 12,
    "totalQueue": 20,
    "pendingQueue": 8,
    "completionPct": 60,
    "totalMatchedRoleInstances": 36,
    "realInternJdRoles": 19,
    "campusRefRoles": 17,
    "summerSupportCount": 5,
    "summerFitCounts": {
      "fit-8w": 5,
      "short-4w": 1,
      "need-3m": 1,
      "negotiable": 1,
      "long-or-senior": 4
    },
    "uniqueSkillCount": 28,
    "cityCounts": {
      "厦门": 10,
      "泉州": 3
    },
    "trackCounts": {
      "电力电子/储能与配电": 6,
      "高端装备与智能制造": 2,
      "半导体/光电与精密制造": 4
    }
  },
  "roles": [
    {
      "id": "equip-elec",
      "name": "设备电气 / 电气设计实习生",
      "shortName": "电气设计实习",
      "category": "设计与集成",
      "summary": "协助完成配电柜、储能系统或成套装备的电气原理图绘制、BOM 整理、元器件选型核对及车间装配配合。",
      "typicalDay": "跟着导师学看整套电气原理图、用 AutoCAD/EPLAN 改局部图纸和端子表、核对物料 BOM 清单、去装配区跟着查线试电。",
      "courseLinks": [
        "电路（三相/功率）",
        "电机学（异步电机与起动）",
        "AutoCAD/EPLAN 基础（待补）"
      ],
      "starterProjectHint": "低压电机与控制柜国标选型器 + 经典控制回路原理图识读与排故沙盒"
    },
    {
      "id": "plc-debug",
      "name": "PLC 控制与自动化调试实习生",
      "shortName": "PLC 调试实习",
      "category": "控制与调试",
      "summary": "协助编写局部 PLC 控制逻辑、制作 HMI 触摸屏页面、核对 I/O 点表以及参与厂内设备通电联调与信号测试。",
      "typicalDay": "跟着工程师核对传感器/执行器 I/O 点表、在测试台架跑简单西门子/三菱 PLC 逻辑、调变频器基础参数、记录联调异常。",
      "courseLinks": [
        "自动控制原理",
        "电路逻辑基础",
        "主流 PLC 入门（待补）"
      ],
      "starterProjectHint": "浏览器 PLC 梯形图/ST 逻辑仿真与安全互锁校验平台"
    },
    {
      "id": "fab-equip",
      "name": "产线设备 / 维护工程实习生",
      "shortName": "设备工程实习",
      "category": "产线运维与改善",
      "summary": "在电池、开关或半导体制造基地协助执行自动化产线设备点检、预防性保养（PM）、故障记录、SOP 编写与 OEE 数据统计。",
      "typicalDay": "跟师父巡检产线机台、记录报警代码和停机原因、协助更新设备作业指导书（SOP）、参与简单传感器更换或自动化改善数据整理。",
      "courseLinks": [
        "电路基础",
        "自动控制原理",
        "机械识图与 PLC 入门（待补）"
      ],
      "starterProjectHint": "产线设备故障树排故 SOP 知识库 + 传感器/Modbus 日志诊断小工具"
    },
    {
      "id": "ee-test",
      "name": "电气 / 硬件产品测试实习生",
      "shortName": "产品测试实习",
      "category": "研发验证与质量",
      "summary": "协助搭建 UPS、储能 PCS、光伏逆变器、电池或开关器件测试台架，操作示波器/功率分析仪采集数据、编写测试报告并跟进缺陷复现。",
      "typicalDay": "按测试用例接好电子负载和示波器、抓开关电源纹波与效率波形、把实测数据整理成规范图表报告、帮研发复现偶发保护异常。",
      "courseLinks": [
        "电力电子技术",
        "电路（正弦/三相/磁耦合）",
        "电机学",
        "自动控制原理"
      ],
      "starterProjectHint": "示波器/Multisim 波形 CSV 自动分析（有效值/纹波/THD/效率）与测试报告生成器"
    },
    {
      "id": "tech-support",
      "name": "电气技术支持 / FAE 实习生",
      "shortName": "技术支持实习",
      "category": "客户与现场交付",
      "summary": "协助售前/售后工程师整理技术方案、配置报价单、查阅设备手册解答常规技术问题，以及在导师带领下参与厂内或项目现场调试跟做。",
      "typicalDay": "整理产品选型参数与技术协议文档、跟进客户常规技术咨询记录、在厂内测 Modbus/CAN 通信与开机自检流程、整理常见故障案例库。",
      "courseLinks": [
        "电路基础",
        "电力电子技术",
        "电机学"
      ],
      "starterProjectHint": "工业现场 Modbus/串口协议调试工具 + UPS/储能典型报错排查决策树"
    }
  ],
  "queue": {
    "schemaVersion": 2,
    "updatedAt": "2026-11-25",
    "dailyTargetCount": 2,
    "items": [
      {
        "order": 1,
        "id": "kehua-data",
        "name": "科华数据",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "UPS/储能PCS/光伏逆变器，重点扒硬件测试与技术支持岗"
      },
      {
        "order": 2,
        "id": "nflg",
        "name": "南方路机",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "泉州洛江上市装备龙头，重点扒设备电气设计与PLC调试/售后"
      },
      {
        "order": 3,
        "id": "abb-xiamen",
        "name": "ABB（厦门工业中心）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "中低压开关柜与配电外企标杆，扒电气工程/设备维护/技术支持与英语门槛"
      },
      {
        "order": 4,
        "id": "hithium",
        "name": "海辰储能",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "厦门同安储能独角兽，扒设备工程/电气测试/储能系统技术支持"
      },
      {
        "order": 5,
        "id": "hongfa",
        "name": "宏发股份",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "S",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "全球继电器龙头，重点扒设备电气/自动化装备开发/产品测试岗"
      },
      {
        "order": 6,
        "id": "schneider-xiamen",
        "name": "施耐德电气（厦门）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-22",
        "focusHint": "外企中低压配电与工业自动化，对比ABB看实习门槛与岗位差异"
      },
      {
        "order": 7,
        "id": "fara-electronics",
        "name": "法拉电子",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-23",
        "focusHint": "薄膜电容全球龙头，扒设备电气/测试与产线自动化岗"
      },
      {
        "order": 8,
        "id": "tianma-xiamen",
        "name": "天马微电子（厦门）",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-23",
        "focusHint": "翔安显示面板大厂，扒设备工程师/厂务电气真实倒班与培养情况"
      },
      {
        "order": 9,
        "id": "sanan-opto",
        "name": "三安光电（厦门/泉州）",
        "city": "厦门/泉州",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-24",
        "focusHint": "跨厦泉双基地，对比光电芯片设备工程与厂务动力电气岗"
      },
      {
        "order": 10,
        "id": "uscxm",
        "name": "联芯集成电路",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-24",
        "focusHint": "翔安晶圆厂，扒设备工程师/厂务电力系统要求与暑期项目详情"
      },
      {
        "order": 11,
        "id": "silan-xiamen",
        "name": "士兰集科 / 士兰明镓",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-25",
        "focusHint": "海沧功率半导体晶圆制造，扒设备工程与测试岗"
      },
      {
        "order": 12,
        "id": "jomoo",
        "name": "九牧集团（智能工厂）",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "done",
        "researchedAt": "2026-11-25",
        "focusHint": "（已前置优先补齐泉州与 PLC 样本）南安 5G 智能工厂标杆，重点核实设施运维/产线电气与 PLC 编程岗"
      },
      {
        "order": 13,
        "id": "ttm-quanzhou",
        "name": "铁拓机械",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "（已前置优先补齐泉州装备与 PLC 样本）泉州洛江北交所上市装备厂，对比南方路机看厂内联调与电控要求"
      },
      {
        "order": 14,
        "id": "intretech",
        "name": "盈趣科技",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "海沧智能制造与电子产品测试大户，扒自动化电气与测试工程岗"
      },
      {
        "order": 15,
        "id": "xiamen-ampace",
        "name": "厦门新能安（Ampace）",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "宁德时代与ATL合资储能/小动力电池企业，扒测试/设备/自动化岗"
      },
      {
        "order": 16,
        "id": "kinglong",
        "name": "金龙客车",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "集美新能源整车，扒三电测试/整车电气与售后技术支持"
      },
      {
        "order": 17,
        "id": "runner-xiamen",
        "name": "建霖家居（智能制造）",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "集美上市制造企业，扒自动化设备电气与测试工程岗"
      },
      {
        "order": 18,
        "id": "tpv-xiamen",
        "name": "冠捷显示科技（厦门）",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安大型电子制造厂，扒测试工程与产线自动化设备岗"
      },
      {
        "order": 19,
        "id": "sinochem-quanzhou",
        "name": "中化泉州石化",
        "city": "泉州",
        "track": "流程工业与能源央国企",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "泉州惠安大型流程工业，扒电气运行维护/继电保护与仪表自动化（区分正式用工与基地）"
      },
      {
        "order": 20,
        "id": "xiamen-tungsten",
        "name": "厦门钨业 / 厦钨新能",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "厦门新能源电池正极材料龙头，扒工厂设备电气与自动化控制岗（区分不同实体基地）"
      }
    ],
    "phase2Candidates": [
      {
        "id": "quangong-qz",
        "name": "福建泉工股份",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "roles": [
          "equip-elec",
          "plc-debug",
          "tech-support"
        ],
        "reason": "泉州本土成套智能装备制造企业，可有效补充泉州基地电气设计、PLC 厂内联调与现场服务样本。",
        "clueUrl": "https://www.qzmachine.com/about.html"
      },
      {
        "id": "haiwell-xm",
        "name": "厦门海为科技（Haiwell）",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "roles": [
          "plc-debug",
          "tech-support"
        ],
        "reason": "本地工控 PLC/HMI/SCADA 研发制造厂商（集美总部/翔安制造），对口工控应用与技术支持。",
        "clueUrl": "https://haiwell.com/about/"
      },
      {
        "id": "hengan-qz",
        "name": "恒安集团（晋江/泉州基地）",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "roles": [
          "fab-equip",
          "plc-debug"
        ],
        "reason": "连续高速自动化产线规模大，已披露与泉州高校开展实习实训合作，适合查设备维护与产线电气。",
        "clueUrl": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0325/2025032500170_c.pdf"
      },
      {
        "id": "huadian-xm",
        "name": "厦门华电开关",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "roles": [
          "ee-test",
          "tech-support",
          "equip-elec"
        ],
        "reason": "本地中高压配电设备核心企业，官网校招含技术储备/质量测试/服务支持，适合与 ABB/施耐德横向对比。",
        "clueUrl": "https://www.huadianswg.com/cn/news/923.html"
      },
      {
        "id": "hprt-xm",
        "name": "厦门汉印实业",
        "city": "厦门",
        "track": "高端装备与智能制造",
        "roles": [
          "ee-test",
          "tech-support"
        ],
        "reason": "在厦门理工电气与智能制造专场出现过的硬件/电子制造企业，具备实习及维修测试岗位接触入口。",
        "clueUrl": "https://job.xmut.edu.cn/info/1008/11997.htm"
      },
      {
        "id": "dejishen-xm",
        "name": "德基申（厦门）电气",
        "city": "厦门",
        "track": "电力电子/储能与配电",
        "roles": [
          "equip-elec",
          "ee-test"
        ],
        "reason": "在厦门理工电气专场招募面向电气本科生的配网技术储干，涉及图纸与样品测试，适合作为中小型配电对比样本。",
        "clueUrl": "https://job.xmut.edu.cn/info/1008/11475.htm"
      }
    ]
  },
  "changelog": [
    {
      "day": 1,
      "date": "2026-11-22",
      "batchId": "day-1",
      "reportFile": "daily-2026-11-22.md",
      "addedCompanies": [
        "kehua-data",
        "nflg"
      ],
      "headline": "雷达建站首发：厦门「科华数据」× 泉州「南方路机」",
      "keyTakeaway": "初步建立厦门电力电子与泉州高端装备双赛道样本，验证跨企业技能聚合与横向对比框架。"
    },
    {
      "day": 2,
      "date": "2026-11-22",
      "batchId": "day-2",
      "reportFile": "daily-2026-11-22-test-run.md",
      "addedCompanies": [
        "abb-xiamen",
        "hithium"
      ],
      "headline": "升级「2027 暑期/日常实习生专用雷达」（参考 2025–2026 实习信息复核前 4 企）",
      "keyTakeaway": "基于 2025/2026 招聘资料复核：① 科华、ABB、海辰明确存在暑期 2～3 个月项目窗口且带转正机制；② 南方路机较少办大规模独立暑期网申，需春季直联 HR 或校内宣讲协商；③ 大三投实习前最核心的基础在于电路/电力电子原理、原理图识读、示波器/AutoCAD 入门与清晰排故表达。"
    },
    {
      "day": 3,
      "date": "2026-11-22",
      "batchId": "day-3",
      "reportFile": "daily-2026-11-22-batch3-intern.md",
      "addedCompanies": [
        "hongfa",
        "schneider-xiamen"
      ],
      "headline": "按实习视角新增双企：「宏发股份（集美/海沧）」×「施耐德电气（翔安）」",
      "keyTakeaway": "全库已达 6/20 企。① 宏发距厦门理工较近、支持暑期 1.5～3 个月实习并配基础食宿班车，适合大三切入继电器测试与自动化设备；② 施耐德与 ABB 同属翔安外企配电样本，作息相对规范且具备 Intern-to-Fulltime 通道，但历史暑期项目偏 6–9 月（约 3 个月），面试关注 8D/RCA 质量分析与英文读写。"
    },
    {
      "day": 4,
      "date": "2026-11-23",
      "batchId": "day-4",
      "reportFile": "daily-2026-11-23.md",
      "addedCompanies": [
        "fara-electronics",
        "tianma-xiamen"
      ],
      "headline": "双企深挖：「法拉电子（海沧）」×「天马微电子（翔安）」",
      "keyTakeaway": "全库推进至 8/20 企。① 天马支持 7–8 月约 2 个月暑期并带「Offer 直通车」机制，厂务电气较对口强电本科，产线设备/电测多涉及无尘服、倒班与色觉体检条件；② 法拉电子以大四顶岗见习/校招为主（标为 campus-ref），官网与校招要求重视 PLC（梯形图/ST）与测试上位机（C#/LabVIEW）基础。"
    },
    {
      "day": 5,
      "date": "2026-11-24",
      "batchId": "day-5",
      "reportFile": "daily-2026-11-24.md",
      "addedCompanies": [
        "sanan-opto",
        "uscxm"
      ],
      "headline": "双企深挖：「三安光电（厦门/泉州）」×「联芯集成电路（翔安 12 寸晶圆厂）」",
      "keyTakeaway": "全库进度过半至 10/20 企。① 联芯每年 5 月前后开放的暑期项目暨校招提前批通常约 4 周并附秋招直通卡（如需拉满 8 周须面试协商，2025 公开公告列工艺整合/工艺/良率方向，设备本科暑期直投须当期核实）；② 三安光电以毕业顶岗及提前批为主（标为 campus-ref），在厦门与泉州南安双基地均设有厂务与设备方向。"
    },
    {
      "day": 6,
      "date": "2026-11-25",
      "batchId": "day-6",
      "reportFile": "daily-2026-11-25-day-6.md",
      "addedCompanies": [
        "silan-xiamen",
        "jomoo"
      ],
      "headline": "双企深挖：「士兰集科 / 士兰明镓（海沧）」×「九牧集团·智能工厂（南安）」",
      "keyTakeaway": "全库推进至 12/20 企。① 士兰厦门制造中心校招本科设备（80人）/测试设备（8人）对口度高，但已公开实习简章为士兰明镓 12 小时两班倒「生产实习生」，暂缺大三 8 周研发暑期夏令营（标为 long-or-senior）；② 九牧南安 5G 灯塔工厂在 NCSS 明确招募「电气设计百川生」（6.5–7.5K/月，要求 CAD+PLC）与「生产技术（电气）」，同样以春秋招/订单班为主（标为 campus-ref + long-or-senior），配标双公寓及厦泉南安周末班车。"
    }
  ],
  "companies": [
    {
      "id": "kehua-data",
      "name": "科华数据",
      "fullName": "科华数据股份有限公司",
      "city": "厦门",
      "districts": [
        "湖里区火炬高新区（马垄路总部/研发）",
        "翔安区（智造产业园）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "A股上市民企（SZ 002335）",
      "coreProducts": [
        "高端电源（UPS）",
        "数据中心（IDC）",
        "光伏逆变器（PV）",
        "储能变流器（PCS）",
        "充电桩"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "专项暑期实习 + 日常实习",
        "summer2MonthOk": "支持暑假 2～3 个月",
        "durationReq": "通常要求连续实习 2～3 个月以上（时间越长转正越有优势）",
        "weeklyDays": "每周至少到岗 4–5 天（暑期建议全职）",
        "openWindowRef": "参考 2025/2026：春季（3–5 月）启动暑期实习及“科班计划”前置选拔，全年滚动日常实习",
        "conversionPolicy": "配备导师一对一带教，实习表现优秀者在秋招拥有直通 Offer 或优先转正机会",
        "stipendNote": "未查到官方公开统一定额实习日薪（随学历与岗位动态核定，待 2027 春季实测/面试核实）",
        "summerFit": "fit-8w",
        "windowGroup": "spring-main",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "高匹配（厦门本地最贴合电力电子的实习首选之一）",
        "reason": "本科在校生（大三暑期/大四）可投硬件测试、电气研发辅助与技术支持实习；总部就在湖里火炬园，且硬件测试实习高度契合已学的《电力电子》《电路》《电机学》。"
      },
      "internshipAndRecruit": {
        "channels": [
          "科华数据官方招聘网 / Moka 校招实习平台",
          "“科华招聘”微信公众号",
          "福建高校春季宣讲与实习内推"
        ],
        "program": "“科班计划”导师带教 + 实验室/基地实践 + 实习答辩优先转正",
        "timelineNote": "2027 暑期实习（面向 2028 届）预计 2027 年 3–5 月开放，当前档案基于 2025/2026 实习生公开要求整理。",
        "benefits": [
          "导师一对一带教",
          "园区食堂/免费班车（实习生享园区基础配套，住宿补贴细则以当期 Offer 为准，待核实）",
          "实习转正可衔接六险一金与厦门人才公寓/宿舍"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "实习生无产线倒班（实验室与研发坐班为主）",
        "travelLevel": "测试与电气研发实习基本不出差；技术支持实习以总部辅助方案/文档为主，少量跟师父出差",
        "certNote": "本科实习生无需提前考取电工证，但面试强调实验室强弱电安全意识。"
      },
      "matchedRoles": [
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（硬件测试/自动化测试实习生）",
          "officialTitles": [
            "硬件测试实习生（电力电子/电源方向）",
            "测试工程师实习生"
          ],
          "internTasks": "协助搭建 UPS/储能 PCS/充电桩测试环境；在导师指导下操作示波器、万用表、功率分析仪执行样机功能与可靠性测试；记录实测数据、编写测试报告并跟进缺陷复现。",
          "responsibilities": [
            "配合拟定并执行 UPS、储能变流器（PCS）、光伏逆变器等样机的基础测试用例",
            "操作示波器、万用表、电子负载与功率分析仪采集电压/电流/纹波/效率等数据",
            "整理实验记录、输出规范测试报告，并将异常波形和缺陷反馈给研发闭环"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、二极管/MOS 管开关特性与基本运放电路"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】懂 Buck/Boost/单相三相整流与逆变基本工作模态及 PWM 原理"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】会用示波器测电源纹波/触发抓波形、用万用表测通断压降"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂基本控制板/功率板原理图，定位测试点"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】能用 Excel/Word 清晰整理测试数据曲线与异常现象记录"
            },
            {
              "name": "功率分析仪与电子负载",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解可编程交直流电源、电子负载与功率分析仪原理（入职可带教）"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解安规爬电距离、浪涌/传导辐射 EMC 基本概念更受青睐"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】会用 Python/C 处理测试数据或辅助自动化测试脚本"
            },
            {
              "name": "竞赛或电源实测项目经历",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】有电赛、Multisim 仿真复现或实验室电源调试闭环经历极加分"
            }
          ],
          "interviewFocus": [
            "实习笔/面试重点问基础：Buck/Boost 拓扑原理、MOS 管导通条件、二极管续流作用",
            "实操必问：怎么用示波器准确测量开关电源的输出纹波？（接地弹簧、带宽限制、交流耦合）",
            "项目复盘：挑一个你做过的课程实验/仿真/项目，讲清楚遇到什么波形异常、怎么查出来的"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（电气/硬件研发实习生）",
          "officialTitles": [
            "电气工程师实习生",
            "硬件研发实习生（数字能源/UPS）"
          ],
          "internTasks": "协助研发团队参与 UPS、储能 PCS、数据中心微模块等电气原理图绘制、元器件选型核对、样机焊接装配与基础电气性能试验。",
          "responsibilities": [
            "协助开展电源、储能或数据中心配电系统的局部电气原理图绘制与器件参数核对",
            "配合工程师完成样机制作、初步调试与性能摸底试验",
            "跟进试验中发现的基础电气或器件异常并整理记录"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与模数电理论基础"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】理解 AC/DC、DC/DC、DC/AC 基本变换电路"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能读懂中低压控制与电源原理图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】了解常见开关、电容、电感、接触器基本参数含义"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】熟悉 AutoCAD 或 EPLAN 基础绘图的本科生更容易脱颖而出"
            },
            {
              "name": "Altium Designer 硬件/PCB 基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】若偏功率/控制单板方向，会 Altium Designer 或 Multisim/PSIM 仿真大加分"
            }
          ],
          "interviewFocus": [
            "问电源/电路基础、常见器件（电容/电感/MOS 管）选型考量",
            "核实每周可实习天数与连续实习时长（能否至少坚持 2～3 个月）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（售前/售后技术支持实习生）",
          "officialTitles": [
            "技术支持实习生（售前/售后方向）",
            "数字能源技术服务实习生"
          ],
          "internTasks": "协助资深技术支持工程师编写项目技术方案、核对技术协议、整理客户常见问答与故障案例，并在指导下辅助线上技术咨询或跟做现场调试。",
          "responsibilities": [
            "协助开展高端电源、数据中心或光储充产品的售前方案整理与技术资料编制",
            "协助响应客户常规技术咨询，配合整理现场故障记录并向内部研发反馈",
            "在导师带领下熟悉设备开机调试流程与客户技术培训材料准备"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂整机强弱电基本接线与配电图"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】能用通俗语言讲清 UPS、逆变器、储能变流器是怎么工作的"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】具备分步骤排查思维（电源输入→保护报警→负载侧隔离）"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】表达清晰、有服务意识、跨部门协作积极"
            },
            {
              "name": "Modbus / CAN / RS485 通信",
              "category": "通信协议",
              "level": "plus",
              "detail": "【实习加分】懂 RS485/Modbus/CAN 基本概念，上手后台监控调试更快"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】海外技术支持实习方向看重英语读写与口语"
            }
          ],
          "interviewFocus": [
            "情景题：如果一台 UPS 开机报错跳闸，你的分步排查思路是什么？",
            "沟通面：考察逻辑表达清晰度、团队配合意愿及实习稳定性"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期以总部辅助为主，转正后高频出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "明确接受 2～3 个月暑期实习（每周 4–5 天），且有导师带教和秋招直通/优先转正通道",
          "硬件测试实习岗是本科生切入电力电子/储能大厂的黄金入口，对你现在大三已学课程 100% 对口",
          "地点就在厦门湖里火炬高新区，寒暑假通勤/住宿成本可控"
        ],
        "watchouts": [
          "核心电力电子单板研发实习竞争激烈且多偏硕士，大三本科优先冲「硬件测试实习生」和「技术支持/电气实习生」命中率最高",
          "面试必考示波器实操细节与电力电子基础概念，哪怕没个人板卡，也要用学校实验/Multisim 提前把纹波与拓扑讲透"
        ]
      },
      "sources": [
        {
          "label": "科华数据官方招聘与校招页面（kehua.com.cn/join）",
          "date": "2026-11-22",
          "sourceKind": "official-portal",
          "url": "https://www.kehua.com.cn/join",
          "lead": null
        },
        {
          "label": "高校就业网科华数据 2025/2026 暑期与日常实习生简章线索（lzu.edu.cn / wondercv）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "lzu.edu.cn / wondercv 历史简章线索（待补具体岗位直达链接与本科硬件测试条款）"
        },
        {
          "label": "公开招聘平台科华厦门硬件测试与技术支持实习/初级岗线索（liepin / nowcoder）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "liepin / nowcoder 厦门硬件测试与技术支持汇总线索（待核实 2027 当期原文）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "nflg",
      "name": "南方路机",
      "fullName": "福建南方路面机械股份有限公司",
      "city": "泉州",
      "districts": [
        "泉州市洛江区/丰泽区高新产业园（总部及智控研发制造基地）"
      ],
      "track": "高端装备与智能制造",
      "companyType": "A股上市民企（SH 603280）",
      "coreProducts": [
        "沥青/混凝土搅拌站",
        "机制砂成套设备",
        "固废资源化处理生产线",
        "装备智控自动化系统"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "日常/暑期直招实习（较少大规模独立网申，需主动直联 HR 或走省内高校宣讲）",
        "summer2MonthOk": "支持 2～3 个月以上（具体按部门排期协商）",
        "durationReq": "一般要求至少持续 2～3 个月以上，时间充裕更易安排进智控/调试实操项目",
        "weeklyDays": "每周保证出勤 4–5 天（可结合课表与部门协商）",
        "openWindowRef": "参考 2025/2026：无固定大规模暑期网申批，春季高校宣讲会及 Boss 直聘/官网社招实习通道可提前直联 HR",
        "conversionPolicy": "导师一对一带教 + 车间/智控中心轮岗，实习表现优秀者校招可直接发正式 Offer 转正",
        "stipendNote": "提供基础实习补贴、厂区福利食堂与住宿协助/集体宿舍（具体日薪/月薪面议，待核实）",
        "summerFit": "negotiable",
        "windowGroup": "rolling",
        "evidenceStatus": "campus-inferred"
      },
      "fitForXmut": {
        "level": "高匹配（福建省内工科院校友好，适合练扎实工控/PLC 基本功）",
        "reason": "泉州本土上市装备龙头，对厦门理工学院等省内工科生非常友好；虽较少单独办大型暑期网申，但接受大三/研二日常或暑期实习，且实习能接触完整成套设备电控与西门子 PLC。"
      },
      "internshipAndRecruit": {
        "channels": [
          "南方路机官网招聘板块（nflg.com）",
          "官方招聘公众号 / Boss 直聘直联泉州 HR",
          "厦门理工等福建高校春季宣讲会现场投递"
        ],
        "program": "“导师制”一对一带教 + 车间电控装配见习 + 智控研发/调试实操轮岗",
        "timelineNote": "建议 2027 年 3–4 月主动通过官网或 Boss 联系泉州 HR 询问智控/电气暑期实习坑位（避免傻等独立网申公告）。",
        "benefits": [
          "基础实习补贴（面议）",
          "厂区福利食堂",
          "集体宿舍/住宿协助",
          "转正留泉州可叠加泉州工科生安居、社保及落户补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "实习生无流水线倒班（泉州总部研发/厂内车间正常作息）",
        "travelLevel": "实习期以泉州厂内装配/智控联调为主；转正后若选售后/现场调试则出差频率很高",
        "certNote": "实习生无需提前持电工证，但车间实操强调低压配电安全规范。"
      },
      "matchedRoles": [
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见大规模独立暑期实习网申 · 参照 2025/2026 智控电气实习/初级岗",
          "officialTitles": [
            "电气工程师实习生（智控事业部）",
            "成套装备电气设计实习生"
          ],
          "internTasks": "在导师指导下读懂搅拌站/固废产线成套电气原理图；协助用 AutoCAD/EPLAN 修改局部接线图、核对电柜元器件 BOM 清单，并下车间对照实物电柜核线。",
          "responsibilities": [
            "协助绘制与整理成套工程装备控制柜的局部电气原理图和接线图",
            "协助核对 PLC、变频器、断路器、传感器等低压元器件清单（BOM）与出厂技术文档",
            "配合工程师在泉州厂内车间进行电柜核线、上电前检查与基础记录"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】面试高频必查：能读懂常见电机启停、自锁互锁与控制柜原理图"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】至少会用 AutoCAD 画标准电气原理图，懂 EPLAN 极加分"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】认识断路器、接触器、热继电器、中间继电器、开关电源等基础件"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】了解西门子 S7-1200/1500 或三菱基本梯形图逻辑即可明显加分"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】懂三相异步电机启停与变频调速基本原理（与电机学衔接）"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】协助整理操作规程与出厂电气说明书"
            },
            {
              "name": "SolidWorks 机械识图基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】了解基础机械图纸便于配合电柜安装定位"
            }
          ],
          "interviewFocus": [
            "直接拿基础电路/电气原理图问能不能看懂，以及接触过哪些制图或 PLC 软件",
            "问在校做过的电赛/课程设计/单片机实操经历，看重踏实动手能力",
            "确认暑期到岗时间、是否愿意在泉州发展"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期厂内为主（转正偶尔出差）"
        },
        {
          "roleId": "plc-debug",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见大规模独立暑期实习网申 · 参照 2025/2026 智控 PLC 调试实习/初级岗",
          "officialTitles": [
            "PLC 调试实习生",
            "自动化控制实习生（智控方向）"
          ],
          "internTasks": "协助工程师核对成套设备 I/O 点表、在厂内试车台调试传感器信号与基础 PLC 逻辑，协助制作或测试简单的 HMI 触摸屏画面。",
          "responsibilities": [
            "协助编写与测试局部 PLC 控制逻辑（如皮带机顺序启停、电机互锁）",
            "配合工程师在泉州厂内完成电气联调、传感器/限位开关信号点检",
            "协助完善 HMI 触摸屏或上位机组态界面与厂内调试问题记录"
          ],
          "skills": [
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "【实习底线】掌握至少一种主流 PLC（西门子/三菱）基础编程思维与 I/O 概念"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能按原理图对照查控制柜端子和 I/O 信号"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】具备按信号链排查传感器/继电器/输出异常的逻辑思维"
            },
            {
              "name": "HMI 触摸屏与组态软件",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】了解触摸屏或组态画面与 PLC 变量绑定的基本方式"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】了解变频器启停控制与模拟量/通信调速基础"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】认识现场常见光电开关、接近开关与电磁阀接线"
            }
          ],
          "interviewFocus": [
            "考察基本 PLC 控制逻辑思维（比如电机正反转互锁、定时启停思路）",
            "考察对工程机械车间/调试环境的适应度与动手意愿"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期厂内联调为主，转正后中～高频出差"
        },
        {
          "roleId": "tech-support",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见大规模独立暑期实习网申 · 参照 2025/2026 售后技术支持通道",
          "officialTitles": [
            "售后服务实习生（电气方向）",
            "工程技术支持实习生"
          ],
          "internTasks": "在泉州基地跟学搅拌站整机电气装配与出厂调试，协助整理售后常见电气故障案例与客户培训文档，视项目安排跟师父赴现场见习。",
          "responsibilities": [
            "在基地学习大型工程机械电气安装调试规范与常见报警排查流程",
            "协助售后团队整理远程故障咨询记录与设备操作维护手册",
            "协助开展厂内客户培训准备或跟岗见习现场调试"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂基本强弱电控制图纸"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】动手能力强，敢查线、会用万用表测通断电压"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】沟通踏实、抗压、能接受未来转正后高频全国/海外出差"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】会看 PLC 在线状态监控排查信号断点"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】了解电机过载与变频器常见故障码含义"
            }
          ],
          "interviewFocus": [
            "几乎必问：如果转正走售后/调试方向，能不能接受长期去工地/项目现场出差？",
            "看重吃苦耐劳、踏实靠谱与扎根泉州的稳定性"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地学习为主，转正后高频全国/海外出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "泉州本地上市高端装备龙头，对厦门理工等省内工科生非常务实友好，实习竞争压力远小于一线大厂",
          "实习生能接触到真实的工业成套控制柜、西门子 PLC、HMI 与变频器全流程，工控入门含金量极高",
          "提供厂区食堂与住宿协助，泉州实习生活成本低"
        ],
        "watchouts": [
          "较少发布大规模统一“暑期实习网申”，需要 2027 年 3–4 月主动找 HR 直联或盯紧学校春季宣讲会",
          "需要寒假/大三下提前补一点 AutoCAD 制图和西门子 PLC 入门，否则面试容易答不上工控实操问题"
        ]
      },
      "sources": [
        {
          "label": "南方路机官网招聘与校招公告线索（nflg.com）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "nflg.com 官网招聘栏目线索（待核验直达 URL 及可协商 8 周暑期部门）"
        },
        {
          "label": "高校就业网南方路机宣讲与培养简章线索（jlu.edu.cn / nankai.edu.cn / sdu.edu.cn）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "jlu.edu.cn / nankai.edu.cn / sdu.edu.cn 校招宣讲简章线索（待补直链）"
        },
        {
          "label": "公开招聘平台南方路机泉州设备电气/PLC 调试初级岗线索（liepin / zhipin / nowcoder）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "liepin / zhipin / nowcoder 泉州电控/PLC 校招参考线索（待补直链）"
        }
      ],
      "cities": [
        "泉州"
      ]
    },
    {
      "id": "abb-xiamen",
      "name": "ABB（厦门工业中心）",
      "fullName": "ABB 厦门工业中心（含厦门ABB开关/低压电器/电力设备等）",
      "city": "厦门",
      "districts": [
        "厦门火炬高新区（翔安）产业区 ABB 工业园"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "跨国电气巨头（外企）",
      "coreProducts": [
        "中压/低压成套开关柜（如 MNS / UniGear）",
        "断路器与低压元器件",
        "互感器与绝缘件",
        "数字化智慧配电解决方案"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "专项暑期实习 + 常年滚动日常 Intern（外企成熟实习通道）",
        "summer2MonthOk": "支持暑期 2 个月（7–8 月）；日常实习通常要求 3～6 个月",
        "durationReq": "暑期项目约 2 个月（7–8 月）；日常 Intern 常规要求 3 个月以上（部分偏好 6 个月）",
        "weeklyDays": "每周至少出勤 3–4 天（研发/测试岗偏向 4–5 天或全职）",
        "openWindowRef": "参考 2025/2026：全年在官网/51job/猎聘滚动招日常 Intern，3–5 月集中放暑期实习名额",
        "conversionPolicy": "实习表现优异者在秋招 Power U / E Next / 正式岗享有转正绿色通道或直通面试机会",
        "stipendNote": "按外企标准发放实习津贴（具体日薪依厦门对应实体与本科/硕士层级而定，未查到统一公开数额，待核实）",
        "summerFit": "fit-8w",
        "windowGroup": "spring-main",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "中高匹配（简历含金量天花板级，但英语与制图软件是硬分水岭）",
        "reason": "面向全日制统招本科及以上在校生（大三/大四）常年招收电气设计、测试质量、设备维护与数字化/技术支持 Intern；园区就在厦门翔安，极看重英语读写、EPLAN/AutoCAD 基础和规范意识。"
      },
      "internshipAndRecruit": {
        "channels": [
          "ABB 中国官网 Career 实习生专区（careers.abb）",
          "“ABB中国招聘”微信公众号",
          "前程无忧（51job）/ 猎聘搜索“ABB 厦门 实习生”"
        ],
        "program": "日常 Intern / 暑期实习生项目，优秀者可衔接 Power U / E Next 培训生或直接转正",
        "timelineNote": "建议大三下（2027 年 3–4 月）起每周刷一次“ABB中国招聘”与 51job 厦门实习生列表，外企日常实习滚招快、先到先面。",
        "benefits": [
          "规范外企工作环境与 EHS 安全体系",
          "国际标准电气规范（IEC/EPLAN）实战熏陶",
          "具体实习日薪、班车与餐补标准以当期厦门实体 Offer 为准（待核实）"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "研发/工程/测试/技术支持实习生均无倒班（标准外企作息）",
        "travelLevel": "实习生基本在翔安工业园内办公，极少出差",
        "certNote": "实习生不要求提前持电工证，但外企极度看重 EHS 安全合规意识。"
      },
      "matchedRoles": [
        {
          "roleId": "equip-elec",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 真实实习生 JD（ABB 厦门电气设计/助理工程实习生）",
          "officialTitles": [
            "电气设计实习生",
            "助理研发工程师实习生（中低压开关柜方向）"
          ],
          "internTasks": "协助工程部/研发中心绘制或修改开关柜局部电气原理图（AutoCAD/EPLAN）、整理元器件技术资料与 BOM 清单、协助跟进样品试制与文档归档。",
          "responsibilities": [
            "协助开展中低压开关柜或低压电器产品的局部电气原理图绘制与图纸核对",
            "协助整理产品技术文档、部件库信息及 BOM 清单，参与样品装配与测试跟进",
            "协助工程师处理部分英文技术手册查阅与跨部门数据整理"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实的电路与模数电理论基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂基本强弱电控制与配电原理图"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能用 AutoCAD 进行基础电气制图与图纸修改（规范图层、线号与元器件符号）"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】具备良好英语读写能力，能看懂英文产品手册与处理英文邮件"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】了解一次/二次回路、断路器、互感器与 IEC/GB 基础概念"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】了解常见低压断路器/继电器选型规范"
            },
            {
              "name": "SolidWorks 机械识图基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】了解 Creo / SolidWorks 三维看图方便与结构配合"
            },
            {
              "name": "EPLAN 电气设计软件",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会使用 EPLAN Electric P8 绘制二次原理图、导出端子表与物料 BOM 清单更有竞争优势"
            }
          ],
          "interviewFocus": [
            "外企常见 2 分钟英文自我介绍 + 英文技术阅读/简单项目问答",
            "会问用 AutoCAD/EPLAN 画过什么图，以及对 EPLAN 相比 AutoCAD 优势的理解",
            "看重 STAR 法则结构化讲述项目经历，以及能否保证每周 3–5 天稳定到岗"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 真实实习生 JD（ABB 厦门测试开发/过程质量实习生）",
          "officialTitles": [
            "测试开发实习生",
            "过程质量实习生（电气/开关设备方向）"
          ],
          "internTasks": "协助实验室/质量部执行低压电器或开关柜零部件的基础性能测试、整理质量检验数据、协助维护简单测试工装或自动化测试脚本。",
          "responsibilities": [
            "协助开展产品过程质量检验、电气测试数据记录与异常统计分析",
            "在工程师指导下操作基础测试仪表，协助测试台架点检与报告归档",
            "参与简单测试脚本或数据表格自动化整理，提升测试记录效率"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与测控基础"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】熟悉万用表、示波器等实验室常规仪器基本操作"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】数据严谨、能规范整理测试报告与质量统计表"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】能读懂英文测试规范与系统界面"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】测试开发实习生会 Python/C/VBA 做测试数据处理极加分"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解电气绝缘、耐压等基本安规测试概念"
            }
          ],
          "interviewFocus": [
            "考察实验数据严谨度、基础仪表使用常识以及英文读写能力",
            "问做过的课程实验/测试里怎么定位异常原因"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "fab-equip",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生/培训生 JD（设备维护与生产工程实习生）",
          "officialTitles": [
            "设备维护实习生",
            "生产工程 / 精益改善实习生"
          ],
          "internTasks": "在翔安工厂协助工程师执行自动化产线与测试设备的日常点检、更新设备作业指导书（SOP）、整理停机故障与 OEE 统计看板。",
          "responsibilities": [
            "协助落实工厂生产设备与测试设备的日常点检保养（PM）记录",
            "协助编写、更新设备 SOP 与安全操作规程，跟进简单故障排查记录",
            "配合生产工程团队整理产线效率（OEE）与精益改善数据"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂基础产线电气原理图"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【实习底线】理解设备点检、预防性保养与精益效率改善基本概念"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】动手能力强，有条理排查产线设备小故障的潜质"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】协助更新标准作业指导书（SOP）"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】懂西门子/ABB AC500 等 PLC 基础逻辑大加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】能看懂基础机械图或了解气动元件更优"
            }
          ],
          "interviewFocus": [
            "考察工厂环境适应度、动手能力与 EHS 安全意识",
            "问过往项目中排查电路/控制 Bug 的真实案例"
          ],
          "shiftWork": "实习生一般跟随白班导师（具体排班以部门为准，待核实）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 真实实习生 JD（ABB 厦门数字化运营/技术支持配置报价实习生）",
          "officialTitles": [
            "技术支持 / 配置报价实习生",
            "数字化运营实习生（电气方向）"
          ],
          "internTasks": "协助销售支持/工程团队整理客户配电需求、在内部系统做开关柜基础配置报价辅助、整理英文技术邮件与订单交付跟踪表格。",
          "responsibilities": [
            "协助为海内外客户及内部团队整理配电产品选型资料与基础配置报价表",
            "协助处理英文技术文档、订单进度跟踪与跨部门沟通纪要",
            "支持数字化配电运营数据的整理与简单可视化汇报"
          ],
          "skills": [
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】外企核心门槛：能顺畅阅读英文技术文档并撰写英文邮件"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】逻辑清晰、细心、具备良好跨部门协作与服务意识"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】具备基础电气配电与开关元件认知"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】理解开关柜一次/二次方案概念上手报价更快"
            },
            {
              "name": "Modbus / CAN / RS485 通信",
              "category": "通信协议",
              "level": "plus",
              "detail": "【实习加分】数字化运营方向了解 Modbus/Profinet/IEC 61850 概念大加分"
            }
          ],
          "interviewFocus": [
            "重点考察英文口语与书面表达、细致程度与多任务条理性",
            "问对 ABB 数字化配电或开关柜产品的基本了解"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期园区坐班为主"
        }
      ],
      "prosAndCons": {
        "pros": [
          "有非常成熟、透明的暑期（7–8 月 2 个月）与日常（3–6 个月）外企 Intern 通道，且岗位横跨设计、测试、设备与技术支持",
          "ABB 厦门翔安工业中心履历对秋招求职（无论留外企还是去国内储能/电气大厂）都是超强背书",
          "实习生作息规范，不靠无意义加班消耗体力，能学到正统国际电气标准"
        ],
        "watchouts": [
          "英语是明确硬门槛，如果四六级/英文自我介绍/技术英语阅读不过关很容易在初面被刷",
          "日常实习很多偏好 3～6 个月，纯暑期 2 个月名额竞争较激烈，需明年 3 月就紧盯放岗"
        ]
      },
      "sources": [
        {
          "label": "ABB 中国官方招聘申请指南（careers.abb/china/zh/how-to-apply）",
          "date": "2026-11-22",
          "sourceKind": "official-portal",
          "url": "https://careers.abb/china/zh/how-to-apply",
          "lead": null
        },
        {
          "label": "高校就业网与招聘平台 ABB 厦门 2025/2026 Intern 岗位线索（gdut.edu.cn / sjtu.edu.cn / yingjiesheng / liepin）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "gdut.edu.cn / sjtu.edu.cn / yingjiesheng / liepin 厦门 Intern 线索（待按实体与岗别补直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "hithium",
      "name": "海辰储能",
      "fullName": "厦门海辰储能科技股份有限公司",
      "city": "厦门",
      "districts": [
        "厦门市同安区（全球总部、CNAS/TUV 测试中心及智能制造灯塔基地）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "新能源储能头部独角兽（民企）",
      "coreProducts": [
        "储能专用锂离子电芯",
        "储能模组与电池簇",
        "液冷储能集装箱系统（BMS/PCS/EMS）"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "专项暑期实习 + 长期转正实习（“未来星”提前蓄水池）",
        "summer2MonthOk": "支持暑期 2～3 个月（7–8 月）；日常实习偏好 3 个月以上",
        "durationReq": "常规暑期实习 2～3 个月（覆盖 7–8 月完整档期）；日常/衔接转正实习偏好 3 个月以上",
        "weeklyDays": "每周至少出勤 4–5 天（暑期全职到岗）",
        "openWindowRef": "参考 2025/2026：春季（3–5 月）启动暑期实习招聘，秋冬季同步招可长期实习的应届/大三大四生",
        "conversionPolicy": "转正通道极强：暑期实习结束可通过答辩直拿秋招正式 Offer；长期实习表现优异者实习期可直接抵扣试用期",
        "stipendNote": "未查到官方公开统一定额实习日薪（同安园区配套免费宿舍/食堂/班车，具体补贴以当期 Offer 为准，待核实）",
        "summerFit": "fit-8w",
        "windowGroup": "spring-main",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "高匹配（厦门同安本地招聘大户，转正通道清晰）",
        "reason": "统招本科及以上电气工程及其自动化专业可投设备、电气件/系统测试、自动化与技术支持实习；同安基地距厦门高校近，非常鼓励提前实习并通过答辩转正。"
      },
      "internshipAndRecruit": {
        "channels": [
          "海辰储能官方招聘平台 / 小程序（Moka）",
          "“海辰储能招聘”微信公众号",
          "厦门本地高校春季宣讲会与实习专场"
        ],
        "program": "暑期实习生项目 + 双导师制（业务导师 + HR 导师）+ 实习结业答辩直通秋招正式 Offer",
        "timelineNote": "2027 暑期实习预计 2027 年 3–5 月开放；部分核心研发测试实验室偏硕士，本科生建议优先瞄准电气件测试、制造设备/自动化与技术支持实习。",
        "benefits": [
          "实习结业答辩直通转正",
          "同安园区免费宿舍（空调/独立卫浴）或住宿配套",
          "员工食堂/餐补与往返通勤班车",
          "转正留厦可叠加厦门“留厦六条”与人才补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "分岗位：制造产线「设备实习生」需评估车间节奏（正式设备岗涉及 24 小时产线两班倒/白夜班）；研发/测试实验室无固定倒班但节奏较快",
        "travelLevel": "实习期均以厦门同安基地为主，基本不出差（转正后技术支持 AE 出差多）",
        "certNote": "实习生不强制要求提前持电工证，但制造工厂与高压电池测试实验室高度重视安全规范。"
      },
      "matchedRoles": [
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（海辰厦门测试验证中心实习生）",
          "officialTitles": [
            "电气件/系统测试实习生",
            "实验室测试验证实习生（CNAS/TUV 中心）"
          ],
          "internTasks": "在厦门同安 CNAS/TUV 认证测试中心协助执行电芯、模组、电池簇、BMS 或电气件的性能/安全测试；记录充放电与温湿度试验数据并输出规范报告。",
          "responsibilities": [
            "协助开展电池模组、储能系统电气件及 BMS 的基础性能、安全与可靠性测试",
            "严格按 CNAS/TUV 实验室操作规范记录试验数据、整理图表并输出测试报告",
            "协助发现并追踪测试异常，参与简单测试数据处理脚本或效率改进"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实的电工学与基础电路理论"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】数据敏感度高、细致严谨，能规范整理实验报告"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】熟悉万用表、示波器等实验室基础仪器操作"
            },
            {
              "name": "电池充放电与环境可靠性测试设备",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解充放电测试机、温湿度箱或锂电测试流程优先（入职带教）"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解 CNAS/TUV 实验室测试规范与电气安规概念"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】会 Python/Excel 脚本批量处理测试曲线数据大加分"
            }
          ],
          "interviewFocus": [
            "问电工学/电路基础、高校实验室经历与数据异常排查意识",
            "注意：部分核心研发测试实验室偏硕士，本科生面试要重点展示动手实操、细致度与能稳定实习 2～3 个月以上"
          ],
          "shiftWork": "无固定倒班（视测试排期可能加班）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "fab-equip",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（智能工厂设备/自动化实习生）",
          "officialTitles": [
            "设备工程师实习生（同安智能工厂）",
            "产线自动化实习生"
          ],
          "internTasks": "跟岗学习同安灯塔工厂电芯/模组自动化产线设备运行，协助开展设备日常点检保养（PM）、报警记录整理、MES 对接辅助与产线电气维护跟做。",
          "responsibilities": [
            "协助跟进同安制造基地自动化产线设备的日常点检、维护保养（PM）与台账更新",
            "在导师带领下参与设备报警记录分析、故障排查跟做及良率/OEE 数据统计",
            "协助新设备进厂验收（FAT/SAT）记录与一线操作指导书整理"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂自动化产线基础电气原理图"
            },
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】具备扎实电工学、电路或自动控制基础"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】动手能力强、抗压、能适应制造工厂现场节奏"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】了解工厂 PM 保养、FAT/SAT 验收与 OEE 概念"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】熟悉西门子/三菱 PLC 编程或工业机器人基础者极优先"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】能看懂简单机械装配图与气动回路"
            }
          ],
          "interviewFocus": [
            "必问：为什么想进储能/制造行业？能不能适应灯塔工厂车间环境和快节奏？",
            "考察基础电路/PLC/机械识图水平与动手解决问题的真实小案例"
          ],
          "shiftWork": "产线 24h 运转，转正后可能两班倒/白夜班（实习期排班面试时务必确认）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生/初级岗 JD（储能电气实习生）",
          "officialTitles": [
            "电气工程师实习生（储能系统/工厂电气方向）"
          ],
          "internTasks": "协助储能系统或工厂配电团队完成局部电气原理图绘制（AutoCAD/EPLAN）、器件参数与 BOM 整理及基础样机调试配合。",
          "responsibilities": [
            "协助开展储能电池舱、PCS 配套或工厂产线的局部电气原理图绘制与 BOM 核对",
            "配合工程师参与电气器件选型资料整理与样机/产线基础调试记录",
            "协助编写基础电气技术规范与测试验证文档"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、电力电子与自动控制原理"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能准确识读储能/工业电气原理图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】了解高低压配电基础及常见开关、继电器、线缆概念"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD / EPLAN 绘图，偏板级方向会 Altium Designer 更优"
            },
            {
              "name": "电力电子拓扑（整流/斩波/逆变）",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】理解储能变流器 PCS 与直流变换基础原理"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】协助整理电气规范与验证报告"
            }
          ],
          "interviewFocus": [
            "问电路、电力电子、自控基础课内容及用过哪些电气绘图/仿真软件",
            "考察实干风格、团队协作与连续实习时长"
          ],
          "shiftWork": "无倒班（节奏较快）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见单独公开技术支持实习细则 · 参照 2025/2026 储能 AE/技术支持初级岗折算",
          "officialTitles": [
            "储能技术支持 / 应用工程实习生（AE 方向）"
          ],
          "internTasks": "协助整理储能系统（BMS/PCS/EMS）售前技术方案、客户技术答疑文档及培训 PPT，跟进内部项目交付资料核对。",
          "responsibilities": [
            "协助编制储能系统售前技术方案、参数对比表与客户宣讲材料",
            "协助整理项目现场技术交底记录与常见运维问答知识库",
            "配合团队对接研发与供应链，跟踪客户技术需求反馈"
          ],
          "skills": [
            {
              "name": "储能系统架构（BMS / PCS / EMS）",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】理解储能系统里电池簇、BMS、PCS、EMS 各自干什么"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂储能集装箱基本电气一次/二次框图"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】表达条理清楚、抗压、有方案呈现能力"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】具备系统级故障定位思维"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】海外储能支持方向看重 CET-6 与英语听说读写"
            }
          ],
          "interviewFocus": [
            "问对储能行业及 BMS/PCS/EMS 基本架构的理解",
            "考察沟通表达、抗压意愿及（海外方向）英语能力"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地支持为主，转正后高频国内/海外出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "明确支持 7–8 月 2～3 个月暑期实习（每周 4–5 天），且结业答辩可直通秋招正式 Offer、长期实习可抵试用期",
          "同安基地就在厦门本地，食宿班车配套齐全，对厦门理工等本地工科生友好",
          "CNAS/TUV 测试中心和灯塔工厂平台大，暑期实习履历含金量高"
        ],
        "watchouts": [
          "核心研发测试部分偏硕士，大三本科投递时优先选「电气件测试」「制造设备/自动化」「电气辅助」更稳",
          "制造产线设备岗工作节奏快且转正后可能涉及两班倒，面试时务必问清具体部门作息"
        ]
      },
      "sources": [
        {
          "label": "海辰储能官方招聘门户（cn.hithium.com/about/careers.html）",
          "date": "2026-11-22",
          "sourceKind": "official-portal",
          "url": "https://cn.hithium.com/about/careers.html",
          "lead": null
        },
        {
          "label": "高校就业网海辰储能“未来星”校招简章（career.muc.edu.cn）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://career.muc.edu.cn/front/zwxx.jspa?xqzwId=38471&zpxxId=32179",
          "lead": null
        },
        {
          "label": "公开招聘平台海辰厦门同安测试/设备/电气实习岗位线索（iguopin / liepin / wondercv）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "iguopin / liepin / wondercv 同安暑期 8 周实习与转正答辩线索（待补具体岗位直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "hongfa",
      "name": "宏发股份",
      "fullName": "厦门宏发电声股份有限公司（含海沧宏发电力电器）",
      "city": "厦门",
      "districts": [
        "厦门市集美区（总部及核心研发制造基地）",
        "厦门市海沧区一农路（宏发电力电器·智能电网/高压直流继电器）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "A股上市民企（SH 600885 · 全球继电器龙头）",
      "coreProducts": [
        "通用/汽车/新能源高压直流继电器",
        "中低压电器与开关模块",
        "自动化精密装配产线设备"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "专项暑期实习 + 常年日常实习（高校双选会与实习僧/Boss 活跃）",
        "summer2MonthOk": "支持暑假 1.5～3 个月（7–8 月）；日常实习要求 3 个月以上",
        "durationReq": "暑期实习约 1.5～3 个月（7–8 月）；日常实习连续不少于 3 个月",
        "weeklyDays": "每周出勤 3–5 天（暑期建议全职）",
        "openWindowRef": "参考 2025/2026：3–5 月开放暑期实习并在厦门理工/集美大学等校办宣讲双选，全年在实习僧/Boss 滚招日常实习",
        "conversionPolicy": "1 对 1 导师帮扶，暑期/日常实习表现优异者可在毕业前直拿秋招或春招正式转正 Offer",
        "stipendNote": "提供实习补贴、免费工作餐/餐补、公寓式宿舍（如 4 人间）与免费班车（具体实习日薪标准待核实）",
        "summerFit": "fit-8w",
        "windowGroup": "spring-main",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "极高匹配（就在集美/海沧，与厦门理工校企联动紧密）",
        "reason": "宏发总部就在集美区（离厦门理工极近），常年在校内开展专场宣讲与双选会；本科电气/自动化/测控专业可投电气设计、自动化设备、产品可靠性测试三大对口实习方向，且实习常包吃住班车。"
      },
      "internshipAndRecruit": {
        "channels": [
          "“宏发股份招聘”官方公众号 / 官网校招",
          "厦门理工学院就业网与校内专场双选会",
          "实习僧 / Boss 直聘 / 前程无忧搜索“宏发股份 厦门 实习”"
        ],
        "program": "1 对 1 导师带教 + 一线岗位历练 + 实习表现优异直通校招转正",
        "timelineNote": "2027 暑期实习预计 2027 年 3–5 月开放；集美总部与海沧宏发电力电器均会放岗，建议同步关注。",
        "benefits": [
          "免费工作餐或餐补",
          "免费标准化公寓宿舍（拎包入住）",
          "免费上下班通勤班车",
          "转正后享五险一金/补充保障、年终双薪与厦门人才补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "研发/测试/电气设计实习生无倒班；产线自动化/设备实习生需深入制造一线（具体排班以事业部为准，待核实）",
        "travelLevel": "实习期均在厦门集美/海沧基地，基本不出差",
        "certNote": "实习生不要求提前考电工证，但非常看重动手实操与扎根制造一线的踏实态度。"
      },
      "matchedRoles": [
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（宏发测试/质量可靠性实习生）",
          "officialTitles": [
            "电气测试实习生",
            "质量 / 可靠性试验实习生（检测分析方向）"
          ],
          "internTasks": "协助实验室开展继电器、高压直流接触器及低压电器新品的性能测试、寿命/可靠性试验与失效样品记录，整理测试数据报告。",
          "responsibilities": [
            "协助开展继电器及低压电器产品的电性能、温升、机械寿命与可靠性试验",
            "记录试验过程中的电压/电流/通断波形数据，协助输出检测与失效分析基础报告",
            "协助维护实验室基础测试工装、参与测试标准资料整理"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、电磁铁/线圈吸合（磁路）与触点通断电基础"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】会用示波器抓继电器吸合/释放波形与弹跳时间，会用万用表测接触电阻"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】细致踏实，能规范整理大批量寿命/可靠性试验数据表"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解绝缘耐压、温升与安规试验标准概念更优"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】测试设备升级或自动数据采集方向会 C/Python/LabVIEW 基础加分"
            }
          ],
          "interviewFocus": [
            "考察基础电路分析、测试原理与对继电器/电磁元件工作的直观理解",
            "结合简历课程实验/项目问异常排查过程，看重踏实稳重与抗压能力"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（宏发电气设计/自动化产线电气实习生）",
          "officialTitles": [
            "电气工程师实习生",
            "自动化产线电气设计实习生"
          ],
          "internTasks": "协助自动化装备团队绘制非标装配线局部电气原理图、核对低压元器件与传感器选型表，并参与厂内自动装配设备的基础通电调试。",
          "responsibilities": [
            "协助开展高精度自动化装配产线或低压电器系统的局部电气原理图绘制（AutoCAD）",
            "协助整理气缸传感器、PLC、伺服/步进驱动器及低压电器 BOM 清单",
            "在导师带领下参与厂内自动化设备接线核查与基础联调"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实的电路基础与基本电气控制知识"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能读懂自动化非标产线控制回路图纸"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】熟悉 AutoCAD 基础绘图（懂 EPLAN 更优）"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】认识继电器、接触器、开关电源与常见工业传感器"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】懂三菱/西门子/欧姆龙 PLC 基础控制逻辑极受自动化部门欢迎"
            },
            {
              "name": "SolidWorks 机械识图基础",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会看 SolidWorks 装配图方便对接非标自动化机械团队"
            }
          ],
          "interviewFocus": [
            "考察电路基础、AutoCAD 制图、PLC 或单片机动手经历",
            "看重对精密制造业的认同感与长期在厦门发展的意愿"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "fab-equip",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（宏发自动化设备/TPM 运维实习生）",
          "officialTitles": [
            "设备工程师实习生（自动化装配线）",
            "自动化 / TPM 技术实习生"
          ],
          "internTasks": "在集美或海沧自动化车间跟岗学习高精度继电器装配线运行，协助处理设备日常保养（TPM）、传感器微调、停机故障记录与自动化效率改善。",
          "responsibilities": [
            "协助开展继电器自动化装配产线的日常设备点检、TPM 维护保养与异常记录",
            "在师父带领下参与设备传感器、电气回路及气动执行件的小故障排查",
            "协助统计产线停机原因与自动化良率改善数据"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂车间自动化机台基础电气图纸"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】动手意愿强、愿意深入制造一线查问题"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【实习底线】理解 TPM 全员生产维护、预防性保养与提效思路"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】会在线看 PLC I/O 状态辅助查产线卡料/停机极加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】熟悉气缸、电磁阀等自动化装配常用气动元件"
            }
          ],
          "interviewFocus": [
            "考察动手实操经历、是否愿意下车间一线扎根历练",
            "问基础电气/PLC/传感器排故逻辑"
          ],
          "shiftWork": "以白班一线跟岗为主（具体看车间排班，待核实）",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "总部就在厦门集美区（离厦门理工最近的一线制造龙头），暑期 1.5～3 个月即可投，且常配免费食宿与班车",
          "产品（继电器/高压直流接触器）和你学的磁路、电路、电机学底层物理完全相通，面试容易聊深",
          "拥有海量自主研发的非标自动化装配线，想练「电气设计 + PLC + 自动化测试」一站式全能看得到"
        ],
        "watchouts": [
          "制造业风格非常务实，注重扎根一线车间历练，面试切忌眼高手低",
          "自动化设备/电气设计方向提前学一点 AutoCAD 和基础 PLC 梯形图会明显拉开差距"
        ]
      },
      "sources": [
        {
          "label": "宏发股份官方校园招聘平台（hongfa.zhiye.com/Campus）",
          "date": "2026-11-22",
          "sourceKind": "official-portal",
          "url": "https://hongfa.zhiye.com/Campus",
          "lead": null
        },
        {
          "label": "厦门理工学院等省内高校宏发春招与实习宣讲线索（xmut.edu.cn / fzu.edu.cn / iguopin）",
          "date": "2026-11-22",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "xmut.edu.cn / fzu.edu.cn / iguopin 集美/海沧基地实习及食宿线索（待补具体实习批次直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "schneider-xiamen",
      "name": "施耐德电气（厦门）",
      "fullName": "施耐德电气（厦门）开关设备有限公司",
      "city": "厦门",
      "districts": [
        "厦门市翔安区（翔安火炬园区 / 马巷工业园制造基地）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "世界 500 强跨国电气巨头（外企）",
      "coreProducts": [
        "中低压成套开关设备",
        "预制数据中心电力模块",
        "UPS 及配电自动化成套产品"
      ],
      "researchedAt": "2026-11-22",
      "internshipProfile": {
        "internType": "专项暑期实习（商业/供应链新星预科）+ 常年日常 Intern（Intern-to-Fulltime 强转正）",
        "summer2MonthOk": "支持暑期约 3 个月（通常 6–9 月，需核对期末考试周衔接）；日常实习 3～6 个月",
        "durationReq": "暑期项目一般为期约 3 个月（6–9 月）；日常实习要求 3～6 个月（越稳定越易转正）",
        "weeklyDays": "每周出勤 3–5 天（暑期偏向全职）",
        "openWindowRef": "参考 2025/2026：春季（3–5 月）启动暑期实习生计划与新星预科，全年在官网/Boss 滚招日常实习生",
        "conversionPolicy": "典型外企 Intern-to-Fulltime 选拔模式：具备清晰的实习转正评估流程，实际留用名额以当期 HC 与结业表现考核为准",
        "stipendNote": "外企规范实习津贴 + 翔安厂区工作餐/往返岛内外班车（具体日薪未见官方统一披露，待核实）",
        "summerFit": "need-3m",
        "windowGroup": "spring-main",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "中高匹配（WLB 口碑极佳的翔安外企标杆，重细致规范与英文读写）",
        "reason": "本科及以上面向电气工程及其自动化、自动化、电力电子、测控招收测试、质量与技术支持实习生；与 ABB 同在翔安形成外企双雄，制造/测试/质量实习对英语口语相对宽容但强调英文读写与逻辑闭环。"
      },
      "internshipAndRecruit": {
        "channels": [
          "施耐德电气官网校招/实习生专区（se.com）",
          "“施耐德电气招聘”官方公众号",
          "Boss 直聘 / 前程无忧搜索“施耐德 厦门 实习”"
        ],
        "program": "暑期实习生计划 / 新星计划预科 + 导师带教（Mentor 制）+ Intern-to-Fulltime 转正评估",
        "timelineNote": "注意施耐德暑期实习偏 6–9 月（约 3 个月），2027 年 3–4 月投递时提前规划好大三下期末周与到岗衔接。",
        "benefits": [
          "Work-Life Balance 文化口碑极好、少无意义加班",
          "翔安厂区工作餐/餐补与岛内外通勤班车",
          "转正后享最高基数六险一金、商业补充医疗险与带薪年/病假"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "测试/质量/技术支持实习生均无倒班（规范外企作息）",
        "travelLevel": "实习期在翔安工厂办公，基本不出差",
        "certNote": "实习生不要求提前考电工证，但外企出厂测试与开关柜厂验极度强调安全规程与操作合规。"
      },
      "matchedRoles": [
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 真实实习生 JD（施耐德厦门电气测试 / 过程质量实习生）",
          "officialTitles": [
            "测试工程师实习生（开关柜/电力模块出厂测试）",
            "过程质量 / 项目质量实习生"
          ],
          "internTasks": "在翔安工厂协助执行中压开关柜、预制数据中心电力模块与 UPS 的出厂电气功能测试；按标准填写测试与检验报告，协助工程师准备客户厂验（FAT）及质量异常根因分析（RCA/8D）。",
          "responsibilities": [
            "协助开展中低压开关柜、预制电力模块与 UPS 的出厂电气功能测试及检验记录",
            "按国际与厂内规范整理测试报告、协助工程师完成客户出厂验收（FAT）准备",
            "参与生产过程质量检验数据统计，协助开展根因分析（RCA/8D）与持续改善（Kaizen）"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与电气设备基础知识"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂开关柜与配电模块基础电气图纸"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】掌握万用表等常规电气测试仪表使用，动手能力强"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】极度注重细节、规范填写英文/中文测试与检验报告"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】能看懂英文 SOP、图纸标注与测试系统界面（HR 面可能简短切英文）"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】了解中低压配电与开关柜出厂测试基本流程"
            },
            {
              "name": "质量工具与 8D/RCA 分析",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】了解测试质量缺陷统计、8D/RCA 根因分析与 FMEA 基本概念更易通过外企质量面"
            }
          ],
          "interviewFocus": [
            "网申后有性格与逻辑认知在线测评，HR 面可能突然切换英语简单问答（准备 1 分钟英文自我介绍）",
            "业务面高频：测试/质量岗常问 8D、RCA（根因分析）、Lean 精益基础概念以及 STAR 法则复盘项目",
            "非常看重施耐德价值观匹配度（客户至上、主动改善、逻辑闭环与团队包容）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "tech-support",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 真实实习生 JD（施耐德现场技术执行/商业新星技术支持实习生）",
          "officialTitles": [
            "技术支持实习生（新星计划预科）",
            "现场技术执行实习生"
          ],
          "internTasks": "协助团队支持工业或楼宇配电/自动化项目的技术交底材料整理、方案选型辅助、客户技术资料核对及前端销售技术支持。",
          "responsibilities": [
            "协助支持电气化、自动化项目在工业或楼宇领域的方案整理与技术交底文档编写",
            "配合资深工程师响应前端销售与客户的基础产品技术咨询",
            "整理项目执行进度表与数字化配电产品资料"
          ],
          "skills": [
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】具备扎实低/中压配电与电气设备基础概念"
            },
            {
              "name": "客户沟通与现场抗压",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】逻辑清晰、善于协作沟通、注重响应闭环"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】商业/技术支持类外企实习重视英文读写与基本口语交流"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能读懂基本配电系统图与控制图"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】了解施耐德配电产品线或开关柜架构更易获青睐"
            }
          ],
          "interviewFocus": [
            "行为面试占比高：用 STAR 法则讲清楚“你如何主动推动解决一个复杂协作问题”",
            "考察英语沟通、客户思维与对工业数字化/绿色能源的理解"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地支持为主"
        }
      ],
      "prosAndCons": {
        "pros": [
          "外企中 Work-Life Balance 口碑顶尖、不提倡无效加班，且 Intern-to-Fulltime 转正机制透明友好",
          "测试/质量实习岗位与大三电气本科生匹配度高，面试对英语口语相对核心研发岗更宽容（重读写+基础表达）",
          "能真实接触中压开关柜、预制数据中心电力模块与 UPS 出厂测试及 FAT 厂验，工程规范含金量极高"
        ],
        "watchouts": [
          "暑期实习项目常按 6–9 月（约 3 个月）排期，需提前确认大三下考试周请假/衔接安排",
          "面试前除了电气基础，务必花半小时补齐 8D / RCA 根因分析、精益改善（Lean/Kaizen）和 1 分钟英文自我介绍"
        ]
      },
      "sources": [
        {
          "label": "施耐德电气中国官方招聘门户（careers.se.com/china）",
          "date": "2026-11-22",
          "sourceKind": "official-portal",
          "url": "https://careers.se.com/china",
          "lead": null
        },
        {
          "label": "施耐德电气 2025 年暑期实习生项目专页（zhipin.com/zt/schneider/shixisheng.html）",
          "date": "2026-11-25",
          "sourceKind": "intern-notice",
          "url": "https://www.zhipin.com/zt/schneider/shixisheng.html",
          "lead": null
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "fara-electronics",
      "name": "法拉电子",
      "fullName": "厦门法拉电子股份有限公司",
      "city": "厦门",
      "districts": [
        "厦门市海沧区新园路 99 号（海沧总部及三大制造厂区）"
      ],
      "track": "电力电子/储能与配电",
      "companyType": "A股上市民企（SH 600563 · 全球薄膜电容器龙头/单项冠军）",
      "coreProducts": [
        "新能源汽车薄膜电容器",
        "光伏/风电储能薄膜电容器",
        "工业控制与家电用薄膜电容器",
        "金属化薄膜产线自动化装备"
      ],
      "researchedAt": "2026-11-23",
      "internshipProfile": {
        "internType": "以校园招聘衔接的「毕业前顶岗/见习转正实习」为主（较少针对非应届生的独立暑期网申）",
        "summer2MonthOk": "较少独立大三 2 个月暑期网申（多为大四/毕业前顶岗见习，大三暑期需春季直联 HR 协商）",
        "durationReq": "未见公开统一 2 个月暑期项目要求；常规毕业前顶岗/见习实习多为 3 个月以上直接衔接转正",
        "weeklyDays": "全职跟班/标准工时（每周 5 天，具体按厂区产线或研发部门排期，待核实）",
        "openWindowRef": "参考 2025/2026：主要随春招（3–4 月）与秋招（9–11 月）在厦门高校开展宣讲双选，未见独立暑期实习大规模网申",
        "conversionPolicy": "入职后配「1 对 1 导师制」带教，毕业前顶岗/见习期表现合格直接转正留用（技术与管理双通道）",
        "stipendNote": "公开招聘简章显示大专/本科入职实习见习期扣除社保后税后实领约 4,000+ 元/月（加班/夜班另算），提供免费两人间宿舍与免费三餐（大三短期暑期日薪未见公开披露，待核实）",
        "summerFit": "long-or-senior",
        "windowGroup": "autumn-watch",
        "evidenceStatus": "campus-inferred"
      },
      "fitForXmut": {
        "level": "中高匹配（海沧本地薄膜电容全球龙头，食宿全包但更适合大四顶岗/春招直联）",
        "reason": "与厦门理工、集美大学等本地工科院校校招合作紧密，电气/自动化/测控本科生可匹配设备工程、产线自动化电气与产品工艺测试方向；不过大三暑假想进需春季主动发邮件给 farahr@faratronic.com.cn 或在双选会现场直联询问。"
      },
      "internshipAndRecruit": {
        "channels": [
          "法拉电子官网人才招聘专栏（faratronic.com.cn）",
          "官方招聘邮箱直投（farahr@faratronic.com.cn）",
          "厦门本地高校春/秋招双选会及前程无忧/WonderCV/Boss 直聘"
        ],
        "program": "1 对 1 入职导师制 + 产线/技术岗见习轮岗 + 技术与管理双通道晋升",
        "timelineNote": "2027 年春季（3–4 月）若想争取大三暑期实习，切勿空等网申入口，建议直接带简历和成绩单联系官方招聘邮箱或校内双选会 HR 询问非应届短周期实习机会。",
        "benefits": [
          "海沧厂区免费员工宿舍（标准两人间，配空调热水器）",
          "免费一日三餐与厂区通勤班车",
          "转正后五险一金、满三年享企业年金、可协助办理厦门落户与节日礼金"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "分部门：工艺/研发测试岗以常白班为主；分厂产线设备与制造维护岗视产线排班可能涉及跟班或倒班（面试需核实）",
        "travelLevel": "实习与工作均在厦门海沧三大厂区，极少出差",
        "certNote": "不强制实习前持电工证，但产线设备维护重视低压电气安全与动手实操能力。"
      },
      "matchedRoles": [
        {
          "roleId": "fab-equip",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立公开暑期实习 JD · 参照 2025/2026 校招初级岗（设备工程师 / 设备维护技术岗）折算",
          "officialTitles": [
            "设备工程师（参照校招初级岗折算）",
            "产线设备维护与自动化技术岗"
          ],
          "internTasks": "协助分厂工程师开展薄膜电容器卷绕、镀膜、喷金、分切等自动化设备日常使用管理与点检，协助编制设备操作保养规程（SOP）、整理备品备件台账并跟学 PLC/电气故障排除。",
          "responsibilities": [
            "协助负责海沧分厂自动化生产设备的日常点检、维护保养与备品备件/工装管理",
            "在导师带领下参与产线设备电气与机械小故障排查，保障产线平稳运转",
            "协助编写与更新设备操作规程、保养规程，并参与局部设备改造数据整理"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能读懂自动化产线电气控制回路与元器件图纸"
            },
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】扎实的电气、自动控制或机电一体化基础理论"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】踏实肯干、乐于深入车间一线排查设备异常"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【校招折算底线】具备设备点检、预防性保养与规程记录意识"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【官网明确优先项】掌握 PLC 编程（梯形图或 ST 语言）者优先考虑"
            },
            {
              "name": "测试上位机基础（LabVIEW / C#）",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【官网明确优先项】了解上位机编程软件（如 C# 或 LabVIEW）者优先"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】能看懂基本工装机械图、了解气缸与张力控制基础更优"
            }
          ],
          "interviewFocus": [
            "官网明确点出「会 PLC（梯形图/ST）与上位机（C#/LabVIEW）优先」，面试大概率围绕实操项目深挖",
            "看重性格开朗、踏实稳定、是否愿意长期扎根厦门海沧制造一线（并询问对可能倒班/加班的接受度）"
          ],
          "shiftWork": "部分产线设备岗涉及倒班或跟班（以分厂为准，待核实）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立公开暑期实习 JD · 参照 2025/2026 校招电气与工艺自动化岗折算",
          "officialTitles": [
            "电气工程师（产线技改与自动化方向）",
            "工艺 / 设备电气工程岗（参照校招折算）"
          ],
          "internTasks": "协助开展制造产线非标改造或工装测试台的局部电气原理图绘制、低压元器件核对、PLC 逻辑辅助测试以及新产品开发过程设计文档整理。",
          "responsibilities": [
            "协助分厂及自动化团队进行产线电气改造的局部图纸绘制与控制柜元器件选型核对",
            "配合工程师编写设备电气工艺文件、FMEA 及新产线导入调试记录",
            "协助推进产线传感器、伺服与低压配电系统的标准化整理"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】扎实的电路分析与电气控制理论功底"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能准确读懂并核对产线电气控制柜原理图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】熟悉接触器、断路器、继电器与常见工业传感元件"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD 绘制电气原理图与接线图"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】掌握 PLC 基础控制逻辑在技改方向非常吃香"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】协助编写工艺文件、FMEA 与调试作业手册"
            }
          ],
          "interviewFocus": [
            "考察基础电路/强弱电控制常识与在校电气制图、课程设计动手深度",
            "问对薄膜电容器行业及在厦门海沧稳定发展的规划"
          ],
          "shiftWork": "以白班研发/工程作息为主",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立公开暑期实习 JD · 参照 2025/2026 校招工艺质量/成品测试岗折算",
          "officialTitles": [
            "测试工程师 / 质量与工艺试验岗（参照校招折算）",
            "薄膜电容器电性能测试辅助岗"
          ],
          "internTasks": "协助实验室与质量部门开展薄膜电容器耐压、容值、损耗角、温升等电性能测试及测试工装日常维护，整理现场质量异常统计表与技术文件。",
          "responsibilities": [
            "协助执行薄膜电容器成品及来料电性能测试、可靠性试验与数据记录",
            "协助处理生产现场技术与质量异常分析，编写检验与试验统计文件",
            "配合优化产线测试工装或测试数据分析流程"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】深刻理解电容充放电、ESR、耐压与交流损耗等基础概念"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【校招折算底线】熟练使用万用表、LCR/示波器等常规电测仪器"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】耐心细致，能规范整理实验数据与质量/FMEA 文档"
            },
            {
              "name": "安规与 EMC 测试基础",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解高压绝缘耐压、击穿测试与元件可靠性标准"
            },
            {
              "name": "测试上位机基础（LabVIEW / C#）",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】掌握上位机（LabVIEW/C#）或脚本统计大批量测试数据更优"
            }
          ],
          "interviewFocus": [
            "薄膜电容与新能源/光伏逆变器直流支撑高度相关，理解电容基本电参数（容值/ESR/纹波电流/耐压）很加分",
            "考察实验数据严谨性、沟通协作与抗压度"
          ],
          "shiftWork": "研发/质量实验室常白班为主（产线质量支援视情况）",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "全球薄膜电容器行业绝对龙头，新能源/光伏/储能核心上游，在海沧本地经营极稳健且待遇性价比高（包免费三餐+两人间宿舍+班车）",
          "官方公开岗位直接点明「掌握 PLC（梯形图/ST）与上位机（C#/LabVIEW）优先」，技能风向标非常清晰",
          "与厦门本地高校联动深，是秋招保底/稳妥留厦的优质制造名企"
        ],
        "watchouts": [
          "未设大规模大三 2 个月独立暑期网申批次，大三暑期想进去不能干等网申，必须春季主动邮件/现场联系 HR 沟通",
          "部分分厂产线设备岗涉及跟班或倒班，投递前需核清具体属制造分厂还是研发/工艺部门"
        ]
      },
      "sources": [
        {
          "label": "法拉电子官方招聘与设备/工艺工程师 JD 线索（faratronic.com.cn）",
          "date": "2026-11-23",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "faratronic.com.cn 官方招聘线索（待核验直达 URL 及 PLC/上位机具体岗位原文）"
        },
        {
          "label": "高校就业网与招聘平台法拉电子校招/顶岗见习简章线索（fjpit.edu.cn / wondercv / nowcoder）",
          "date": "2026-11-23",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "fjpit.edu.cn / wondercv / nowcoder 顶岗见习食宿与大三暑期情况线索（待补直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "tianma-xiamen",
      "name": "天马微电子（厦门）",
      "fullName": "厦门天马微电子有限公司 / 厦门天马显示科技有限公司",
      "city": "厦门",
      "districts": [
        "厦门市翔安区（火炬高新区翔安产业区 TM16/TM18/TM19 基地）"
      ],
      "track": "半导体/光电与精密制造",
      "companyType": "央企控股上市公司（中航工业旗下深天马 A · SZ 000050）",
      "coreProducts": [
        "LTPS-LCD 中小尺寸显示面板",
        "第 6 代柔性 AMOLED 面板",
        "车载与工控专业显示模组",
        "Micro-LED 新型显示产线"
      ],
      "researchedAt": "2026-11-23",
      "internshipProfile": {
        "internType": "T-MAN 专项暑期实习（春季开放）+ 常年日常/顶岗实习",
        "summer2MonthOk": "支持暑期约 2 个月（7–8 月）；日常/顶岗实习偏好 3 个月以上",
        "durationReq": "暑期实习约 2 个月（7–8 月）；日常或毕业前顶岗实习通常要求 3～6 个月",
        "weeklyDays": "每周出勤 4–5 天（暑期全职到岗，产线设备岗需配合产线排班）",
        "openWindowRef": "参考 2025/2026：3–5 月开放春招及暑期实习专项（4–6 月集中面试），7–9 月启动 T-MAN 秋季校招",
        "conversionPolicy": "「T-Plan」导师一对一带教，暑期实习表现优异并通过考核答辩者可获秋招「Offer 直通车」提前转正资格",
        "stipendNote": "提供本科实习津贴（公开求职平台参考约 100–200 元/天或税前 4,000–6,000 元/月含补助与加班/倒班津贴，具体以厦门当期 Offer 为准，待核实）；配宿舍、食堂餐补、班车与夜班补贴",
        "summerFit": "fit-8w",
        "windowGroup": "may-early",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "高匹配（厦门翔安大型央企背景制造基地，对双非工科本科友好、留用通道宽）",
        "reason": "电气工程及其自动化、自动化、测控本科生可精准投递「厂务电气」「产线设备工程」「显示电测」三大实习方向；但需提前评估是否能接受洁净室无尘服与面板厂倒班节奏。"
      },
      "internshipAndRecruit": {
        "channels": [
          "天马微电子校招官网（Moka 系统）",
          "“天马微电子招聘” / “天马招聘”官方微信公众号",
          "厦门本地高校就业网及前程无忧/猎聘/Boss 直聘厦门基地直招"
        ],
        "program": "T-MAN 校园招聘体系 + T-Plan 老带新导师制 + 暑期实习答辩 Offer 直通车",
        "timelineNote": "2027 暑期实习预计 2027 年 3–5 月开放网申（4–6 月面试，7–8 月入职 2 个月）；不想倒班的电气本科生优先选「厂务电气」白班或先确认具体科室排班。",
        "benefits": [
          "集体宿舍（4–6 人间，空调热水）或住房补贴",
          "园区食堂/餐补与厦门岛内外班车",
          "夜班津贴与高温补贴（按排班政策）",
          "转正后享央企规范六险一金（含补充医疗）与定期体检"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "分岗位：产线「设备工程」「测试」因 7×24 运转多涉及白夜班两班倒（或工程师轮流值班）；「厂务电气」分白班运维与 24h 值班运行（面试务必确认）",
        "travelLevel": "实习与工作均在厦门翔安园区，极少出差",
        "certNote": "入职体检必查「色盲/色弱」（面板点检硬性要求）；厂务电气岗考取高低压电工证或特种设备意识会加分。"
      },
      "matchedRoles": [
        {
          "roleId": "fab-equip",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（厦门天马设备工程师/产线设备实习生）",
          "officialTitles": [
            "设备工程师实习生（Array / Cell / Module 段）",
            "产线设备技术员实习生（厦门翔安基地）"
          ],
          "internTasks": "穿戴全套无尘服进入翔安面板洁净室（Cleanroom），跟岗学习高精度镀膜/光刻/贴合机台的日常点检、预防性保养（PM）、报警记录整理、SOP 修订与设备稼动率（Uptime）数据统计。",
          "responsibilities": [
            "协助开展 Array/CF/Cell/Module 段生产设备的日常巡检、点检与预防性保养（PM）",
            "在师父带领下记录机台报警代码、协助排查简单电气/传感器异常以提升稼动率",
            "协助更新设备标准作业程序（SOP）、备品备件统计与新机台验收跟学"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂自动化机台基础电气与控制信号图纸"
            },
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】具备电工学、电路及基础自动控制知识"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】抗压能力强、动手意愿足，接受穿无尘服与产线快节奏"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【实习底线】理解设备点检、PM 保养、Uptime/OEE 与安全生产（LOTO）意识"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能规范协助编写 SOP 与机台故障复盘记录"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】熟悉 PLC 逻辑或传感器信号诊断在设备科非常加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】懂基础机械传动、气动/真空阀门元件更易上手"
            }
          ],
          "interviewFocus": [
            "几乎必问：对进无尘室穿无尘服、白夜班倒班及产线快节奏的心理准备",
            "情景排查题：如果深夜机台突然报警停机，你第一步、第二步会怎么做？（安全锁止 LOTO → 查 SOP 与报错代码 → 上报协调）",
            "近年来天马初面常含 AI 面试（行为题+部分岗位简短英文自我介绍/看图说话）"
          ],
          "shiftWork": "产线 7×24 运转，多涉及白夜班两班倒或轮班值守（实习期跟班制视科室而定）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（厦门天马厂务电气/动力系统实习生）",
          "officialTitles": [
            "厂务电气工程师实习生（Facility）",
            "厂务动力系统工程实习生"
          ],
          "internTasks": "在翔安基地厂务部协助监控厂区高低压供配电、变配电设备、UPS 应急电源及洁净室动力系统的运行参数，参与日常巡检记录、EHS 安全隐患排查与节能统计。",
          "responsibilities": [
            "协助监控厂务高低压供配电系统、变压器、UPS 及动力照明设备的稳定运行",
            "参与配电房与动力管网日常巡检、运行数据记录及预防性维护资料整理",
            "严格落实 EHS 电气安全规范，协助整理厂务节能降耗与改造项目资料"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能读懂厂区高低压一次/二次配电系统图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】熟悉断路器、变压器、继电保护及配电安全常识"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】懂高压供配电倒闸、UPS 备电与继电保护原理极大加分"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD 查阅或修改厂务配电改造图纸"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】严谨细心，能规范记录电力巡检与 EHS 安全台账"
            }
          ],
          "interviewFocus": [
            "电气专业对口题：高低压配电系统常识、变压器/配电柜安全操作规程、PLC/自控基础",
            "极度看重安全意识（强电高压零容错）与应急值守责任心"
          ],
          "shiftWork": "工程规划岗以白班为主；厂务运行值班岗需保障 24h 供电而涉及轮班（面试需确认）",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "参考 2025/2026 实习生公开 JD（厦门天马显示电测/产品测试实习生）",
          "officialTitles": [
            "产品测试实习生（Array / Module 电测方向）",
            "显示光学与电性能测试实习生"
          ],
          "internTasks": "协助执行手机/车载显示面板的点灯测试、电性能检测与 ATE/AOI 测试机台辅助操作，统计良率（Yield）与不良 Issue 数据并及时隔离上报。",
          "responsibilities": [
            "协助开展显示面板在生产过程中的电性能测试、点灯检验及不良品拦截记录",
            "统计测试良率数据与常见不良分布，辅助工程师排查测试程序或治具小问题",
            "配合维护 ATE/AOI 测试机台日常点检与测试规范归档"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】掌握基础模拟/数字电路与常用电子元器件特性"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【实习底线】熟练操作万用表、示波器排查测试治具与信号异常"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】数据敏感度高，细心规范整理良率统计表"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】了解测试程序脚本或数据处理工具可提升效率"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】部分机台界面为英文且 AI 面试可能含英文简介环节"
            }
          ],
          "interviewFocus": [
            "体检红线：面板电测与点灯岗严格要求无色盲、色弱",
            "考察细心程度、实验室测量经历及对无尘车间/倒班的适应度"
          ],
          "shiftWork": "产线电测多需穿无尘服并可能涉及两班倒；研发实验室测试相对偏白班",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "支持 7–8 月 2 个月暑期实习（T-MAN 专项春招/暑期体系成熟），表现优异可直接拿秋招 Offer 直通车",
          "厂务电气（Facility）是电气工程及其自动化专业最直接对口的强电/供配电方向，简历价值高且后期可横向拓展至芯片厂务或电网/能源工程",
          "央企控股福利规范，翔安园区配套宿舍、食堂、班车齐全，对厦门本地工科生接纳度高"
        ],
        "watchouts": [
          "产线设备与电测岗位在面板厂普遍存在「穿无尘服进洁净室」和「白夜班两班倒」情况，投递前务必想清楚自己能否接受；偏好白班的同学优先瞄准「厂务电气工程」方向",
          "入职体检会查色盲/色弱，且初面常有 AI 面试，需提前准备 STAR 行为题和简短英文介绍"
        ]
      },
      "sources": [
        {
          "label": "厦门大学就业网天马光电子招聘与 T-MAN 培养说明（smcareer.xmu.edu.cn）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://smcareer.xmu.edu.cn/info/1008/30945.htm",
          "lead": null
        },
        {
          "label": "高校就业网与平台厦门天马设备/厂务电气/电测暑期实习与倒班面经线索（fzu.edu.cn / ustc.edu.cn / zhipin / nowcoder）",
          "date": "2026-11-23",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "fzu.edu.cn / ustc.edu.cn / zhipin 翔安专项暑期 2 个月、补贴及色觉体检细则线索（待补直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "sanan-opto",
      "name": "三安光电（厦门/泉州）",
      "fullName": "三安光电股份有限公司（厦门总部 / 厦门三安集成 / 泉州三安半导体）",
      "city": "厦门/泉州",
      "districts": [
        "厦门市思明区吕岭路 / 翔安火炬园（三安光电总部与三安集成）",
        "泉州市南安市石井镇（泉州芯谷·泉州三安半导体基地）"
      ],
      "track": "半导体/光电与精密制造",
      "companyType": "A股上市民企（SH 600703 · 全球 LED 芯片龙头及化合物半导体/碳化硅平台）",
      "coreProducts": [
        "LED 外延片与高端发光芯片",
        "碳化硅（SiC）/ 氮化镓（GaN）功率芯片",
        "射频前端与光通讯化合物半导体芯片",
        "车规级 Mini/Micro LED 芯片"
      ],
      "researchedAt": "2026-11-24",
      "internshipProfile": {
        "internType": "日常/毕业前顶岗见习 + 秋招提前批直接衔接（较少针对大三的独立暑期专项网申）",
        "summer2MonthOk": "较少独立大三 2 个月暑期网申（以日常/毕业顶岗见习及 7–8 月秋招提前批为主；大三暑期需春季直联 HR 协商）",
        "durationReq": "未见统一 2 个月大三暑期项目要求；公开见习/实习多为 1–3 个月试岗衔接转正或毕业前长期顶岗",
        "weeklyDays": "每周全职出勤 5 天（产线设备/技术员跟岗需配合车间排班）",
        "openWindowRef": "参考 2025/2026：3–5 月春招及省内高校宣讲、7–8 月即启动三安集成/三安光电秋招提前批，日常岗位常年在 Boss 直聘/猎聘滚动",
        "conversionPolicy": "见习/实习期（通常 1–3 个月）经导师带教与考核合格后直接转正留用，享技术与管理双通道晋升",
        "stipendNote": "公开校招及见习简章显示技术员/见习阶段综合约 5,000–6,000 元/月（本科正式工程师约 6,000–10,000 元/月；大三短期暑期日薪未见统一披露，待核实）；泉州园区配免费 4 人间公寓、餐补约 14 元/天及夜班津贴约 24 元/晚",
        "summerFit": "long-or-senior",
        "windowGroup": "autumn-watch",
        "evidenceStatus": "campus-inferred"
      },
      "fitForXmut": {
        "level": "中高匹配（跨厦泉双基地规模大、对省内双非工科友好，但需看清产线倒班与校招为主的节奏）",
        "reason": "三安在厦门（光电/三安集成）与泉州南安（三安半导体）均有大规模产线，对厦门理工等福建本地工科本科生接受度高；电气本科生可匹配设备工程、厂务动力电气与芯片测试方向，但大三暑假想提前进需春季主动在双选会或招聘平台联系 HR，不能干等独立暑期网申。"
      },
      "internshipAndRecruit": {
        "channels": [
          "三安光电 / 三安集成官网招聘专栏（sanan-ic.com / zhiye.com）",
          "“三安光电招聘”官方微信公众号",
          "福建高校（厦大/福大/华大等）春秋季宣讲双选会及 Boss 直聘/猎聘“厦门三安”“泉州三安半导体”"
        ],
        "program": "高校管培/技术员见习培养 + 技术/管理双通道晋升（部分基地设实习工龄补贴）",
        "timelineNote": "若瞄准 2027 年暑期实习，建议 2027 年 3–5 月直接在 Boss 直聘或春季校招双选会联系厦门/泉州基地 HR 询问日常短周期实习可能；同时留意 7–8 月即提前开启的三安集成秋招提前批。",
        "benefits": [
          "泉州园区免费花园式人才公寓（本科 4 人间，上床下桌、空调、洗衣机、独立卫浴，仅摊水电）",
          "自营食堂与工作餐补（泉州园区参考约 14 元/天）及夜班补贴（参考约 24 元/晚）",
          "五险一金、13 薪/年终奖、定期免费体检与厦泉人才落户协助"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "分层级：技术员及产线一线运维多为白夜班两班倒或四班三运转；设备/厂务工程师平时以长白班为主，但因产线 7×24 运转需轮流值班或 On-call",
        "travelLevel": "实习与工作均在厦门或泉州厂区内，极少出差",
        "certNote": "半导体产线多数设备与测试岗位需穿无尘服进入洁净室；厂务强电方向考取电工证或熟悉高压安全规程会加分。"
      },
      "matchedRoles": [
        {
          "roleId": "fab-equip",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期工程师 JD · 参照 2025/2026 校招设备工程师及自动化设备技术员见习简章折算",
          "officialTitles": [
            "设备工程师（参照校招初级岗折算）",
            "半导体设备 / 自动化机台技术员实习生（厦门/泉州基地）"
          ],
          "internTasks": "在洁净室跟学 MOCVD、光刻、刻蚀、镀膜或封装等化合物半导体产线机台的日常点检、预防性保养（TPM/PM）、报警日志整理与异常辅助排查，配合工程师统计设备稼动率（Uptime）。",
          "responsibilities": [
            "协助开展半导体制造机台的日常巡检、预防性保养（PM）与备品备件记录",
            "在导师带领下跟进机台电气/传感器/气动小故障排查与恢复验证",
            "协助整理设备操作规程（SOP）、点检表单与产线稼动率改善数据"
          ],
          "skills": [
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能看懂半导体产线机台基础强弱电与控制信号图纸"
            },
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】具备扎实的电路分析、电工学与自动控制基础"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】动手意愿强、抗压，能适应穿无尘服进洁净室跟班"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【校招折算底线】理解设备点检保养（TPM/PM）、SOP 与安全锁止意识"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】熟悉 PLC 控制逻辑或自动化机台数控基础在设备科很加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】懂基础机械传动、真空与气动阀门元件更易上手机台维护"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能规范协助撰写设备保养记录与异常复盘档案"
            }
          ],
          "interviewFocus": [
            "高频考察：是否接受洁净室无尘服环境、产线轮班/On-call 及厦泉基地长期稳定工作",
            "问在校电工/机械拆装、实验室项目经历与遇到机台突发报警时的排查思路"
          ],
          "shiftWork": "技术员多涉及两班倒；工程师长白班为主但需轮流值班或 On-call",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期实习 JD · 参照 2025/2026 校招厂务/动力电气工程师初级岗折算",
          "officialTitles": [
            "厂务电气 / 动力工程师（参照校招初级岗折算）",
            "洁净厂房供配电运维技术岗"
          ],
          "internTasks": "协助厂务动力部门监控高耗能芯片厂区的高低压供配电系统、变压器、UPS 应急电源、防雷接地及机电自控设施运行数据，参与日常巡检台账与节能降耗资料整理。",
          "responsibilities": [
            "协助监控厂区高低压变配电系统、UPS 不间断电源及洁净室动力照明运行状态",
            "参与配电房日常安全巡检、运行参数记录与隐患排查",
            "协助整理厂务机电系统扩建改造图纸与节能统计资料"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电接线图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】熟悉断路器、变压器、开关柜及强电安全操作规范"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】懂高压配电倒闸、UPS 备电切换与继电保护原理非常加分"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD 查阅与修改厂务动力配电图纸"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】严谨细心，能规范整理配电巡检台账与安全记录"
            }
          ],
          "interviewFocus": [
            "强电对口问答：高低压供配电基础、UPS 作用与电气安全防触电规程",
            "看重责任心、安全红线意识与对值班排班的配合度"
          ],
          "shiftWork": "工程规划偏白班；运行保障需配合 24h 值班或轮流值守",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期本科实习 JD · 参照 2025/2026 校招光电/半导体测试岗及测试技术员简章折算",
          "officialTitles": [
            "电性能 / 可靠性测试工程师（参照校招折算）",
            "芯片测试 / 品质技术员实习生（化合物半导体方向）"
          ],
          "internTasks": "协助完成 LED 或 SiC/GaN 芯片的光电性能表征、电性测试机台辅助操作、实验室失效分析（FA）数据记录及出货品质统计报表整理。",
          "responsibilities": [
            "协助开展芯片电性参数测试、可靠性验证及测试夹具日常维护",
            "准确记录测试曲线与实验数据，整理异常批次统计文档",
            "配合工程师维护测试机台程序及作业指导文件"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】理解半导体器件伏安特性、功率器件基本参数与模电基础"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【校招折算底线】熟练操作万用表、示波器等电测仪器辅助定位测试治具异常"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】细致耐心，能规范记录海量测试数据与撰写试验记录"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】会用 Python/Excel 或脚本批量清洗芯片测试数据更优"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能看懂英文测试机台界面与半导体器件 Datasheet"
            }
          ],
          "interviewFocus": [
            "考察对半导体/电性测试仪器的熟悉度、数据严谨性与实验室实操经历",
            "确认是否适应无尘室环境及测试产线节奏"
          ],
          "shiftWork": "实验室研发测试偏白班；产线品质/芯片测试技术员多涉及两班倒",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "厦门与泉州南安双基地联动，既有 LED 又有前沿碳化硅（SiC）/氮化镓化合物半导体，本地工科生留厦留泉选择面广",
          "泉州基地免费花园式 4 人间公寓 + 餐补 + 宿舍配套齐全，实习/入职生活成本低",
          "对省内双非本科接纳度高，厂务电气与设备工程方向专业对口度直接"
        ],
        "watchouts": [
          "较少设独立大三 2 个月暑期网申批次，主要靠日常滚动见习或 7–8 月秋招提前批，大三暑期必须春季主动联系 HR",
          "洁净室穿无尘服及产线轮班/On-call 是常态，投递前需核清属研发测试白班还是产线运维岗位"
        ]
      },
      "sources": [
        {
          "label": "三安光电官方招聘与厦门/泉州南安基地校招简章线索（sanan-e.com / zhaopin / liepin）",
          "date": "2026-11-24",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "sanan-e.com / zhaopin / liepin 厦门思明/翔安与泉州南安分基地招聘线索（待补直链）"
        },
        {
          "label": "高校就业网三安光电工艺设备、厂务动力及测试工程师要求与福利线索（fjnu.edu.cn / xmut.edu.cn / nowcoder）",
          "date": "2026-11-24",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "fjnu.edu.cn / xmut.edu.cn / nowcoder 校招与见习宿舍补贴线索（待补直链）"
        }
      ],
      "cities": [
        "厦门",
        "泉州"
      ]
    },
    {
      "id": "uscxm",
      "name": "联芯集成电路",
      "fullName": "联芯集成电路制造（厦门）有限公司",
      "city": "厦门",
      "districts": [
        "厦门市翔安区翔安西路（火炬高新区翔安产业区 12 英寸晶圆制造基地）"
      ],
      "track": "半导体/光电与精密制造",
      "companyType": "台资/外资全资 12 英寸晶圆代工大厂（UMC 联华电子子公司）",
      "coreProducts": [
        "12 英寸集成电路晶圆代工",
        "40nm / 28nm / 22nm 先进逻辑制程",
        "高压 BCD 电源管理与车规级芯片代工"
      ],
      "researchedAt": "2026-11-24",
      "internshipProfile": {
        "internType": "官方「暑期实习生项目暨校招提前批」+ 资深工程师 1 对 1 带教",
        "summer2MonthOk": "支持暑期专项实习（官方暑期实习暨提前批通常为 7 月下旬–8 月下旬约 4 周；如需拉满 2 个月可在面试时协商日常实习衔接）",
        "durationReq": "官方暑期实习项目为期约 4 周（7 月下旬–8 月下旬，要求全程参与）；常规日常长期实习通常要求 3–6 个月",
        "weeklyDays": "每周全职出勤 5 天（暑期项目全程集中到岗）",
        "openWindowRef": "参考 2025/2026：每年 5 月前后启动暑期实习暨校招提前批（邮箱 Jobs@uscxm.com），10 月全面开启正式秋季校招",
        "conversionPolicy": "转正通道极明确：资深工程师 1 对 1 带教，暑期项目表现优异者可直接获发「秋招直通卡」（优先录用/提前锁定正式 Offer）",
        "stipendNote": "官方暑期简章注明提供「丰厚实习津贴」（具体本科实习日薪未见公开统一数值，待核实；参考厦门校招本科生综合月薪约 7.5K–12K/月含津贴，配空调独卫公寓、餐补与免费班车）",
        "summerFit": "short-4w",
        "windowGroup": "may-early",
        "evidenceStatus": "historical-verified"
      },
      "fitForXmut": {
        "level": "重点关注（翔安 12 寸晶圆基地；4 周暑期项目配秋招直通卡，设备本科暑期直投待当期核实）",
        "reason": "翔安本地 12 寸晶圆代工大厂，5 月前后的官方暑期项目时间约 4 周并可衔接秋招直通卡；但 2025 年公开暑期项目公告主要列出工艺整合/工艺/良率方向，设备工程（EE）与厂务本科暑期是否单开名额需在当期公告确认，建议同时做好耐受洁净室与倒班的预期评估。"
      },
      "internshipAndRecruit": {
        "channels": [
          "官方指定投递邮箱：Jobs@uscxm.com（邮件标题严格按「暑期实习+学校+科系+年级+姓名」格式）",
          "“联芯英才”官方微信公众号（获取每年 5 月暑期实习与 10 月秋招公告）",
          "厦门大学、福州大学、集美大学及厦门理工等省内高校就业网与招聘会"
        ],
        "program": "暑期实习生项目（沉浸式晶圆制造体验 + 1 对 1 导师带教 + 秋招直通卡）",
        "timelineNote": "建议 2027 年 4 月底–5 月紧盯「联芯英才」公众号，按官方格式第一时间发邮件至 Jobs@uscxm.com 抢占暑期实习提前批；如果希望拉长至 2 个月，面试时主动询问能否衔接前后日常实习。",
        "benefits": [
          "暑期实习结业优异直拿「秋招直通卡」提前锁 Offer",
          "配套员工公寓（冷暖空调、24h 热水、干湿分离卫浴、健身房）与用餐补贴",
          "厦门岛内外免费员工班车；转正享六险一金、13 薪/营运奖金及厦门落户人才补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "需重点关注：12 寸晶圆厂 7×24 小时运转，正式设备工程师（EE）入职初期大概率需经历倒班（如做二休二/四班两运转）或轮流 On-call；厂务部分系统涉值班排班；暑期实习生以白天跟导师学习为主",
        "travelLevel": "实习与工作均在厦门翔安 12 寸晶圆厂内，基本不出差",
        "certNote": "洁净室工作需穿全套无尘服；厂务（Facilities）极度强调 EHS 与高压配电安全红线，面试时安全意识必须拉满。"
      },
      "matchedRoles": [
        {
          "roleId": "fab-equip",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "参照 2025/2026 设备工程师（EE）校招及 4 周暑期项目公告折算（2025 暑期公告列工艺整合/工艺/良率，设备本科暑期单独 JD 待核实）",
          "officialTitles": [
            "设备工程师实习生（EE · 暑期提前批）",
            "12 寸晶圆制造设备工程实习生（薄膜 / 刻蚀 / 光刻 / 扩散段）"
          ],
          "internTasks": "在资深设备工程师 1 对 1 带领下穿无尘服进入 12 寸洁净室，沉浸式学习晶圆制造全流程与精密机台构造，协助开展机台日常点检、PM 保养跟学、Alarm 报警记录梳理与 OEE 稼动率数据统计。",
          "responsibilities": [
            "跟学 12 寸晶圆前道制程精密机台的日常点检、预防性保养（PM）与安全操作规范",
            "协助整理机台报警代码（Troubleshooting）日志、备件清单及工程改进资料",
            "参与暑期项目课题汇报，冲击秋招设备工程师直通 Offer"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习底线】扎实的电路、电子技术与自动控制工科基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【实习底线】能看懂精密机电设备的电气控制与传感器信号回路"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】动手意愿强、极度抗压，明确接受无尘服环境与未来产线倒班节奏"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【实习底线】理解设备点检 PM、标准作业程序（SOP）及晶圆厂安全红线"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】台资背景晶圆厂，能读懂英文设备界面、英文 SOP 与部分英文测评"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】在校有 PLC 编程或电气控制实战项目经历在 EE 面试很加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】懂机械拆装、真空泵或气动控制原理上手更快"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能条理清晰完成暑期项目总结 PPT 与结业答辩"
            }
          ],
          "interviewFocus": [
            "几乎必问：对进洁净室穿无尘服、长时间站立及转正后倒班/On-call 强度的接受度（最怕干半年离职）",
            "英文考察：台企基因使部分岗位含性格测试（M10 等）+ 英文测试或简短英文自我介绍",
            "情景题：当遇到完全没见过的新机台报警时怎么办？（安全第一 → 查 SOP → 请教导师，严禁盲目动设备）"
          ],
          "shiftWork": "暑期实习以跟白班导师为主；转正后一线 EE 前期大概率涉及倒班（做二休二/四班两运转）或轮流 On-call",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "暑期实习公告偏向晶圆制造/设备大类 · 厂务电力细则参照 2025/2026 联芯校招厂务（Facilities）初级岗折算",
          "officialTitles": [
            "厂务电力 / 电气工程师（Facilities · 参照校招折算）",
            "晶圆厂动力配电系统运维工程岗"
          ],
          "internTasks": "协助厂务电力团队监控 12 寸晶圆厂极高可靠度要求的供配电系统（变电站、高低压配电柜、UPS 与应急发电系统），学习电力运行参数巡检、EHS 电气安全管控及突发电力波动应急预案。",
          "responsibilities": [
            "协助监控晶圆厂高低压供配电网络、变压器、UPS 及洁净室动力电源运行状态",
            "跟学厂务电力系统巡检、预防性试验与倒闸安全作业流程",
            "协助整理厂务电力台账、节能改善数据及扩建图纸核对"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电系统图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】熟悉高低压开关柜、断路器、UPS 与基础继保常识"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】安全红线意识拉满，具备水电气突发异常冷静排查逻辑"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】掌握晶圆厂双电源切换、UPS 备电与继电保护整定基础极加分"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能阅读进口高低压设备英文技术说明书与监控界面"
            }
          ],
          "interviewFocus": [
            "厂务红线题：半导体厂一秒断电损失巨大，如何看待强电操作安全规范与应急响应？",
            "专业基础：电气专业课（供配电/电机/继保）掌握程度与校园动手项目",
            "考察稳定性与对厂务 24h 值班排班制度的理解"
          ],
          "shiftWork": "部分厂务系统偏行政班，但动力供电保障存在白夜班轮流值守或节假日值班（面试需确认）",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "12 寸晶圆制造大厂 EE 与厂务方向专业对口度高，且晶圆厂制程与设备运维经历具备较强的行业复用性",
          "官方设有明确暑期实习生项目（5 月投递，7–8 月约 4 周），若评估通过可获「秋招直通卡」，是了解半导体大厂的重要窗口",
          "翔安基地配套独卫空调公寓、餐补与班车，校招转正薪酬在厦门制造类本科岗中具备竞争力（约 7.5K–12K/月）"
        ],
        "watchouts": [
          "官方暑期项目默认周期约 4 周（1 个月），若想按学校要求凑满 2 个月，需要在投递或面试时主动沟通衔接日常实习",
          "晶圆厂 7×24 运转且带台企管理基因，正式设备岗前期大概率需倒班（做二休二/四班两运转）并可能考性格测试与英文，抗压和耐受无尘服是硬门槛"
        ]
      },
      "sources": [
        {
          "label": "华中科技大学就业网联芯 2025 年暑期实习项目暨提前批公告（job.hust.edu.cn）",
          "date": "2026-11-25",
          "sourceKind": "intern-notice",
          "url": "https://job.hust.edu.cn/zpinfo3/2280264.htm",
          "lead": null
        },
        {
          "label": "高校就业网与招聘平台联芯设备工程师（EE）/厂务岗位及福利讨论线索（xmu.edu.cn / fit.edu.cn / jobui）",
          "date": "2026-11-24",
          "sourceKind": "unverified-lead",
          "url": null,
          "lead": "xmu.edu.cn / fit.edu.cn / jobui 设备岗校招参照与实习津贴待核实线索（待补直链）"
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "silan-xiamen",
      "name": "士兰集科 / 士兰明镓",
      "fullName": "厦门士兰集科微电子有限公司 / 厦门士兰明镓化合物半导体有限公司（士兰半导体制造事业总部·厦门制造中心）",
      "city": "厦门",
      "districts": [
        "厦门市海沧区兰英路 89 号 / 99 号（士兰微电子厦门制造中心：12 吋线士兰集科、化合物/SiC 线士兰明镓、8 吋 SiC 线士兰集宏）"
      ],
      "track": "半导体/光电与精密制造",
      "companyType": "A股上市 IDM 半导体大厂子公司（SH 600460 杭州士兰微电子 × 厦门半导体投资集团合资）",
      "coreProducts": [
        "12 英寸特色工艺功率器件与 MEMS 传感器晶圆制造（士兰集科）",
        "化合物半导体、高端 LED 与第三代半导体 SiC 芯片（士兰明镓）",
        "8 英寸 SiC 功率器件芯片生产线（士兰集宏）"
      ],
      "researchedAt": "2026-11-25",
      "internshipProfile": {
        "internType": "秋招/春招正式校招为主 + 产线「生产实习生」及毕业前实习留用通道（暂未见独立大三 2 个月研发暑期统招网申）",
        "summer2MonthOk": "较少独立大三 2 个月研发暑期网申；士兰明镓在本地高校招收「生产实习生」（需穿无尘服且白夜两班倒），大三暑期工程岗须春季直联 HR 协商",
        "durationReq": "常规实习多倾向毕业前留用或 3 个月以上衔接转正；士兰明镓生产实习生按产线班次排期，未见面向大三的统一 8 周夏令营",
        "weeklyDays": "工程研发与校招岗平时全职 5 天（一线 EE 需轮值/倒班）；产线生产实习生公开简章明确 8:00–20:00 / 20:00–8:00 两班倒、月休 4–6 天",
        "openWindowRef": "参考 2025/2026：每年 9–10 月启动秋季校园招聘（厦大等高校线下宣讲，投递邮箱 fenglinlin@silanic.com.cn），12 月及春季面向省内院校开展生产实习生与春招补录",
        "conversionPolicy": "产线实习生提供实习证明，毕业取得学位且考核合格可按岗位需求转正留用；校招提供人才 IDP 培养体系与多轨晋升通道",
        "stipendNote": "招聘平台公开信息显示工程/制造类实习津贴参考约 3,000–6,000 元/月（大三短期暑期日薪未见官方统一披露，待核实）；校招本科设备工程师月薪公开列 9,500–10,499 元/月，配免费 2–3 人间宿舍（空调/独卫/热水器/宽带）与餐补",
        "summerFit": "long-or-senior",
        "windowGroup": "autumn-watch",
        "evidenceStatus": "campus-inferred"
      },
      "fitForXmut": {
        "level": "中高匹配（海沧功率半导体与第三代半导体集群，本科设备岗容量大但须区分“生产实习生”与“设备工程师”）",
        "reason": "士兰厦门制造中心校招中，本科设备工程师（80 人）与测试设备工程师（8 人）明确招收电气工程及其自动化、自动化及测控专业，且对福建本地工科院校友好；但大三暑假目前缺乏独立 8 周研发实习项目，已公开的实习生公告偏 12 小时两班倒产线“生产实习生”，投递前必须看清岗位层级与倒班强度。"
      },
      "internshipAndRecruit": {
        "channels": [
          "士兰半导体制造事业总部官方网申平台（silanslw.zhiye.com）",
          "官方校园招聘指定邮箱：fenglinlin@silanic.com.cn（简章注明投递需附成绩单与英语四六级）",
          "厦门大学、厦大嘉庚学院等本地高校就业网及“士兰微招聘”微信公众号"
        ],
        "program": "人才 IDP 培养培训体系 + 专业技能提升培训 + 产线实习留用考核通道",
        "timelineNote": "建议 2027 年 3–5 月关注本地高校招聘网或联系厦门制造中心 HR（0592-3773999 转 85056）确认是否有白班工程类日常实习；若目标正式设备/测试设备岗，务必在 2027 年 9–10 月备齐成绩单与四六级冲刺秋招。",
        "benefits": [
          "提供免费 2–3 人间员工宿舍（空调、独立卫生间、热水器、免费宽带）",
          "海沧厂区自建自营餐厅与工作餐补、通讯补贴及佳节福利（约 2,000–3,000 元/年）",
          "五险一金、年度免费体检、厂区健身房/篮球场/羽毛球场及厦门海沧重点产业人才补贴（符合条件可享上浮政策）"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "需重点关注：士兰明镓「生产实习生」简章明确白班 8:00–20:00、夜班 20:00–8:00 两班倒且月休 4–6 天；正式设备工程师因晶圆厂 24 小时运转亦多需倒班或轮流值班；测试开发/厂务规划相对偏白班",
        "travelLevel": "实习与工作均集中在厦门海沧区兰英路制造基地，极少出差",
        "certNote": "需穿戴全套无尘服进入洁净室；校招投递简章明确要求附上成绩单和英语四六级证书，厂务强电方向持电工证或熟悉高压安全规程更稳妥。"
      },
      "matchedRoles": [
        {
          "roleId": "fab-equip",
          "jdSourceType": "real-intern-jd",
          "jdSourceLabel": "真实实习简章为「士兰明镓生产实习生（产线高精设备操作，mee.xujc.com）」；工程级「设备工程师（80人）」参照 2026 届士兰集科校招简章折算",
          "officialTitles": [
            "生产实习生（士兰明镓 · 芯片制程与高精设备操作真实实习 JD）",
            "设备工程师（士兰集科 · 参照校招本科 80 人需求折算）"
          ],
          "internTasks": "生产实习生在海沧无尘车间承担芯片制造高精机台操作、生产异常记录与数据分析；设备工程师方向则负责 12 吋或 SiC 产线光刻/刻蚀/薄膜/外延机台的日常点检（PM）、故障排查、装机调试与 SOP 编写。",
          "responsibilities": [
            "协助开展半导体制造高精机台的日常运行监控、预防性点检（PM）与异常处理",
            "记录机台报警日志、生产异常数据及备件消耗，提升设备 Uptime 与 OEE",
            "配合工程师参与新机台装机验收、电气/气动回路调试及作业指导书（SOP）整理"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【实习/校招底线】具备扎实的电路分析、电子技术与自动控制工科基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能看懂半导体精密机台控制柜图纸与传感器接线逻辑"
            },
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【实习底线】理解设备点检保养（PM）、异常处理流程与洁净室 SOP 红线"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【实习底线】抗压踏实，明确适应穿无尘服、两班倒（12 小时制）或产线值班节奏"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】熟悉 PLC 控制逻辑或工业自动化机电控制项目在设备岗面试加分"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】了解机械传动、真空系统与气动阀门控制上手更快"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【校招明确项】简章要求投递附四六级，能读懂进口机台英文界面与手册"
            }
          ],
          "interviewFocus": [
            "硬核核对：是否接受无尘车间全套无尘服及 12 小时白夜两班倒/设备科轮班制度",
            "硬件与资料门槛：本科成绩单、四六级成绩（官方邮箱投递必附项）",
            "排故与动手：在校电工/机械实践经历及面对机台报警时的安全排查步骤"
          ],
          "shiftWork": "生产实习生明确两班倒（8:00–20:00 / 20:00–8:00，月休 4–6 天）；正式设备工程师通常涉及轮班或 On-call",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "ee-test",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期测试实习 JD · 参照 2026 届士兰集科校招「测试设备工程师（8人）/ 测试工艺工程师（11人）」折算",
          "officialTitles": [
            "测试设备工程师（参照校招本科岗折算）",
            "测试工艺工程师 / ATE 芯片测试工程师（参照校招折算）"
          ],
          "internTasks": "协助维护功率器件与 MEMS 芯片的 CP 中测及 FT 成品测试设备（ATE/探针台/分选机），参与测试负载板与治具硬件调试，操作示波器排查信号异常并统计良率数据。",
          "responsibilities": [
            "协助开展芯片测试机台、探针台与分选机的日常点检、硬件维护及治具调试",
            "配合工程师分析测试异常（Test Fail）与产线良率波动，协助定位器件或测试板问题",
            "整理芯片电性测试数据、规格书参考曲线及测试设备作业规范"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】熟悉模拟/数字电路及功率器件（MOSFET/IGBT/SiC）基本电性"
            },
            {
              "name": "示波器与万用表实操",
              "category": "仪器测试",
              "level": "must",
              "detail": "【校招折算底线】熟练使用示波器、万用表等电测仪器调试测试硬件与治具信号"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】细致严谨，能规范整理测试良率报表与硬件故障记录"
            },
            {
              "name": "C 语言与自动化脚本基础",
              "category": "软件与脚本",
              "level": "plus",
              "detail": "【实习加分】会用 C/C++ 或脚本工具处理 ATE 测试数据或编写简易测试程序极加分"
            },
            {
              "name": "功率分析仪与电子负载",
              "category": "仪器测试",
              "level": "plus",
              "detail": "【实习加分】了解大功率器件测试中的电参数测量与开尔文四线制接线常识"
            },
            {
              "name": "英语读写与技术交流",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】能看懂英文芯片 Datasheet 与进口测试机台技术手册"
            }
          ],
          "interviewFocus": [
            "专业基础：功率半导体器件开关特性、模电运放电路与测试夹具干扰排查",
            "工具能力：示波器实测经历与 C 语言/数据处理脚本基础",
            "考察对测试产线跟线验证及洁净室环境的配合度"
          ],
          "shiftWork": "测试工艺/开发偏白班跟产；测试设备维护视产线需求可能涉及轮班或值班",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期厂务实习 JD · 参照厦门制造中心厂务电气/动力系统运维需求折算",
          "officialTitles": [
            "厂务电气 / 动力系统维护工程师（参照校招及社招同类岗折算）",
            "洁净室供配电及自控设施运维岗"
          ],
          "internTasks": "协助厂务工程团队巡检 12 吋与 SiC 晶圆厂的高低压供配电室、UPS 不间断电源、动力设备及自控监测点，整理配电图纸、巡检台账与 EHS 安全记录。",
          "responsibilities": [
            "协助巡检晶圆制造厂房高低压供配电柜、变压器及 UPS 备用电源运行状态",
            "跟学厂务机电设备预防性维保与供配电突发异常应急处理规范",
            "协助整理厂务电气一次/二次系统图纸及能耗统计台账"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能读懂工业厂房高低压配电系统图与二次控制回路"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】掌握断路器、接触器、配电柜器件常识与强电安全规程"
            },
            {
              "name": "中低压开关柜一次/二次回路与继保",
              "category": "基础理论",
              "level": "plus",
              "detail": "【实习加分】熟悉双电源自动切换（ATS）、UPS 与继电保护基础极加分"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】具备高压安全红线意识与冷静的故障隔离思路"
            }
          ],
          "interviewFocus": [
            "强电基础：三相供配电、UPS 作用及高压停送电安全防护意识",
            "稳定性考察：对海沧厂区长期发展及厂务值班排班的接受度"
          ],
          "shiftWork": "工程技术偏白班，动力供电运行保障涉及轮流值班",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "海沧本地集齐 12 吋功率/MEMS 线（士兰集科）、化合物线（士兰明镓）与 8 吋 SiC 线（士兰集宏），本科设备工程师校招需求体量大（单季 80+8 人），电气/自动化专业直接对口",
          "校招公开本科设备岗月薪 9.5K–10.5K 起，免费提供 2–3 人间独卫空调宿舍与自营餐厅餐补，还可叠加厦门/海沧重点产业人才补贴",
          "与厦大、厦大嘉庚学院等本地高校互动频繁，对省内理工本科生的简历与沟通门槛相对务实"
        ],
        "watchouts": [
          "目前未见面向大三的 8 周研发暑期夏令营；已发布的「生产实习生」属于 12 小时白夜两班倒、月休 4–6 天的产线操作跟班，含金量与作息预期需与设备工程师岗位严格区分",
          "官方校招简章明确要求投递附本科成绩单和英语四六级，大三期间成绩单和四六级过线不能掉以轻心"
        ]
      },
      "sources": [
        {
          "label": "厦门大学管理学院就业网：厦门士兰集科（含厦门制造中心）2026 届秋招简章与岗位薪资表（smcareer.xmu.edu.cn）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://smcareer.xmu.edu.cn/info/1008/26795.htm",
          "lead": null
        },
        {
          "label": "厦大嘉庚学院机电学院：厦门士兰明镓生产实习生招聘与两班倒排班公告（mee.xujc.com）",
          "date": "2026-11-25",
          "sourceKind": "intern-notice",
          "url": "https://mee.xujc.com/2025/1224/c2715a164227/page.htm",
          "lead": null
        },
        {
          "label": "士兰半导体制造事业总部官方校招网申系统（silanslw.zhiye.com）",
          "date": "2026-11-25",
          "sourceKind": "official-portal",
          "url": "https://silanslw.zhiye.com/campus/detail?jobAdId=642e8bfb-d101-4162-ad21-0063c3c5acea",
          "lead": null
        }
      ],
      "cities": [
        "厦门"
      ]
    },
    {
      "id": "jomoo",
      "name": "九牧集团（智能工厂）",
      "fullName": "九牧厨卫股份有限公司 / 九牧集团（泉州南安总部及 5G 智能灯塔工厂群）",
      "city": "泉州",
      "districts": [
        "泉州市南安市南安经济开发区九牧工业园 / 仑苍镇（5G 智能马桶黑灯工厂与高端数智灯塔工厂群）",
        "注：软件/硬件产品研发部分岗位设于厦门，制造类生产技术、电气设计与工厂设备岗位集中于泉州南安"
      ],
      "track": "高端装备与智能制造",
      "companyType": "全球卫浴与智能制造领军民企（5G 零碳灯塔工厂 / 绿色黑灯工厂标杆）",
      "coreProducts": [
        "智能马桶与全屋数智卫浴系统",
        "5G 智能灯塔工厂与黑灯工厂自动化产线（施釉/装配机器人工作站）",
        "智牧机器人与智能硬件电控平台"
      ],
      "researchedAt": "2026-11-25",
      "internshipProfile": {
        "internType": "「百川计划（百川生）」校园招聘为主 + 局部合作院校订单班/产教融合顶岗实习（较少独立大三 8 周暑期夏令营统招）",
        "summer2MonthOk": "较少独立大三 2 个月暑期统招网申；主要通过 3 月春招、9 月秋招（百川生）及高校实习基地切入，大三暑期须春季联系南安工厂 HR 或走校友内推协商",
        "durationReq": "未见统一 8 周大三暑期项目公告；常规工厂自动化/技术类实习一般希望持续 2–3 个月以上或直接衔接毕业定岗",
        "weeklyDays": "全职标准工时（每周 5 天，南安智能工厂现场技改与设备调试需配合车间生产节拍）",
        "openWindowRef": "参考 2025/2026：3 月春季补录及 9 月全面开启全球校园招聘（「百川计划」含制造类·生产技术电气方向与电气设计百川生），Moka 校招门户长期承接投递",
        "conversionPolicy": "「百川生」入职后由产业赋能教育中心开展集训与轮岗培养；合作院校实习或日常实习表现优异者可在毕业前后通过内部考核转正签约",
        "stipendNote": "国家大学生就业服务平台（NCSS）公开「电气设计百川生」本科校招参考月薪 6,500–7,500 元/月（大三短期暑期实习日薪未见官方统一披露，待核实）；入职南安工厂区域本科生提供标双员工公寓及南安-泉州-厦门周末免费班车",
        "summerFit": "long-or-senior",
        "windowGroup": "autumn-watch",
        "evidenceStatus": "campus-inferred"
      },
      "fitForXmut": {
        "level": "中高匹配（泉州南安 5G 智能工厂标杆，PLC 与工厂电气设计极度对口，但更偏校招与春季直联）",
        "reason": "九牧在泉州南安拥有多座 5G 自动化灯塔工厂，且在 NCSS 明确招募「电气设计百川生」与「生产技术（电气/自动化）」本科生，实操覆盖西门子 PLC、EPLAN/CAD、变频伺服与工业机器人产线运维；因较少单开大三 2 个月暑期网申，建议泉州生源或关注 PLC 方向的同学在 2027 年 3 月春招季主动对接 HR 或通过本地校友内推争取暑期进厂机会。"
      },
      "internshipAndRecruit": {
        "channels": [
          "九牧集团官方 Moka 校园招聘系统（app.mokahr.com/campus-recruitment/jomoo）",
          "“九牧招聘”官方微信公众号及国家大学生就业服务平台（ncss.cn）",
          "厦大嘉庚学院、东华大学等高校宣讲会及 Boss 直聘/智联（搜“九牧厨卫 南安 电气/设备”）"
        ],
        "program": "“百川计划”人才培养体系 + 产业赋能教育中心专业/管理双通道培训",
        "timelineNote": "2027 年 3–4 月留意九牧春季校园招聘公告与福建本地高校宣讲，带电路/PLC 课设作品尝试协商南安基地暑期跟岗；2027 年 9 月秋招黄金期可直接冲刺「电气设计百川生」或「生产技术（电气/自动化）」校招岗。",
        "benefits": [
          "入职南安工厂区域提供本科生标准双人间员工公寓（配空调、独立卫浴、热水器，拎包入住）",
          "每周末提供往返南安、泉州、厦门三地的免费接驳班车，兼顾泉厦双城通勤",
          "福利食堂、节日礼金、员工互助医疗/意外险、文体协会及泉州/南安高校人才安居补贴"
        ]
      },
      "workConditionSummary": {
        "shiftWork": "工厂自动化/电气设计岗以常白班为主，但产线出现紧急电气故障、产线技改或设备联调时需深入车间现场配合加班或应急响应",
        "travelLevel": "工作集中在泉州南安各智能制造园区（研发电子类部分在厦门），极少跨省出差",
        "certNote": "重车间现场实操与电气安全规范；若能在校补齐 AutoCAD/EPLAN 制图与西门子 PLC 基础（官方 JD 明确优先项），竞争优势明显。"
      },
      "matchedRoles": [
        {
          "roleId": "plc-debug",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期 PLC 实习 JD · 参照 2025/2026 九牧校招「生产技术（电气/自动化）」及南安智造产线自动化工程师要求折算",
          "officialTitles": [
            "生产技术（电气 / 自动化方向 · 参照校招折算）",
            "PLC 编程与非标自动化设备调试工程师（南安灯塔工厂）"
          ],
          "internTasks": "协助灯塔工厂自动化工程师开展非标产线与机器人工作站的 PLC 控制逻辑编写（西门子 S7-1200/1500 等）、HMI 界面维护、伺服变频参数核对及厂内产线技改联调。",
          "responsibilities": [
            "协助参与智能卫浴自动化产线及非标设备的 PLC 程序编写、备份与信号联调",
            "配合调试伺服电机、变频器、传感器及工业总线通信（Modbus / Profinet 等）",
            "跟进车间产线升级改造现场调试，快速记录并协同解决自动化控制异常"
          ],
          "skills": [
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "must",
              "detail": "【校招折算底线】官方岗位明确优先与核心要求：掌握西门子/三菱 PLC 基础与程序逻辑"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能读懂非标自动化设备电柜图纸与传感器/执行器接线图"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】具备现场设备电气异常排查能力，能适应智造车间现场节奏"
            },
            {
              "name": "变频器与电机调试",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】熟悉伺服驱动、变频器参数整定及电机控制原理在灯塔工厂产线很实用"
            },
            {
              "name": "HMI 触摸屏与组态软件",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【实习加分】会做基础 HMI 人机界面组态与报警页面方便参与产线调试"
            },
            {
              "name": "Modbus / CAN / RS485 通信",
              "category": "通信协议",
              "level": "plus",
              "detail": "【实习加分】了解 Modbus/Profinet 等工业现场总线与仪表通信调试"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】规范整理程序备份、调试台账与技改验收文档"
            }
          ],
          "interviewFocus": [
            "工控实操题：PLC 自锁/互锁/报警逻辑、传感器 NPN/PNP 接线及常见通讯故障排查思路",
            "项目与抗压：是否做过课程设计/实训项目，以及对深入南安智能工厂车间的意愿"
          ],
          "shiftWork": "自动化与技改岗偏白班为主，产线大修或设备联调阶段需配合现场加班",
          "travelLevel": "极少出差（集中在南安各园区）"
        },
        {
          "roleId": "equip-elec",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期电气设计实习 JD · 参照国家大学生就业服务平台「九牧电气设计百川生」真实校招 JD 折算",
          "officialTitles": [
            "电气设计百川生（NCSS 真实校招 JD，6.5–7.5K/月，南安）",
            "生产技术（电气工程方向 · 参照校招折算）"
          ],
          "internTasks": "前期深入工厂参与电气设备及控制系统巡检维护，协助完成局部电气改造图纸整理（AutoCAD/EPLAN）、元器件选型核对、设备电气台账编制及现场电气异常协同支持。",
          "responsibilities": [
            "前期参与南安工厂电气设备、控制系统的日常巡检、维护与故障排查基础工作",
            "协助开展电气改造、产线升级项目的电气图纸整理、BOM 清单核对与现场实施",
            "跨部门对接生产与设备团队，记录设备运行数据并编制标准化电气技术文档"
          ],
          "skills": [
            {
              "name": "电路与模数电基础",
              "category": "基础理论",
              "level": "must",
              "detail": "【校招 JD 底线】本科电气工程/自动化专业对口，对电气参数与电路原理敏感"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招 JD 底线】能读懂并整理工厂自动化设备及配电控制回路原理图"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招 JD 底线】熟悉传感器、变频器、断路器、接触器等常见低压电器规格"
            },
            {
              "name": "AutoCAD / EPLAN 电气制图",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招明确优先项】熟练使用 AutoCAD（或 EPLAN）绘制与修订电气图纸"
            },
            {
              "name": "主流 PLC 编程（西门子/三菱等）",
              "category": "PLC与自动化",
              "level": "plus",
              "detail": "【校招明确优先项】JD 明确写出「掌握 CAD、PLC 基础者优先」"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【校招 JD 要求】协助完成电气台账、程序备份与技术文档编制"
            }
          ],
          "interviewFocus": [
            "真实 JD 高频点：CAD 画图熟练度、PLC 基础认知及低压电工安全规范",
            "沟通与下沉意愿：NCSS JD 明确强调跨部门对接生产/设备团队与吃苦耐劳踏实成长"
          ],
          "shiftWork": "以白班现场及工程办公为主，技改上线期间配合车间排期",
          "travelLevel": "极少出差"
        },
        {
          "roleId": "fab-equip",
          "jdSourceType": "campus-ref",
          "jdSourceLabel": "未见独立大三暑期设备运维实习 JD · 参照九牧灯塔工厂设施运维及智能产线设备管理要求折算",
          "officialTitles": [
            "自动化产线设备运维工程师（南安灯塔工厂 · 参照校/社招折算）",
            "生产设备管理与点检技术岗"
          ],
          "internTasks": "协助跟进智能工厂机械臂、施釉/装配自动化工作站及动力辅助设施的日常点检、预防性保养（PM）、运行数据统计与故障台账归档。",
          "responsibilities": [
            "协助执行灯塔工厂自动化设备及动力管网的日常巡检、预防性维保（PM）",
            "协助整理设备故障停机日志、备品备件记录及 OEE 运行分析数据",
            "配合设备工程师落实传感器、气动/液压元件及执行机构的小故障排查"
          ],
          "skills": [
            {
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "must",
              "detail": "【校招折算底线】理解设备点检保养制度、设备台账及故障停机数据分析"
            },
            {
              "name": "电气原理图识读",
              "category": "电气制图与选型",
              "level": "must",
              "detail": "【校招折算底线】能看懂产线设备强弱电供电与安全互锁回路"
            },
            {
              "name": "现场故障诊断与排故思维",
              "category": "工程与软实力",
              "level": "must",
              "detail": "【校招折算底线】具备快速排查现场传感器、继电器及执行器异常的条理性"
            },
            {
              "name": "机械识图与气动液压基础",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】熟悉气动电磁阀、气缸及机械传动结构维护更易上手黑灯工厂机台"
            },
            {
              "name": "低压配电与元器件选型",
              "category": "电气制图与选型",
              "level": "plus",
              "detail": "【实习加分】熟悉厂区车间配电箱开关、保护器与安全接地规范"
            },
            {
              "name": "技术文档与测试报告编写",
              "category": "工程与软实力",
              "level": "plus",
              "detail": "【实习加分】规范编写设备点检 SOP 与故障复盘记录"
            }
          ],
          "interviewFocus": [
            "设备运维思维：如何平衡产线不停机生产与预防性保养（PM）",
            "对工业机器人/黑灯工厂自动化设备的兴趣及长期扎根泉州南安制造园区的稳定性"
          ],
          "shiftWork": "工程管理偏白班，部分连续生产工段或黑灯产线值守需配合排班/值班",
          "travelLevel": "极少出差"
        }
      ],
      "prosAndCons": {
        "pros": [
          "泉州南安本地数智制造标杆（5G 智能灯塔工厂/黑灯工厂），「电气设计百川生」与「生产技术（电气）」直接考察 CAD + PLC，与设备电气/PLC 调试职业探索高度同频",
          "南安工厂区入职本科生配标双公寓，且周末提供南安—泉州—厦门三地免费班车，厦门就读/泉州安居衔接成本低",
          "产业赋能教育中心培养体系成熟，从产线电气巡检→PLC 调试→产线技改路径清晰"
        ],
        "watchouts": [
          "公开渠道以 3 月春招、9 月秋招「百川生」及合作院校订单班为主，缺乏面向大三的 8 周暑期夏令营统一网申，想在大三暑假进厂须春季主动对接 HR 或通过本地校友内推",
          "校招起薪（NCSS 电气设计百川生 6.5–7.5K/月）在民营大厂中属稳健型，且工厂自动化岗需要下车间盯现场联调"
        ]
      },
      "sources": [
        {
          "label": "国家大学生就业服务平台（NCSS）：九牧厨卫「电气设计百川生」南安校招岗位职责与薪资要求（ncss.cn）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://www.ncss.cn/student/jobs/9GJTZH8W5mrCr4J7qu83Uo/detail.html",
          "lead": null
        },
        {
          "label": "厦大嘉庚学院就业网：九牧集团 2026 校招岗位、南安公寓与厦泉南安周末班车说明（career.xujc.com）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://career.xujc.com/2025/0905/c3959a161608/page.htm",
          "lead": null
        },
        {
          "label": "厦大嘉庚学院就业网：九牧集团春招制造类「生产技术（电子/电气/机械/工艺）」岗位目录（career.xujc.com）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://career.xujc.com/2025/0314/c3959a158688/page.htm",
          "lead": null
        },
        {
          "label": "东华大学就业网：九牧集团 2027 届全球校园招聘公告及 Moka 网申入口（ejob.dhu.edu.cn）",
          "date": "2026-11-25",
          "sourceKind": "campus-notice",
          "url": "https://ejob.dhu.edu.cn/pros_wjdc/s/cms/DongHua/single/2026/09/29/26092916002192136603",
          "lead": null
        }
      ],
      "cities": [
        "泉州"
      ]
    }
  ],
  "skillsCatalog": {
    "schemaVersion": 2,
    "categories": [
      "电气制图与选型",
      "工程与软实力",
      "基础理论",
      "仪器测试",
      "产线设备运维",
      "PLC与自动化",
      "软件与脚本",
      "通信协议"
    ],
    "skills": [
      {
        "name": "电气原理图识读",
        "category": "电气制图与选型",
        "courses": [
          "电路",
          "电机学"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "找一张三相异步电动机正反转加互锁控制电路图，用红蓝笔分别标出主回路（L1/L2/L3-KM-FR-M）与二次控制回路电流路径，并口述 KM 常闭互锁触点与 FR 热继电器触点的保护顺序。",
          "deliverable": "1 页手绘/电子标注控制回路路径图 + 5 行联锁动作说明"
        }
      },
      {
        "name": "低压配电与元器件选型",
        "category": "电气制图与选型",
        "courses": [
          "电路",
          "电机学"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "假定一台 7.5 kW / 380 V 三相异步电机，对照施耐德或 ABB 低压元器件选型样本，计算额定电流并选出断路器、交流接触器与热继电器的典型型号与整定区间。",
          "deliverable": "1 份 4 器件选型核算清单（含电流估算公式与选型依据）"
        }
      },
      {
        "name": "技术文档与测试报告编写",
        "category": "工程与软实力",
        "courses": [
          "电力电子实验",
          "电机实验"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "把最近一次《电力电子技术》或《电机学》实验原始数据整理成企业测试报告格式（测试目的、条件与仪表型号、实测对比表、异常波形分析与结论）。",
          "deliverable": "1 份标准结构 Markdown/PDF 测试报告模板与实测样例"
        }
      },
      {
        "name": "电路与模数电基础",
        "category": "基础理论",
        "courses": [
          "电路",
          "模拟电子技术",
          "数字电子技术"
        ],
        "microTask": {
          "mode": "Multisim仿真",
          "task": "在 Multisim 中搭建由运放 LM358 构成的同相比例放大器与电压比较器电路，分别测试输入过压保护翻转阈值与输出限幅状态。",
          "deliverable": "Multisim 电路图截图 + 阈值实测对比表"
        }
      },
      {
        "name": "现场故障诊断与排故思维",
        "category": "工程与软实力",
        "courses": [
          "电路",
          "电力电子技术",
          "电机学"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "针对“电机通电不转且热继电器动作”与“开关电源无输出”两个经典情景，分别画出从输入电源→开关/熔断器→控制信号→功率负载的二分法排故树。",
          "deliverable": "2 张结构化故障排除决策树（含测量点与安全断电前提）"
        }
      },
      {
        "name": "AutoCAD / EPLAN 电气制图",
        "category": "电气制图与选型",
        "courses": [
          "工程制图",
          "电气 CAD 基础"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "按 GB/T 4728 电气图形符号规范，整理常用断路器 QF、接触器 KM、热继电器 FR、中间继电器 KA 的文字符号与触点编号规则，练习绘制一页完整起保停回路。",
          "deliverable": "1 张规范符号与端子编号起保停图纸"
        }
      },
      {
        "name": "EPLAN 电气设计软件",
        "category": "电气制图与选型",
        "courses": [
          "电气 CAD 基础"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "梳理 EPLAN 中“电位连接、线号自动命名、端子排表与 BOM 清单自动生成”的核心工作流，对比 AutoCAD 纯二维画图的工程差异。",
          "deliverable": "1 页 EPLAN 原理图→端子表→BOM 工程流程笔记"
        }
      },
      {
        "name": "示波器与万用表实操",
        "category": "仪器测试",
        "courses": [
          "电路实验",
          "电力电子实验"
        ],
        "microTask": {
          "mode": "学校实验课",
          "task": "在学校实验台测量直流电源纹波与 PWM 驱动信号时，实践并记录“交流耦合 + 20 MHz 带宽限制 + 接地弹簧最短路径”对测得峰峰值的影响（仅在学校有指导实验条件下操作）。",
          "deliverable": "示波器设置核查清单 + 长地线与短地线纹波对比记录"
        }
      },
      {
        "name": "设备点检保养（PM）与 OEE 改善",
        "category": "产线设备运维",
        "courses": [
          "自动控制原理",
          "工业自动化概论"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "给出一组模拟产线 8 小时班次日志（停机 35 分钟、换型 25 分钟、良品率 97%），手算时间稼动率、性能稼动率与 OEE，并起草一份日点检 SOP 表格。",
          "deliverable": "OEE 手算推导页 + 1 份 5 项设备日点检表"
        }
      },
      {
        "name": "质量工具与 8D/RCA 分析",
        "category": "工程与软实力",
        "courses": [
          "工程实践",
          "产品测试方法"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "模拟“配电箱样机温升超标 12 K”异常，按 8D（临时围堵 D3、5Why 根因分析 D4、永久纠正 D5）与鱼骨图（人机料法环测）写一份简明复盘报告。",
          "deliverable": "1 份完整的 8D + 5Why 案例复盘单"
        }
      },
      {
        "name": "主流 PLC 编程（西门子/三菱等）",
        "category": "PLC与自动化",
        "courses": [
          "自动控制原理",
          "PLC 控制技术"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "为一个“双泵交替运行 + 故障自动切换 + 急停优先”系统分配模拟 I/O 点表（DI/DO），并写出对应的梯形图自锁/互锁/报警复位逻辑。",
          "deliverable": "I/O 地址分配表 + 梯形图逻辑与 5 条异常测试用例"
        }
      },
      {
        "name": "英语读写与技术交流",
        "category": "工程与软实力",
        "courses": [
          "专业英语"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "下载一份 TI 或英飞凌 MOSFET/IGBT 英文 Datasheet，提取 Vds、Id、Rds(on)、Qg、结温与绝对最大额定值，写一段 3 句话的英文口头选型说明。",
          "deliverable": "英文参数对照摘要 + 60 秒英文技术口述稿"
        }
      },
      {
        "name": "C 语言与自动化脚本基础",
        "category": "软件与脚本",
        "courses": [
          "C 语言程序设计"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "用 C 语言编写一个轻量级控制台工具：读取模拟测试采集的电压电流数组，自动计算均值、纹波峰峰值、效率及超限告警标志（符合 UTF-8 输出规范）。",
          "deliverable": "可编译运行的 C 源码与 1 组边界输入测试结果"
        }
      },
      {
        "name": "测试上位机基础（LabVIEW / C#）",
        "category": "软件与脚本",
        "courses": [
          "C 语言程序设计",
          "虚拟仪器与测试技术"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "设计一份自动化产线测试上位机软件框图：包含仪器通信（VISA/串口）、参数下发、CSV 日志自动落盘与 Pass/Fail 判定状态机。",
          "deliverable": "上位机状态机框图 + 测试数据 CSV 字段规范"
        }
      },
      {
        "name": "机械识图与气动液压基础",
        "category": "产线设备运维",
        "courses": [
          "工程制图"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "对照一份气动二位五通电磁阀+双作用气缸回路图，标出压缩空气 FRL 三联件、节流阀调速位置与磁性开关位置反馈如何接入 PLC DI 口。",
          "deliverable": "气电联控回路标注图 + 3 个常见气路卡阻排查点"
        }
      },
      {
        "name": "客户沟通与现场抗压",
        "category": "工程与软实力",
        "courses": [
          "工程伦理与沟通"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "编写一份《现场设备异常受理单》模板：如何在电话/现场先稳住客户情绪，并在 5 分钟内问清“机型序列号、报警代码、负载状态与修改前操作”。",
          "deliverable": "标准化技术支持接单问询清单（6 步）"
        }
      },
      {
        "name": "中低压开关柜一次/二次回路与继保",
        "category": "基础理论",
        "courses": [
          "电路",
          "电力系统基础",
          "继电保护原理"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "对照中压开关柜手车式断路器二次原理图，理清合闸回路、分闸回路与“防跳继电器（TBJ）”是如何防止开关发生反复跳合的。",
          "deliverable": "二次分合闸防跳动作时序说明"
        }
      },
      {
        "name": "安规与 EMC 测试基础",
        "category": "仪器测试",
        "courses": [
          "电力电子技术",
          "电磁兼容基础"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "梳理开关电源常见 4 项安规/EMC 概念（电气间隙 vs 爬电距离、耐压 Hi-pot、共模/差模传导干扰、浪涌防护器件压敏/TVS 选型作用）。",
          "deliverable": "1 页电源板安规与 EMI 滤波器位置核对笔记"
        }
      },
      {
        "name": "SolidWorks 机械识图基础",
        "category": "电气制图与选型",
        "courses": [
          "工程制图"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "读懂一张电控柜钣金装配三视图，核对主视图/俯视图/剖视图中的安装孔距公差、门板开孔尺寸及线槽走线空间是否与电气元器件干涉。",
          "deliverable": "电控柜布局校核检查表（5 项尺寸核对点）"
        }
      },
      {
        "name": "电力电子拓扑（整流/斩波/逆变）",
        "category": "基础理论",
        "courses": [
          "电力电子技术"
        ],
        "microTask": {
          "mode": "Multisim仿真",
          "task": "在 Multisim 搭建低压 24 V→12 V Buck 降压电路（含负载切换），对比开关管导通/关断两阶段电感电流斜率与电容纹波电压波形。",
          "deliverable": "Buck 仿真波形图 + 电感电流纹波理论公式回代核对"
        }
      },
      {
        "name": "Modbus / CAN / RS485 通信",
        "category": "通信协议",
        "courses": [
          "工业通信网络",
          "微机原理与接口"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "手工解析一帧 Modbus-RTU 报文（如 01 03 00 00 00 02 C4 0B），拆出从站地址、功能码、寄存器起始地址、长度与 CRC16，并说明 RS-485 终端电阻 120 Ω 的作用。",
          "deliverable": "Modbus-RTU 帧解析卡片 + RS-485 A/B 线排查要点"
        }
      },
      {
        "name": "储能系统架构（BMS / PCS / EMS）",
        "category": "基础理论",
        "courses": [
          "电力电子技术",
          "储能系统导论"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "画出工商业储能柜“电芯簇 → BMS（采样/均衡/继电器控制） → 双向 PCS（AC/DC 变换） → EMS（能量调度）”信号与功率流向框图。",
          "deliverable": "1 张储能 3S 系统能量流与通信流结构图"
        }
      },
      {
        "name": "变频器与电机调试",
        "category": "PLC与自动化",
        "courses": [
          "电机学",
          "电力拖动自动控制系统"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "查阅一台通用低压变频器手册，整理出试车必设的 6 个基础参数（电机额定电压/电流/功率/频率、加减速时间、控制源端子 vs 面板）与过流报警区分。",
          "deliverable": "变频器开环调试 6 参数核对单"
        }
      },
      {
        "name": "电池充放电与环境可靠性测试设备",
        "category": "仪器测试",
        "courses": [
          "测试技术",
          "储能系统导论"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "设计一份电芯/模组恒流恒压（CC-CV）充放电测试记录表，明确截止电压、截止电流、温升安全红线与高低温箱凝露防护检查步骤。",
          "deliverable": "电池可靠性试验安全核对单与数据模板"
        }
      },
      {
        "name": "功率分析仪与电子负载",
        "category": "仪器测试",
        "courses": [
          "电路实验",
          "电力电子实验"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "梳理四线制开尔文（Kelvin）接法在测量大电流直流电源效率与电子负载压降时的接线原理，对比两线制压降误差来源。",
          "deliverable": "功率分析仪与电子负载四线制接线示意图与效率公式"
        }
      },
      {
        "name": "竞赛或电源实测项目经历",
        "category": "工程与软实力",
        "courses": [
          "电力电子技术",
          "综合课程设计"
        ],
        "microTask": {
          "mode": "Multisim仿真",
          "task": "即便暂无个人开发板，也可用 Multisim 完整复现一个闭环仿真专题（目标指标→拓扑选型→参数计算→仿真波形与偏差排查），用 STAR 法整理成 3 分钟面试讲述稿。",
          "deliverable": "1 份含仿真波形和问题复盘的简历项目说明卡片"
        }
      },
      {
        "name": "Altium Designer 硬件/PCB 基础",
        "category": "电气制图与选型",
        "courses": [
          "电子电路 CAD"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "整理开关电源 PCB 布局 5 条铁律（功率大电流环路面积最小、驱动回路远离功率开关节点、开尔文采样走线、铺铜散热与安规间距检查）。",
          "deliverable": "1 页电源单板硬件设计自查 Checklist"
        }
      },
      {
        "name": "HMI 触摸屏与组态软件",
        "category": "PLC与自动化",
        "courses": [
          "PLC 控制技术"
        ],
        "microTask": {
          "mode": "纸笔/读图",
          "task": "为一套产线测试台规划 3 页 HMI 界面线框图（主监控手自动切换、IO 状态诊断页、历史报警弹窗页），标注每个按钮绑定的 PLC 变量类型。",
          "deliverable": "3 页 HMI 人机界面线框草图与变量绑定表"
        }
      }
    ]
  },
  "dailyReports": [
    {
      "batchId": "day-6",
      "day": 6,
      "date": "2026-11-25",
      "file": "daily-2026-11-25-day-6.md",
      "title": "Day 6 双企实习门槛对比简报：士兰集科/士兰明镓（厦门）× 九牧集团·智能工厂（泉州）（2026-11-25）",
      "headline": "双企深挖：「士兰集科 / 士兰明镓（海沧）」×「九牧集团·智能工厂（南安）」",
      "addedCompanies": [
        "silan-xiamen",
        "jomoo"
      ],
      "content": "# Day 6 双企实习门槛对比简报：士兰集科/士兰明镓（厦门）× 九牧集团·智能工厂（泉州）（2026-11-25）\n\n> 本日按 `queue.json` 顺序完成第 11、12 家企业深挖，全库进度推进至 **12 / 20 企**：**#11 士兰集科 / 士兰明镓（厦门海沧·功率半导体与第三代半导体晶圆制造）** × **#12 九牧集团·智能工厂（泉州南安·5G 智能灯塔工厂与黑灯工厂）**。  \n> 调研原则：严格区分真实实习 JD 与校招折算——士兰明镓已公开 `生产实习生` 真实简章（`real-intern-jd`，明确 12 小时白夜两班倒），测试与厂务标为 `campus-ref`；九牧暂未见大三独立 8 周暑期统招，3 条岗位均参照国家大学生就业服务平台「电气设计百川生」及春/秋招简章如实标注 `campus-ref`。\n\n---\n\n## 一、今日双企实习门槛与可行性横向对比\n\n| 对比维度 | 士兰集科 / 士兰明镓（厦门海沧） | 九牧集团·智能工厂（泉州南安） |\n| :--- | :--- | :--- |\n| **企业属性与赛道** | A 股上市 IDM 半导体大厂子公司（SH 600460，12 吋功率/MEMS + 化合物/8 吋 SiC 线） | 全球卫浴与数智制造领军民企（5G 智能灯塔工厂 / 绿色黑灯工厂标杆） |\n| **大三暑假 2 个月可行性** | **较少大三 8 周研发暑期夏令营**（以春秋校招 + 12 小时两班倒「生产实习生」及毕业前留用为主；`long-or-senior`） | **较少大三 8 周暑期统招**（以「百川计划」春秋招 + 合作院校订单班为主，需春季主动对接 HR 或走内推；`long-or-senior`） |\n| **JD 来源透明度** | `fab-equip` 含真实 `生产实习生` JD（`real-intern-jd`）+ 校招设备工程师对照；测试与厂务 `campus-ref` | 3 条岗位均标为 `campus-ref`（参照 NCSS「电气设计百川生」与「生产技术·电气/自动化」校招折算） |\n| **双非工科匹配度** | **中高匹配**：校招本科设备（80人）+ 测试设备（8人）明确招电气/自动化/测控，但投递需附成绩单与四六级 | **中高匹配**：泉州南安智能工厂明确招本科电气/自动化，CAD 与 PLC 基础是核心硬通货 |\n| **最推荐电气本科岗位** | 校招重点冲「设备工程师」「测试设备工程师」「厂务电气」；谨慎评估「生产实习生」班制 | **「电气设计百川生」**、**「生产技术（电气/自动化方向·PLC 调试）」**、自动化设备运维 |\n| **拿 Offer / 面试底线** | 电路与模数电基础、电气原理图识读、PM/SOP 意识、**成绩单 + 英语四六级**、接受无尘服与轮班 | **电气原理图识读 + AutoCAD/EPLAN + 低压配电选型**、现场故障诊断、**PLC 基础（官方明确优先）** |\n| **最容易拉分的加分项** | PLC 控制逻辑、ATE/示波器测试与 C 脚本（测试岗）、高低压/UPS 继保（厂务岗） | **西门子 S7-1200/1500 PLC 实操**、变频器/伺服调试、HMI 组态与 Modbus/Profinet 通信 |\n| **工作环境与倒班真相** | 生产实习生明确 **8:00–20:00 / 20:00–8:00 两班倒、月休 4–6 天**且穿无尘服；设备岗多涉轮班/On-call | 自动化与电气设计岗偏白班为主，产线技改/设备联调或突发异常需深入车间现场加班 |\n| **食宿与薪酬机制** | 实习参考 3,000–6,000 元/月；校招本科设备岗 9.5K–10.5K/月；配免费 2–3 人间独卫空调宿舍与餐补 | NCSS「电气设计百川生」本科校招 6.5–7.5K/月；南安工厂配本科标双公寓及**南安—泉州—厦门周末免费班车** |\n\n---\n\n## 二、全库 12 家企业最新聚合洞察（60% 进度里程碑）\n\n1. **8 周暑期真实适配分布（12 企格局进一步清晰）**：\n   - 当前 **12 / 20** 企中：**明确支持暑期 8 周（`fit-8w`）5 家**、**4 周短项目（`short-4w`）1 家**（联芯）、**需 3 个月+（`need-3m`）1 家**（施耐德）、**须协商（`negotiable`）1 家**（南方路机）、**长期/顶岗及春秋招为主（`long-or-senior`）4 家**（法拉、三安、士兰、九牧）。\n   - **关键提醒**：半导体制造（三安、士兰）与本地大制造基地（法拉、九牧）往往**不办大规模大三 2 个月研发夏令营**；士兰明镓在本地高校发布的真实实习简章属于 **12 小时两班倒产线「生产实习生」**，大三同学若瞄准工程师级发展，应优先把精力放在 **8 周/4 周可转正窗口**（科华、海辰、ABB、宏发、天马、联芯），同时为大四秋招（士兰 9.5K–10.5K 本科设备岗 / 九牧电气设计百川生）提前补齐成绩单、四六级与 PLC/CAD 技能树。\n2. **「PLC 调试」补齐泉州第二样本，「拿实习 Offer 底线」技能榜（12 企 36 条岗位）最新变化**：\n   - **三大 100% 必考底线继续领跑**：`电气原理图识读`（12/12，100%，岗位提及 28 次）、`低压配电与元器件选型`（12/12，100%）、`技术文档与测试报告编写`（12/12，100%）。\n   - **第二梯队 92% 覆盖（11/12 企）**：`电路与模数电基础`（必备 11 企）、`现场故障诊断与排故思维`（必备 11 企）与 `AutoCAD / EPLAN 电气制图`（必备 4 企 / 加分 7 企）。\n   - **PLC 权重跃升至 83%（10/12 企）**：随着**九牧集团**补齐泉州智能工厂样本，`PLC 控制与自动化调试实习生` 形成 **南方路机 × 九牧集团** 双样本，`主流 PLC 编程（西门子/三菱等）` 与 `变频器与电机调试`、`HMI 触摸屏与组态软件` 在该岗位均达 **2/2（100%）**；九牧 NCSS 真实校招 JD 也明确把 **「掌握 CAD、PLC 基础者优先」** 写入电气设计岗要求。\n3. **明日队列预告**：**#13 铁拓机械（泉州洛江·北交所上市筑养路装备厂，对比南方路机与九牧看厂内联调与电控要求）** × **#14 盈趣科技（厦门海沧·智能制造与电子产品测试大户，补充海沧测试与自动化样本）**。"
    },
    {
      "batchId": "day-5",
      "day": 5,
      "date": "2026-11-24",
      "file": "daily-2026-11-24.md",
      "title": "Day 5 双企实习门槛对比简报：三安光电（厦门/泉州）× 联芯集成电路（厦门）（2026-11-24）",
      "headline": "双企深挖：「三安光电（厦门/泉州）」×「联芯集成电路（翔安 12 寸晶圆厂）」",
      "addedCompanies": [
        "sanan-opto",
        "uscxm"
      ],
      "content": "# Day 5 双企实习门槛对比简报：三安光电（厦门/泉州）× 联芯集成电路（厦门）（2026-11-24）\n\n> 本日按 `queue.json` 顺序完成第 9、10 家企业深挖，全库进度正式过半（**10 / 20 企**）：**#9 三安光电（厦门/泉州双基地·光电与化合物半导体芯片）** × **#10 联芯集成电路（厦门翔安·台资背景 12 寸晶圆代工大厂）**。  \n> 调研原则：严格区分真实实习 JD 与校招折算——联芯设有官方「暑期实习生项目暨校招提前批」，设备岗标为 `real-intern-jd`、厂务电力细则标为 `campus-ref`；三安光电暂无成规模大三独立暑期专项网申，3 条岗位均已如实标注 `campus-ref`，不编造暑期日薪。\n\n---\n\n## 一、今日双企实习门槛与可行性横向对比\n\n| 对比维度 | 三安光电（厦门 / 泉州南安） | 联芯集成电路（厦门翔安） |\n| :--- | :--- | :--- |\n| **企业属性与赛道** | A 股上市民企（SH 600703），全球 LED 龙头及 SiC/GaN 化合物半导体平台 | 台资/外资 12 寸晶圆代工大厂（UMC 联华电子全资子公司） |\n| **大三暑假 2 个月可行性** | **较少独立大三暑期网申**（以日常/毕业顶岗见习及 7–8 月秋招提前批为主；大三暑期需春季联系 HR 协商） | **支持暑期专项实习**（每年 5 月启动投递，7 月下旬–8 月下旬约 **4 周**；若需满 2 个月可在面试时协商衔接日常实习） |\n| **JD 来源透明度** | 3 条岗位均标为 `campus-ref`（参照校招设备/厂务/测试及技术员见习折算） | 设备岗 `real-intern-jd` + 厂务电力 `campus-ref`（厂务细则参照校招 Facilities 折算） |\n| **双非工科匹配度** | **中高匹配**：跨厦泉两地招收大量工科本科，但产线技术员/工程师层级分化明显 | **高匹配（极度友好）**：12 寸晶圆厂重设备与厂务运维，双非工科本科生只要踏实抗压、专业对口录取率很高 |\n| **最推荐电气本科岗位** | 厂务电气/动力岗（强电对口）、半导体设备工程岗、芯片电性测试岗 | **设备工程师实习生（EE·暑期提前批）**、**厂务电力/电气工程师（Facilities）** |\n| **拿实习 Offer 底线** | 电路与模数电基础、电气原理图识读、PM/SOP 意识、低压配电常识、**接受洁净室与轮班/On-call** | 电路与电气原理图识读、PM/SOP 安全红线、**英语界面/SOP 阅读与性格测评**、明确接受无尘服与未来倒班 |\n| **最容易拉分的加分项** | 高低压开关柜/UPS 继保（厂务）、PLC 控制逻辑（设备）、数据处理脚本（测试） | 高低压双电源/UPS 继保（厂务）、PLC/气动真空基础（设备）、**英文自我介绍与抗压稳定性表达** |\n| **工作环境与倒班真相** | 技术员多两班倒/四班三运转；工程师长白班为主但需轮流值班或 On-call；均需进无尘室 | 暑期 4 周以跟白班导师为主；**转正后一线 EE 前期大概率倒班（做二休二/四班两运转）或 On-call** |\n| **食宿与转正机制** | 见习阶段约 5,000–6,000 元/月；泉州提供免费 4 人间公寓、餐补约 14 元/天、夜班津贴约 24 元/晚 | 官方暑期提供「丰厚津贴」+ 优秀直拿 **「秋招直通卡」**；配空调独卫宿舍、餐补与免费班车 |\n\n---\n\n## 二、全库 10 家企业进度过半后的关键变化\n\n1. **半导体/面板 3 企齐聚（天马 × 三安 × 联芯），「厂务电气」与「产线设备」成为电气本科在厦泉的第三大主战场**：\n   - 相比科华/施耐德/ABB 的研发测试与设计岗，晶圆厂与面板厂对**双非工科本科生门槛更友好、校招容量更大**；\n   - 其中**联芯集成电路**每年 5 月左右通过 `Jobs@uscxm.com` 启动的暑期实习暨提前批（邮件标题格式：`暑期实习+学校+科系+年级+姓名`），虽官方默认 4 周，但带**「秋招直通卡」**，是明年春季最值得重点抢投的靶标之一。\n2. **「拿实习 Offer 底线」技能榜（10 企 30 条岗位）新变化**：\n   - **三巨头 100% 全覆盖**：`电气原理图识读`（10/10，必备 23 次）、`低压配电与元器件选型`（10/10，必备 10 次）、`技术文档与测试报告编写`（10/10，必备 9 次）；\n   - `设备点检保养（PM）与 OEE 改善` 升至 **8/10 企（80%）**、`英语读写与技术交流` 升至 **7/10 企（70%）**——外企/台资晶圆厂（ABB、施耐德、天马、联芯）普遍把英文 SOP/界面阅读作为硬性筛选环节；\n   - **高低压供配电常识**（`中低压开关柜一次/二次回路与继保` 达 **5/10 企**）在半导体厂务（天马、三安、联芯）和配电外企（ABB、施耐德）形成交叉复用，大三学好供配电与继保一举两得。\n3. **明日中午队列预告**：**#11 士兰集科 / 士兰明镓（厦门海沧·功率半导体晶圆制造，对比联芯与三安看化合物/功率晶圆厂差异）** × **#12 盈趣科技（厦门海沧·智能制造与电子产品测试大户）**。"
    },
    {
      "batchId": "day-4",
      "day": 4,
      "date": "2026-11-23",
      "file": "daily-2026-11-23.md",
      "title": "Day 4 双企实习门槛对比简报：法拉电子 × 天马微电子（厦门）（2026-11-23）",
      "headline": "双企深挖：「法拉电子（海沧）」×「天马微电子（翔安）」",
      "addedCompanies": [
        "fara-electronics",
        "tianma-xiamen"
      ],
      "content": "# Day 4 双企实习门槛对比简报：法拉电子 × 天马微电子（厦门）（2026-11-23）\n\n> 本日按 `queue.json` 顺序完成第 7、8 家企业深挖：**#7 法拉电子（厦门海沧·薄膜电容龙头）** × **#8 天马微电子（厦门翔安·央企控股显示面板大厂）**，正式切入「半导体/光电与精密制造」赛道。  \n> 调研原则：严格核验 2025/2026 公开实习生招聘信息；法拉电子因未设成规模独立暑期实习网申，所有岗位均已如实标注 `campus-ref`（参照校招初级岗折算），不编造实习日薪或虚构实习 JD。\n\n---\n\n## 一、今日双企实习门槛与可行性横向对比\n\n| 对比维度 | 法拉电子（厦门海沧） | 天马微电子（厦门翔安） |\n| :--- | :--- | :--- |\n| **企业属性与赛道** | A 股上市民企（SH 600563），全球薄膜电容龙头（电力电子/储能上游） | 央企中航工业旗下（SZ 000050），翔安大型面板产线（光电/半导体制造） |\n| **大三暑假 2 个月可行性** | **较少独立暑期网申**（多为大四毕业前顶岗/见习转正；大三暑期需春季发简历至 `farahr@faratronic.com.cn` 或双选会直联 HR 协商） | **支持暑假约 2 个月（7–8 月）**（3–5 月春招及暑期专项网申，4–6 月面试）；日常/顶岗多要求 3～6 个月 |\n| **JD 来源透明度** | 3 条岗位均标注 `campus-ref`（参照官网设备/工艺质量初级岗折算） | 3 条岗位均为 `real-intern-jd`（参考 2025/2026 暑期/日常实习公开要求） |\n| **最推荐电气本科岗位** | 产线设备维护/自动化岗、电气技改岗、薄膜电容电性能测试岗 | **厂务电气实习生（Facility，强电最对口）**、设备工程实习生、显示电测实习生 |\n| **拿实习 Offer 底线** | 电路与电容基础、电气原理图识读、示波器/万用表实操、设备点检（PM）与产线排故意愿 | 电路与供配电基础、电气原理图识读、设备 PM 与安全（LOTO）意识、**无色盲色弱（体检必查）**、AI 面试过关 |\n| **最容易拉分的加分项** | **官网明确点名：PLC（梯形图/ST）与上位机（C#/LabVIEW）优先** | 中低压高低压开关柜/继保（厂务岗）、PLC 逻辑（设备岗）、简短英文自我介绍（AI 面试） |\n| **工作环境与倒班真相** | 工艺/质量实验室常白班为主；部分分厂设备岗涉及跟班/倒班 | **产线设备与电测多需穿无尘服进洁净室 + 白夜班两班倒**；厂务电气工程岗偏白班、运行值班岗需轮班 |\n| **食宿与转正机制** | 1 对 1 导师制；免费两人间宿舍 + 免费三餐 + 班车（毕业顶岗税后约 4,000+ 元/月） | T-Plan 导师制 + 暑期答辩 **Offer 直通车**；配宿舍/餐补/班车/夜班津贴，转正六险一金 |\n\n---\n\n## 二、全库 8 家企业累计后的关键规律更新\n\n1. **大三暑期 2 个月实操路径分化更清晰（8 家中 7 家明确支持暑期，1 家需直联协商）**：\n   - **可直接走公开暑期网申（明年 3–5 月集中投）**：科华数据、ABB 厦门、海辰储能、宏发股份、施耐德电气（偏 6–9 月）、**天马微电子（厦门）**；\n   - **较少办独立暑期网申、必须春季直联 HR / 校内双选会主动开口问**：南方路机（泉州）、**法拉电子（海沧）**。\n2. **「拿实习 Offer 底线」技能榜进一步巩固（8 企 25 条岗位）**：\n   - `电气原理图识读` 保持 **8/8 企 100% 覆盖**，依然是电气本科生投实习的第一刚需；\n   - `电路与模数电基础` 升至 **7/8 企**（法拉、天马全部门均列为底线）；\n   - `技术文档与测试报告编写` 保持 **8/8 企 100% 覆盖**；\n   - `示波器与万用表实操`（7/8 企）和 `现场故障诊断与排故思维`（7/8 企）成为测试与设备两大主线的共同底座；\n   - `设备点检保养（PM）与 OEE 改善` 覆盖率跃升至 **6/8 企（75%）**——切入制造/面板/半导体赛道后，懂一点 **PM 点检、SOP 规范、LOTO 上锁挂牌安全规程** 明显提升了设备与厂务岗面试通过率。\n3. **明日中午队列预告**：**#9 三安光电（厦门/泉州跨双基地·光电芯片设备与厂务动力）** × **#10 联芯集成电路（厦门翔安晶圆厂·半导体设备与厂务电力）**，将横向对比光电芯片厂 vs 12 寸晶圆代工厂对双非电气本科生的门槛差异。"
    },
    {
      "batchId": "day-3",
      "day": 3,
      "date": "2026-11-22",
      "file": "daily-2026-11-22-batch3-intern.md",
      "title": "纯实习生版升级 + 新增双企简报：宏发股份 × 施耐德电气（厦门）（2026-11-22）",
      "headline": "按实习视角新增双企：「宏发股份（集美/海沧）」×「施耐德电气（翔安）」",
      "addedCompanies": [
        "hongfa",
        "schneider-xiamen"
      ],
      "content": "# 纯实习生版升级 + 新增双企简报：宏发股份 × 施耐德电气（厦门）（2026-11-22）\n\n> 本次完成两项关键动作：\n> 1. **全库 100% 切换为“本科实习生视角”**（参考 2025–2026 真实实习招聘），对前 4 家（科华、南方路机、ABB、海辰）全部回炉核验实习时长、每周天数、暑假 2 个月可行性、转正政策与 JD 来源透明度；\n> 2. **新增 #5 宏发股份（厦门）与 #6 施耐德电气（厦门）**，全库已达 **6 / 20 家企业、19 条实习岗位（其中 15 条基于真实实习生 JD）**。\n\n---\n\n## 一、新增双企实习门槛横向对比\n\n| 对比维度 | 宏发股份（厦门集美 / 海沧） | 施耐德电气（厦门翔安开关设备） |\n| :--- | :--- | :--- |\n| **暑期可行性与时长** | **支持暑假 1.5～3 个月（7–8 月）**；日常 3 个月+，每周 3–5 天 | **暑期项目约 3 个月（6–9 月，需看期末周衔接）**；日常 3～6 个月，每周 3–5 天 |\n| **最推荐大三本科实习岗** | 电气测试/可靠性试验实习生、自动化产线电气设计实习生、TPM 设备实习生 | 开关柜/UPS 出厂电气测试实习生、过程质量实习生、商业/技术支持实习生 |\n| **拿实习 Offer 底线** | 电路与磁路基础、示波器/万用表、电气原理图识读、AutoCAD 基础、踏实动手意愿 | 电路基础、电气原理图识读、万用表测试、**英文读写（SOP/图纸/界面）**、细节文档闭环 |\n| **最容易拉分的加分项** | 三菱/西门子 PLC 基础、SolidWorks 机械看图、自动化测试脚本 | **8D / RCA 根因分析**、Lean 精益改善常识、1 分钟英文自我介绍、STAR 项目复盘 |\n| **实习食宿与氛围特色** | 离厦门理工极近，**常包免费工作餐 + 4 人间公寓宿舍 + 班车**，务实制造文化 | 老牌 500 强外企，**Work-Life Balance 口碑极佳**，Intern-to-Fulltime 转正机制成熟 |\n\n---\n\n## 二、6 家企业滚动汇总后的“大三投 2027 暑期实习”最清晰结论\n\n1. **6 家企业全部支持大三暑期实习（2～3 个月）且均带转正通道**，但投递方式有别：\n   - **有标准春季网申/暑期项目（明年 3–5 月盯官网）**：科华数据、ABB 厦门、海辰储能、宏发股份、施耐德电气；\n   - **需主动直联 HR / 校内宣讲**：南方路机（泉州）。\n2. **大三上末～寒假最值得优先补齐的 Top 5「拿实习 Offer 底线」技能**（不再被正式员工高门槛吓到）：\n   - `电气原理图识读`（6/6 企 100% 覆盖）\n   - `电路与模数电基础`（5/6 企）\n   - `示波器与万用表实操`（4/6 企，测试岗必问示波器测纹波/继电器弹跳）\n   - `AutoCAD / EPLAN 电气制图`（5/6 企，设计/设备岗核心敲门砖）\n   - `英语读写与 1 分钟英文自我介绍`（4/6 企，冲击 ABB/施耐德外企的必备通行证）\n3. **明日中午 12:00 定时任务预告**：**#7 法拉电子（厦门·薄膜电容龙头）** × **#8 天马微电子（厦门翔安·面板设备工程大户）**。"
    },
    {
      "batchId": "day-2",
      "day": 2,
      "date": "2026-11-22",
      "file": "daily-2026-11-22-test-run.md",
      "title": "每日自动化试运行简报：ABB 厦门工业中心 × 海辰储能（2026-11-22）",
      "headline": "升级「2027 暑期/日常实习生专用雷达」（参考 2025–2026 实习信息复核前 4 企）",
      "addedCompanies": [
        "abb-xiamen",
        "hithium"
      ],
      "content": "# 每日自动化试运行简报：ABB 厦门工业中心 × 海辰储能（2026-11-22）\n\n> 本次为定时任务 **「厦泉电气企业每日深挖雷达」** 首次权限校准试运行，新增 **#3 ABB（厦门工业中心）** 与 **#4 海辰储能（厦门同安）**，全库已覆盖 **4 / 20 家企业、12 条真实岗位、全部 5/5 探索方向**。\n\n---\n\n## 一、新增双企核心画像对比\n\n| 维度 | ABB（厦门工业中心·翔安） | 海辰储能（厦门·同安） |\n| :--- | :--- | :--- |\n| **企业性质与主线** | 顶尖跨国电气外企（中低压开关柜 MNS/UniGear、断路器、互感器） | 储能独角兽灯塔工厂（电芯、模组、液冷储能系统 BMS/PCS/EMS） |\n| **匹配你的探索岗位** | **设备电气（开关柜一次/二次）**、**设备维护（工厂）**、**海外技术/销售支持** | **电气设计**、**设备工程师（产线）**、**实验室测试**、**储能技术支持（AE）** |\n| **最鲜明的硬门槛** | **英语（口语/手册/邮件）** + **EPLAN 规范制图** + **IEC/GB 开关柜继保标准** | 制造设备岗看 **PM/OEE/PLC/机械识图 + 接受两班倒**；测试岗看 **CNAS/TUV 规范与数据严谨度** |\n| **实习与转正通道** | 日常实习（Intern）转正通道清晰；Power U / E Next 系统培训生 | **明确鼓励提前 3 个月以上实习，优异者可直通转正并抵扣试用期** |\n| **倒班与出差提醒** | 项目/工程无倒班；售后方向需海内外出差 | 制造设备岗通常需配合 24 小时产线**两班倒/白夜班**；研发与测试岗无倒班但节奏较快；AE 高频出差 |\n\n---\n\n## 二、4 家企业（科华 + 南方路机 + ABB + 海辰）滚动统计出的核心变化\n\n1. **五大岗位已全部破零（5/5 全覆盖）**：ABB 工厂维护与海辰同安产线设备首次补齐了「设备工程师」板块，让你一眼看清“工厂设备岗（PM/OEE/机械气动/倒班）”与“研发电气设计/硬件测试（坐班/电路拓扑/画图测试）”的本质分界。\n2. **全库 100%（4/4 家）共同点**：\n   - `电气原理图识读`、`低压配电与元器件选型`、`现场故障诊断与排故思维`、`技术文档与测试报告编写`、`客户沟通与现场抗压`。\n3. **快速攀升至 75%（3/4 家）的硬技能分水岭**：\n   - `AutoCAD / EPLAN 电气制图`（南方路机 + ABB + 海辰）\n   - `主流 PLC 编程（西门子/三菱等）`（南方路机 + ABB + 海辰）\n   - `英语读写与技术交流`（科华海外 + ABB 硬门槛 + 海辰海外 AE）\n4. **下一批预告（明日中午 12:00 自动队列）**：**#5 宏发股份（厦门·全球继电器龙头）** × **#6 施耐德电气（厦门·外企配电对比 ABB）**。"
    },
    {
      "batchId": "day-1",
      "day": 1,
      "date": "2026-11-22",
      "file": "daily-2026-11-22.md",
      "title": "Day 1 深度调研与双企对撞简报（2026-11-22）",
      "headline": "雷达建站首发：厦门「科华数据」× 泉州「南方路机」",
      "addedCompanies": [
        "kehua-data",
        "nflg"
      ],
      "content": "# Day 1 深度调研与双企对撞简报（2026-11-22）\n\n> 本日深挖企业：**科华数据（厦门）** × **南方路机（泉州）**  \n> 调研方式：公开官网校招信息、高校就业网简章、公开岗位 JD 与面经交叉核验（所有未披露项均明确标注“待核实”，不虚构数据）。\n\n---\n\n## 一、核心看点：两家本地龙头直接划出“两条清晰的技能路线”\n\n第一天故意挑了**厦门电力电子龙头（科华数据）**和**泉州高端装备龙头（南方路机）**同台对比，差异一眼就看得清清楚楚：\n\n| 对比维度 | 科华数据（厦门） | 南方路机（泉州） |\n| :--- | :--- | :--- |\n| **核心赛道** | 电力电子：UPS、储能变流器 PCS、光伏逆变器、充电桩 | 高端装备：沥青/混凝土搅拌站、机制砂与固废成套产线 |\n| **最对口你的岗位** | **电气产品测试（硬件测试）**、**技术支持 / FAE** | **设备电气设计（智控）**、**PLC 调试**、**售后技术支持** |\n| **核心硬技能栈** | 示波器（纹波测试）、功率分析仪/电子负载、模数电、Buck/Boost/逆变拓扑、安规/EMC、Modbus/CAN | AutoCAD/EPLAN 电气制图、西门子 S7-1200/1500 等 PLC、HMI 触摸屏组态、变频器与电机调试、控制柜 BOM 选型 |\n| **与你当前大三课程匹配度** | **极高**：已学的电力电子、电路、电机学直接就能上手准备测试岗 | **半匹配（需补课）**：电路与电机基础通用，但需寒假/大三下重点补 AutoCAD/EPLAN 与西门子 PLC |\n| **出差与倒班常态** | 无产线倒班；硬件测试极少出差，技术支持/FAE 高频国内/海外出差 | 无产线倒班；智控研发坐班为主偶尔出差，PLC 现场调试与售后需高频出差 |\n| **厦门理工投递友好度** | 高（湖里火炬园 + 翔安基地本地龙头，本科可投测试/支持岗） | 高（明确重视厦门理工等省内工科院校，宣讲会常现场初试） |\n\n---\n\n## 二、Day 1 立刻浮现的 3 条“共性红线”（不管选哪家都绕不开）\n\n1. **电气原理图识读（2/2 家 100% 必考）**：不管是看科华的功率/控制板图纸，还是看南方路机的成套控制柜图纸，面试官几乎都会先确认“给你一张图纸你能不能看懂”。\n2. **现场故障定位与排故思维（2/2 家 100% 必考）**：科华常问“UPS 开机跳闸怎么一步步查”或“项目里烧板子怎么定位”；南方路机常问“设备信号异常/停机怎么排查”。\n3. **可讲透的动手项目经历**：两家都明确看重电赛、电源/单片机/控制类实操经历，而且不看名头大小，看你能不能讲清自己定位并解决了什么具体问题。\n\n---\n\n## 三、待后续核实事项（诚实留痕）\n- 两家企业 **2027 届暑期实习** 的具体网申开放日期与实习日薪标准，目前尚未发布官方 2027 暑期批次公告，待 2027 年春季官方招聘通道开放后补齐。\n- 下一轮（Day 2）计划深挖：**ABB（厦门工业中心）** × **海辰储能（厦门）**，重点补充“外企配电标准 + 储能大厂设备/测试岗”数据。"
    }
  ],
  "skillCategories": [
    "电气制图与选型",
    "工程与软实力",
    "基础理论",
    "PLC与自动化",
    "仪器测试",
    "产线设备运维",
    "软件与脚本",
    "通信协议"
  ],
  "skillStatsOverall": [
    {
      "name": "电气原理图识读",
      "category": "电气制图与选型",
      "companyCount": 12,
      "companyPct": 100,
      "mustCompanyCount": 12,
      "plusCompanyCount": 0,
      "roleCount": 5,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "tech-support",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 28,
      "plusRoleCount": 0,
      "totalRoleMentions": 28,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂基本控制板/功率板原理图，定位测试点"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能读懂中低压控制与电源原理图"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂整机强弱电基本接线与配电图"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】面试高频必查：能读懂常见电机启停、自锁互锁与控制柜原理图"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】能按原理图对照查控制柜端子和 I/O 信号"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】能看懂基本强弱电控制图纸"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂基本强弱电控制与配电原理图"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂基础产线电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂自动化产线基础电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能准确识读储能/工业电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】能看懂储能集装箱基本电气一次/二次框图"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能读懂自动化非标产线控制回路图纸"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂车间自动化机台基础电气图纸"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂开关柜与配电模块基础电气图纸"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能读懂基本配电系统图与控制图"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能读懂自动化产线电气控制回路与元器件图纸"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能准确读懂并核对产线电气控制柜原理图"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂自动化机台基础电气与控制信号图纸"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能读懂厂区高低压一次/二次配电系统图"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能看懂半导体产线机台基础强弱电与控制信号图纸"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电接线图"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】能看懂精密机电设备的电气控制与传感器信号回路"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电系统图"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【校招折算底线】能看懂半导体精密机台控制柜图纸与传感器接线逻辑"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能读懂工业厂房高低压配电系统图与二次控制回路"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能读懂非标自动化设备电柜图纸与传感器/执行器接线图"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招 JD 底线】能读懂并整理工厂自动化设备及配电控制回路原理图"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】能看懂产线设备强弱电供电与安全互锁回路"
        }
      ]
    },
    {
      "name": "低压配电与元器件选型",
      "category": "电气制图与选型",
      "companyCount": 12,
      "companyPct": 100,
      "mustCompanyCount": 12,
      "plusCompanyCount": 0,
      "roleCount": 4,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support",
        "fab-equip"
      ],
      "mustRoleCount": 12,
      "plusRoleCount": 3,
      "totalRoleMentions": 15,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】了解常见开关、电容、电感、接触器基本参数含义"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】认识断路器、接触器、热继电器、中间继电器、开关电源等基础件"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】认识现场常见光电开关、接近开关与电磁阀接线"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解常见低压断路器/继电器选型规范"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备基础电气配电与开关元件认知"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】了解高低压配电基础及常见开关、继电器、线缆概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】认识继电器、接触器、开关电源与常见工业传感器"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备扎实低/中压配电与电气设备基础概念"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟悉接触器、断路器、继电器与常见工业传感元件"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】熟悉断路器、变压器、继电保护及配电安全常识"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟悉断路器、变压器、开关柜及强电安全操作规范"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟悉高低压开关柜、断路器、UPS 与基础继保常识"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】掌握断路器、接触器、配电柜器件常识与强电安全规程"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招 JD 底线】熟悉传感器、变频器、断路器、接触器等常见低压电器规格"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】熟悉厂区车间配电箱开关、保护器与安全接地规范"
        }
      ]
    },
    {
      "name": "技术文档与测试报告编写",
      "category": "工程与软实力",
      "companyCount": 12,
      "companyPct": 100,
      "mustCompanyCount": 9,
      "plusCompanyCount": 3,
      "roleCount": 4,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "fab-equip",
        "plc-debug"
      ],
      "mustRoleCount": 10,
      "plusRoleCount": 11,
      "totalRoleMentions": 21,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能用 Excel/Word 清晰整理测试数据曲线与异常现象记录"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】协助整理操作规程与出厂电气说明书"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】数据严谨、能规范整理测试报告与质量统计表"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】协助更新标准作业指导书（SOP）"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】数据敏感度高、细致严谨，能规范整理实验报告"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】协助整理电气规范与验证报告"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】细致踏实，能规范整理大批量寿命/可靠性试验数据表"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】极度注重细节、规范填写英文/中文测试与检验报告"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】协助编写工艺文件、FMEA 与调试作业手册"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】耐心细致，能规范整理实验数据与质量/FMEA 文档"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】能规范协助编写 SOP 与机台故障复盘记录"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】严谨细心，能规范记录电力巡检与 EHS 安全台账"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】数据敏感度高，细心规范整理良率统计表"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能规范协助撰写设备保养记录与异常复盘档案"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】严谨细心，能规范整理配电巡检台账与安全记录"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】细致耐心，能规范记录海量测试数据与撰写试验记录"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能条理清晰完成暑期项目总结 PPT 与结业答辩"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】细致严谨，能规范整理测试良率报表与硬件故障记录"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】规范整理程序备份、调试台账与技改验收文档"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【校招 JD 要求】协助完成电气台账、程序备份与技术文档编制"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】规范编写设备点检 SOP 与故障复盘记录"
        }
      ]
    },
    {
      "name": "电路与模数电基础",
      "category": "基础理论",
      "companyCount": 11,
      "companyPct": 92,
      "mustCompanyCount": 11,
      "plusCompanyCount": 0,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "fab-equip"
      ],
      "mustRoleCount": 25,
      "plusRoleCount": 0,
      "totalRoleMentions": 25,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实掌握电路分析、二极管/MOS 管开关特性与基本运放电路"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备扎实电路与模数电理论基础"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实的电路与模数电理论基础"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备扎实电路与测控基础"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实的电工学与基础电路理论"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备扎实电工学、电路或自动控制基础"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实掌握电路分析、电力电子与自动控制原理"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实掌握电路分析、电磁铁/线圈吸合（磁路）与触点通断电基础"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】扎实的电路基础与基本电气控制知识"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备扎实电路与电气设备基础知识"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】扎实的电气、自动控制或机电一体化基础理论"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】扎实的电路分析与电气控制理论功底"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】深刻理解电容充放电、ESR、耐压与交流损耗等基础概念"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备电工学、电路及基础自动控制知识"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】掌握基础模拟/数字电路与常用电子元器件特性"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】具备扎实的电路分析、电工学与自动控制基础"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】理解半导体器件伏安特性、功率器件基本参数与模电基础"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】扎实的电路、电子技术与自动控制工科基础"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习/校招底线】具备扎实的电路分析、电子技术与自动控制工科基础"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟悉模拟/数字电路及功率器件（MOSFET/IGBT/SiC）基本电性"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招 JD 底线】本科电气工程/自动化专业对口，对电气参数与电路原理敏感"
        }
      ]
    },
    {
      "name": "现场故障诊断与排故思维",
      "category": "工程与软实力",
      "companyCount": 11,
      "companyPct": 92,
      "mustCompanyCount": 11,
      "plusCompanyCount": 0,
      "roleCount": 4,
      "roleIds": [
        "tech-support",
        "plc-debug",
        "fab-equip",
        "equip-elec"
      ],
      "mustRoleCount": 14,
      "plusRoleCount": 2,
      "totalRoleMentions": 16,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备分步骤排查思维（电源输入→保护报警→负载侧隔离）"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】具备按信号链排查传感器/继电器/输出异常的逻辑思维"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】动手能力强，敢查线、会用万用表测通断电压"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】动手能力强，有条理排查产线设备小故障的潜质"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】动手能力强、抗压、能适应制造工厂现场节奏"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】具备系统级故障定位思维"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】动手意愿强、愿意深入制造一线查问题"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】踏实肯干、乐于深入车间一线排查设备异常"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】抗压能力强、动手意愿足，接受穿无尘服与产线快节奏"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】动手意愿强、抗压，能适应穿无尘服进洁净室跟班"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】动手意愿强、极度抗压，明确接受无尘服环境与未来产线倒班节奏"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】安全红线意识拉满，具备水电气突发异常冷静排查逻辑"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】抗压踏实，明确适应穿无尘服、两班倒（12 小时制）或产线值班节奏"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】具备高压安全红线意识与冷静的故障隔离思路"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】具备现场设备电气异常排查能力，能适应智造车间现场节奏"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】具备快速排查现场传感器、继电器及执行器异常的条理性"
        }
      ]
    },
    {
      "name": "AutoCAD / EPLAN 电气制图",
      "category": "电气制图与选型",
      "companyCount": 11,
      "companyPct": 92,
      "mustCompanyCount": 4,
      "plusCompanyCount": 7,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 4,
      "plusRoleCount": 7,
      "totalRoleMentions": 11,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】熟悉 AutoCAD 或 EPLAN 基础绘图的本科生更容易脱颖而出"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】至少会用 AutoCAD 画标准电气原理图，懂 EPLAN 极加分"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能用 AutoCAD 进行基础电气制图与图纸修改（规范图层、线号与元器件符号）"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会用 AutoCAD / EPLAN 绘图，偏板级方向会 Altium Designer 更优"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】熟悉 AutoCAD 基础绘图（懂 EPLAN 更优）"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 AutoCAD 绘制电气原理图与接线图"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会用 AutoCAD 查阅或修改厂务配电改造图纸"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 AutoCAD 查阅与修改厂务动力配电图纸"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招明确优先项】熟练使用 AutoCAD（或 EPLAN）绘制与修订电气图纸"
        }
      ]
    },
    {
      "name": "主流 PLC 编程（西门子/三菱等）",
      "category": "PLC与自动化",
      "companyCount": 10,
      "companyPct": 83,
      "mustCompanyCount": 2,
      "plusCompanyCount": 8,
      "roleCount": 4,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support",
        "fab-equip"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 13,
      "totalRoleMentions": 15,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解西门子 S7-1200/1500 或三菱基本梯形图逻辑即可明显加分"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】掌握至少一种主流 PLC（西门子/三菱）基础编程思维与 I/O 概念"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会看 PLC 在线状态监控排查信号断点"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】懂西门子/ABB AC500 等 PLC 基础逻辑大加分"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】熟悉西门子/三菱 PLC 编程或工业机器人基础者极优先"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】懂三菱/西门子/欧姆龙 PLC 基础控制逻辑极受自动化部门欢迎"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会在线看 PLC I/O 状态辅助查产线卡料/停机极加分"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【官网明确优先项】掌握 PLC 编程（梯形图或 ST 语言）者优先考虑"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】掌握 PLC 基础控制逻辑在技改方向非常吃香"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】熟悉 PLC 逻辑或传感器信号诊断在设备科非常加分"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】熟悉 PLC 控制逻辑或自动化机台数控基础在设备科很加分"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】在校有 PLC 编程或电气控制实战项目经历在 EE 面试很加分"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】熟悉 PLC 控制逻辑或工业自动化机电控制项目在设备岗面试加分"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】官方岗位明确优先与核心要求：掌握西门子/三菱 PLC 基础与程序逻辑"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【校招明确优先项】JD 明确写出「掌握 CAD、PLC 基础者优先」"
        }
      ]
    },
    {
      "name": "示波器与万用表实操",
      "category": "仪器测试",
      "companyCount": 9,
      "companyPct": 75,
      "mustCompanyCount": 9,
      "plusCompanyCount": 0,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 9,
      "plusRoleCount": 0,
      "totalRoleMentions": 9,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】会用示波器测电源纹波/触发抓波形、用万用表测通断压降"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】熟悉万用表、示波器等实验室常规仪器基本操作"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】熟悉万用表、示波器等实验室基础仪器操作"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】会用示波器抓继电器吸合/释放波形与弹跳时间，会用万用表测接触电阻"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】掌握万用表等常规电气测试仪表使用，动手能力强"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟练使用万用表、LCR/示波器等常规电测仪器"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】熟练操作万用表、示波器排查测试治具与信号异常"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟练操作万用表、示波器等电测仪器辅助定位测试治具异常"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】熟练使用示波器、万用表等电测仪器调试测试硬件与治具信号"
        }
      ]
    },
    {
      "name": "设备点检保养（PM）与 OEE 改善",
      "category": "产线设备运维",
      "companyCount": 9,
      "companyPct": 75,
      "mustCompanyCount": 8,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "fab-equip"
      ],
      "mustRoleCount": 8,
      "plusRoleCount": 1,
      "totalRoleMentions": 9,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】理解设备点检、预防性保养与精益效率改善基本概念"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解工厂 PM 保养、FAT/SAT 验收与 OEE 概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】理解 TPM 全员生产维护、预防性保养与提效思路"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】具备设备点检、预防性保养与规程记录意识"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】理解设备点检、PM 保养、Uptime/OEE 与安全生产（LOTO）意识"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】理解设备点检保养（TPM/PM）、SOP 与安全锁止意识"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】理解设备点检 PM、标准作业程序（SOP）及晶圆厂安全红线"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】理解设备点检保养（PM）、异常处理流程与洁净室 SOP 红线"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【校招折算底线】理解设备点检保养制度、设备台账及故障停机数据分析"
        }
      ]
    },
    {
      "name": "机械识图与气动液压基础",
      "category": "产线设备运维",
      "companyCount": 9,
      "companyPct": 75,
      "mustCompanyCount": 0,
      "plusCompanyCount": 9,
      "roleCount": 1,
      "roleIds": [
        "fab-equip"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 9,
      "totalRoleMentions": 9,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】能看懂基础机械图或了解气动元件更优"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】能看懂简单机械装配图与气动回路"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】熟悉气缸、电磁阀等自动化装配常用气动元件"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能看懂基本工装机械图、了解气缸与张力控制基础更优"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】懂基础机械传动、气动/真空阀门元件更易上手"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】懂基础机械传动、真空与气动阀门元件更易上手机台维护"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】懂机械拆装、真空泵或气动控制原理上手更快"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解机械传动、真空系统与气动阀门控制上手更快"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】熟悉气动电磁阀、气缸及机械传动结构维护更易上手黑灯工厂机台"
        }
      ]
    },
    {
      "name": "英语读写与技术交流",
      "category": "工程与软实力",
      "companyCount": 8,
      "companyPct": 67,
      "mustCompanyCount": 3,
      "plusCompanyCount": 5,
      "roleCount": 4,
      "roleIds": [
        "tech-support",
        "equip-elec",
        "ee-test",
        "fab-equip"
      ],
      "mustRoleCount": 6,
      "plusRoleCount": 7,
      "totalRoleMentions": 13,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】海外技术支持实习方向看重英语读写与口语"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】具备良好英语读写能力，能看懂英文产品手册与处理英文邮件"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能读懂英文测试规范与系统界面"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】外企核心门槛：能顺畅阅读英文技术文档并撰写英文邮件"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】海外储能支持方向看重 CET-6 与英语听说读写"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能看懂英文 SOP、图纸标注与测试系统界面（HR 面可能简短切英文）"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】商业/技术支持类外企实习重视英文读写与基本口语交流"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】部分机台界面为英文且 AI 面试可能含英文简介环节"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能看懂英文测试机台界面与半导体器件 Datasheet"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "fab-equip",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】台资背景晶圆厂，能读懂英文设备界面、英文 SOP 与部分英文测评"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能阅读进口高低压设备英文技术说明书与监控界面"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【校招明确项】简章要求投递附四六级，能读懂进口机台英文界面与手册"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】能看懂英文芯片 Datasheet 与进口测试机台技术手册"
        }
      ]
    },
    {
      "name": "C 语言与自动化脚本基础",
      "category": "软件与脚本",
      "companyCount": 7,
      "companyPct": 58,
      "mustCompanyCount": 0,
      "plusCompanyCount": 7,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 7,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会用 Python/C 处理测试数据或辅助自动化测试脚本"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】测试开发实习生会 Python/C/VBA 做测试数据处理极加分"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会 Python/Excel 脚本批量处理测试曲线数据大加分"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】测试设备升级或自动数据采集方向会 C/Python/LabVIEW 基础加分"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解测试程序脚本或数据处理工具可提升效率"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 Python/Excel 或脚本批量清洗芯片测试数据更优"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会用 C/C++ 或脚本工具处理 ATE 测试数据或编写简易测试程序极加分"
        }
      ]
    },
    {
      "name": "中低压开关柜一次/二次回路与继保",
      "category": "基础理论",
      "companyCount": 6,
      "companyPct": 50,
      "mustCompanyCount": 0,
      "plusCompanyCount": 6,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "tech-support",
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 8,
      "totalRoleMentions": 8,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解一次/二次回路、断路器、互感器与 IEC/GB 基础概念"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】理解开关柜一次/二次方案概念上手报价更快"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解中低压配电与开关柜出厂测试基本流程"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解施耐德配电产品线或开关柜架构更易获青睐"
        },
        {
          "companyId": "tianma-xiamen",
          "companyName": "天马微电子（厦门）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】懂高压供配电倒闸、UPS 备电与继电保护原理极大加分"
        },
        {
          "companyId": "sanan-opto",
          "companyName": "三安光电（厦门/泉州）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】懂高压配电倒闸、UPS 备电切换与继电保护原理非常加分"
        },
        {
          "companyId": "uscxm",
          "companyName": "联芯集成电路",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】掌握晶圆厂双电源切换、UPS 备电与继电保护整定基础极加分"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】熟悉双电源自动切换（ATS）、UPS 与继电保护基础极加分"
        }
      ]
    },
    {
      "name": "客户沟通与现场抗压",
      "category": "工程与软实力",
      "companyCount": 5,
      "companyPct": 42,
      "mustCompanyCount": 5,
      "plusCompanyCount": 0,
      "roleCount": 1,
      "roleIds": [
        "tech-support"
      ],
      "mustRoleCount": 5,
      "plusRoleCount": 0,
      "totalRoleMentions": 5,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】表达清晰、有服务意识、跨部门协作积极"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】沟通踏实、抗压、能接受未来转正后高频全国/海外出差"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】逻辑清晰、细心、具备良好跨部门协作与服务意识"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】表达条理清楚、抗压、有方案呈现能力"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】逻辑清晰、善于协作沟通、注重响应闭环"
        }
      ]
    },
    {
      "name": "安规与 EMC 测试基础",
      "category": "仪器测试",
      "companyCount": 5,
      "companyPct": 42,
      "mustCompanyCount": 0,
      "plusCompanyCount": 5,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 5,
      "totalRoleMentions": 5,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解安规爬电距离、浪涌/传导辐射 EMC 基本概念更受青睐"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解电气绝缘、耐压等基本安规测试概念"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解 CNAS/TUV 实验室测试规范与电气安规概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解绝缘耐压、温升与安规试验标准概念更优"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解高压绝缘耐压、击穿测试与元件可靠性标准"
        }
      ]
    },
    {
      "name": "Modbus / CAN / RS485 通信",
      "category": "通信协议",
      "companyCount": 3,
      "companyPct": 25,
      "mustCompanyCount": 0,
      "plusCompanyCount": 3,
      "roleCount": 2,
      "roleIds": [
        "tech-support",
        "plc-debug"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 3,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】懂 RS485/Modbus/CAN 基本概念，上手后台监控调试更快"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】数字化运营方向了解 Modbus/Profinet/IEC 61850 概念大加分"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解 Modbus/Profinet 等工业现场总线与仪表通信调试"
        }
      ]
    },
    {
      "name": "SolidWorks 机械识图基础",
      "category": "电气制图与选型",
      "companyCount": 3,
      "companyPct": 25,
      "mustCompanyCount": 0,
      "plusCompanyCount": 3,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 3,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解基础机械图纸便于配合电柜安装定位"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解 Creo / SolidWorks 三维看图方便与结构配合"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会看 SolidWorks 装配图方便对接非标自动化机械团队"
        }
      ]
    },
    {
      "name": "电力电子拓扑（整流/斩波/逆变）",
      "category": "基础理论",
      "companyCount": 2,
      "companyPct": 17,
      "mustCompanyCount": 1,
      "plusCompanyCount": 1,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "tech-support"
      ],
      "mustRoleCount": 3,
      "plusRoleCount": 1,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】懂 Buck/Boost/单相三相整流与逆变基本工作模态及 PWM 原理"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】理解 AC/DC、DC/DC、DC/AC 基本变换电路"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习底线】能用通俗语言讲清 UPS、逆变器、储能变流器是怎么工作的"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】理解储能变流器 PCS 与直流变换基础原理"
        }
      ]
    },
    {
      "name": "变频器与电机调试",
      "category": "PLC与自动化",
      "companyCount": 2,
      "companyPct": 17,
      "mustCompanyCount": 0,
      "plusCompanyCount": 2,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 4,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】懂三相异步电机启停与变频调速基本原理（与电机学衔接）"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解变频器启停控制与模拟量/通信调速基础"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解电机过载与变频器常见故障码含义"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】熟悉伺服驱动、变频器参数整定及电机控制原理在灯塔工厂产线很实用"
        }
      ]
    },
    {
      "name": "功率分析仪与电子负载",
      "category": "仪器测试",
      "companyCount": 2,
      "companyPct": 17,
      "mustCompanyCount": 0,
      "plusCompanyCount": 2,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 2,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解可编程交直流电源、电子负载与功率分析仪原理（入职可带教）"
        },
        {
          "companyId": "silan-xiamen",
          "companyName": "士兰集科 / 士兰明镓",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解大功率器件测试中的电参数测量与开尔文四线制接线常识"
        }
      ]
    },
    {
      "name": "HMI 触摸屏与组态软件",
      "category": "PLC与自动化",
      "companyCount": 2,
      "companyPct": 17,
      "mustCompanyCount": 0,
      "plusCompanyCount": 2,
      "roleCount": 1,
      "roleIds": [
        "plc-debug"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 2,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】了解触摸屏或组态画面与 PLC 变量绑定的基本方式"
        },
        {
          "companyId": "jomoo",
          "companyName": "九牧集团（智能工厂）",
          "roleId": "plc-debug",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】会做基础 HMI 人机界面组态与报警页面方便参与产线调试"
        }
      ]
    },
    {
      "name": "储能系统架构（BMS / PCS / EMS）",
      "category": "基础理论",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 1,
      "plusCompanyCount": 0,
      "roleCount": 1,
      "roleIds": [
        "tech-support"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 0,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "jdSourceType": "campus-ref",
          "detail": "【实习底线】理解储能系统里电池簇、BMS、PCS、EMS 各自干什么"
        }
      ]
    },
    {
      "name": "测试上位机基础（LabVIEW / C#）",
      "category": "软件与脚本",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 2,
      "roleIds": [
        "fab-equip",
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 2,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "fab-equip",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【官网明确优先项】了解上位机编程软件（如 C# 或 LabVIEW）者优先"
        },
        {
          "companyId": "fara-electronics",
          "companyName": "法拉电子",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "campus-ref",
          "detail": "【实习加分】掌握上位机（LabVIEW/C#）或脚本统计大批量测试数据更优"
        }
      ]
    },
    {
      "name": "电池充放电与环境可靠性测试设备",
      "category": "仪器测试",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解充放电测试机、温湿度箱或锂电测试流程优先（入职带教）"
        }
      ]
    },
    {
      "name": "竞赛或电源实测项目经历",
      "category": "工程与软实力",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】有电赛、Multisim 仿真复现或实验室电源调试闭环经历极加分"
        }
      ]
    },
    {
      "name": "质量工具与 8D/RCA 分析",
      "category": "工程与软实力",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】了解测试质量缺陷统计、8D/RCA 根因分析与 FMEA 基本概念更易通过外企质量面"
        }
      ]
    },
    {
      "name": "Altium Designer 硬件/PCB 基础",
      "category": "电气制图与选型",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】若偏功率/控制单板方向，会 Altium Designer 或 Multisim/PSIM 仿真大加分"
        }
      ]
    },
    {
      "name": "EPLAN 电气设计软件",
      "category": "电气制图与选型",
      "companyCount": 1,
      "companyPct": 8,
      "mustCompanyCount": 0,
      "plusCompanyCount": 1,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "jdSourceType": "real-intern-jd",
          "detail": "【实习加分】会使用 EPLAN Electric P8 绘制二次原理图、导出端子表与物料 BOM 清单更有竞争优势"
        }
      ]
    }
  ],
  "roleStats": [
    {
      "roleId": "equip-elec",
      "roleName": "设备电气 / 电气设计实习生",
      "shortName": "电气设计实习",
      "category": "设计与集成",
      "companyCount": 11,
      "companies": [
        {
          "id": "kehua-data",
          "name": "科华数据",
          "city": "厦门",
          "officialTitles": [
            "电气工程师实习生",
            "硬件研发实习生（数字能源/UPS）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "电气工程师实习生（智控事业部）",
            "成套装备电气设计实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期厂内为主（转正偶尔出差）"
        },
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "电气设计实习生",
            "助理研发工程师实习生（中低压开关柜方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "电气工程师实习生（储能系统/工厂电气方向）"
          ],
          "shiftWork": "无倒班（节奏较快）",
          "travelLevel": "极少出差"
        },
        {
          "id": "hongfa",
          "name": "宏发股份",
          "city": "厦门",
          "officialTitles": [
            "电气工程师实习生",
            "自动化产线电气设计实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "fara-electronics",
          "name": "法拉电子",
          "city": "厦门",
          "officialTitles": [
            "电气工程师（产线技改与自动化方向）",
            "工艺 / 设备电气工程岗（参照校招折算）"
          ],
          "shiftWork": "以白班研发/工程作息为主",
          "travelLevel": "极少出差"
        },
        {
          "id": "tianma-xiamen",
          "name": "天马微电子（厦门）",
          "city": "厦门",
          "officialTitles": [
            "厂务电气工程师实习生（Facility）",
            "厂务动力系统工程实习生"
          ],
          "shiftWork": "工程规划岗以白班为主；厂务运行值班岗需保障 24h 供电而涉及轮班（面试需确认）",
          "travelLevel": "极少出差"
        },
        {
          "id": "sanan-opto",
          "name": "三安光电（厦门/泉州）",
          "city": "厦门/泉州",
          "officialTitles": [
            "厂务电气 / 动力工程师（参照校招初级岗折算）",
            "洁净厂房供配电运维技术岗"
          ],
          "shiftWork": "工程规划偏白班；运行保障需配合 24h 值班或轮流值守",
          "travelLevel": "极少出差"
        },
        {
          "id": "uscxm",
          "name": "联芯集成电路",
          "city": "厦门",
          "officialTitles": [
            "厂务电力 / 电气工程师（Facilities · 参照校招折算）",
            "晶圆厂动力配电系统运维工程岗"
          ],
          "shiftWork": "部分厂务系统偏行政班，但动力供电保障存在白夜班轮流值守或节假日值班（面试需确认）",
          "travelLevel": "极少出差"
        },
        {
          "id": "silan-xiamen",
          "name": "士兰集科 / 士兰明镓",
          "city": "厦门",
          "officialTitles": [
            "厂务电气 / 动力系统维护工程师（参照校招及社招同类岗折算）",
            "洁净室供配电及自控设施运维岗"
          ],
          "shiftWork": "工程技术偏白班，动力供电运行保障涉及轮流值班",
          "travelLevel": "极少出差"
        },
        {
          "id": "jomoo",
          "name": "九牧集团（智能工厂）",
          "city": "泉州",
          "officialTitles": [
            "电气设计百川生（NCSS 真实校招 JD，6.5–7.5K/月，南安）",
            "生产技术（电气工程方向 · 参照校招折算）"
          ],
          "shiftWork": "以白班现场及工程办公为主，技改上线期间配合车间排期",
          "travelLevel": "极少出差"
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 11,
          "pct": 100,
          "mustCount": 11,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能读懂中低压控制与电源原理图"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】面试高频必查：能读懂常见电机启停、自锁互锁与控制柜原理图"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂基本强弱电控制与配电原理图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能准确识读储能/工业电气原理图"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能读懂自动化非标产线控制回路图纸"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能准确读懂并核对产线电气控制柜原理图"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能读懂厂区高低压一次/二次配电系统图"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电接线图"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能读懂厂务高低压一次/二次配电系统图"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能读懂工业厂房高低压配电系统图与二次控制回路"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招 JD 底线】能读懂并整理工厂自动化设备及配电控制回路原理图"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 11,
          "pct": 100,
          "mustCount": 10,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】了解常见开关、电容、电感、接触器基本参数含义"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】认识断路器、接触器、热继电器、中间继电器、开关电源等基础件"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解常见低压断路器/继电器选型规范"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】了解高低压配电基础及常见开关、继电器、线缆概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】认识继电器、接触器、开关电源与常见工业传感器"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟悉接触器、断路器、继电器与常见工业传感元件"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】熟悉断路器、变压器、继电保护及配电安全常识"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟悉断路器、变压器、开关柜及强电安全操作规范"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟悉高低压开关柜、断路器、UPS 与基础继保常识"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】掌握断路器、接触器、配电柜器件常识与强电安全规程"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招 JD 底线】熟悉传感器、变频器、断路器、接触器等常见低压电器规格"
            }
          ]
        },
        {
          "name": "AutoCAD / EPLAN 电气制图",
          "category": "电气制图与选型",
          "count": 11,
          "pct": 100,
          "mustCount": 4,
          "plusCount": 7,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】熟悉 AutoCAD 或 EPLAN 基础绘图的本科生更容易脱颖而出"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】至少会用 AutoCAD 画标准电气原理图，懂 EPLAN 极加分"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能用 AutoCAD 进行基础电气制图与图纸修改（规范图层、线号与元器件符号）"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会用 AutoCAD / EPLAN 绘图，偏板级方向会 Altium Designer 更优"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】熟悉 AutoCAD 基础绘图（懂 EPLAN 更优）"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 AutoCAD 绘制电气原理图与接线图"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会用 AutoCAD 查阅或修改厂务配电改造图纸"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 AutoCAD 查阅与修改厂务动力配电图纸"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 AutoCAD 查阅或修订厂务配电施工图纸"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招明确优先项】熟练使用 AutoCAD（或 EPLAN）绘制与修订电气图纸"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 10,
          "pct": 91,
          "mustCount": 10,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备扎实电路与模数电理论基础"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实的电路与模数电理论基础"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实掌握电路分析、电力电子与自动控制原理"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实的电路基础与基本电气控制知识"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】扎实的电路分析与电气控制理论功底"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与供配电基础"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】电气工程及其自动化核心对口：扎实的电路与电力系统基础"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招 JD 底线】本科电气工程/自动化专业对口，对电气参数与电路原理敏感"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 6,
          "pct": 55,
          "mustCount": 0,
          "plusCount": 6,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】协助整理操作规程与出厂电气说明书"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】协助整理电气规范与验证报告"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】协助编写工艺文件、FMEA 与调试作业手册"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】严谨细心，能规范记录电力巡检与 EHS 安全台账"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】严谨细心，能规范整理配电巡检台账与安全记录"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【校招 JD 要求】协助完成电气台账、程序备份与技术文档编制"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 5,
          "pct": 45,
          "mustCount": 0,
          "plusCount": 5,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解一次/二次回路、断路器、互感器与 IEC/GB 基础概念"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】懂高压供配电倒闸、UPS 备电与继电保护原理极大加分"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】懂高压配电倒闸、UPS 备电切换与继电保护原理非常加分"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】掌握晶圆厂双电源切换、UPS 备电与继电保护整定基础极加分"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】熟悉双电源自动切换（ATS）、UPS 与继电保护基础极加分"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 4,
          "pct": 36,
          "mustCount": 0,
          "plusCount": 4,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解西门子 S7-1200/1500 或三菱基本梯形图逻辑即可明显加分"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】懂三菱/西门子/欧姆龙 PLC 基础控制逻辑极受自动化部门欢迎"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】掌握 PLC 基础控制逻辑在技改方向非常吃香"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【校招明确优先项】JD 明确写出「掌握 CAD、PLC 基础者优先」"
            }
          ]
        },
        {
          "name": "SolidWorks 机械识图基础",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 27,
          "mustCount": 0,
          "plusCount": 3,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解基础机械图纸便于配合电柜安装定位"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解 Creo / SolidWorks 三维看图方便与结构配合"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会看 SolidWorks 装配图方便对接非标自动化机械团队"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 2,
          "pct": 18,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】理解 AC/DC、DC/DC、DC/AC 基本变换电路"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】理解储能变流器 PCS 与直流变换基础原理"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 2,
          "pct": 18,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】安全红线意识拉满，具备水电气突发异常冷静排查逻辑"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】具备高压安全红线意识与冷静的故障隔离思路"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 2,
          "pct": 18,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备良好英语读写能力，能看懂英文产品手册与处理英文邮件"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能阅读进口高低压设备英文技术说明书与监控界面"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 9,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】懂三相异步电机启停与变频调速基本原理（与电机学衔接）"
            }
          ]
        },
        {
          "name": "Altium Designer 硬件/PCB 基础",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 9,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】若偏功率/控制单板方向，会 Altium Designer 或 Multisim/PSIM 仿真大加分"
            }
          ]
        },
        {
          "name": "EPLAN 电气设计软件",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 9,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会使用 EPLAN Electric P8 绘制二次原理图、导出端子表与物料 BOM 清单更有竞争优势"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 10,
        "实习期厂内为主（转正偶尔出差）": 1
      },
      "shiftCounts": {
        "无倒班": 4,
        "无倒班（节奏较快）": 1,
        "以白班研发/工程作息为主": 1,
        "工程规划岗以白班为主；厂务运行值班岗需保障 24h 供电而涉及轮班（面试需确认）": 1,
        "工程规划偏白班；运行保障需配合 24h 值班或轮流值守": 1,
        "部分厂务系统偏行政班，但动力供电保障存在白夜班轮流值守或节假日值班（面试需确认）": 1,
        "工程技术偏白班，动力供电运行保障涉及轮流值班": 1,
        "以白班现场及工程办公为主，技改上线期间配合车间排期": 1
      }
    },
    {
      "roleId": "plc-debug",
      "roleName": "PLC 控制与自动化调试实习生",
      "shortName": "PLC 调试实习",
      "category": "控制与调试",
      "companyCount": 2,
      "companies": [
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "PLC 调试实习生",
            "自动化控制实习生（智控方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期厂内联调为主，转正后中～高频出差"
        },
        {
          "id": "jomoo",
          "name": "九牧集团（智能工厂）",
          "city": "泉州",
          "officialTitles": [
            "生产技术（电气 / 自动化方向 · 参照校招折算）",
            "PLC 编程与非标自动化设备调试工程师（南安灯塔工厂）"
          ],
          "shiftWork": "自动化与技改岗偏白班为主，产线大修或设备联调阶段需配合现场加班",
          "travelLevel": "极少出差（集中在南安各园区）"
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】能按原理图对照查控制柜端子和 I/O 信号"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能读懂非标自动化设备电柜图纸与传感器/执行器接线图"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】具备按信号链排查传感器/继电器/输出异常的逻辑思维"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】具备现场设备电气异常排查能力，能适应智造车间现场节奏"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】掌握至少一种主流 PLC（西门子/三菱）基础编程思维与 I/O 概念"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】官方岗位明确优先与核心要求：掌握西门子/三菱 PLC 基础与程序逻辑"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解变频器启停控制与模拟量/通信调速基础"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】熟悉伺服驱动、变频器参数整定及电机控制原理在灯塔工厂产线很实用"
            }
          ]
        },
        {
          "name": "HMI 触摸屏与组态软件",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解触摸屏或组态画面与 PLC 变量绑定的基本方式"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会做基础 HMI 人机界面组态与报警页面方便参与产线调试"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 50,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】认识现场常见光电开关、接近开关与电磁阀接线"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 1,
          "pct": 50,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】规范整理程序备份、调试台账与技改验收文档"
            }
          ]
        },
        {
          "name": "Modbus / CAN / RS485 通信",
          "category": "通信协议",
          "count": 1,
          "pct": 50,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解 Modbus/Profinet 等工业现场总线与仪表通信调试"
            }
          ]
        }
      ],
      "travelCounts": {
        "实习期厂内联调为主，转正后中～高频出差": 1,
        "极少出差（集中在南安各园区）": 1
      },
      "shiftCounts": {
        "无倒班": 1,
        "自动化与技改岗偏白班为主，产线大修或设备联调阶段需配合现场加班": 1
      }
    },
    {
      "roleId": "fab-equip",
      "roleName": "产线设备 / 维护工程实习生",
      "shortName": "设备工程实习",
      "category": "产线运维与改善",
      "companyCount": 9,
      "companies": [
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "设备维护实习生",
            "生产工程 / 精益改善实习生"
          ],
          "shiftWork": "实习生一般跟随白班导师（具体排班以部门为准，待核实）",
          "travelLevel": "极少出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "设备工程师实习生（同安智能工厂）",
            "产线自动化实习生"
          ],
          "shiftWork": "产线 24h 运转，转正后可能两班倒/白夜班（实习期排班面试时务必确认）",
          "travelLevel": "极少出差"
        },
        {
          "id": "hongfa",
          "name": "宏发股份",
          "city": "厦门",
          "officialTitles": [
            "设备工程师实习生（自动化装配线）",
            "自动化 / TPM 技术实习生"
          ],
          "shiftWork": "以白班一线跟岗为主（具体看车间排班，待核实）",
          "travelLevel": "极少出差"
        },
        {
          "id": "fara-electronics",
          "name": "法拉电子",
          "city": "厦门",
          "officialTitles": [
            "设备工程师（参照校招初级岗折算）",
            "产线设备维护与自动化技术岗"
          ],
          "shiftWork": "部分产线设备岗涉及倒班或跟班（以分厂为准，待核实）",
          "travelLevel": "极少出差"
        },
        {
          "id": "tianma-xiamen",
          "name": "天马微电子（厦门）",
          "city": "厦门",
          "officialTitles": [
            "设备工程师实习生（Array / Cell / Module 段）",
            "产线设备技术员实习生（厦门翔安基地）"
          ],
          "shiftWork": "产线 7×24 运转，多涉及白夜班两班倒或轮班值守（实习期跟班制视科室而定）",
          "travelLevel": "极少出差"
        },
        {
          "id": "sanan-opto",
          "name": "三安光电（厦门/泉州）",
          "city": "厦门/泉州",
          "officialTitles": [
            "设备工程师（参照校招初级岗折算）",
            "半导体设备 / 自动化机台技术员实习生（厦门/泉州基地）"
          ],
          "shiftWork": "技术员多涉及两班倒；工程师长白班为主但需轮流值班或 On-call",
          "travelLevel": "极少出差"
        },
        {
          "id": "uscxm",
          "name": "联芯集成电路",
          "city": "厦门",
          "officialTitles": [
            "设备工程师实习生（EE · 暑期提前批）",
            "12 寸晶圆制造设备工程实习生（薄膜 / 刻蚀 / 光刻 / 扩散段）"
          ],
          "shiftWork": "暑期实习以跟白班导师为主；转正后一线 EE 前期大概率涉及倒班（做二休二/四班两运转）或轮流 On-call",
          "travelLevel": "极少出差"
        },
        {
          "id": "silan-xiamen",
          "name": "士兰集科 / 士兰明镓",
          "city": "厦门",
          "officialTitles": [
            "生产实习生（士兰明镓 · 芯片制程与高精设备操作真实实习 JD）",
            "设备工程师（士兰集科 · 参照校招本科 80 人需求折算）"
          ],
          "shiftWork": "生产实习生明确两班倒（8:00–20:00 / 20:00–8:00，月休 4–6 天）；正式设备工程师通常涉及轮班或 On-call",
          "travelLevel": "极少出差"
        },
        {
          "id": "jomoo",
          "name": "九牧集团（智能工厂）",
          "city": "泉州",
          "officialTitles": [
            "自动化产线设备运维工程师（南安灯塔工厂 · 参照校/社招折算）",
            "生产设备管理与点检技术岗"
          ],
          "shiftWork": "工程管理偏白班，部分连续生产工段或黑灯产线值守需配合排班/值班",
          "travelLevel": "极少出差"
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 9,
          "pct": 100,
          "mustCount": 9,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂基础产线电气原理图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂自动化产线基础电气原理图"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂车间自动化机台基础电气图纸"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能读懂自动化产线电气控制回路与元器件图纸"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂自动化机台基础电气与控制信号图纸"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能看懂半导体产线机台基础强弱电与控制信号图纸"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】能看懂精密机电设备的电气控制与传感器信号回路"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【校招折算底线】能看懂半导体精密机台控制柜图纸与传感器接线逻辑"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】能看懂产线设备强弱电供电与安全互锁回路"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 9,
          "pct": 100,
          "mustCount": 9,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】动手能力强，有条理排查产线设备小故障的潜质"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】动手能力强、抗压、能适应制造工厂现场节奏"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】动手意愿强、愿意深入制造一线查问题"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】踏实肯干、乐于深入车间一线排查设备异常"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】抗压能力强、动手意愿足，接受穿无尘服与产线快节奏"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】动手意愿强、抗压，能适应穿无尘服进洁净室跟班"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】动手意愿强、极度抗压，明确接受无尘服环境与未来产线倒班节奏"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】抗压踏实，明确适应穿无尘服、两班倒（12 小时制）或产线值班节奏"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】具备快速排查现场传感器、继电器及执行器异常的条理性"
            }
          ]
        },
        {
          "name": "设备点检保养（PM）与 OEE 改善",
          "category": "产线设备运维",
          "count": 9,
          "pct": 100,
          "mustCount": 8,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】理解设备点检、预防性保养与精益效率改善基本概念"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解工厂 PM 保养、FAT/SAT 验收与 OEE 概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】理解 TPM 全员生产维护、预防性保养与提效思路"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】具备设备点检、预防性保养与规程记录意识"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】理解设备点检、PM 保养、Uptime/OEE 与安全生产（LOTO）意识"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】理解设备点检保养（TPM/PM）、SOP 与安全锁止意识"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】理解设备点检 PM、标准作业程序（SOP）及晶圆厂安全红线"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】理解设备点检保养（PM）、异常处理流程与洁净室 SOP 红线"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】理解设备点检保养制度、设备台账及故障停机数据分析"
            }
          ]
        },
        {
          "name": "机械识图与气动液压基础",
          "category": "产线设备运维",
          "count": 9,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 9,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】能看懂基础机械图或了解气动元件更优"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】能看懂简单机械装配图与气动回路"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】熟悉气缸、电磁阀等自动化装配常用气动元件"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能看懂基本工装机械图、了解气缸与张力控制基础更优"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】懂基础机械传动、气动/真空阀门元件更易上手"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】懂基础机械传动、真空与气动阀门元件更易上手机台维护"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】懂机械拆装、真空泵或气动控制原理上手更快"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解机械传动、真空系统与气动阀门控制上手更快"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】熟悉气动电磁阀、气缸及机械传动结构维护更易上手黑灯工厂机台"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 8,
          "pct": 89,
          "mustCount": 0,
          "plusCount": 8,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】懂西门子/ABB AC500 等 PLC 基础逻辑大加分"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】熟悉西门子/三菱 PLC 编程或工业机器人基础者极优先"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会在线看 PLC I/O 状态辅助查产线卡料/停机极加分"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【官网明确优先项】掌握 PLC 编程（梯形图或 ST 语言）者优先考虑"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】熟悉 PLC 逻辑或传感器信号诊断在设备科非常加分"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】熟悉 PLC 控制逻辑或自动化机台数控基础在设备科很加分"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】在校有 PLC 编程或电气控制实战项目经历在 EE 面试很加分"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】熟悉 PLC 控制逻辑或工业自动化机电控制项目在设备岗面试加分"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 6,
          "pct": 67,
          "mustCount": 6,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备扎实电工学、电路或自动控制基础"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】扎实的电气、自动控制或机电一体化基础理论"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备电工学、电路及基础自动控制知识"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】具备扎实的电路分析、电工学与自动控制基础"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】扎实的电路、电子技术与自动控制工科基础"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习/校招底线】具备扎实的电路分析、电子技术与自动控制工科基础"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 5,
          "pct": 56,
          "mustCount": 1,
          "plusCount": 4,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】协助更新标准作业指导书（SOP）"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】能规范协助编写 SOP 与机台故障复盘记录"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能规范协助撰写设备保养记录与异常复盘档案"
            },
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能条理清晰完成暑期项目总结 PPT 与结业答辩"
            },
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】规范编写设备点检 SOP 与故障复盘记录"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 2,
          "pct": 22,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "uscxm",
              "companyName": "联芯集成电路",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】台资背景晶圆厂，能读懂英文设备界面、英文 SOP 与部分英文测评"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【校招明确项】简章要求投递附四六级，能读懂进口机台英文界面与手册"
            }
          ]
        },
        {
          "name": "测试上位机基础（LabVIEW / C#）",
          "category": "软件与脚本",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【官网明确优先项】了解上位机编程软件（如 C# 或 LabVIEW）者优先"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "jomoo",
              "companyName": "九牧集团（智能工厂）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】熟悉厂区车间配电箱开关、保护器与安全接地规范"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 9
      },
      "shiftCounts": {
        "实习生一般跟随白班导师（具体排班以部门为准，待核实）": 1,
        "产线 24h 运转，转正后可能两班倒/白夜班（实习期排班面试时务必确认）": 1,
        "以白班一线跟岗为主（具体看车间排班，待核实）": 1,
        "部分产线设备岗涉及倒班或跟班（以分厂为准，待核实）": 1,
        "产线 7×24 运转，多涉及白夜班两班倒或轮班值守（实习期跟班制视科室而定）": 1,
        "技术员多涉及两班倒；工程师长白班为主但需轮流值班或 On-call": 1,
        "暑期实习以跟白班导师为主；转正后一线 EE 前期大概率涉及倒班（做二休二/四班两运转）或轮流 On-call": 1,
        "生产实习生明确两班倒（8:00–20:00 / 20:00–8:00，月休 4–6 天）；正式设备工程师通常涉及轮班或 On-call": 1,
        "工程管理偏白班，部分连续生产工段或黑灯产线值守需配合排班/值班": 1
      }
    },
    {
      "roleId": "ee-test",
      "roleName": "电气 / 硬件产品测试实习生",
      "shortName": "产品测试实习",
      "category": "研发验证与质量",
      "companyCount": 9,
      "companies": [
        {
          "id": "kehua-data",
          "name": "科华数据",
          "city": "厦门",
          "officialTitles": [
            "硬件测试实习生（电力电子/电源方向）",
            "测试工程师实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "测试开发实习生",
            "过程质量实习生（电气/开关设备方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "电气件/系统测试实习生",
            "实验室测试验证实习生（CNAS/TUV 中心）"
          ],
          "shiftWork": "无固定倒班（视测试排期可能加班）",
          "travelLevel": "极少出差"
        },
        {
          "id": "hongfa",
          "name": "宏发股份",
          "city": "厦门",
          "officialTitles": [
            "电气测试实习生",
            "质量 / 可靠性试验实习生（检测分析方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "schneider-xiamen",
          "name": "施耐德电气（厦门）",
          "city": "厦门",
          "officialTitles": [
            "测试工程师实习生（开关柜/电力模块出厂测试）",
            "过程质量 / 项目质量实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "极少出差"
        },
        {
          "id": "fara-electronics",
          "name": "法拉电子",
          "city": "厦门",
          "officialTitles": [
            "测试工程师 / 质量与工艺试验岗（参照校招折算）",
            "薄膜电容器电性能测试辅助岗"
          ],
          "shiftWork": "研发/质量实验室常白班为主（产线质量支援视情况）",
          "travelLevel": "极少出差"
        },
        {
          "id": "tianma-xiamen",
          "name": "天马微电子（厦门）",
          "city": "厦门",
          "officialTitles": [
            "产品测试实习生（Array / Module 电测方向）",
            "显示光学与电性能测试实习生"
          ],
          "shiftWork": "产线电测多需穿无尘服并可能涉及两班倒；研发实验室测试相对偏白班",
          "travelLevel": "极少出差"
        },
        {
          "id": "sanan-opto",
          "name": "三安光电（厦门/泉州）",
          "city": "厦门/泉州",
          "officialTitles": [
            "电性能 / 可靠性测试工程师（参照校招折算）",
            "芯片测试 / 品质技术员实习生（化合物半导体方向）"
          ],
          "shiftWork": "实验室研发测试偏白班；产线品质/芯片测试技术员多涉及两班倒",
          "travelLevel": "极少出差"
        },
        {
          "id": "silan-xiamen",
          "name": "士兰集科 / 士兰明镓",
          "city": "厦门",
          "officialTitles": [
            "测试设备工程师（参照校招本科岗折算）",
            "测试工艺工程师 / ATE 芯片测试工程师（参照校招折算）"
          ],
          "shiftWork": "测试工艺/开发偏白班跟产；测试设备维护视产线需求可能涉及轮班或值班",
          "travelLevel": "极少出差"
        }
      ],
      "skills": [
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 9,
          "pct": 100,
          "mustCount": 9,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实掌握电路分析、二极管/MOS 管开关特性与基本运放电路"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备扎实电路与测控基础"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实的电工学与基础电路理论"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】扎实掌握电路分析、电磁铁/线圈吸合（磁路）与触点通断电基础"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备扎实电路与电气设备基础知识"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】深刻理解电容充放电、ESR、耐压与交流损耗等基础概念"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】掌握基础模拟/数字电路与常用电子元器件特性"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】理解半导体器件伏安特性、功率器件基本参数与模电基础"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟悉模拟/数字电路及功率器件（MOSFET/IGBT/SiC）基本电性"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 9,
          "pct": 100,
          "mustCount": 9,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能用 Excel/Word 清晰整理测试数据曲线与异常现象记录"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】数据严谨、能规范整理测试报告与质量统计表"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】数据敏感度高、细致严谨，能规范整理实验报告"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】细致踏实，能规范整理大批量寿命/可靠性试验数据表"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】极度注重细节、规范填写英文/中文测试与检验报告"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】耐心细致，能规范整理实验数据与质量/FMEA 文档"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】数据敏感度高，细心规范整理良率统计表"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】细致耐心，能规范记录海量测试数据与撰写试验记录"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】细致严谨，能规范整理测试良率报表与硬件故障记录"
            }
          ]
        },
        {
          "name": "示波器与万用表实操",
          "category": "仪器测试",
          "count": 9,
          "pct": 100,
          "mustCount": 9,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】会用示波器测电源纹波/触发抓波形、用万用表测通断压降"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】熟悉万用表、示波器等实验室常规仪器基本操作"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】熟悉万用表、示波器等实验室基础仪器操作"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】会用示波器抓继电器吸合/释放波形与弹跳时间，会用万用表测接触电阻"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】掌握万用表等常规电气测试仪表使用，动手能力强"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟练使用万用表、LCR/示波器等常规电测仪器"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】熟练操作万用表、示波器排查测试治具与信号异常"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟练操作万用表、示波器等电测仪器辅助定位测试治具异常"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【校招折算底线】熟练使用示波器、万用表等电测仪器调试测试硬件与治具信号"
            }
          ]
        },
        {
          "name": "C 语言与自动化脚本基础",
          "category": "软件与脚本",
          "count": 7,
          "pct": 78,
          "mustCount": 0,
          "plusCount": 7,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会用 Python/C 处理测试数据或辅助自动化测试脚本"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】测试开发实习生会 Python/C/VBA 做测试数据处理极加分"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】会 Python/Excel 脚本批量处理测试曲线数据大加分"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】测试设备升级或自动数据采集方向会 C/Python/LabVIEW 基础加分"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解测试程序脚本或数据处理工具可提升效率"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 Python/Excel 或脚本批量清洗芯片测试数据更优"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会用 C/C++ 或脚本工具处理 ATE 测试数据或编写简易测试程序极加分"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 5,
          "pct": 56,
          "mustCount": 2,
          "plusCount": 3,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能读懂英文测试规范与系统界面"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂英文 SOP、图纸标注与测试系统界面（HR 面可能简短切英文）"
            },
            {
              "companyId": "tianma-xiamen",
              "companyName": "天马微电子（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】部分机台界面为英文且 AI 面试可能含英文简介环节"
            },
            {
              "companyId": "sanan-opto",
              "companyName": "三安光电（厦门/泉州）",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能看懂英文测试机台界面与半导体器件 Datasheet"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】能看懂英文芯片 Datasheet 与进口测试机台技术手册"
            }
          ]
        },
        {
          "name": "安规与 EMC 测试基础",
          "category": "仪器测试",
          "count": 5,
          "pct": 56,
          "mustCount": 0,
          "plusCount": 5,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解安规爬电距离、浪涌/传导辐射 EMC 基本概念更受青睐"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解电气绝缘、耐压等基本安规测试概念"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解 CNAS/TUV 实验室测试规范与电气安规概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解绝缘耐压、温升与安规试验标准概念更优"
            },
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解高压绝缘耐压、击穿测试与元件可靠性标准"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 22,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂基本控制板/功率板原理图，定位测试点"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂开关柜与配电模块基础电气图纸"
            }
          ]
        },
        {
          "name": "功率分析仪与电子负载",
          "category": "仪器测试",
          "count": 2,
          "pct": 22,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解可编程交直流电源、电子负载与功率分析仪原理（入职可带教）"
            },
            {
              "companyId": "silan-xiamen",
              "companyName": "士兰集科 / 士兰明镓",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解大功率器件测试中的电参数测量与开尔文四线制接线常识"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 1,
          "pct": 11,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】懂 Buck/Boost/单相三相整流与逆变基本工作模态及 PWM 原理"
            }
          ]
        },
        {
          "name": "测试上位机基础（LabVIEW / C#）",
          "category": "软件与脚本",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "fara-electronics",
              "companyName": "法拉电子",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】掌握上位机（LabVIEW/C#）或脚本统计大批量测试数据更优"
            }
          ]
        },
        {
          "name": "电池充放电与环境可靠性测试设备",
          "category": "仪器测试",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解充放电测试机、温湿度箱或锂电测试流程优先（入职带教）"
            }
          ]
        },
        {
          "name": "竞赛或电源实测项目经历",
          "category": "工程与软实力",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】有电赛、Multisim 仿真复现或实验室电源调试闭环经历极加分"
            }
          ]
        },
        {
          "name": "质量工具与 8D/RCA 分析",
          "category": "工程与软实力",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解测试质量缺陷统计、8D/RCA 根因分析与 FMEA 基本概念更易通过外企质量面"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 1,
          "pct": 11,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解中低压配电与开关柜出厂测试基本流程"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 9
      },
      "shiftCounts": {
        "无倒班": 4,
        "无固定倒班（视测试排期可能加班）": 1,
        "研发/质量实验室常白班为主（产线质量支援视情况）": 1,
        "产线电测多需穿无尘服并可能涉及两班倒；研发实验室测试相对偏白班": 1,
        "实验室研发测试偏白班；产线品质/芯片测试技术员多涉及两班倒": 1,
        "测试工艺/开发偏白班跟产；测试设备维护视产线需求可能涉及轮班或值班": 1
      }
    },
    {
      "roleId": "tech-support",
      "roleName": "电气技术支持 / FAE 实习生",
      "shortName": "技术支持实习",
      "category": "客户与现场交付",
      "companyCount": 5,
      "companies": [
        {
          "id": "kehua-data",
          "name": "科华数据",
          "city": "厦门",
          "officialTitles": [
            "技术支持实习生（售前/售后方向）",
            "数字能源技术服务实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期以总部辅助为主，转正后高频出差"
        },
        {
          "id": "nflg",
          "name": "南方路机",
          "city": "泉州",
          "officialTitles": [
            "售后服务实习生（电气方向）",
            "工程技术支持实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地学习为主，转正后高频全国/海外出差"
        },
        {
          "id": "abb-xiamen",
          "name": "ABB（厦门工业中心）",
          "city": "厦门",
          "officialTitles": [
            "技术支持 / 配置报价实习生",
            "数字化运营实习生（电气方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期园区坐班为主"
        },
        {
          "id": "hithium",
          "name": "海辰储能",
          "city": "厦门",
          "officialTitles": [
            "储能技术支持 / 应用工程实习生（AE 方向）"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地支持为主，转正后高频国内/海外出差"
        },
        {
          "id": "schneider-xiamen",
          "name": "施耐德电气（厦门）",
          "city": "厦门",
          "officialTitles": [
            "技术支持实习生（新星计划预科）",
            "现场技术执行实习生"
          ],
          "shiftWork": "无倒班",
          "travelLevel": "实习期基地支持为主"
        }
      ],
      "skills": [
        {
          "name": "客户沟通与现场抗压",
          "category": "工程与软实力",
          "count": 5,
          "pct": 100,
          "mustCount": 5,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】表达清晰、有服务意识、跨部门协作积极"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】沟通踏实、抗压、能接受未来转正后高频全国/海外出差"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】逻辑清晰、细心、具备良好跨部门协作与服务意识"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】表达条理清楚、抗压、有方案呈现能力"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】逻辑清晰、善于协作沟通、注重响应闭环"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 4,
          "pct": 80,
          "mustCount": 4,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能看懂整机强弱电基本接线与配电图"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】能看懂基本强弱电控制图纸"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】能看懂储能集装箱基本电气一次/二次框图"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能读懂基本配电系统图与控制图"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 4,
          "pct": 80,
          "mustCount": 2,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】海外技术支持实习方向看重英语读写与口语"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】外企核心门槛：能顺畅阅读英文技术文档并撰写英文邮件"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】海外储能支持方向看重 CET-6 与英语听说读写"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】商业/技术支持类外企实习重视英文读写与基本口语交流"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 3,
          "pct": 60,
          "mustCount": 2,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备分步骤排查思维（电源输入→保护报警→负载侧隔离）"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】动手能力强，敢查线、会用万用表测通断电压"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】具备系统级故障定位思维"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 40,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备基础电气配电与开关元件认知"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】具备扎实低/中压配电与电气设备基础概念"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 2,
          "pct": 40,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】理解开关柜一次/二次方案概念上手报价更快"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】了解施耐德配电产品线或开关柜架构更易获青睐"
            }
          ]
        },
        {
          "name": "Modbus / CAN / RS485 通信",
          "category": "通信协议",
          "count": 2,
          "pct": 40,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】懂 RS485/Modbus/CAN 基本概念，上手后台监控调试更快"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习加分】数字化运营方向了解 Modbus/Profinet/IEC 61850 概念大加分"
            }
          ]
        },
        {
          "name": "储能系统架构（BMS / PCS / EMS）",
          "category": "基础理论",
          "count": 1,
          "pct": 20,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "jdSourceType": "campus-ref",
              "detail": "【实习底线】理解储能系统里电池簇、BMS、PCS、EMS 各自干什么"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 1,
          "pct": 20,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "jdSourceType": "real-intern-jd",
              "detail": "【实习底线】能用通俗语言讲清 UPS、逆变器、储能变流器是怎么工作的"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】了解电机过载与变频器常见故障码含义"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "jdSourceType": "campus-ref",
              "detail": "【实习加分】会看 PLC 在线状态监控排查信号断点"
            }
          ]
        }
      ],
      "travelCounts": {
        "实习期以总部辅助为主，转正后高频出差": 1,
        "实习期基地学习为主，转正后高频全国/海外出差": 1,
        "实习期园区坐班为主": 1,
        "实习期基地支持为主，转正后高频国内/海外出差": 1,
        "实习期基地支持为主": 1
      },
      "shiftCounts": {
        "无倒班": 5
      }
    }
  ]
};
