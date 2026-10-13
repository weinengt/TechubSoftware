// 简体中文 text for the whole site. Same keys as en.ts; see en.ts for how placeholders and *highlights* work.
// In the big page headings, \u200b marks where a line may break and \u00a0 keeps two words together
// (Chinese headings only break at spaces, punctuation and these marks; see app/globals.css).
import type { Dict } from "./en";

const zh: Dict = {
  ui: {
    skip: "跳至主要内容",
    home: "首页",
    logoAlt: "Techub Software 标志",
    logoHome: "Techub Software 首页",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    freeDemo: "免费示范",
    getFreeDemo: "获取免费示范",
    bookFreeDemo: "预约免费示范",
    askDemo: "申请示范",
    whatsappMessage: "你好 Techub Software，我对你们的系统有兴趣，可以安排免费示范吗？",
    emailSubject: "Techub 系统咨询",
    priceLine: "RM {price}/月起 · 前 {months} 个月免费",
    enlarge: "放大图片",
  },

  nav: {
    useCases: "应用场景",
    technology: "技术",
    services: "服务",
    pricing: "价格",
    contact: "联系我们",
  },

  menu: {
    useCases: "应用场景",
    otherTitle: "其他行业？",
    otherText: "我们也可以为您定制系统。",
  },

  systems: {
    clinic: {
      label: "诊所",
      name: "诊所管理系统",
      blurb: "病人记录、用药记录追踪、叫号与打印。",
      points: [
        "病人记录追踪",
        "用药记录追踪系统",
        "电视屏幕叫号",
        "连接X光机与打印机",
        "100 毫秒内生成详细报表",
      ],
      cta: "查看诊所系统",
    },
    salon: {
      label: "发廊",
      name: "发廊预约系统",
      blurb: "发型师预约、员工个人账户、薪资与 POS。",
      points: [
        "自动 WhatsApp 通知",
        "每位发型师都有个人账户",
        "库存追踪与薪资计算",
        "支持 iPad、手机与电脑",
        "100 毫秒内生成详细报表",
      ],
      cta: "查看发廊系统",
    },
    beauty: {
      label: "美容中心",
      name: "美容中心预约系统",
      blurb: "套餐、面部图表、员工薪资与 POS。",
      points: [
        "套餐与疗程次数追踪",
        "面部图表、照片与同意书",
        "员工个人账户与薪资计算",
        "自动 WhatsApp 提醒",
        "100 毫秒内生成详细报表",
      ],
      cta: "查看美容中心系统",
    },
    spa: {
      label: "SPA 与按摩",
      name: "SPA 预约系统",
      blurb: "理疗师、房间、套餐与薪资。",
      points: [
        "理疗师与房间安排",
        "自动 WhatsApp 通知",
        "员工个人账户、库存与薪资",
        "支持 iPad、手机与电脑",
        "100 毫秒内生成详细报表",
      ],
      cta: "查看 SPA 系统",
    },
  },

  footer: {
    blurb:
      "{name} 是一家马来西亚软件公司，为诊所、发廊、美容中心和 SPA 打造智能又实惠的系统，也开发 ERP、AI 物体识别和车牌识别等定制系统。保证 {uptime} 在线率，月费 RM {price} 起。",
    useCases: "应用场景",
    custom: "定制系统",
    company: "公司",
    about: "关于我们",
    services: "服务",
    technology: "技术",
    pricing: "价格",
    faq: "常见问题",
    contact: "联系我们",
    rights: "版权所有。",
    tagline: "马来西亚智能又实惠的商业系统。",
  },

  bubble: {
    hello: "您好！👋",
    text: "想要免费示范吗？前 {months} 个月免费。",
    chat: "和我们聊聊",
    close: "关闭消息",
    label: "通过 WhatsApp {phone} 与 Techub Software 聊天",
  },

  notFound: {
    title: "找不到页面",
    text: "您要找的页面不存在。",
    back: "返回首页",
  },

  /* ---------- Home page ---------- */
  home: {
    meta: {
      title: "马来西亚预约系统与诊所管理系统 | Techub Software",
      description:
        "结合 AI 的马来西亚预约系统：为诊所、发廊、美容中心和 SPA 提供高级预约、WhatsApp 通知和库存管理，报表 100 毫秒内生成。{uptime} 在线率，月费 RM {price} 起，前 {months} 个月免费。",
      keywords: [
        "马来西亚预约系统",
        "预约系统",
        "预约管理系统",
        "诊所管理系统",
        "发廊预约系统",
        "美容院系统",
        "SPA预约系统",
        "WhatsApp预约提醒",
        "AI库存管理",
        "电子发票 LHDN",
        "马来西亚软件公司",
        "ERP系统",
        "appointment system Malaysia",
        "Techub Software",
      ],
    },
    hero: {
      badge: "马来西亚最多商家选择的预约系统",
      title: "*结合 AI*\u00a0的\u200b高级预约系统",
      intro:
        "实时更新、WhatsApp 通知和库存管理，全部建立在企业级数据库上。{uptime} 在线率，速度有保证。",
      secondary: "浏览应用场景",
      note: "前 {months} 个月免费，包括安装和员工培训。",
      statUptime: "在线率",
      statReports: "报表生成",
      statReportsValue: "<100 ms",
      statFrom: "起价",
      perMonth: "/月",
      deviceBadge: "云端 · iPad、手机与电脑",
    },
    highlights: {
      eyebrow: "为什么选择 Techub",
      title: "快速、智能、*全天候在线*",
      items: {
        booking: { title: "高级预约", text: "员工、房间、服务和临时上门的顾客，全在一个日历里。" },
        ai: { title: "内置 AI", text: "AI 读取送货单，预测库存需求。" },
        uptime: { title: "{uptime} 在线率", text: "保证您的系统稳定在线。" },
        database: { title: "企业级数据库", text: "索引优化的 NoSQL 数据库，运行于企业级服务器。" },
        speed: { title: "速度保证", text: "详细报表 100 毫秒内生成。" },
        realtime: { title: "实时更新", text: "所有设备即时同步。" },
        whatsapp: { title: "WhatsApp 通知", text: "确认与提醒，自动帮您发送。" },
        stock: { title: "库存管理", text: "每件货品的进出，都有追踪。" },
      },
    },
    softwareName: "Techub 预约管理系统",
    softwareCategory: "预约排程与业务管理",
    useCasesListName: "Techub Software 应用场景",
    servicesListName: "Techub Software 服务",
  },

  about: {
    eyebrow: "关于 Techub",
    title: "马来西亚本地软件，*简单又实惠*",
    intro:
      "我们开发的系统，帮助商家接受预约、服务顾客和管理库存，然后由我们帮您把一切设置好。",
    values: {
      cost: { title: "低成本", text: "月费 RM {price} 起。定制服务 RM {custom} 起，视您的需求而定。" },
      online: { title: "全天候在线", text: "保证 {uptime} 在线率，并有多区域备份。" },
      done: { title: "我们帮您搞定", text: "我们负责安装、连接硬件，并培训您的员工。" },
      custom: { title: "按需定制", text: "我们可定制表格、工作流程、报表和打印格式。" },
    },
  },

  uptime: {
    label: "在线率保证",
    text: "平均每月停机时间少于 22 分钟。",
    chips: ["马来西亚服务器", "持续监控", "加密备份"],
  },

  services: {
    eyebrow: "我们的服务",
    title: "我们能为您做什么",
    intro: "现成系统或量身定制，我们帮您全部设置好，并培训您的团队。",
    items: {
      systems: { title: "现成系统", text: "适用于诊所、发廊、美容中心和 SPA 的预约系统。" },
      custom: {
        title: "定制系统开发",
        text: "ERP、AI 物体识别、车牌识别等。定制服务 RM {custom} 起。",
      },
      hardware: {
        title: "硬件安装",
        text: "标签打印机、叫号系统、X光机等，都由我们安装和连接好。",
      },
      support: { title: "培训与支援", text: "免费安装和员工培训，之后通过 WhatsApp 提供本地支援。" },
    },
    howTitle: "合作流程",
    howText: "定制服务 RM {custom} 起，视您的需求而定。",
    howCta: "聊聊您的需求",
    howMessage: "你好 Techub，我想咨询定制系统。",
    steps: ["咨询", "定制", "安装与培训", "正式上线"],
    chat: {
      name: "Techub 客服",
      status: "在线",
      question: "你好，可以帮我们安装新的标签打印机吗？",
      answer: "没问题！我们会帮您安装好，并教您的员工如何使用。👍",
      thanks: "谢谢！🙏",
    },
  },

  useCases: {
    eyebrow: "应用场景",
    title: "专为您的行业而设",
    intro: "点选一个行业，看看它在 iPad 和手机上的系统画面。",
    tabsLabel: "应用场景",
  },

  custom: {
    eyebrow: "定制系统",
    title: "需要其他系统？*我们帮您开发。*",
    intro: "除了预约系统，我们也为各行各业开发定制系统。定制服务 RM {custom} 起，视您的需求而定。",
    items: {
      erp: { title: "ERP 系统", text: "销售、采购、库存、会计和人力资源，一个系统全包。" },
      detection: { title: "AI 物体识别", text: "摄像头自动识别人员、车辆、安全装备和物品。" },
      plate: { title: "车牌识别", text: "在闸门读取车牌，并记录每一次进出。" },
    },
    ctaTitle: "有兴趣？告诉我们您的需求。",
    ctaText: "ERP、AI、扫描识别系统或全新的点子，我们会建议最适合的方案，并为您报价。",
    cta: "WhatsApp 联系",
    message: "你好 Techub，我对定制系统有兴趣（ERP、AI 物体识别、车牌识别或其他系统）。",
    email: "电邮联系",
    emailSubject: "定制系统咨询",
  },

  tech: {
    eyebrow: "技术",
    title: "企业级技术，*简单易用*",
    intro: "马来西亚企业级服务器、快速的 NoSQL 数据库、AI 和 WhatsApp，在每台设备上协同运作。",
    explore: "了解我们的技术",
    items: {
      servers: {
        title: "马来西亚企业级服务器",
        text: "托管在 IPServerOne 和 Amazon Web Services 等服务器上。您的数据存放在哪里，我们公开透明。",
      },
      database: { title: "快速 NoSQL 数据库", text: "数据经过索引优化，详细报表 100 毫秒内即可加载。" },
      security: { title: "加密与备份", text: "所有储存的数据均经过加密，并有跨区域的多层备份。" },
      ai: { title: "内置 AI", text: "AI 读取送货单、更新库存，并建议需要补货的项目。" },
      realtime: { title: "实时更新", text: "每台 iPad、手机和电脑都能即时看到变动。" },
      whatsapp: { title: "WhatsApp 通知", text: "预约确认和提醒自动发送。" },
      hardware: { title: "多种硬件连接", text: "标签打印机、叫号系统、X光机等。" },
      einvoice: { title: "LHDN 电子发票", text: "通过 MyInvois 向 LHDN 提交电子发票。" },
    },
    hub: {
      center: "Techub Cloud",
      uptime: "{uptime} 在线率",
      nodes: {
        devices: "iPad、手机与电脑",
        whatsapp: "WhatsApp",
        printers: "标签打印机",
        caller: "叫号系统",
        xray: "X光机",
        ai: "AI 扫描",
        einvoice: "LHDN 电子发票",
        reports: "报表",
      },
    },
  },

  /* ---------- Technology page ---------- */
  techPage: {
    meta: {
      title: "马来西亚服务器、NoSQL、AI、WhatsApp 与电子发票 | 技术",
      socialTitle: "技术 | Techub Software",
      description:
        "{name} 的技术：马来西亚企业级服务器（IPServerOne、Amazon Web Services）、索引优化的 NoSQL 数据库（报表 100 毫秒内生成）、加密多区域备份、AI、WhatsApp、LHDN 电子发票，以及标签打印机和X光机等硬件。{uptime} 在线率。",
      keywords: [
        "马来西亚云端系统",
        "马来西亚数据中心",
        "云端商业系统",
        "NoSQL数据库",
        "加密备份",
        "AI库存管理",
        "送货单扫描",
        "WhatsApp预约提醒",
        "电子发票 LHDN",
        "MyInvois电子发票",
        "叫号系统",
        "标签打印机连接",
        "LHDN e-Invoice MyInvois",
        "cloud business system Malaysia",
      ],
    },
    crumb: "技术",
    eyebrow: "技术",
    title: "企业级技术，*操作简单*",
    intro: "马来西亚企业级服务器、快速的 NoSQL 数据库、AI 和 WhatsApp，任何设备都能用。保证 {uptime} 在线率。",
    demoMessage: "你好 Techub，我想预约免费示范，也想多了解你们的技术。",
    seeUseCases: "查看应用场景",
    spotlights: {
      servers: {
        eyebrow: "马来西亚企业级服务器",
        title: "您的数据加密保存在马来西亚",
        points: [
          "IPServerOne、Amazon Web Services 等企业级服务器",
          "完全透明：告诉您数据存放在哪里",
          "跨多个区域的多层备份",
          "所有储存的数据均已加密",
        ],
      },
      speed: {
        eyebrow: "速度保证",
        title: "详细报表 100 毫秒内生成",
        points: [
          "专为速度打造的索引优化 NoSQL 数据库",
          "即使累积多年数据，报表加载也不卡顿",
          "服务器设在马来西亚，响应更快",
          "所有报表都可随时导出",
        ],
        badge: "100 毫秒内",
      },
      realtime: {
        eyebrow: "实时更新",
        title: "电脑、iPad、手机，同一个系统",
        points: [
          "更改即时显示在所有设备上",
          "支持 iPhone、Android、Windows 和 Mac",
          "支持多间分店",
          "无需购买或维护服务器",
        ],
      },
      ai: {
        eyebrow: "内置 AI",
        title: "AI 帮您读取送货单",
        points: [
          "拍下供应商的送货单",
          "AI 读取品项、数量、批号与有效期",
          "库存自动更新",
          "智能补货建议",
        ],
        cta: "咨询 AI 库存管理",
        ctaMessage: "你好 Techub，我想多了解 AI 库存管理。",
      },
      whatsapp: {
        eyebrow: "WhatsApp 通知",
        title: "自动通知顾客",
        points: ["预约确认", "每次到访前提醒", "一键确认或改期", "减少爽约"],
        badges: ["提醒已发送", "已确认"],
      },
      hardware: {
        eyebrow: "多种硬件连接",
        title: "连接您现有的硬件",
        points: [
          "标签打印机与收据打印机",
          "电视显示加语音广播的叫号系统",
          "X光机",
          "条码扫描器与刷卡机",
        ],
      },
      einvoice: {
        eyebrow: "LHDN 电子发票",
        title: "电子发票，符合 LHDN 要求",
        points: [
          "从账单和 POS 开出电子发票",
          "通过 MyInvois 提交至 LHDN",
          "附 QR 码的已验证电子发票",
          "每张发票都有记录",
        ],
      },
      security: {
        eyebrow: "安全与管控",
        title: "每位员工都有合适的权限",
        points: [
          "按职位设定员工权限",
          "折扣与退款需经理批准",
          "完整操作记录",
          "数据与连接全程加密",
        ],
      },
    },
    infra: {
      business: "您的业务",
      devices: "iPad · 手机 · 电脑",
      encrypted: "加密连接",
      servers: "马来西亚企业级服务器",
      online: "在线",
      backups: "多层备份",
      regions: "跨多个区域",
      encryptedData: "所有储存数据均已加密",
    },
    uptimeEyebrow: "稳定可靠",
    uptimeTitle: "{uptime} 在线率，*有保证*",
    uptimeIntro:
      "您的预约、叫号屏幕和收款都保持在线，平均每月停机时间少于 22 分钟。",
    uptimePoints: [
      "马来西亚企业级服务器",
      "多层、多区域备份",
      "所有储存数据均已加密",
      "WhatsApp 本地支援",
    ],
    featuresEyebrow: "功能",
    featuresTitle: "一个系统，全部搞定",
    industries: "查看您行业的应用",
    contactTitle: "和我们聊聊您的系统",
    faqs: [
      {
        q: "Techub 的服务器在哪里？",
        a: "在马来西亚。我们使用 IPServerOne 和 Amazon Web Services 等企业级服务器，并公开告诉您数据存放在哪里。",
      },
      {
        q: "我需要购买服务器吗？",
        a: "不需要。Techub 在云端运行，您只需要网络连接，以及 iPad、手机或电脑等设备。",
      },
      {
        q: "我的数据如何受到保护？",
        a: "所有储存的数据都经过加密，并通过加密连接传输。备份分多层保存在多个区域；按职位设定的权限控制每位员工能看到的内容；操作记录会记下每一个动作。",
      },
      {
        q: "为什么 Techub 的报表这么快？",
        a: "Techub 使用索引优化的 NoSQL 数据库，即使是详细报表也能在 100 毫秒内生成，毫不卡顿。服务器设在马来西亚，让本地商家享有快速响应。",
      },
      {
        q: "{uptime} 在线率保证是什么意思？",
        a: "系统至少有 {uptime} 的时间正常运作，相当于平均每月停机时间少于 22 分钟。",
      },
      {
        q: "AI 送货单扫描如何运作？",
        a: "拍下或扫描供应商的送货单，AI 就会读取品项、数量、批号和有效期，并自动调整库存。每一笔库存变动都有记录，入库、出库、调货和调整都能追查。",
      },
      {
        q: "Techub 支持 LHDN 电子发票吗？",
        a: "支持。您可以从账单和 POS 开出电子发票，通过 MyInvois 提交至 LHDN，再附上已验证的 QR 码分享给顾客。",
      },
      {
        q: "Techub 可以连接哪些硬件？",
        a: "标签打印机、叫号系统、X光机、热敏收据打印机和 A4 打印机、条码扫描器、刷卡机、钱箱和排队显示屏。告诉我们您的型号，我们会在安装前确认。",
      },
      {
        q: "可以用哪些设备？",
        a: "Techub 支持跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，以及 Windows 或 Mac 电脑。电视也可以用来显示叫号画面。",
      },
    ],
  },

  /* ---------- Shared sections ---------- */
  features: {
    uptime: { title: "{uptime} 在线率保证", text: "马来西亚企业级服务器，多区域备份。" },
    booking: { title: "高级预约日历", text: "按员工、房间或服务预约，也可接待临时上门的顾客。" },
    whatsapp: { title: "自动 WhatsApp 通知", text: "确认、提醒和跟进。" },
    queue: { title: "叫号系统", text: "电视显示加语音广播，适用于房间和柜台。" },
    realtime: { title: "实时更新", text: "所有设备即时看到最新变动。" },
    reports: { title: "报表 100 毫秒内生成", text: "由索引优化的 NoSQL 数据库生成详细报表。" },
    ai: { title: "AI 库存管理", text: "AI 读取送货单、预测库存不足，并建议补货。" },
    inventory: { title: "库存追踪", text: "每一笔入库、出库、调货和调整都有记录。" },
    profiles: { title: "员工个人账户", text: "每位员工查看和管理自己的预约。" },
    payroll: { title: "薪资计算", text: "底薪、佣金和津贴，自动帮您算好。" },
    pos: { title: "POS、套餐与佣金", text: "结账、预付套餐和员工佣金，一处搞定。" },
    permissions: { title: "员工权限管理", text: "决定谁可以查看、编辑、给折扣、退款或导出。" },
    einvoice: { title: "LHDN 电子发票", text: "通过 MyInvois 向 LHDN 提交电子发票。" },
    hardware: { title: "多种硬件连接", text: "标签打印机、叫号机、X光机等。" },
    drawing: { title: "手绘与电子签名", text: "在平板上直接手绘图表，并签署同意书。" },
    devices: { title: "支持 iPad、手机与电脑", text: "跨平台：iPhone、Android、Windows 和 Mac。" },
  },

  hardware: {
    eyebrow: "多种硬件连接",
    title: "连接您的硬件",
    intro: "标签打印机、叫号系统、X光机等，全部由我们为您安装和设置。",
    items: {
      caller: "叫号系统与电视",
      label: "标签打印机",
      receipt: "收据与 A4 打印机",
      xray: "X光机",
      scanner: "条码 / QR 扫描器",
      card: "刷卡机与钱箱",
      tablet: "平板与触控笔",
      devices: "电脑、iPad 与手机",
    },
  },

  pricing: {
    eyebrow: "收费简单",
    title: "各行各业都负担得起",
    offer: "新客户优惠",
    plan: "Techub 标准方案",
    from: "低至",
    perMonth: "/ 月",
    free: "新用户前 {months} 个月完全免费，包括员工培训和安装。",
    claim: "领取 {months} 个月免费使用",
    claimMessage: "你好 Techub，我想领取前 {months} 个月免费的优惠。",
    includedTitle: "全部包含",
    included: [
      "适合您生意的预约系统",
      "WhatsApp 通知与叫号系统",
      "AI 库存管理与库存追踪",
      "100 毫秒内生成详细报表",
      "支持 LHDN 电子发票",
      "支持电脑、平板与手机",
      "员工个人账户与权限管理",
      "{uptime} 在线率与加密备份",
      "免费安装与员工培训",
      "WhatsApp 本地支援",
    ],
    customTitle: "定制服务",
    customFrom: "起价",
    customText: "视您的需求而定：新功能、报表、打印格式、系统整合，甚至全新的系统。",
    customCta: "索取报价",
    customMessage: "你好 Techub，我想索取定制系统的报价。",
    customEmail: "电邮联系",
    customEmailSubject: "定制系统报价",
    offerText: "月费 RM {price} 起。新用户前 {months} 个月免费，包括安装和员工培训。",
  },

  faq: {
    eyebrow: "常见问题",
    title: "有疑问？我们来解答",
    items: [
      {
        q: "Techub Software 是做什么的？",
        a: "Techub Software 是一家马来西亚软件公司，为商家打造智能又实惠的系统：包括为诊所、发廊、美容中心和 SPA 准备的现成预约系统，以及 ERP、AI 物体识别和车牌识别等定制系统。",
      },
      {
        q: "收费多少？",
        a: "月费 RM {price} 起，新客户前 {months} 个月免费，包括安装和员工培训。定制服务 RM {custom} 起，视您的需求而定。",
      },
      {
        q: "系统速度有多快？",
        a: "非常快。Techub 在马来西亚的企业级服务器上使用索引优化的 NoSQL 数据库，详细报表 100 毫秒内就能生成，所有设备也会实时更新。",
      },
      {
        q: "你们保证多少在线率？",
        a: "我们保证 {uptime} 的系统在线率，相当于平均每月停机时间少于 22 分钟，让您的前台、叫号屏幕和预约保持在线。",
      },
      {
        q: "我的数据存放在哪里？安全吗？",
        a: "您的数据存放在马来西亚的企业级服务器上，例如 IPServerOne 和 Amazon Web Services，我们会告诉您数据的具体位置。所有储存的数据都经过加密，并有跨多个区域的多层备份。",
      },
      {
        q: "Techub 使用什么技术？",
        a: "Techub 在马来西亚企业级服务器的云端上运行，采用索引优化的 NoSQL 数据库、能读取送货单并管理库存的 AI、自动 WhatsApp 通知和 LHDN 电子发票，并可连接标签打印机、叫号系统和X光机等硬件。",
      },
      {
        q: "支持 LHDN 电子发票吗？",
        a: "支持。Techub 支持 LHDN 电子发票，发票可通过 MyInvois 提交和验证。",
      },
      {
        q: "可以开发其他系统吗？例如 ERP？",
        a: "可以。我们开发 ERP、AI 物体识别和车牌识别等定制系统，也会为其他行业定制我们的系统。欢迎 WhatsApp {phone}，和我们聊聊您的想法。",
      },
      {
        q: "可以连接哪些硬件？",
        a: "标签打印机、叫号系统和排队显示屏、X光机、收据和 A4 打印机、条码扫描器、刷卡机、钱箱，以及用于签名的平板。告诉我们您的型号，我们会在安装前确认。",
      },
      {
        q: "有提供安装和培训吗？",
        a: "有。新客户享有安装、硬件设置和员工培训；系统上线后，我们也会通过 WhatsApp 为您提供支援。",
      },
      {
        q: "可以在 iPad、手机和电脑上使用吗？",
        a: "可以。Techub 支持跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，以及 Windows 或 Mac 电脑。",
      },
      {
        q: "如何联系 Techub Software？",
        a: "请 WhatsApp {phone} 或发电邮至 {email}。我们可以为您的生意安排免费的系统示范。",
      },
    ],
  },

  contact: {
    badge: "免费示范 · 前 {months} 个月免费",
    title: "看看 Techub 在您的生意中如何运作",
    text: "月费 RM {price} 起，包括安装和员工培训。",
    whatsappLabel: "WhatsApp · 回复最快",
    emailLabel: "电邮联系",
  },

  /* ---------- System pages ---------- */
  product: {
    useCases: "应用场景",
    allModules: "所有功能模块",
    inside: "{product}功能一览",
    otherSystems: "也适用于",
    reportsBadge: "100 毫秒内",
  },

  products: {
    clinic: {
      meta: {
        title: "马来西亚诊所管理系统 | 病人记录、叫号与用药记录追踪",
        socialTitle: "马来西亚诊所管理系统 | Techub Software",
        description:
          "专为马来西亚诊所打造的诊所管理系统：病人记录与用药记录追踪、叫号系统、EMR、AI 药品库存管理、连接X光机与打印机、LHDN 电子发票，报表 100 毫秒内生成。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "马来西亚诊所管理系统",
          "诊所管理系统",
          "诊所系统",
          "诊所软件",
          "电子病历系统",
          "病人记录系统",
          "用药记录系统",
          "诊所叫号系统",
          "诊所电子发票",
          "牙科诊所系统",
          "中医诊所系统",
          "clinic management system Malaysia",
          "EMR Malaysia",
        ],
      },
      category: "诊所管理、EMR 与病人排队",
      eyebrow: "诊所管理系统",
      heading: "更智能的\u200b*诊所系统*，看诊更快更安全",
      intro: "病人记录、用药记录追踪、叫号、收费和库存，iPad、手机和电脑都能用。",
      heroBadge: "{uptime} 在线率",
      whoFor: ["普通科诊所", "牙科诊所", "专科诊所", "医美诊所", "物理治疗", "中医", "连锁诊所"],
      highlights: {
        records: "病人记录追踪",
        medication: "用药记录追踪",
        queue: "叫号系统",
        hardware: "连接X光机与打印机",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内生成",
      },
      spotlights: {
        queue: {
          eyebrow: "叫号系统",
          title: "一键呼叫下一位病人",
          points: ["电视显示加语音广播", "诊室、配药处与付款柜台", "英文、马来文与中文", "候诊更短、更从容"],
        },
        records: {
          eyebrow: "病人记录与用药记录追踪",
          title: "每份病历、每种药物，全程追踪",
          points: [
            "病人记录附完整就诊历史",
            "每位病人的用药记录追踪",
            "开药前过敏提醒",
            "每次配药都记录批号与有效期",
          ],
        },
        drawing: {
          eyebrow: "手绘与电子签名",
          title: "在平板上手绘、标注和签名",
          points: ["人体图与牙齿图", "用手指或触控笔绘图", "病人同意书电子签名", "存入病人记录"],
        },
        hardware: {
          eyebrow: "多种硬件连接",
          title: "连接您诊所的硬件",
          points: ["药物标签打印机", "叫号系统", "X光机", "MC、收据与 A4 打印"],
        },
        stock: {
          eyebrow: "AI 库存管理",
          title: "扫描送货单，库存自动更新。",
          points: ["AI 读取品项、批号与有效期", "配药时自动扣除库存", "每笔变动都有记录", "低库存与过期提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "诊所报表 100 毫秒内生成",
          points: [
            "病人、看诊与收款",
            "按医生统计营业额",
            "常见诊断与 Panel 索偿",
            "即使有多年记录也不卡顿",
          ],
        },
        permissions: {
          eyebrow: "权限管理",
          title: "每位员工都有合适的权限",
          points: ["医生、护士、配药员与收银员角色", "折扣需经理批准", "按分店控制访问权限", "完整操作记录"],
        },
      },
      modules: {
        records: "病人登记与记录",
        queue: "叫号系统",
        whatsapp: "WhatsApp 预约提醒",
        emr: "看诊与 EMR 电子病历",
        medication: "用药记录追踪系统",
        drawing: "人体图与电子签名",
        ai: "AI 药品库存管理",
        inventory: "库存变动追踪",
        printing: "MC、标签与收据打印",
        xray: "X光机连接",
        billing: "收费与 Panel 索偿",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内生成",
        permissions: "权限管理",
        devices: "支持 iPad、手机与电脑",
        realtime: "实时更新",
      },
      faqs: [
        {
          q: "Techub 诊所系统适合小诊所吗？",
          a: "适合。从只有一位医生的诊所到多分店的连锁诊所都适用。月费 RM {price} 起，新诊所前 {months} 个月免费，包括安装和员工培训。",
        },
        {
          q: "可以追踪病人记录和用药吗？",
          a: "可以。每位病人都有完整记录，包括就诊、诊断、处方和配药历史。用药记录追踪系统会在您开药前显示剂量、服用频率、批号和过敏提醒。",
        },
        {
          q: "诊所系统支持叫号吗？",
          a: "支持。号码可显示在电视屏幕上并以语音广播，适用于诊室、配药柜台和付款柜台。",
        },
        {
          q: "可以连接X光机和打印机吗？",
          a: "可以。我们可连接X光机、药物标签打印机、热敏收据打印机、A4 打印机和叫号系统。告诉我们您的型号，我们会在安装前确认。",
        },
        {
          q: "支持 LHDN 电子发票吗？",
          a: "支持。诊所系统支持 LHDN 电子发票，收费时开出的发票可通过 MyInvois 提交和验证。",
        },
        {
          q: "医生可以在人体图或牙齿图上绘图吗？",
          a: "可以。医生可以在平板或触控屏上手绘和标注图表，病人也可以用电子方式签署同意书。",
        },
        {
          q: "报表有多快？",
          a: "详细报表在 100 毫秒内生成。Techub 在马来西亚的服务器上使用索引优化的 NoSQL 数据库，即使有多年记录也不会卡顿。",
        },
        {
          q: "系统稳定吗？",
          a: "我们保证 {uptime} 在线率。您的数据加密保存在马来西亚的企业级服务器上，并有跨区域的多层备份。",
        },
        {
          q: "如何预约示范？",
          a: "请 WhatsApp {phone} 或发电邮至 {email}，我们会免费为您实际示范诊所系统。",
        },
      ],
      demoMessage: "你好 Techub，我想了解诊所管理系统，可以安排免费示范吗？",
    },

    salon: {
      meta: {
        title: "马来西亚发廊预约系统 | 预约、员工个人账户、薪资与 POS",
        socialTitle: "马来西亚发廊预约系统 | Techub Software",
        description:
          "马来西亚发廊预约系统：发型师预约日历、自动 WhatsApp 通知、员工个人账户、薪资与佣金、POS、库存追踪，报表 100 毫秒内生成。支持 iPad、手机和电脑。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "发廊预约系统",
          "马来西亚发廊系统",
          "美发沙龙预约系统",
          "发廊管理系统",
          "发廊软件",
          "发廊POS系统",
          "发廊薪资系统",
          "理发店预约系统",
          "发型师佣金计算",
          "WhatsApp预约提醒",
          "salon appointment system",
          "salon booking system Malaysia",
        ],
      },
      category: "发廊预约、员工、薪资与 POS",
      eyebrow: "发廊预约系统",
      heading: "让每位*发型师*\u200b预约满档",
      intro: "预约、自动 WhatsApp 通知、员工个人账户、薪资与 POS，iPad、手机和电脑都能用。",
      heroBadge: "已通过 WhatsApp 确认",
      whoFor: ["发廊", "理发店", "男女发廊", "染发与护发工作室", "新娘发型与化妆", "连锁发廊"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有个人账户",
        inventory: "库存追踪",
        payroll: "薪资计算",
        reports: "报表 100 毫秒内生成",
      },
      spotlights: {
        staff: {
          eyebrow: "员工个人账户与薪资",
          title: "每位发型师都有个人账户",
          points: [
            "发型师可查看和管理自己的预约",
            "支持 iPhone、Android、iPad 和电脑",
            "薪资自动计算",
            "底薪、佣金与津贴",
          ],
        },
        customer: {
          eyebrow: "顾客记录",
          title: "保存每位顾客的染发配方",
          points: ["到店记录与指定发型师", "染发配方与备注", "前后对比照片", "会员积分与套餐"],
          badges: ["配方已保存", "会员积分"],
        },
        pos: {
          eyebrow: "POS 与佣金",
          title: "快速结账，佣金自动算好。",
          points: ["服务与零售合并一张单", "按发型师计算佣金", "现金、刷卡、DuitNow QR 与电子钱包", "套餐与会员折扣"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫描送货单，库存自动更新。",
          points: ["AI 读取每一项产品", "扣除染发与护理产品的用量", "每笔库存变动都有追踪", "智能补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "发廊报表 100 毫秒内生成",
          points: ["按发型师与服务统计业绩", "服务与零售销售对比", "佣金一目了然", "即使有多年数据也不卡顿"],
        },
        permissions: {
          eyebrow: "员工与权限管理",
          title: "每位员工都有合适的权限",
          points: ["老板、经理、发型师与前台角色", "折扣需经理批准", "隐藏顾客电话号码", "完整操作记录"],
        },
      },
      modules: {
        calendar: "发型师预约日历",
        walkin: "现场顾客排队",
        whatsapp: "自动 WhatsApp 通知",
        profiles: "员工个人账户与自己的预约",
        customers: "顾客记录与染发配方",
        packages: "套餐与会员积分",
        pos: "POS 与零售",
        commission: "发型师佣金",
        payroll: "薪资计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内生成",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机与电脑",
      },
      faqs: [
        {
          q: "发廊预约系统收费多少？",
          a: "月费 RM {price} 起。新发廊前 {months} 个月免费，包括安装和员工培训。",
        },
        {
          q: "会自动通知顾客吗？",
          a: "会。预约确认和提醒会自动通过 WhatsApp 发送，顾客一键就能确认或改期。",
        },
        {
          q: "每位发型师可以有个人账户吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登录，查看和管理自己的预约，而且只能看到职位权限允许的内容。",
        },
        {
          q: "会计算薪资和佣金吗？",
          a: "会。服务和产品销售的佣金根据 POS 记录计算，每月薪资会再加上每位员工的底薪和津贴。",
        },
        {
          q: "可以追踪发廊产品库存吗？",
          a: "可以。AI 读取供应商的送货单，按每项服务扣除产品用量，每笔库存变动都有追踪。",
        },
        {
          q: "可以接待没有预约的顾客吗？",
          a: "可以。没有预约的顾客会加入排队，与预约一起显示，前台一眼就能看到下一位有空的发型师。",
        },
        {
          q: "可以保存每位顾客的染发配方吗？",
          a: "可以。染发配方、备注和前后对比照片都会保存在顾客资料里，方便下次到店时使用。",
        },
        {
          q: "可以在 iPad、Android 和电脑上使用吗？",
          a: "可以。Techub 支持跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，以及 Windows 或 Mac 电脑。",
        },
        {
          q: "如何预约示范？",
          a: "请 WhatsApp {phone} 或发电邮至 {email}，我们会免费为您实际示范发廊系统。",
        },
      ],
      demoMessage: "你好 Techub，我想了解发廊预约系统，可以安排免费示范吗？",
    },

    beauty: {
      meta: {
        title: "马来西亚美容中心预约系统 | 预约、套餐与薪资",
        socialTitle: "马来西亚美容中心预约系统 | Techub Software",
        description:
          "马来西亚美容中心预约系统：预约日历、自动 WhatsApp 提醒、疗程套餐、附照片和电子签名的面部图表、员工个人账户与薪资、POS、库存追踪，报表 100 毫秒内生成。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "美容中心系统",
          "美容院系统",
          "马来西亚美容院系统",
          "美容院预约系统",
          "美容院软件",
          "医美中心系统",
          "美睫店预约系统",
          "美甲店预约系统",
          "美容套餐管理",
          "美容院薪资系统",
          "beauty centre system",
          "beauty salon booking system",
        ],
      },
      category: "美容中心预约、套餐与疗程记录",
      eyebrow: "美容中心预约系统",
      heading: "让顾客一再回头的\u200b*美容中心系统*",
      intro: "预约、套餐、面部图表、员工薪资和自动 WhatsApp 提醒，iPad、手机和电脑都能用。",
      heroBadge: "套餐次数追踪",
      whoFor: ["美容中心", "面部护理与护肤", "睫毛与眉毛工作室", "美甲店", "纤体中心", "医美中心", "新娘化妆"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有个人账户",
        inventory: "库存追踪",
        payroll: "薪资计算",
        reports: "报表 100 毫秒内生成",
      },
      spotlights: {
        packages: {
          eyebrow: "套餐与疗程",
          title: "每个套餐、每次疗程，全程追踪",
          points: ["每次到访都显示剩余次数", "预付储值与会员价", "肤况记录与过敏", "该再预约时发出提醒"],
          badges: ["剩余次数", "提醒已发送"],
        },
        staff: {
          eyebrow: "员工个人账户与薪资",
          title: "每位美容师都有个人账户",
          points: [
            "美容师可查看和管理自己的预约",
            "支持 iPhone、Android、iPad 和电脑",
            "薪资自动计算",
            "底薪、佣金与津贴",
          ],
        },
        faceChart: {
          eyebrow: "面部图表与同意书",
          title: "标记肤况、附上照片、完成签名",
          points: ["用触控笔在面部图表上标记", "前后对比照片", "每次疗程的护理记录", "顾客电子签名同意书"],
        },
        pos: {
          eyebrow: "POS 与佣金",
          title: "用套餐一键结账",
          points: ["扣除套餐次数", "疗程与产品合并一张单", "按美容师计算佣金", "现金、刷卡、DuitNow QR 与电子钱包"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫描送货单，库存自动更新。",
          points: ["AI 读取每一项产品", "按疗程扣除用量", "每笔库存变动都有追踪", "过期与补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "美容中心报表 100 毫秒内生成",
          points: ["套餐销售与已用次数", "按美容师统计业绩", "最受欢迎的疗程", "即使有多年数据也不卡顿"],
        },
      },
      modules: {
        calendar: "预约日历",
        whatsapp: "自动 WhatsApp 提醒",
        packages: "套餐与疗程",
        customers: "顾客资料与肤况记录",
        faceChart: "面部图表与电子签名",
        profiles: "员工个人账户与自己的预约",
        pos: "POS 与零售",
        commission: "员工佣金",
        payroll: "薪资计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内生成",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机与电脑",
      },
      faqs: [
        {
          q: "美容中心预约系统收费多少？",
          a: "月费 RM {price} 起。新美容中心前 {months} 个月免费，包括安装和员工培训。",
        },
        {
          q: "可以追踪疗程套餐和次数吗？",
          a: "可以。您可以出售套餐和预付储值，系统会扣除每次疗程，并在每次到访时显示余额。",
        },
        {
          q: "可以保存面部图表和前后对比照片吗？",
          a: "可以。美容师可以在面部图表上标记，附上照片和护理记录，顾客也可以在 iPad 上签署同意书。",
        },
        {
          q: "会自动发送 WhatsApp 提醒吗？",
          a: "会。预约确认和提醒会自动通过 WhatsApp 发送，顾客一键就能确认或改期。",
        },
        {
          q: "每位美容师可以有个人账户吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登录，查看和管理自己的预约，而且只能看到职位权限允许的内容。",
        },
        {
          q: "会计算薪资和佣金吗？",
          a: "会。疗程、套餐和产品销售的佣金会自动计算，每月薪资会再加上每位员工的底薪和津贴。",
        },
        {
          q: "可以用 iPad 吗？",
          a: "可以。Techub 支持跨平台：iPad 和 Android 平板、手机和电脑都能用。",
        },
        {
          q: "如何预约示范？",
          a: "请 WhatsApp {phone} 或发电邮至 {email}，我们会免费为您实际示范美容中心系统。",
        },
      ],
      demoMessage: "你好 Techub，我想了解美容中心预约系统，可以安排免费示范吗？",
    },

    spa: {
      meta: {
        title: "马来西亚 SPA 预约系统 | 理疗师、房间、套餐与薪资",
        socialTitle: "马来西亚 SPA 预约系统 | Techub Software",
        description:
          "马来西亚 SPA 与按摩预约系统：理疗师与房间安排、自动 WhatsApp 提醒、套餐与会员、员工个人账户与薪资、POS、库存追踪，报表 100 毫秒内生成。支持 iPad、手机和电脑。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "SPA预约系统",
          "马来西亚SPA系统",
          "SPA管理系统",
          "按摩预约系统",
          "按摩店系统",
          "脚底按摩中心系统",
          "养生中心系统",
          "理疗师排班系统",
          "SPA薪资系统",
          "SPA会员系统",
          "spa booking system Malaysia",
          "massage booking system",
        ],
      },
      category: "SPA 与按摩预约、房间与会员",
      eyebrow: "SPA 预约系统",
      heading: "前台从容，理疗师*预约爆满*",
      intro: "理疗师、房间、套餐、薪资和自动 WhatsApp 提醒，iPad、手机和电脑都能用。",
      heroBadge: "已通过 WhatsApp 确认",
      whoFor: ["日间 SPA", "按摩中心", "脚底按摩", "养生中心", "酒店与度假村 SPA", "情侣 SPA"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有个人账户",
        inventory: "库存追踪",
        payroll: "薪资计算",
        reports: "报表 100 毫秒内生成",
      },
      spotlights: {
        staff: {
          eyebrow: "员工个人账户与薪资",
          title: "每位理疗师都有个人账户",
          points: [
            "理疗师可查看和管理自己的预约",
            "支持 iPhone、Android、iPad 和电脑",
            "薪资自动计算",
            "底薪、佣金与津贴",
          ],
        },
        packages: {
          eyebrow: "套餐与会员",
          title: "剩余次数与余额，随时更新",
          points: ["套餐与预付储值", "每次到访都显示剩余次数", "力度与精油偏好", "生日与再次预约提醒"],
          badges: ["剩余次数", "已预约下次"],
        },
        treatmentMap: {
          eyebrow: "疗程部位图与签名",
          title: "手绘标记重点部位",
          points: ["用触控笔在人体图上标记", "理疗师备注，供下次参考", "健康申报与同意书", "顾客电子签名"],
        },
        pos: {
          eyebrow: "POS 与佣金",
          title: "结账与佣金，一处搞定",
          points: ["疗程、套餐与零售", "按理疗师计算佣金", "现金、刷卡、DuitNow QR 与电子钱包", "每日销售报表"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫描送货单，库存自动更新。",
          points: ["AI 读取每一项产品", "按疗程扣除精油与磨砂膏", "每笔库存变动都有追踪", "智能补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "SPA 报表 100 毫秒内生成",
          points: [
            "理疗师工作量与房间使用率",
            "已售套餐与会员",
            "最受欢迎的疗程",
            "即使有多年数据也不卡顿",
          ],
        },
        permissions: {
          eyebrow: "员工与权限管理",
          title: "团队管理，尽在掌握",
          points: ["老板、经理、理疗师与前台角色", "折扣需经理批准", "按分店控制访问权限", "完整操作记录"],
        },
      },
      modules: {
        scheduling: "理疗师与房间安排",
        whatsapp: "自动 WhatsApp 提醒",
        packages: "套餐与会员",
        group: "情侣与团体预约",
        treatmentMap: "疗程部位图与电子签名",
        profiles: "员工个人账户与自己的预约",
        pos: "POS 与零售",
        commission: "理疗师佣金",
        payroll: "薪资计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内生成",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机与电脑",
      },
      faqs: [
        {
          q: "SPA 预约系统收费多少？",
          a: "月费 RM {price} 起。新 SPA 前 {months} 个月免费，包括安装和员工培训。",
        },
        {
          q: "可以同时安排理疗师和房间吗？",
          a: "可以。每个预约都会同时安排一位理疗师和一个房间（包括情侣房），理疗师和房间都不会被重复预约。",
        },
        {
          q: "可以管理套餐和会员吗？",
          a: "可以。您可以出售套餐、预付储值和会员，系统会自动追踪剩余次数和余额。",
        },
        {
          q: "会自动通知顾客吗？",
          a: "会。预约确认和提醒会自动通过 WhatsApp 发送，顾客一键就能确认或改期。",
        },
        {
          q: "每位理疗师可以有个人账户吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登录，查看和管理自己的预约，而且只能看到职位权限允许的内容。",
        },
        {
          q: "会计算薪资和佣金吗？",
          a: "会。疗程和产品销售的佣金会自动计算，每月薪资会再加上每位理疗师的底薪和津贴。",
        },
        {
          q: "可以追踪 SPA 库存吗？",
          a: "可以。AI 读取供应商的送货单，精油和磨砂膏按疗程扣除，每笔库存变动都有追踪。",
        },
        {
          q: "可以用 iPad 吗？",
          a: "可以。Techub 支持跨平台，前台和理疗师都可以使用 iPad、Android 平板、手机或电脑。",
        },
        {
          q: "如何预约示范？",
          a: "请 WhatsApp {phone} 或发电邮至 {email}，我们会免费为您实际示范 SPA 系统。",
        },
      ],
      demoMessage: "你好 Techub，我想了解 SPA 预约系统，可以安排免费示范吗？",
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
  shots: {
    clinicDashboard: {
      title: "iPad 上的诊所仪表板",
      alt: "iPad 上的 Techub 诊所管理系统，显示实时排队情况、已通过 WhatsApp 确认的今日预约、营业额和低库存提醒",
    },
    medication: {
      title: "病人记录与用药记录追踪",
      alt: "iPad 上的病人用药历史，显示青霉素过敏提醒和建议的替代药物",
    },
    bodyChart: {
      title: "手绘人体图",
      alt: "iPad 上的人体图，附有医生的手绘标注和病人的电子同意签名",
    },
    clinicStock: {
      title: "药品库存与 AI 分析",
      alt: "iPad 上的诊所药品库存变动记录，附 AI 补货建议和即将过期的批次",
    },
    clinicPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为医生、护士、配药员和收银员设定的权限，附操作记录",
    },
    whatsappClinic: {
      title: "WhatsApp 预约提醒",
      alt: "自动发送给诊所病人的 WhatsApp 预约确认和提醒",
    },
    scanClinic: {
      title: "AI 送货单扫描",
      alt: "用手机扫描药品供应商的送货单，AI 读取每个品项、批号和有效期，并更新诊所库存",
    },
    queueTv: {
      title: "叫号显示屏",
      alt: "诊所叫号电视屏幕，以英文、马来文和中文显示正在呼叫 A023 到 2 号诊室",
    },
    printouts: {
      title: "收据、MC 与标签",
      alt: "Techub 诊所系统打印出的收据、医疗证明 MC 和药物标签样本",
    },
    salonCalendar: {
      title: "发廊预约日历",
      alt: "iPad 上按发型师排列的发廊预约日历，包括染发、离子烫和角蛋白护发预约、临时上门的顾客及 WhatsApp 确认",
    },
    salonPos: {
      title: "发廊 POS 结账",
      alt: "iPad 上的发廊 POS 结账画面，包括服务、零售产品、发型师佣金和 DuitNow QR 付款",
    },
    salonStock: {
      title: "发廊产品库存与 AI 分析",
      alt: "iPad 上的发廊产品库存变动记录，附 AI 补货建议",
    },
    salonPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为发廊老板、经理、发型师和前台设定的权限，附操作记录",
    },
    whatsappSalon: {
      title: "WhatsApp 预约提醒",
      alt: "自动发送给发廊顾客的 WhatsApp 预约确认和提醒，顾客一键确认",
    },
    salonCustomer: {
      title: "顾客资料与染发配方",
      alt: "手机上的发廊顾客资料，包括到店记录、染发配方、指定发型师和会员积分",
    },
    scanSalon: {
      title: "AI 送货单扫描",
      alt: "用手机扫描美发产品的送货单，AI 读取每个品项并更新发廊库存",
    },
    beautyCalendar: {
      title: "美容中心预约日历",
      alt: "iPad 上的美容中心预约日历，包括面部护理、睫毛与眉毛、美甲和纤体预约，以及套餐疗程",
    },
    faceChart: {
      title: "面部图表、照片与同意书",
      alt: "iPad 上的面部护理图表，附美容师手绘的肤况标注、前后对比照片和顾客的电子签名",
    },
    beautyPos: {
      title: "美容 POS 结账",
      alt: "iPad 上的美容中心 POS 结账画面，包括疗程、套餐扣次、产品和员工佣金",
    },
    beautyStock: {
      title: "美容产品库存与 AI 分析",
      alt: "iPad 上的美容中心产品库存变动记录，附 AI 补货建议",
    },
    whatsappBeauty: {
      title: "WhatsApp 预约提醒",
      alt: "自动发送给美容中心顾客的 WhatsApp 预约确认和提醒，并显示套餐剩余次数",
    },
    beautyPackage: {
      title: "套餐与疗程记录",
      alt: "手机上的美容中心顾客资料，包括面部护理和睫毛套餐、剩余次数、肤况记录和下次预约",
    },
    scanBeauty: {
      title: "AI 送货单扫描",
      alt: "用手机扫描美容用品的送货单，AI 读取每个品项并更新库存",
    },
    spaCalendar: {
      title: "SPA 预约日历",
      alt: "iPad 上按理疗师和房间排列的 SPA 预约日历，包括按摩、身体磨砂和情侣 SPA 预约",
    },
    bodyChartSpa: {
      title: "疗程部位图与签名",
      alt: "iPad 上的疗程部位图，附理疗师手绘的按摩部位和顾客的电子签名",
    },
    spaPos: {
      title: "SPA POS 结账",
      alt: "iPad 上的 SPA POS 结账画面，包括按摩套餐、零售产品、理疗师佣金和付款方式",
    },
    spaStock: {
      title: "SPA 库存与 AI 分析",
      alt: "iPad 上的 SPA 精油、磨砂膏和毛巾库存变动记录，附 AI 补货建议",
    },
    spaPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为 SPA 老板、经理、理疗师和前台设定的权限，附操作记录",
    },
    whatsappSpa: {
      title: "WhatsApp 预约提醒",
      alt: "自动发送给 SPA 顾客的 WhatsApp 预约确认和提醒，顾客一键确认",
    },
    spaPackage: {
      title: "套餐与会员",
      alt: "手机上的 SPA 顾客资料，包括套餐剩余次数、下次预约和按摩偏好",
    },
    scanSpa: {
      title: "AI 送货单扫描",
      alt: "用手机扫描 SPA 用品的送货单，AI 读取每个品项并更新库存",
    },
    permissionsDesktop: {
      title: "电脑上的员工权限管理",
      alt: "电脑网页浏览器中的员工职位与权限管理，附折扣和退款的操作记录",
    },
    clinicDashboardDesktop: {
      title: "电脑上的 Techub 仪表板",
      alt: "电脑网页浏览器中的 Techub 云端仪表板，显示实时排队情况、今日预约、本周营业额和 AI 库存建议",
    },
    reportsClinic: {
      title: "诊所报表",
      alt: "iPad 上 100 毫秒内生成的诊所报表：已看诊病人、看诊次数、收款和各医生营业额",
    },
    reportsSalon: {
      title: "发廊报表",
      alt: "iPad 上 100 毫秒内生成的发廊销售报表：各发型师业绩、服务和零售销售额",
    },
    reportsBeauty: {
      title: "美容中心报表",
      alt: "iPad 上 100 毫秒内生成的美容中心报表：套餐销售、已用次数和最受欢迎的疗程",
    },
    reportsSpa: {
      title: "SPA 报表",
      alt: "iPad 上 100 毫秒内生成的 SPA 报表：理疗师工作量、房间使用率和已售套餐",
    },
    staffSalon: {
      title: "发型师个人账户",
      alt: "手机上的发型师个人账户，显示今日预约、预约状态和本月佣金",
    },
    staffBeauty: {
      title: "美容师个人账户",
      alt: "手机上的美容师个人账户，显示今日预约、预约状态和本月佣金",
    },
    staffSpa: {
      title: "理疗师个人账户",
      alt: "手机上的理疗师个人账户，显示今日预约、预约状态和本月佣金",
    },
    payrollSalon: {
      title: "发廊薪资",
      alt: "iPad 上的每月薪资表，列出每位发型师的底薪、销售佣金、津贴和实发薪资",
    },
    payrollBeauty: {
      title: "美容中心薪资",
      alt: "iPad 上的每月薪资表，列出每位美容师的底薪、销售佣金、津贴和实发薪资",
    },
    payrollSpa: {
      title: "SPA 薪资",
      alt: "iPad 上的每月薪资表，列出每位理疗师的底薪、销售佣金、津贴和实发薪资",
    },
    eInvoice: {
      title: "LHDN 电子发票",
      alt: "通过 LHDN MyInvois 验证的电子发票，附唯一识别码和 QR 码",
    },
    erpDesktop: {
      title: "定制 ERP 系统",
      alt: "定制 ERP 仪表板示例，包含销售、采购、库存、会计和人力资源模块",
    },
    plateScanner: {
      title: "车牌识别系统",
      alt: "车牌识别系统示例：在闸门读取车牌，并记录进出日志",
    },
    objectDetection: {
      title: "AI 物体识别",
      alt: "AI 物体识别系统示例：在摄像头画面中标出人员、安全帽、箱子和车辆",
    },
  },
};

export default zh;
