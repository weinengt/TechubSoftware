// Bahasa Melayu text for the whole site. Same keys as en.ts; see en.ts for how placeholders and *highlights* work.
import type { Dict } from "./en";

const ms: Dict = {
  ui: {
    skip: "Langkau ke kandungan",
    home: "Laman Utama",
    logoAlt: "Logo Techub Software",
    logoHome: "Laman utama Techub Software",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
    freeDemo: "Demo Percuma",
    getFreeDemo: "Dapatkan Demo Percuma",
    bookFreeDemo: "Tempah Demo Percuma",
    askDemo: "Minta demo",
    whatsappMessage: "Hai Techub Software, saya berminat dengan sistem anda. Boleh saya dapatkan demo percuma?",
    emailSubject: "Pertanyaan tentang sistem Techub",
    priceLine: "Dari RM {price}/bulan · {months} bulan percuma",
    enlarge: "Besarkan gambar",
  },

  nav: {
    useCases: "Industri",
    technology: "Teknologi",
    services: "Perkhidmatan",
    pricing: "Harga",
    contact: "Hubungi",
  },

  menu: {
    useCases: "Industri",
    otherTitle: "Jenis perniagaan lain?",
    otherText: "Kami juga membina sistem tersuai.",
  },

  // The business types with a ready system. Each has its own page.
  systems: {
    clinic: {
      label: "Klinik",
      name: "Sistem Pengurusan Klinik",
      blurb: "Rekod pesakit, penjejakan ubat, giliran dan cetakan.",
      points: [
        "Penjejakan rekod pesakit",
        "Sistem penjejakan ubat",
        "Panggilan nombor giliran di TV",
        "Sambungan mesin X-ray & pencetak",
        "Laporan terperinci di bawah 100 ms",
      ],
      cta: "Lihat sistem klinik",
    },
    salon: {
      label: "Salun Rambut",
      name: "Sistem Temujanji Salun",
      blurb: "Tempahan jurugaya, profil staf, gaji dan POS.",
      points: [
        "Notifikasi WhatsApp automatik",
        "Setiap jurugaya ada profil sendiri",
        "Penjejakan inventori & pengiraan gaji",
        "Berfungsi di iPad, telefon & PC",
        "Laporan terperinci di bawah 100 ms",
      ],
      cta: "Lihat sistem salun",
    },
    beauty: {
      label: "Pusat Kecantikan",
      name: "Sistem Temujanji Pusat Kecantikan",
      blurb: "Pakej, carta muka, gaji staf dan POS.",
      points: [
        "Penjejakan pakej & sesi",
        "Carta muka, foto & persetujuan",
        "Profil staf & pengiraan gaji",
        "Peringatan WhatsApp automatik",
        "Laporan terperinci di bawah 100 ms",
      ],
      cta: "Lihat sistem pusat kecantikan",
    },
    spa: {
      label: "Spa & Urutan",
      name: "Sistem Temujanji Spa",
      blurb: "Terapis, bilik, pakej dan gaji.",
      points: [
        "Penjadualan terapis & bilik",
        "Notifikasi WhatsApp automatik",
        "Profil staf, inventori & gaji",
        "Berfungsi di iPad, telefon & PC",
        "Laporan terperinci di bawah 100 ms",
      ],
      cta: "Lihat sistem spa",
    },
  },

  footer: {
    blurb:
      "{name} ialah syarikat perisian Malaysia. Kami membina sistem pintar berkos rendah untuk klinik, salun rambut, pusat kecantikan dan spa, serta sistem tersuai seperti ERP, pengesanan objek AI dan pengimbas nombor plat. Jaminan uptime {uptime}, dari RM {price}/bulan.",
    useCases: "Industri",
    custom: "Sistem tersuai",
    company: "Syarikat",
    about: "Tentang kami",
    services: "Perkhidmatan",
    technology: "Teknologi",
    pricing: "Harga",
    faq: "Soalan lazim",
    contact: "Hubungi kami",
    rights: "Hak cipta terpelihara.",
    tagline: "Sistem perniagaan pintar dan berkos rendah di Malaysia.",
  },

  bubble: {
    hello: "Hai! 👋",
    text: "Nak demo percuma? {months} bulan pertama percuma untuk anda.",
    chat: "Sembang dengan kami",
    close: "Tutup mesej",
    label: "Sembang dengan Techub Software di WhatsApp {phone}",
  },

  notFound: {
    title: "Halaman tidak ditemui",
    text: "Halaman yang anda cari tidak wujud.",
    back: "Kembali ke laman utama",
  },

  /* ---------- Home page ---------- */
  home: {
    meta: {
      title: "Sistem Temujanji & Klinik Malaysia | Techub Software",
      description:
        "Sistem temujanji AI Malaysia untuk klinik, salun, pusat kecantikan & spa: tempahan canggih, notifikasi WhatsApp, kawalan stok, laporan di bawah 100 ms. Uptime {uptime}. Dari RM {price}/bulan, {months} bulan percuma.",
      keywords: [
        "sistem temujanji Malaysia",
        "sistem tempahan Malaysia",
        "sistem pengurusan klinik",
        "sistem klinik",
        "sistem tempahan salon",
        "sistem pusat kecantikan",
        "sistem spa",
        "peringatan temujanji WhatsApp",
        "sistem gaji",
        "e-Invois LHDN",
        "sistem ERP Malaysia",
        "syarikat perisian Malaysia",
        "appointment system Malaysia",
        "Techub Software",
      ],
    },
    hero: {
      badge: "Sistem temujanji pilihan utama di Malaysia",
      title: "Sistem tempahan canggih dengan *integrasi AI*",
      intro:
        "Kemas kini masa nyata, notifikasi WhatsApp dan kawalan stok pada pangkalan data gred perusahaan, dengan uptime {uptime} dan kelajuan yang dijamin.",
      secondary: "Terokai industri",
      note: "{months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
      statUptime: "Uptime",
      statReports: "Laporan dalam",
      statReportsValue: "<100 ms",
      statFrom: "Dari",
      perMonth: "/bln",
      deviceBadge: "Berasaskan awan · iPad, telefon & PC",
    },
    highlights: {
      eyebrow: "Kenapa Techub",
      title: "Pantas, pintar dan *sentiasa dalam talian*",
      items: {
        booking: { title: "Tempahan canggih", text: "Staf, bilik, perkhidmatan dan walk-in dalam satu kalendar." },
        ai: { title: "Integrasi AI", text: "AI membaca nota penghantaran dan meramal keperluan stok." },
        uptime: { title: "Uptime {uptime}", text: "Sistem anda sentiasa dalam talian, dijamin." },
        database: { title: "Pangkalan data gred perusahaan", text: "NoSQL berindeks pada pelayan gred perusahaan." },
        speed: { title: "Kelajuan terjamin", text: "Laporan terperinci di bawah 100 ms." },
        realtime: { title: "Kemas kini masa nyata", text: "Semua peranti dikemas kini serta-merta." },
        whatsapp: { title: "Notifikasi WhatsApp", text: "Pengesahan dan peringatan dihantar bagi pihak anda." },
        stock: { title: "Kawalan stok", text: "Setiap barang masuk dan keluar dijejak." },
      },
    },
    softwareName: "Sistem Pengurusan Temujanji Techub",
    softwareCategory: "Penjadualan temujanji dan pengurusan perniagaan",
    useCasesListName: "Sistem Techub Software mengikut industri",
    servicesListName: "Perkhidmatan Techub Software",
  },

  about: {
    eyebrow: "Tentang Techub",
    title: "Perisian Malaysia, *mudah dan mampu milik*",
    intro:
      "Kami membina sistem yang membantu perniagaan menerima tempahan, melayan pelanggan dan mengurus stok. Kemudian, kami sediakan semuanya untuk anda.",
    values: {
      cost: { title: "Kos rendah", text: "Dari RM {price}/bulan. Penyesuaian dari RM {custom}, mengikut keperluan anda." },
      online: { title: "Sentiasa dalam talian", text: "Jaminan uptime {uptime}, dengan sandaran pelbagai rantau." },
      done: { title: "Kami uruskan", text: "Kami pasang sistem, sambungkan perkakasan dan latih staf anda." },
      custom: { title: "Ikut cara anda", text: "Kami sesuaikan borang, aliran kerja, laporan dan cetakan." },
    },
  },

  uptime: {
    label: "jaminan uptime",
    text: "Secara purata, sistem tergendala kurang daripada 22 minit sebulan.",
    chips: ["Pelayan di Malaysia", "Dipantau", "Sandaran disulitkan"],
  },

  services: {
    eyebrow: "Perkhidmatan kami",
    title: "Cara kami membantu anda",
    intro: "Sistem siap guna atau dibina khas untuk anda. Kami sediakan semuanya dan latih pasukan anda.",
    items: {
      systems: { title: "Sistem siap guna", text: "Sistem temujanji untuk klinik, salun, pusat kecantikan dan spa." },
      custom: {
        title: "Pembangunan sistem tersuai",
        text: "ERP, pengesanan objek AI, pengimbas nombor plat dan banyak lagi. Penyesuaian dari RM {custom}.",
      },
      hardware: {
        title: "Pemasangan perkakasan",
        text: "Pencetak label, sistem panggilan nombor giliran, mesin X-ray dan banyak lagi, dipasang dan disambungkan.",
      },
      support: { title: "Latihan & sokongan", text: "Pemasangan dan latihan staf percuma, kemudian sokongan tempatan melalui WhatsApp." },
    },
    howTitle: "Cara kami bekerja",
    howText: "Penyesuaian bermula dari RM {custom}, mengikut keperluan anda.",
    howCta: "Bincang keperluan anda",
    howMessage: "Hai Techub, saya nak bincang tentang sistem tersuai.",
    steps: ["Konsultasi", "Penyesuaian", "Pasang & latih", "Mula guna"],
    chat: {
      name: "Sokongan Techub",
      status: "dalam talian",
      question: "Hai, boleh tolong pasangkan pencetak label baharu kami?",
      answer: "Boleh! Kami akan pasang dan tunjukkan cara guna kepada staf anda. 👍",
      thanks: "Terima kasih! 🙏",
    },
  },

  useCases: {
    eyebrow: "Industri",
    title: "Sedia untuk perniagaan anda",
    intro: "Tekan jenis perniagaan untuk melihat sistemnya di iPad dan telefon.",
    tabsLabel: "Industri",
  },

  custom: {
    eyebrow: "Sistem tersuai",
    title: "Perlukan sistem lain? *Kami binakan.*",
    intro: "Selain sistem temujanji, kami membina sistem tersuai untuk apa jua perniagaan. Penyesuaian dari RM {custom}, mengikut keperluan anda.",
    items: {
      erp: { title: "Sistem ERP", text: "Jualan, pembelian, inventori, perakaunan dan sumber manusia dalam satu sistem." },
      detection: { title: "Pengesanan objek AI", text: "Kamera yang mengesan orang, kenderaan, peralatan keselamatan dan objek secara automatik." },
      plate: { title: "Pengimbas nombor plat", text: "Membaca nombor plat kereta di pintu pagar dan merekod setiap keluar masuk." },
    },
    ctaTitle: "Berminat? Beritahu kami keperluan anda.",
    ctaText: "ERP, AI, pengimbas atau sesuatu yang baharu. Kami akan cadangkan penyelesaian terbaik dan beri sebut harga.",
    cta: "WhatsApp kami",
    message: "Hai Techub, saya berminat dengan sistem tersuai (ERP, pengesanan objek AI, pengimbas nombor plat atau lain-lain).",
    email: "E-mel kami",
    emailSubject: "Pertanyaan sistem tersuai",
  },

  tech: {
    eyebrow: "Teknologi",
    title: "Teknologi gred perusahaan, *mudah digunakan*",
    intro: "Pelayan gred perusahaan di Malaysia, pangkalan data NoSQL yang pantas, AI dan WhatsApp, berfungsi bersama pada setiap peranti.",
    explore: "Terokai teknologi kami",
    items: {
      servers: {
        title: "Pelayan gred perusahaan di Malaysia",
        text: "Dihoskan pada pelayan seperti IPServerOne dan Amazon Web Services. Kami telus tentang lokasi penyimpanan data anda.",
      },
      database: { title: "Pangkalan data NoSQL pantas", text: "Data berindeks, jadi laporan terperinci dimuatkan di bawah 100 ms." },
      security: { title: "Disulitkan & disandarkan", text: "Semua data yang disimpan disulitkan, dengan sandaran berbilang lapisan merentas rantau." },
      ai: { title: "Integrasi AI", text: "AI membaca nota penghantaran, mengemas kini stok dan mencadangkan barang untuk dipesan semula." },
      realtime: { title: "Kemas kini masa nyata", text: "Perubahan terus dipaparkan pada setiap iPad, telefon dan PC." },
      whatsapp: { title: "Notifikasi WhatsApp", text: "Pengesahan tempahan dan peringatan dihantar secara automatik." },
      hardware: { title: "Sambungan pelbagai perkakasan", text: "Pencetak label, sistem panggilan nombor giliran, mesin X-ray dan banyak lagi." },
      einvoice: { title: "e-Invois LHDN", text: "e-Invois dihantar kepada LHDN melalui MyInvois." },
    },
    hub: {
      center: "Techub Cloud",
      uptime: "Uptime {uptime}",
      nodes: {
        devices: "iPad, telefon & PC",
        whatsapp: "WhatsApp",
        printers: "Pencetak label",
        caller: "Panggilan giliran",
        xray: "Mesin X-ray",
        ai: "Imbasan AI",
        einvoice: "e-Invois LHDN",
        reports: "Laporan",
      },
    },
  },

  /* ---------- Technology page ---------- */
  techPage: {
    meta: {
      title: "Teknologi | Pelayan di Malaysia, NoSQL, AI, WhatsApp & e-Invois",
      socialTitle: "Teknologi | Techub Software",
      description:
        "Teknologi {name}: pelayan gred perusahaan Malaysia (IPServerOne, Amazon Web Services), NoSQL berindeks, laporan di bawah 100 ms, sandaran disulitkan, AI, WhatsApp, e-Invois LHDN. Uptime {uptime}.",
      keywords: [
        "sistem cloud Malaysia",
        "pusat data Malaysia",
        "pangkalan data NoSQL",
        "sandaran data disulitkan",
        "kawalan stok AI",
        "imbas nota penghantaran",
        "peringatan temujanji WhatsApp",
        "e-Invois LHDN MyInvois",
        "sistem panggilan nombor giliran",
        "integrasi pencetak label",
        "integrasi mesin X-ray",
        "uptime 99.95%",
        "LHDN e-Invoice MyInvois",
      ],
    },
    crumb: "Teknologi",
    eyebrow: "Teknologi",
    title: "Teknologi gred perusahaan, *senang digunakan*",
    intro: "Pelayan gred perusahaan di Malaysia, pangkalan data NoSQL yang pantas, AI dan WhatsApp, pada apa jua peranti. Uptime {uptime} dijamin.",
    demoMessage: "Hai Techub, saya nak demo percuma dan tahu lebih lanjut tentang teknologi anda.",
    seeUseCases: "Lihat industri",
    spotlights: {
      servers: {
        eyebrow: "Pelayan gred perusahaan di Malaysia",
        title: "Data anda kekal di Malaysia, disulitkan",
        points: [
          "Pelayan gred perusahaan seperti IPServerOne dan Amazon Web Services",
          "Telus sepenuhnya: kami beritahu lokasi data anda",
          "Sandaran berbilang lapisan merentas pelbagai rantau",
          "Semua data yang disimpan disulitkan",
        ],
      },
      speed: {
        eyebrow: "Jaminan kelajuan",
        title: "Laporan terperinci di bawah 100 ms",
        points: [
          "Pangkalan data NoSQL berindeks yang dibina untuk kelajuan",
          "Laporan dimuatkan tanpa kelewatan, walaupun dengan data bertahun-tahun",
          "Pelayan di Malaysia untuk respons yang pantas",
          "Setiap laporan sedia untuk dieksport",
        ],
        badge: "Di bawah 100 ms",
      },
      realtime: {
        eyebrow: "Kemas kini masa nyata",
        title: "Satu sistem di PC, iPad dan telefon",
        points: [
          "Perubahan dipaparkan serta-merta pada setiap peranti",
          "Berfungsi di iPhone, Android, Windows dan Mac",
          "Sedia untuk lebih daripada satu cawangan",
          "Tidak perlu beli atau selenggara pelayan",
        ],
      },
      ai: {
        eyebrow: "Integrasi AI",
        title: "AI yang membaca nota penghantaran anda",
        points: [
          "Ambil gambar nota penghantaran pembekal",
          "AI membaca item, kuantiti, kelompok & tarikh luput",
          "Stok dikemas kini secara automatik",
          "Cadangan pesanan semula yang pintar",
        ],
        cta: "Tanya tentang stok AI",
        ctaMessage: "Hai Techub, saya nak tahu lebih lanjut tentang kawalan stok AI.",
      },
      whatsapp: {
        eyebrow: "Notifikasi WhatsApp",
        title: "Pelanggan dimaklumkan secara automatik",
        points: [
          "Pengesahan tempahan",
          "Peringatan sebelum setiap lawatan",
          "Sahkan atau jadualkan semula dengan satu sentuhan",
          "Kurang pelanggan tidak hadir",
        ],
        badges: ["Peringatan dihantar", "Disahkan"],
      },
      hardware: {
        eyebrow: "Sambungan pelbagai perkakasan",
        title: "Bersambung dengan perkakasan yang anda guna",
        points: [
          "Pencetak label & pencetak resit",
          "Sistem panggilan nombor giliran dengan TV & suara",
          "Mesin X-ray",
          "Pengimbas kod bar & terminal kad",
        ],
      },
      einvoice: {
        eyebrow: "e-Invois LHDN",
        title: "e-Invois sedia untuk LHDN",
        points: [
          "Keluarkan e-Invois daripada bil dan POS",
          "Dihantar kepada LHDN melalui MyInvois",
          "e-Invois yang disahkan, dengan kod QR",
          "Rekod disimpan untuk setiap invois",
        ],
      },
      security: {
        eyebrow: "Keselamatan & kawalan",
        title: "Setiap staf dapat akses yang sesuai",
        points: [
          "Kebenaran staf mengikut peranan",
          "Kelulusan pengurus untuk diskaun & bayaran balik",
          "Jejak audit penuh",
          "Data & sambungan disulitkan",
        ],
      },
    },
    infra: {
      business: "Perniagaan anda",
      devices: "iPad · Telefon · PC",
      encrypted: "Sambungan disulitkan",
      servers: "Pelayan gred perusahaan di Malaysia",
      online: "Dalam talian",
      backups: "Sandaran berbilang lapisan",
      regions: "Merentas pelbagai rantau",
      encryptedData: "Semua data tersimpan disulitkan",
    },
    uptimeEyebrow: "Kebolehpercayaan",
    uptimeTitle: "Uptime {uptime}, *dijamin*",
    uptimeIntro:
      "Tempahan, skrin giliran dan pembayaran anda sentiasa dalam talian. Ini bermakna sistem tergendala kurang daripada 22 minit sebulan secara purata.",
    uptimePoints: [
      "Pelayan gred perusahaan di Malaysia",
      "Sandaran berbilang lapisan, pelbagai rantau",
      "Semua data tersimpan disulitkan",
      "Sokongan tempatan melalui WhatsApp",
    ],
    featuresEyebrow: "Ciri-ciri",
    featuresTitle: "Semuanya dalam satu sistem",
    industries: "Lihat dalam industri anda",
    contactTitle: "Bincang sistem anda dengan kami",
    faqs: [
      {
        q: "Di mana pelayan Techub?",
        a: "Di Malaysia. Kami menggunakan pelayan gred perusahaan seperti IPServerOne dan Amazon Web Services, dan kami telus tentang lokasi penyimpanan data anda.",
      },
      {
        q: "Perlukah saya membeli pelayan?",
        a: "Tidak. Techub berasaskan awan. Anda hanya perlukan sambungan internet dan peranti seperti iPad, telefon atau PC.",
      },
      {
        q: "Bagaimana data saya dilindungi?",
        a: "Semua data yang disimpan disulitkan dan dihantar melalui sambungan yang disulitkan. Sandaran disimpan dalam berbilang lapisan merentas pelbagai rantau, kebenaran mengikut peranan mengawal apa yang boleh dilihat oleh setiap staf, dan jejak audit merekod setiap tindakan.",
      },
      {
        q: "Kenapa laporan Techub begitu pantas?",
        a: "Techub menggunakan pangkalan data NoSQL berindeks, jadi laporan terperinci pun dijana dalam masa kurang daripada 100 milisaat, tanpa kelewatan. Pelayan di Malaysia memastikan respons yang pantas untuk perniagaan Malaysia.",
      },
      {
        q: "Apakah maksud jaminan uptime {uptime}?",
        a: "Sistem tersedia sekurang-kurangnya {uptime} daripada keseluruhan masa. Ini bermakna sistem tergendala kurang daripada 22 minit sebulan secara purata.",
      },
      {
        q: "Bagaimanakah imbasan nota penghantaran AI berfungsi?",
        a: "Ambil gambar atau imbas nota penghantaran pembekal, dan AI akan membaca butiran item, kuantiti, kelompok dan tarikh luput, kemudian melaraskan stok anda secara automatik. Setiap pergerakan inventori direkodkan, jadi anda boleh menjejak stok masuk, stok keluar, pemindahan dan pelarasan.",
      },
      {
        q: "Adakah Techub menyokong e-Invois LHDN?",
        a: "Ya. e-Invois boleh dikeluarkan daripada bil dan POS, dihantar kepada LHDN melalui MyInvois dan dikongsi dengan kod QR yang disahkan.",
      },
      {
        q: "Perkakasan apa yang boleh disambungkan dengan Techub?",
        a: "Pencetak label, sistem panggilan nombor giliran, mesin X-ray, pencetak resit terma dan A4, pengimbas kod bar, terminal kad, laci wang tunai dan paparan giliran. Beritahu kami model anda dan kami akan sahkan sebelum pemasangan.",
      },
      {
        q: "Peranti apa yang boleh saya gunakan?",
        a: "Techub berfungsi merentas platform: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac. TV boleh digunakan untuk paparan nombor giliran.",
      },
    ],
  },

  /* ---------- Shared sections ---------- */
  features: {
    uptime: { title: "Jaminan uptime {uptime}", text: "Pelayan gred perusahaan di Malaysia dengan sandaran pelbagai rantau." },
    booking: { title: "Kalendar tempahan canggih", text: "Tempahan mengikut staf, bilik atau perkhidmatan, termasuk walk-in." },
    whatsapp: { title: "Notifikasi WhatsApp automatik", text: "Pengesahan, peringatan dan susulan." },
    queue: { title: "Panggilan nombor giliran", text: "Paparan TV dan pengumuman suara untuk bilik dan kaunter." },
    realtime: { title: "Kemas kini masa nyata", text: "Perubahan terus kelihatan pada setiap peranti." },
    reports: { title: "Laporan di bawah 100 ms", text: "Laporan terperinci daripada pangkalan data NoSQL berindeks." },
    ai: { title: "Kawalan stok AI", text: "AI membaca nota penghantaran, meramal stok yang hampir habis dan mencadangkan pesanan semula." },
    inventory: { title: "Penjejakan inventori", text: "Setiap stok masuk, keluar, pemindahan dan pelarasan direkodkan." },
    profiles: { title: "Profil staf", text: "Setiap staf melihat dan mengurus temujanji masing-masing." },
    payroll: { title: "Pengiraan gaji", text: "Gaji pokok, komisen dan elaun dikira untuk anda." },
    pos: { title: "POS, pakej & komisen", text: "Pembayaran, pakej prabayar dan komisen staf di satu tempat." },
    permissions: { title: "Kawalan kebenaran staf", text: "Tentukan siapa boleh lihat, ubah, beri diskaun, buat bayaran balik atau eksport." },
    einvoice: { title: "e-Invois LHDN", text: "e-Invois dihantar kepada LHDN melalui MyInvois." },
    hardware: { title: "Sambungan pelbagai perkakasan", text: "Pencetak label, sistem panggilan nombor giliran, mesin X-ray dan banyak lagi." },
    drawing: { title: "Lukisan tangan & e-tandatangan", text: "Lukis pada carta dan dapatkan persetujuan di tablet." },
    devices: { title: "Berfungsi di iPad, telefon & PC", text: "Merentas platform: iPhone, Android, Windows dan Mac." },
  },

  hardware: {
    eyebrow: "Sambungan pelbagai perkakasan",
    title: "Bersambung dengan perkakasan anda",
    intro: "Pencetak label, sistem panggilan nombor giliran, mesin X-ray dan banyak lagi. Kami pasang dan sediakan semuanya untuk anda.",
    items: {
      caller: "Sistem panggilan nombor giliran & TV",
      label: "Pencetak label",
      receipt: "Pencetak resit & A4",
      xray: "Mesin X-ray",
      scanner: "Pengimbas kod bar / QR",
      card: "Terminal kad & laci wang tunai",
      tablet: "Tablet & pen stylus",
      devices: "PC, iPad & telefon",
    },
  },

  pricing: {
    eyebrow: "Harga ringkas",
    title: "Mampu milik untuk semua perniagaan",
    offer: "Tawaran pelanggan baharu",
    plan: "Pelan Standard Techub",
    from: "dari",
    perMonth: "/ bulan",
    free: "PERCUMA untuk {months} bulan pertama bagi pengguna baharu, termasuk latihan staf dan pemasangan.",
    claim: "Dapatkan {months} Bulan Percuma",
    claimMessage: "Hai Techub, saya nak dapatkan tawaran {months} bulan percuma.",
    includedTitle: "Semuanya termasuk",
    included: [
      "Sistem temujanji untuk perniagaan anda",
      "Notifikasi WhatsApp & panggilan giliran",
      "Kawalan stok AI & penjejakan inventori",
      "Laporan terperinci di bawah 100 ms",
      "Sokongan e-Invois LHDN",
      "Berfungsi di komputer, tablet & telefon",
      "Profil staf & kawalan kebenaran",
      "Uptime {uptime} & sandaran disulitkan",
      "Pemasangan & latihan staf percuma",
      "Sokongan tempatan melalui WhatsApp",
    ],
    customTitle: "Penyesuaian",
    customFrom: "dari",
    customText: "Mengikut keperluan anda: ciri baharu, laporan, cetakan, integrasi atau sistem baharu sepenuhnya.",
    customCta: "Minta sebut harga",
    customMessage: "Hai Techub, saya perlukan sebut harga untuk sistem tersuai.",
    customEmail: "E-mel kami",
    customEmailSubject: "Sebut harga sistem tersuai",
    offerText: "Dari RM {price} sebulan. {months} bulan pertama percuma untuk pengguna baharu, termasuk pemasangan dan latihan staf.",
  },

  faq: {
    eyebrow: "Soalan Lazim",
    title: "Ada soalan? Kami ada jawapannya",
    // Home page questions. The Technology page and each system page have their own.
    items: [
      {
        q: "Apa yang Techub Software lakukan?",
        a: "Techub Software ialah syarikat perisian Malaysia. Kami membina sistem pintar berkos rendah untuk perniagaan: sistem temujanji siap guna untuk klinik, salun rambut, pusat kecantikan dan spa, serta sistem tersuai seperti ERP, pengesanan objek AI dan pengimbas nombor plat.",
      },
      {
        q: "Berapakah harganya?",
        a: "Pelan bermula dari RM {price} sebulan, dan pelanggan baharu mendapat {months} bulan pertama secara percuma, termasuk pemasangan dan latihan staf. Penyesuaian bermula dari RM {custom}, bergantung pada keperluan anda.",
      },
      {
        q: "Sepantas mana sistem ini?",
        a: "Sangat pantas. Techub menggunakan pangkalan data NoSQL berindeks pada pelayan gred perusahaan di Malaysia, jadi laporan terperinci dijana dalam masa kurang daripada 100 milisaat dan setiap peranti dikemas kini dalam masa nyata.",
      },
      {
        q: "Berapakah uptime yang dijamin?",
        a: "Kami menjamin uptime sistem {uptime}. Ini bermakna sistem tergendala kurang daripada 22 minit sebulan secara purata, jadi kaunter hadapan, skrin giliran dan tempahan anda sentiasa dalam talian.",
      },
      {
        q: "Di mana data saya disimpan, dan adakah ia selamat?",
        a: "Data anda disimpan pada pelayan gred perusahaan di Malaysia, seperti IPServerOne dan Amazon Web Services, dan kami maklumkan lokasinya kepada anda. Semua data yang disimpan disulitkan, dengan sandaran berbilang lapisan merentas pelbagai rantau.",
      },
      {
        q: "Apakah teknologi yang digunakan oleh Techub?",
        a: "Techub beroperasi di awan pada pelayan gred perusahaan di Malaysia, dengan pangkalan data NoSQL berindeks, AI yang membaca nota penghantaran dan mengurus stok, notifikasi WhatsApp automatik, e-Invois LHDN, serta sambungan ke perkakasan seperti pencetak label, sistem panggilan nombor giliran dan mesin X-ray.",
      },
      {
        q: "Adakah anda menyokong e-Invois LHDN?",
        a: "Ya. Techub menyokong e-Invois LHDN, jadi invois boleh dihantar dan disahkan melalui MyInvois.",
      },
      {
        q: "Bolehkah anda membina sistem lain, seperti ERP?",
        a: "Ya. Kami membina sistem tersuai seperti ERP, pengesanan objek AI dan pengimbas nombor plat, dan kami juga menyesuaikan sistem kami untuk perniagaan lain. WhatsApp kami di {phone} untuk berbincang tentang idea anda.",
      },
      {
        q: "Perkakasan apa yang boleh saya sambungkan?",
        a: "Pencetak label, sistem panggilan nombor giliran dan paparan giliran, mesin X-ray, pencetak resit dan A4, pengimbas kod bar, terminal kad, laci wang tunai dan tablet untuk tandatangan. Beritahu kami model anda dan kami akan sahkan sebelum pemasangan.",
      },
      {
        q: "Adakah anda menyediakan pemasangan dan latihan?",
        a: "Ya. Pemasangan, persediaan perkakasan dan latihan staf sudah termasuk untuk pelanggan baharu, dan kami terus menyokong anda melalui WhatsApp selepas sistem mula digunakan.",
      },
      {
        q: "Bolehkah ia digunakan di iPad, telefon dan komputer?",
        a: "Ya. Techub berfungsi merentas platform: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac.",
      },
      {
        q: "Bagaimana untuk menghubungi Techub Software?",
        a: "WhatsApp kami di {phone} atau e-mel {email}. Kami boleh aturkan demo sistem secara percuma untuk perniagaan anda.",
      },
    ],
  },

  contact: {
    badge: "Demo percuma · {months} bulan percuma",
    title: "Lihat Techub beroperasi di perniagaan anda",
    text: "Dari RM {price}/bulan. Termasuk pemasangan dan latihan staf.",
    whatsappLabel: "WhatsApp · balasan terpantas",
    emailLabel: "E-mel kami",
  },

  /* ---------- System pages ---------- */
  product: {
    useCases: "Industri",
    allModules: "Semua modul",
    inside: "Di dalam {product}",
    otherSystems: "Turut tersedia untuk",
    reportsBadge: "Di bawah 100 ms",
  },

  products: {
    clinic: {
      meta: {
        title: "Sistem Pengurusan Klinik Malaysia | Rekod Pesakit, Giliran & Ubat",
        socialTitle: "Sistem Pengurusan Klinik Malaysia | Techub Software",
        description:
          "Sistem pengurusan klinik Malaysia: rekod pesakit, penjejakan ubat, panggilan giliran, EMR, stok ubat AI, X-ray & pencetak, e-Invois LHDN, laporan di bawah 100 ms. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem pengurusan klinik",
          "sistem klinik",
          "sistem klinik Malaysia",
          "perisian klinik",
          "sistem EMR Malaysia",
          "sistem rekod pesakit",
          "sistem penjejakan ubat",
          "sistem panggilan nombor giliran klinik",
          "e-Invois LHDN klinik",
          "sistem klinik am",
          "sistem klinik pergigian",
          "clinic management system Malaysia",
          "clinic software",
        ],
      },
      category: "Pengurusan klinik, EMR dan giliran pesakit",
      eyebrow: "Sistem Pengurusan Klinik",
      heading: "*Sistem klinik* pintar untuk rawatan lebih pantas dan selamat",
      intro: "Rekod pesakit, penjejakan ubat, giliran, bil dan stok. Di iPad, telefon dan PC.",
      heroBadge: "Uptime {uptime}",
      whoFor: [
        "Klinik am",
        "Klinik pergigian",
        "Klinik pakar",
        "Klinik estetik",
        "Fisioterapi",
        "Perubatan tradisional Cina",
        "Kumpulan berbilang cawangan",
      ],
      highlights: {
        records: "Penjejakan rekod pesakit",
        medication: "Penjejakan ubat",
        queue: "Panggilan nombor giliran",
        hardware: "Sambungan X-ray & pencetak",
        einvoice: "e-Invois LHDN",
        reports: "Laporan di bawah 100 ms",
      },
      spotlights: {
        queue: {
          eyebrow: "Panggilan nombor giliran",
          title: "Panggil pesakit seterusnya sekali sentuh",
          points: [
            "Paparan TV dengan pengumuman suara",
            "Bilik, farmasi & kaunter bayaran",
            "Bahasa Inggeris, Melayu & Cina",
            "Penantian lebih tenang dan singkat",
          ],
        },
        records: {
          eyebrow: "Rekod pesakit & penjejakan ubat",
          title: "Setiap rekod pesakit dan ubat, dijejak",
          points: [
            "Rekod pesakit dengan sejarah lawatan penuh",
            "Penjejakan ubat untuk setiap pesakit",
            "Amaran alahan sebelum memberi preskripsi",
            "Kelompok & tarikh luput bagi setiap ubat yang didispens",
          ],
        },
        drawing: {
          eyebrow: "Lukisan tangan & e-tandatangan",
          title: "Lukis, buat catatan dan tandatangan di tablet",
          points: [
            "Carta badan & gigi",
            "Lukis dengan jari atau pen stylus",
            "E-tandatangan persetujuan pesakit",
            "Disimpan dalam rekod pesakit",
          ],
        },
        hardware: {
          eyebrow: "Sambungan pelbagai perkakasan",
          title: "Bersambung dengan perkakasan klinik anda",
          points: [
            "Pencetak label untuk label ubat",
            "Sistem panggilan nombor giliran",
            "Mesin X-ray",
            "Cetakan MC (sijil cuti sakit), resit & A4",
          ],
        },
        stock: {
          eyebrow: "Kawalan stok AI",
          title: "Imbas nota penghantaran. Stok terus dikemas kini.",
          points: [
            "AI membaca item, kelompok & tarikh luput",
            "Stok ditolak apabila ubat didispens",
            "Setiap pergerakan direkodkan",
            "Amaran stok rendah & tarikh luput",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan klinik di bawah 100 ms",
          points: [
            "Pesakit, konsultasi & kutipan",
            "Hasil mengikut doktor",
            "Diagnosis utama & tuntutan panel",
            "Tiada kelewatan, walaupun dengan rekod bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Kawalan kebenaran",
          title: "Akses yang sesuai untuk setiap staf",
          points: [
            "Peranan doktor, jururawat, farmasi & juruwang",
            "Kelulusan pengurus untuk diskaun",
            "Kawalan akses cawangan",
            "Jejak audit penuh",
          ],
        },
      },
      modules: {
        records: "Pendaftaran & rekod pesakit",
        queue: "Panggilan nombor giliran",
        whatsapp: "Makluman temujanji WhatsApp",
        emr: "Konsultasi & EMR",
        medication: "Sistem penjejakan ubat",
        drawing: "Carta badan & e-tandatangan",
        ai: "Kawalan stok ubat AI",
        inventory: "Penjejakan pergerakan inventori",
        printing: "Cetakan MC, label & resit",
        xray: "Sambungan mesin X-ray",
        billing: "Bil & tuntutan panel",
        einvoice: "e-Invois LHDN",
        reports: "Laporan di bawah 100 ms",
        permissions: "Kawalan kebenaran",
        devices: "Berfungsi di iPad, telefon & PC",
        realtime: "Kemas kini masa nyata",
      },
      faqs: [
        {
          q: "Adakah sistem klinik Techub sesuai untuk klinik kecil?",
          a: "Ya. Ia direka untuk klinik dengan seorang doktor hinggalah kumpulan berbilang cawangan. Pelan bermula dari RM {price}/bulan dan klinik baharu mendapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Bolehkah saya menjejak rekod pesakit dan ubat?",
          a: "Ya. Setiap pesakit mempunyai rekod lengkap dengan lawatan, diagnosis, preskripsi dan sejarah pendispensan ubat. Sistem penjejakan ubat memaparkan dos, kekerapan, kelompok dan amaran alahan sebelum anda memberi preskripsi.",
        },
        {
          q: "Adakah sistem klinik menyokong panggilan nombor giliran?",
          a: "Ya. Nombor giliran boleh dipaparkan di TV dan diumumkan melalui suara, untuk bilik konsultasi, kaunter farmasi dan kaunter bayaran.",
        },
        {
          q: "Bolehkah ia disambungkan ke mesin X-ray dan pencetak?",
          a: "Ya. Kami sambungkan mesin X-ray, pencetak label untuk label ubat, pencetak resit terma, pencetak A4 dan sistem panggilan nombor giliran. Beritahu kami model anda dan kami akan sahkan sebelum pemasangan.",
        },
        {
          q: "Adakah ia menyokong e-Invois LHDN?",
          a: "Ya. Sistem klinik menyokong e-Invois LHDN, jadi invois daripada bil boleh dihantar dan disahkan melalui MyInvois.",
        },
        {
          q: "Bolehkah doktor melukis pada carta badan atau gigi?",
          a: "Ya. Doktor boleh melukis dan membuat catatan pada carta dengan tangan di tablet atau skrin sentuh, dan pesakit boleh menandatangani borang persetujuan secara digital.",
        },
        {
          q: "Sepantas mana laporannya?",
          a: "Laporan terperinci dijana dalam masa kurang daripada 100 milisaat. Techub menggunakan pangkalan data NoSQL berindeks pada pelayan di Malaysia, jadi tiada kelewatan walaupun dengan rekod bertahun-tahun.",
        },
        {
          q: "Sejauh mana sistem ini boleh dipercayai?",
          a: "Kami menjamin uptime {uptime}. Data anda disimpan pada pelayan gred perusahaan di Malaysia, disulitkan, dengan sandaran berbilang lapisan merentas rantau.",
        },
        {
          q: "Bagaimana untuk mendapatkan demo?",
          a: "WhatsApp kami di {phone} atau e-mel {email}. Kami akan tunjukkan sistem klinik secara langsung, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma untuk sistem pengurusan klinik.",
    },

    salon: {
      meta: {
        title: "Sistem Temujanji Salun Malaysia | Tempahan, Profil Staf, Gaji & POS",
        socialTitle: "Sistem Temujanji Salun Malaysia | Techub Software",
        description:
          "Sistem temujanji salun rambut Malaysia: tempahan jurugaya, notifikasi WhatsApp automatik, profil staf, gaji & komisen, POS, inventori, laporan di bawah 100 ms. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem temujanji salon",
          "sistem tempahan salon",
          "sistem salon rambut",
          "sistem pengurusan salon",
          "sistem POS salon",
          "sistem gaji salon",
          "sistem komisen salon",
          "sistem tempahan kedai gunting rambut",
          "peringatan temujanji WhatsApp",
          "sistem temujanji salun",
          "salon appointment system",
          "hair salon booking system Malaysia",
        ],
      },
      category: "Tempahan salun rambut, staf, gaji dan POS",
      eyebrow: "Sistem Temujanji Salun Rambut",
      heading: "Pastikan setiap *jurugaya* penuh ditempah",
      intro: "Tempahan, notifikasi WhatsApp automatik, profil staf, gaji dan POS. Di iPad, telefon dan PC.",
      heroBadge: "Disahkan di WhatsApp",
      whoFor: [
        "Salun rambut",
        "Kedai gunting rambut",
        "Salun uniseks",
        "Studio warna & rawatan",
        "Rambut & solekan pengantin",
        "Salun berbilang cawangan",
      ],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Merentas platform",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Penjejakan inventori",
        payroll: "Pengiraan gaji",
        reports: "Laporan di bawah 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap jurugaya ada profil sendiri",
          points: [
            "Jurugaya melihat dan mengurus temujanji sendiri",
            "Berfungsi di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji pokok, komisen & elaun",
          ],
        },
        customer: {
          eyebrow: "Sejarah pelanggan",
          title: "Formula warna setiap pelanggan, disimpan",
          points: ["Sejarah lawatan & jurugaya kegemaran", "Formula warna & catatan", "Foto sebelum & selepas", "Mata ganjaran ahli & pakej"],
          badges: ["Formula disimpan", "Mata ganjaran"],
        },
        pos: {
          eyebrow: "POS & komisen",
          title: "Bayaran pantas. Komisen dikira untuk anda.",
          points: [
            "Perkhidmatan dan produk runcit dalam satu bil",
            "Komisen setiap jurugaya",
            "Tunai, kad, DuitNow QR & e-dompet",
            "Pakej & diskaun ahli",
          ],
        },
        stock: {
          eyebrow: "Penjejakan inventori AI",
          title: "Imbas nota penghantaran. Stok terus dikemas kini.",
          points: [
            "AI membaca setiap baris produk",
            "Penggunaan warna & rawatan ditolak",
            "Setiap pergerakan stok dijejak",
            "Amaran pesanan semula pintar",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan salun di bawah 100 ms",
          points: [
            "Jualan mengikut jurugaya & perkhidmatan",
            "Jualan perkhidmatan vs runcit",
            "Komisen sekali imbas",
            "Tiada kelewatan, walaupun dengan data bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Kawalan staf & kebenaran",
          title: "Akses yang sesuai untuk setiap staf",
          points: [
            "Peranan pemilik, pengurus, jurugaya & penyambut tetamu",
            "Kelulusan pengurus untuk diskaun",
            "Sembunyikan nombor telefon pelanggan",
            "Jejak audit penuh",
          ],
        },
      },
      modules: {
        calendar: "Kalendar tempahan mengikut jurugaya",
        walkin: "Giliran walk-in",
        whatsapp: "Notifikasi WhatsApp automatik",
        profiles: "Profil staf & tempahan sendiri",
        customers: "Sejarah pelanggan & formula warna",
        packages: "Pakej & mata ganjaran ahli",
        pos: "POS & jualan runcit",
        commission: "Komisen jurugaya",
        payroll: "Pengiraan gaji",
        ai: "Kawalan stok AI",
        inventory: "Penjejakan inventori",
        einvoice: "e-Invois LHDN",
        reports: "Laporan di bawah 100 ms",
        printing: "Cetakan resit",
        permissions: "Kawalan kebenaran",
        devices: "Merentas platform: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapakah harga sistem temujanji salun?",
          a: "Bermula dari RM {price}/bulan. Salun baharu mendapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Adakah ia memaklumkan pelanggan secara automatik?",
          a: "Ya. Pengesahan tempahan dan peringatan dihantar melalui WhatsApp secara automatik, dan pelanggan boleh mengesahkan atau menjadualkan semula dengan satu sentuhan.",
        },
        {
          q: "Bolehkah setiap jurugaya mempunyai profil sendiri?",
          a: "Ya. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk melihat dan mengurus temujanji mereka, dan hanya melihat apa yang dibenarkan oleh peranan mereka.",
        },
        {
          q: "Adakah ia mengira gaji dan komisen?",
          a: "Ya. Komisen perkhidmatan dan jualan produk dikira daripada POS anda, dan gaji bulanan turut mengambil kira gaji pokok dan elaun setiap staf.",
        },
        {
          q: "Bolehkah ia menjejak inventori produk salun?",
          a: "Ya. AI membaca nota penghantaran pembekal, penggunaan produk ditolak bagi setiap perkhidmatan, dan setiap pergerakan stok dijejak.",
        },
        {
          q: "Bolehkah ia mengurus pelanggan walk-in?",
          a: "Ya. Pelanggan walk-in masuk ke dalam giliran bersama tempahan anda, jadi kaunter hadapan dapat melihat jurugaya mana yang akan lapang seterusnya.",
        },
        {
          q: "Bolehkah saya simpan formula warna setiap pelanggan?",
          a: "Ya. Formula warna, catatan serta foto sebelum dan selepas disimpan dalam profil pelanggan untuk lawatan seterusnya.",
        },
        {
          q: "Bolehkah ia digunakan di iPad, Android dan PC?",
          a: "Ya. Techub berfungsi merentas platform: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac.",
        },
        {
          q: "Bagaimana untuk mendapatkan demo?",
          a: "WhatsApp kami di {phone} atau e-mel {email}. Kami akan tunjukkan sistem salun secara langsung, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma untuk sistem temujanji salun.",
    },

    beauty: {
      meta: {
        title: "Sistem Temujanji Pusat Kecantikan Malaysia | Tempahan, Pakej & Gaji",
        socialTitle: "Sistem Temujanji Pusat Kecantikan Malaysia | Techub Software",
        description:
          "Sistem temujanji pusat kecantikan Malaysia: tempahan, peringatan WhatsApp automatik, pakej rawatan, carta muka & e-tandatangan, gaji, POS, laporan di bawah 100 ms. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem pusat kecantikan",
          "sistem temujanji pusat kecantikan",
          "sistem salon kecantikan",
          "sistem tempahan salon kecantikan",
          "sistem pusat rawatan muka",
          "sistem pusat estetik",
          "sistem tempahan studio bulu mata",
          "sistem tempahan salon kuku",
          "sistem pakej kecantikan",
          "sistem gaji pusat kecantikan",
          "beauty centre system",
          "beauty salon booking system",
        ],
      },
      category: "Tempahan pusat kecantikan, pakej dan rekod rawatan",
      eyebrow: "Sistem Temujanji Pusat Kecantikan",
      heading: "*Sistem pusat kecantikan* yang membawa pelanggan kembali",
      intro: "Tempahan, pakej, carta muka, gaji staf dan peringatan WhatsApp automatik. Di iPad, telefon dan PC.",
      heroBadge: "Sesi pakej dijejak",
      whoFor: [
        "Pusat kecantikan",
        "Rawatan muka & kulit",
        "Studio bulu mata & kening",
        "Salun kuku",
        "Pusat pelangsingan",
        "Pusat estetik",
        "Solekan pengantin",
      ],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Merentas platform",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Penjejakan inventori",
        payroll: "Pengiraan gaji",
        reports: "Laporan di bawah 100 ms",
      },
      spotlights: {
        packages: {
          eyebrow: "Pakej & sesi",
          title: "Setiap pakej dan sesi, dijejak",
          points: [
            "Baki sesi pada setiap lawatan",
            "Kredit prabayar & harga ahli",
            "Catatan kulit & alahan",
            "Peringatan apabila tiba masa untuk tempah semula",
          ],
          badges: ["Baki sesi", "Peringatan dihantar"],
        },
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap jurukecantikan ada profil sendiri",
          points: [
            "Jurukecantikan melihat dan mengurus temujanji sendiri",
            "Berfungsi di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji pokok, komisen & elaun",
          ],
        },
        faceChart: {
          eyebrow: "Carta muka & persetujuan",
          title: "Tanda kulit, tambah foto, dapatkan tandatangan",
          points: [
            "Lukis pada carta muka dengan pen stylus",
            "Foto sebelum & selepas",
            "Catatan rawatan setiap lawatan",
            "Persetujuan pelanggan melalui e-tandatangan",
          ],
        },
        pos: {
          eyebrow: "POS & komisen",
          title: "Bayar dengan pakej dalam satu sentuhan",
          points: [
            "Tebus sesi pakej",
            "Rawatan dan produk dalam satu bil",
            "Komisen setiap jurukecantikan",
            "Tunai, kad, DuitNow QR & e-dompet",
          ],
        },
        stock: {
          eyebrow: "Penjejakan inventori AI",
          title: "Imbas nota penghantaran. Stok terus dikemas kini.",
          points: [
            "AI membaca setiap baris produk",
            "Penggunaan ditolak bagi setiap rawatan",
            "Setiap pergerakan stok dijejak",
            "Amaran tarikh luput & pesanan semula",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan pusat kecantikan di bawah 100 ms",
          points: [
            "Jualan pakej & sesi yang ditebus",
            "Jualan mengikut jurukecantikan",
            "Rawatan paling popular",
            "Tiada kelewatan, walaupun dengan data bertahun-tahun",
          ],
        },
      },
      modules: {
        calendar: "Kalendar tempahan",
        whatsapp: "Peringatan WhatsApp automatik",
        packages: "Pakej & sesi",
        customers: "Profil pelanggan & catatan kulit",
        faceChart: "Carta muka & e-tandatangan",
        profiles: "Profil staf & tempahan sendiri",
        pos: "POS & jualan runcit",
        commission: "Komisen staf",
        payroll: "Pengiraan gaji",
        ai: "Kawalan stok AI",
        inventory: "Penjejakan inventori",
        einvoice: "e-Invois LHDN",
        reports: "Laporan di bawah 100 ms",
        printing: "Cetakan resit",
        permissions: "Kawalan kebenaran",
        devices: "Merentas platform: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapakah harga sistem temujanji pusat kecantikan?",
          a: "Bermula dari RM {price}/bulan. Pusat kecantikan baharu mendapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Bolehkah ia menjejak pakej dan sesi rawatan?",
          a: "Ya. Jual pakej dan kredit prabayar, dan sistem akan menolak setiap sesi serta menunjukkan baki pada setiap lawatan.",
        },
        {
          q: "Bolehkah saya simpan carta muka serta foto sebelum dan selepas?",
          a: "Ya. Jurukecantikan boleh melukis pada carta muka, menambah foto dan catatan rawatan, dan pelanggan menandatangani borang persetujuan di iPad.",
        },
        {
          q: "Adakah ia menghantar peringatan WhatsApp secara automatik?",
          a: "Ya. Pengesahan tempahan dan peringatan dihantar melalui WhatsApp secara automatik, dan pelanggan boleh mengesahkan atau menjadualkan semula dengan satu sentuhan.",
        },
        {
          q: "Bolehkah setiap jurukecantikan mempunyai profil sendiri?",
          a: "Ya. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk melihat dan mengurus temujanji mereka, dan hanya melihat apa yang dibenarkan oleh peranan mereka.",
        },
        {
          q: "Adakah ia mengira gaji dan komisen?",
          a: "Ya. Komisen rawatan, pakej dan jualan produk dikira secara automatik, dan gaji bulanan turut mengambil kira gaji pokok dan elaun setiap staf.",
        },
        {
          q: "Bolehkah saya menggunakannya di iPad?",
          a: "Ya. Techub berfungsi merentas platform: tablet iPad dan Android, telefon dan komputer.",
        },
        {
          q: "Bagaimana untuk mendapatkan demo?",
          a: "WhatsApp kami di {phone} atau e-mel {email}. Kami akan tunjukkan sistem pusat kecantikan secara langsung, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma untuk sistem temujanji pusat kecantikan.",
    },

    spa: {
      meta: {
        title: "Sistem Temujanji Spa Malaysia | Terapis, Bilik, Pakej & Gaji",
        socialTitle: "Sistem Temujanji Spa Malaysia | Techub Software",
        description:
          "Sistem temujanji spa & urutan Malaysia: jadual terapis & bilik, peringatan WhatsApp automatik, pakej & keahlian, gaji staf, POS, inventori, laporan di bawah 100 ms. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem spa",
          "sistem temujanji spa",
          "sistem tempahan spa",
          "sistem pengurusan spa",
          "sistem tempahan urutan",
          "sistem pusat refleksologi",
          "sistem pusat kesejahteraan",
          "jadual terapis",
          "sistem gaji spa",
          "sistem keahlian spa",
          "spa booking system Malaysia",
          "spa management software",
        ],
      },
      category: "Tempahan spa dan urutan, bilik dan keahlian",
      eyebrow: "Sistem Temujanji Spa",
      heading: "Kaunter hadapan tenang, terapis *penuh ditempah*",
      intro: "Terapis, bilik, pakej, gaji dan peringatan WhatsApp automatik. Di iPad, telefon dan PC.",
      heroBadge: "Disahkan di WhatsApp",
      whoFor: ["Spa harian", "Pusat urutan", "Refleksologi kaki", "Pusat kesejahteraan", "Spa hotel & resort", "Spa pasangan"],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Merentas platform",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Penjejakan inventori",
        payroll: "Pengiraan gaji",
        reports: "Laporan di bawah 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap terapis ada profil sendiri",
          points: [
            "Terapis melihat dan mengurus temujanji sendiri",
            "Berfungsi di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji pokok, komisen & elaun",
          ],
        },
        packages: {
          eyebrow: "Pakej & keahlian",
          title: "Sesi dan baki sentiasa terkini",
          points: [
            "Pakej & kredit prabayar",
            "Baki sesi pada setiap lawatan",
            "Pilihan tekanan urutan & minyak",
            "Peringatan hari jadi & tempahan semula",
          ],
          badges: ["Baki sesi", "Lawatan seterusnya ditempah"],
        },
        treatmentMap: {
          eyebrow: "Peta rawatan & tandatangan",
          title: "Tanda kawasan fokus dengan tangan",
          points: [
            "Lukis pada peta badan dengan pen stylus",
            "Catatan terapis untuk sesi akan datang",
            "Akuan kesihatan & persetujuan",
            "E-tandatangan pelanggan",
          ],
        },
        pos: {
          eyebrow: "POS & komisen",
          title: "Bayaran dan komisen di satu tempat",
          points: [
            "Rawatan, pakej & runcit",
            "Komisen setiap terapis",
            "Tunai, kad, DuitNow QR & e-dompet",
            "Laporan jualan harian",
          ],
        },
        stock: {
          eyebrow: "Penjejakan inventori AI",
          title: "Imbas nota penghantaran. Stok terus dikemas kini.",
          points: [
            "AI membaca setiap baris produk",
            "Minyak & skrub ditolak bagi setiap rawatan",
            "Setiap pergerakan stok dijejak",
            "Amaran pesanan semula pintar",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan spa di bawah 100 ms",
          points: [
            "Penggunaan terapis & penghunian bilik",
            "Pakej & keahlian yang dijual",
            "Rawatan paling popular",
            "Tiada kelewatan, walaupun dengan data bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Kawalan staf & kebenaran",
          title: "Pasukan anda, sentiasa terkawal",
          points: [
            "Peranan pemilik, pengurus, terapis & penyambut tetamu",
            "Kelulusan pengurus untuk diskaun",
            "Kawalan akses cawangan",
            "Jejak audit penuh",
          ],
        },
      },
      modules: {
        scheduling: "Penjadualan terapis & bilik",
        whatsapp: "Peringatan WhatsApp automatik",
        packages: "Pakej & keahlian",
        group: "Tempahan pasangan & kumpulan",
        treatmentMap: "Peta rawatan & e-tandatangan",
        profiles: "Profil staf & tempahan sendiri",
        pos: "POS & jualan runcit",
        commission: "Komisen terapis",
        payroll: "Pengiraan gaji",
        ai: "Kawalan stok AI",
        inventory: "Penjejakan inventori",
        einvoice: "e-Invois LHDN",
        reports: "Laporan di bawah 100 ms",
        printing: "Cetakan resit",
        permissions: "Kawalan kebenaran",
        devices: "Merentas platform: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapakah harga sistem temujanji spa?",
          a: "Bermula dari RM {price}/bulan. Spa baharu mendapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Bolehkah saya menjadualkan terapis dan bilik sekali gus?",
          a: "Ya. Setiap tempahan menetapkan seorang terapis dan sebuah bilik, termasuk bilik pasangan, jadi tiada tempahan bertindih untuk terapis mahupun bilik.",
        },
        {
          q: "Bolehkah saya mengurus pakej dan keahlian?",
          a: "Ya. Jual pakej, kredit prabayar dan keahlian, dan sistem akan menjejak baki sesi serta baki kredit secara automatik.",
        },
        {
          q: "Adakah ia memaklumkan pelanggan secara automatik?",
          a: "Ya. Pengesahan tempahan dan peringatan dihantar melalui WhatsApp secara automatik, dan pelanggan boleh mengesahkan atau menjadualkan semula dengan satu sentuhan.",
        },
        {
          q: "Bolehkah setiap terapis mempunyai profil sendiri?",
          a: "Ya. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk melihat dan mengurus temujanji mereka, dan hanya melihat apa yang dibenarkan oleh peranan mereka.",
        },
        {
          q: "Adakah ia mengira gaji dan komisen?",
          a: "Ya. Komisen rawatan dan jualan produk dikira secara automatik, dan gaji bulanan turut mengambil kira gaji pokok dan elaun setiap terapis.",
        },
        {
          q: "Bolehkah ia menjejak inventori spa?",
          a: "Ya. AI membaca nota penghantaran pembekal, minyak dan skrub ditolak bagi setiap rawatan, dan setiap pergerakan stok dijejak.",
        },
        {
          q: "Bolehkah saya menggunakannya di iPad?",
          a: "Ya. Techub berfungsi merentas platform, jadi kaunter hadapan dan terapis boleh menggunakan iPad, tablet Android, telefon atau komputer.",
        },
        {
          q: "Bagaimana untuk mendapatkan demo?",
          a: "WhatsApp kami di {phone} atau e-mel {email}. Kami akan tunjukkan sistem spa secara langsung, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma untuk sistem temujanji spa.",
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
  shots: {
    clinicDashboard: {
      title: "Papan pemuka klinik di iPad",
      alt: "Sistem pengurusan klinik Techub di iPad yang memaparkan giliran semasa, temujanji hari ini yang disahkan melalui WhatsApp, pendapatan dan amaran stok rendah",
    },
    medication: {
      title: "Rekod pesakit & penjejakan ubat",
      alt: "Sejarah ubat pesakit di iPad dengan amaran alahan penisilin dan cadangan ubat alternatif",
    },
    bodyChart: {
      title: "Carta badan lukisan tangan",
      alt: "Carta badan di iPad dengan catatan yang dilukis tangan oleh doktor dan tandatangan persetujuan digital pesakit",
    },
    clinicStock: {
      title: "Stok ubat & analisis AI",
      alt: "Log pergerakan stok ubat klinik di iPad dengan cadangan pesanan semula daripada AI dan kelompok ubat yang hampir luput",
    },
    clinicPermissions: {
      title: "Kawalan kebenaran staf",
      alt: "Kebenaran mengikut peranan untuk doktor, jururawat, farmasi dan juruwang di iPad, dengan jejak audit",
    },
    whatsappClinic: {
      title: "Peringatan temujanji WhatsApp",
      alt: "Pengesahan dan peringatan temujanji WhatsApp yang dihantar secara automatik kepada pesakit klinik",
    },
    scanClinic: {
      title: "Imbasan nota penghantaran AI",
      alt: "Telefon mengimbas nota penghantaran pembekal ubat sementara AI membaca setiap item, kelompok dan tarikh luput, lalu mengemas kini stok klinik",
    },
    queueTv: {
      title: "Paparan panggilan nombor giliran",
      alt: "Paparan TV panggilan nombor giliran klinik yang menunjukkan nombor A023 sedang dipanggil ke Bilik 2 dalam bahasa Inggeris, Melayu dan Cina",
    },
    printouts: {
      title: "Resit, MC & label",
      alt: "Contoh resit, sijil cuti sakit (MC) dan label ubat yang dicetak oleh sistem klinik Techub",
    },
    salonCalendar: {
      title: "Kalendar tempahan salun rambut",
      alt: "Kalendar temujanji salun rambut di iPad mengikut jurugaya, dengan tempahan warna rambut, rebonding dan keratin, pelanggan walk-in serta pengesahan WhatsApp",
    },
    salonPos: {
      title: "Pembayaran POS salun",
      alt: "Pembayaran POS salun rambut di iPad dengan perkhidmatan, produk runcit, komisen jurugaya dan bayaran DuitNow QR",
    },
    salonStock: {
      title: "Stok produk salun & analisis AI",
      alt: "Log pergerakan stok produk salun rambut di iPad dengan cadangan pesanan semula daripada AI",
    },
    salonPermissions: {
      title: "Kawalan kebenaran staf",
      alt: "Kebenaran mengikut peranan untuk pemilik salun, pengurus, jurugaya dan penyambut tetamu di iPad, dengan jejak audit",
    },
    whatsappSalon: {
      title: "Peringatan tempahan WhatsApp",
      alt: "Pengesahan dan peringatan tempahan WhatsApp yang dihantar secara automatik kepada pelanggan salun rambut, yang mengesahkannya dengan satu sentuhan",
    },
    salonCustomer: {
      title: "Profil pelanggan & formula warna",
      alt: "Profil pelanggan salun rambut di telefon dengan sejarah lawatan, formula warna, jurugaya kegemaran dan mata ganjaran ahli",
    },
    scanSalon: {
      title: "Imbasan nota penghantaran AI",
      alt: "Telefon mengimbas nota penghantaran produk rambut sementara AI membaca setiap item dan mengemas kini stok salun",
    },
    beautyCalendar: {
      title: "Kalendar tempahan pusat kecantikan",
      alt: "Kalendar temujanji pusat kecantikan di iPad dengan tempahan rawatan muka, bulu mata dan kening, kuku dan pelangsingan, serta sesi pakej",
    },
    faceChart: {
      title: "Carta muka, foto & persetujuan",
      alt: "Carta muka rawatan wajah di iPad dengan catatan kulit yang dilukis tangan oleh jurukecantikan, foto sebelum dan selepas serta e-tandatangan pelanggan",
    },
    beautyPos: {
      title: "Pembayaran POS kecantikan",
      alt: "Pembayaran POS pusat kecantikan di iPad dengan rawatan, penebusan pakej, produk dan komisen staf",
    },
    beautyStock: {
      title: "Stok produk kecantikan & analisis AI",
      alt: "Log pergerakan stok produk pusat kecantikan di iPad dengan cadangan pesanan semula daripada AI",
    },
    whatsappBeauty: {
      title: "Peringatan tempahan WhatsApp",
      alt: "Pengesahan dan peringatan tempahan WhatsApp yang dihantar secara automatik kepada pelanggan pusat kecantikan, berserta baki sesi pakej",
    },
    beautyPackage: {
      title: "Pakej & sejarah rawatan",
      alt: "Profil pelanggan pusat kecantikan di telefon dengan pakej rawatan muka dan bulu mata, baki sesi, catatan kulit dan temujanji seterusnya",
    },
    scanBeauty: {
      title: "Imbasan nota penghantaran AI",
      alt: "Telefon mengimbas nota penghantaran bekalan kecantikan sementara AI membaca setiap item dan mengemas kini stok",
    },
    spaCalendar: {
      title: "Kalendar tempahan spa",
      alt: "Kalendar temujanji spa di iPad mengikut terapis dan bilik, dengan tempahan urutan, skrub badan dan spa pasangan",
    },
    bodyChartSpa: {
      title: "Peta rawatan & tandatangan",
      alt: "Peta rawatan di iPad dengan kawasan urutan yang dilukis tangan oleh terapis dan tandatangan digital pelanggan",
    },
    spaPos: {
      title: "Pembayaran POS spa",
      alt: "Pembayaran POS spa di iPad dengan pakej urutan, produk runcit, komisen terapis dan pilihan pembayaran",
    },
    spaStock: {
      title: "Stok spa & analisis AI",
      alt: "Log pergerakan stok spa untuk minyak, skrub dan tuala di iPad dengan cadangan pesanan semula daripada AI",
    },
    spaPermissions: {
      title: "Kawalan kebenaran staf",
      alt: "Kebenaran mengikut peranan untuk pemilik spa, pengurus, terapis dan penyambut tetamu di iPad, dengan jejak audit",
    },
    whatsappSpa: {
      title: "Peringatan tempahan WhatsApp",
      alt: "Pengesahan dan peringatan tempahan WhatsApp yang dihantar secara automatik kepada pelanggan spa, yang mengesahkannya dengan satu sentuhan",
    },
    spaPackage: {
      title: "Pakej & keahlian",
      alt: "Profil pelanggan spa di telefon dengan baki sesi pakej, temujanji seterusnya dan pilihan urutan",
    },
    scanSpa: {
      title: "Imbasan nota penghantaran AI",
      alt: "Telefon mengimbas nota penghantaran bekalan spa sementara AI membaca setiap item dan mengemas kini stok",
    },
    permissionsDesktop: {
      title: "Kawalan kebenaran staf di PC",
      alt: "Peranan staf dan kawalan kebenaran dalam pelayar web di PC, dengan jejak audit bagi diskaun dan bayaran balik",
    },
    clinicDashboardDesktop: {
      title: "Papan pemuka Techub di PC",
      alt: "Papan pemuka awan Techub dalam pelayar web di PC yang memaparkan giliran semasa, temujanji hari ini, pendapatan mingguan dan cadangan stok daripada AI",
    },
    reportsClinic: {
      title: "Laporan klinik",
      alt: "Laporan klinik di iPad yang dijana dalam masa kurang daripada 100 ms: pesakit yang dirawat, konsultasi, kutipan dan jualan mengikut doktor",
    },
    reportsSalon: {
      title: "Laporan salun",
      alt: "Laporan jualan salun di iPad yang dijana dalam masa kurang daripada 100 ms: jualan mengikut jurugaya, perkhidmatan dan runcit",
    },
    reportsBeauty: {
      title: "Laporan pusat kecantikan",
      alt: "Laporan pusat kecantikan di iPad yang dijana dalam masa kurang daripada 100 ms: jualan pakej, sesi yang ditebus dan rawatan paling popular",
    },
    reportsSpa: {
      title: "Laporan spa",
      alt: "Laporan spa di iPad yang dijana dalam masa kurang daripada 100 ms: penggunaan terapis, penghunian bilik dan pakej yang dijual",
    },
    staffSalon: {
      title: "Profil peribadi jurugaya",
      alt: "Profil peribadi seorang jurugaya di telefon dengan temujanji hari ini berserta statusnya dan komisen bulan ini",
    },
    staffBeauty: {
      title: "Profil peribadi jurukecantikan",
      alt: "Profil peribadi seorang jurukecantikan di telefon dengan temujanji hari ini berserta statusnya dan komisen bulan ini",
    },
    staffSpa: {
      title: "Profil peribadi terapis",
      alt: "Profil peribadi seorang terapis di telefon dengan temujanji hari ini berserta statusnya dan komisen bulan ini",
    },
    payrollSalon: {
      title: "Penggajian salun",
      alt: "Senarai gaji bulanan di iPad dengan gaji pokok, komisen jualan, elaun dan gaji bersih bagi setiap jurugaya",
    },
    payrollBeauty: {
      title: "Penggajian pusat kecantikan",
      alt: "Senarai gaji bulanan di iPad dengan gaji pokok, komisen jualan, elaun dan gaji bersih bagi setiap jurukecantikan",
    },
    payrollSpa: {
      title: "Penggajian spa",
      alt: "Senarai gaji bulanan di iPad dengan gaji pokok, komisen jualan, elaun dan gaji bersih bagi setiap terapis",
    },
    eInvoice: {
      title: "e-Invois LHDN",
      alt: "e-Invois yang disahkan melalui LHDN MyInvois, dengan nombor pengenalan unik dan kod QR",
    },
    erpDesktop: {
      title: "Sistem ERP tersuai",
      alt: "Contoh papan pemuka ERP tersuai dengan modul jualan, pembelian, inventori, perakaunan dan sumber manusia",
    },
    plateScanner: {
      title: "Pengimbas nombor plat",
      alt: "Contoh sistem pengimbas nombor plat yang membaca nombor plat kereta di palang pintu masuk, dengan log keluar masuk kenderaan",
    },
    objectDetection: {
      title: "Pengesanan objek AI",
      alt: "Contoh sistem pengesanan objek AI yang menandakan orang, topi keselamatan, kotak dan kenderaan pada paparan kamera",
    },
  },
};

export default ms;
