// 简体中文 text for the whole site. Same keys as en.ts; see en.ts for how placeholders and *highlights* work.
// In the big page headings, \u200b marks where a line may break and \u00a0 keeps two words together
// (Chinese headings only break at spaces, punctuation and these marks; see app/globals.css).
import type { Dict } from "./en";

const zh: Dict = {
  ui: {
    skip: "跳到主要内容",
    home: "首页",
    logoAlt: "Techub Software 标志",
    logoHome: "Techub Software 首页",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    freeDemo: "免费 Demo",
    getFreeDemo: "我要免费 Demo",
    bookFreeDemo: "预约免费 Demo",
    askDemo: "我想看 Demo",
    whatsappMessage: "Hi Techub Software，我对你们的系统有兴趣，可以安排免费 Demo 吗？",
    emailSubject: "Techub 系统咨询",
    priceLine: "RM {price}/月起 · 前 {months} 个月免费",
    enlarge: "放大图片",
  },

  nav: {
    useCases: "适用行业",
    technology: "技术",
    services: "服务",
    pricing: "价格",
    contact: "联络我们",
  },

  menu: {
    useCases: "适用行业",
    otherTitle: "做其他生意？",
    otherText: "我们也可以帮你定制系统。",
    all: "看所有适用行业",
  },

  systems: {
    clinic: {
      label: "诊所",
      name: "诊所管理系统",
      blurb: "病人记录、用药记录、叫号和打印。",
      points: [
        "病人记录追踪",
        "用药记录追踪",
        "电视屏幕叫号",
        "连接X光机和打印机",
        "详细报表 100 毫秒内出来",
      ],
      cta: "看看诊所系统",
    },
    salon: {
      label: "发廊",
      name: "发廊预约系统",
      blurb: "发型师预约、员工账号、薪水和 POS。",
      points: [
        "自动发 WhatsApp 通知",
        "每位发型师都有自己的账号",
        "库存追踪，薪水自动算",
        "iPad、手机、电脑都能用",
        "详细报表 100 毫秒内出来",
      ],
      cta: "看看发廊系统",
    },
    beauty: {
      label: "美容中心",
      name: "美容中心预约系统",
      blurb: "配套、面部图、员工薪水和 POS。",
      points: [
        "配套和疗程次数追踪",
        "面部图、照片和同意书",
        "员工账号，薪水自动算",
        "自动发 WhatsApp 提醒",
        "详细报表 100 毫秒内出来",
      ],
      cta: "看看美容中心系统",
    },
    spa: {
      label: "SPA 和按摩",
      name: "SPA 预约系统",
      blurb: "按摩师、房间、配套和薪水。",
      points: [
        "按摩师和房间安排",
        "自动发 WhatsApp 通知",
        "员工账号、库存和薪水",
        "iPad、手机、电脑都能用",
        "详细报表 100 毫秒内出来",
      ],
      cta: "看看 SPA 系统",
    },
  },

  footer: {
    blurb:
      "{name} 是马来西亚本地的软件公司，为全马的诊所、发廊、美容中心和 SPA 开发智能又实惠的系统，也定制 ERP、AI 物体识别和车牌识别等系统。保证 {uptime} 在线率，月费 RM {price} 起。",
    useCases: "适用行业",
    custom: "定制系统",
    company: "公司",
    about: "关于我们",
    services: "服务",
    technology: "技术",
    pricing: "价格",
    faq: "常见问题",
    contact: "联络我们",
    rights: "版权所有。",
    tagline: "马来西亚本地的智能商业系统，好用又实惠。",
  },

  bubble: {
    hello: "Hi 老板！👋",
    text: "想看免费 Demo 吗？前 {months} 个月免费哦！",
    chat: "跟我们聊聊",
    close: "关闭讯息",
    label: "在 WhatsApp {phone} 跟 Techub Software 聊天",
  },

  notFound: {
    title: "找不到这个页面",
    text: "你要找的页面不存在。",
    back: "回到首页",
  },

  /* ---------- Home page ---------- */
  home: {
    meta: {
      title: "马来西亚预约系统与诊所管理系统 | Techub Software",
      description:
        "马来西亚 AI 预约系统，适合诊所、发廊、美容中心和 SPA：高级预约、WhatsApp 通知、库存管理，报表 100 毫秒内出来。{uptime} 在线率，月费 RM {price} 起，前 {months} 个月免费。",
      keywords: [
        "马来西亚预约系统",
        "大马预约系统",
        "预约系统",
        "预约管理系统",
        "诊所管理系统",
        "发廊预约系统",
        "美容院系统",
        "SPA预约系统",
        "WhatsApp预约提醒",
        "AI库存管理",
        "LHDN电子发票",
        "LHDN e-Invoice",
        "马来西亚软件公司",
        "ERP系统",
        "appointment system Malaysia",
        "booking system Malaysia",
        "Techub Software",
      ],
    },
    hero: {
      badge: "全马最多商家选用的预约系统",
      title: "*结合\u00a0AI*\u00a0的\u200b高级预约系统",
      intro:
        "即时更新、WhatsApp 通知、库存管理，全部建在马来西亚本地的企业级数据库上。{uptime} 在线率，速度有保证。",
      secondary: "看看适用行业",
      note: "前 {months} 个月免费，包安装和员工培训。",
      statUptime: "在线率",
      statReports: "出报表",
      statReportsValue: "<100 ms",
      statFrom: "低至",
      perMonth: "/月",
      deviceBadge: "云端 · iPad、手机、电脑",
    },
    highlights: {
      eyebrow: "为什么选 Techub",
      title: "又快又聪明，*24 小时在线*",
      items: {
        booking: { title: "高级预约", text: "员工、房间、服务和 walk-in 顾客，一个日历全搞定。" },
        ai: { title: "内置 AI", text: "AI 帮你看送货单，还会预测库存。" },
        uptime: { title: "{uptime} 在线率", text: "系统稳稳在线，有保证。" },
        database: { title: "企业级数据库", text: "NoSQL 数据库经过索引优化，服务器就在马来西亚。" },
        speed: { title: "速度有保证", text: "详细报表 100 毫秒内出来。" },
        realtime: { title: "即时更新", text: "所有设备马上同步。" },
        whatsapp: { title: "WhatsApp 通知", text: "确认和提醒，系统自动帮你发。" },
        stock: { title: "库存管理", text: "每件货进进出出，都有记录。" },
      },
    },
    softwareName: "Techub 预约管理系统",
    softwareCategory: "预约安排与生意管理",
    useCasesListName: "Techub Software 适用行业",
    servicesListName: "Techub Software 服务",
  },

  about: {
    eyebrow: "关于 Techub",
    title: "大马本地开发，*简单又实惠*",
    intro:
      "我们在马来西亚，专门为本地生意开发系统，帮你接预约、招呼顾客、管库存。系统设定，全部交给我们。",
    values: {
      cost: { title: "价钱实惠", text: "月费 RM {price} 起。定制 RM {custom} 起，看你的需要。" },
      online: { title: "24 小时在线", text: "保证 {uptime} 在线率，还有多区域备份。" },
      done: { title: "我们帮你搞定", text: "安装、连接硬件、培训员工，我们全包。" },
      custom: { title: "照你的要求做", text: "表格、工作流程、报表和打印格式，都可以定制。" },
    },
  },

  uptime: {
    label: "在线率保证",
    text: "平均每个月停机不到 22 分钟。",
    chips: ["服务器在马来西亚", "24 小时监控", "加密备份"],
  },

  services: {
    eyebrow: "我们的服务",
    title: "我们可以帮你做什么",
    intro: "现成系统或帮你定制都可以，服务全马商家。我们帮你全部设定好，还会培训你的团队。",
    items: {
      systems: { title: "现成系统", text: "诊所、发廊、美容中心和 SPA 的预约系统，拿来就能用。" },
      custom: {
        title: "定制系统开发",
        text: "ERP、AI 物体识别、车牌识别等等。定制 RM {custom} 起。",
      },
      hardware: {
        title: "硬件安装",
        text: "标签打印机、叫号系统、X光机等等，我们帮你装好、连接好。",
      },
      support: { title: "培训和支援", text: "免费安装和员工培训，之后有大马本地团队在 WhatsApp 支援你。" },
    },
    howTitle: "合作流程",
    howText: "定制 RM {custom} 起，看你的需要而定。",
    howCta: "跟我们聊聊你的需要",
    howMessage: "Hi Techub，我想跟你们聊一下定制系统。",
    steps: ["咨询", "定制", "安装和培训", "正式上线"],
    chat: {
      name: "Techub 客服",
      status: "在线",
      question: "Hi，可以帮我们装新的标签打印机吗？",
      answer: "没问题！我们会帮你装好，也会教你的员工怎么用。👍",
      thanks: "谢谢！🙏",
    },
  },

  useCases: {
    eyebrow: "适用行业",
    title: "现成系统，适合你的行业",
    intro: "专为马来西亚的诊所、发廊、美容中心和 SPA 而设。点一下，看看系统在 iPad 和手机上的样子。",
  },

  custom: {
    eyebrow: "定制系统",
    title: "需要其他系统？*我们帮你做。*",
    intro: "除了预约系统，我们也为马来西亚各行各业定制系统。定制 RM {custom} 起，看你的需要而定。",
    items: {
      erp: { title: "ERP 系统", text: "销售、采购、库存、会计和人事，一个系统全包。" },
      detection: { title: "AI 物体识别", text: "CCTV 镜头自动认出人、车辆、安全装备和物品。" },
      plate: { title: "车牌识别", text: "在闸门自动读车牌，每次进出都有记录。" },
    },
    ctaTitle: "有兴趣？跟我们说说你需要什么。",
    ctaText: "ERP、AI、扫描系统，或者全新的点子都可以。我们会建议最适合的方案，再给你报价。",
    cta: "WhatsApp 我们",
    message: "Hi Techub，我对定制系统有兴趣（ERP、AI 物体识别、车牌识别或其他系统），想了解一下。",
    email: "电邮联络",
    emailSubject: "定制系统咨询",
  },

  tech: {
    eyebrow: "技术",
    title: "企业级技术，*简单好用*",
    intro: "设在马来西亚的企业级服务器、快速的 NoSQL 数据库、AI 和 WhatsApp，在每台设备上一起运作。",
    explore: "看看我们的技术",
    items: {
      servers: {
        title: "马来西亚企业级服务器",
        text: "系统放在马来西亚的 IPServerOne、Amazon Web Services 等服务器上。你的资料存在哪里，我们都会讲清楚。",
      },
      database: { title: "快速 NoSQL 数据库", text: "资料经过索引优化，详细报表 100 毫秒内就出来。" },
      security: { title: "加密又有备份", text: "所有储存的资料都有加密，还有跨区域的多层备份。" },
      ai: { title: "内置 AI", text: "AI 帮你看送货单、更新库存，还会提醒你该补什么货。" },
      realtime: { title: "即时更新", text: "每台 iPad、手机和电脑都马上看到最新变动。" },
      whatsapp: { title: "WhatsApp 通知", text: "预约确认和提醒，系统自动发出。" },
      hardware: { title: "连接各种硬件", text: "标签打印机、叫号系统、X光机等等。" },
      einvoice: { title: "LHDN 电子发票", text: "电子发票通过 MyInvois 提交给 LHDN。" },
    },
    hub: {
      center: "Techub Cloud",
      uptime: "{uptime} 在线率",
      nodes: {
        devices: "iPad、手机、电脑",
        whatsapp: "WhatsApp",
        printers: "标签打印机",
        caller: "叫号机",
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
      title: "马来西亚服务器、NoSQL、AI、WhatsApp 和电子发票 | 技术",
      socialTitle: "技术 | Techub Software",
      description:
        "{name} 的技术：马来西亚企业级服务器（IPServerOne、Amazon Web Services）、索引优化的 NoSQL 数据库（报表 100 毫秒内出来）、加密多区域备份、AI、WhatsApp、LHDN 电子发票，还有标签打印机、X光机等硬件。{uptime} 在线率。",
      keywords: [
        "马来西亚云端系统",
        "马来西亚数据中心",
        "马来西亚服务器",
        "云端商业系统",
        "NoSQL数据库",
        "加密备份",
        "AI库存管理",
        "送货单扫描",
        "WhatsApp预约提醒",
        "LHDN电子发票",
        "MyInvois电子发票",
        "叫号系统",
        "标签打印机连接",
        "X光机连接",
        "LHDN e-Invoice MyInvois",
        "cloud business system Malaysia",
      ],
    },
    crumb: "技术",
    eyebrow: "技术",
    title: "企业级技术，*用起来很简单*",
    intro: "设在马来西亚的企业级服务器、快速的 NoSQL 数据库、AI 和 WhatsApp，什么设备都能用。保证 {uptime} 在线率。",
    demoMessage: "Hi Techub，我想约个免费 Demo，也想多了解一下你们的技术。",
    seeUseCases: "看看适用行业",
    spotlights: {
      servers: {
        eyebrow: "马来西亚企业级服务器",
        title: "你的资料加密存在马来西亚",
        points: [
          "用 IPServerOne、Amazon Web Services 等企业级服务器",
          "完全透明：资料放在哪里，我们讲清楚",
          "跨多个区域的多层备份",
          "所有储存的资料都有加密",
        ],
      },
      speed: {
        eyebrow: "速度有保证",
        title: "详细报表 100 毫秒内出来",
        points: [
          "索引优化的 NoSQL 数据库，专为速度而设",
          "就算累积几年的资料，报表也不会 lag",
          "服务器就在马来西亚，反应更快",
          "每份报表都可以随时下载",
        ],
        badge: "100 毫秒内",
      },
      realtime: {
        eyebrow: "即时更新",
        title: "电脑、iPad、手机，同一个系统",
        points: [
          "一改，所有设备马上看到",
          "iPhone、Android、Windows、Mac 都能用",
          "多间分店也没问题",
          "不用买服务器，也不用自己维护",
        ],
      },
      ai: {
        eyebrow: "内置 AI",
        title: "AI 帮你看送货单",
        points: [
          "拍一下供应商的送货单（DO）",
          "AI 读出品项、数量、批号和有效期",
          "库存自动更新",
          "智能补货建议",
        ],
        cta: "问问 AI 库存管理",
        ctaMessage: "Hi Techub，我想了解一下 AI 库存管理。",
      },
      whatsapp: {
        eyebrow: "WhatsApp 通知",
        title: "自动通知顾客",
        points: ["预约确认", "每次来之前提醒", "一键确认或改期", "减少顾客放飞机"],
        badges: ["提醒已发出", "已确认"],
      },
      hardware: {
        eyebrow: "连接各种硬件",
        title: "连接你现有的硬件",
        points: [
          "标签打印机和收据打印机",
          "叫号系统，电视显示加语音",
          "X光机",
          "条码扫描器和刷卡机",
        ],
      },
      einvoice: {
        eyebrow: "LHDN 电子发票",
        title: "电子发票，符合 LHDN 要求",
        points: [
          "从账单和 POS 直接开电子发票",
          "通过 MyInvois 提交给 LHDN",
          "验证过的电子发票附 QR 码",
          "每张发票都有记录",
        ],
      },
      security: {
        eyebrow: "安全和权限",
        title: "每位员工，权限刚刚好",
        points: [
          "按职位设定员工权限",
          "打折和退款要经理批准",
          "完整操作记录",
          "资料和连接全程加密",
        ],
      },
    },
    infra: {
      business: "你的生意",
      devices: "iPad · 手机 · 电脑",
      encrypted: "加密连接",
      servers: "马来西亚企业级服务器",
      online: "在线",
      backups: "多层备份",
      regions: "跨多个区域",
      encryptedData: "所有储存资料都有加密",
    },
    uptimeEyebrow: "稳定可靠",
    uptimeTitle: "{uptime} 在线率，*有保证*",
    uptimeIntro:
      "你的预约、叫号屏幕和收款都保持在线，平均每个月停机不到 22 分钟。",
    uptimePoints: [
      "马来西亚企业级服务器",
      "多层、多区域备份",
      "所有储存资料都有加密",
      "马来西亚本地团队 WhatsApp 支援",
    ],
    featuresEyebrow: "功能",
    featuresTitle: "一个系统，全部搞定",
    industries: "看看你的行业怎样用",
    contactTitle: "跟我们聊聊你要的系统",
    faqs: [
      {
        q: "Techub 的服务器在哪里？",
        a: "在马来西亚。我们用 IPServerOne、Amazon Web Services 等企业级服务器，你的资料存在哪里，我们都会讲清楚。",
      },
      {
        q: "我需要买服务器吗？",
        a: "不需要。Techub 在云端运行，你只要有网络，加上 iPad、手机或电脑就可以了。",
      },
      {
        q: "你们怎样保护我的资料？",
        a: "所有储存的资料都有加密，传送时也走加密连接。备份分多层存放在多个区域；按职位设定的权限决定每位员工看得到什么；操作记录会记下每一个动作。",
      },
      {
        q: "为什么 Techub 的报表这么快？",
        a: "Techub 用的是索引优化的 NoSQL 数据库，就算是详细报表也能在 100 毫秒内出来，一点都不 lag。我们的服务器就在马来西亚，全马商家用起来反应都很快。",
      },
      {
        q: "{uptime} 在线率保证是什么意思？",
        a: "系统至少有 {uptime} 的时间正常运作，等于平均每个月停机不到 22 分钟。",
      },
      {
        q: "AI 扫描送货单是怎样运作的？",
        a: "拍照或扫描供应商的送货单，AI 就会读出品项、数量、批号和有效期，然后自动调整库存。每一笔库存变动都有记录，进货、出货、调货和调整都查得到。",
      },
      {
        q: "Techub 有支援 LHDN 电子发票吗？",
        a: "有。电子发票可以从账单和 POS 开出，通过 MyInvois 提交给 LHDN，再附上验证 QR 码分享给顾客。",
      },
      {
        q: "Techub 可以连接哪些硬件？",
        a: "标签打印机、叫号系统、X光机、热敏收据打印机和 A4 打印机、条码扫描器、刷卡机、钱箱和排队显示屏。把你的型号告诉我们，我们会在安装前帮你确认。",
      },
      {
        q: "可以用哪些设备？",
        a: "Techub 跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，还有 Windows 或 Mac 电脑都可以用。电视也可以拿来显示叫号。",
      },
    ],
  },

  /* ---------- Shared sections ---------- */
  features: {
    uptime: { title: "{uptime} 在线率保证", text: "马来西亚企业级服务器，还有多区域备份。" },
    booking: { title: "高级预约日历", text: "按员工、房间或服务预约，walk-in 顾客也可以。" },
    whatsapp: { title: "自动 WhatsApp 通知", text: "确认、提醒和跟进。" },
    queue: { title: "叫号系统", text: "电视显示加语音叫号，房间和柜台都适用。" },
    realtime: { title: "即时更新", text: "所有设备马上看到最新变动。" },
    reports: { title: "报表 100 毫秒内出来", text: "索引优化的 NoSQL 数据库，详细报表一下就出来。" },
    ai: { title: "AI 库存管理", text: "AI 帮你看送货单、预测哪些货快没了，还会建议补货。" },
    inventory: { title: "库存追踪", text: "每一笔进货、出货、调货和调整都有记录。" },
    profiles: { title: "员工个人账号", text: "每位员工自己看、自己管自己的预约。" },
    payroll: { title: "薪水计算", text: "底薪、佣金和津贴，自动帮你算好。" },
    pos: { title: "POS、配套和佣金", text: "结账、预付配套和员工佣金，一个地方搞定。" },
    permissions: { title: "员工权限管理", text: "谁可以看、改、打折、退款或下载资料，由你决定。" },
    einvoice: { title: "LHDN 电子发票", text: "电子发票通过 MyInvois 提交给 LHDN。" },
    hardware: { title: "连接各种硬件", text: "标签打印机、叫号机、X光机等等。" },
    drawing: { title: "手绘和电子签名", text: "在平板上直接画图表、签同意书。" },
    devices: { title: "iPad、手机、电脑都能用", text: "跨平台：iPhone、Android、Windows 和 Mac。" },
  },

  hardware: {
    eyebrow: "连接各种硬件",
    title: "连接你的硬件",
    intro: "标签打印机、叫号系统、X光机等等，我们全部帮你安装和设定好。",
    items: {
      caller: "叫号系统和电视",
      label: "标签打印机",
      receipt: "收据和 A4 打印机",
      xray: "X光机",
      scanner: "条码 / QR 扫描器",
      card: "刷卡机和钱箱",
      tablet: "平板和触控笔",
      devices: "电脑、iPad 和手机",
    },
  },

  pricing: {
    eyebrow: "收费简单",
    title: "全马商家都用得起",
    offer: "新客户优惠",
    plan: "Techub 标准配套",
    from: "低至",
    perMonth: "/ 月",
    free: "新用户前 {months} 个月完全免费，包安装和员工培训。",
    claim: "领取 {months} 个月免费",
    claimMessage: "Hi Techub，我想领取前 {months} 个月免费的优惠。",
    includedTitle: "全部包括",
    included: [
      "适合你生意的预约系统",
      "WhatsApp 通知和叫号系统",
      "AI 库存管理和库存追踪",
      "详细报表 100 毫秒内出来",
      "支援 LHDN 电子发票",
      "电脑、平板、手机都能用",
      "员工个人账号和权限管理",
      "{uptime} 在线率和加密备份",
      "免费安装和员工培训",
      "马来西亚本地团队 WhatsApp 支援",
    ],
    customTitle: "定制服务",
    customFrom: "起价",
    customText: "看你的需要：加新功能、报表、打印格式、连接其他系统，甚至整个新系统都可以。",
    customCta: "索取报价",
    customMessage: "Hi Techub，我想问一下定制系统的报价。",
    customEmail: "电邮联络",
    customEmailSubject: "定制系统报价",
    offerText: "每月 RM {price} 起。新用户前 {months} 个月免费，包安装和员工培训。",
  },

  faq: {
    eyebrow: "常见问题",
    title: "有疑问？这里有答案",
    items: [
      {
        q: "Techub Software 是做什么的？",
        a: "Techub Software 是马来西亚本地的软件公司，为全马商家开发智能又实惠的系统：诊所、发廊、美容中心和 SPA 有现成的预约系统，也可以定制 ERP、AI 物体识别、车牌识别等系统。",
      },
      {
        q: "收费多少？",
        a: "月费 RM {price} 起，新客户前 {months} 个月免费，包安装和员工培训。定制 RM {custom} 起，看你的需要而定。",
      },
      {
        q: "系统有多快？",
        a: "非常快。Techub 在马来西亚的企业级服务器上，用索引优化的 NoSQL 数据库，详细报表 100 毫秒内就出来，所有设备也会即时更新。",
      },
      {
        q: "你们保证多少在线率？",
        a: "我们保证 {uptime} 的系统在线率，等于平均每个月停机不到 22 分钟，你的柜台、叫号屏幕和预约都能保持在线。",
      },
      {
        q: "我的资料存在哪里？安全吗？",
        a: "你的资料存放在马来西亚的企业级服务器上，例如 IPServerOne 和 Amazon Web Services，存在哪里我们会讲清楚。所有储存的资料都有加密，还有跨多个区域的多层备份。",
      },
      {
        q: "Techub 用什么技术？",
        a: "Techub 在云端运行，用的是马来西亚的企业级服务器，加上索引优化的 NoSQL 数据库、会看送货单和管库存的 AI、自动 WhatsApp 通知和 LHDN 电子发票，还能连接标签打印机、叫号系统和X光机等硬件。",
      },
      {
        q: "有支援 LHDN 电子发票吗？",
        a: "有。Techub 支援 LHDN 电子发票，发票可以通过 MyInvois 提交和验证。",
      },
      {
        q: "可以做其他系统吗？例如 ERP？",
        a: "可以。我们定制 ERP、AI 物体识别、车牌识别等系统，也可以为其他行业调整我们的系统。WhatsApp {phone} 跟我们聊聊你的想法吧。",
      },
      {
        q: "可以连接哪些硬件？",
        a: "标签打印机、叫号系统和排队显示屏、X光机、收据和 A4 打印机、条码扫描器、刷卡机、钱箱，还有签名用的平板。把你的型号告诉我们，我们会在安装前帮你确认。",
      },
      {
        q: "有包安装和培训吗？",
        a: "有。新客户包安装、硬件设定和员工培训；系统上线后，我们也会在 WhatsApp 继续支援你。",
      },
      {
        q: "iPad、手机和电脑都可以用吗？",
        a: "可以。Techub 跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，还有 Windows 或 Mac 电脑都能用。",
      },
      {
        q: "怎样联络 Techub Software？",
        a: "WhatsApp {phone} 或发电邮到 {email}。我们可以为你的生意安排免费的系统 Demo。",
      },
    ],
  },

  contact: {
    badge: "免费 Demo · 前 {months} 个月免费",
    title: "看看 Techub 怎样帮到你的生意",
    text: "月费 RM {price} 起，全马商家都适用，包安装和员工培训。",
    whatsappLabel: "WhatsApp · 回复最快",
    emailLabel: "电邮联络",
  },

  /* ---------- Pages opened from the menu and footer (each part of the company has its own page) ---------- */
  pages: {
    useCases: {
      meta: {
        title: "适用行业 | 马来西亚诊所、发廊、美容中心和 SPA 系统",
        description:
          "专为马来西亚诊所、发廊、美容中心和 SPA 而设的现成预约系统：WhatsApp 提醒、员工账号、库存管理，报表 100 毫秒内出来。点进去看看 iPad 和手机上的样子。",
      },
    },
    customSystems: {
      meta: {
        title: "定制系统 | ERP、AI 物体识别和车牌识别",
        description: "{name} 为马来西亚商家定制系统，例如 ERP、AI 物体识别和车牌识别。定制 RM {custom} 起，看你的需要而定。",
      },
    },
    services: {
      meta: {
        title: "服务 | 现成系统、定制开发、硬件安装和培训",
        description: "{name} 为马来西亚商家提供现成预约系统、定制系统开发、硬件安装、系统安装和员工培训，还有大马本地团队在 WhatsApp 支援你。",
      },
    },
    pricing: {
      meta: {
        title: "价格 | RM {price}/月起，前 {months} 个月免费",
        description: "Techub 配套 RM {price}/月起。马来西亚新客户前 {months} 个月免费，包安装和员工培训。定制 RM {custom} 起。",
      },
    },
    about: {
      meta: {
        title: "关于我们 | 马来西亚本地软件公司",
        description: "{name} 是马来西亚本地的软件公司，为诊所、发廊、美容中心和 SPA 开发智能又实惠的系统，保证 {uptime} 在线率，还有本地团队支援。",
      },
    },
    faq: {
      meta: {
        title: "常见问题 | Techub 系统问答",
        description: "关于 Techub 的常见问题：价格、速度、{uptime} 在线率保证、资料安全、LHDN 电子发票、硬件、设备、安装和培训。",
      },
    },
    contact: {
      meta: {
        title: "联络我们 | WhatsApp 或电邮预约免费 Demo",
        description: "在 WhatsApp {phone} 或电邮 {email} 联络 {name}，为你在马来西亚的生意预约免费 Demo，前 {months} 个月免费。",
      },
    },
  },

  /* ---------- System pages ---------- */
  product: {
    useCases: "适用行业",
    allModules: "全部功能",
    inside: "{product}有哪些功能",
    otherSystems: "其他行业也有",
    reportsBadge: "100 毫秒内",
  },

  products: {
    clinic: {
      meta: {
        title: "马来西亚诊所管理系统 | 病人记录、叫号和用药记录追踪",
        socialTitle: "马来西亚诊所管理系统 | Techub Software",
        description:
          "专为马来西亚诊所而设的诊所管理系统：病人记录和用药追踪、叫号系统、EMR、AI 药物库存管理、连接X光机和打印机、LHDN 电子发票，报表 100 毫秒内出来。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "马来西亚诊所管理系统",
          "诊所管理系统",
          "诊所系统",
          "诊所软件",
          "电子病历系统",
          "EMR系统",
          "病人记录系统",
          "用药记录系统",
          "诊所叫号系统",
          "诊所电子发票",
          "GP诊所系统",
          "牙科诊所系统",
          "中医诊所系统",
          "clinic management system Malaysia",
          "clinic system Malaysia",
          "EMR Malaysia",
        ],
      },
      category: "诊所管理、EMR 和病人排队",
      eyebrow: "诊所管理系统",
      heading: "更聪明的\u200b*诊所系统*，看诊更快、更安全",
      intro: "专为马来西亚诊所而设：病人记录、用药追踪、叫号、收费和库存，iPad、手机、电脑都能用。",
      heroBadge: "{uptime} 在线率",
      whoFor: ["GP 诊所", "牙科诊所", "专科诊所", "医美诊所", "物理治疗", "中医", "连锁诊所"],
      highlights: {
        records: "病人记录追踪",
        medication: "用药记录追踪",
        queue: "叫号系统",
        hardware: "连接X光机和打印机",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内出来",
      },
      spotlights: {
        queue: {
          eyebrow: "叫号系统",
          title: "按一下，叫下一位病人",
          points: ["电视显示加语音叫号", "诊室、配药处和付款柜台", "英文、马来文和中文", "等候更短，病人更安心"],
        },
        records: {
          eyebrow: "病人记录和用药追踪",
          title: "每份病历、每种药物，都有追踪",
          points: [
            "病人记录附完整看诊历史",
            "每位病人的用药记录",
            "开药前有过敏提醒",
            "每次配药都记下批号和有效期",
          ],
        },
        drawing: {
          eyebrow: "手绘和电子签名",
          title: "在平板上画图、标注和签名",
          points: ["人体图和牙齿图", "用手指或触控笔画", "病人同意书电子签名", "直接存进病人记录"],
        },
        hardware: {
          eyebrow: "连接各种硬件",
          title: "连接你诊所的硬件",
          points: ["药物标签打印机", "叫号系统", "X光机", "MC、收据和 A4 打印"],
        },
        stock: {
          eyebrow: "AI 库存管理",
          title: "扫一扫送货单，库存自动更新。",
          points: ["AI 读出品项、批号和有效期", "配药时自动扣库存", "每笔变动都有记录", "库存不足和过期提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "诊所报表 100 毫秒内出来",
          points: [
            "病人、看诊和收款",
            "每位医生的营业额",
            "常见诊断和 Panel 索偿",
            "就算有几年的记录也不会 lag",
          ],
        },
        permissions: {
          eyebrow: "权限管理",
          title: "每位员工，权限刚刚好",
          points: ["医生、护士、配药员和收银员角色", "打折要经理批准", "按分店控制权限", "完整操作记录"],
        },
      },
      modules: {
        records: "病人登记和记录",
        queue: "叫号系统",
        whatsapp: "WhatsApp 预约提醒",
        emr: "看诊和 EMR 电子病历",
        medication: "用药记录追踪",
        drawing: "人体图和电子签名",
        ai: "AI 药物库存管理",
        inventory: "库存变动追踪",
        printing: "MC、标签和收据打印",
        xray: "连接X光机",
        billing: "收费和 Panel 索偿",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内出来",
        permissions: "权限管理",
        devices: "iPad、手机、电脑都能用",
        realtime: "即时更新",
      },
      faqs: [
        {
          q: "Techub 诊所系统适合小诊所吗？",
          a: "适合。从只有一位医生的小诊所，到有多间分行的连锁诊所都适用。月费 RM {price} 起，新诊所前 {months} 个月免费，包安装和员工培训。",
        },
        {
          q: "可以追踪病人记录和用药吗？",
          a: "可以。每位病人都有完整记录，包括看诊、诊断、处方和配药历史。用药记录追踪系统会在你开药前显示剂量、服用次数、批号和过敏提醒。",
        },
        {
          q: "诊所系统有叫号功能吗？",
          a: "有。号码可以显示在电视屏幕上，还有语音广播，诊室、配药柜台和付款柜台都适用。",
        },
        {
          q: "可以连接X光机和打印机吗？",
          a: "可以。我们可以连接X光机、药物标签打印机、热敏收据打印机、A4 打印机和叫号系统。把你的型号告诉我们，我们会在安装前帮你确认。",
        },
        {
          q: "有支援 LHDN 电子发票吗？",
          a: "有。诊所系统支援 LHDN 电子发票，收费时开的发票可以通过 MyInvois 提交和验证。",
        },
        {
          q: "医生可以在人体图或牙齿图上画吗？",
          a: "可以。医生可以在平板或触控屏上直接手绘和标注，病人也可以用电子方式签同意书。",
        },
        {
          q: "报表有多快？",
          a: "详细报表 100 毫秒内就出来。Techub 在马来西亚的服务器上用索引优化的 NoSQL 数据库，就算有几年的记录也不会 lag。",
        },
        {
          q: "系统稳定吗？",
          a: "我们保证 {uptime} 在线率。你的资料加密存放在马来西亚的企业级服务器上，还有跨区域的多层备份。",
        },
        {
          q: "怎样预约 Demo？",
          a: "WhatsApp {phone} 或发电邮到 {email}，我们会免费 Demo 诊所系统给你看。",
        },
      ],
      demoMessage: "Hi Techub，我想了解一下诊所管理系统，可以安排免费 Demo 吗？",
    },

    salon: {
      meta: {
        title: "马来西亚发廊预约系统 | 预约、员工账号、薪水和 POS",
        socialTitle: "马来西亚发廊预约系统 | Techub Software",
        description:
          "马来西亚发廊预约系统：发型师预约日历、自动 WhatsApp 通知、员工账号、薪水和佣金、POS、库存追踪，报表 100 毫秒内出来。iPad、手机、电脑都能用。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "发廊预约系统",
          "马来西亚发廊系统",
          "发廊管理系统",
          "发廊软件",
          "发廊POS系统",
          "发廊薪水系统",
          "理发店预约系统",
          "发型师佣金计算",
          "WhatsApp预约提醒",
          "salon appointment system",
          "salon booking system Malaysia",
          "salon POS Malaysia",
        ],
      },
      category: "发廊预约、员工、薪水和 POS",
      eyebrow: "发廊预约系统",
      heading: "让每位*发型师*\u200b预约满满",
      intro: "专为马来西亚发廊而设：预约、自动 WhatsApp 通知、员工账号、薪水和 POS，iPad、手机、电脑都能用。",
      heroBadge: "已在 WhatsApp 确认",
      whoFor: ["发廊", "理发店", "男女发廊", "染发护发工作室", "新娘发型化妆", "连锁发廊"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有自己的账号",
        inventory: "库存追踪",
        payroll: "薪水计算",
        reports: "报表 100 毫秒内出来",
      },
      spotlights: {
        staff: {
          eyebrow: "员工账号和薪水",
          title: "每位发型师都有自己的账号",
          points: [
            "发型师自己看、自己管预约",
            "iPhone、Android、iPad、电脑都能用",
            "薪水自动计算",
            "底薪、佣金和津贴",
          ],
        },
        customer: {
          eyebrow: "顾客记录",
          title: "每位顾客的染发配方，都记下来",
          points: ["来店记录和指定发型师", "染发配方和备注", "前后对比照片", "会员积分和配套"],
          badges: ["配方已保存", "会员积分"],
        },
        pos: {
          eyebrow: "POS 和佣金",
          title: "结账快，佣金自动算好。",
          points: ["服务和零售一张单", "按发型师计算佣金", "现金、刷卡、DuitNow QR 和电子钱包", "配套和会员折扣"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫一扫送货单，库存自动更新。",
          points: ["AI 读出每一项产品", "染发和护发产品用量自动扣", "每笔库存变动都有追踪", "智能补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "发廊报表 100 毫秒内出来",
          points: ["按发型师和服务看业绩", "服务和零售销售对比", "佣金一目了然", "就算有几年的资料也不会 lag"],
        },
        permissions: {
          eyebrow: "员工和权限管理",
          title: "每位员工，权限刚刚好",
          points: ["老板、经理、发型师和前台角色", "打折要经理批准", "隐藏顾客电话号码", "完整操作记录"],
        },
      },
      modules: {
        calendar: "按发型师排的预约日历",
        walkin: "Walk-in 顾客排队",
        whatsapp: "自动 WhatsApp 通知",
        profiles: "员工账号和自己的预约",
        customers: "顾客记录和染发配方",
        packages: "配套和会员积分",
        pos: "POS 和零售",
        commission: "发型师佣金",
        payroll: "薪水计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内出来",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机、电脑",
      },
      faqs: [
        {
          q: "发廊预约系统收费多少？",
          a: "月费 RM {price} 起。新发廊前 {months} 个月免费，包安装和员工培训。",
        },
        {
          q: "会自动通知顾客吗？",
          a: "会。预约确认和提醒会自动用 WhatsApp 发出，顾客按一下就能确认或改期。",
        },
        {
          q: "每位发型师可以有自己的账号吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登入，查看和管理自己的预约，而且只看得到职位权限允许的内容。",
        },
        {
          q: "会算薪水和佣金吗？",
          a: "会。服务和产品销售的佣金按 POS 记录计算，每月薪水再加上每位员工的底薪和津贴。",
        },
        {
          q: "可以追踪发廊产品库存吗？",
          a: "可以。AI 读出供应商的送货单，每项服务自动扣产品用量，每笔库存变动都有追踪。",
        },
        {
          q: "可以接 walk-in 顾客吗？",
          a: "可以。Walk-in 顾客会加入排队，跟预约一起显示，前台一眼就看到下一位有空的发型师。",
        },
        {
          q: "可以保存每位顾客的染发配方吗？",
          a: "可以。染发配方、备注和前后对比照片都存在顾客资料里，下次来店一看就知道。",
        },
        {
          q: "iPad、Android 和电脑都可以用吗？",
          a: "可以。Techub 跨平台：iPad 和 Android 平板、iPhone 和 Android 手机，还有 Windows 或 Mac 电脑都能用。",
        },
        {
          q: "怎样预约 Demo？",
          a: "WhatsApp {phone} 或发电邮到 {email}，我们会免费 Demo 发廊系统给你看。",
        },
      ],
      demoMessage: "Hi Techub，我想了解一下发廊预约系统，可以安排免费 Demo 吗？",
    },

    beauty: {
      meta: {
        title: "马来西亚美容中心预约系统 | 预约、配套和薪水",
        socialTitle: "马来西亚美容中心预约系统 | Techub Software",
        description:
          "马来西亚美容中心预约系统：预约日历、自动 WhatsApp 提醒、疗程配套、附照片和电子签名的面部图、员工账号和薪水、POS、库存追踪，报表 100 毫秒内出来。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "美容中心系统",
          "美容院系统",
          "马来西亚美容院系统",
          "美容中心预约系统",
          "美容院软件",
          "医美中心系统",
          "美睫店预约系统",
          "美甲店预约系统",
          "美容配套管理",
          "美容院薪水系统",
          "beauty centre system Malaysia",
          "beauty salon booking system",
        ],
      },
      category: "美容中心预约、配套和疗程记录",
      eyebrow: "美容中心预约系统",
      heading: "帮你留住\u200b回头客的\u200b*美容中心系统*",
      intro: "专为马来西亚美容中心而设：预约、配套、面部图、员工薪水和 WhatsApp 提醒，iPad、手机、电脑都能用。",
      heroBadge: "配套次数随时追踪",
      whoFor: ["美容中心", "Facial 和护肤", "美睫绣眉", "美甲店", "纤体中心", "医美中心", "新娘化妆"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有自己的账号",
        inventory: "库存追踪",
        payroll: "薪水计算",
        reports: "报表 100 毫秒内出来",
      },
      spotlights: {
        packages: {
          eyebrow: "配套和疗程",
          title: "每个配套、每次疗程，都有追踪",
          points: ["每次来都显示剩余次数", "预付储值和会员价", "肤况记录和过敏", "该再预约时自动提醒"],
          badges: ["剩余次数", "提醒已发出"],
        },
        staff: {
          eyebrow: "员工账号和薪水",
          title: "每位美容师都有自己的账号",
          points: [
            "美容师自己看、自己管预约",
            "iPhone、Android、iPad、电脑都能用",
            "薪水自动计算",
            "底薪、佣金和津贴",
          ],
        },
        faceChart: {
          eyebrow: "面部图和同意书",
          title: "标记肤况、加照片、签名，一次搞定",
          points: ["用触控笔在面部图上标记", "前后对比照片", "每次疗程的护理记录", "顾客电子签名同意书"],
        },
        pos: {
          eyebrow: "POS 和佣金",
          title: "用配套结账，按一下就好",
          points: ["扣除配套次数", "疗程和产品一张单", "按美容师计算佣金", "现金、刷卡、DuitNow QR 和电子钱包"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫一扫送货单，库存自动更新。",
          points: ["AI 读出每一项产品", "按疗程自动扣用量", "每笔库存变动都有追踪", "过期和补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "美容中心报表 100 毫秒内出来",
          points: ["配套销售和已用次数", "按美容师看业绩", "最受欢迎的疗程", "就算有几年的资料也不会 lag"],
        },
      },
      modules: {
        calendar: "预约日历",
        whatsapp: "自动 WhatsApp 提醒",
        packages: "配套和疗程",
        customers: "顾客资料和肤况记录",
        faceChart: "面部图和电子签名",
        profiles: "员工账号和自己的预约",
        pos: "POS 和零售",
        commission: "员工佣金",
        payroll: "薪水计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内出来",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机、电脑",
      },
      faqs: [
        {
          q: "美容中心预约系统收费多少？",
          a: "月费 RM {price} 起。新美容中心前 {months} 个月免费，包安装和员工培训。",
        },
        {
          q: "可以追踪疗程配套和次数吗？",
          a: "可以。你可以卖配套和预付储值，系统会扣除每次疗程，每次来都显示余额。",
        },
        {
          q: "可以保存面部图和前后对比照片吗？",
          a: "可以。美容师可以在面部图上标记，加上照片和护理记录，顾客也可以直接在 iPad 上签同意书。",
        },
        {
          q: "会自动发 WhatsApp 提醒吗？",
          a: "会。预约确认和提醒会自动用 WhatsApp 发出，顾客按一下就能确认或改期。",
        },
        {
          q: "每位美容师可以有自己的账号吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登入，查看和管理自己的预约，而且只看得到职位权限允许的内容。",
        },
        {
          q: "会算薪水和佣金吗？",
          a: "会。疗程、配套和产品销售的佣金自动计算，每月薪水再加上每位员工的底薪和津贴。",
        },
        {
          q: "可以用 iPad 吗？",
          a: "可以。Techub 跨平台：iPad 和 Android 平板、手机和电脑都能用。",
        },
        {
          q: "怎样预约 Demo？",
          a: "WhatsApp {phone} 或发电邮到 {email}，我们会免费 Demo 美容中心系统给你看。",
        },
      ],
      demoMessage: "Hi Techub，我想了解一下美容中心预约系统，可以安排免费 Demo 吗？",
    },

    spa: {
      meta: {
        title: "马来西亚 SPA 预约系统 | 按摩师、房间、配套和薪水",
        socialTitle: "马来西亚 SPA 预约系统 | Techub Software",
        description:
          "马来西亚 SPA 和按摩预约系统：按摩师和房间安排、自动 WhatsApp 提醒、配套和会员、员工账号和薪水、POS、库存追踪，报表 100 毫秒内出来。iPad、手机、电脑都能用。月费 RM {price} 起，前 {months} 个月免费。",
        keywords: [
          "SPA预约系统",
          "马来西亚SPA系统",
          "SPA管理系统",
          "按摩预约系统",
          "按摩店系统",
          "脚底按摩中心系统",
          "养生中心系统",
          "按摩师排班系统",
          "SPA薪水系统",
          "SPA会员系统",
          "spa booking system Malaysia",
          "massage booking system",
        ],
      },
      category: "SPA 和按摩预约、房间和会员",
      eyebrow: "SPA 预约系统",
      heading: "前台轻松，按摩师\u200b*预约爆满*",
      intro: "专为马来西亚 SPA 而设：按摩师、房间、配套、薪水和 WhatsApp 提醒，iPad、手机、电脑都能用。",
      heroBadge: "已在 WhatsApp 确认",
      whoFor: ["SPA 中心", "按摩中心", "脚底按摩", "养生中心", "酒店和度假村 SPA", "情侣 SPA"],
      highlights: {
        notify: "自动通知顾客",
        platform: "跨平台",
        profiles: "每位员工都有自己的账号",
        inventory: "库存追踪",
        payroll: "薪水计算",
        reports: "报表 100 毫秒内出来",
      },
      spotlights: {
        staff: {
          eyebrow: "员工账号和薪水",
          title: "每位按摩师都有自己的账号",
          points: [
            "按摩师自己看、自己管预约",
            "iPhone、Android、iPad、电脑都能用",
            "薪水自动计算",
            "底薪、佣金和津贴",
          ],
        },
        packages: {
          eyebrow: "配套和会员",
          title: "剩余次数和余额，随时更新",
          points: ["配套和预付储值", "每次来都显示剩余次数", "力度和精油喜好", "生日和再预约提醒"],
          badges: ["剩余次数", "下次已预约"],
        },
        treatmentMap: {
          eyebrow: "疗程部位图和签名",
          title: "手绘标出重点部位",
          points: ["用触控笔在人体图上标记", "按摩师备注，下次参考", "健康申报和同意书", "顾客电子签名"],
        },
        pos: {
          eyebrow: "POS 和佣金",
          title: "结账和佣金，一次搞定",
          points: ["疗程、配套和零售", "每位按摩师的佣金自动算", "现金、刷卡、DuitNow QR 和电子钱包", "每日销售报表"],
        },
        stock: {
          eyebrow: "AI 库存追踪",
          title: "扫一扫送货单，库存自动更新。",
          points: ["AI 读出每一项产品", "精油和磨砂膏按疗程自动扣", "每笔库存变动都有追踪", "智能补货提醒"],
        },
        reports: {
          eyebrow: "详细报表",
          title: "SPA 报表 100 毫秒内出来",
          points: [
            "按摩师工作量和房间使用率",
            "已卖出的配套和会员",
            "最受欢迎的疗程",
            "就算有几年的资料也不会 lag",
          ],
        },
        permissions: {
          eyebrow: "员工和权限管理",
          title: "团队管理，一手掌握",
          points: ["老板、经理、按摩师和前台角色", "打折要经理批准", "按分店控制权限", "完整操作记录"],
        },
      },
      modules: {
        scheduling: "按摩师和房间安排",
        whatsapp: "自动 WhatsApp 提醒",
        packages: "配套和会员",
        group: "情侣和团体预约",
        treatmentMap: "疗程部位图和电子签名",
        profiles: "员工账号和自己的预约",
        pos: "POS 和零售",
        commission: "按摩师佣金",
        payroll: "薪水计算",
        ai: "AI 库存管理",
        inventory: "库存追踪",
        einvoice: "LHDN 电子发票",
        reports: "报表 100 毫秒内出来",
        printing: "收据打印",
        permissions: "权限管理",
        devices: "跨平台：iPad、手机、电脑",
      },
      faqs: [
        {
          q: "SPA 预约系统收费多少？",
          a: "月费 RM {price} 起。新 SPA 前 {months} 个月免费，包安装和员工培训。",
        },
        {
          q: "可以同时安排按摩师和房间吗？",
          a: "可以。每个预约都会同时排好一位按摩师和一个房间（包括情侣房），按摩师和房间都不会被重复预约。",
        },
        {
          q: "可以管理配套和会员吗？",
          a: "可以。你可以卖配套、预付储值和会员，系统会自动追踪剩余次数和余额。",
        },
        {
          q: "会自动通知顾客吗？",
          a: "会。预约确认和提醒会自动用 WhatsApp 发出，顾客按一下就能确认或改期。",
        },
        {
          q: "每位按摩师可以有自己的账号吗？",
          a: "可以。每位员工用自己的手机、iPad 或电脑登入，查看和管理自己的预约，而且只看得到职位权限允许的内容。",
        },
        {
          q: "会算薪水和佣金吗？",
          a: "会。疗程和产品销售的佣金自动计算，每月薪水再加上每位按摩师的底薪和津贴。",
        },
        {
          q: "可以追踪 SPA 库存吗？",
          a: "可以。AI 读出供应商的送货单，精油和磨砂膏按疗程自动扣，每笔库存变动都有追踪。",
        },
        {
          q: "可以用 iPad 吗？",
          a: "可以。Techub 跨平台，前台和按摩师都可以用 iPad、Android 平板、手机或电脑。",
        },
        {
          q: "怎样预约 Demo？",
          a: "WhatsApp {phone} 或发电邮到 {email}，我们会免费 Demo SPA 系统给你看。",
        },
      ],
      demoMessage: "Hi Techub，我想了解一下 SPA 预约系统，可以安排免费 Demo 吗？",
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
  shots: {
    clinicDashboard: {
      title: "iPad 上的诊所 Dashboard",
      alt: "iPad 上的 Techub 诊所管理系统，显示即时排队情况、已在 WhatsApp 确认的今日预约、营业额和库存不足提醒",
    },
    medication: {
      title: "病人记录和用药追踪",
      alt: "iPad 上的病人用药记录，显示盘尼西林过敏提醒和建议的替代药物",
    },
    bodyChart: {
      title: "手绘人体图",
      alt: "iPad 上的人体图，有医生手绘的标注和病人的电子同意签名",
    },
    clinicStock: {
      title: "药物库存和 AI 分析",
      alt: "iPad 上的诊所药物库存变动记录，附 AI 补货建议和快过期的批次",
    },
    clinicPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为医生、护士、配药员和收银员设定的权限，附操作记录",
    },
    whatsappClinic: {
      title: "WhatsApp 预约提醒",
      alt: "自动发给诊所病人的 WhatsApp 预约确认和提醒",
    },
    scanClinic: {
      title: "AI 扫描送货单",
      alt: "用手机扫描药物供应商的送货单，AI 读出每个品项、批号和有效期，并更新诊所库存",
    },
    queueTv: {
      title: "叫号显示屏",
      alt: "诊所叫号电视屏幕，用英文、马来文和中文显示正在叫 A023 到 2 号诊室",
    },
    printouts: {
      title: "收据、MC 和标签",
      alt: "Techub 诊所系统打印的收据、MC 病假单和药物标签样本",
    },
    salonCalendar: {
      title: "发廊预约日历",
      alt: "iPad 上按发型师排列的发廊预约日历，有染发、离子烫和角蛋白护发预约、walk-in 顾客和 WhatsApp 确认",
    },
    salonPos: {
      title: "发廊 POS 结账",
      alt: "iPad 上的发廊 POS 结账画面，有服务、零售产品、发型师佣金和 DuitNow QR 付款",
    },
    salonStock: {
      title: "发廊产品库存和 AI 分析",
      alt: "iPad 上的发廊产品库存变动记录，附 AI 补货建议",
    },
    salonPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为发廊老板、经理、发型师和前台设定的权限，附操作记录",
    },
    whatsappSalon: {
      title: "WhatsApp 预约提醒",
      alt: "自动发给发廊顾客的 WhatsApp 预约确认和提醒，顾客按一下就确认",
    },
    salonCustomer: {
      title: "顾客资料和染发配方",
      alt: "手机上的发廊顾客资料，有来店记录、染发配方、指定发型师和会员积分",
    },
    scanSalon: {
      title: "AI 扫描送货单",
      alt: "用手机扫描美发产品的送货单，AI 读出每个品项并更新发廊库存",
    },
    beautyCalendar: {
      title: "美容中心预约日历",
      alt: "iPad 上的美容中心预约日历，有面部护理、美睫绣眉、美甲和纤体预约，还有配套疗程",
    },
    faceChart: {
      title: "面部图、照片和同意书",
      alt: "iPad 上的面部护理图，有美容师手绘的肤况标注、前后对比照片和顾客的电子签名",
    },
    beautyPos: {
      title: "美容 POS 结账",
      alt: "iPad 上的美容中心 POS 结账画面，有疗程、配套扣次、产品和员工佣金",
    },
    beautyStock: {
      title: "美容产品库存和 AI 分析",
      alt: "iPad 上的美容中心产品库存变动记录，附 AI 补货建议",
    },
    whatsappBeauty: {
      title: "WhatsApp 预约提醒",
      alt: "自动发给美容中心顾客的 WhatsApp 预约确认和提醒，还显示配套剩余次数",
    },
    beautyPackage: {
      title: "配套和疗程记录",
      alt: "手机上的美容中心顾客资料，有面部护理和美睫配套、剩余次数、肤况记录和下次预约",
    },
    scanBeauty: {
      title: "AI 扫描送货单",
      alt: "用手机扫描美容用品的送货单，AI 读出每个品项并更新库存",
    },
    spaCalendar: {
      title: "SPA 预约日历",
      alt: "iPad 上的 SPA 预约日历，分按摩师和房间显示，有按摩、身体磨砂和情侣 SPA 预约",
    },
    bodyChartSpa: {
      title: "疗程部位图和签名",
      alt: "iPad 上的疗程部位图，有按摩师手绘的按摩部位和顾客的电子签名",
    },
    spaPos: {
      title: "SPA POS 结账",
      alt: "iPad 上的 SPA POS 结账画面，有按摩配套、零售产品、按摩师佣金和付款方式",
    },
    spaStock: {
      title: "SPA 库存和 AI 分析",
      alt: "iPad 上的 SPA 精油、磨砂膏和毛巾库存变动记录，附 AI 补货建议",
    },
    spaPermissions: {
      title: "员工权限管理",
      alt: "iPad 上按职位为 SPA 老板、经理、按摩师和前台设定的权限，附操作记录",
    },
    whatsappSpa: {
      title: "WhatsApp 预约提醒",
      alt: "自动发给 SPA 顾客的 WhatsApp 预约确认和提醒，顾客按一下就确认",
    },
    spaPackage: {
      title: "配套和会员",
      alt: "手机上的 SPA 顾客资料，有配套剩余次数、下次预约和按摩喜好",
    },
    scanSpa: {
      title: "AI 扫描送货单",
      alt: "用手机扫描 SPA 用品的送货单，AI 读出每个品项并更新库存",
    },
    permissionsDesktop: {
      title: "电脑上的员工权限管理",
      alt: "电脑浏览器里的员工职位和权限管理，附打折和退款的操作记录",
    },
    clinicDashboardDesktop: {
      title: "电脑上的 Techub Dashboard",
      alt: "电脑浏览器里的 Techub 云端 Dashboard，显示即时排队情况、今日预约、本周营业额和 AI 库存建议",
    },
    reportsClinic: {
      title: "诊所报表",
      alt: "iPad 上 100 毫秒内出来的诊所报表：已看诊病人、看诊次数、收款和各医生营业额",
    },
    reportsSalon: {
      title: "发廊报表",
      alt: "iPad 上 100 毫秒内出来的发廊销售报表：各发型师业绩、服务和零售销售额",
    },
    reportsBeauty: {
      title: "美容中心报表",
      alt: "iPad 上 100 毫秒内出来的美容中心报表：配套销售、已用次数和最受欢迎的疗程",
    },
    reportsSpa: {
      title: "SPA 报表",
      alt: "iPad 上 100 毫秒内出来的 SPA 报表：按摩师工作量、房间使用率和已卖出的配套",
    },
    staffSalon: {
      title: "发型师个人账号",
      alt: "手机上的发型师个人账号，显示今日预约、预约状态和本月佣金",
    },
    staffBeauty: {
      title: "美容师个人账号",
      alt: "手机上的美容师个人账号，显示今日预约、预约状态和本月佣金",
    },
    staffSpa: {
      title: "按摩师个人账号",
      alt: "手机上的按摩师个人账号，显示今日预约、预约状态和本月佣金",
    },
    payrollSalon: {
      title: "发廊薪水",
      alt: "iPad 上的每月薪水表，列出每位发型师的底薪、销售佣金、津贴和实发薪水",
    },
    payrollBeauty: {
      title: "美容中心薪水",
      alt: "iPad 上的每月薪水表，列出每位美容师的底薪、销售佣金、津贴和实发薪水",
    },
    payrollSpa: {
      title: "SPA 薪水",
      alt: "iPad 上的每月薪水表，列出每位按摩师的底薪、销售佣金、津贴和实发薪水",
    },
    eInvoice: {
      title: "LHDN 电子发票",
      alt: "通过 LHDN MyInvois 验证的电子发票，附唯一识别码和 QR 码",
    },
    erpDesktop: {
      title: "定制 ERP 系统",
      alt: "定制 ERP Dashboard 示例，有销售、采购、库存、会计和人事模块",
    },
    plateScanner: {
      title: "车牌识别系统",
      alt: "车牌识别系统示例：在闸门读取车牌，并记录每次进出",
    },
    objectDetection: {
      title: "AI 物体识别",
      alt: "AI 物体识别系统示例：在 CCTV 画面中标出人、安全帽、箱子和车辆",
    },
  },
};

export default zh;
