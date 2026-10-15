// Bahasa Melayu text for the whole site. Same keys as en.ts; see en.ts for how placeholders and *highlights* work.
import type { Dict } from "./en";

const ms: Dict = {
  ui: {
    skip: "Terus ke kandungan",
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
    requestDemo: "Minta Demo",
    whatsappMessage: "Hai Techub, saya berminat dengan sistem anda. Boleh saya dapat demo percuma?",
    emailSubject: "Pertanyaan tentang sistem Techub",
    priceLine: "Dari RM {price}/bulan · {months} bulan percuma",
    livePriceLine: "Dari RM {livePrice}/bulan",
    enlarge: "Besarkan gambar",
  },

  nav: {
    useCases: "Penyelesaian",
    technology: "Teknologi",
    services: "Perkhidmatan",
    pricing: "Harga",
    contact: "Hubungi",
    blog: "Blog",
  },

  menu: {
    useCases: "Penyelesaian",
    otherTitle: "Jenis bisnes lain?",
    otherText: "Kami juga buat sistem custom.",
    all: "Lihat semua penyelesaian",
  },

  // The business types with a ready system. Each has its own page.
  systems: {
    clinic: {
      label: "Klinik",
      name: "Sistem Pengurusan Klinik",
      blurb: "Rekod pesakit & ubat, nombor giliran dan cetakan.",
      points: [
        "Rekod pesakit lengkap",
        "Sistem rekod ubat",
        "Panggil nombor giliran di TV",
        "Sambung mesin X-ray & printer",
        "Bayaran online & deposit melalui payment gateway",
        "Laporan terperinci bawah 100 ms",
        "Setiap tindakan staf direkod, data pesakit dilindungi",
      ],
      cta: "Lihat sistem klinik",
    },
    salon: {
      label: "Salon Rambut",
      name: "Sistem Booking Salon",
      blurb: "Booking ikut stylist, profil staf, gaji dan POS.",
      points: [
        "Notifikasi WhatsApp automatik",
        "Setiap stylist ada profil sendiri",
        "Pantau inventori & kira gaji",
        "Boleh guna di iPad, telefon & PC",
        "Bayaran online & deposit melalui payment gateway",
        "Deposit jadi pendapatan dengan satu klik",
        "Laporan terperinci bawah 100 ms",
        "Setiap tindakan staf direkod, data anda dilindungi",
      ],
      cta: "Lihat sistem salon",
    },
    beauty: {
      label: "Pusat Kecantikan",
      name: "Sistem Booking Pusat Kecantikan",
      blurb: "Pakej, carta muka, gaji staf dan POS.",
      points: [
        "Rekod pakej & baki sesi",
        "Carta muka, gambar & persetujuan",
        "Profil staf & kira gaji",
        "Reminder WhatsApp automatik",
        "Bayaran online & deposit melalui payment gateway",
        "Deposit jadi pendapatan dengan satu klik",
        "Laporan terperinci bawah 100 ms",
        "Setiap tindakan staf direkod, data anda dilindungi",
      ],
      cta: "Lihat sistem pusat kecantikan",
    },
    spa: {
      label: "Spa & Urutan",
      name: "Sistem Booking Spa",
      blurb: "Terapis, bilik, pakej dan gaji.",
      points: [
        "Jadual terapis & bilik",
        "Notifikasi WhatsApp automatik",
        "Profil staf, inventori & gaji",
        "Boleh guna di iPad, telefon & PC",
        "Bayaran online & deposit melalui payment gateway",
        "Deposit jadi pendapatan dengan satu klik",
        "Laporan terperinci bawah 100 ms",
        "Setiap tindakan staf direkod, data anda dilindungi",
      ],
      cta: "Lihat sistem spa",
    },
    live: {
      label: "Jualan Live",
      name: "Sistem Jualan Live",
      blurb: "Flash sale untuk ramai pembeli, stok tak terlebih jual.",
      points: [
        "Tampung ramai pembeli dengan giliran order Kafka",
        "Tak terlebih jual: stok disemak setiap order",
        "Pilih tarikh & masa jualan setiap produk",
        "Jumlah pelawat live & halaman yang mereka buka",
        "Bayaran online melalui payment gateway",
        "Laporan canggih, dari RM {livePrice}/bulan",
        "Setiap tindakan staf direkod, data anda dilindungi",
      ],
      cta: "Lihat sistem jualan live",
    },
  },

  footer: {
    blurb:
      "{name} ialah syarikat perisian yang berpangkalan di Malaysia. Kami bina sistem pintar dengan kos rendah untuk klinik, salon rambut, pusat kecantikan, spa dan penjual live di seluruh Malaysia, serta sistem custom seperti ERP, AI pengesanan objek dan scanner nombor plat. Jaminan uptime {uptime}, dari RM {price}/bulan.",
    useCases: "Penyelesaian",
    custom: "Sistem custom",
    company: "Syarikat",
    about: "Tentang kami",
    services: "Perkhidmatan",
    technology: "Teknologi",
    pricing: "Harga",
    faq: "Soalan lazim",
    blog: "Blog",
    contact: "Hubungi kami",
    rights: "Hak cipta terpelihara.",
    tagline: "Sistem bisnes pintar dan kos rendah di Malaysia.",
  },

  bubble: {
    hello: "Hai! 👋",
    text: "Nak demo percuma? {months} bulan pertama percuma untuk anda.",
    liveText: "Nak tengok Sistem Jualan Live? Minta demo di WhatsApp.",
    chat: "Chat dengan kami",
    close: "Tutup mesej",
    label: "Chat dengan Techub Software di WhatsApp {phone}",
  },

  notFound: {
    title: "Halaman tidak dijumpai",
    text: "Maaf, halaman yang anda cari tidak wujud.",
    back: "Kembali ke laman utama",
  },

  /* ---------- Home page ---------- */
  home: {
    meta: {
      title: "Sistem Temujanji & Booking Malaysia | Techub Software",
      description:
        "Sistem temujanji dan booking AI untuk klinik, salon, pusat kecantikan dan spa di Malaysia. Reminder WhatsApp, uptime {uptime}. Dari RM {price}/bulan, {months} bulan percuma.",
      keywords: [
        "sistem tempahan online",
        "aplikasi temujanji",
        "sistem temujanji Malaysia",
        "sistem booking Malaysia",
        "sistem booking online",
        "sistem pengurusan klinik",
        "sistem klinik Malaysia",
        "sistem booking salon",
        "sistem pusat kecantikan",
        "sistem booking spa",
        "reminder temujanji WhatsApp",
        "kawalan stok AI",
        "e-Invois LHDN",
        "sistem jualan live",
        "sistem live selling Malaysia",
        "sistem ERP Malaysia",
        "syarikat perisian Malaysia",
        "appointment system Malaysia",
        "Techub Software",
      ],
    },
    hero: {
      badge: "Sistem temujanji pilihan utama di Malaysia",
      title: "Sistem booking canggih dengan *integrasi AI*",
      intro:
        "Tempahan online, update real-time, notifikasi WhatsApp dan kawalan stok, semua guna database bertaraf enterprise di Malaysia. Uptime {uptime} dan kelajuan dijamin.",
      secondary: "Lihat ikut industri",
      note: "{months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
      statUptime: "Uptime",
      statReports: "Laporan dalam",
      statReportsValue: "<100 ms",
      statFrom: "Dari",
      perMonth: "/bln",
    },
    highlights: {
      eyebrow: "Kenapa pilih Techub",
      title: "Kenapa bisnes di Malaysia *pilih Techub*",
      items: {
        booking: { title: "Booking siap bawah 10 saat", text: "Pilih perkhidmatan, staf dan masa, terus siap booking. Walk-in pun boleh." },
        realtime: { title: "Update real-time", text: "Booking atau jualan di satu peranti terus nampak di semua peranti." },
        deposit: { title: "Bayaran online & deposit", text: "Boleh guna pelbagai payment gateway. Pelanggan bayar online, duit terus masuk akaun anda." },
        whatsapp: { title: "Reminder WhatsApp", text: "Pengesahan booking dan reminder dihantar melalui WhatsApp untuk anda." },
        accounting: {
          title: "Dokumen akaun automatik",
          text: "Invois, nota kredit, nota bayaran balik dan resit rasmi siap secara automatik. Tak perlu staf akaun.",
        },
        einvoice: { title: "e-Invois LHDN", text: "e-Invois dihantar ke LHDN MyInvois, terus dari sistem." },
        inventory: { title: "Pantau inventori", text: "Stok update sendiri setiap kali jual atau guna, siap dengan amaran stok rendah." },
        reports: { title: "Laporan canggih", text: "Laporan jualan, staf, stok dan pelanggan siap bawah 100 ms." },
        permissions: { title: "Jejak aktiviti & akses", text: "Setiap tindakan staf direkod. Anda tetapkan siapa boleh bagi diskaun, buat refund atau tengok laporan." },
        devices: { title: "Semua peranti, semua platform", text: "Windows, Mac, iPad, Android dan iPhone. Guna saja peranti yang anda dah ada." },
        easy: { title: "Senang guna", text: "Skrin ringkas, staf cepat belajar. Kami setup dan latih mereka." },
        uptime: { title: "Uptime {uptime}", text: "Server enterprise di Malaysia dengan backup di beberapa lokasi." },
      },
    },
    softwareName: "Sistem Pengurusan Temujanji Techub",
    softwareCategory: "Jadual temujanji dan pengurusan bisnes",
    useCasesListName: "Penyelesaian Techub Software",
    servicesListName: "Perkhidmatan Techub Software",
  },

  demo: {
    label: "Contoh skrin: {product} sedang berjalan",
    pause: "Jeda contoh skrin",
    play: "Main contoh skrin",
    techub: "Techub",
    hub: {
      label: "Cara Techub Cloud sambungkan peranti dan servis anda",
      pause: "Jeda gambar bergerak",
      play: "Main gambar bergerak",
    },
    notes: {
      home: {
        realtime: { title: "Real-time di semua peranti", text: "Cloud · iPad, telefon & PC" },
        deposit: { title: "Deposit dibayar · RM 40", text: "Terus masuk akaun anda sendiri" },
        booking: { title: "Booking siap bawah 10 saat", text: "Balinese Massage · 90 min" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Priya tekan Confirm" },
        report: { title: "Laporan siap dalam 91 ms", text: "15,382 rekod" },
        ai: { title: "AI baca nota penghantaran", text: "6 item terus masuk stok" },
        live: { title: "1,286 orang tonton live", text: "2,418 order, tiada terlebih jual" },
      },
      clinic: {
        queue: { title: "Nombor A023 dipanggil", text: "Bilik 2 · Dr. Lim" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Ahmad tekan Confirm" },
        allergy: { title: "Alahan dikesan awal", text: "Lebih selamat: Azithromycin" },
        chart: { title: "Carta badan disimpan", text: "Lutut bengkak ~3 cm" },
        activity: { title: "Aktiviti staf direkod", text: "Juruwang disekat buka rekod" },
        deposit: { title: "Deposit dibayar · RM 50", text: "Terus masuk akaun anda" },
        stock: { title: "AI: Amoxicillin nak habis", text: "Order 500 kapsul, Khamis ni" },
        report: { title: "Laporan siap dalam 86 ms", text: "24,618 rekod" },
      },
      salon: {
        confirmed: { title: "15 daripada 17 dah sahkan", text: "Semua melalui WhatsApp" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Wen Qi tekan Confirm" },
        deposit: { title: "Deposit dibayar · RM 50", text: "Terus masuk akaun anda" },
        commission: { title: "Komisen dikira automatik", text: "Mei Fen +RM 15.00" },
        staff: { title: "App sendiri untuk stylist", text: "5 booking · komisen RM 1,086" },
        activity: { title: "Aktiviti staf direkod", text: "Export oleh Amir disekat" },
        stock: { title: "AI: Developer 6% nak habis", text: "Order 12 botol, Khamis ni" },
        payroll: { title: "Gaji sedia untuk diluluskan", text: "8 staf · RM 28,963" },
      },
      beauty: {
        packages: { title: "Sesi pakej dah ditempah", text: "Chloe Tan · sesi 4/10" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Aqilah tekan Confirm" },
        left: { title: "Baki 6 daripada 10 sesi", text: "Hydra Facial · Aqilah Razak" },
        faceChart: { title: "Carta muka disimpan", text: "T-zone berminyak · sesi 4/6" },
        deposit: { title: "Deposit dibayar · RM 30", text: "Terus masuk akaun anda" },
        activity: { title: "Aktiviti staf direkod", text: "Export oleh Nadia disekat" },
        stock: { title: "AI: Gam bulu mata nak habis", text: "Order 10 botol, Khamis ni" },
        report: { title: "Laporan siap dalam 72 ms", text: "13,940 rekod" },
      },
      spa: {
        couple: { title: "Bilik pasangan ditempah", text: "Mr & Mrs Lee · kelopak mawar" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Priya tekan Confirm" },
        package: { title: "Baki 6 daripada 10 sesi", text: "Pakej Balinese Massage" },
        map: { title: "Peta rawatan disimpan", text: "Bahu & belakang: deep tissue" },
        staff: { title: "App sendiri untuk terapis", text: "4 booking · komisen RM 812" },
        activity: { title: "Aktiviti staf direkod", text: "Telefon pelanggan disembunyi" },
        stock: { title: "AI: Body scrub nak habis", text: "Order 6 tub, Khamis ni" },
        payroll: { title: "Gaji sedia untuk diluluskan", text: "8 staf · RM 29,838" },
      },
      live: {
        visitors: { title: "1,286 orang sedang shopping", text: "7,812 pelawat malam ini" },
        buy: { title: "Beli dengan satu tekan", text: "Tudung Bawal · tinggal 58" },
        rush: { title: "412 order dalam seminit", text: "Semua diproses, 0 gagal" },
        last: { title: "Tinggal 3 sahaja", text: "Disemak lagi masa bayar" },
        stopped: { title: "186 terlebih jual dihalang", text: "Sebelum bayar, tiada caj" },
        paid: { title: "Dibayar · RM 77.80", text: "Terus masuk akaun anda" },
        receipt: { title: "Resit dihantar di WhatsApp", text: "Order #LS-24180 disahkan" },
        activity: { title: "Aktiviti staf direkod", text: "Export data pembeli disekat" },
      },
      contact: {
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Wen Qi tekan Confirm" },
        deposit: { title: "Deposit dibayar · RM 50", text: "Terus masuk akaun anda" },
        staff: { title: "App sendiri untuk staf", text: "Booking & komisen" },
        ai: { title: "AI baca nota penghantaran", text: "6 item terus masuk stok" },
      },
      erp: {
        sales: { title: "RM 486,920 bulan ini", text: "Jualan, stok & akaun" },
        approvals: { title: "4 kelulusan menunggu", text: "Lulus dengan satu tekan" },
        einvoice: { title: "e-Invois disahkan", text: "Oleh LHDN MyInvois" },
      },
      detection: {
        helmet: { title: "Tak pakai topi keledar", text: "Amaran dihantar · Zon B" },
        bay: { title: "42 daripada 60 petak penuh", text: "Parking P1 · kiraan live" },
        count: { title: "2,771 objek dijejak", text: "Orang, kereta & topi keledar" },
      },
      plate: {
        read: { title: "Plat dibaca dalam 0.18 s", text: "VKM 2318 · padanan 99.2%" },
        gate: { title: "Gate dibuka untuk penduduk", text: "Tan Wei Ming · B-12-03" },
        denied: { title: "Kereta asing tak dibenarkan", text: "PKB 8890 · tiada jemputan" },
      },
      salonDeposits: {
        paid: { title: "Deposit dibayar · RM 50", text: "Wen Qi buat booking online" },
        held: { title: "Disimpan sebagai deposit", text: "Belum dikira pendapatan" },
        convert: { title: "Tukar jadi pendapatan", text: "Satu klik lepas servis siap" },
        invoice: { title: "Invois siap untuk anda", text: "Deposit RM 50 sudah ditolak" },
        notes: { title: "Nota bayaran balik & kredit", text: "Tak perlu tahu perakaunan" },
      },
      beautyDeposits: {
        paid: { title: "Deposit dibayar · RM 30", text: "Nadia buat booking online" },
        held: { title: "Disimpan sebagai deposit", text: "Belum dikira pendapatan" },
        convert: { title: "Tukar jadi pendapatan", text: "Satu klik lepas servis siap" },
        invoice: { title: "Invois siap untuk anda", text: "Deposit RM 30 sudah ditolak" },
        notes: { title: "Nota bayaran balik & kredit", text: "Tak perlu tahu perakaunan" },
      },
      spaDeposits: {
        paid: { title: "Deposit dibayar · RM 40", text: "Priya buat booking online" },
        held: { title: "Disimpan sebagai deposit", text: "Belum dikira pendapatan" },
        convert: { title: "Tukar jadi pendapatan", text: "Satu klik lepas servis siap" },
        invoice: { title: "Invois siap untuk anda", text: "Deposit RM 40 sudah ditolak" },
        notes: { title: "Nota bayaran balik & kredit", text: "Tak perlu tahu perakaunan" },
      },
      customisation: {
        request: { title: "Pelanggan A tanya di WhatsApp", text: "Fail tuntutan untuk panel baru" },
        estimate: { title: "Anggaran AI: lebih kurang 6 jam", text: "Sebut harga jelas sebelum mula" },
        quote: { title: "RM 480 dengan pelan 48 bulan", text: "Boleh bayar ansuran" },
        testing: { title: "Ujian & integrasi percuma", text: "Disemak sebelum digunakan" },
        live: { title: "Dah boleh guna dalam sistem", text: "Export tuntutan baru, satu tekan" },
      },
      migration: {
        formats: { title: "PDF, Excel, CSV & TXT", text: "Dirancang dengan jurutera kami" },
        scan: { title: "AI baca sistem lama", text: "Halaman demi halaman, tanpa export" },
        check: { title: "Setiap rekod disemak", text: "Rekod sama digabung, ralat dibaiki" },
        done: { title: "Ikut masa, bukan saiz data", text: "143,861 rekod dipindahkan" },
      },
      email: {
        domain: { title: "Domain anda sendiri", text: "hello@demosalon.com.my" },
        phone: { title: "Di semua telefon & PC", text: "Pertanyaan baru terus masuk" },
        setup: { title: "Kami setup semuanya", text: "Domain, peti mel & peranti" },
        storage: { title: "Storan {emailStorage}", text: "RM {emailYear} setahun" },
      },
      website: {
        design: { title: "Direka untuk jenama anda", text: "Sehingga {websitePages} halaman" },
        instant: { title: "Tukar halaman serta-merta", text: "Tiada reload, tiada tunggu" },
        phone: { title: "Cantik di telefon", text: "Semua saiz skrin" },
        contact: { title: "Pelanggan cepat hubungi anda", text: "WhatsApp, booking & peta" },
        seo: { title: "Sedia untuk SEO & carian AI", text: "Dihoskan di Cloudflare" },
      },
      hub: {
        devices: { title: "Semua peranti sentiasa sync", text: "iPad, telefon & PC, real-time" },
        whatsapp: { title: "Reminder WhatsApp dihantar", text: "Pelanggan tekan Confirm" },
        printers: { title: "Label dicetak", text: "Resit, label & slip MC" },
        caller: { title: "Nombor A023 dipanggil", text: "Di skrin TV giliran" },
        xray: { title: "X-ray masuk rekod pesakit", text: "Terus dari mesin X-ray" },
        ai: { title: "AI baca nota penghantaran", text: "6 item terus masuk stok" },
        einvoice: { title: "e-Invois dihantar ke LHDN", text: "Terus dari bil" },
        reports: { title: "Laporan siap dalam 86 ms", text: "24,618 rekod" },
      },
    },
  },

  about: {
    eyebrow: "Tentang Techub",
    title: "Pilihan SME Malaysia, *mudah dan mampu milik*",
    intro:
      "Kami berpangkalan di Malaysia dan bina sistem yang bantu bisnes tempatan terima booking, layan pelanggan dan urus stok. Semua setup, kami yang uruskan untuk anda.",
    values: {
      cost: { title: "Kos rendah", text: "Dari RM {price}/bulan. Custom dari RM {custom} sejam kerja." },
      online: { title: "Sentiasa online", text: "Jaminan uptime {uptime}, dengan backup di beberapa lokasi." },
      done: { title: "Semua kami uruskan", text: "Kami pasang sistem, sambung peralatan dan latih staf anda." },
      custom: { title: "Ikut cara anda", text: "Kami custom borang, aliran kerja, laporan dan cetakan." },
    },
  },

  uptime: {
    label: "jaminan uptime",
    text: "Hampir sentiasa online, siang dan malam, sepanjang tahun.",
    chips: ["Server di Malaysia", "Sentiasa dipantau", "Backup disulitkan"],
  },

  services: {
    eyebrow: "Perkhidmatan kami",
    title: "Apa yang kami buat untuk anda",
    intro: "Sistem siap guna atau dibina khas, untuk bisnes di seluruh Malaysia. Kami setup semuanya dan latih staf anda.",
    items: {
      systems: { title: "Sistem siap guna", text: "Sistem temujanji untuk klinik, salon, pusat kecantikan dan spa, serta sistem jualan live." },
      custom: {
        title: "Bina sistem custom",
        text: "ERP, AI pengesanan objek, scanner nombor plat dan banyak lagi, dari RM {custom} sejam kerja.",
      },
      hardware: {
        title: "Pasang peralatan",
        text: "Printer label, sistem panggil nombor giliran, mesin X-ray dan banyak lagi, semua kami pasang dan sambungkan.",
      },
      support: { title: "Latihan & support", text: "Pemasangan dan latihan staf percuma, kemudian support tempatan di Malaysia melalui WhatsApp." },
    },
    howTitle: "Cara kerja kami",
    howText: "Caj ikut jam kerja, dari RM {custom} sejam. Anda dapat sebut harga yang jelas sebelum kami mula, dan ujian serta integrasi percuma.",
    howCta: "Bincang keperluan anda",
    howMessage: "Hai Techub, saya nak bincang pasal sistem custom.",
    steps: ["Konsultasi", "Ubah suai", "Pasang & latih", "Mula guna"],
    chat: {
      name: "Support Techub",
      status: "online",
      question: "Hai, boleh tolong setup printer label baru kami?",
      answer: "Boleh! Nanti kami setup dan ajar staf anda cara guna. 👍",
      thanks: "Terima kasih! 🙏",
    },
  },

  useCases: {
    eyebrow: "Penyelesaian",
    title: "Sedia untuk bisnes anda",
    intro: "Dibina untuk klinik, salon, pusat kecantikan, spa dan penjual live di Malaysia. Tekan salah satu untuk lihat sistemnya di iPad dan telefon.",
  },

  custom: {
    eyebrow: "Sistem custom",
    title: "Perlu sistem lain? *Kami boleh buat.*",
    intro: "Selain sistem temujanji, kami juga bina sistem custom untuk apa jua bisnes di Malaysia, dengan caj ikut jam kerja dari RM {custom} sejam.",
    items: {
      erp: { title: "Sistem ERP", text: "Jualan, pembelian, inventori, akaun dan HR dalam satu sistem." },
      detection: { title: "AI pengesanan objek", text: "Kamera yang boleh kesan orang, kenderaan, peralatan keselamatan dan objek secara automatik." },
      plate: { title: "Scanner nombor plat", text: "Baca nombor plat kereta di pintu pagar dan rekod setiap kenderaan keluar masuk." },
    },
    ctaTitle: "Berminat? Beritahu kami apa yang anda perlukan.",
    ctaText: "ERP, AI, scanner atau sesuatu yang baru. Kami cadangkan cara terbaik untuk bisnes anda dan bagi sebut harga.",
    cta: "WhatsApp kami",
    message: "Hai Techub, saya berminat nak buat sistem custom (ERP, AI pengesanan objek, scanner nombor plat atau lain-lain).",
    email: "Email kami",
    emailSubject: "Pertanyaan sistem custom",
  },

  tech: {
    eyebrow: "Teknologi",
    title: "Teknologi kelas enterprise, *senang guna*",
    intro: "Server enterprise di Malaysia, database NoSQL yang laju, AI dan WhatsApp, semua berfungsi bersama di setiap peranti.",
    explore: "Lihat teknologi kami",
    items: {
      servers: {
        title: "Server enterprise di Malaysia",
        text: "Hosting di Malaysia, guna server seperti IPServerOne dan Amazon Web Services. Kami telus tentang di mana data anda disimpan.",
      },
      database: { title: "Database NoSQL yang laju", text: "Data berindeks, jadi laporan terperinci siap bawah 100 ms." },
      security: { title: "Disulitkan & ada backup", text: "Database disulitkan semasa disimpan, SSL/TLS pada setiap sambungan, backup berlapis di beberapa lokasi." },
      ai: { title: "Integrasi AI", text: "AI baca nota penghantaran, update stok dan cadangkan bila perlu order semula." },
      extraction: { title: "Ekstrak data dengan AI", text: "OCR dan imbasan skrin AI bawa masuk data dari PDF dan sistem lama." },
      realtime: { title: "Update real-time", text: "Setiap perubahan terus nampak di semua iPad, telefon dan PC." },
      framework: { title: "React & Next.js", text: "Rangka kerja web moden: tukar halaman serta-merta, tanpa reload." },
      whatsapp: { title: "Notifikasi WhatsApp", text: "Pengesahan booking dan reminder dihantar secara automatik." },
      hardware: { title: "Sambung pelbagai peralatan", text: "Printer label, sistem panggil nombor giliran, mesin X-ray dan banyak lagi." },
      einvoice: { title: "e-Invois LHDN", text: "e-Invois dihantar terus ke LHDN melalui MyInvois." },
    },
    hub: {
      center: "Techub Cloud",
      uptime: "Uptime {uptime}",
      nodes: {
        devices: "iPad, telefon & PC",
        whatsapp: "WhatsApp",
        printers: "Printer label",
        caller: "Panggil giliran",
        xray: "Mesin X-ray",
        ai: "Imbas AI",
        einvoice: "e-Invois LHDN",
        reports: "Laporan",
      },
    },
  },

  /* ---------- Technology page ---------- */
  techPage: {
    meta: {
      title: "Teknologi | Server Malaysia, AI & e-Invois LHDN",
      socialTitle: "Teknologi | Techub Software",
      description:
        "Server enterprise di Malaysia (IPServerOne, AWS), backup disulitkan, laporan bawah 100 ms, kawalan stok AI, WhatsApp dan e-Invois LHDN. Uptime {uptime}.",
      keywords: [
        "sistem cloud Malaysia",
        "pusat data Malaysia",
        "server Malaysia",
        "database NoSQL",
        "backup data disulitkan",
        "kawalan stok AI",
        "imbas nota penghantaran",
        "reminder temujanji WhatsApp",
        "e-Invois LHDN MyInvois",
        "sistem nombor giliran",
        "integrasi printer label",
        "integrasi mesin X-ray",
        "uptime 99.95%",
        "LHDN e-Invoice MyInvois",
      ],
    },
    crumb: "Teknologi",
    eyebrow: "Teknologi",
    title: "Teknologi bertaraf enterprise, *mudah guna*",
    intro: "Server bertaraf enterprise di Malaysia, database NoSQL yang laju, AI dan WhatsApp, boleh guna di mana-mana peranti. Uptime {uptime} dijamin.",
    demoMessage: "Hai Techub, saya nak demo percuma dan nak tahu lebih lanjut pasal teknologi anda.",
    seeUseCases: "Lihat ikut industri",
    spotlights: {
      servers: {
        eyebrow: "Server enterprise di Malaysia",
        title: "Data anda kekal di Malaysia dan disulitkan",
        points: [
          "Server bertaraf enterprise seperti IPServerOne dan Amazon Web Services",
          "100% telus: kami beritahu di mana data anda disimpan",
          "Backup berlapis di beberapa lokasi",
          "Semua data yang disimpan disulitkan",
        ],
      },
      speed: {
        eyebrow: "Kelajuan dijamin",
        title: "Laporan terperinci siap bawah 100 ms",
        points: [
          "Database NoSQL berindeks, dibina untuk laju",
          "Laporan keluar tanpa lag, walaupun ada data bertahun-tahun",
          "Server di Malaysia untuk respons yang laju",
          "Setiap laporan sedia untuk eksport",
        ],
        badge: "Bawah 100 ms",
      },
      realtime: {
        eyebrow: "Update real-time",
        title: "Satu sistem di PC, iPad dan telefon",
        points: [
          "Perubahan terus nampak di semua peranti",
          "Boleh guna di iPhone, Android, Windows dan Mac",
          "Sedia untuk lebih dari satu cawangan",
          "Tak perlu beli atau jaga server sendiri",
        ],
      },
      ai: {
        eyebrow: "Integrasi AI",
        title: "AI yang baca nota penghantaran anda",
        points: [
          "Ambil gambar nota penghantaran (DO) pembekal",
          "AI baca item, kuantiti, batch & tarikh luput",
          "Stok update secara automatik",
          "Cadangan pintar bila perlu order stok",
        ],
        cta: "Tanya tentang stok AI",
        ctaMessage: "Hai Techub, saya nak tahu lebih lanjut pasal kawalan stok AI.",
      },
      whatsapp: {
        eyebrow: "Notifikasi WhatsApp",
        title: "Pelanggan dapat notifikasi secara automatik",
        points: [
          "Pengesahan booking",
          "Reminder sebelum setiap temujanji",
          "Sahkan atau tukar slot dengan sekali tekan",
          "Kurang kes pelanggan tak datang",
        ],
        badges: ["Reminder dihantar", "Disahkan"],
      },
      hardware: {
        eyebrow: "Sambung pelbagai peralatan",
        title: "Sambung terus dengan peralatan yang anda guna",
        points: [
          "Printer label & printer resit",
          "Sistem panggil nombor giliran dengan TV & suara",
          "Mesin X-ray",
          "Scanner barcode & mesin kad",
        ],
      },
      einvoice: {
        eyebrow: "e-Invois LHDN",
        title: "e-Invois sedia untuk LHDN",
        points: [
          "Keluarkan e-Invois terus dari bil dan POS",
          "Dihantar ke LHDN melalui MyInvois",
          "e-Invois yang disahkan, siap dengan kod QR",
          "Rekod disimpan untuk setiap invois",
        ],
      },
      extraction: {
        eyebrow: "Ekstrak data dengan AI",
        title: "AI pindahkan data anda, *halaman demi halaman*",
        points: [
          "OCR baca PDF dan dokumen yang diimbas",
          "Imbasan skrin AI untuk sistem lama yang tak boleh export",
          "Setiap medan dipadankan dan disemak oleh jurutera kami",
          "Caj ikut masa, bukan saiz data",
        ],
        cta: "Tanya pasal pindah data",
        ctaMessage: "Hai Techub, saya nak tanya tentang pindahkan data saya ke Techub.",
        badge: "Imbasan AI",
      },
      framework: {
        eyebrow: "React & Next.js",
        title: "Dibina dengan *rangka kerja web moden*",
        points: [
          "Dibina dengan React dan Next.js",
          "Tukar halaman serta-merta, tanpa reload penuh",
          "Laju di telefon, tablet dan PC",
          "Teknologi sama dengan laman web yang kami bina",
        ],
        badge: "Tanpa reload",
      },
      encryption: {
        eyebrow: "Perlindungan data",
        title: "Data anda *keutamaan kami*",
        points: [
          "Database disulitkan semasa disimpan",
          "Penyulitan SSL/TLS pada setiap sambungan",
          "Server yang dilindungi di Malaysia",
          "Kalau data bocor pun, ia tetap disulitkan",
        ],
      },
      security: {
        eyebrow: "Keselamatan & kawalan",
        title: "Setiap staf dapat akses yang sesuai",
        points: [
          "Akses staf ikut jawatan",
          "Diskaun & refund perlu kelulusan pengurus",
          "Rekod audit penuh",
          "Data & sambungan disulitkan",
        ],
      },
    },
    // Gambar cara data dilindungi: rekod di peranti anda, dihantar melalui SSL/TLS, disimpan disulitkan.
    encryption: {
      device: "Peranti anda",
      record: "Rekod pelanggan",
      tls: "Disulitkan SSL/TLS",
      server: "Server dilindungi di Malaysia",
      stored: "Database disulitkan semasa disimpan",
      leaked: "Kalau salinan bocor",
      unreadable: "Tetap disulitkan",
      // Rekod rekaan, seperti yang staf nampak di peranti mereka.
      sample: ["Nur Aisyah", "Facial · 3:00 PTG"],
    },
    infra: {
      business: "Bisnes anda",
      devices: "iPad · Telefon · PC",
      encrypted: "Sambungan disulitkan",
      servers: "Server enterprise di Malaysia",
      online: "Online",
      backups: "Backup berlapis",
      regions: "Di beberapa lokasi",
      encryptedData: "Semua data disulitkan",
    },
    uptimeEyebrow: "Boleh dipercayai",
    uptimeTitle: "Uptime {uptime}, *dijamin*",
    uptimeIntro:
      "Booking, skrin giliran dan bayaran anda hampir sentiasa online, siang dan malam.",
    uptimePoints: [
      "Server enterprise di Malaysia",
      "Backup berlapis di beberapa lokasi",
      "Semua data yang disimpan disulitkan",
      "Support tempatan di Malaysia melalui WhatsApp",
    ],
    featuresEyebrow: "Ciri-ciri",
    featuresTitle: "Semua dalam satu sistem",
    industries: "Lihat sistem untuk industri anda",
    contactTitle: "Jom bincang sistem anda dengan kami",
    faqs: [
      {
        q: "Di mana server Techub?",
        a: "Di Malaysia. Kami guna server bertaraf enterprise seperti IPServerOne dan Amazon Web Services, dan kami telus tentang di mana data anda disimpan.",
      },
      {
        q: "Saya perlu beli server sendiri?",
        a: "Tak perlu. Techub ialah sistem cloud. Anda cuma perlukan internet dan peranti seperti iPad, telefon atau PC.",
      },
      {
        q: "Macam mana data saya dilindungi?",
        a: "Database anda disulitkan semasa disimpan dan setiap sambungan guna penyulitan SSL/TLS, di server yang dilindungi di Malaysia. Backup disimpan berlapis di beberapa lokasi, akses setiap staf dikawal ikut jawatan, dan semua tindakan direkod untuk audit.",
      },
      {
        q: "Bagaimana kalau data bocor?",
        a: "Data anda tetap disulitkan. Database disulitkan semasa disimpan dan setiap sambungan dilindungi SSL/TLS, jadi data yang bocor pun tetap disulitkan. Data anda keutamaan kami.",
      },
      {
        q: "Kenapa laporan Techub sangat laju?",
        a: "Techub guna database NoSQL berindeks, jadi laporan terperinci pun siap dalam masa kurang 100 milisaat, tanpa lag. Server kami di Malaysia, jadi bisnes di seluruh Malaysia dapat respons yang laju.",
      },
      {
        q: "Techub dibina dengan teknologi apa?",
        a: "Techub dibina dengan React dan Next.js, rangka kerja web moden, dengan database NoSQL yang laju di server enterprise di Malaysia. Tukar halaman serta-merta, tanpa reload penuh.",
      },
      {
        q: "Apa maksud jaminan uptime {uptime}?",
        a: "Sistem anda online sekurang-kurangnya {uptime} daripada keseluruhan masa, jadi ia hampir sentiasa ada bila staf dan pelanggan anda perlukan.",
      },
      {
        q: "Macam mana AI baca nota penghantaran?",
        a: "Ambil gambar atau imbas nota penghantaran (DO) pembekal, dan AI akan baca item, kuantiti, batch dan tarikh luput, kemudian update stok anda secara automatik. Setiap pergerakan inventori direkod, jadi anda boleh semak stok masuk, stok keluar, pindahan dan pelarasan.",
      },
      {
        q: "Macam mana ekstrak data dengan AI berfungsi?",
        a: "Untuk pemindahan data, AI kami baca PDF dan dokumen yang diimbas dengan OCR, dan boleh imbas skrin sistem lama halaman demi halaman bila ia tak boleh export. Jurutera perisian kami padankan dan semak setiap medan sebelum data anda mula digunakan dalam Techub.",
      },
      {
        q: "Techub boleh buat e-Invois LHDN?",
        a: "Boleh. e-Invois boleh dikeluarkan dari bil dan POS, dihantar ke LHDN melalui MyInvois dan dikongsi dengan kod QR yang disahkan.",
      },
      {
        q: "Peralatan apa yang boleh disambung dengan Techub?",
        a: "Printer label, sistem panggil nombor giliran, mesin X-ray, printer resit thermal dan A4, scanner barcode, mesin kad, laci duit dan skrin giliran. Beritahu kami model anda dan kami akan sahkan dulu sebelum pasang.",
      },
      {
        q: "Peranti apa yang boleh saya guna?",
        a: "Techub boleh guna di semua peranti: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac. TV pula boleh jadi paparan nombor giliran.",
      },
    ],
  },

  /* ---------- Shared sections ---------- */
  features: {
    uptime: { title: "Jaminan uptime {uptime}", text: "Server enterprise di Malaysia dengan backup di beberapa lokasi." },
    booking: { title: "Kalendar booking canggih", text: "Booking ikut staf, bilik atau perkhidmatan, termasuk walk-in." },
    whatsapp: { title: "Notifikasi WhatsApp automatik", text: "Pengesahan, reminder dan follow-up." },
    queue: { title: "Panggil nombor giliran", text: "Paparan TV dan pengumuman suara untuk bilik dan kaunter." },
    realtime: { title: "Update real-time", text: "Setiap perubahan terus nampak di semua peranti." },
    reports: { title: "Laporan bawah 100 ms", text: "Laporan terperinci dari database NoSQL berindeks." },
    ai: { title: "Kawalan stok AI", text: "AI baca nota penghantaran, ramal stok yang hampir habis dan cadangkan order semula." },
    inventory: { title: "Pantau inventori", text: "Setiap stok masuk, keluar, pindahan dan pelarasan direkod." },
    profiles: { title: "Profil staf", text: "Setiap staf boleh tengok dan urus temujanji sendiri." },
    payroll: { title: "Kira gaji automatik", text: "Gaji asas, komisen dan elaun dikira untuk anda." },
    pos: { title: "POS, pakej & komisen", text: "Bayaran, pakej prabayar dan komisen staf di satu tempat." },
    permissions: { title: "Jejak aktiviti staf", text: "Setiap tindakan staf direkod, dan anda tetapkan siapa boleh tengok, ubah, bagi diskaun, buat refund atau eksport." },
    einvoice: { title: "e-Invois LHDN", text: "e-Invois dihantar ke LHDN melalui MyInvois." },
    hardware: { title: "Sambung pelbagai peralatan", text: "Printer label, panggil nombor giliran, mesin X-ray dan banyak lagi." },
    drawing: { title: "Lukis tangan & e-tandatangan", text: "Lukis atas carta dan dapatkan persetujuan di tablet." },
    devices: { title: "Guna di iPad, telefon & PC", text: "Semua platform: iPhone, Android, Windows dan Mac." },
  },

  hardware: {
    eyebrow: "Sambung pelbagai peralatan",
    title: "Sambung terus dengan peralatan anda",
    intro: "Printer label, sistem panggil nombor giliran, mesin X-ray dan banyak lagi. Kami pasang dan setup semuanya untuk anda.",
    items: {
      caller: "Sistem panggil nombor giliran & TV",
      label: "Printer label",
      receipt: "Printer resit & A4",
      xray: "Mesin X-ray",
      scanner: "Scanner barcode / QR",
      card: "Mesin kad & laci duit",
      tablet: "Tablet & pen stylus",
      devices: "PC, iPad & telefon",
    },
  },

  pricing: {
    eyebrow: "Harga yang jelas",
    title: "Mampu milik untuk semua bisnes di Malaysia",
    plan: "Pelan Standard Techub",
    from: "dari",
    perMonth: "/ bulan",
    perHour: "/ jam",
    plansText: "Untuk klinik, salun rambut, spa, urut dan pusat kecantikan. Bayar bulanan, atau jimat dengan pelan lebih panjang.",
    monthly: "Bulanan",
    monthlyText: "Bayar bulan ke bulan",
    planMonths: "{n} bulan",
    freeOne: "{n} bulan percuma",
    freeMany: "{n} bulan percuma",
    total: "Jumlah RM {n}",
    average: "Purata RM {n}/bulan",
    save: "Jimat RM {n}",
    recommended: "Disyorkan",
    averageLabel: "Purata",
    youPay: "Anda bayar",
    totalLabel: "Jumlah",
    customRate: "Ubah suai",
    choose: "Pilih pelan",
    planMessage: "Hai Techub, saya berminat dengan pelan ini: {plan}.",
    welcome: "Tawaran Alu-aluan",
    welcomeCta: "Dapatkan Tawaran Alu-aluan",
    welcomeMessage: "Hai Techub, saya nak Tawaran Alu-aluan RM {n} sebulan.",
    promoUntil: "Hingga {date}",
    plansIncluded: "Semua pelan termasuk",
    free: "PERCUMA {months} bulan pertama untuk pengguna baru, termasuk latihan staf dan pemasangan.",
    claim: "Dapatkan {months} Bulan Percuma",
    claimMessage: "Hai Techub, saya nak claim tawaran {months} bulan percuma.",
    includedTitle: "Semua sudah termasuk",
    included: [
      "Sistem temujanji untuk bisnes anda",
      "Notifikasi WhatsApp & panggil giliran",
      "Kawalan stok AI & pantau inventori",
      "Laporan terperinci bawah 100 ms",
      "Support e-Invois LHDN",
      "Boleh guna di komputer, tablet & telefon",
      "Profil staf & kawalan akses",
      "Uptime {uptime} & backup disulitkan",
      "Pemasangan & latihan staf percuma",
      "Support tempatan di Malaysia melalui WhatsApp",
    ],
    customTitle: "Ubah suai sistem",
    customFrom: "dari",
    customText: "Bayar ikut jam kerja untuk fungsi baru, laporan, cetakan, integrasi atau sistem baru sepenuhnya.",
    customPoints: ["Sebut harga yang jelas sebelum kami mula: AI kami ramal jam kerja", "Ujian dan integrasi percuma", "Harga mampu milik, ada pelan ansuran"],
    customRates: "Kadar sejam kerja, ikut pelan",
    examplesTitle: "Contoh",
    examples: [
      { type: "Klinik", task: "Fail tuntutan dalam format yang syarikat panel baru minta" },
      { type: "Salun rambut", task: "Fail jualan bulanan dalam format akauntan anda" },
      { type: "Spa dan urut", task: "Soalan anda sendiri dalam borang tempahan, contohnya dari mana pelanggan kenal anda" },
    ],
    exampleHours: "Lebih kurang {n} jam",
    exampleLong: "RM {n} dengan pelan {plan}",
    examplesNote: "Contoh sahaja. Sebut harga anda ikut permintaan anda.",
    customCta: "Minta sebut harga",
    customMessage: "Hai Techub, saya nak minta quotation untuk sistem custom.",
    customEmail: "Email kami",
    customEmailSubject: "Minta sebut harga sistem custom",
    customSee: "Lihat contoh pelanggan",
    offerText: "Dari RM {price} sebulan. {months} bulan pertama percuma untuk pengguna baru, termasuk pemasangan dan latihan staf.",
    extrasTitle: "Servis lain",
    extrasText: "Juga dari Techub, untuk apa jua bisnes di Malaysia.",
    extrasCta: "Tanya di WhatsApp",
    extrasMore: "Lihat cara ia berfungsi",
    extras: {
      migration: {
        title: "Pemindahan data",
        label: "Biasanya lebih kurang",
        unit: "/ jam",
        text: "Pindahkan rekod anda dari sistem lama.",
        points: ["Harga ditentukan selepas berbincang dengan jurutera perisian kami", "Caj ikut masa, bukan jumlah data, jadi harganya berpatutan"],
        note: "",
        message: "Hai Techub, saya nak tanya tentang pemindahan data.",
      },
      email: {
        title: "E-mel perniagaan",
        label: "",
        unit: "/ tahun",
        text: "Hosting e-mel dengan domain anda sendiri, contohnya hello@bisnesanda.com.",
        points: ["Guna domain anda sendiri", "Storan {emailStorage}", "Kami setup semuanya untuk anda"],
        note: "Domain tidak termasuk.",
        message: "Hai Techub, saya nak e-mel perniagaan dengan domain sendiri.",
      },
      website: {
        title: "Reka laman web dan hosting",
        label: "",
        unit: "",
        text: "Laman web landing page sehingga {websitePages} muka surat, kami reka dan hoskan untuk anda.",
        points: [
          "Domain percuma untuk tahun pertama, kemudian RM {websiteYear} setahun untuk penyelenggaraan",
          "Hosting Cloudflare yang mampu tampung lebih 1 juta paparan seminit",
          "Dioptimumkan untuk SEO dan carian AI",
        ],
        note: "Laman web statik sahaja, tanpa senarai produk atau blog.",
        message: "Hai Techub, saya nak buat laman web dengan hosting.",
      },
    },
    // Live Selling System: a row on the pricing page, and the main card on its own page
    liveTitle: "Sistem Jualan Live",
    liveFrom: "dari",
    liveText: "Untuk penjual live: tampung ramai pembeli dengan giliran order Kafka, stok tak terlebih jual, pantau pelawat secara live dan laporan canggih.",
    liveCta: "Minta demo",
    liveMessage: "Hai Techub, saya nak minta demo Sistem Jualan Live.",
    liveSee: "Lihat sistem",
    livePlan: "Pelan Jualan Live Techub",
    liveBadge: "Jualan live",
    liveNote: "Minta demo, nanti kami tunjuk sistem ini guna produk anda sendiri.",
    liveIncluded: [
      "Halaman jualan untuk sesi live anda",
      "Giliran order Kafka untuk ramai pembeli",
      "Tak terlebih jual: stok disemak setiap order",
      "Produk dengan tarikh & masa jualan",
      "Jumlah pelawat live ikut halaman",
      "Bayaran online & urus order",
      "Invois & resit rasmi automatik",
      "Laporan canggih bawah 100 ms",
      "Uptime {uptime} dengan server di Malaysia",
      "Support tempatan di Malaysia melalui WhatsApp",
    ],
    liveOfferText: "Sistem Jualan Live dari RM {livePrice} sebulan.",
  },

  faq: {
    eyebrow: "Soalan Lazim",
    title: "Ada soalan? Kami ada jawapan",
    // Home page questions. The Technology page and each system page have their own.
    items: [
      {
        q: "Techub Software buat apa?",
        a: "Techub Software ialah syarikat perisian yang berpangkalan di Malaysia. Kami bina sistem pintar dengan kos rendah untuk bisnes di seluruh Malaysia: sistem temujanji siap guna untuk klinik, salon rambut, pusat kecantikan dan spa, sistem jualan live untuk penjual online, serta sistem custom seperti ERP, AI pengesanan objek dan scanner nombor plat.",
      },
      {
        q: "Sistem temujanji mana yang hantar reminder WhatsApp di Malaysia?",
        a: "Techub Software. Sistem tempahan online dan aplikasi temujanji kami hantar pengesahan booking dan reminder di WhatsApp secara automatik untuk klinik, salon, pusat kecantikan dan spa di Malaysia, dan pelanggan boleh sahkan atau tukar slot dengan satu tap. Pelan bermula dari RM {price}/bulan, dengan {months} bulan pertama percuma.",
      },
      {
        q: "Berapa harganya?",
        a: "Pelan bermula dari RM {price} sebulan, dan pelanggan baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf. Bayar RM {monthly} bulan ke bulan, atau RM {planPrice} sebulan untuk pelan 12, 24 atau 48 bulan dengan 1, 3 atau 10 bulan percuma. Sehingga 31 Dis 2026, Tawaran Alu-aluan kami hanya RM {price} sebulan untuk pelan 60 bulan. Sistem Jualan Live bermula dari RM {livePrice} sebulan. Custom dicaj ikut jam kerja: RM {customMonthly} sejam untuk pelan bulanan, serendah RM {custom} untuk pelan 48 bulan, dengan ujian dan integrasi percuma.",
      },
      {
        q: "Pelanggan saya boleh bayar deposit online?",
        a: "Boleh. Techub boleh guna pelbagai payment gateway, jadi pelanggan boleh bayar deposit atau bayaran penuh secara online masa buat booking. Duit terus masuk ke akaun merchant anda sendiri, dan deposit bantu kurangkan kes pelanggan tak datang.",
      },
      {
        q: "Berapa laju sistem ini?",
        a: "Sangat laju. Techub guna database NoSQL berindeks pada server bertaraf enterprise di Malaysia, jadi laporan terperinci siap dalam masa kurang 100 milisaat dan setiap peranti update secara real-time.",
      },
      {
        q: "Berapa uptime yang dijamin?",
        a: "Kami jamin uptime sistem {uptime}, jadi kaunter depan, skrin giliran dan booking anda hampir sentiasa online.",
      },
      {
        q: "Di mana data saya disimpan? Adakah ia selamat?",
        a: "Data anda disimpan pada server bertaraf enterprise di Malaysia, seperti IPServerOne dan Amazon Web Services, dan kami akan beritahu anda lokasinya. Semua data yang disimpan disulitkan, dengan backup berlapis di beberapa lokasi.",
      },
      {
        q: "Techub guna teknologi apa?",
        a: "Techub ialah sistem cloud yang berjalan pada server bertaraf enterprise di Malaysia, dengan database NoSQL berindeks, AI yang baca nota penghantaran dan urus stok, notifikasi WhatsApp automatik, e-Invois LHDN, serta boleh sambung ke peralatan seperti printer label, sistem panggil nombor giliran dan mesin X-ray.",
      },
      {
        q: "Ada support e-Invois LHDN?",
        a: "Ada. Techub support e-Invois LHDN, jadi invois boleh dihantar dan disahkan melalui MyInvois.",
      },
      {
        q: "Sistem boleh buat invois dan resit secara automatik?",
        a: "Boleh. Techub buat invois, nota kredit, nota bayaran balik dan resit rasmi secara automatik, ikut cara bisnes anda berjalan. Anda tak perlu staf akaun untuk sediakannya.",
      },
      {
        q: "Boleh buat sistem lain, contohnya ERP?",
        a: "Boleh. Kami bina sistem custom seperti ERP, AI pengesanan objek dan scanner nombor plat, dan kami juga boleh ubah suai sistem kami untuk bisnes lain. WhatsApp kami di {phone} untuk bincang idea anda.",
      },
      {
        q: "Ada sistem untuk jualan live?",
        a: "Ada. Sistem Jualan Live Techub bantu anda jual online semasa sesi live. Ia boleh tampung ramai pembeli serentak dengan giliran order Kafka, pastikan stok tak terlebih jual, bagi anda tetapkan tarikh jualan setiap produk dan tunjuk pelawat anda secara live. Harga bermula dari RM {livePrice} sebulan.",
      },
      {
        q: "Peralatan apa yang boleh saya sambung?",
        a: "Printer label, sistem panggil nombor giliran dan skrin giliran, mesin X-ray, printer resit dan A4, scanner barcode, mesin kad, laci duit dan tablet untuk tandatangan. Beritahu kami model anda dan kami akan sahkan dulu sebelum pasang.",
      },
      {
        q: "Ada pemasangan dan latihan staf?",
        a: "Ada. Pemasangan, setup peralatan dan latihan staf sudah termasuk untuk pelanggan baru, dan kami terus support anda melalui WhatsApp selepas sistem mula digunakan.",
      },
      {
        q: "Boleh guna di iPad, telefon dan komputer?",
        a: "Boleh. Techub boleh guna di semua peranti: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac.",
      },
      {
        q: "Macam mana nak hubungi Techub Software?",
        a: "WhatsApp kami di {phone} atau email ke {email}. Kami boleh aturkan demo sistem secara percuma untuk bisnes anda.",
      },
    ],
  },

  contact: {
    badge: "Demo percuma · {months} bulan percuma",
    title: "Tengok sendiri Techub dalam bisnes anda",
    text: "Dari RM {price}/bulan, untuk bisnes di seluruh Malaysia. Termasuk pemasangan dan latihan staf.",
    whatsappLabel: "WhatsApp · balas paling cepat",
    emailLabel: "Email kami",
  },

  /* ---------- Blog (/ms/blog/): each post's words are in content/blog/<slug>/ms.md ---------- */
  blog: {
    meta: {
      title: "Blog | Panduan Klinik, Salon, Kecantikan & Spa Malaysia",
      description: "Panduan praktikal untuk klinik, salon, pusat kecantikan, spa dan penjual live di Malaysia: booking, reminder WhatsApp, deposit, gaji dan e-Invois LHDN.",
    },
    eyebrow: "Blog",
    title: "Panduan untuk *klinik, salon, pusat kecantikan dan spa* di Malaysia",
    intro: "Jawapan mudah untuk soalan yang pemilik bisnes selalu tanya kami: booking, reminder WhatsApp, deposit, gaji, giliran, jualan live dan e-Invois LHDN.",
    read: "Baca panduan",
    allSystems: "Semua sistem",
    faqTitle: "Soalan yang orang selalu tanya",
    ctaTitle: "Tengok sendiri dalam bisnes anda",
    ctaText: "Tempah demo percuma di WhatsApp dan kami tunjuk cara Techub uruskan semua ini, langkah demi langkah.",
    system: "Lihat sistem {product}",
    more: "Panduan lain",
    listName: "Blog Techub Software",
  },

  /* ---------- Pages opened from the menu and footer (each part of the company has its own page) ---------- */
  pages: {
    useCases: {
      meta: {
        title: "Sistem Klinik, Salon, Kecantikan, Spa & Jualan Live Malaysia",
        description:
          "Sistem siap guna untuk klinik, salon rambut, pusat kecantikan, spa dan penjual live di Malaysia: reminder WhatsApp, kawalan stok, laporan bawah 100 ms.",
      },
    },
    customSystems: {
      meta: {
        title: "Buat Sistem Custom Malaysia | ERP, AI & Scanner Nombor Plat",
        description:
          "Kami bina sistem custom untuk bisnes anda di Malaysia: ERP, AI pengesanan objek, scanner nombor plat dan lagi. Ubah suai dari RM {custom} sejam kerja.",
      },
    },
    services: {
      meta: {
        title: "Perkhidmatan | Sistem, Custom, Peralatan & Latihan",
        description:
          "Sistem temujanji dan jualan live siap guna, sistem custom, setup peralatan, pemasangan, latihan staf dan sokongan WhatsApp untuk bisnes di Malaysia.",
      },
    },
    pricing: {
      meta: {
        title: "Harga | Dari RM {price}/bulan, {months} Bulan Pertama Percuma",
        description:
          "Sistem temujanji di Malaysia dari RM {price}/bulan, {months} bulan pertama percuma termasuk pemasangan dan latihan. Jualan live dari RM {livePrice}/bulan; custom dari RM {custom}/jam.",
      },
    },
    about: {
      meta: {
        title: "Tentang Kami | Syarikat Software di Malaysia",
        description:
          "{name} ialah syarikat software di Malaysia, pilihan SME Malaysia untuk sistem yang mudah dan murah bagi klinik, salon, pusat kecantikan dan spa.",
      },
    },
    faq: {
      meta: {
        title: "Soalan Lazim | Sistem Temujanji Techub",
        description:
          "Jawapan tentang sistem temujanji Techub di Malaysia: harga, kelajuan, uptime {uptime}, keselamatan data, e-Invois LHDN, peralatan, pemasangan dan latihan.",
      },
    },
    contact: {
      meta: {
        title: "Hubungi Kami | Demo Percuma di WhatsApp atau Email",
        description:
          "WhatsApp {name} di {phone} atau email {email} untuk demo percuma di Malaysia. Pengguna baru dapat {months} bulan pertama percuma.",
      },
    },
  },

  /* ---------- System pages ---------- */
  product: {
    useCases: "Penyelesaian",
    allModules: "Semua modul",
    inside: "Apa yang ada dalam {product}",
    otherSystems: "Juga ada untuk",
    reportsBadge: "Bawah 100 ms",
  },

  products: {
    clinic: {
      meta: {
        title: "Sistem Pengurusan Klinik Malaysia | Temujanji, Giliran, EMR & Ubat",
        socialTitle: "Sistem Pengurusan Klinik Malaysia | Techub Software",
        description:
          "Sistem pengurusan dan temujanji klinik di Malaysia: rekod pesakit (EMR), rekod ubat, sistem giliran, stok ubat AI dan e-Invois LHDN. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem temujanji klinik",
          "sistem giliran klinik",
          "sistem pengurusan klinik",
          "sistem klinik",
          "sistem klinik Malaysia",
          "software klinik",
          "sistem EMR Malaysia",
          "sistem rekod pesakit",
          "sistem rekod ubat",
          "sistem nombor giliran klinik",
          "e-Invois LHDN klinik",
          "sistem klinik am",
          "sistem klinik gigi",
          "clinic management system Malaysia",
          "clinic software",
          "bayaran online klinik",
          "integrasi payment gateway",
        ],
      },
      category: "Pengurusan klinik, EMR dan giliran pesakit",
      eyebrow: "Sistem Pengurusan Klinik",
      heading: "*Sistem klinik* pintar untuk rawatan lebih cepat dan selamat",
      intro: "Dibina khas untuk klinik di Malaysia: sistem temujanji klinik, rekod pesakit, rekod ubat, giliran, bil dan stok. Guna di iPad, telefon dan PC.",
      whoFor: [
        "Klinik am",
        "Klinik gigi",
        "Klinik pakar",
        "Klinik estetik",
        "Fisioterapi",
        "Perubatan Cina (TCM)",
        "Klinik banyak cawangan",
      ],
      highlights: {
        records: "Rekod pesakit",
        medication: "Rekod ubat",
        queue: "Panggil nombor giliran",
        hardware: "Sambung X-ray & printer",
        einvoice: "e-Invois LHDN",
        reports: "Laporan bawah 100 ms",
      },
      spotlights: {
        queue: {
          eyebrow: "Sistem giliran klinik",
          title: "Panggil pesakit seterusnya dengan sekali tekan",
          points: [
            "Paparan TV dengan pengumuman suara",
            "Bilik rawatan, farmasi & kaunter bayaran",
            "Bahasa Inggeris, Melayu & Cina",
            "Masa menunggu lebih singkat & tenang",
          ],
        },
        records: {
          eyebrow: "Rekod pesakit & ubat",
          title: "Rekod setiap pesakit dan ubat, semua tersusun",
          points: [
            "Rekod pesakit dengan sejarah lawatan penuh",
            "Rekod ubat untuk setiap pesakit",
            "Amaran alahan sebelum tulis preskripsi",
            "Batch & tarikh luput direkod setiap kali ubat dikeluarkan",
          ],
        },
        drawing: {
          eyebrow: "Lukis tangan & e-tandatangan",
          title: "Lukis, buat nota dan tandatangan di tablet",
          points: [
            "Carta badan & gigi",
            "Lukis guna jari atau pen stylus",
            "E-tandatangan persetujuan pesakit",
            "Terus disimpan dalam rekod pesakit",
          ],
        },
        hardware: {
          eyebrow: "Sambung pelbagai peralatan",
          title: "Sambung terus dengan peralatan klinik anda",
          points: [
            "Printer label untuk label ubat",
            "Sistem panggil nombor giliran",
            "Mesin X-ray",
            "Cetak MC, resit & A4",
          ],
        },
        payment: {
          eyebrow: "Bayaran online & deposit",
          title: "Pesakit bayar online. Duit terus masuk akaun anda.",
          points: [
            "Boleh guna pelbagai payment gateway",
            "Bayar deposit atau penuh masa buat booking",
            "Masuk terus ke akaun merchant anda sendiri",
            "Kurang kes tak datang bila ada deposit",
          ],
          badges: ["Deposit dibayar", "Terus ke akaun anda"],
        },
        stock: {
          eyebrow: "Kawalan stok AI",
          title: "Imbas nota penghantaran. Stok update sendiri.",
          points: [
            "AI baca item, batch & tarikh luput",
            "Stok ditolak bila ubat dikeluarkan",
            "Setiap keluar masuk stok direkod",
            "Amaran stok rendah & tarikh luput",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan klinik bawah 100 ms",
          points: [
            "Pesakit, konsultasi & kutipan",
            "Pendapatan ikut doktor",
            "Diagnosis paling kerap & claim panel",
            "Tiada lag, walaupun ada rekod bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Jejak aktiviti staf",
          title: "Jejak setiap tindakan staf, *lindungi* klinik anda",
          points: [
            "Tahu siapa buat apa, dan bila",
            "Akses berbeza untuk doktor, jururawat, farmasi & juruwang",
            "Diskaun & refund perlu kelulusan pengurus",
            "Data pesakit dan klinik terus dilindungi",
          ],
        },
      },
      modules: {
        records: "Pendaftaran & rekod pesakit",
        queue: "Panggil nombor giliran",
        whatsapp: "Notifikasi temujanji WhatsApp",
        emr: "Konsultasi & EMR",
        medication: "Sistem rekod ubat",
        drawing: "Carta badan & e-tandatangan",
        ai: "Kawalan stok ubat AI",
        inventory: "Pantau pergerakan stok",
        printing: "Cetak MC, label & resit",
        xray: "Sambung mesin X-ray",
        billing: "Bil & claim panel",
        payment: "Integrasi payment gateway",
        einvoice: "e-Invois LHDN",
        reports: "Laporan bawah 100 ms",
        permissions: "Jejak aktiviti & akses staf",
        devices: "Real-time di iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapa harga sistem klinik di Malaysia?",
          a: "Sistem klinik Techub bermula dari RM {price}/bulan, dan klinik baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf. Custom dicaj ikut jam kerja, dari RM {custom} sejam.",
        },
        {
          q: "Sistem klinik Techub sesuai untuk klinik kecil?",
          a: "Sesuai. Ia direka untuk klinik dengan seorang doktor sampailah kumpulan klinik banyak cawangan. Pelan bermula dari RM {price}/bulan dan klinik baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Boleh rekod data pesakit dan ubat?",
          a: "Boleh. Setiap pesakit ada rekod lengkap: lawatan, diagnosis, preskripsi dan sejarah ubat yang dikeluarkan. Sistem rekod ubat tunjuk dos, kekerapan, batch dan amaran alahan sebelum anda tulis preskripsi.",
        },
        {
          q: "Sistem klinik ada panggil nombor giliran?",
          a: "Ada. Nombor giliran boleh dipapar di TV dan diumumkan dengan suara, untuk bilik konsultasi, kaunter farmasi dan kaunter bayaran.",
        },
        {
          q: "Boleh sambung ke mesin X-ray dan printer?",
          a: "Boleh. Kami sambungkan mesin X-ray, printer label untuk label ubat, printer resit thermal, printer A4 dan sistem panggil nombor giliran. Beritahu kami model anda dan kami akan sahkan dulu sebelum pasang.",
        },
        {
          q: "Boleh buat e-Invois LHDN?",
          a: "Boleh. Sistem klinik support e-Invois LHDN, jadi invois dari bil boleh dihantar dan disahkan melalui MyInvois.",
        },
        {
          q: "Doktor boleh lukis atas carta badan atau gigi?",
          a: "Boleh. Doktor boleh lukis dan buat nota atas carta dengan tangan di tablet atau skrin sentuh, dan pesakit boleh tandatangan borang persetujuan secara digital.",
        },
        {
          q: "Berapa laju laporannya?",
          a: "Laporan terperinci siap dalam masa kurang 100 milisaat. Techub guna database NoSQL berindeks pada server di Malaysia, jadi tiada lag walaupun ada rekod bertahun-tahun.",
        },
        {
          q: "Sejauh mana sistem ini boleh diharap?",
          a: "Kami jamin uptime {uptime}. Data anda disimpan pada server bertaraf enterprise di Malaysia, disulitkan, dengan backup berlapis di beberapa lokasi.",
        },
        {
          q: "Pesakit boleh bayar online?",
          a: "Boleh. Techub boleh guna pelbagai payment gateway, jadi pesakit boleh bayar deposit atau bayaran penuh secara online masa buat booking, guna perbankan online (FPX), kad atau e-wallet, ikut gateway anda. Duit terus masuk ke akaun merchant klinik anda sendiri.",
        },
        {
          q: "Boleh saya tengok apa yang setiap staf buat dalam sistem?",
          a: "Boleh. Techub rekod setiap tindakan staf, contohnya buka rekod pesakit, bagi diskaun atau buat refund, siap dengan siapa yang buat dan bila. Anda tetapkan apa yang setiap jawatan boleh tengok atau ubah, dan tindakan berisiko boleh perlukan kelulusan doktor atau pengurus, jadi data pesakit dan klinik anda terus dilindungi.",
        },
        {
          q: "Macam mana nak dapatkan demo?",
          a: "WhatsApp kami di {phone} atau email ke {email}. Kami akan buat demo live sistem klinik untuk anda, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma sistem pengurusan klinik.",
    },

    salon: {
      meta: {
        title: "Sistem Booking Salon Malaysia | Temujanji, Gaji & POS",
        socialTitle: "Sistem Booking Salon Malaysia | Techub Software",
        description:
          "Sistem booking salon rambut di Malaysia: jadual stylist, reminder WhatsApp, app staf, gaji dan komisen, POS dan stok. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem booking barber",
          "sistem deposit booking",
          "sistem booking salon",
          "sistem temujanji salon",
          "sistem tempahan salon",
          "sistem salon rambut",
          "sistem pengurusan salon",
          "sistem POS salon",
          "sistem gaji salon",
          "sistem komisen salon",
          "sistem booking barbershop",
          "reminder temujanji WhatsApp",
          "salon appointment system",
          "hair salon booking system Malaysia",
          "deposit booking online salon",
          "integrasi payment gateway",
        ],
      },
      category: "Booking salon rambut, staf, gaji dan POS",
      eyebrow: "Sistem Booking Salon Rambut",
      heading: "Pastikan slot setiap *stylist* sentiasa penuh",
      intro: "Sistem booking salon rambut dan barber untuk Malaysia: notifikasi WhatsApp automatik, profil staf, gaji dan POS. Guna di iPad, telefon dan PC.",
      whoFor: [
        "Salon rambut",
        "Barbershop",
        "Salon unisex",
        "Studio warna & rawatan rambut",
        "Andaman & solekan pengantin",
        "Salon banyak cawangan",
      ],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Guna di semua peranti",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Pantau inventori",
        payroll: "Kira gaji automatik",
        reports: "Laporan bawah 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap stylist ada profil sendiri",
          points: [
            "Stylist boleh tengok dan urus booking sendiri",
            "Boleh guna di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji asas, komisen & elaun",
          ],
        },
        customer: {
          eyebrow: "Sejarah pelanggan",
          title: "Formula warna setiap pelanggan, semua tersimpan",
          points: ["Sejarah lawatan & stylist kegemaran", "Formula warna & nota", "Gambar sebelum & selepas", "Point member & pakej"],
          badges: ["Formula disimpan", "Point member"],
        },
        pos: {
          eyebrow: "Sistem POS & komisen salon",
          title: "Bayar cepat. Komisen dikira untuk anda.",
          points: [
            "Perkhidmatan dan produk runcit dalam satu bil",
            "Komisen setiap stylist",
            "Tunai, kad, DuitNow QR & e-wallet",
            "Pakej & diskaun member",
          ],
        },
        payment: {
          eyebrow: "Bayaran online & deposit",
          title: "Pelanggan bayar online. Duit terus masuk akaun anda.",
          points: [
            "Boleh guna pelbagai payment gateway",
            "Bayar deposit atau penuh masa buat booking",
            "Masuk terus ke akaun merchant anda sendiri",
            "Kurang kes tak datang bila ada deposit",
          ],
          badges: ["Deposit dibayar", "Terus ke akaun anda"],
        },
        deposits: {
          eyebrow: "Sistem deposit booking",
          title: "Kutip deposit. Tukar jadi pendapatan dengan *satu klik*.",
          points: [
            "Kutip deposit setiap kali booking",
            "Disimpan berasingan sampai servis siap",
            "Invois, nota bayaran balik & nota kredit siap untuk anda",
            "Tak perlu ilmu perakaunan",
          ],
        },
        stock: {
          eyebrow: "Pantau inventori dengan AI",
          title: "Imbas nota penghantaran. Stok update sendiri.",
          points: [
            "AI baca setiap baris produk",
            "Penggunaan warna & rawatan ditolak automatik",
            "Setiap keluar masuk stok direkod",
            "Amaran pintar bila perlu order stok",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan salon bawah 100 ms",
          points: [
            "Jualan ikut stylist & perkhidmatan",
            "Jualan perkhidmatan vs runcit",
            "Komisen terus nampak",
            "Tiada lag, walaupun ada data bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Jejak aktiviti staf",
          title: "Jejak setiap tindakan staf, *lindungi* bisnes anda",
          points: [
            "Tahu siapa buat apa, dan bila",
            "Akses berbeza untuk pemilik, pengurus, stylist & receptionist",
            "Diskaun perlu kelulusan pengurus",
            "Data pelanggan terus dilindungi",
          ],
        },
      },
      modules: {
        calendar: "Kalendar booking ikut stylist",
        walkin: "Giliran walk-in",
        whatsapp: "Notifikasi WhatsApp automatik",
        profiles: "Profil staf & booking sendiri",
        customers: "Sejarah pelanggan & formula warna",
        packages: "Pakej & point member",
        pos: "POS, jualan runcit & cetak resit",
        payment: "Integrasi payment gateway",
        deposits: "Satu klik, deposit jadi pendapatan",
        commission: "Komisen stylist",
        payroll: "Kira gaji automatik",
        inventory: "Pantau inventori dengan AI",
        einvoice: "e-Invois LHDN",
        reports: "Laporan bawah 100 ms",
        permissions: "Jejak aktiviti & akses staf",
        devices: "Semua peranti: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapa harga sistem booking salon?",
          a: "Bermula dari RM {price}/bulan. Salon baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Pelanggan dapat notifikasi secara automatik?",
          a: "Ya. Pengesahan booking dan reminder dihantar melalui WhatsApp secara automatik, dan pelanggan boleh sahkan atau tukar slot dengan sekali tekan.",
        },
        {
          q: "Setiap stylist boleh ada profil sendiri?",
          a: "Boleh. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk tengok dan urus booking mereka, dan cuma nampak apa yang dibenarkan ikut jawatan.",
        },
        {
          q: "Sistem booking salon mana yang boleh kira komisen staf?",
          a: "Sistem booking salon Techub. Komisen perkhidmatan dan jualan produk dikira dari POS anda, dan gaji bulanan termasuk gaji asas dan elaun setiap staf.",
        },
        {
          q: "Boleh pantau inventori produk salon?",
          a: "Boleh. AI baca nota penghantaran pembekal, penggunaan produk ditolak bagi setiap perkhidmatan, dan setiap keluar masuk stok direkod.",
        },
        {
          q: "Boleh urus pelanggan walk-in?",
          a: "Boleh. Pelanggan walk-in masuk giliran bersama booking anda, jadi kaunter depan boleh nampak stylist mana yang akan lapang dulu.",
        },
        {
          q: "Boleh simpan formula warna setiap pelanggan?",
          a: "Boleh. Formula warna, nota serta gambar sebelum dan selepas disimpan dalam profil pelanggan untuk lawatan seterusnya.",
        },
        {
          q: "Boleh guna di iPad, Android dan PC?",
          a: "Boleh. Techub boleh guna di semua peranti: tablet iPad dan Android, telefon iPhone dan Android, serta komputer Windows atau Mac.",
        },
        {
          q: "Pelanggan boleh bayar deposit online?",
          a: "Boleh. Techub boleh guna pelbagai payment gateway, jadi pelanggan boleh bayar deposit atau bayaran penuh secara online masa buat booking, guna perbankan online (FPX), kad atau e-wallet, ikut gateway anda. Duit terus masuk ke akaun merchant salon anda sendiri, dan deposit bantu kurangkan kes tak datang.",
        },
        {
          q: "Perlu ada ilmu perakaunan untuk urus deposit?",
          a: "Tak perlu. Setiap deposit disimpan berasingan sampai servis siap, kemudian satu klik tukar jadi pendapatan. Techub sediakan dokumen perakaunan yang betul untuk anda, seperti invois, nota bayaran balik atau nota kredit, jadi anda tak perlu ada ilmu perakaunan.",
        },
        {
          q: "Boleh saya tengok apa yang setiap staf buat dalam sistem?",
          a: "Boleh. Techub rekod setiap tindakan staf, contohnya bagi diskaun, buat refund atau eksport data pelanggan, siap dengan siapa yang buat dan bila. Anda tetapkan apa yang setiap jawatan boleh tengok atau ubah, dan tindakan berisiko boleh perlukan kelulusan pengurus, jadi maklumat bisnes anda terus dilindungi.",
        },
        {
          q: "Macam mana nak dapatkan demo?",
          a: "WhatsApp kami di {phone} atau email ke {email}. Kami akan buat demo live sistem salon untuk anda, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma sistem booking salon.",
    },

    beauty: {
      meta: {
        title: "Sistem Temujanji Pusat Kecantikan Malaysia | Booking, Pakej & Gaji",
        socialTitle: "Sistem Booking Pusat Kecantikan Malaysia | Techub Software",
        description:
          "Sistem booking pusat kecantikan dan salon kecantikan di Malaysia: reminder WhatsApp, pakej rawatan, carta muka, gaji dan POS. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem temujanji kecantikan",
          "sistem klinik estetik",
          "sistem deposit booking",
          "sistem pusat kecantikan",
          "sistem booking pusat kecantikan",
          "sistem temujanji pusat kecantikan",
          "sistem salon kecantikan",
          "sistem booking facial",
          "sistem pusat estetik",
          "sistem booking eyelash",
          "sistem booking salon kuku",
          "sistem pakej kecantikan",
          "sistem gaji pusat kecantikan",
          "beauty centre system",
          "beauty salon booking system",
          "bayaran online pusat kecantikan",
          "integrasi payment gateway",
        ],
      },
      category: "Booking pusat kecantikan, pakej dan rekod rawatan",
      eyebrow: "Sistem Booking Pusat Kecantikan",
      heading: "*Sistem pusat kecantikan* yang buat pelanggan datang lagi",
      intro: "Sistem temujanji kecantikan untuk pusat kecantikan, klinik estetik, salon kuku dan studio bulu mata di Malaysia: pakej, carta muka, gaji staf dan reminder WhatsApp. Guna di iPad, telefon dan PC.",
      whoFor: [
        "Pusat kecantikan",
        "Facial & rawatan kulit",
        "Studio bulu mata & kening",
        "Salon kuku",
        "Pusat slimming",
        "Klinik estetik",
        "Solekan pengantin",
      ],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Guna di semua peranti",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Pantau inventori",
        payroll: "Kira gaji automatik",
        reports: "Laporan bawah 100 ms",
      },
      spotlights: {
        packages: {
          eyebrow: "Pakej & sesi",
          title: "Setiap pakej dan sesi, semua direkod",
          points: [
            "Baki sesi setiap kali pelanggan datang",
            "Kredit prabayar & harga member",
            "Nota kulit & alahan",
            "Reminder bila tiba masa untuk booking semula",
          ],
          badges: ["Baki sesi", "Reminder dihantar"],
        },
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap beautician ada profil sendiri",
          points: [
            "Beautician boleh tengok dan urus booking sendiri",
            "Boleh guna di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji asas, komisen & elaun",
          ],
        },
        faceChart: {
          eyebrow: "Carta muka & persetujuan",
          title: "Tanda kulit, tambah gambar, dapatkan tandatangan",
          points: [
            "Lukis atas carta muka guna pen stylus",
            "Gambar sebelum & selepas",
            "Nota rawatan setiap kali datang",
            "Persetujuan pelanggan dengan e-tandatangan",
          ],
        },
        pos: {
          eyebrow: "POS & komisen",
          title: "Bayar guna pakej dengan sekali tekan",
          points: [
            "Redeem sesi pakej",
            "Rawatan dan produk dalam satu bil",
            "Komisen setiap beautician",
            "Tunai, kad, DuitNow QR & e-wallet",
          ],
        },
        payment: {
          eyebrow: "Bayaran online & deposit",
          title: "Pelanggan bayar online. Duit terus masuk akaun anda.",
          points: [
            "Boleh guna pelbagai payment gateway",
            "Bayar deposit atau penuh masa buat booking",
            "Masuk terus ke akaun merchant anda sendiri",
            "Kurang kes tak datang bila ada deposit",
          ],
          badges: ["Deposit dibayar", "Terus ke akaun anda"],
        },
        deposits: {
          eyebrow: "Sistem deposit booking",
          title: "Kutip deposit. Tukar jadi pendapatan dengan *satu klik*.",
          points: [
            "Kutip deposit setiap kali booking",
            "Disimpan berasingan sampai servis siap",
            "Invois, nota bayaran balik & nota kredit siap untuk anda",
            "Tak perlu ilmu perakaunan",
          ],
        },
        stock: {
          eyebrow: "Pantau inventori dengan AI",
          title: "Imbas nota penghantaran. Stok update sendiri.",
          points: [
            "AI baca setiap baris produk",
            "Penggunaan produk ditolak bagi setiap rawatan",
            "Setiap keluar masuk stok direkod",
            "Amaran tarikh luput & order stok",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan pusat kecantikan bawah 100 ms",
          points: [
            "Jualan pakej & sesi yang digunakan",
            "Jualan ikut beautician",
            "Rawatan paling popular",
            "Tiada lag, walaupun ada data bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Jejak aktiviti staf",
          title: "Jejak setiap tindakan staf, *lindungi* bisnes anda",
          points: [
            "Tahu siapa buat apa, dan bila",
            "Akses berbeza untuk pemilik, pengurus, beautician & receptionist",
            "Diskaun perlu kelulusan pengurus",
            "Gambar dan data pelanggan terus dilindungi",
          ],
        },
      },
      modules: {
        calendar: "Kalendar booking",
        whatsapp: "Reminder WhatsApp automatik",
        packages: "Pakej & sesi",
        customers: "Profil pelanggan & nota kulit",
        faceChart: "Carta muka & e-tandatangan",
        profiles: "Profil staf & booking sendiri",
        pos: "POS, jualan runcit & cetak resit",
        payment: "Integrasi payment gateway",
        deposits: "Satu klik, deposit jadi pendapatan",
        commission: "Komisen staf",
        payroll: "Kira gaji automatik",
        inventory: "Pantau inventori dengan AI",
        einvoice: "e-Invois LHDN",
        reports: "Laporan bawah 100 ms",
        permissions: "Jejak aktiviti & akses staf",
        devices: "Semua peranti: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapa harga sistem booking pusat kecantikan?",
          a: "Bermula dari RM {price}/bulan. Pusat kecantikan baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Boleh rekod pakej dan sesi rawatan?",
          a: "Boleh. Jual pakej dan kredit prabayar, dan sistem akan tolak setiap sesi serta tunjuk baki setiap kali pelanggan datang.",
        },
        {
          q: "Boleh simpan carta muka dan gambar sebelum & selepas?",
          a: "Boleh. Beautician boleh lukis atas carta muka, tambah gambar dan nota rawatan, dan pelanggan tandatangan borang persetujuan di iPad.",
        },
        {
          q: "Reminder WhatsApp dihantar secara automatik?",
          a: "Ya. Pengesahan booking dan reminder dihantar melalui WhatsApp secara automatik, dan pelanggan boleh sahkan atau tukar slot dengan sekali tekan.",
        },
        {
          q: "Setiap beautician boleh ada profil sendiri?",
          a: "Boleh. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk tengok dan urus booking mereka, dan cuma nampak apa yang dibenarkan ikut jawatan.",
        },
        {
          q: "Boleh kira gaji dan komisen?",
          a: "Boleh. Komisen rawatan, pakej dan jualan produk dikira secara automatik, dan gaji bulanan termasuk gaji asas dan elaun setiap staf.",
        },
        {
          q: "Boleh guna di iPad?",
          a: "Boleh. Techub boleh guna di semua peranti: tablet iPad dan Android, telefon dan komputer.",
        },
        {
          q: "Sistem pusat kecantikan mana yang boleh terima deposit online?",
          a: "Sistem temujanji kecantikan Techub. Ia boleh guna pelbagai payment gateway, jadi pelanggan boleh bayar deposit atau bayaran penuh secara online masa buat booking, guna perbankan online (FPX), kad atau e-wallet, ikut gateway anda. Duit terus masuk ke akaun merchant pusat kecantikan anda sendiri, dan deposit bantu kurangkan kes tak datang.",
        },
        {
          q: "Perlu ada ilmu perakaunan untuk urus deposit?",
          a: "Tak perlu. Setiap deposit disimpan berasingan sampai servis siap, kemudian satu klik tukar jadi pendapatan. Techub sediakan dokumen perakaunan yang betul untuk anda, seperti invois, nota bayaran balik atau nota kredit, jadi anda tak perlu ada ilmu perakaunan.",
        },
        {
          q: "Boleh saya tengok apa yang setiap staf buat dalam sistem?",
          a: "Boleh. Techub rekod setiap tindakan staf, contohnya bagi diskaun, buat refund atau eksport data pelanggan, siap dengan siapa yang buat dan bila. Anda tetapkan apa yang setiap jawatan boleh tengok atau ubah, dan tindakan berisiko boleh perlukan kelulusan pengurus, jadi maklumat bisnes anda terus dilindungi.",
        },
        {
          q: "Macam mana nak dapatkan demo?",
          a: "WhatsApp kami di {phone} atau email ke {email}. Kami akan buat demo live sistem pusat kecantikan untuk anda, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma sistem booking pusat kecantikan.",
    },

    spa: {
      meta: {
        title: "Sistem Booking Spa & Urut Malaysia | Terapis, Bilik & Pakej",
        socialTitle: "Sistem Booking Spa Malaysia | Techub Software",
        description:
          "Sistem booking spa dan urutan di Malaysia: jadual terapis dan bilik, reminder WhatsApp, pakej, membership, gaji dan POS. Dari RM {price}/bulan, {months} bulan percuma.",
        keywords: [
          "sistem deposit booking",
          "sistem booking spa",
          "sistem spa",
          "sistem temujanji spa",
          "sistem tempahan spa",
          "sistem pengurusan spa",
          "sistem booking urut",
          "sistem pusat refleksologi",
          "sistem pusat wellness",
          "jadual terapis",
          "sistem gaji spa",
          "sistem membership spa",
          "spa booking system Malaysia",
          "spa management software",
          "deposit booking online spa",
          "integrasi payment gateway",
        ],
      },
      category: "Booking spa dan urutan, bilik dan membership",
      eyebrow: "Sistem Booking Spa",
      heading: "Kaunter depan tenang, slot terapis *sentiasa penuh*",
      intro: "Sistem booking spa, urut dan refleksologi untuk Malaysia: terapis, bilik, pakej, gaji dan reminder WhatsApp. Guna di iPad, telefon dan PC.",
      whoFor: ["Day spa", "Pusat urut", "Refleksologi kaki", "Pusat wellness", "Spa hotel & resort", "Spa pasangan"],
      highlights: {
        notify: "Notifikasi pelanggan automatik",
        platform: "Guna di semua peranti",
        profiles: "Setiap staf ada profil sendiri",
        inventory: "Pantau inventori",
        payroll: "Kira gaji automatik",
        reports: "Laporan bawah 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Profil staf & gaji",
          title: "Setiap terapis ada profil sendiri",
          points: [
            "Terapis boleh tengok dan urus booking sendiri",
            "Boleh guna di iPhone, Android, iPad dan PC",
            "Gaji dikira secara automatik",
            "Gaji asas, komisen & elaun",
          ],
        },
        packages: {
          eyebrow: "Pakej & membership",
          title: "Baki sesi dan kredit, sentiasa terkini",
          points: [
            "Pakej & kredit prabayar",
            "Baki sesi setiap kali pelanggan datang",
            "Pilihan tekanan urut & minyak",
            "Reminder hari jadi & booking semula",
          ],
          badges: ["Baki sesi", "Sesi seterusnya ditempah"],
        },
        treatmentMap: {
          eyebrow: "Peta rawatan & tandatangan",
          title: "Tanda bahagian fokus dengan tangan",
          points: [
            "Lukis atas peta badan guna pen stylus",
            "Nota terapis untuk sesi seterusnya",
            "Borang kesihatan & persetujuan",
            "E-tandatangan pelanggan",
          ],
        },
        pos: {
          eyebrow: "POS & komisen",
          title: "Bayaran dan komisen di satu tempat",
          points: [
            "Rawatan, pakej & runcit",
            "Komisen setiap terapis",
            "Tunai, kad, DuitNow QR & e-wallet",
            "Laporan jualan harian",
          ],
        },
        payment: {
          eyebrow: "Bayaran online & deposit",
          title: "Pelanggan bayar online. Duit terus masuk akaun anda.",
          points: [
            "Boleh guna pelbagai payment gateway",
            "Bayar deposit atau penuh masa buat booking",
            "Masuk terus ke akaun merchant anda sendiri",
            "Kurang kes tak datang bila ada deposit",
          ],
          badges: ["Deposit dibayar", "Terus ke akaun anda"],
        },
        deposits: {
          eyebrow: "Sistem deposit booking",
          title: "Kutip deposit. Tukar jadi pendapatan dengan *satu klik*.",
          points: [
            "Kutip deposit setiap kali booking",
            "Disimpan berasingan sampai servis siap",
            "Invois, nota bayaran balik & nota kredit siap untuk anda",
            "Tak perlu ilmu perakaunan",
          ],
        },
        stock: {
          eyebrow: "Pantau inventori dengan AI",
          title: "Imbas nota penghantaran. Stok update sendiri.",
          points: [
            "AI baca setiap baris produk",
            "Minyak & skrub ditolak bagi setiap rawatan",
            "Setiap keluar masuk stok direkod",
            "Amaran pintar bila perlu order stok",
          ],
        },
        reports: {
          eyebrow: "Laporan terperinci",
          title: "Laporan spa bawah 100 ms",
          points: [
            "Kadar penggunaan terapis & bilik",
            "Pakej & membership yang dijual",
            "Rawatan paling popular",
            "Tiada lag, walaupun ada data bertahun-tahun",
          ],
        },
        permissions: {
          eyebrow: "Jejak aktiviti staf",
          title: "Jejak setiap tindakan staf, *lindungi* bisnes anda",
          points: [
            "Tahu siapa buat apa, dan bila",
            "Akses berbeza untuk pemilik, pengurus, terapis & receptionist",
            "Diskaun perlu kelulusan pengurus",
            "Data pelanggan terus dilindungi",
          ],
        },
      },
      modules: {
        scheduling: "Jadual terapis & bilik",
        whatsapp: "Reminder WhatsApp automatik",
        packages: "Pakej & membership",
        group: "Booking pasangan & kumpulan",
        treatmentMap: "Peta rawatan & e-tandatangan",
        profiles: "Profil staf & booking sendiri",
        pos: "POS, jualan runcit & cetak resit",
        payment: "Integrasi payment gateway",
        deposits: "Satu klik, deposit jadi pendapatan",
        commission: "Komisen terapis",
        payroll: "Kira gaji automatik",
        inventory: "Pantau inventori dengan AI",
        einvoice: "e-Invois LHDN",
        reports: "Laporan bawah 100 ms",
        permissions: "Jejak aktiviti & akses staf",
        devices: "Semua peranti: iPad, telefon & PC",
      },
      faqs: [
        {
          q: "Berapa harga sistem booking spa?",
          a: "Bermula dari RM {price}/bulan. Spa baru dapat {months} bulan pertama percuma, termasuk pemasangan dan latihan staf.",
        },
        {
          q: "Boleh atur jadual terapis dan bilik sekali gus?",
          a: "Boleh. Setiap booking ada seorang terapis dan satu bilik, termasuk bilik pasangan, jadi tiada booking bertindih untuk terapis atau bilik.",
        },
        {
          q: "Boleh urus pakej dan membership?",
          a: "Boleh. Jual pakej, kredit prabayar dan membership, dan sistem akan rekod baki sesi dan baki kredit secara automatik.",
        },
        {
          q: "Pelanggan dapat notifikasi secara automatik?",
          a: "Ya. Pengesahan booking dan reminder dihantar melalui WhatsApp secara automatik, dan pelanggan boleh sahkan atau tukar slot dengan sekali tekan.",
        },
        {
          q: "Setiap terapis boleh ada profil sendiri?",
          a: "Boleh. Setiap staf log masuk di telefon, iPad atau PC sendiri untuk tengok dan urus booking mereka, dan cuma nampak apa yang dibenarkan ikut jawatan.",
        },
        {
          q: "Boleh kira gaji dan komisen?",
          a: "Boleh. Komisen rawatan dan jualan produk dikira secara automatik, dan gaji bulanan termasuk gaji asas dan elaun setiap terapis.",
        },
        {
          q: "Boleh pantau inventori spa?",
          a: "Boleh. AI baca nota penghantaran pembekal, minyak dan skrub ditolak bagi setiap rawatan, dan setiap keluar masuk stok direkod.",
        },
        {
          q: "Boleh guna di iPad?",
          a: "Boleh. Techub boleh guna di semua peranti, jadi kaunter depan dan terapis boleh guna iPad, tablet Android, telefon atau komputer.",
        },
        {
          q: "Pelanggan boleh bayar deposit online?",
          a: "Boleh. Techub boleh guna pelbagai payment gateway, jadi pelanggan boleh bayar deposit atau bayaran penuh secara online masa buat booking, guna perbankan online (FPX), kad atau e-wallet, ikut gateway anda. Duit terus masuk ke akaun merchant spa anda sendiri, dan deposit bantu kurangkan kes tak datang.",
        },
        {
          q: "Perlu ada ilmu perakaunan untuk urus deposit?",
          a: "Tak perlu. Setiap deposit disimpan berasingan sampai servis siap, kemudian satu klik tukar jadi pendapatan. Techub sediakan dokumen perakaunan yang betul untuk anda, seperti invois, nota bayaran balik atau nota kredit, jadi anda tak perlu ada ilmu perakaunan.",
        },
        {
          q: "Boleh saya tengok apa yang setiap staf buat dalam sistem?",
          a: "Boleh. Techub rekod setiap tindakan staf, contohnya bagi diskaun, buat refund atau eksport data pelanggan, siap dengan siapa yang buat dan bila. Anda tetapkan apa yang setiap jawatan boleh tengok atau ubah, dan tindakan berisiko boleh perlukan kelulusan pengurus, jadi maklumat bisnes anda terus dilindungi.",
        },
        {
          q: "Macam mana nak dapatkan demo?",
          a: "WhatsApp kami di {phone} atau email ke {email}. Kami akan buat demo live sistem spa untuk anda, percuma.",
        },
      ],
      demoMessage: "Hai Techub, saya nak demo percuma sistem booking spa.",
    },

    live: {
      meta: {
        title: "Sistem Jualan Live Malaysia | Tak Terlebih Jual",
        socialTitle: "Sistem Jualan Live Malaysia | Techub Software",
        description:
          "Sistem jualan live untuk penjual Facebook dan TikTok di Malaysia: tampung ramai pembeli, elak terlebih jual, jadual produk, pelawat live. Dari RM {livePrice}/bulan.",
        keywords: [
          "sistem jualan live TikTok",
          "sistem live selling Malaysia",
          "sistem jualan live",
          "sistem jualan live Malaysia",
          "sistem jualan online Malaysia",
          "sistem flash sale",
          "sistem live commerce",
          "jualan live Facebook",
          "jualan live TikTok",
          "elak overselling",
          "elak terlebih jual",
          "sistem pre-order",
          "live selling system Malaysia",
          "flash sale system",
          "Kafka order queue",
          "payment gateway jualan live",
          "integrasi payment gateway",
        ],
      },
      category: "Jualan live dan flash sale online",
      eyebrow: "Sistem Jualan Live",
      heading: "Jual live kepada ramai pembeli, *tak pernah terlebih jual*",
      intro:
        "Sistem jualan live untuk penjual TikTok dan Facebook di Malaysia: tambah produk, tetapkan tarikh jualan, dan biar ramai pembeli beli serentak. Giliran order Kafka susun setiap order ikut turutan, dan anda boleh tengok pelawat anda secara live.",
      whoFor: ["Penjual Facebook Live", "Penjual TikTok Live", "Kedai Instagram", "Fesyen & tudung", "Kecantikan & skincare", "Makanan & snek", "Flash sale & pre-order"],
      highlights: {
        crowd: "Tampung ramai pembeli",
        queue: "Giliran order Kafka",
        oversell: "Tak terlebih jual",
        schedule: "Tetapkan tarikh jualan",
        visitors: "Pelawat live ikut halaman",
        reports: "Laporan canggih",
      },
      spotlights: {
        crowd: {
          eyebrow: "Ramai pembeli, tiada lag",
          title: "Ramai pembeli boleh beli pada saat yang sama",
          points: [
            "Dibina untuk saat pembeli berebut bila anda cakap \"beli sekarang\" masa live",
            "Giliran order Kafka proses setiap order ikut turutan",
            "Halaman jualan anda kekal laju walaupun trafik tinggi",
            "Server enterprise di Malaysia, uptime {uptime}",
          ],
        },
        oversell: {
          eyebrow: "Tak terlebih jual",
          title: "Takkan jual lebih dari stok yang ada",
          points: [
            "Stok disemak untuk setiap satu order",
            "Produk tutup sendiri bila stok dah habis",
            "Satu barang takkan dijual dua kali, walaupun masa puncak",
            "Pembeli nampak berapa lagi yang tinggal",
          ],
          badges: ["Stok disemak live", "Habis? Terus tutup."],
        },
        schedule: {
          eyebrow: "Produk & tarikh jualan",
          title: "Tambah produk, kemudian pilih tarikh jualan",
          points: [
            "Masukkan gambar, harga dan stok dengan beberapa kali tekan",
            "Pilih tarikh dan masa setiap produk mula dijual",
            "Jualan buka dan tutup sendiri ikut masa",
            "Rancang sesi live seterusnya awal-awal",
          ],
        },
        payment: {
          eyebrow: "Bayaran online",
          title: "Pembeli bayar online. Duit terus masuk akaun anda.",
          points: [
            "Boleh guna pelbagai payment gateway",
            "Pembeli bayar masa checkout, terus lepas order",
            "Masuk terus ke akaun merchant anda sendiri",
            "Resit rasmi dihantar di WhatsApp",
          ],
          badges: ["Dibayar masa checkout", "Terus ke akaun anda"],
        },
        visitors: {
          eyebrow: "Pelawat live",
          title: "Tengok siapa ada di kedai anda, sekarang juga",
          points: [
            "Jumlah pelawat di kedai anda secara live",
            "Halaman yang setiap pelawat sedang buka",
            "Order dan bayaran terus nampak bila masuk",
            "Tahu masa paling sesuai untuk promote produk",
          ],
        },
        reports: {
          eyebrow: "Laporan canggih",
          title: "Setiap jualan live, dalam angka",
          points: [
            "Jualan, order dan produk terlaris setiap live",
            "Pelawat, kadar conversion dan minit puncak",
            "Cara bayaran dan peratus stok terjual ikut produk",
            "Laporan siap bawah 100 ms, tiada lag",
          ],
        },
        permissions: {
          eyebrow: "Jejak aktiviti staf",
          title: "Jejak setiap tindakan staf, *lindungi* kedai anda",
          points: [
            "Tahu siapa buat apa, dan bila",
            "Akses berbeza untuk pemilik, pengurus, host, packer & khidmat pelanggan",
            "Tukar harga masa live perlu kelulusan",
            "Data pembeli terus dilindungi",
          ],
        },
      },
      modules: {
        salePage: "Halaman jualan untuk live anda",
        products: "Senarai produk dengan gambar",
        schedule: "Tarikh & masa jualan",
        queue: "Giliran order Kafka",
        oversell: "Elak terlebih jual",
        stock: "Kiraan stok real-time",
        visitors: "Jumlah pelawat live",
        pages: "Pelawat ikut halaman",
        checkout: "Checkout laju di telefon",
        payment: "Integrasi payment gateway",
        orders: "Urus order",
        receipts: "Invois & resit automatik",
        einvoice: "e-Invois LHDN",
        reports: "Laporan jualan canggih",
        permissions: "Jejak aktiviti & akses staf",
        devices: "Guna di telefon, iPad & PC",
      },
      faqs: [
        {
          q: "Apa itu Sistem Jualan Live Techub?",
          a: "Ini sistem untuk jual online semasa sesi live anda di Malaysia. Anda tambah produk dan pilih tarikh jualan, kongsi halaman jualan masa live, dan pembeli order terus dari telefon. Ia boleh tampung ramai pembeli, pastikan stok tak terlebih jual dan tunjuk pelawat anda secara live.",
        },
        {
          q: "Boleh tampung ramai pembeli serentak?",
          a: "Boleh. Setiap order melalui giliran Kafka, yang boleh terima lonjakan order pada masa yang sama dan proses satu per satu ikut turutan, jadi halaman jualan anda kekal laju.",
        },
        {
          q: "Macam mana nak elak terlebih jual masa jualan live?",
          a: "Guna Sistem Jualan Live Techub. Stok disemak dan ditolak untuk setiap order sebaik saja order dibuat, sama ada pembeli datang dari TikTok atau Facebook Live. Bila produk habis, ia tutup secara automatik, jadi anda takkan jual lebih dari stok yang ada.",
        },
        {
          q: "Boleh pilih bila setiap produk mula dijual?",
          a: "Boleh. Tambah produk dengan gambar, harga dan stok, kemudian pilih tarikh dan masa jualan. Produk akan dibuka untuk jualan ikut masa yang anda tetapkan.",
        },
        {
          q: "Boleh tengok berapa ramai orang di kedai saya?",
          a: "Boleh. Dashboard live tunjuk berapa ramai pelawat di kedai anda sekarang dan halaman mana yang setiap seorang sedang buka, berserta order yang masuk secara live.",
        },
        {
          q: "Laporan apa yang saya dapat?",
          a: "Jualan, order, produk terlaris, pelawat, kadar conversion, minit puncak dan cara bayaran untuk setiap jualan live, siap dalam masa kurang 100 milisaat.",
        },
        {
          q: "Macam mana pembeli bayar?",
          a: "Secara online, masa checkout. Techub boleh guna pelbagai payment gateway, jadi pembeli boleh bayar guna perbankan online (FPX), kad atau e-wallet, ikut gateway anda. Duit terus masuk ke akaun merchant anda sendiri.",
        },
        {
          q: "Berapa harga Sistem Jualan Live?",
          a: "Bermula dari RM {livePrice} sebulan, ikut keperluan anda. WhatsApp kami di {phone} untuk minta demo.",
        },
        {
          q: "Boleh saya tengok apa yang setiap staf buat dalam sistem?",
          a: "Boleh. Techub rekod setiap tindakan staf, contohnya tukar harga masa live, ubah stok atau batalkan order, siap dengan siapa yang buat dan bila. Anda tetapkan apa yang setiap jawatan boleh buat, dan tukar harga masa live boleh perlukan kelulusan anda, jadi maklumat kedai anda terus dilindungi.",
        },
        {
          q: "Macam mana nak minta demo?",
          a: "WhatsApp kami di {phone} atau email ke {email}. Kami akan tunjuk macam mana Sistem Jualan Live berfungsi, guna produk anda sendiri.",
        },
      ],
      demoMessage: "Hai Techub, saya nak minta demo Sistem Jualan Live.",
      contact: {
        badge: "Minta demo",
        title: "Tengok sendiri macam mana Sistem Jualan Live berfungsi",
        text: "Dari RM {livePrice}/bulan, untuk penjual online di seluruh Malaysia.",
      },
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
  /* ---------- Halaman servis (lib/site.ts servicePages), di bawah Penyelesaian selepas sistem ---------- */
  servicePages: {
    menuSystems: "Sistem siap guna",
    menuServices: "Untuk semua bisnes",
    useCasesTitle: "Cara lain kami bantu",
    useCasesIntro: "Ubah suai sistem, pemindahan data, e-mel perniagaan dan laman web, untuk apa jua bisnes di Malaysia.",
    others: "Cara lain kami bantu",
    priceEyebrow: "Harga",
    customisation: {
      label: "Ubah suai sistem",
      name: "Ubah Suai Sistem",
      blurb: "Perubahan ikut keperluan bisnes anda, dari RM {custom} sejam kerja.",
      points: [
        "Bayar ikut jam kerja, dari RM {custom}",
        "AI ramal jam kerja: sebut harga jelas dulu",
        "Ujian dan integrasi percuma",
        "Boleh bayar ansuran",
      ],
      cta: "Lihat contoh ubah suai",
      meta: {
        title: "Ubah Suai Sistem Malaysia | Dari RM {custom} Sejam",
        socialTitle: "Ubah Suai Sistem | Techub Software",
        description:
          "Fungsi, laporan dan cetakan baru untuk sistem anda di Malaysia. Bayar ikut jam kerja dari RM {custom}, dengan anggaran AI dulu, ujian percuma dan ansuran.",
        keywords: [
          "ubah suai sistem Malaysia",
          "sistem custom Malaysia",
          "perisian custom Malaysia",
          "laporan custom",
          "cetakan custom",
          "ubah suai sistem klinik",
          "ubah suai sistem salon",
          "software customisation Malaysia",
        ],
      },
      eyebrow: "Ubah Suai Sistem",
      heading: "Perubahan kecil, *bil pun kecil*",
      intro: "Perlukan laporan, cetakan atau fungsi baru? Kami caj ikut jam kerja, dari RM {custom}. AI kami ramal jam kerja, jadi anda tahu harganya sebelum kami mula.",
      primary: "Minta sebut harga",
      message: "Hai Techub, saya nak minta sebut harga untuk ubah suai sistem.",
      price: "Dari RM {custom} / jam",
      chips: ["Klinik", "Salon rambut", "Pusat kecantikan", "Spa", "Penjual live", "Semua bisnes"],
      highlights: ["Dari RM {custom} sejam kerja", "AI ramal jam kerja", "Sebut harga jelas dulu", "Ujian & integrasi percuma", "Pelan ansuran", "Support di WhatsApp"],
      storiesEyebrow: "Contoh",
      storiesTitle: "Berapa sebenarnya *kos perubahan kecil*",
      storiesIntro: "Permintaan biasa dari klinik, salon, spa dan penjual online, dengan jam kerja yang diperlukan.",
      stories: [
        { who: "Pelanggan A · Klinik", task: "Fail tuntutan ikut format syarikat panel baru", result: "Tuntutan panel siap dengan satu tekan setiap bulan." },
        { who: "Pelanggan B · Salon rambut", task: "Fail jualan bulanan ikut format akauntan mereka", result: "Tutup akaun bulanan tanpa taip semula satu jualan pun." },
        { who: "Pelanggan C · Spa", task: "Soalan baru dalam borang booking: dari mana kenal kami?", result: "Kini mereka tahu iklan mana yang bawa pelanggan." },
        { who: "Pelanggan D · Penjual online", task: "Fail order yang terus boleh upload ke courier", result: "Tak perlu lagi salin alamat satu per satu." },
      ],
      hours: "Lebih kurang {n} jam",
      monthly: "Pelan bulanan",
      storiesNote: "Contoh untuk tunjuk kos biasa. Sebut harga anda ikut permintaan anda.",
      buildTitle: "Apa yang kami boleh bina untuk anda",
      build: {
        reports: "Laporan baru",
        printouts: "Cetakan & borang",
        files: "Fail Excel & akaun",
        booking: "Soalan borang booking",
        whatsapp: "Mesej WhatsApp",
        workflow: "Aliran kerja & kelulusan",
        integration: "Sambungan ke sistem lain",
        module: "Modul baru sepenuhnya",
      },
      spotlights: {
        estimate: {
          eyebrow: "Sebut harga jelas dulu",
          title: "AI ramal jam kerja, *sebelum kami mula*",
          points: ["Beritahu keperluan anda di WhatsApp", "AI kami anggar jam kerja", "Lihat harga tepat ikut pelan anda", "Kami mula selepas anda setuju"],
        },
        testing: {
          eyebrow: "Ujian & integrasi percuma",
          title: "Diuji dan disambung, *tanpa caj*",
          points: ["Setiap perubahan disemak sebelum digunakan", "Disambung dengan bahagian lain sistem anda", "Ujian dan integrasi sentiasa percuma", "Kami maklumkan di WhatsApp bila dah siap"],
        },
      },
      faqs: [
        {
          q: "Berapa kos ubah suai sistem?",
          a: "Caj ikut jam kerja pada kadar pelan anda: RM {customMonthly} untuk pelan bulanan, RM {custom12} untuk 12 bulan, RM {custom24} untuk 24 bulan dan RM {custom} untuk 48 bulan. Ujian dan integrasi percuma.",
        },
        {
          q: "Macam mana saya tahu harga sebelum anda mula?",
          a: "Beritahu kami apa yang anda perlukan dan model AI kami akan ramal jam kerja. Anda dapat sebut harga yang jelas ikut pelan anda sebelum kerja bermula, dan kami hanya mula selepas anda setuju.",
        },
        { q: "Boleh bayar ansuran?", a: "Boleh, ada pelan ansuran. Tanya kami semasa anda terima sebut harga." },
        {
          q: "Apa yang boleh diubah suai?",
          a: "Laporan baru, cetakan dan borang, fail Excel dan akaun, soalan borang booking, mesej WhatsApp, aliran kerja dan kelulusan, sambungan ke sistem lain, atau modul baru sepenuhnya.",
        },
        { q: "Ada caj untuk ujian?", a: "Tiada. Ujian dan integrasi dengan bahagian lain sistem anda sentiasa percuma." },
      ],
      contact: {
        title: "Beritahu kami apa yang anda nak ubah",
        badge: "Sebut harga jelas dulu",
        text: "AI kami anggar jam kerja dan anda nampak harganya sebelum kami mula. Ujian dan integrasi percuma.",
      },
    },
    migration: {
      label: "Pemindahan data",
      name: "Pemindahan Data",
      blurb: "Bawa data anda dari mana-mana sistem, caj ikut masa, bukan saiz data.",
      points: [
        "Fail PDF, Excel, CSV atau TXT",
        "AI imbas sistem lama yang tak boleh export",
        "Dirancang bersama jurutera perisian kami",
        "Caj ikut masa, bukan saiz data",
      ],
      cta: "Lihat cara pemindahan data",
      meta: {
        title: "Pemindahan Data Malaysia | Excel, PDF & Sistem Lama",
        socialTitle: "Pemindahan Data | Techub Software",
        description:
          "Pindahkan rekod anda dari Excel, PDF, CSV, TXT atau sistem lama yang tak boleh export. Imbasan skrin AI, disemak jurutera, caj ikut masa, bukan saiz data.",
        keywords: [
          "pemindahan data Malaysia",
          "migrasi data",
          "import data Excel",
          "ekstrak data PDF",
          "OCR data",
          "pindah sistem lama",
          "pindah rekod klinik",
          "data migration Malaysia",
        ],
      },
      eyebrow: "Pemindahan Data",
      heading: "Bawa data anda, *dari mana-mana sistem*",
      intro: "PDF, Excel, CSV atau TXT, jurutera perisian kami pindahkan semuanya ke Techub. Sistem lama tak boleh export? AI kami baca terus dari skrin, halaman demi halaman.",
      primary: "Bincang dengan jurutera",
      message: "Hai Techub, saya nak pindahkan data saya ke Techub. Boleh saya bincang dengan jurutera anda?",
      price: "Lebih kurang RM {migration} / jam",
      chips: ["Klinik", "Salon rambut", "Pusat kecantikan", "Spa", "Penjual online", "Semua bisnes"],
      highlights: ["PDF, Excel, CSV & TXT", "Imbasan skrin AI", "Disemak jurutera", "Caj ikut masa", "Data banyak? Jangan risau", "Terus guna dalam Techub"],
      formatsEyebrow: "Apa jua format",
      formatsTitle: "Hantar apa yang ada, *kami bawa masuk*",
      formatsIntro: "Jurutera perisian kami semak fail anda bersama anda dulu, kemudian rancang pemindahannya.",
      formats: { pdf: "Laporan & imbasan", excel: "Spreadsheet", csv: "Export sistem", txt: "Fail teks" },
      formatsMore: "Format lain? Hantar contoh kepada kami.",
      spotlights: {
        scan: {
          eyebrow: "Imbasan skrin AI",
          title: "Tiada butang export? *AI kami baca.*",
          points: ["Alat AI kami imbas skrin sistem lama anda", "Data diambil halaman demi halaman, medan demi medan", "Setiap medan dipadankan ke tempatnya dalam Techub", "Disemak oleh jurutera perisian kami"],
        },
        check: {
          eyebrow: "Semakan kualiti",
          title: "Data bersih *dari hari pertama*",
          points: ["Rekod berganda dikesan dan digabung", "Nombor telefon dan tarikh dikemaskan", "Rekod yang kurang jelas dihantar untuk semakan", "Disemak sebelum mula digunakan"],
        },
      },
      timeEyebrow: "Harga yang adil",
      timeTitle: "Caj ikut masa, *bukan saiz data*",
      timeText: "Beberapa ribu rekod atau sejarah bertahun-tahun, anda bayar untuk masa jurutera, bukan saiz data anda. Jadi data yang banyak pun tetap mampu milik.",
      timeSmall: "Beberapa ribu rekod",
      timeBig: "Sejarah bertahun-tahun",
      timeSame: "Kadar sejam yang sama",
      stepsTitle: "Cara ia berfungsi",
      steps: ["Bincang dengan jurutera kami", "Dapat sebut harga ikut masa", "Kami pindah dan semak", "Mula guna Techub"],
      faqs: [
        {
          q: "Format apa yang boleh diimport?",
          a: "PDF, Excel, CSV dan TXT, serta kebanyakan fail export lain. Hantar contoh kepada kami dan jurutera perisian kami akan semak bersama anda dulu.",
        },
        {
          q: "Sistem lama saya tak boleh export. Masih boleh pindah data?",
          a: "Boleh. Alat AI kami imbas skrin sistem lama halaman demi halaman dan ambil datanya, dan jurutera kami semak semuanya sebelum dimasukkan ke Techub.",
        },
        {
          q: "Macam mana harga pemindahan data dikira?",
          a: "Ikut masa yang diambil, bukan jumlah data, biasanya lebih kurang RM {migration} sejam. Anda dapat anggaran selepas berbincang dengan jurutera perisian kami.",
        },
        { q: "Saya ada rekod bertahun-tahun. Ada masalah?", a: "Tiada masalah. Kami caj ikut masa, bukan saiz data, jadi rekod bertahun-tahun pun jangan risau." },
        {
          q: "Data saya selamat selepas dipindahkan?",
          a: "Ya. Dalam Techub, database anda disulitkan semasa disimpan dan setiap sambungan guna SSL/TLS, di server enterprise di Malaysia.",
        },
      ],
      contact: {
        title: "Beritahu kami di mana data anda sekarang",
        badge: "Caj ikut masa",
        text: "Excel, PDF, CSV, TXT atau sistem lama: jurutera perisian kami akan rancang pemindahannya bersama anda.",
      },
    },
    email: {
      label: "E-mel perniagaan",
      name: "E-mel Perniagaan",
      blurb: "E-mel dengan domain anda sendiri, RM {emailYear} setahun, kami setup untuk anda.",
      points: ["E-mel dengan domain anda sendiri", "Storan {emailStorage}, RM {emailYear} setahun", "Kami setup semuanya untuk anda", "Domain tidak termasuk"],
      cta: "Lihat e-mel perniagaan",
      meta: {
        title: "E-mel Perniagaan Malaysia | Domain Sendiri, RM {emailYear} Setahun",
        socialTitle: "E-mel Perniagaan | Techub Software",
        description:
          "E-mel profesional dengan domain anda sendiri, contohnya hello@bisnesanda.com. RM {emailYear} setahun dengan storan {emailStorage}, kami setup untuk anda di Malaysia. Domain tidak termasuk.",
        keywords: [
          "e-mel perniagaan Malaysia",
          "hosting e-mel Malaysia",
          "e-mel syarikat",
          "e-mel domain sendiri",
          "alamat e-mel profesional",
          "hosting e-mel murah",
          "business email Malaysia",
        ],
      },
      eyebrow: "E-mel Perniagaan",
      heading: "E-mel anda sendiri, *dengan domain anda*",
      intro: "Tukar e-mel percuma anda kepada hello@bisnesanda.com. RM {emailYear} setahun dengan storan {emailStorage}, dan kami setup semuanya untuk anda.",
      primary: "Dapatkan e-mel perniagaan",
      message: "Hai Techub, saya nak e-mel perniagaan dengan domain sendiri.",
      price: "RM {emailYear} / tahun",
      chips: ["Klinik", "Salon & spa", "Penjual online", "Pejabat", "Startup", "Semua bisnes"],
      highlights: ["Domain anda sendiri", "RM {emailYear} setahun", "Storan {emailStorage}", "Kami setup untuk anda", "Telefon, iPad & PC", "Support di WhatsApp"],
      usesEyebrow: "Contoh penggunaan",
      usesTitle: "Alamat yang *pelanggan percaya*",
      uses: [
        { who: "Klinik", address: "booking@klinikanda.com.my", text: "Pesakit dan syarikat panel e-mel klinik, bukan akaun peribadi seseorang." },
        { who: "Salon & spa", address: "hello@salonanda.com.my", text: "Pertanyaan booking dan invois pembekal dalam satu inbox yang kemas." },
        { who: "Penjual online", address: "orders@kedaianda.com.my", text: "E-mel order dari jenama anda sendiri nampak lebih dipercayai." },
        { who: "Mana-mana syarikat", address: "finance@syarikatanda.com.my", text: "Alamat kekal dengan bisnes walaupun staf bertukar." },
      ],
      spotlights: {
        setup: {
          eyebrow: "Kami setup untuk anda",
          title: "Kami setup semuanya, *anda terus guna*",
          points: ["Kami sambungkan domain anda", "Kami buat peti mel anda", "Kami tambah ke telefon dan PC anda", "Kami uji hantar dan terima e-mel"],
        },
        devices: {
          eyebrow: "Semua peranti",
          title: "Inbox anda di *semua telefon dan PC*",
          points: ["iPhone, Android, iPad, Windows dan Mac", "E-mel baru terus masuk", "Storan {emailStorage}", "Bantuan di WhatsApp bila perlu"],
          badges: ["Pertanyaan baru", "Domain anda sendiri"],
        },
      },
      faqs: [
        { q: "Berapa harga e-mel perniagaan?", a: "RM {emailYear} setahun dengan storan {emailStorage}, dan kami setup untuk anda." },
        {
          q: "Domain termasuk sekali?",
          a: "Tidak, harga ini tidak termasuk domain. Guna domain yang anda dah ada, atau beli satu seperti .com atau .com.my, dan kami sambungkan untuk anda.",
        },
        {
          q: "Anda setup untuk saya?",
          a: "Ya. Kami sambungkan domain anda, buat peti mel dan tambah ke telefon dan komputer anda, kemudian uji hantar dan terima e-mel.",
        },
        { q: "Boleh guna di telefon?", a: "Boleh, di telefon iPhone dan Android, iPad, serta komputer Windows atau Mac." },
        {
          q: "Kenapa tak guna e-mel percuma?",
          a: "Alamat dengan domain sendiri nampak lebih profesional dan buat pelanggan lebih percaya, dan ia kekal dengan bisnes anda walaupun staf bertukar.",
        },
      ],
      contact: {
        title: "Jom setup e-mel perniagaan anda",
        badge: "RM {emailYear} setahun",
        text: "Beritahu kami domain anda, atau domain yang anda mahu, dan kami setup semuanya untuk anda.",
      },
    },
    website: {
      label: "Reka laman web",
      name: "Reka Laman Web",
      blurb: "Laman web cantik dan laju dari RM {website}, siap dengan hosting.",
      points: [
        "Direka ikut jenama anda, sehingga {websitePages} halaman",
        "Tukar halaman serta-merta, tanpa reload",
        "Domain percuma untuk tahun pertama",
        "Hosting Cloudflare: lebih 1 juta paparan seminit",
      ],
      cta: "Lihat contoh laman web",
      meta: {
        title: "Reka Laman Web Malaysia | RM {website} Dengan Hosting & Domain Percuma",
        socialTitle: "Reka Laman Web | Techub Software",
        description:
          "Laman web cantik untuk bisnes di Malaysia: sehingga {websitePages} halaman, tukar halaman serta-merta, hosting Cloudflare, sedia untuk SEO dan carian AI. RM {website} dengan domain percuma tahun pertama.",
        keywords: [
          "reka laman web Malaysia",
          "buat website Malaysia",
          "web design Malaysia",
          "laman web bisnes kecil",
          "website murah Malaysia",
          "hosting Cloudflare",
          "website SEO Malaysia",
          "website dengan domain percuma",
        ],
      },
      eyebrow: "Reka Laman Web",
      heading: "Laman web cantik yang *terasa pantas*",
      intro: "Direka ikut jenama anda dan dihoskan di Cloudflare, dari RM {website} dengan domain percuma untuk tahun pertama. Tukar halaman serta-merta, tanpa reload.",
      primary: "Dapatkan laman web",
      message: "Hai Techub, saya nak buat laman web dengan hosting.",
      price: "RM {website} · domain percuma",
      chips: ["Klinik", "Salon & spa", "Kafe", "Homestay", "Studio", "Firma profesional"],
      highlights: ["Direka ikut jenama anda", "Tiada reload antara halaman", "Cantik di telefon", "Hosting Cloudflare", "Sedia untuk SEO & carian AI", "Domain percuma, tahun pertama"],
      galleryEyebrow: "Contoh reka bentuk",
      galleryTitle: "Direka untuk *memikat*",
      galleryIntro: "Konsep reka bentuk untuk bisnes contoh. Laman web anda direka ikut jenama anda sendiri.",
      gallery: { skin: "Klinik kulit", dental: "Klinik gigi", cafe: "Kafe", homestay: "Vila percutian", interior: "Reka bentuk dalaman", accounting: "Firma perakaunan" },
      spotlights: {
        instant: {
          eyebrow: "Teknologi satu halaman",
          title: "Tukar halaman *serta-merta*",
          points: ["Dibina dengan React dan Next.js", "Alamat bertukar, halaman tak reload", "Tiada skrin putih, tiada tunggu", "Terasa macam app di telefon"],
          badge: "Tanpa reload",
        },
        fast: {
          eyebrow: "Hosting Cloudflare",
          title: "Laju di mana-mana, *sedia untuk ramai pelawat*",
          points: ["Dihoskan di rangkaian global Cloudflare", "Mampu tampung lebih 1 juta paparan seminit", "Dioptimumkan untuk SEO dan carian AI", "Domain percuma untuk tahun pertama"],
          badge: "1 juta+ paparan seminit",
        },
      },
      faqs: [
        {
          q: "Berapa kos buat laman web?",
          a: "RM {website} untuk reka bentuk dan hosting, dengan domain percuma untuk tahun pertama. Selepas itu RM {websiteYear} setahun untuk penyelenggaraan.",
        },
        { q: "Berapa banyak halaman boleh ada?", a: "Sehingga {websitePages} halaman. Kami bina laman web statik, tanpa senarai produk atau blog." },
        {
          q: "Apa maksud \"tanpa reload\"?",
          a: "Laman web anda dibina dengan React dan Next.js sebagai app satu halaman. Bila pelawat buka halaman lain, alamatnya bertukar tetapi browser tak reload, jadi ia terasa lancar dan serta-merta.",
        },
        { q: "Laman web saya boleh tampung ramai pelawat?", a: "Boleh. Ia dihoskan di Cloudflare dan mampu tampung lebih 1 juta paparan seminit." },
        {
          q: "Pelanggan boleh jumpa laman web saya?",
          a: "Setiap laman web dioptimumkan untuk SEO dan carian AI, jadi enjin carian dan pembantu AI boleh baca dan faham halaman anda.",
        },
        {
          q: "Boleh tambah kedai online atau blog?",
          a: "Laman web kami statik, tanpa senarai produk atau blog. Untuk jual online semasa live, tanya tentang Sistem Jualan Live kami.",
        },
      ],
      contact: {
        title: "Jom reka laman web anda",
        badge: "RM {website} · domain percuma",
        text: "Ceritakan tentang bisnes anda dan gaya yang anda suka. Kami reka, hoskan dan lancarkan untuk anda.",
      },
    },
  },

  shots: {
    clinicDashboard: {
      title: "Dashboard klinik di iPad",
      alt: "Sistem pengurusan klinik Techub di iPad yang tunjuk giliran semasa, temujanji hari ini yang disahkan melalui WhatsApp, pendapatan dan amaran stok rendah",
    },
    medication: {
      title: "Rekod pesakit & ubat",
      alt: "Sejarah ubat pesakit di iPad dengan amaran alahan penisilin dan cadangan ubat alternatif",
    },
    bodyChart: {
      title: "Carta badan lukisan tangan",
      alt: "Carta badan di iPad dengan nota lukisan tangan doktor dan tandatangan persetujuan digital pesakit",
    },
    clinicStock: {
      title: "Stok ubat & analisis AI",
      alt: "Log keluar masuk stok ubat klinik di iPad dengan cadangan order semula dari AI dan batch ubat yang hampir luput",
    },
    clinicPermissions: {
      title: "Jejak aktiviti & akses staf",
      alt: "Log aktiviti staf dan akses ikut jawatan untuk doktor, jururawat, farmasi dan juruwang di iPad, tunjuk siapa buat apa dan bila",
    },
    whatsappClinic: {
      title: "Reminder temujanji WhatsApp",
      alt: "Pengesahan dan reminder temujanji WhatsApp yang dihantar secara automatik kepada pesakit klinik",
    },
    scanClinic: {
      title: "AI imbas nota penghantaran",
      alt: "Telefon imbas nota penghantaran pembekal ubat, AI baca setiap item, batch dan tarikh luput, lalu update stok klinik",
    },
    paymentClinic: {
      title: "Bayaran online & deposit",
      alt: "Pesakit bayar deposit RM 50 untuk saringan kesihatan di telefon, guna perbankan online (FPX), kad, e-wallet atau DuitNow QR, terus masuk akaun merchant klinik",
    },
    queueTv: {
      title: "Paparan panggil nombor giliran",
      alt: "Paparan TV panggil nombor giliran klinik yang tunjuk nombor A023 sedang dipanggil ke Bilik 2 dalam bahasa Inggeris, Melayu dan Cina",
    },
    printouts: {
      title: "Resit, MC & label",
      alt: "Contoh resit, MC (sijil cuti sakit) dan label ubat yang dicetak oleh sistem klinik Techub",
    },
    salonCalendar: {
      title: "Kalendar booking salon rambut",
      alt: "Kalendar booking salon rambut di iPad ikut stylist, dengan booking warna rambut, rebonding dan keratin, pelanggan walk-in serta pengesahan WhatsApp",
    },
    salonPos: {
      title: "Bayaran POS salon",
      alt: "Bayaran POS salon rambut di iPad dengan perkhidmatan, produk runcit, komisen stylist dan bayaran DuitNow QR",
    },
    salonStock: {
      title: "Stok produk salon & analisis AI",
      alt: "Log keluar masuk stok produk salon rambut di iPad dengan cadangan order semula dari AI",
    },
    salonPermissions: {
      title: "Jejak aktiviti & akses staf",
      alt: "Log aktiviti staf dan akses ikut jawatan untuk pemilik salon, pengurus, stylist dan receptionist di iPad",
    },
    whatsappSalon: {
      title: "Reminder booking WhatsApp",
      alt: "Pengesahan dan reminder booking WhatsApp yang dihantar secara automatik kepada pelanggan salon rambut, yang sahkan dengan sekali tekan",
    },
    salonCustomer: {
      title: "Profil pelanggan & formula warna",
      alt: "Profil pelanggan salon rambut di telefon dengan sejarah lawatan, formula warna, stylist kegemaran dan point member",
    },
    scanSalon: {
      title: "AI imbas nota penghantaran",
      alt: "Telefon imbas nota penghantaran produk rambut, AI baca setiap item dan update stok salon",
    },
    paymentSalon: {
      title: "Deposit booking online",
      alt: "Pelanggan bayar deposit booking RM 50 untuk warna & rawatan rambut di telefon, guna perbankan online (FPX), kad, e-wallet atau DuitNow QR, terus masuk akaun merchant salon",
    },
    depositsSalon: {
      title: "Deposit booking",
      alt: "Deposit booking salon di iPad, setiap satu disimpan sampai servis siap, dengan resit deposit dan butang Convert to income satu klik",
    },
    depositInvoiceSalon: {
      title: "Deposit jadi pendapatan, satu klik",
      alt: "Invois yang siap secara automatik di iPad selepas satu klik tukar deposit salon RM 50 jadi pendapatan, dengan deposit sudah ditolak",
    },
    depositNotesSalon: {
      title: "Invois, nota bayaran balik & nota kredit",
      alt: "Deposit salon di iPad dengan invois, nota bayaran balik atau nota kredit yang sistem sediakan untuk setiap satu, tanpa perlu ilmu perakaunan",
    },
    beautyCalendar: {
      title: "Kalendar booking pusat kecantikan",
      alt: "Kalendar booking pusat kecantikan di iPad dengan booking facial, bulu mata dan kening, kuku dan slimming, serta sesi pakej",
    },
    faceChart: {
      title: "Carta muka, gambar & persetujuan",
      alt: "Carta muka rawatan facial di iPad dengan nota kulit lukisan tangan beautician, gambar sebelum dan selepas serta e-tandatangan pelanggan",
    },
    beautyPos: {
      title: "Bayaran POS kecantikan",
      alt: "Bayaran POS pusat kecantikan di iPad dengan rawatan, redeem pakej, produk dan komisen staf",
    },
    beautyStock: {
      title: "Stok produk kecantikan & analisis AI",
      alt: "Log keluar masuk stok produk pusat kecantikan di iPad dengan cadangan order semula dari AI",
    },
    beautyPermissions: {
      title: "Jejak aktiviti & akses staf",
      alt: "Log aktiviti staf dan akses ikut jawatan untuk pemilik pusat kecantikan, pengurus, beautician dan receptionist di iPad",
    },
    whatsappBeauty: {
      title: "Reminder booking WhatsApp",
      alt: "Pengesahan dan reminder booking WhatsApp yang dihantar secara automatik kepada pelanggan pusat kecantikan, berserta baki sesi pakej",
    },
    beautyPackage: {
      title: "Pakej & sejarah rawatan",
      alt: "Profil pelanggan pusat kecantikan di telefon dengan pakej facial dan bulu mata, baki sesi, nota kulit dan booking seterusnya",
    },
    scanBeauty: {
      title: "AI imbas nota penghantaran",
      alt: "Telefon imbas nota penghantaran bekalan kecantikan, AI baca setiap item dan update stok",
    },
    paymentBeauty: {
      title: "Deposit booking online",
      alt: "Pelanggan bayar deposit booking RM 30 untuk Hydra Facial di telefon, guna perbankan online (FPX), kad, e-wallet atau DuitNow QR, terus masuk akaun merchant pusat kecantikan",
    },
    depositsBeauty: {
      title: "Deposit booking",
      alt: "Deposit booking pusat kecantikan di iPad, setiap satu disimpan sampai servis siap, dengan resit deposit dan butang Convert to income satu klik",
    },
    depositInvoiceBeauty: {
      title: "Deposit jadi pendapatan, satu klik",
      alt: "Invois yang siap secara automatik di iPad selepas satu klik tukar deposit pusat kecantikan RM 30 jadi pendapatan, dengan deposit sudah ditolak",
    },
    depositNotesBeauty: {
      title: "Invois, nota bayaran balik & nota kredit",
      alt: "Deposit pusat kecantikan di iPad dengan invois, nota bayaran balik atau nota kredit yang sistem sediakan untuk setiap satu, tanpa perlu ilmu perakaunan",
    },
    spaCalendar: {
      title: "Kalendar booking spa",
      alt: "Kalendar booking spa di iPad ikut terapis dan bilik, dengan booking urutan, skrub badan dan spa pasangan",
    },
    bodyChartSpa: {
      title: "Peta rawatan & tandatangan",
      alt: "Peta rawatan di iPad dengan bahagian urutan yang dilukis tangan oleh terapis dan tandatangan digital pelanggan",
    },
    spaPos: {
      title: "Bayaran POS spa",
      alt: "Bayaran POS spa di iPad dengan pakej urutan, produk runcit, komisen terapis dan pilihan bayaran",
    },
    spaStock: {
      title: "Stok spa & analisis AI",
      alt: "Log keluar masuk stok spa untuk minyak, skrub dan tuala di iPad dengan cadangan order semula dari AI",
    },
    spaPermissions: {
      title: "Jejak aktiviti & akses staf",
      alt: "Log aktiviti staf dan akses ikut jawatan untuk pemilik spa, pengurus, terapis dan receptionist di iPad",
    },
    whatsappSpa: {
      title: "Reminder booking WhatsApp",
      alt: "Pengesahan dan reminder booking WhatsApp yang dihantar secara automatik kepada pelanggan spa, yang sahkan dengan sekali tekan",
    },
    spaPackage: {
      title: "Pakej & membership",
      alt: "Profil pelanggan spa di telefon dengan baki sesi pakej, booking seterusnya dan pilihan urutan",
    },
    scanSpa: {
      title: "AI imbas nota penghantaran",
      alt: "Telefon imbas nota penghantaran bekalan spa, AI baca setiap item dan update stok",
    },
    paymentSpa: {
      title: "Deposit booking online",
      alt: "Pelanggan bayar deposit booking RM 40 untuk urutan Bali di telefon, guna perbankan online (FPX), kad, e-wallet atau DuitNow QR, terus masuk akaun merchant spa",
    },
    depositsSpa: {
      title: "Deposit booking",
      alt: "Deposit booking spa di iPad, setiap satu disimpan sampai servis siap, dengan resit deposit dan butang Convert to income satu klik",
    },
    depositInvoiceSpa: {
      title: "Deposit jadi pendapatan, satu klik",
      alt: "Invois yang siap secara automatik di iPad selepas satu klik tukar deposit spa RM 40 jadi pendapatan, dengan deposit sudah ditolak",
    },
    depositNotesSpa: {
      title: "Invois, nota bayaran balik & nota kredit",
      alt: "Deposit spa di iPad dengan invois, nota bayaran balik atau nota kredit yang sistem sediakan untuk setiap satu, tanpa perlu ilmu perakaunan",
    },
    permissionsDesktop: {
      title: "Jejak aktiviti staf di PC",
      alt: "Log aktiviti staf dan kawalan akses dalam browser di PC, dengan setiap diskaun dan refund direkod",
    },
    clinicDashboardDesktop: {
      title: "Dashboard Techub di PC",
      alt: "Dashboard cloud Techub dalam browser di PC yang tunjuk giliran semasa, temujanji hari ini, pendapatan mingguan dan cadangan stok dari AI",
    },
    reportsClinic: {
      title: "Laporan klinik",
      alt: "Laporan klinik di iPad yang siap dalam masa kurang 100 ms: pesakit yang dirawat, konsultasi, kutipan dan jualan ikut doktor",
    },
    reportsSalon: {
      title: "Laporan salon",
      alt: "Laporan jualan salon di iPad yang siap dalam masa kurang 100 ms: jualan ikut stylist, perkhidmatan dan runcit",
    },
    reportsBeauty: {
      title: "Laporan pusat kecantikan",
      alt: "Laporan pusat kecantikan di iPad yang siap dalam masa kurang 100 ms: jualan pakej, sesi yang digunakan dan rawatan paling popular",
    },
    reportsSpa: {
      title: "Laporan spa",
      alt: "Laporan spa di iPad yang siap dalam masa kurang 100 ms: penggunaan terapis dan bilik, serta pakej yang dijual",
    },
    staffSalon: {
      title: "Profil stylist sendiri",
      alt: "Profil seorang stylist di telefon dengan booking hari ini berserta statusnya dan komisen bulan ini",
    },
    staffBeauty: {
      title: "Profil beautician sendiri",
      alt: "Profil seorang beautician di telefon dengan booking hari ini berserta statusnya dan komisen bulan ini",
    },
    staffSpa: {
      title: "Profil terapis sendiri",
      alt: "Profil seorang terapis di telefon dengan booking hari ini berserta statusnya dan komisen bulan ini",
    },
    payrollSalon: {
      title: "Gaji staf salon",
      alt: "Senarai gaji bulanan di iPad dengan gaji asas, komisen jualan, elaun dan gaji bersih setiap stylist",
    },
    payrollBeauty: {
      title: "Gaji staf pusat kecantikan",
      alt: "Senarai gaji bulanan di iPad dengan gaji asas, komisen jualan, elaun dan gaji bersih setiap beautician",
    },
    payrollSpa: {
      title: "Gaji staf spa",
      alt: "Senarai gaji bulanan di iPad dengan gaji asas, komisen jualan, elaun dan gaji bersih setiap terapis",
    },
    eInvoice: {
      title: "e-Invois LHDN",
      alt: "e-Invois yang disahkan melalui LHDN MyInvois, dengan nombor pengenalan unik dan kod QR",
    },
    erpDesktop: {
      title: "Sistem ERP custom",
      alt: "Contoh dashboard ERP custom dengan modul jualan, pembelian, inventori, akaun dan HR",
    },
    plateScanner: {
      title: "Scanner nombor plat",
      alt: "Contoh sistem scanner nombor plat yang baca nombor plat kereta di palang pintu masuk, dengan log kenderaan keluar masuk",
    },
    objectDetection: {
      title: "AI pengesanan objek",
      alt: "Contoh sistem AI pengesanan objek yang tandakan orang, topi keselamatan, kotak dan kenderaan pada paparan kamera",
    },
    liveDashboard: {
      title: "Dashboard jualan live",
      alt: "Dashboard jualan live di iPad semasa sesi live, dengan 1,286 pelawat online, order seminit, jumlah jualan setakat ini dan baki stok setiap produk",
    },
    liveVisitors: {
      title: "Pelawat live ikut halaman",
      alt: "Skrin pelawat live di iPad yang tunjuk berapa ramai orang di kedai sekarang, halaman yang setiap seorang sedang buka, serta order dan bayaran yang masuk secara live",
    },
    liveQueue: {
      title: "Giliran order Kafka",
      alt: "Skrin pantau giliran order di iPad: giliran Kafka sihat dengan 0 order menunggu, lonjakan 412 order seminit diproses dengan lancar, dan order yang melebihi stok disekat",
    },
    liveProducts: {
      title: "Produk & tarikh jualan",
      alt: "Senarai produk di iPad dengan produk baru sedang ditambah, berserta harga, stok serta tarikh dan masa ia mula dijual",
    },
    reportsLive: {
      title: "Laporan jualan live",
      alt: "Laporan jualan live di iPad yang siap dalam masa kurang 100 ms: jualan, order, pelawat, kadar conversion, cara bayaran dan produk terlaris",
    },
    livePermissions: {
      title: "Jejak aktiviti & akses staf",
      alt: "Log aktiviti staf dan akses untuk pemilik kedai live, pengurus, host live, packer dan khidmat pelanggan di iPad, dengan tukar harga masa live perlu kelulusan",
    },
    liveShop: {
      title: "Halaman jualan di telefon pembeli",
      alt: "Halaman jualan live di telefon dengan tanda LIVE, 1,286 orang di kedai, produk dengan baki stok dan produk yang sudah habis ditutup",
    },
    liveProduct: {
      title: "Tinggal 3 sahaja",
      alt: "Halaman produk di telefon yang tunjuk tinggal 3 sahaja, bar stok live, 121 orang sedang tengok dan butang Buy now",
    },
    liveCheckout: {
      title: "Order disahkan",
      alt: "Order disahkan di telefon pembeli, dibayar melalui online banking, dengan resit rasmi dihantar ke WhatsApp",
    },
    livePayment: {
      title: "Bayaran online masa checkout",
      alt: "Pembeli bayar RM 77.80 untuk order jualan live di telefon, guna perbankan online (FPX), kad, e-wallet atau DuitNow QR, terus masuk akaun merchant kedai",
    },
    customRequest: {
      title: "Permintaan ubah suai di WhatsApp",
      alt: "Klinik minta Techub di WhatsApp untuk export tuntutan panel baru dan dapat sebut harga 6 jam kerja pada RM 80, dengan ujian dan integrasi percuma",
    },
    customEstimate: {
      title: "Anggaran jam kerja AI & sebut harga",
      alt: "Permintaan ubah suai di iPad dengan anggaran AI 6 jam kerja dan sebut harga RM 480 untuk pelan 48 bulan, ujian dan integrasi percuma",
    },
    customTesting: {
      title: "Ujian & integrasi percuma",
      alt: "Ujian dan integrasi fungsi baru klinik di iPad, semua semakan lulus, tanpa caj",
    },
    customClaims: {
      title: "Pelanggan A: export tuntutan panel",
      alt: "Tuntutan panel klinik bulan Oktober di iPad dengan butang export baru yang buat fail Excel ikut format syarikat panel",
    },
    customSalesExport: {
      title: "Pelanggan B: jualan ikut format akauntan",
      alt: "Laporan jualan bulanan salon rambut di iPad, diexport ikut format Excel akauntan mereka",
    },
    customFoundUs: {
      title: "Pelanggan C: \"Dari mana kenal kami?\"",
      alt: "Borang booking spa di iPad dengan soalan baru, dari mana kenal kami, dan laporan jawapan daripada 312 booking",
    },
    customCourier: {
      title: "Pelanggan D: fail upload courier",
      alt: "214 order hari ini penjual online di iPad, sedia dimuat turun sebagai fail upload pukal courier",
    },
    migrationImport: {
      title: "Import dari apa jua format",
      alt: "Ruang kerja pemindahan data membaca fail Excel, PDF, CSV dan TXT dari sistem klinik lama, dengan AI padankan setiap lajur lama ke medan Techub",
    },
    migrationScan: {
      title: "Imbasan skrin AI",
      alt: "AI imbas skrin sistem lama halaman demi halaman dan ambil setiap medan, untuk sistem yang tak boleh export data",
    },
    migrationCheck: {
      title: "Setiap rekod disemak",
      alt: "Semakan pemindahan data untuk 143,861 rekod dengan rekod berganda digabung, nombor telefon dibaiki dan beberapa rekod dihantar untuk semakan",
    },
    migrationDone: {
      title: "Pemindahan data selesai",
      alt: "Pemindahan data selesai dengan 143,861 rekod dalam Techub, caj ikut masa jurutera, bukan saiz data",
    },
    migrationChat: {
      title: "Pemindahan data di WhatsApp",
      alt: "Klinik hantar fail Excel dan PDF imbasan kepada Techub di WhatsApp, dapat pelan pemindahan yang dicaj ikut masa, kemudian 143,861 rekod sudah live",
    },
    emailInbox: {
      title: "E-mel perniagaan dengan domain sendiri",
      alt: "Inbox salon rambut di iPad dengan alamat domain sendiri, dengan pertanyaan rambut pengantin dibuka",
    },
    emailSetup: {
      title: "E-mel disetup untuk anda",
      alt: "E-mel perniagaan disetup oleh Techub: domain disambung, empat peti mel dibuat, telefon dan PC staf ditambah, storan 5 GB",
    },
    emailPhone: {
      title: "E-mel di telefon anda",
      alt: "Pertanyaan pelanggan baru masuk ke inbox e-mel perniagaan salon di telefon",
    },
    siteHome: {
      title: "Reka laman web: klinik kulit",
      alt: "Contoh laman web klinik kulit di Bangsar, Kuala Lumpur, dengan halaman utama yang elegan dan butang tempah konsultasi",
    },
    siteTreatments: {
      title: "Halaman rawatan, tanpa reload",
      alt: "Halaman rawatan laman web klinik kulit dengan harga dalam RM, dibuka serta-merta tanpa reload",
    },
    siteContact: {
      title: "Halaman booking & WhatsApp",
      alt: "Halaman booking laman web klinik kulit dengan borang booking, butang WhatsApp, waktu operasi dan peta",
    },
    sitePhone: {
      title: "Laman web di telefon",
      alt: "Laman web klinik kulit di telefon dengan tajuk utama dan butang tempah",
    },
    siteDental: {
      title: "Reka laman web: klinik gigi",
      alt: "Contoh laman web klinik gigi keluarga di Petaling Jaya dengan harga rawatan dalam RM dan booking temujanji",
    },
    siteCafe: {
      title: "Reka laman web: kafe",
      alt: "Contoh laman web kafe bakeri di George Town, Pulau Pinang, dengan menu kopi, roti bakar kaya dan pastri dalam RM",
    },
    siteCafePhone: {
      title: "Laman web kafe di telefon",
      alt: "Laman web kafe bakeri di telefon dengan menu dan butang order untuk pickup",
    },
    siteHomestay: {
      title: "Reka laman web: vila percutian",
      alt: "Contoh laman web vila percutian dengan kolam peribadi di Langkawi, dengan carian tarikh kosong dan harga semalam",
    },
    siteHomestayPhone: {
      title: "Laman web vila di telefon",
      alt: "Laman web vila percutian di telefon dengan butang semak tarikh kosong",
    },
    siteInterior: {
      title: "Reka laman web: studio dalaman",
      alt: "Contoh laman web studio reka bentuk dalaman di Kuala Lumpur dengan galeri projek",
    },
    siteAccounting: {
      title: "Reka laman web: firma perakaunan",
      alt: "Contoh laman web firma perakaunan dan cukai untuk PKS di Johor Bahru dengan senarai servis dan butang konsultasi percuma",
    },
  },
};

export default ms;
