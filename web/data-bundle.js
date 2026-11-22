/* 自动生成文件，请勿手动编辑。运行 node scripts/build_and_verify.mjs 更新 */
window.__RADAR_DATA__ = {
  "generatedAt": "2026-11-22",
  "overview": {
    "totalCompanies": 6,
    "totalQueue": 20,
    "pendingQueue": 14,
    "completionPct": 30,
    "totalMatchedRoleInstances": 19,
    "realInternJdRoles": 15,
    "campusRefRoles": 4,
    "summerSupportCount": 6,
    "uniqueSkillCount": 25,
    "cityCounts": {
      "厦门": 5,
      "泉州": 1
    },
    "trackCounts": {
      "电力电子/储能与配电": 5,
      "高端装备与智能制造": 1
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
    "updatedAt": "2026-11-22",
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
        "status": "pending",
        "researchedAt": null,
        "focusHint": "薄膜电容全球龙头，扒设备电气/测试与产线自动化岗"
      },
      {
        "order": 8,
        "id": "tianma-xiamen",
        "name": "天马微电子（厦门）",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安显示面板大厂，扒设备工程师/厂务电气真实倒班与培养情况"
      },
      {
        "order": 9,
        "id": "sanan-opto",
        "name": "三安光电（厦门/泉州）",
        "city": "厦门/泉州",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "跨厦泉双基地，对比光电芯片设备工程与厂务动力电气岗"
      },
      {
        "order": 10,
        "id": "uscxm",
        "name": "联芯集成电路",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "翔安晶圆厂，扒设备工程师/厂务电力系统要求与双非匹配度"
      },
      {
        "order": 11,
        "id": "silan-xiamen",
        "name": "士兰集科 / 士兰明镓",
        "city": "厦门",
        "track": "半导体/光电与精密制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "海沧功率半导体晶圆制造，扒设备工程与测试岗"
      },
      {
        "order": 12,
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
        "order": 13,
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
        "order": 14,
        "id": "jomoo",
        "name": "九牧集团（智能工厂）",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "A",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "南安5G智能工厂标杆，扒PLC自动化控制与产线设备电气岗"
      },
      {
        "order": 15,
        "id": "ttm-quanzhou",
        "name": "铁拓机械",
        "city": "泉州",
        "track": "高端装备与智能制造",
        "priority": "B",
        "status": "pending",
        "researchedAt": null,
        "focusHint": "泉州洛江北交所上市装备厂，与南方路机横向对比电控与PLC栈"
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
        "focusHint": "泉州惠安大型流程工业，扒电气运行维护/继电保护与仪表自动化"
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
        "focusHint": "厦门新能源电池正极材料龙头，扒工厂设备电气与自动化控制岗"
      }
    ]
  },
  "changelog": [
    {
      "day": 1,
      "date": "2026-11-22",
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
      "addedCompanies": [
        "abb-xiamen",
        "hithium"
      ],
      "headline": "全面升级为「真·2027 暑期/日常实习生专用雷达」（参考 2025–2026 实习 JD 回炉重核全部 4 企）",
      "keyTakeaway": "基于 2025/2026 真实实习招聘复核后发现：① 科华、ABB、海辰 3 家明确支持 7–8 月 2～3 个月暑期实习且带转正通道；② 南方路机较少办大规模独立暑期网申，需春季主动直联 HR 或走高校宣讲；③ 拆清「拿实习 Offer 底线」后，大三投简历前最核心的其实不是独立扛整线，而是「电路/电力电子基础 + 电气原理图识读 + 示波器/AutoCAD 入门 + 清晰排故表达」。"
    },
    {
      "day": 3,
      "date": "2026-11-22",
      "addedCompanies": [
        "hongfa",
        "schneider-xiamen"
      ],
      "headline": "按 2025/2026 纯实习标准新增双企：「宏发股份（集美/海沧）」×「施耐德电气（翔安）」",
      "keyTakeaway": "全库已达 6/20 企、19 条实习岗位（15 条为真实实习生 JD）。① 宏发距厦门理工最近、支持 1.5～3 个月暑期且常包吃住班车，非常适合大三练「继电器测试/非标自动化电气」；② 施耐德与 ABB 构成翔安外企双雄，WLB 极佳且 Intern-to-Fulltime 转正强，但暑期项目偏 6–9 月（3 个月）且面试常考 8D/RCA 质量思维与英文读写。"
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
        "stipendNote": "未查到官方公开统一定额实习日薪（随学历与岗位动态核定，待 2027 春季实测/面试核实）"
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
          "label": "科华数据官方校招与实习项目介绍（kehua.com.cn / dhu.edu.cn / hdu.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网科华数据 2025/2026 暑期与日常实习生简章（lzu.edu.cn / wondercv）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台科华厦门硬件测试与技术支持实习/初级岗 JD 汇总（liepin / nowcoder）",
          "date": "2026-11-22"
        }
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
        "stipendNote": "提供基础实习补贴、厂区福利食堂与住宿协助/集体宿舍（具体日薪/月薪面议，待核实）"
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
          "label": "南方路机官网招聘与校招/智控体系介绍（nflg.com）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网南方路机 2025/2026 实习培养与泉州人才政策说明（lzxk.edu.cn / jlu.edu.cn / sdu.edu.cn）",
          "date": "2026-11-22"
        }
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
        "stipendNote": "按外企标准发放实习津贴（具体日薪依厦门对应实体与本科/硕士层级而定，未查到统一公开数额，待核实）"
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
              "detail": "【实习底线】熟悉 AutoCAD 基础绘图；提前了解 EPLAN 宏/端子排/BOM 概念极大加分"
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
          "label": "ABB 官网 Career 实习生与厦门园区说明（careers.abb / abb.com）",
          "date": "2026-11-22"
        },
        {
          "label": "高校就业网与招聘平台 ABB 厦门 2025/2026 Intern 岗位要求（gdut.edu.cn / sjtu.edu.cn / yingjiesheng / liepin）",
          "date": "2026-11-22"
        }
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
        "stipendNote": "未查到官方公开统一定额实习日薪（同安园区配套免费宿舍/食堂/班车，具体补贴以当期 Offer 为准，待核实）"
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
          "label": "高校就业网海辰储能 2025/2026 暑期实习与“未来星”简章（jlu.edu.cn / ustc.edu.cn / dlmu.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台海辰厦门同安测试/设备/电气实习岗位要求（iguopin / liepin / wondercv）",
          "date": "2026-11-22"
        }
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
        "stipendNote": "提供实习补贴、免费工作餐/餐补、公寓式宿舍（如 4 人间）与免费班车（具体实习日薪标准待核实）"
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
          "label": "高校就业网宏发股份 2025/2026 校招与实习生培养简章（xmu.edu.cn / hust.edu.cn / xujc.com / fjsmu.edu.cn）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台宏发厦门集美/海沧实习岗位要求汇总（shixiseng / zhipin / yingjiesheng / wondercv）",
          "date": "2026-11-22"
        }
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
        "conversionPolicy": "典型外企 Intern-to-Fulltime 选拔模式：实习期表现靠谱、主动参与现场改善或小工具开发，转正成功率较高",
        "stipendNote": "外企规范实习津贴 + 翔安厂区工作餐/往返岛内外班车（具体日薪未见官方统一披露，待核实）"
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
              "name": "设备点检保养（PM）与 OEE 改善",
              "category": "产线设备运维",
              "level": "plus",
              "detail": "【实习加分】了解 8D、RCA 根因分析、FMEA 或 Lean 精益改善概念面试极加分"
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
          "label": "施耐德电气官方招聘与 2025/2026 暑期实习生/新星计划介绍（se.com / zju.edu.cn / xujc.com）",
          "date": "2026-11-22"
        },
        {
          "label": "公开招聘平台施耐德厦门开关设备测试/质量/技术支持实习 JD 与面经汇总（zhipin / nowcoder / yingjiesheng / wondercv）",
          "date": "2026-11-22"
        }
      ]
    }
  ],
  "skillCategories": [
    "电气制图与选型",
    "工程与软实力",
    "基础理论",
    "仪器测试",
    "产线设备运维",
    "PLC与自动化",
    "软件与脚本",
    "通信协议"
  ],
  "skillStatsOverall": [
    {
      "name": "电气原理图识读",
      "category": "电气制图与选型",
      "companyCount": 6,
      "companyPct": 100,
      "roleCount": 5,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "tech-support",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 15,
      "plusRoleCount": 0,
      "totalRoleMentions": 15,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】能看懂基本控制板/功率板原理图，定位测试点"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】能读懂中低压控制与电源原理图"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】能看懂整机强弱电基本接线与配电图"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】面试高频必查：能读懂常见电机启停、自锁互锁与控制柜原理图"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "【实习底线】能按原理图对照查控制柜端子和 I/O 信号"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】能看懂基本强弱电控制图纸"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】能看懂基本强弱电控制与配电原理图"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】能看懂基础产线电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】能看懂自动化产线基础电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】能准确识读储能/工业电气原理图"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】能看懂储能集装箱基本电气一次/二次框图"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】能读懂自动化非标产线控制回路图纸"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】能看懂车间自动化机台基础电气图纸"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】能看懂开关柜与配电模块基础电气图纸"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】能读懂基本配电系统图与控制图"
        }
      ]
    },
    {
      "name": "低压配电与元器件选型",
      "category": "电气制图与选型",
      "companyCount": 6,
      "companyPct": 100,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support"
      ],
      "mustRoleCount": 6,
      "plusRoleCount": 2,
      "totalRoleMentions": 8,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】了解常见开关、电容、电感、接触器基本参数含义"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】认识断路器、接触器、热继电器、中间继电器、开关电源等基础件"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "detail": "【实习加分】认识现场常见光电开关、接近开关与电磁阀接线"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】了解常见低压断路器/继电器选型规范"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】具备基础电气配电与开关元件认知"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】了解高低压配电基础及常见开关、继电器、线缆概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】认识继电器、接触器、开关电源与常见工业传感器"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】具备扎实低/中压配电与电气设备基础概念"
        }
      ]
    },
    {
      "name": "技术文档与测试报告编写",
      "category": "工程与软实力",
      "companyCount": 6,
      "companyPct": 100,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "fab-equip"
      ],
      "mustRoleCount": 6,
      "plusRoleCount": 2,
      "totalRoleMentions": 8,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】能用 Excel/Word 清晰整理测试数据曲线与异常现象记录"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】协助整理操作规程与出厂电气说明书"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】数据严谨、能规范整理测试报告与质量统计表"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】协助更新标准作业指导书（SOP）"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】数据敏感度高、细致严谨，能规范整理实验报告"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】协助整理电气规范与验证报告"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】细致踏实，能规范整理大批量寿命/可靠性试验数据表"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】极度注重细节、规范填写英文/中文测试与检验报告"
        }
      ]
    },
    {
      "name": "电路与模数电基础",
      "category": "基础理论",
      "companyCount": 5,
      "companyPct": 83,
      "roleCount": 3,
      "roleIds": [
        "ee-test",
        "equip-elec",
        "fab-equip"
      ],
      "mustRoleCount": 10,
      "plusRoleCount": 0,
      "totalRoleMentions": 10,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】扎实掌握电路分析、二极管/MOS 管开关特性与基本运放电路"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】具备扎实电路与模数电理论基础"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】扎实的电路与模数电理论基础"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】具备扎实电路与测控基础"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】扎实的电工学与基础电路理论"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】具备扎实电工学、电路或自动控制基础"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】扎实掌握电路分析、电力电子与自动控制原理"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】扎实掌握电路分析、电磁铁/线圈吸合（磁路）与触点通断电基础"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】扎实的电路基础与基本电气控制知识"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】具备扎实电路与电气设备基础知识"
        }
      ]
    },
    {
      "name": "现场故障诊断与排故思维",
      "category": "工程与软实力",
      "companyCount": 5,
      "companyPct": 83,
      "roleCount": 3,
      "roleIds": [
        "tech-support",
        "plc-debug",
        "fab-equip"
      ],
      "mustRoleCount": 6,
      "plusRoleCount": 1,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】具备分步骤排查思维（电源输入→保护报警→负载侧隔离）"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "【实习底线】具备按信号链排查传感器/继电器/输出异常的逻辑思维"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】动手能力强，敢查线、会用万用表测通断电压"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】动手能力强，有条理排查产线设备小故障的潜质"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】动手能力强、抗压、能适应制造工厂现场节奏"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】具备系统级故障定位思维"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】动手意愿强、愿意深入制造一线查问题"
        }
      ]
    },
    {
      "name": "客户沟通与现场抗压",
      "category": "工程与软实力",
      "companyCount": 5,
      "companyPct": 83,
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
          "detail": "【实习底线】表达清晰、有服务意识、跨部门协作积极"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】沟通踏实、抗压、能接受未来转正后高频全国/海外出差"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】逻辑清晰、细心、具备良好跨部门协作与服务意识"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】表达条理清楚、抗压、有方案呈现能力"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】逻辑清晰、善于协作沟通、注重响应闭环"
        }
      ]
    },
    {
      "name": "示波器与万用表实操",
      "category": "仪器测试",
      "companyCount": 5,
      "companyPct": 83,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 5,
      "plusRoleCount": 0,
      "totalRoleMentions": 5,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】会用示波器测电源纹波/触发抓波形、用万用表测通断压降"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】熟悉万用表、示波器等实验室常规仪器基本操作"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】熟悉万用表、示波器等实验室基础仪器操作"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】会用示波器抓继电器吸合/释放波形与弹跳时间，会用万用表测接触电阻"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】掌握万用表等常规电气测试仪表使用，动手能力强"
        }
      ]
    },
    {
      "name": "AutoCAD / EPLAN 电气制图",
      "category": "电气制图与选型",
      "companyCount": 5,
      "companyPct": 83,
      "roleCount": 1,
      "roleIds": [
        "equip-elec"
      ],
      "mustRoleCount": 3,
      "plusRoleCount": 2,
      "totalRoleMentions": 5,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】熟悉 AutoCAD 或 EPLAN 基础绘图的本科生更容易脱颖而出"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】至少会用 AutoCAD 画标准电气原理图，懂 EPLAN 极加分"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】熟悉 AutoCAD 基础绘图；提前了解 EPLAN 宏/端子排/BOM 概念极大加分"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】会用 AutoCAD / EPLAN 绘图，偏板级方向会 Altium Designer 更优"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】熟悉 AutoCAD 基础绘图（懂 EPLAN 更优）"
        }
      ]
    },
    {
      "name": "英语读写与技术交流",
      "category": "工程与软实力",
      "companyCount": 4,
      "companyPct": 67,
      "roleCount": 3,
      "roleIds": [
        "tech-support",
        "equip-elec",
        "ee-test"
      ],
      "mustRoleCount": 5,
      "plusRoleCount": 2,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】海外技术支持实习方向看重英语读写与口语"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】具备良好英语读写能力，能看懂英文产品手册与处理英文邮件"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】能读懂英文测试规范与系统界面"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】外企核心门槛：能顺畅阅读英文技术文档并撰写英文邮件"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】海外储能支持方向看重 CET-6 与英语听说读写"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "must",
          "detail": "【实习底线】能看懂英文 SOP、图纸标注与测试系统界面（HR 面可能简短切英文）"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】商业/技术支持类外企实习重视英文读写与基本口语交流"
        }
      ]
    },
    {
      "name": "设备点检保养（PM）与 OEE 改善",
      "category": "产线设备运维",
      "companyCount": 4,
      "companyPct": 67,
      "roleCount": 2,
      "roleIds": [
        "fab-equip",
        "ee-test"
      ],
      "mustRoleCount": 2,
      "plusRoleCount": 2,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】理解设备点检、预防性保养与精益效率改善基本概念"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】了解工厂 PM 保养、FAT/SAT 验收与 OEE 概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "must",
          "detail": "【实习底线】理解 TPM 全员生产维护、预防性保养与提效思路"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解 8D、RCA 根因分析、FMEA 或 Lean 精益改善概念面试极加分"
        }
      ]
    },
    {
      "name": "主流 PLC 编程（西门子/三菱等）",
      "category": "PLC与自动化",
      "companyCount": 4,
      "companyPct": 67,
      "roleCount": 4,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support",
        "fab-equip"
      ],
      "mustRoleCount": 1,
      "plusRoleCount": 6,
      "totalRoleMentions": 7,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】了解西门子 S7-1200/1500 或三菱基本梯形图逻辑即可明显加分"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "must",
          "detail": "【实习底线】掌握至少一种主流 PLC（西门子/三菱）基础编程思维与 I/O 概念"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】会看 PLC 在线状态监控排查信号断点"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】懂西门子/ABB AC500 等 PLC 基础逻辑大加分"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】熟悉西门子/三菱 PLC 编程或工业机器人基础者极优先"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】懂三菱/西门子/欧姆龙 PLC 基础控制逻辑极受自动化部门欢迎"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】会在线看 PLC I/O 状态辅助查产线卡料/停机极加分"
        }
      ]
    },
    {
      "name": "安规与 EMC 测试基础",
      "category": "仪器测试",
      "companyCount": 4,
      "companyPct": 67,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 4,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解安规爬电距离、浪涌/传导辐射 EMC 基本概念更受青睐"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解电气绝缘、耐压等基本安规测试概念"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解 CNAS/TUV 实验室测试规范与电气安规概念"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解绝缘耐压、温升与安规试验标准概念更优"
        }
      ]
    },
    {
      "name": "C 语言与自动化脚本基础",
      "category": "软件与脚本",
      "companyCount": 4,
      "companyPct": 67,
      "roleCount": 1,
      "roleIds": [
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 4,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】会用 Python/C 处理测试数据或辅助自动化测试脚本"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】测试开发实习生会 Python/C/VBA 做测试数据处理极加分"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】会 Python/Excel 脚本批量处理测试曲线数据大加分"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】测试设备升级或自动数据采集方向会 C/Python/LabVIEW 基础加分"
        }
      ]
    },
    {
      "name": "机械识图与气动液压基础",
      "category": "产线设备运维",
      "companyCount": 3,
      "companyPct": 50,
      "roleCount": 1,
      "roleIds": [
        "fab-equip"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 3,
      "totalRoleMentions": 3,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】能看懂基础机械图或了解气动元件更优"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】能看懂简单机械装配图与气动回路"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "fab-equip",
          "level": "plus",
          "detail": "【实习加分】熟悉气缸、电磁阀等自动化装配常用气动元件"
        }
      ]
    },
    {
      "name": "SolidWorks 机械识图基础",
      "category": "电气制图与选型",
      "companyCount": 3,
      "companyPct": 50,
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
          "detail": "【实习加分】了解基础机械图纸便于配合电柜安装定位"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】了解 Creo / SolidWorks 三维看图方便与结构配合"
        },
        {
          "companyId": "hongfa",
          "companyName": "宏发股份",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】会看 SolidWorks 装配图方便对接非标自动化机械团队"
        }
      ]
    },
    {
      "name": "电力电子拓扑（整流/斩波/逆变）",
      "category": "基础理论",
      "companyCount": 2,
      "companyPct": 33,
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
          "detail": "【实习底线】懂 Buck/Boost/单相三相整流与逆变基本工作模态及 PWM 原理"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "equip-elec",
          "level": "must",
          "detail": "【实习底线】理解 AC/DC、DC/DC、DC/AC 基本变换电路"
        },
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "must",
          "detail": "【实习底线】能用通俗语言讲清 UPS、逆变器、储能变流器是怎么工作的"
        },
        {
          "companyId": "hithium",
          "companyName": "海辰储能",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】理解储能变流器 PCS 与直流变换基础原理"
        }
      ]
    },
    {
      "name": "中低压开关柜一次/二次回路与继保",
      "category": "基础理论",
      "companyCount": 2,
      "companyPct": 33,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "tech-support",
        "ee-test"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 4,
      "totalRoleMentions": 4,
      "evidences": [
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "equip-elec",
          "level": "plus",
          "detail": "【实习加分】了解一次/二次回路、断路器、互感器与 IEC/GB 基础概念"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】理解开关柜一次/二次方案概念上手报价更快"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "ee-test",
          "level": "plus",
          "detail": "【实习加分】了解中低压配电与开关柜出厂测试基本流程"
        },
        {
          "companyId": "schneider-xiamen",
          "companyName": "施耐德电气（厦门）",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】了解施耐德配电产品线或开关柜架构更易获青睐"
        }
      ]
    },
    {
      "name": "Modbus / CAN / RS485 通信",
      "category": "通信协议",
      "companyCount": 2,
      "companyPct": 33,
      "roleCount": 1,
      "roleIds": [
        "tech-support"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 2,
      "totalRoleMentions": 2,
      "evidences": [
        {
          "companyId": "kehua-data",
          "companyName": "科华数据",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】懂 RS485/Modbus/CAN 基本概念，上手后台监控调试更快"
        },
        {
          "companyId": "abb-xiamen",
          "companyName": "ABB（厦门工业中心）",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】数字化运营方向了解 Modbus/Profinet/IEC 61850 概念大加分"
        }
      ]
    },
    {
      "name": "储能系统架构（BMS / PCS / EMS）",
      "category": "基础理论",
      "companyCount": 1,
      "companyPct": 17,
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
          "detail": "【实习底线】理解储能系统里电池簇、BMS、PCS、EMS 各自干什么"
        }
      ]
    },
    {
      "name": "变频器与电机调试",
      "category": "PLC与自动化",
      "companyCount": 1,
      "companyPct": 17,
      "roleCount": 3,
      "roleIds": [
        "equip-elec",
        "plc-debug",
        "tech-support"
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
          "detail": "【实习加分】懂三相异步电机启停与变频调速基本原理（与电机学衔接）"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "detail": "【实习加分】了解变频器启停控制与模拟量/通信调速基础"
        },
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "tech-support",
          "level": "plus",
          "detail": "【实习加分】了解电机过载与变频器常见故障码含义"
        }
      ]
    },
    {
      "name": "电池充放电与环境可靠性测试设备",
      "category": "仪器测试",
      "companyCount": 1,
      "companyPct": 17,
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
          "detail": "【实习加分】了解充放电测试机、温湿度箱或锂电测试流程优先（入职带教）"
        }
      ]
    },
    {
      "name": "功率分析仪与电子负载",
      "category": "仪器测试",
      "companyCount": 1,
      "companyPct": 17,
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
          "detail": "【实习加分】了解可编程交直流电源、电子负载与功率分析仪原理（入职可带教）"
        }
      ]
    },
    {
      "name": "竞赛或电源实测项目经历",
      "category": "工程与软实力",
      "companyCount": 1,
      "companyPct": 17,
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
          "detail": "【实习加分】有电赛、Multisim 仿真复现或实验室电源调试闭环经历极加分"
        }
      ]
    },
    {
      "name": "Altium Designer 硬件/PCB 基础",
      "category": "电气制图与选型",
      "companyCount": 1,
      "companyPct": 17,
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
          "detail": "【实习加分】若偏功率/控制单板方向，会 Altium Designer 或 Multisim/PSIM 仿真大加分"
        }
      ]
    },
    {
      "name": "HMI 触摸屏与组态软件",
      "category": "PLC与自动化",
      "companyCount": 1,
      "companyPct": 17,
      "roleCount": 1,
      "roleIds": [
        "plc-debug"
      ],
      "mustRoleCount": 0,
      "plusRoleCount": 1,
      "totalRoleMentions": 1,
      "evidences": [
        {
          "companyId": "nflg",
          "companyName": "南方路机",
          "roleId": "plc-debug",
          "level": "plus",
          "detail": "【实习加分】了解触摸屏或组态画面与 PLC 变量绑定的基本方式"
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
      "companyCount": 5,
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
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 5,
          "pct": 100,
          "mustCount": 5,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】能读懂中低压控制与电源原理图"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】面试高频必查：能读懂常见电机启停、自锁互锁与控制柜原理图"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】能看懂基本强弱电控制与配电原理图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】能准确识读储能/工业电气原理图"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】能读懂自动化非标产线控制回路图纸"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 5,
          "pct": 100,
          "mustCount": 4,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】了解常见开关、电容、电感、接触器基本参数含义"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】认识断路器、接触器、热继电器、中间继电器、开关电源等基础件"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】了解常见低压断路器/继电器选型规范"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】了解高低压配电基础及常见开关、继电器、线缆概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】认识继电器、接触器、开关电源与常见工业传感器"
            }
          ]
        },
        {
          "name": "AutoCAD / EPLAN 电气制图",
          "category": "电气制图与选型",
          "count": 5,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】熟悉 AutoCAD 或 EPLAN 基础绘图的本科生更容易脱颖而出"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】至少会用 AutoCAD 画标准电气原理图，懂 EPLAN 极加分"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】熟悉 AutoCAD 基础绘图；提前了解 EPLAN 宏/端子排/BOM 概念极大加分"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】会用 AutoCAD / EPLAN 绘图，偏板级方向会 Altium Designer 更优"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】熟悉 AutoCAD 基础绘图（懂 EPLAN 更优）"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 4,
          "pct": 80,
          "mustCount": 4,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与模数电理论基础"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】扎实的电路与模数电理论基础"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、电力电子与自动控制原理"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】扎实的电路基础与基本电气控制知识"
            }
          ]
        },
        {
          "name": "SolidWorks 机械识图基础",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 60,
          "mustCount": 0,
          "plusCount": 3,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】了解基础机械图纸便于配合电柜安装定位"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】了解 Creo / SolidWorks 三维看图方便与结构配合"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】会看 SolidWorks 装配图方便对接非标自动化机械团队"
            }
          ]
        },
        {
          "name": "电力电子拓扑（整流/斩波/逆变）",
          "category": "基础理论",
          "count": 2,
          "pct": 40,
          "mustCount": 1,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】理解 AC/DC、DC/DC、DC/AC 基本变换电路"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】理解储能变流器 PCS 与直流变换基础原理"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 2,
          "pct": 40,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】协助整理操作规程与出厂电气说明书"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】协助整理电气规范与验证报告"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 2,
          "pct": 40,
          "mustCount": 0,
          "plusCount": 2,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】了解西门子 S7-1200/1500 或三菱基本梯形图逻辑即可明显加分"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】懂三菱/西门子/欧姆龙 PLC 基础控制逻辑极受自动化部门欢迎"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 1,
          "pct": 20,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】具备良好英语读写能力，能看懂英文产品手册与处理英文邮件"
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
              "detail": "【实习加分】懂三相异步电机启停与变频调速基本原理（与电机学衔接）"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】了解一次/二次回路、断路器、互感器与 IEC/GB 基础概念"
            }
          ]
        },
        {
          "name": "Altium Designer 硬件/PCB 基础",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】若偏功率/控制单板方向，会 Altium Designer 或 Multisim/PSIM 仿真大加分"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 4,
        "实习期厂内为主（转正偶尔出差）": 1
      },
      "shiftCounts": {
        "无倒班": 4,
        "无倒班（节奏较快）": 1
      }
    },
    {
      "roleId": "plc-debug",
      "roleName": "PLC 控制与自动化调试实习生",
      "shortName": "PLC 调试实习",
      "category": "控制与调试",
      "companyCount": 1,
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
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】能按原理图对照查控制柜端子和 I/O 信号"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】具备按信号链排查传感器/继电器/输出异常的逻辑思维"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】掌握至少一种主流 PLC（西门子/三菱）基础编程思维与 I/O 概念"
            }
          ]
        },
        {
          "name": "变频器与电机调试",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】了解变频器启停控制与模拟量/通信调速基础"
            }
          ]
        },
        {
          "name": "低压配电与元器件选型",
          "category": "电气制图与选型",
          "count": 1,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】认识现场常见光电开关、接近开关与电磁阀接线"
            }
          ]
        },
        {
          "name": "HMI 触摸屏与组态软件",
          "category": "PLC与自动化",
          "count": 1,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "plus",
              "detail": "【实习加分】了解触摸屏或组态画面与 PLC 变量绑定的基本方式"
            }
          ]
        }
      ],
      "travelCounts": {
        "实习期厂内联调为主，转正后中～高频出差": 1
      },
      "shiftCounts": {
        "无倒班": 1
      }
    },
    {
      "roleId": "fab-equip",
      "roleName": "产线设备 / 维护工程实习生",
      "shortName": "设备工程实习",
      "category": "产线运维与改善",
      "companyCount": 3,
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
        }
      ],
      "skills": [
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 3,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】能看懂基础产线电气原理图"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】能看懂自动化产线基础电气原理图"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】能看懂车间自动化机台基础电气图纸"
            }
          ]
        },
        {
          "name": "现场故障诊断与排故思维",
          "category": "工程与软实力",
          "count": 3,
          "pct": 100,
          "mustCount": 3,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】动手能力强，有条理排查产线设备小故障的潜质"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】动手能力强、抗压、能适应制造工厂现场节奏"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】动手意愿强、愿意深入制造一线查问题"
            }
          ]
        },
        {
          "name": "设备点检保养（PM）与 OEE 改善",
          "category": "产线设备运维",
          "count": 3,
          "pct": 100,
          "mustCount": 2,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】理解设备点检、预防性保养与精益效率改善基本概念"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】了解工厂 PM 保养、FAT/SAT 验收与 OEE 概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】理解 TPM 全员生产维护、预防性保养与提效思路"
            }
          ]
        },
        {
          "name": "机械识图与气动液压基础",
          "category": "产线设备运维",
          "count": 3,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 3,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】能看懂基础机械图或了解气动元件更优"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】能看懂简单机械装配图与气动回路"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】熟悉气缸、电磁阀等自动化装配常用气动元件"
            }
          ]
        },
        {
          "name": "主流 PLC 编程（西门子/三菱等）",
          "category": "PLC与自动化",
          "count": 3,
          "pct": 100,
          "mustCount": 0,
          "plusCount": 3,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】懂西门子/ABB AC500 等 PLC 基础逻辑大加分"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】熟悉西门子/三菱 PLC 编程或工业机器人基础者极优先"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】会在线看 PLC I/O 状态辅助查产线卡料/停机极加分"
            }
          ]
        },
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】具备扎实电工学、电路或自动控制基础"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
          "category": "工程与软实力",
          "count": 1,
          "pct": 33,
          "mustCount": 1,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】协助更新标准作业指导书（SOP）"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 3
      },
      "shiftCounts": {
        "实习生一般跟随白班导师（具体排班以部门为准，待核实）": 1,
        "产线 24h 运转，转正后可能两班倒/白夜班（实习期排班面试时务必确认）": 1,
        "以白班一线跟岗为主（具体看车间排班，待核实）": 1
      }
    },
    {
      "roleId": "ee-test",
      "roleName": "电气 / 硬件产品测试实习生",
      "shortName": "产品测试实习",
      "category": "研发验证与质量",
      "companyCount": 5,
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
        }
      ],
      "skills": [
        {
          "name": "电路与模数电基础",
          "category": "基础理论",
          "count": 5,
          "pct": 100,
          "mustCount": 5,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、二极管/MOS 管开关特性与基本运放电路"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与测控基础"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】扎实的电工学与基础电路理论"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】扎实掌握电路分析、电磁铁/线圈吸合（磁路）与触点通断电基础"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "detail": "【实习底线】具备扎实电路与电气设备基础知识"
            }
          ]
        },
        {
          "name": "技术文档与测试报告编写",
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
              "detail": "【实习底线】能用 Excel/Word 清晰整理测试数据曲线与异常现象记录"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】数据严谨、能规范整理测试报告与质量统计表"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】数据敏感度高、细致严谨，能规范整理实验报告"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】细致踏实，能规范整理大批量寿命/可靠性试验数据表"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "detail": "【实习底线】极度注重细节、规范填写英文/中文测试与检验报告"
            }
          ]
        },
        {
          "name": "示波器与万用表实操",
          "category": "仪器测试",
          "count": 5,
          "pct": 100,
          "mustCount": 5,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】会用示波器测电源纹波/触发抓波形、用万用表测通断压降"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】熟悉万用表、示波器等实验室常规仪器基本操作"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】熟悉万用表、示波器等实验室基础仪器操作"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "must",
              "detail": "【实习底线】会用示波器抓继电器吸合/释放波形与弹跳时间，会用万用表测接触电阻"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "detail": "【实习底线】掌握万用表等常规电气测试仪表使用，动手能力强"
            }
          ]
        },
        {
          "name": "安规与 EMC 测试基础",
          "category": "仪器测试",
          "count": 4,
          "pct": 80,
          "mustCount": 0,
          "plusCount": 4,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】了解安规爬电距离、浪涌/传导辐射 EMC 基本概念更受青睐"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】了解电气绝缘、耐压等基本安规测试概念"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】了解 CNAS/TUV 实验室测试规范与电气安规概念"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】了解绝缘耐压、温升与安规试验标准概念更优"
            }
          ]
        },
        {
          "name": "C 语言与自动化脚本基础",
          "category": "软件与脚本",
          "count": 4,
          "pct": 80,
          "mustCount": 0,
          "plusCount": 4,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】会用 Python/C 处理测试数据或辅助自动化测试脚本"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
              "detail": "【实习加分】测试开发实习生会 Python/C/VBA 做测试数据处理极加分"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】会 Python/Excel 脚本批量处理测试曲线数据大加分"
            },
            {
              "companyId": "hongfa",
              "companyName": "宏发股份",
              "level": "plus",
              "detail": "【实习加分】测试设备升级或自动数据采集方向会 C/Python/LabVIEW 基础加分"
            }
          ]
        },
        {
          "name": "电气原理图识读",
          "category": "电气制图与选型",
          "count": 2,
          "pct": 40,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "must",
              "detail": "【实习底线】能看懂基本控制板/功率板原理图，定位测试点"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "detail": "【实习底线】能看懂开关柜与配电模块基础电气图纸"
            }
          ]
        },
        {
          "name": "英语读写与技术交流",
          "category": "工程与软实力",
          "count": 2,
          "pct": 40,
          "mustCount": 2,
          "plusCount": 0,
          "companyEntries": [
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】能读懂英文测试规范与系统界面"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
              "detail": "【实习底线】能看懂英文 SOP、图纸标注与测试系统界面（HR 面可能简短切英文）"
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
              "detail": "【实习底线】懂 Buck/Boost/单相三相整流与逆变基本工作模态及 PWM 原理"
            }
          ]
        },
        {
          "name": "电池充放电与环境可靠性测试设备",
          "category": "仪器测试",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】了解充放电测试机、温湿度箱或锂电测试流程优先（入职带教）"
            }
          ]
        },
        {
          "name": "功率分析仪与电子负载",
          "category": "仪器测试",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】了解可编程交直流电源、电子负载与功率分析仪原理（入职可带教）"
            }
          ]
        },
        {
          "name": "竞赛或电源实测项目经历",
          "category": "工程与软实力",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "kehua-data",
              "companyName": "科华数据",
              "level": "plus",
              "detail": "【实习加分】有电赛、Multisim 仿真复现或实验室电源调试闭环经历极加分"
            }
          ]
        },
        {
          "name": "设备点检保养（PM）与 OEE 改善",
          "category": "产线设备运维",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
              "detail": "【实习加分】了解 8D、RCA 根因分析、FMEA 或 Lean 精益改善概念面试极加分"
            }
          ]
        },
        {
          "name": "中低压开关柜一次/二次回路与继保",
          "category": "基础理论",
          "count": 1,
          "pct": 20,
          "mustCount": 0,
          "plusCount": 1,
          "companyEntries": [
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
              "detail": "【实习加分】了解中低压配电与开关柜出厂测试基本流程"
            }
          ]
        }
      ],
      "travelCounts": {
        "极少出差": 5
      },
      "shiftCounts": {
        "无倒班": 4,
        "无固定倒班（视测试排期可能加班）": 1
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
              "detail": "【实习底线】表达清晰、有服务意识、跨部门协作积极"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】沟通踏实、抗压、能接受未来转正后高频全国/海外出差"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】逻辑清晰、细心、具备良好跨部门协作与服务意识"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】表达条理清楚、抗压、有方案呈现能力"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
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
              "detail": "【实习底线】能看懂整机强弱电基本接线与配电图"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】能看懂基本强弱电控制图纸"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "must",
              "detail": "【实习底线】能看懂储能集装箱基本电气一次/二次框图"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
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
              "detail": "【实习加分】海外技术支持实习方向看重英语读写与口语"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "must",
              "detail": "【实习底线】外企核心门槛：能顺畅阅读英文技术文档并撰写英文邮件"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
              "detail": "【实习加分】海外储能支持方向看重 CET-6 与英语听说读写"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
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
              "detail": "【实习底线】具备分步骤排查思维（电源输入→保护报警→负载侧隔离）"
            },
            {
              "companyId": "nflg",
              "companyName": "南方路机",
              "level": "must",
              "detail": "【实习底线】动手能力强，敢查线、会用万用表测通断电压"
            },
            {
              "companyId": "hithium",
              "companyName": "海辰储能",
              "level": "plus",
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
              "detail": "【实习底线】具备基础电气配电与开关元件认知"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "must",
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
              "detail": "【实习加分】理解开关柜一次/二次方案概念上手报价更快"
            },
            {
              "companyId": "schneider-xiamen",
              "companyName": "施耐德电气（厦门）",
              "level": "plus",
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
              "detail": "【实习加分】懂 RS485/Modbus/CAN 基本概念，上手后台监控调试更快"
            },
            {
              "companyId": "abb-xiamen",
              "companyName": "ABB（厦门工业中心）",
              "level": "plus",
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
