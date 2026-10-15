// All English text on the site. ms.ts (Bahasa Melayu) and zh.ts (Simplified Chinese) have the same keys.
//
// Placeholders are filled in from lib/site.ts, so prices and contact details only change there:
//   {name} company name · {price} monthly price · {months} free months · {custom} lowest customisation rate per work hour
//   {customMonthly} {custom12} {custom24} customisation rate per work hour on the monthly, 12-month and 24-month plans
//   {migration} {emailYear} {emailStorage} {website} {websiteYear} {websitePages} prices of the other services
//   {livePrice} Live Selling System monthly price · {uptime} uptime · {phone} WhatsApp number · {email} email address
//   {monthly} Standard Plan paid month to month · {planPrice} Standard Plan per month on 12 to 48 months
//   {monthlySave} how much less a month costs on 12 to 48 months · {welcomeUsers} users who can get the Welcome offer
//   {welcomePaid} {welcomeFree} the Welcome offer's paid and free months · {welcomeAverage} {welcomeDaily} what it comes to a month and a day
// Words between *asterisks* are shown in the blue gradient colour (headings only).

const en = {
  ui: {
    skip: "Skip to content",
    home: "Home",
    logoAlt: "Techub Software logo",
    logoHome: "Techub Software home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    freeDemo: "Free Demo",
    getFreeDemo: "Get a Free Demo",
    bookFreeDemo: "Book a Free Demo",
    askDemo: "Ask for a demo",
    requestDemo: "Request a Demo",
    whatsappMessage: "Hi Techub Software, I'm interested in your system. Can I get a free demo?",
    emailSubject: "Enquiry about Techub system",
    priceLine: "From RM {price}/month per outlet",
    livePriceLine: "From RM {livePrice}/month per outlet",
    freeMonths: "{months} months free",
    getQuote: "Get a Quote",
    enlarge: "Enlarge picture",
  },

  nav: {
    useCases: "Use Cases",
    technology: "Technology",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog",
  },

  menu: {
    useCases: "Use cases",
    otherTitle: "Another kind of business?",
    otherText: "We build custom systems too.",
    all: "See all use cases",
  },

  // The business types with a ready system. Each has its own page.
  systems: {
    clinic: {
      label: "Clinic",
      name: "Clinic Management System",
      blurb: "Patient records, medication tracking, queue and printing.",
      points: [
        "Patient records tracking",
        "IC scanner (OCR) for fast patient registration",
        "Medication tracking system",
        "Queue number calling on TV",
        "X-ray machine & printer connection",
        "Online payment & deposits via payment gateway",
        "Detailed reports in under 100 ms",
        "Digital MC, receipts & invoices sent automatically",
        "Online referral letters, format tuned free",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, patient data protected",
      ],
      cta: "See the clinic system",
    },
    salon: {
      label: "Hair Salon",
      name: "Salon Appointment System",
      blurb: "Stylist bookings, staff profiles, payroll and POS.",
      points: [
        "Automatic WhatsApp notifications",
        "Each stylist has their own profile",
        "Inventory tracking & payroll calculation",
        "Works on iPad, phone & PC",
        "Online payment & deposits via payment gateway",
        "Deposits to income in one click",
        "Detailed reports in under 100 ms",
        "Receipts, invoices, CN & RN sent automatically",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, your data protected",
      ],
      cta: "See the salon system",
    },
    beauty: {
      label: "Beauty Centre",
      name: "Beauty Centre Appointment System",
      blurb: "Packages, face charts, staff payroll and POS.",
      points: [
        "Packages & session tracking",
        "Face charts, photos & consent",
        "Staff profiles & payroll calculation",
        "Automatic WhatsApp reminders",
        "Online payment & deposits via payment gateway",
        "Deposits to income in one click",
        "Detailed reports in under 100 ms",
        "Receipts, invoices, CN & RN sent automatically",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, your data protected",
      ],
      cta: "See the beauty centre system",
    },
    spa: {
      label: "Spa & Massage",
      name: "Spa Appointment System",
      blurb: "Therapists, rooms, packages and payroll.",
      points: [
        "Therapist & room scheduling",
        "Automatic WhatsApp notifications",
        "Staff profiles, inventory & payroll",
        "Works on iPad, phone & PC",
        "Online payment & deposits via payment gateway",
        "Deposits to income in one click",
        "Detailed reports in under 100 ms",
        "Receipts, invoices, CN & RN sent automatically",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, your data protected",
      ],
      cta: "See the spa system",
    },
    live: {
      label: "Live Selling",
      name: "Live Selling System",
      blurb: "Flash sales for big crowds, with no overselling.",
      points: [
        "Big crowds handled by Kafka order queueing",
        "No overselling: stock checked on every order",
        "Choose each product's selling date and time",
        "Live visitor count and the page they're on",
        "Online payment via payment gateway",
        "Advanced reports, from RM {livePrice}/month per outlet",
        "Receipts, invoices, CN & RN sent automatically",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, your data protected",
      ],
      cta: "See the live selling system",
    },
    inventory: {
      label: "Inventory & ERP",
      name: "Inventory & ERP System",
      blurb: "Stock, sales and accounting in one, no accounting knowledge needed.",
      points: [
        "Batch stock in, with labels printed",
        "Every item tracked from stock in to delivery",
        "Barcode printing and QR codes",
        "Sales linked to stock and accounting",
        "Invoices, CN & RN made and sent automatically",
        "One-click returns with credit or refund notes",
        "Multiple outlets: switch and view each one",
        "Every staff action tracked, your data protected",
      ],
      cta: "See the inventory system",
    },
  },

  footer: {
    blurb:
      "{name} is a software company based in Malaysia. We build smart, low-cost systems for clinics, hair salons, beauty centres, spas, live sellers and trading companies across Malaysia, and custom systems such as AI object detection and number plate scanners. {uptime} uptime guarantee, from RM {price}/month per outlet.",
    useCases: "Use cases",
    custom: "Custom systems",
    company: "Company",
    about: "About us",
    services: "Services",
    technology: "Technology",
    pricing: "Pricing",
    faq: "FAQ",
    blog: "Blog",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Smart, low-cost business systems in Malaysia.",
  },

  bubble: {
    hello: "Hi there! 👋",
    text: "Want a free demo? Your first {months} months are free.",
    liveText: "Want to see the Live Selling System? Request a demo on WhatsApp.",
    chat: "Chat with us",
    close: "Close message",
    label: "Chat with Techub Software on WhatsApp {phone}",
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist.",
    back: "Back to home",
  },

  /* ---------- Home page ---------- */
  home: {
    meta: {
      title: "Appointment & Online Booking System Malaysia | Techub Software",
      description:
        "AI appointment and booking system for clinics, salons, beauty centres and spas in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia. WhatsApp reminders. From RM {price}/month per outlet, {months} months free.",
      keywords: [
        "online booking system Malaysia",
        "appointment booking app",
        "appointment system Malaysia",
        "appointment management system Malaysia",
        "booking system Malaysia",
        "clinic management system Malaysia",
        "salon appointment system",
        "beauty centre system",
        "spa booking system",
        "WhatsApp appointment reminder",
        "AI stock control",
        "LHDN e-Invoice system",
        "live selling system Malaysia",
        "custom software Malaysia",
        "ERP system Malaysia",
        "software company Malaysia",
        "Techub Software",
      ],
    },
    hero: {
      badge: "Malaysia's most chosen appointment system",
      title: "Advanced booking system with *AI integration*",
      intro:
        "Online booking, real-time updates, WhatsApp notifications and stock control on an enterprise-level database in Malaysia, with {uptime} uptime and guaranteed speed.",
      secondary: "Explore use cases",
      note: "First {months} months free, including installation and staff training.",
      statUptime: "Uptime",
      statReports: "Reports in",
      statReportsValue: "<100 ms",
      statFrom: "From",
      perMonth: "/mo",
    },
    highlights: {
      eyebrow: "Why Techub",
      title: "Why businesses in Malaysia *choose Techub*",
      items: {
        booking: { title: "Bookings in under 10 seconds", text: "Pick the service, staff and time, and it's booked. Walk-ins too." },
        realtime: { title: "Real-time updates", text: "A booking or sale on one device shows on every device at once." },
        deposit: { title: "Online payment & deposits", text: "Works with various payment gateways. Customers pay online, straight into your account." },
        whatsapp: { title: "WhatsApp reminders", text: "Booking confirmations and reminders sent on WhatsApp for you." },
        accounting: {
          title: "Auto accounting documents",
          text: "Invoices, credit notes, refund notes and official receipts made for you. No accounting staff needed.",
        },
        einvoice: { title: "LHDN e-Invoice", text: "e-Invoices submitted to LHDN MyInvois, straight from the system." },
        inventory: { title: "Inventory tracking", text: "Stock updates with every sale or use, with low-stock alerts." },
        reports: { title: "Advanced reports", text: "Sales, staff, stock and customer reports in under 100 ms." },
        permissions: { title: "Activity tracking & permissions", text: "Every staff action is recorded. You decide who can discount, refund or see reports." },
        devices: { title: "Any device, any platform", text: "Windows, Mac, iPad, Android and iPhone. Use what you already have." },
        easy: { title: "Easy to use", text: "Simple screens your staff learn fast. We set up and train them." },
        uptime: { title: "{uptime} uptime", text: "Enterprise servers in Malaysia with multi-region backups." },
      },
    },
    softwareName: "Techub Appointment Management System",
    softwareCategory: "Appointment scheduling and business management",
    useCasesListName: "Techub Software use cases",
    servicesListName: "Techub Software services",
  },

  /* ---------- Moving example screens (components/ScreenDemo.tsx; the moments are in components/demoScenes.ts) ---------- */
  // One short note for each moment: a title of up to about 24 characters and a line of up to about 28, so both fit on
  // a phone. {product} is the system's name (or `techub`).
  demo: {
    label: "Example screens: {product} at work",
    pause: "Pause the example screens",
    play: "Play the example screens",
    techub: "Techub",
    // The Technology page's picture of Techub Cloud and what it connects to.
    hub: {
      label: "How Techub Cloud connects your devices and services",
      pause: "Pause the moving picture",
      play: "Play the moving picture",
    },
    notes: {
      home: {
        realtime: { title: "Real-time on every device", text: "Cloud · iPad, phone & PC" },
        deposit: { title: "Deposit paid · RM 40", text: "Straight into your own account" },
        booking: { title: "Booked in under 10 seconds", text: "Balinese Massage · 90 min" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Priya tapped Confirm" },
        report: { title: "Report ready in 91 ms", text: "15,382 records" },
        ai: { title: "AI read the delivery note", text: "6 items added to stock" },
        live: { title: "1,286 watching live", text: "2,418 orders, no overselling" },
      },
      clinic: {
        queue: { title: "Now calling A023", text: "Room 2 · Dr. Lim" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Ahmad tapped Confirm" },
        allergy: { title: "Allergy caught in time", text: "Safer choice: Azithromycin" },
        chart: { title: "Body chart saved", text: "Knee swelling ~3 cm" },
        activity: { title: "Staff activity tracked", text: "Cashier blocked from records" },
        deposit: { title: "Deposit paid · RM 50", text: "Straight into your account" },
        stock: { title: "AI: low on Amoxicillin", text: "Order 500 caps by Thursday" },
        report: { title: "Report ready in 86 ms", text: "24,618 records" },
      },
      salon: {
        confirmed: { title: "15 of 17 confirmed", text: "All through WhatsApp" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Wen Qi tapped Confirm" },
        deposit: { title: "Deposit paid · RM 50", text: "Straight into your account" },
        commission: { title: "Commission worked out", text: "Mei Fen +RM 15.00" },
        staff: { title: "Each stylist's own app", text: "5 bookings · RM 1,086 earned" },
        activity: { title: "Staff activity tracked", text: "Export blocked for Amir" },
        stock: { title: "AI: low on Developer 6%", text: "Order 12 bottles by Thursday" },
        payroll: { title: "Payroll ready to approve", text: "8 staff · RM 28,963" },
      },
      beauty: {
        packages: { title: "Package session booked", text: "Chloe Tan · session 4 of 10" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Aqilah tapped Confirm" },
        left: { title: "6 of 10 sessions left", text: "Hydra Facial · Aqilah Razak" },
        faceChart: { title: "Face chart saved", text: "Oily T-zone · session 4 of 6" },
        deposit: { title: "Deposit paid · RM 30", text: "Straight into your account" },
        activity: { title: "Staff activity tracked", text: "Export blocked for Nadia" },
        stock: { title: "AI: low on lash glue", text: "Order 10 bottles by Thursday" },
        report: { title: "Report ready in 72 ms", text: "13,940 records" },
      },
      spa: {
        couple: { title: "Couple suite booked", text: "Mr & Mrs Lee · rose petals" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Priya tapped Confirm" },
        package: { title: "6 of 10 sessions left", text: "Balinese Massage package" },
        map: { title: "Treatment map saved", text: "Deep tissue, medium pressure" },
        staff: { title: "Each therapist's own app", text: "4 bookings · RM 812 earned" },
        activity: { title: "Staff activity tracked", text: "Customer's phone kept hidden" },
        stock: { title: "AI: low on body scrub", text: "Order 6 tubs by Thursday" },
        payroll: { title: "Payroll ready to approve", text: "8 staff · RM 29,838" },
      },
      live: {
        visitors: { title: "1,286 shopping right now", text: "7,812 visitors tonight" },
        buy: { title: "Bought in one tap", text: "Tudung Bawal · 58 left" },
        rush: { title: "412 orders in one minute", text: "All processed, none failed" },
        last: { title: "Only 3 left", text: "Checked again at payment" },
        stopped: { title: "186 oversells stopped", text: "Before payment, none charged" },
        paid: { title: "Paid · RM 77.80", text: "Straight into your account" },
        receipt: { title: "Receipt sent on WhatsApp", text: "Order #LS-24180 confirmed" },
        activity: { title: "Staff activity tracked", text: "Buyer list export blocked" },
      },
      inventory: {
        stockIn: { title: "1,240 units in, 8 batches", text: "Labels printed, bill to Accounts" },
        scan: { title: "Found by scan in 0.2 s", text: "96 on hand at rack A-03-2" },
        trail: { title: "Delivered at 3:52 PM", text: "Every step: who, when, which doc" },
        sale: { title: "Done for you automatically", text: "Invoice, DO, stock & journal" },
        return: { title: "One click: Return", text: "2 Air Fryers back on the rack" },
        creditNote: { title: "Credit note made by itself", text: "CN-2026-0093 · RM 378.00" },
        report: { title: "Report ready in 74 ms", text: "48,326 records" },
        activity: { title: "Staff activity tracked", text: "Export blocked for Farid" },
      },
      contact: {
        whatsapp: { title: "WhatsApp reminder sent", text: "Wen Qi tapped Confirm" },
        deposit: { title: "Deposit paid · RM 50", text: "Straight into your account" },
        staff: { title: "Your team's own app", text: "Bookings & commission" },
        ai: { title: "AI read the delivery note", text: "6 items added to stock" },
      },
      erp: {
        sales: { title: "RM 486,920 this month", text: "Sales, stock & accounts" },
        approvals: { title: "4 approvals waiting", text: "Approve in one tap" },
        einvoice: { title: "e-Invoice validated", text: "By LHDN MyInvois" },
      },
      detection: {
        helmet: { title: "No helmet spotted", text: "Alert sent · Zone B" },
        bay: { title: "42 of 60 bays taken", text: "Car park P1 · live count" },
        count: { title: "2,771 objects tracked", text: "People, cars & helmets" },
      },
      plate: {
        read: { title: "Plate read in 0.18 s", text: "VKM 2318 · 99.2% match" },
        gate: { title: "Gate opened for resident", text: "Tan Wei Ming · B-12-03" },
        denied: { title: "Unknown car kept out", text: "PKB 8890 · no invite" },
      },
      salonDeposits: {
        paid: { title: "Deposit paid · RM 50", text: "Wen Qi booked online" },
        held: { title: "Held as a deposit", text: "Not income until the visit" },
        convert: { title: "One click to income", text: "Once the service is done" },
        invoice: { title: "Invoice made for you", text: "Deposit RM 50 deducted" },
        notes: { title: "Refund & credit notes too", text: "No accounting skills needed" },
      },
      beautyDeposits: {
        paid: { title: "Deposit paid · RM 30", text: "Nadia booked online" },
        held: { title: "Held as a deposit", text: "Not income until the visit" },
        convert: { title: "One click to income", text: "Once the service is done" },
        invoice: { title: "Invoice made for you", text: "Deposit RM 30 deducted" },
        notes: { title: "Refund & credit notes too", text: "No accounting skills needed" },
      },
      spaDeposits: {
        paid: { title: "Deposit paid · RM 40", text: "Priya booked online" },
        held: { title: "Held as a deposit", text: "Not income until the visit" },
        convert: { title: "One click to income", text: "Once the service is done" },
        invoice: { title: "Invoice made for you", text: "Deposit RM 40 deducted" },
        notes: { title: "Refund & credit notes too", text: "No accounting skills needed" },
      },
      customisation: {
        request: { title: "Customer A asks on WhatsApp", text: "A claim file for a new panel" },
        estimate: { title: "AI estimate: about 6 hours", text: "A clear quote before we start" },
        quote: { title: "RM 480 on the 48-month plan", text: "Instalment plan available" },
        testing: { title: "Testing & integration free", text: "Checked before it goes live" },
        live: { title: "Live in the system", text: "New claim export in one tap" },
      },
      migration: {
        formats: { title: "PDF, Excel, CSV & TXT", text: "Planned with our engineers" },
        scan: { title: "AI reads the old system", text: "Page by page, when it can't export" },
        check: { title: "Every record checked", text: "Duplicates merged, gaps fixed" },
        done: { title: "Charged by time, not volume", text: "143,861 records moved" },
      },
      email: {
        domain: { title: "Your own domain", text: "hello@demosalon.com.my" },
        phone: { title: "On every phone & PC", text: "New enquiries right away" },
        setup: { title: "We set it all up", text: "Domain, mailboxes & devices" },
        storage: { title: "{emailStorage} of storage", text: "RM {emailYear} a year" },
      },
      website: {
        design: { title: "Designed for your brand", text: "Up to {websitePages} pages" },
        instant: { title: "Pages change instantly", text: "No reload, no waiting" },
        phone: { title: "Perfect on phones", text: "Every screen size" },
        contact: { title: "Customers reach you fast", text: "WhatsApp, booking & map" },
        seo: { title: "Ready for SEO & AI search", text: "Hosted on Cloudflare" },
      },
      hub: {
        devices: { title: "Every device in sync", text: "iPad, phone & PC, real time" },
        whatsapp: { title: "WhatsApp reminder sent", text: "Customer tapped Confirm" },
        printers: { title: "Label printed", text: "Receipts, labels & MC slips" },
        caller: { title: "Now calling A023", text: "On the queue TV" },
        xray: { title: "X-ray linked to record", text: "Straight from the machine" },
        ai: { title: "AI read the delivery note", text: "6 items added to stock" },
        einvoice: { title: "e-Invoice sent to LHDN", text: "Straight from the bill" },
        reports: { title: "Report ready in 86 ms", text: "24,618 records" },
      },
    },
  },

  about: {
    eyebrow: "About Techub",
    title: "Malaysia SMEs' choice, *simple and affordable*",
    intro:
      "We are based in Malaysia and build systems that help local businesses take bookings, serve customers and manage stock. Then we set everything up for you.",
    values: {
      cost: { title: "Low cost", text: "From RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users). Customisation from RM {custom} per work hour." },
      online: { title: "Always online", text: "{uptime} uptime guarantee, with multi-region backups." },
      done: { title: "Done for you", text: "We install, connect your hardware and train your staff." },
      custom: { title: "Built your way", text: "We customise forms, workflows, reports and printouts." },
    },
  },

  uptime: {
    label: "uptime guarantee",
    text: "Practically always online, day and night, all year round.",
    chips: ["Servers in Malaysia", "Monitored", "Encrypted backups"],
  },

  services: {
    eyebrow: "Our services",
    title: "What we do for you",
    intro: "Ready-made or built for you, for businesses across Malaysia. We set it all up and train your team.",
    items: {
      systems: { title: "Ready-made systems", text: "Appointment systems for clinics, salons, beauty centres and spas, plus live selling." },
      custom: {
        title: "Custom system development",
        text: "ERP, AI object detection, number plate scanners and more, from RM {custom} per work hour.",
      },
      hardware: {
        title: "Hardware setup",
        text: "Label printers, number calling systems, X-ray machines and more, installed and connected.",
      },
      support: { title: "Training & support", text: "Free installation and staff training, then local support in Malaysia on WhatsApp." },
    },
    howTitle: "How we work",
    howText: "Charged by the work hour, from RM {custom}. You get a clear quote before we start, and testing and integration are free.",
    howCta: "Discuss your needs",
    howMessage: "Hi Techub, I'd like to discuss a customised system.",
    steps: ["Consult", "Customise", "Install & train", "Go live"],
    chat: {
      name: "Techub Support",
      status: "online",
      question: "Hi, can you set up our new label printer?",
      answer: "Sure! We'll set it up and show your staff how to use it. 👍",
      thanks: "Thank you! 🙏",
    },
  },

  useCases: {
    eyebrow: "Use cases",
    title: "Ready for your industry",
    intro: "Built for clinics, salons, beauty centres, spas, live sellers and trading companies in Malaysia. Tap one to see its system on iPad and phone.",
  },

  custom: {
    eyebrow: "Custom systems",
    title: "Need another system? *We build it.*",
    intro: "Beyond appointment systems, we build custom systems for any business in Malaysia, charged by the work hour from RM {custom}.",
    items: {
      erp: { title: "ERP system", text: "Sales, purchasing, inventory, accounting and HR in one system." },
      detection: { title: "AI object detection", text: "Cameras that spot people, vehicles, safety gear and objects automatically." },
      plate: { title: "Number plate scanner", text: "Reads car plates at the gate and logs every entry and exit." },
    },
    ctaTitle: "Interested? Tell us what you need.",
    ctaText: "ERP, AI, scanners or something new. We'll suggest the best solution and give you a quote.",
    cta: "WhatsApp us",
    message: "Hi Techub, I'm interested in a custom system (ERP, AI object detection, number plate scanner or something else).",
    email: "Email us",
    emailSubject: "Custom system enquiry",
  },

  tech: {
    eyebrow: "Technology",
    title: "Enterprise technology, *easy to use*",
    intro: "Enterprise servers in Malaysia, a fast NoSQL database, AI and WhatsApp, working together on every device.",
    explore: "Explore our technology",
    items: {
      servers: {
        title: "Enterprise servers in Malaysia",
        text: "Hosted in Malaysia on servers such as IPServerOne and Amazon Web Services. We are open about where your data is kept.",
      },
      database: { title: "Fast NoSQL database", text: "Indexed data, so detailed reports load in under 100 ms." },
      security: { title: "Encrypted & backed up", text: "Database encrypted at rest, SSL/TLS on every connection, multi-layer backups across regions." },
      ai: { title: "AI integration", text: "AI reads delivery notes, updates stock and suggests what to reorder." },
      extraction: { title: "AI data extraction", text: "OCR and AI screen scanning bring in data from PDFs and old systems." },
      realtime: { title: "Real-time updates", text: "Every iPad, phone and PC sees changes instantly." },
      framework: { title: "React & Next.js", text: "A modern web framework: pages change instantly, with no reload." },
      whatsapp: { title: "WhatsApp notifications", text: "Booking confirmations and reminders go out automatically." },
      hardware: { title: "Multi-hardware connect", text: "Label printers, number calling systems, X-ray machines and more." },
      einvoice: { title: "LHDN e-Invoice", text: "e-Invoices submitted to LHDN through MyInvois." },
      tracking: { title: "Barcode & QR tracking", text: "Print barcodes and QR codes, and follow every item from stock in to delivery." },
      accounting: { title: "Automatic accounting", text: "Sales and returns make their own invoices, credit notes and refund notes." },
    },
    hub: {
      center: "Techub Cloud",
      uptime: "{uptime} uptime",
      nodes: {
        devices: "iPad, phone & PC",
        whatsapp: "WhatsApp",
        printers: "Label printers",
        caller: "Number caller",
        xray: "X-ray machines",
        ai: "AI scanning",
        einvoice: "LHDN e-Invoice",
        reports: "Reports",
      },
    },
  },

  /* ---------- Technology page ---------- */
  techPage: {
    meta: {
      title: "Technology | Malaysia Servers, AI & LHDN e-Invoice",
      socialTitle: "Technology | Techub Software",
      description:
        "Enterprise servers in Malaysia (IPServerOne, AWS), encrypted backups, reports in under 100 ms, AI stock control, WhatsApp and LHDN e-Invoice. {uptime} uptime.",
      keywords: [
        "cloud business system Malaysia",
        "Malaysia data centre",
        "NoSQL database",
        "encrypted backup",
        "AI stock control",
        "delivery note scanning",
        "WhatsApp appointment reminder",
        "LHDN e-Invoice MyInvois",
        "queue number calling system",
        "label printer integration",
        "X-ray machine integration",
        "99.95% uptime",
      ],
    },
    crumb: "Technology",
    eyebrow: "Technology",
    title: "Enterprise technology, *simple to use*",
    intro: "Enterprise servers in Malaysia, a fast NoSQL database, AI and WhatsApp, on any device. {uptime} uptime guaranteed.",
    demoMessage: "Hi Techub, I'd like a free demo and to know more about your technology.",
    seeUseCases: "See use cases",
    spotlights: {
      servers: {
        eyebrow: "Enterprise servers in Malaysia",
        title: "Your data stays in Malaysia, encrypted",
        points: [
          "Enterprise-level servers such as IPServerOne and Amazon Web Services",
          "Full transparency: we tell you where your data is",
          "Multi-layer backups across multiple regions",
          "All saved data is encrypted",
        ],
      },
      speed: {
        eyebrow: "Speed guarantee",
        title: "Detailed reports in under 100 ms",
        points: [
          "Indexed NoSQL database built for speed",
          "Reports load without lag, even with years of data",
          "Servers in Malaysia for a fast response",
          "Every report ready to export",
        ],
        badge: "Under 100 ms",
      },
      realtime: {
        eyebrow: "Real-time updates",
        title: "One system on PC, iPad and phone",
        points: [
          "Changes show on every device instantly",
          "Works on iPhone, Android, Windows and Mac",
          "Ready for more than one branch",
          "No server to buy or maintain",
        ],
      },
      ai: {
        eyebrow: "AI integration",
        title: "AI that reads your delivery notes",
        points: [
          "Snap a supplier delivery note",
          "AI reads items, quantity, batch & expiry",
          "Stock updates automatically",
          "Smart reorder suggestions",
        ],
        cta: "Ask about AI stock",
        ctaMessage: "Hi Techub, I'd like to know more about AI stock control.",
      },
      whatsapp: {
        eyebrow: "WhatsApp notifications",
        title: "Customers are notified automatically",
        points: ["Booking confirmations", "Reminders before each visit", "One-tap confirm or reschedule", "Fewer no-shows"],
        badges: ["Reminder sent", "Confirmed"],
      },
      hardware: {
        eyebrow: "Multi-hardware connect",
        title: "Connects to the hardware you use",
        points: [
          "Label printers & receipt printers",
          "Number calling system with TV & voice",
          "X-ray machines",
          "Barcode scanners & card terminals",
        ],
      },
      einvoice: {
        eyebrow: "LHDN e-Invoice",
        title: "e-Invoice ready for LHDN",
        points: [
          "Issue e-Invoices from billing and POS",
          "Submitted to LHDN through MyInvois",
          "Validated e-Invoice with QR code",
          "Records kept for every invoice",
        ],
      },
      tracking: {
        eyebrow: "Barcode & QR tracking",
        title: "Follow every item, *stock in to delivery*",
        points: [
          "Print barcode labels and generate QR codes",
          "Scan with a phone or a barcode scanner",
          "A full activity list for every item and batch",
          "Who did each step, and when",
        ],
        cta: "Ask about inventory tracking",
        ctaMessage: "Hi Techub, I'd like to know more about the Inventory & ERP System.",
      },
      accounting: {
        eyebrow: "Automatic accounting",
        title: "Accounting documents, *made for you*",
        points: [
          "Sales linked to stock and accounting",
          "Invoices, delivery orders and entries made automatically",
          "One-click returns create the credit note or refund note",
          "No accounting knowledge needed",
        ],
      },
      extraction: {
        eyebrow: "AI data extraction",
        title: "AI that moves your data, *page by page*",
        points: [
          "OCR reads PDFs and scanned documents",
          "AI screen capture for old systems that can't export",
          "Every field mapped and checked by our engineers",
          "Charged by time, not data volume",
        ],
        cta: "Ask about data migration",
        ctaMessage: "Hi Techub, I'd like to ask about moving my data to Techub.",
        badge: "AI scanning",
      },
      framework: {
        eyebrow: "React & Next.js",
        title: "Built on a *modern web framework*",
        points: [
          "Built with React and Next.js",
          "Pages change instantly, with no full reload",
          "Fast on phones, tablets and PCs",
          "The same technology behind the websites we build",
        ],
        badge: "No reload",
      },
      encryption: {
        eyebrow: "Data protection",
        title: "Your data is *our priority*",
        points: [
          "Database encrypted at rest",
          "SSL/TLS encryption on every connection",
          "Protected servers in Malaysia",
          "Even if data ever leaked, it stays encrypted",
        ],
      },
      security: {
        eyebrow: "Security & control",
        title: "Every staff gets the right access",
        points: [
          "Role-based staff permissions",
          "Manager approval for discounts & refunds",
          "Full audit trail",
          "Encrypted data & connections",
        ],
      },
    },
    // The picture of how data is protected: a record on your device, sent over SSL/TLS, stored encrypted.
    encryption: {
      device: "Your device",
      record: "Customer record",
      tls: "SSL/TLS encrypted",
      server: "Protected servers in Malaysia",
      stored: "Database encrypted at rest",
      leaked: "If a copy ever leaked",
      unreadable: "Still encrypted",
      // A made-up record, as staff see it on their device.
      sample: ["Nur Aisyah", "Facial · 3:00 PM"],
    },
    infra: {
      business: "Your business",
      devices: "iPad · Phone · PC",
      encrypted: "Encrypted connection",
      servers: "Enterprise servers in Malaysia",
      online: "Online",
      backups: "Multi-layer backups",
      regions: "Across multiple regions",
      encryptedData: "All saved data encrypted",
    },
    uptimeEyebrow: "Reliability",
    uptimeTitle: "{uptime} uptime, *guaranteed*",
    uptimeIntro:
      "Your bookings, queue screens and payments stay online practically all the time, day and night.",
    uptimePoints: [
      "Enterprise servers in Malaysia",
      "Multi-layer, multi-region backups",
      "All saved data encrypted",
      "Local support in Malaysia on WhatsApp",
    ],
    featuresEyebrow: "Features",
    featuresTitle: "Everything in one system",
    industries: "See it in your industry",
    contactTitle: "Talk to us about your system",
    faqs: [
      {
        q: "Where are Techub's servers?",
        a: "In Malaysia. We use enterprise-level servers such as IPServerOne and Amazon Web Services, and we are open about where your data is stored.",
      },
      {
        q: "Do I need to buy a server?",
        a: "No. Techub runs in the cloud. You only need an internet connection and a device such as an iPad, phone or PC.",
      },
      {
        q: "How is my data protected?",
        a: "Your database is encrypted at rest and every connection uses SSL/TLS encryption, on protected servers in Malaysia. Backups are kept in multiple layers across multiple regions, role-based permissions control what each staff member can see, and an audit trail records every action.",
      },
      {
        q: "What if data were ever leaked?",
        a: "Your data stays encrypted. The database is encrypted at rest and every connection is protected with SSL/TLS, so even leaked data stays encrypted. Your data is our priority.",
      },
      {
        q: "Why are Techub reports so fast?",
        a: "Techub uses an indexed NoSQL database, so even detailed reports are generated in under 100 milliseconds, without lag. Our servers are in Malaysia, so businesses across Malaysia get a fast response.",
      },
      {
        q: "Which technology is Techub built on?",
        a: "Techub is built with React and Next.js, a modern web framework, with a fast NoSQL database on enterprise servers in Malaysia. Pages change instantly, without a full reload.",
      },
      {
        q: "What does the {uptime} uptime guarantee mean?",
        a: "Your system is online at least {uptime} of the time, so it is practically always there when your staff and customers need it.",
      },
      {
        q: "How does the AI delivery note scanning work?",
        a: "Snap or scan a supplier delivery note and the AI reads the items, quantities, batch and expiry details, then adjusts your stock automatically. Every inventory movement is logged, so you can trace stock in, stock out, transfers and adjustments.",
      },
      {
        q: "How does AI data extraction work?",
        a: "For data migration, our AI reads PDFs and scanned documents with OCR, and can capture an old system's screens page by page when it can't export. Our software engineers map and check every field before your data goes live in Techub.",
      },
      {
        q: "Does Techub support LHDN e-Invoice?",
        a: "Yes. e-Invoices can be issued from billing and POS, submitted to LHDN through MyInvois and shared with a validated QR code.",
      },
      {
        q: "Which hardware can Techub connect to?",
        a: "Label printers, number calling systems, X-ray machines, thermal receipt and A4 printers, barcode scanners, card terminals, cash drawers and queue displays. Tell us your models and we will confirm before installation.",
      },
      {
        q: "Which devices can I use?",
        a: "Techub is cross-platform: iPad and Android tablets, iPhone and Android phones, and Windows or Mac computers. A TV can show the queue number display.",
      },
    ],
  },

  /* ---------- Shared sections ---------- */
  features: {
    uptime: { title: "{uptime} uptime guarantee", text: "Enterprise servers in Malaysia with multi-region backups." },
    booking: { title: "Advanced booking calendar", text: "Bookings by staff, room or service, with walk-ins." },
    whatsapp: { title: "Automatic WhatsApp notifications", text: "Confirmations, reminders and follow-ups." },
    queue: { title: "Queue number calling", text: "TV display and voice announcement for rooms and counters." },
    realtime: { title: "Real-time updates", text: "Every device sees changes instantly." },
    reports: { title: "Reports in under 100 ms", text: "Detailed reports from an indexed NoSQL database." },
    ai: { title: "AI stock control", text: "AI reads delivery notes, predicts low stock and suggests reorders." },
    inventory: { title: "Inventory tracking", text: "Every stock in, out, transfer and adjustment is logged." },
    profiles: { title: "Staff profiles", text: "Each staff member views and manages their own appointments." },
    payroll: { title: "Payroll calculation", text: "Basic salary, commission and allowances worked out for you." },
    pos: { title: "POS, packages & commission", text: "Checkout, prepaid packages and staff commission in one place." },
    permissions: { title: "Staff activity tracking", text: "Every staff action is recorded, and you decide who can view, edit, discount, refund or export." },
    einvoice: { title: "LHDN e-Invoice", text: "e-Invoices submitted to LHDN through MyInvois." },
    hardware: { title: "Multi-hardware connect", text: "Label printers, number callers, X-ray machines and more." },
    drawing: { title: "Hand drawing & e-signature", text: "Draw on charts and capture consent on a tablet." },
    devices: { title: "Works on iPad, phone & PC", text: "Cross-platform: iPhone, Android, Windows and Mac." },
  },

  /* ---------- Documents sent automatically (every system page) ---------- */
  docs: {
    eyebrow: "Automatic documents",
    title: "Documents sent *by themselves*",
    intro: "Enterprise-level document sending: each one reaches {who} right away.",
    who: { customers: "your customers", patients: "your patients" },
    sent: "Sent automatically",
    written: "Written online",
    items: {
      mc: "Digital MC",
      receipt: "Receipt",
      invoice: "Invoice",
      creditNote: "Credit note (CN)",
      refundNote: "Refund note (RN)",
      referral: "Referral letter",
    },
    points: ["Sent automatically, no staff needed", "Document formats tuned for your business, free"],
    referral: "Referral letters written online, in a format we tune free for your clinic",
  },

  /* ---------- Multiple outlets (every system page) ---------- */
  outlets: {
    eyebrow: "Multiple outlets",
    title: "Every outlet, *one app*",
    points: ["Owners switch between outlets in one\u00a0tap", "View each outlet's information on its\u00a0own", "Priced per outlet"],
    switch: "Switch outlet",
    tap: "Tap an outlet to view it",
    places: [
      { city: "Kuala Lumpur", area: "Bangsar" },
      { city: "Johor Bahru", area: "Mount Austin" },
      { city: "Penang", area: "George Town" },
    ],
  },

  hardware: {
    eyebrow: "Multi-hardware connect",
    title: "Connects to your hardware",
    intro: "Label printers, number calling systems, X-ray machines and more. We install and set it all up for you.",
    items: {
      caller: "Number calling system & TV",
      label: "Label printer",
      receipt: "Receipt & A4 printer",
      xray: "X-ray machine",
      scanner: "Barcode / QR scanner",
      card: "Card terminal & cash drawer",
      tablet: "Tablet & stylus",
      devices: "PC, iPad & phone",
    },
  },

  pricing: {
    eyebrow: "Simple pricing",
    title: "Affordable for every business in Malaysia",
    plan: "Techub Standard Plan",
    from: "from",
    perMonth: "/ month",
    perHour: "/ hour",
    // Every plan, the Welcome offer and the Live Selling System are priced per outlet: `perOutlet` sits under each
    // price, `perOutletNote` under the section title, and `perOutletLine` starts each plan's lines (structured data).
    perOutlet: "per outlet",
    perOutletNote: "All prices are per outlet.",
    perOutletLine: "Priced per outlet",
    // The ways to pay (plans in lib/site.ts), a card each. {n} is a number, {date} the Welcome offer's last day and
    // {plan} a plan's name.
    plansText: "For clinics, hair salons, spas, massage and beauty centres.",
    monthly: "Monthly",
    monthlyText: "Pay month by month",
    planMonths: "{n} months",
    freeOne: "{n} month free",
    freeMany: "{n} months free",
    total: "Total RM {n}",
    average: "Average RM {n}/month",
    save: "Save RM {n}",
    recommended: "Recommended",
    averageLabel: "Average",
    youPay: "You pay",
    totalLabel: "Total",
    customRate: "Customisation",
    choose: "Choose plan",
    planMessage: "Hi Techub, I'm interested in this plan: {plan}.",
    welcome: "Welcome offer",
    welcomeCta: "Get the Welcome offer",
    welcomeMessage: "Hi Techub, I'd like the Welcome offer at RM {n} a month per outlet.",
    promoUntil: "Until {date}",
    limit: "Only for the first {n} users, first come, first served",
    daily: "Only RM {n} a day",
    // Monthly against the 12 to 48-month plans, above the cards
    yearly: "Yearly",
    yearlyNote: "12, 24 or 48 months",
    yearlySave: "Save RM {monthlySave} a month per outlet",
    lessThanMonthly: "RM {monthlySave} less than Monthly",
    plansIncluded: "Every plan includes",
    free: "FREE for the first {months} months for new users, including staff training and installation.",
    claim: "Claim {months} Months Free",
    claimMessage: "Hi Techub, I want to claim the {months} months free offer.",
    includedTitle: "Everything included",
    included: [
      "Appointment system for your business",
      "WhatsApp notifications & queue calling",
      "AI stock control & inventory tracking",
      "Detailed reports in under 100 ms",
      "LHDN e-Invoice support",
      "Works on desktop, tablet & phone",
      "Staff profiles & permission control",
      "{uptime} uptime & encrypted backups",
      "Free installation & staff training",
      "Local support in Malaysia on WhatsApp",
    ],
    customTitle: "Customisation",
    customFrom: "from",
    // Customisation is charged per work hour, at the rate of the customer's plan (`hourly` in lib/site.ts)
    customText: "Pay by the work hour for new features, reports, printouts, integrations or a whole new system.",
    customPoints: ["A clear quote before we start: our AI predicts the hours", "Free testing and integration", "Affordable, with instalment plans"],
    customRates: "Rate per work hour, by plan",
    examplesTitle: "Examples",
    // The hours each takes are customExamples in lib/site.ts, in the same order. {n} is a price, {plan} a plan's name.
    examples: [
      { type: "Clinic", task: "A claim file in the format a new panel company asks for" },
      { type: "Hair salon", task: "A monthly sales file in your accountant's format" },
      { type: "Spa and massage", task: "Your own question on the booking form, like how the customer found you" },
    ],
    exampleHours: "About {n} hours",
    exampleLong: "RM {n} on {plan}",
    examplesNote: "Examples only. Your quote is based on your request.",
    customCta: "Get a quote",
    customMessage: "Hi Techub, I need a customised system quote.",
    customEmail: "Email us",
    customEmailSubject: "Customised system quote",
    customSee: "See customer examples",
    offerText: "From RM {price} a month per outlet (Welcome offer, first {welcomeUsers} users). First {months} months free for new users, including installation and staff training.",
    // Other services (prices in lib/site.ts), a card each on the Pricing and Services pages
    extrasTitle: "More services",
    extrasText: "Also from Techub, for any business in Malaysia.",
    extrasCta: "Ask on WhatsApp",
    extrasMore: "See how it works",
    extras: {
      migration: {
        title: "Data migration",
        label: "Usually about",
        unit: "/ hour",
        text: "Move your records from your old system.",
        points: ["Priced after a talk with our software engineer", "Charged by time, not data volume, so it stays affordable"],
        note: "",
        message: "Hi Techub, I'd like to ask about data migration.",
      },
      email: {
        title: "Business email",
        label: "",
        unit: "/ year",
        text: "Email hosting on your own domain, like hello@yourbusiness.com.",
        points: ["Works with your own domain", "{emailStorage} of storage", "We set it all up for you"],
        note: "The domain itself is not included.",
        message: "Hi Techub, I'd like business email on my own domain.",
      },
      website: {
        title: "Website design and hosting",
        label: "",
        unit: "",
        text: "A landing page website of up to {websitePages} pages, designed and hosted for you.",
        points: [
          "Free domain for the first year, then RM {websiteYear} a year for maintenance",
          "Cloudflare hosting that handles over 1 million views a minute",
          "Optimised for SEO and AI search",
        ],
        note: "Static websites only, without product listings or a blog.",
        message: "Hi Techub, I'd like a website designed and hosted.",
      },
    },
    // Live Selling System: a row on the pricing page, and the main card on its own page
    liveTitle: "Live Selling System",
    liveFrom: "from",
    liveText: "For live sellers: big crowds with Kafka queueing, no overselling, live visitors and advanced reports.",
    liveCta: "Request a demo",
    liveMessage: "Hi Techub, I'd like to request a demo of the Live Selling System.",
    liveSee: "See the system",
    livePlan: "Techub Live Selling Plan",
    liveBadge: "Live selling",
    liveNote: "Request a demo and we'll show you the system with your own products.",
    liveIncluded: [
      "Sale page for your live sessions",
      "Kafka order queueing for big crowds",
      "No overselling: stock checked on every order",
      "Products with selling date & time",
      "Live visitor count by page",
      "Online payment & order management",
      "Automatic invoices & official receipts",
      "Advanced reports in under 100 ms",
      "{uptime} uptime on servers in Malaysia",
      "Local support in Malaysia on WhatsApp",
    ],
    liveOfferText: "Live Selling System from RM {livePrice} a month per outlet.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions? We have answers",
    // Home page questions. The Technology page and each system page have their own.
    items: [
      {
        q: "What does Techub Software do?",
        a: "Techub Software is a software company based in Malaysia. We build smart, low-cost systems for businesses across Malaysia: ready appointment systems for clinics, hair salons, beauty centres and spas, a live selling system for online sellers, and custom systems such as ERP, AI object detection and number plate scanners.",
      },
      {
        q: "Which appointment system in Malaysia sends WhatsApp reminders?",
        a: "Techub Software. Its online booking system and appointment booking app send booking confirmations and reminders on WhatsApp automatically for clinics, salons, beauty centres and spas in Malaysia, and customers confirm or reschedule with one tap. Plans start from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users), with the first {months} months free.",
      },
      {
        q: "How much does it cost?",
        a: "Plans start from RM {price} a month per outlet, and new customers get the first {months} months free, including installation and staff training. Each outlet pays RM {monthly} month by month, or RM {planPrice} a month on 12, 24 or 48 months, which saves RM {monthlySave} every month, with 1, 3 or 10 months free. Until 31 Dec 2026, our Welcome offer is RM {price} a month per outlet for {welcomePaid} months plus {welcomeFree} months free, which comes to only RM {welcomeAverage} a month or RM {welcomeDaily} a day, for the first {welcomeUsers} users only, first come, first served. The Live Selling System starts from RM {livePrice} a month per outlet. Customisation is charged by the work hour, from RM {customMonthly} an hour on the monthly plan down to RM {custom} on 48 months, with free testing and integration.",
      },
      {
        q: "Is the price per outlet?",
        a: "Yes. Every plan, the Welcome offer and the Live Selling System are priced per outlet, so each outlet has its own subscription.",
      },
      {
        q: "Can my customers pay a deposit online?",
        a: "Yes. Techub works with various payment gateways, so customers can pay a deposit or the full amount online when they book. The money goes straight into your own merchant account, and deposits help cut no-shows.",
      },
      {
        q: "How fast is the system?",
        a: "Very fast. Techub uses an indexed NoSQL database on enterprise servers in Malaysia, so detailed reports are generated in under 100 milliseconds and every device updates in real time.",
      },
      {
        q: "What uptime do you guarantee?",
        a: "We guarantee {uptime} system uptime, so your front desk, queue screens and bookings stay online practically all the time.",
      },
      {
        q: "Where is my data stored, and is it safe?",
        a: "Your data is kept on enterprise-level servers in Malaysia, such as IPServerOne and Amazon Web Services, and we tell you where it is. All saved data is encrypted, with multi-layer backups across multiple regions.",
      },
      {
        q: "What technology does Techub use?",
        a: "Techub runs in the cloud on enterprise servers in Malaysia, with an indexed NoSQL database, AI that reads delivery notes and manages stock, automatic WhatsApp notifications, LHDN e-Invoice, and connections to hardware such as label printers, number calling systems and X-ray machines.",
      },
      {
        q: "Do you support LHDN e-Invoice?",
        a: "Yes. Techub supports LHDN e-Invoice, so invoices can be submitted and validated through MyInvois.",
      },
      {
        q: "Can the system create invoices and receipts automatically?",
        a: "Yes. Techub generates invoices, credit notes, refund notes and official receipts automatically, based on how your business works. You don't need accounting staff to prepare them.",
      },
      {
        q: "Can you build other systems, such as ERP?",
        a: "Yes. We build custom systems such as ERP, AI object detection and number plate scanners, and we customise our systems for other businesses. WhatsApp us at {phone} to discuss your idea.",
      },
      {
        q: "Do you have a system for live selling?",
        a: "Yes. The Techub Live Selling System lets you sell online during your live sessions. It handles big crowds of buyers with Kafka order queueing, stops overselling, lets you set each product's selling date and shows your visitors live. It starts from RM {livePrice} a month per outlet.",
      },
      {
        q: "Which hardware can I connect?",
        a: "Label printers, number calling systems and queue displays, X-ray machines, receipt and A4 printers, barcode scanners, card terminals, cash drawers and tablets for signatures. Tell us your models and we will confirm before installation.",
      },
      {
        q: "Do you provide installation and training?",
        a: "Yes. Installation, hardware setup and staff training are included for new customers, and we support you on WhatsApp after you go live.",
      },
      {
        q: "Does it work on iPad, phone and computer?",
        a: "Yes. Techub is cross-platform: iPad and Android tablets, iPhone and Android phones, and Windows or Mac computers.",
      },
      {
        q: "How do I contact Techub Software?",
        a: "WhatsApp us at {phone} or email {email}. We can arrange a free demo of the system for your business.",
      },
    ],
  },

  contact: {
    badge: "Free demo · {months} months free",
    title: "See Techub running in your business",
    text: "From RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users), for businesses across Malaysia. Installation and staff training included.",
    whatsappLabel: "WhatsApp · fastest reply",
    emailLabel: "Email us",
  },

  /* ---------- Blog (/blog/): each post's words are in content/blog/<slug>/en.md ---------- */
  blog: {
    meta: {
      title: "Blog | Clinic, Salon, Beauty & Spa Guides Malaysia",
      description: "Practical guides for clinics, salons, beauty centres, spas and live sellers in Malaysia: bookings, WhatsApp reminders, deposits, payroll and LHDN e-Invoice.",
    },
    eyebrow: "Blog",
    title: "Guides for *clinics, salons, beauty centres and spas* in Malaysia",
    intro: "Plain answers to what business owners ask us: bookings, WhatsApp reminders, deposits, payroll, queues, live selling and LHDN e-Invoice.",
    read: "Read the guide",
    allSystems: "All systems",
    faqTitle: "Questions people ask",
    ctaTitle: "See it running in your business",
    ctaText: "Book a free demo on WhatsApp and we'll show you how Techub handles this, step by step.",
    system: "See the {product} system",
    more: "More guides",
    listName: "Techub Software blog",
  },

  /* ---------- Pages opened from the menu and footer (each part of the company has its own page) ---------- */
  pages: {
    useCases: {
      meta: {
        title: "Clinic, Salon, Beauty, Spa & Live Selling Systems Malaysia",
        description:
          "Ready systems for clinics, hair salons, beauty centres, spas, live sellers and trading companies in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: WhatsApp reminders, inventory and ERP, fast reports.",
      },
    },
    customSystems: {
      meta: {
        title: "Custom Software Development Malaysia | KL, JB & Penang",
        description:
          "Custom software development for businesses in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: ERP, AI object detection, number plate recognition. From RM {custom} per work hour.",
      },
    },
    services: {
      meta: {
        title: "Services | Systems, Custom Software, Hardware & Training",
        description:
          "Ready appointment and live selling systems, custom software, hardware setup, installation, staff training and WhatsApp support for businesses in Malaysia.",
      },
    },
    pricing: {
      meta: {
        title: "Pricing | From RM {price}/month per Outlet, First {months} Months Free",
        description:
          "Appointment systems in Malaysia from RM {price}/month per outlet, first {months} months free with installation and training. Live selling from RM {livePrice}/month per outlet; custom work from RM {custom}/hour.",
      },
    },
    about: {
      meta: {
        title: "About Us | A Software Company in Malaysia",
        description:
          "{name} is a software company in Malaysia, the choice of Malaysia SMEs for simple, low-cost systems for clinics, salons, beauty centres and spas.",
      },
    },
    faq: {
      meta: {
        title: "FAQ | Appointment System Questions Answered",
        description:
          "Answers about Techub appointment systems in Malaysia: pricing, speed, {uptime} uptime, data security, LHDN e-Invoice, hardware, installation and training.",
      },
    },
    contact: {
      meta: {
        title: "Contact Us | Free Demo on WhatsApp or Email",
        description:
          "WhatsApp {name} at {phone} or email {email} for a free demo in Malaysia. New users get the first {months} months free.",
      },
    },
  },

  /* ---------- System pages ---------- */
  product: {
    useCases: "Use cases",
    allModules: "All modules",
    inside: "Inside the {product}",
    otherSystems: "Also available for",
    reportsBadge: "Under 100 ms",
  },

  products: {
    clinic: {
      meta: {
        title: "Clinic Management System Malaysia | KL, JB & Penang",
        socialTitle: "Clinic Management System Malaysia | Techub Software",
        description:
          "Clinic management system for clinics in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: EMR, queue calling, AI medicine stock, LHDN e-Invoice. From RM {price}/month per outlet.",
        keywords: [
          "clinic system Malaysia",
          "clinic queue system",
          "clinic management system Malaysia",
          "clinic system",
          "sistem klinik",
          "clinic software",
          "EMR Malaysia",
          "patient records system",
          "medication tracking system",
          "queue number calling system clinic",
          "clinic e-Invoice LHDN",
          "GP clinic system",
          "dental clinic system",
          "clinic online payment",
          "payment gateway integration Malaysia",
        ],
      },
      category: "Clinic management, EMR and patient queue",
      eyebrow: "Clinic Management System",
      heading: "A smarter *clinic system* for faster, safer care",
      intro: "Built for clinics in Malaysia: patient records, medication tracking, queue, billing and stock. On iPad, phone and PC.",
      whoFor: ["GP clinics", "Dental clinics", "Specialist clinics", "Aesthetic clinics", "Physiotherapy", "TCM", "Multi-branch groups"],
      highlights: {
        records: "Patient records tracking",
        medication: "Medication tracking",
        queue: "Queue number calling",
        hardware: "X-ray & printer connection",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
      },
      spotlights: {
        queue: {
          eyebrow: "Clinic queue system",
          title: "Call the next patient in one tap",
          points: ["TV display with voice announcement", "Rooms, pharmacy & payment counters", "English, Malay & Chinese", "A calmer, shorter wait"],
        },
        ic: {
          eyebrow: "IC scanner (OCR)",
          title: "Scan the IC. *Patient registered.*",
          points: [
            "OCR reads the IC on the device itself",
            "Works on every device: iPad, phone or PC",
            "Name, IC number & address filled in for you",
            "Faster patient registration at the counter",
          ],
          badges: ["IC read on this device", "Fast registration"],
        },
        records: {
          eyebrow: "Patient records & medication tracking",
          title: "Every patient record and medicine, tracked",
          points: [
            "Patient records with full visit history",
            "Medication tracking for every patient",
            "Allergy alerts before prescribing",
            "Batch & expiry on every dispense",
          ],
        },
        drawing: {
          eyebrow: "Hand drawing & e-signature",
          title: "Draw, annotate and sign on a tablet",
          points: ["Body & dental charts", "Draw with finger or stylus", "Patient consent e-signature", "Saved to the patient record"],
        },
        hardware: {
          eyebrow: "Multi-hardware connect",
          title: "Connects to your clinic hardware",
          points: ["Label printers for medicine labels", "Number calling system", "X-ray machines", "MC, receipt & A4 printing"],
        },
        payment: {
          eyebrow: "Online payment & deposits",
          title: "Patients pay online. The money goes straight to you.",
          points: [
            "Works with various payment gateways",
            "Deposit or full payment when they book",
            "Paid into your own merchant account",
            "Fewer no-shows with a booking deposit",
          ],
          badges: ["Deposit paid", "Straight to your account"],
        },
        stock: {
          eyebrow: "AI stock control",
          title: "Scan the delivery note. Stock updates itself.",
          points: ["AI reads items, batch & expiry", "Stock deducts when you dispense", "Every movement logged", "Low-stock & expiry alerts"],
        },
        reports: {
          eyebrow: "Detailed reports",
          title: "Clinic reports in under 100 ms",
          points: [
            "Patients, consultations & collections",
            "Revenue by doctor",
            "Top diagnoses & panel claims",
            "No lag, even with years of records",
          ],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your clinic",
          points: [
            "See who did what, and when",
            "Doctor, nurse, pharmacy & cashier roles",
            "Manager approval for discounts & refunds",
            "Patient and clinic data stays protected",
          ],
        },
      },
      modules: {
        records: "IC scan registration & records",
        queue: "Queue number calling",
        whatsapp: "WhatsApp appointment alerts",
        emr: "Consultation & EMR",
        medication: "Medication tracking system",
        drawing: "Body chart & e-signature",
        ai: "AI medicine stock control",
        inventory: "Inventory movement tracking",
        printing: "MC, label & receipt printing",
        xray: "X-ray machine connection",
        billing: "Billing & panel claims",
        payment: "Payment gateway integration",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        permissions: "Activity tracking & permissions",
        devices: "Real-time on iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much does a clinic management system cost in Malaysia?",
          a: "Techub's clinic system in Malaysia starts from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users), and new clinics get the first {months} months free, including installation and staff training. Customisation is charged by the work hour, from RM {custom} an hour.",
        },
        {
          q: "Is the Techub clinic system suitable for small clinics?",
          a: "Yes. It is designed for single-doctor clinics up to multi-branch groups. Plans start from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users) and new clinics get the first {months} months free, including installation and staff training.",
        },
        {
          q: "Can I track patient records and medication?",
          a: "Yes. Each patient has a full record with visits, diagnoses, prescriptions and dispensing history. The medication tracking system shows dosage, frequency, batch and allergy alerts before you prescribe.",
        },
        {
          q: "Can the clinic system scan a patient's IC?",
          a: "Yes. Its IC scanner uses OCR that runs on the device itself, so every iPad, phone or PC in your clinic can scan a patient's IC. The name, IC number and address are filled in for you, for fast patient registration.",
        },
        {
          q: "Does the clinic system support queue number calling?",
          a: "Yes. Queue numbers can be shown on a TV display and announced by voice, for consultation rooms, the pharmacy counter and the payment counter.",
        },
        {
          q: "Can it connect to X-ray machines and printers?",
          a: "Yes. We connect X-ray machines, label printers for medicine labels, thermal receipt printers, A4 printers and number calling systems. Tell us your models and we will confirm before installation.",
        },
        {
          q: "Does it support LHDN e-Invoice?",
          a: "Yes. The clinic system supports LHDN e-Invoice, so invoices from billing can be submitted and validated through MyInvois.",
        },
        {
          q: "Can doctors draw on body or dental charts?",
          a: "Yes. Doctors can draw and annotate charts by hand on a tablet or touchscreen, and patients can sign consent forms digitally.",
        },
        {
          q: "How fast are the reports?",
          a: "Detailed reports are generated in under 100 milliseconds. Techub uses an indexed NoSQL database on servers in Malaysia, so there is no lag even with years of records.",
        },
        {
          q: "How reliable is the system?",
          a: "We guarantee {uptime} uptime. Your data is kept on enterprise servers in Malaysia, encrypted, with multi-layer backups across regions.",
        },
        {
          q: "Can patients pay online?",
          a: "Yes. Techub works with various payment gateways, so patients can pay a deposit or the full amount online when they book, by online banking (FPX), card or e-wallet, depending on your gateway. The money goes straight into your clinic's own merchant account.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as opening a patient record, giving a discount or issuing a refund, with who did it and when. You choose what each role can see or change, and risky actions can need a doctor's or manager's approval, so patient and clinic data stays protected.",
        },
        {
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the clinic system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the clinic management system.",
    },

    salon: {
      meta: {
        title: "Salon Booking System Malaysia | KL, JB & Penang",
        socialTitle: "Salon Appointment System Malaysia | Techub Software",
        description:
          "Hair salon booking system for Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: stylist calendar, WhatsApp reminders, commission, POS. From RM {price}/month per outlet, {months} months free.",
        keywords: [
          "salon POS system Malaysia",
          "salon commission system",
          "booking deposit system",
          "salon appointment system",
          "hair salon booking system Malaysia",
          "salon management system",
          "salon software Malaysia",
          "salon POS Malaysia",
          "salon payroll system",
          "barbershop booking system",
          "stylist commission",
          "sistem temujanji salon",
          "WhatsApp appointment reminder",
          "salon online booking deposit",
          "payment gateway integration Malaysia",
        ],
      },
      category: "Hair salon booking, staff, payroll and POS",
      eyebrow: "Hair Salon Appointment System",
      heading: "Keep every *stylist* fully booked",
      intro: "A hair salon and barbershop booking system for Malaysia: automatic WhatsApp notifications, staff profiles, payroll and POS. On iPad, phone and PC.",
      whoFor: ["Hair salons", "Barbershops", "Unisex salons", "Colour & treatment studios", "Bridal hair & make-up", "Multi-branch salons"],
      highlights: {
        notify: "Automatic customer notifications",
        platform: "Cross-platform",
        profiles: "Each staff has their own profile",
        inventory: "Inventory tracking",
        payroll: "Payroll calculation",
        reports: "Reports in under 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Staff profiles & payroll",
          title: "Every stylist gets their own profile",
          points: [
            "Stylists view and manage their own appointments",
            "Works on iPhone, Android, iPad and PC",
            "Payroll calculated automatically",
            "Basic salary, commission & allowances",
          ],
        },
        customer: {
          eyebrow: "Customer history",
          title: "Every customer's colour formula, saved",
          points: ["Visit history & favourite stylist", "Colour formula & notes", "Before & after photos", "Member points & packages"],
          badges: ["Formula saved", "Member points"],
        },
        pos: {
          eyebrow: "Salon POS & commission system",
          title: "Fast checkout. Commission done for you.",
          points: ["Services and retail in one bill", "Commission per stylist", "Cash, card, DuitNow QR & e-wallet", "Packages & member discounts"],
        },
        payment: {
          eyebrow: "Online payment & deposits",
          title: "Customers pay online. The money goes straight to you.",
          points: [
            "Works with various payment gateways",
            "Deposit or full payment when they book",
            "Paid into your own merchant account",
            "Fewer no-shows with a booking deposit",
          ],
          badges: ["Deposit paid", "Straight to your account"],
        },
        deposits: {
          eyebrow: "Booking deposit system",
          title: "Collect deposits. Turn them into income in *one click*.",
          points: [
            "Collect a deposit with each booking",
            "Held apart until the service is done",
            "Invoice, refund note & credit note made for you",
            "No accounting knowledge needed",
          ],
        },
        stock: {
          eyebrow: "AI inventory tracking",
          title: "Scan the delivery note. Stock updates itself.",
          points: ["AI reads every product line", "Colour & treatment usage deducted", "Every stock movement tracked", "Smart reorder alerts"],
        },
        reports: {
          eyebrow: "Detailed reports",
          title: "Salon reports in under 100 ms",
          points: ["Sales by stylist & service", "Services vs retail sales", "Commission at a glance", "No lag, even with years of data"],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your business",
          points: [
            "See who did what, and when",
            "Owner, manager, stylist & reception roles",
            "Manager approval for discounts",
            "Customer data stays protected",
          ],
        },
      },
      modules: {
        calendar: "Booking calendar by stylist",
        walkin: "Walk-in queue",
        whatsapp: "Automatic WhatsApp notifications",
        profiles: "Staff profiles & own bookings",
        customers: "Customer history & colour formula",
        packages: "Packages & member points",
        pos: "POS, retail & receipt printing",
        payment: "Payment gateway integration",
        deposits: "Deposit to income in one click",
        commission: "Stylist commission",
        payroll: "Payroll calculation",
        inventory: "AI inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        permissions: "Activity tracking & permissions",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the salon appointment system?",
          a: "It starts from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users). New salons get the first {months} months free, including installation and staff training.",
        },
        {
          q: "Does it notify customers automatically?",
          a: "Yes. Booking confirmations and reminders go out on WhatsApp automatically, and customers can confirm or reschedule with one tap.",
        },
        {
          q: "Can each stylist have their own profile?",
          a: "Yes. Every staff member logs in on their own phone, iPad or PC to see and manage their appointments, and only sees what their role allows.",
        },
        {
          q: "Which salon booking system in Malaysia calculates staff commission?",
          a: "Techub's salon booking system does. Commission on services and product sales is calculated from your POS, and monthly payroll adds basic salary and allowances for each staff member.",
        },
        {
          q: "Can it track salon product inventory?",
          a: "Yes. AI reads supplier delivery notes, product usage is deducted per service, and every stock movement is tracked.",
        },
        {
          q: "Can it handle walk-in customers?",
          a: "Yes. Walk-ins join a queue next to your bookings, so the front desk can see which stylist is free next.",
        },
        {
          q: "Can I save each customer's colour formula?",
          a: "Yes. Colour formulas, notes and before and after photos are saved on the customer's profile for the next visit.",
        },
        {
          q: "Does it work on iPad, Android and PC?",
          a: "Yes. Techub is cross-platform: iPad and Android tablets, iPhone and Android phones, and Windows or Mac computers.",
        },
        {
          q: "Can customers pay a deposit online?",
          a: "Yes. Techub works with various payment gateways, so customers can pay a deposit or the full amount online when they book, by online banking (FPX), card or e-wallet, depending on your gateway. The money goes straight into your salon's own merchant account, and deposits help cut no-shows.",
        },
        {
          q: "Do I need accounting knowledge to handle deposits?",
          a: "No. Each deposit is held apart until the service is done, then one click turns it into income. Techub makes the proper accounting documents for you, such as the invoice, refund note or credit note, so you don't need any accounting knowledge.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as giving a discount, issuing a refund or exporting customer data, with who did it and when. You choose what each role can see or change, and risky actions can need a manager's approval, so your business information stays protected.",
        },
        {
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the salon system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the salon appointment system.",
    },

    beauty: {
      meta: {
        title: "Beauty Appointment System Malaysia | KL, JB & Penang",
        socialTitle: "Beauty Appointment System Malaysia | Techub Software",
        description:
          "Beauty appointment system for beauty centres in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: packages, face charts, WhatsApp reminders, payroll. From RM {price}/month per outlet.",
        keywords: [
          "beauty appointment system Malaysia",
          "beauty appointment system",
          "aesthetic clinic system",
          "booking deposit system",
          "beauty centre system",
          "beauty salon system Malaysia",
          "beauty salon booking system",
          "facial centre software",
          "aesthetic centre system",
          "lash studio booking system",
          "nail salon booking system",
          "beauty package management",
          "beauty centre payroll",
          "sistem pusat kecantikan",
          "beauty centre online payment",
          "payment gateway integration Malaysia",
        ],
      },
      category: "Beauty centre booking, packages and treatment records",
      eyebrow: "Beauty Appointment System",
      heading: "The *beauty centre system* that brings customers back",
      intro: "One beauty appointment system for beauty centres, aesthetic clinics, nail salons and lash studios in Malaysia: packages, face charts, staff payroll and WhatsApp reminders. On iPad, phone and PC.",
      whoFor: ["Beauty centres", "Facial & skincare", "Lash & brow studios", "Nail salons", "Slimming centres", "Aesthetic clinics", "Bridal make-up"],
      highlights: {
        notify: "Automatic customer notifications",
        platform: "Cross-platform",
        profiles: "Each staff has their own profile",
        inventory: "Inventory tracking",
        payroll: "Payroll calculation",
        reports: "Reports in under 100 ms",
      },
      spotlights: {
        packages: {
          eyebrow: "Packages & sessions",
          title: "Every package and session, tracked",
          points: ["Sessions left on every visit", "Prepaid credit & member prices", "Skin notes & allergies", "Reminder when it's time to rebook"],
          badges: ["Sessions left", "Reminder sent"],
        },
        staff: {
          eyebrow: "Staff profiles & payroll",
          title: "Every beautician gets their own profile",
          points: [
            "Beauticians view and manage their own appointments",
            "Works on iPhone, Android, iPad and PC",
            "Payroll calculated automatically",
            "Basic salary, commission & allowances",
          ],
        },
        faceChart: {
          eyebrow: "Face chart & consent",
          title: "Mark the skin, add photos, get it signed",
          points: ["Draw on a face chart with a stylus", "Before & after photos", "Treatment notes per visit", "Customer e-signature consent"],
        },
        pos: {
          eyebrow: "POS & commission",
          title: "Checkout with packages in one tap",
          points: ["Redeem package sessions", "Treatments and products in one bill", "Commission per beautician", "Cash, card, DuitNow QR & e-wallet"],
        },
        payment: {
          eyebrow: "Online payment & deposits",
          title: "Customers pay online. The money goes straight to you.",
          points: [
            "Works with various payment gateways",
            "Deposit or full payment when they book",
            "Paid into your own merchant account",
            "Fewer no-shows with a booking deposit",
          ],
          badges: ["Deposit paid", "Straight to your account"],
        },
        deposits: {
          eyebrow: "Booking deposit system",
          title: "Collect deposits. Turn them into income in *one click*.",
          points: [
            "Collect a deposit with each booking",
            "Held apart until the service is done",
            "Invoice, refund note & credit note made for you",
            "No accounting knowledge needed",
          ],
        },
        stock: {
          eyebrow: "AI inventory tracking",
          title: "Scan the delivery note. Stock updates itself.",
          points: ["AI reads every product line", "Usage deducted per treatment", "Every stock movement tracked", "Expiry & reorder alerts"],
        },
        reports: {
          eyebrow: "Detailed reports",
          title: "Beauty centre reports in under 100 ms",
          points: ["Package sales & sessions redeemed", "Sales by beautician", "Top treatments", "No lag, even with years of data"],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your business",
          points: [
            "See who did what, and when",
            "Owner, manager, beautician & reception roles",
            "Manager approval for discounts",
            "Customer photos and data stay protected",
          ],
        },
      },
      modules: {
        calendar: "Booking calendar",
        whatsapp: "Automatic WhatsApp reminders",
        packages: "Packages & sessions",
        customers: "Customer profiles & skin notes",
        faceChart: "Face chart & e-signature",
        profiles: "Staff profiles & own bookings",
        pos: "POS, retail & receipt printing",
        payment: "Payment gateway integration",
        deposits: "Deposit to income in one click",
        commission: "Staff commission",
        payroll: "Payroll calculation",
        inventory: "AI inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        permissions: "Activity tracking & permissions",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the beauty centre appointment system?",
          a: "It starts from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users). New beauty centres get the first {months} months free, including installation and staff training.",
        },
        {
          q: "Can it track treatment packages and sessions?",
          a: "Yes. Sell packages and prepaid credit, and the system deducts each session and shows the balance at every visit.",
        },
        {
          q: "Can I keep face charts and before and after photos?",
          a: "Yes. Beauticians can draw on a face chart, add photos and treatment notes, and customers sign consent forms on the iPad.",
        },
        {
          q: "Does it send WhatsApp reminders automatically?",
          a: "Yes. Booking confirmations and reminders are sent on WhatsApp automatically, and customers can confirm or reschedule with one tap.",
        },
        {
          q: "Can each beautician have their own profile?",
          a: "Yes. Every staff member logs in on their own phone, iPad or PC to see and manage their appointments, and only sees what their role allows.",
        },
        {
          q: "Does it calculate payroll and commission?",
          a: "Yes. Commission on treatments, packages and product sales is calculated automatically, and monthly payroll adds basic salary and allowances for each staff member.",
        },
        {
          q: "Can I use it on an iPad?",
          a: "Yes. Techub is cross-platform: iPad and Android tablets, phones and computers.",
        },
        {
          q: "Which beauty centre system in Malaysia takes booking deposits online?",
          a: "Techub's beauty appointment system does. It works with various payment gateways, so customers can pay a deposit or the full amount online when they book, by online banking (FPX), card or e-wallet, depending on your gateway. The money goes straight into your beauty centre's own merchant account, and deposits help cut no-shows.",
        },
        {
          q: "Do I need accounting knowledge to handle deposits?",
          a: "No. Each deposit is held apart until the service is done, then one click turns it into income. Techub makes the proper accounting documents for you, such as the invoice, refund note or credit note, so you don't need any accounting knowledge.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as giving a discount, issuing a refund or exporting customer data, with who did it and when. You choose what each role can see or change, and risky actions can need a manager's approval, so your business information stays protected.",
        },
        {
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the beauty centre system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the beauty centre appointment system.",
    },

    spa: {
      meta: {
        title: "Spa & Massage Booking System Malaysia | KL, JB & Penang",
        socialTitle: "Spa Appointment System Malaysia | Techub Software",
        description:
          "Spa and massage booking system for Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: therapists, rooms, packages, WhatsApp reminders, payroll. From RM {price}/month per outlet.",
        keywords: [
          "reflexology booking system",
          "booking deposit system",
          "spa appointment system",
          "spa booking system Malaysia",
          "spa management software",
          "massage booking system",
          "reflexology centre system",
          "wellness centre software",
          "therapist scheduling",
          "spa payroll system",
          "spa membership system",
          "sistem tempahan spa",
          "spa online booking deposit",
          "payment gateway integration Malaysia",
        ],
      },
      category: "Spa and massage booking, rooms and memberships",
      eyebrow: "Spa Appointment System",
      heading: "A calm front desk and *fully booked* therapists",
      intro: "A spa, massage and reflexology booking system for Malaysia: therapists, rooms, packages, payroll and WhatsApp reminders. On iPad, phone and PC.",
      whoFor: ["Day spas", "Massage centres", "Foot reflexology", "Wellness centres", "Hotel & resort spas", "Couple spas"],
      highlights: {
        notify: "Automatic customer notifications",
        platform: "Cross-platform",
        profiles: "Each staff has their own profile",
        inventory: "Inventory tracking",
        payroll: "Payroll calculation",
        reports: "Reports in under 100 ms",
      },
      spotlights: {
        staff: {
          eyebrow: "Staff profiles & payroll",
          title: "Every therapist gets their own profile",
          points: [
            "Therapists view and manage their own appointments",
            "Works on iPhone, Android, iPad and PC",
            "Payroll calculated automatically",
            "Basic salary, commission & allowances",
          ],
        },
        packages: {
          eyebrow: "Packages & memberships",
          title: "Sessions and balances, always up to date",
          points: ["Packages & prepaid credit", "Sessions left on every visit", "Pressure & oil preferences", "Birthday & rebooking reminders"],
          badges: ["Sessions left", "Next visit booked"],
        },
        treatmentMap: {
          eyebrow: "Treatment map & signature",
          title: "Mark the focus areas by hand",
          points: ["Draw on a body map with a stylus", "Therapist notes for next time", "Health declaration & consent", "Customer e-signature"],
        },
        pos: {
          eyebrow: "POS & commission",
          title: "Checkout and commission in one place",
          points: ["Treatments, packages & retail", "Commission per therapist", "Cash, card, DuitNow QR & e-wallet", "Daily sales report"],
        },
        payment: {
          eyebrow: "Online payment & deposits",
          title: "Customers pay online. The money goes straight to you.",
          points: [
            "Works with various payment gateways",
            "Deposit or full payment when they book",
            "Paid into your own merchant account",
            "Fewer no-shows with a booking deposit",
          ],
          badges: ["Deposit paid", "Straight to your account"],
        },
        deposits: {
          eyebrow: "Booking deposit system",
          title: "Collect deposits. Turn them into income in *one click*.",
          points: [
            "Collect a deposit with each booking",
            "Held apart until the service is done",
            "Invoice, refund note & credit note made for you",
            "No accounting knowledge needed",
          ],
        },
        stock: {
          eyebrow: "AI inventory tracking",
          title: "Scan the delivery note. Stock updates itself.",
          points: ["AI reads every product line", "Oils & scrubs deducted per treatment", "Every stock movement tracked", "Smart reorder alerts"],
        },
        reports: {
          eyebrow: "Detailed reports",
          title: "Spa reports in under 100 ms",
          points: [
            "Therapist utilisation & room occupancy",
            "Packages & memberships sold",
            "Top treatments",
            "No lag, even with years of data",
          ],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your business",
          points: [
            "See who did what, and when",
            "Owner, manager, therapist & reception roles",
            "Manager approval for discounts",
            "Customer data stays protected",
          ],
        },
      },
      modules: {
        scheduling: "Therapist & room scheduling",
        whatsapp: "Automatic WhatsApp reminders",
        packages: "Packages & memberships",
        group: "Couple & group bookings",
        treatmentMap: "Treatment map & e-signature",
        profiles: "Staff profiles & own bookings",
        pos: "POS, retail & receipt printing",
        payment: "Payment gateway integration",
        deposits: "Deposit to income in one click",
        commission: "Therapist commission",
        payroll: "Payroll calculation",
        inventory: "AI inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        permissions: "Activity tracking & permissions",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the spa appointment system?",
          a: "It starts from RM {price}/month per outlet (Welcome offer, first {welcomeUsers} users). New spas get the first {months} months free, including installation and staff training.",
        },
        {
          q: "Can I schedule both therapists and rooms?",
          a: "Yes. Each booking holds a therapist and a room, including couple rooms, so you never double-book either.",
        },
        {
          q: "Can I manage packages and memberships?",
          a: "Yes. Sell packages, prepaid credit and memberships, and the system tracks remaining sessions and balances automatically.",
        },
        {
          q: "Does it notify customers automatically?",
          a: "Yes. Booking confirmations and reminders are sent on WhatsApp automatically, and customers can confirm or reschedule with one tap.",
        },
        {
          q: "Can each therapist have their own profile?",
          a: "Yes. Every staff member logs in on their own phone, iPad or PC to see and manage their appointments, and only sees what their role allows.",
        },
        {
          q: "Does it calculate payroll and commission?",
          a: "Yes. Commission on treatments and product sales is calculated automatically, and monthly payroll adds basic salary and allowances for each therapist.",
        },
        {
          q: "Can it track spa inventory?",
          a: "Yes. AI reads supplier delivery notes, oils and scrubs are deducted per treatment, and every stock movement is tracked.",
        },
        {
          q: "Can I use it on an iPad?",
          a: "Yes. Techub is cross-platform, so the front desk and therapists can use iPad, Android tablets, phones or computers.",
        },
        {
          q: "Can customers pay a deposit online?",
          a: "Yes. Techub works with various payment gateways, so customers can pay a deposit or the full amount online when they book, by online banking (FPX), card or e-wallet, depending on your gateway. The money goes straight into your spa's own merchant account, and deposits help cut no-shows.",
        },
        {
          q: "Do I need accounting knowledge to handle deposits?",
          a: "No. Each deposit is held apart until the service is done, then one click turns it into income. Techub makes the proper accounting documents for you, such as the invoice, refund note or credit note, so you don't need any accounting knowledge.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as giving a discount, issuing a refund or exporting customer data, with who did it and when. You choose what each role can see or change, and risky actions can need a manager's approval, so your business information stays protected.",
        },
        {
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the spa system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the spa appointment system.",
    },

    live: {
      meta: {
        title: "Live Selling System Malaysia | KL, JB & Penang",
        socialTitle: "Live Selling System Malaysia | Techub Software",
        description:
          "Live selling system for Facebook and TikTok sellers in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: big crowds, no overselling, scheduled products. From RM {livePrice}/month per outlet.",
        keywords: [
          "live selling system Malaysia",
          "live selling system",
          "live commerce system",
          "flash sale system",
          "online selling system Malaysia",
          "sistem jualan live",
          "直播带货系统",
          "Facebook live selling system",
          "TikTok live selling system",
          "prevent overselling",
          "Kafka order queue",
          "live selling payment gateway",
          "payment gateway integration Malaysia",
        ],
      },
      category: "Live selling and online flash sales",
      eyebrow: "Live Selling System",
      heading: "Sell to big crowds live, and *never oversell*",
      intro:
        "Built for TikTok and Facebook live sellers in Malaysia: add products, set the selling date, and let a big crowd buy at the same time. Kafka order queueing keeps every order in line, and you see your visitors live.",
      whoFor: ["Facebook Live sellers", "TikTok Live sellers", "Instagram shops", "Fashion & tudung", "Beauty & skincare", "Food & snacks", "Flash sales & pre-orders"],
      highlights: {
        crowd: "Handles big crowds",
        queue: "Kafka order queueing",
        oversell: "No overselling",
        schedule: "Set your selling date",
        visitors: "Live visitors by page",
        reports: "Advanced reports",
      },
      spotlights: {
        crowd: {
          eyebrow: "Big crowds, no lag",
          title: "A big crowd can buy at the same second",
          points: [
            "Built for the rush when you say \"buy now\" on your live",
            "Kafka order queueing takes every order in turn",
            "Your sale page stays fast under heavy traffic",
            "Enterprise servers in Malaysia, {uptime} uptime",
          ],
        },
        oversell: {
          eyebrow: "No overselling",
          title: "Never sell more than you have",
          points: [
            "Stock is checked on every single order",
            "Items close by themselves when sold out",
            "No double selling, even at the peak",
            "Buyers see how many are left",
          ],
          badges: ["Stock checked live", "Sold out? Closed."],
        },
        schedule: {
          eyebrow: "Products & selling dates",
          title: "Add products, then pick the selling date",
          points: [
            "Photos, price and stock in a few taps",
            "Choose the date and time each product goes on sale",
            "Sales open and close on time by themselves",
            "Plan your next lives ahead",
          ],
        },
        payment: {
          eyebrow: "Online payment",
          title: "Buyers pay online. The money goes straight to you.",
          points: [
            "Works with various payment gateways",
            "Buyers pay at checkout, right after they order",
            "Paid into your own merchant account",
            "Official receipt sent on WhatsApp",
          ],
          badges: ["Paid at checkout", "Straight to your account"],
        },
        visitors: {
          eyebrow: "Live visitors",
          title: "See who is on your shop, right now",
          points: [
            "Live count of visitors on your shop",
            "Which page each visitor is on",
            "Orders and payments as they happen",
            "Know the right moment to push a product",
          ],
        },
        reports: {
          eyebrow: "Advanced reports",
          title: "Every live sale, in numbers",
          points: [
            "Sales, orders and best sellers for each live",
            "Visitors, conversion and peak minutes",
            "Payment methods and sell-through by product",
            "Reports in under 100 ms, no lag",
          ],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your shop",
          points: [
            "See who did what, and when",
            "Owner, manager, host, packer & service roles",
            "Approval for price changes during a live",
            "Buyer data stays protected",
          ],
        },
      },
      modules: {
        salePage: "Sale page for your live",
        products: "Product listing with photos",
        schedule: "Selling date & time",
        queue: "Kafka order queueing",
        oversell: "Overselling prevention",
        stock: "Real-time stock count",
        visitors: "Live visitor count",
        pages: "Visitors by page",
        checkout: "Fast mobile checkout",
        payment: "Payment gateway integration",
        orders: "Order management",
        receipts: "Automatic invoices & receipts",
        einvoice: "LHDN e-Invoice",
        reports: "Advanced sales reports",
        permissions: "Activity tracking & permissions",
        devices: "Works on phone, iPad & PC",
      },
      faqs: [
        {
          q: "What is the Techub Live Selling System?",
          a: "It is a system for selling online during your live sessions in Malaysia. You add products and choose their selling date, share your sale page on your live, and buyers order from their phones. It handles big crowds, stops overselling and shows your visitors live.",
        },
        {
          q: "Can it handle many buyers at the same time?",
          a: "Yes. Orders go through Kafka order queueing, which takes a big rush of orders at the same moment and processes each one in turn, so your sale page stays fast.",
        },
        {
          q: "Which live selling system in Malaysia stops overselling on TikTok and Facebook?",
          a: "Techub's Live Selling System. Stock is checked and deducted for every order the moment it is placed, whether buyers come from TikTok or Facebook Live. When an item sells out, it closes automatically, so you never sell more than you have.",
        },
        {
          q: "Can I choose when each product goes on sale?",
          a: "Yes. Add a product with photos, price and stock, then choose its selling date and time. It opens for sale at the time you set.",
        },
        {
          q: "Can I see how many people are on my shop?",
          a: "Yes. The live dashboard shows how many visitors are on your shop right now and which page each of them is on, together with orders as they come in.",
        },
        {
          q: "What reports do I get?",
          a: "Sales, orders, best sellers, visitors, conversion, peak minutes and payment methods for every live sale, generated in under 100 milliseconds.",
        },
        {
          q: "How do buyers pay?",
          a: "Online, at checkout. Techub works with various payment gateways, so buyers can pay by online banking (FPX), card or e-wallet, depending on your gateway. The money goes straight into your own merchant account.",
        },
        {
          q: "How much is the Live Selling System?",
          a: "It starts from RM {livePrice} a month per outlet, depending on your needs. WhatsApp us at {phone} to request a demo.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as changing a price during a live, adjusting stock or cancelling an order, with who did it and when. You choose what each role can do, and price changes during a live can need your approval, so your shop's information stays protected.",
        },
        {
          q: "How do I request a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the Live Selling System working, with your own products.",
        },
      ],
      demoMessage: "Hi Techub, I'd like to request a demo of the Live Selling System.",
      contact: {
        badge: "Request a demo",
        title: "See the Live Selling System in action",
        text: "From RM {livePrice}/month per outlet, for online sellers across Malaysia.",
      },
    },
    inventory: {
      meta: {
        title: "Inventory Management & ERP System Malaysia | KL, JB & Penang",
        socialTitle: "Inventory & ERP System Malaysia | Techub Software",
        description:
          "Inventory management and ERP system for businesses in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: batch stock in, barcode and QR, sales and accounting linked, one-click returns.",
        keywords: [
          "inventory management system Malaysia",
          "inventory system Malaysia",
          "stock control system Malaysia",
          "ERP system Malaysia",
          "ERP software Malaysia",
          "barcode inventory system",
          "QR code inventory system",
          "stock tracking system",
          "sales and accounting system Malaysia",
          "credit note and refund note",
          "sistem inventori",
          "库存管理系统",
        ],
      },
      category: "Inventory, sales and accounting (ERP)",
      eyebrow: "Inventory & ERP System",
      heading: "Stock, sales and accounting, *all in one*",
      intro:
        "For trading companies, wholesalers and retailers in Malaysia: stock in by batch, print barcodes and QR codes, and follow every item from stock in to delivery. Sales and returns make their own accounting documents, so your staff need no accounting knowledge.",
      whoFor: ["Trading companies", "Wholesalers & distributors", "Retail shops", "Hardware & electrical", "Food & beverage supply", "Online sellers", "Warehouses"],
      highlights: {
        batch: "Batch stock in",
        trail: "Full stock trail",
        barcode: "Barcode & QR codes",
        sales: "Sales linked to stock",
        accounting: "Accounting done for you",
        returns: "One-click returns",
      },
      spotlights: {
        stockIn: {
          eyebrow: "Batch stock in",
          title: "Stock in a whole delivery *in one go*",
          points: [
            "Receive many products and batches at once",
            "Batch number, quantity and location on every line",
            "Barcode and QR labels printed for the batch",
            "Linked to accounting automatically",
          ],
        },
        trail: {
          eyebrow: "Stock activity tracking",
          title: "Follow every item from *stock in to delivery*",
          points: [
            "A full activity list for every item and batch",
            "Stock in, put away, sold, packed and delivered",
            "Who did each step, and when",
            "Scan a barcode or QR code to see it all",
          ],
        },
        labels: {
          eyebrow: "Barcode & QR codes",
          title: "Print barcodes, generate QR codes",
          points: [
            "Barcode labels for every product",
            "QR codes for batches and cartons",
            "Scan with a phone or a barcode scanner",
            "Works with label printers",
          ],
        },
        sales: {
          eyebrow: "Sales & accounting",
          title: "Every sale does the accounting *for you*",
          points: [
            "Sales linked to stock and accounting",
            "Invoice, delivery order and entries made automatically",
            "Stock deducted the moment you sell",
            "No accounting knowledge needed",
          ],
        },
        returns: {
          eyebrow: "One-click returns",
          title: "Returns in one click, *notes made for you*",
          points: [
            "Click Return on the invoice, that's all",
            "Stock goes back in automatically",
            "Credit note or refund note created by itself",
            "Accounts updated, no manual entries",
          ],
        },
        reports: {
          eyebrow: "Reports in under 100 ms",
          title: "Your sales and stock, *in numbers*",
          points: [
            "Sales, best sellers and slow movers",
            "Stock value and stock on hand",
            "Detailed reports in under 100 ms",
            "On your phone, iPad or PC",
          ],
        },
        permissions: {
          eyebrow: "Staff activity tracking",
          title: "Track every staff action, *protect* your stock",
          points: [
            "See who did what, and when",
            "Owner, account, sales, storekeeper and driver roles",
            "Approval for stock adjustments and price changes",
            "Your business data stays protected",
          ],
        },
      },
      modules: {
        batch: "Batch stock in",
        barcode: "Barcode printing",
        qr: "QR code generation",
        scan: "Scan with phone or scanner",
        trail: "Full stock activity trail",
        levels: "Real-time stock levels",
        delivery: "Delivery tracking",
        sales: "Sales & invoicing",
        orders: "Delivery orders",
        returns: "One-click returns",
        notes: "Automatic credit & refund notes",
        accounting: "Automatic accounting entries",
        einvoice: "LHDN e-Invoice",
        reports: "Detailed reports in under 100 ms",
        permissions: "Activity tracking & permissions",
        devices: "Works on phone, iPad & PC",
      },
      faqs: [
        {
          q: "What is the Techub Inventory & ERP System?",
          a: "It is an inventory, sales and accounting system in one, for businesses in Malaysia. You stock in by batch, print barcodes and QR codes, and track every item from stock in to delivery. Sales and returns create their own accounting documents automatically.",
        },
        {
          q: "Can I stock in many items at once?",
          a: "Yes. Batch stock in lets you receive a whole delivery in one go, with the batch number, quantity and location on every line, and print the barcode and QR labels for it.",
        },
        {
          q: "Can I track each item from stock in to delivery?",
          a: "Yes. Every item and batch has a full activity list: stock in, put away, sold, packed and delivered, with who did each step and when. Scan its barcode or QR code to see the whole trail.",
        },
        {
          q: "Does it print barcodes and QR codes?",
          a: "Yes. Print barcode labels for your products and generate QR codes for batches and cartons, then scan them with a phone or a barcode scanner.",
        },
        {
          q: "Which inventory system in Malaysia links stock, sales and accounting?",
          a: "Techub's Inventory & ERP System. Stock in, sales, deliveries and returns update your stock and your accounts automatically, with every accounting document made for you. It runs on enterprise servers in Malaysia.",
        },
        {
          q: "Do my staff need accounting knowledge?",
          a: "No. Sales and accounting are linked, so each sale makes its invoice, delivery order and accounting entries automatically. Your staff just sell and deliver.",
        },
        {
          q: "How do returns work?",
          a: "Click Return on the invoice. The stock goes back in, and the system creates a credit note or a refund note automatically and updates your accounts.",
        },
        {
          q: "How much is the Inventory & ERP System?",
          a: "It is priced for your business, based on what you need. WhatsApp us at {phone} for a clear quote.",
        },
        {
          q: "Can I see what each staff member does in the system?",
          a: "Yes. Techub records every staff action, such as a stock adjustment, a price change or a return, with who did it and when. You choose what each role can do.",
        },
        {
          q: "How do I book a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the Inventory & ERP System working, with your own products.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the Inventory & ERP System.",
      quoteMessage: "Hi Techub, I'd like a quote for the Inventory & ERP System.",
      quote: {
        eyebrow: "Pricing",
        title: "Priced for *your business*",
        text: "Every business stocks and sells differently, so we quote for what you need. Tell us about your products, branches and team on WhatsApp.",
        points: ["A clear quote before we start", "Local support in Malaysia on WhatsApp", "Enterprise servers in Malaysia"],
      },
      contact: {
        badge: "Get a quote",
        title: "See the Inventory & ERP System in action",
        text: "Priced for your business, for companies across Malaysia.",
      },
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
  /* ---------- Service pages (lib/site.ts servicePages), listed under Use Cases after the systems ----------
     `label` is the name in the menu, `name` the page's name, `blurb` and `points` show on the Use Cases page and in
     the menu, `cta` opens the page. On each page: the top (eyebrow, heading, intro, two buttons and `chips`), the
     dark band of `highlights`, the page's own parts, `spotlights` with pictures, the price, `faqs` and `contact`. */
  servicePages: {
    menuSystems: "Ready systems",
    menuServices: "For any business",
    useCasesTitle: "More ways we help",
    useCasesIntro: "Customisation, data migration, business email and websites, for any business in Malaysia.",
    others: "More ways we help",
    priceEyebrow: "Price",
    customisation: {
      label: "Customisation",
      name: "Software Customisation",
      blurb: "Changes made for your business, from RM {custom} per work hour.",
      points: [
        "Charged by the work hour, from RM {custom}",
        "AI predicts the hours: a clear quote first",
        "Free testing and integration",
        "Instalment plans available",
      ],
      cta: "See customisation examples",
      meta: {
        title: "Software Customisation Malaysia | KL, JB & Penang",
        socialTitle: "Software Customisation | Techub Software",
        description:
          "Software customisation in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: new features, reports and printouts from RM {custom} per work hour, with an AI estimate first and free testing.",
        keywords: [
          "software customisation Malaysia",
          "system customisation",
          "custom software Malaysia",
          "custom report",
          "custom printout",
          "software development per hour",
          "customise clinic system",
          "customise salon system",
        ],
      },
      eyebrow: "Software Customisation",
      heading: "Small changes, *small bills*",
      intro: "Need a new report, printout or feature? We charge by the work hour, from RM {custom}. Our AI predicts the hours, so you know the price before we start.",
      primary: "Ask for a quote",
      message: "Hi Techub, I'd like a quote for a customisation.",
      price: "From RM {custom} / hour",
      chips: ["Clinics", "Hair salons", "Beauty centres", "Spas", "Live sellers", "Any business"],
      highlights: ["From RM {custom} per work hour", "AI predicts the hours", "Clear quote first", "Free testing & integration", "Instalment plans", "Support on WhatsApp"],
      storiesEyebrow: "Examples",
      storiesTitle: "What a small change *really costs*",
      storiesIntro: "Typical requests from clinics, salons, spas and online sellers, with the hours they take.",
      // Customers A to D. Their hours are customExamples in lib/site.ts, in the same order.
      stories: [
        { who: "Customer A · Clinic", task: "Claim file in a new panel company's format", result: "Panel claims go out in one tap each month." },
        { who: "Customer B · Hair salon", task: "Monthly sales file in their accountant's format", result: "Month-end without retyping a single sale." },
        { who: "Customer C · Spa", task: "A new booking question: how did you find us?", result: "Now they know which ads bring customers." },
        { who: "Customer D · Online seller", task: "Order file that uploads straight to their courier", result: "No more copying addresses by hand." },
      ],
      hours: "About {n} hours",
      monthly: "Monthly plan",
      storiesNote: "Examples to show typical costs. Your quote is based on your request.",
      buildTitle: "What we can build for you",
      build: {
        reports: "New reports",
        printouts: "Printouts & forms",
        files: "Excel & accounting files",
        booking: "Booking form questions",
        whatsapp: "WhatsApp messages",
        workflow: "Workflows & approvals",
        integration: "Links to other systems",
        module: "A whole new module",
      },
      spotlights: {
        estimate: {
          eyebrow: "Clear quote first",
          title: "AI predicts the hours, *before we start*",
          points: ["Tell us what you need on WhatsApp", "Our AI estimates the work hours", "See the exact price on your plan", "We start once you approve"],
        },
        testing: {
          eyebrow: "Free testing & integration",
          title: "Tested and connected, *at no charge*",
          points: ["Every change checked before it goes live", "Connected to the rest of your system", "Testing and integration are always free", "We tell you on WhatsApp when it's live"],
        },
      },
      faqs: [
        {
          q: "How much does customisation cost?",
          a: "It's charged by the work hour at your plan's rate: RM {customMonthly} on the monthly plan, RM {custom12} on 12 months, RM {custom24} on 24 months and RM {custom} on 48 months. Testing and integration are free.",
        },
        {
          q: "How do I know the price before you start?",
          a: "Tell us what you need and our AI model predicts the work hours. You get a clear quote for your plan before any work starts, and we only start once you approve it.",
        },
        { q: "Can I pay in instalments?", a: "Yes, instalment plans are available. Ask us about them when you get your quote." },
        {
          q: "What can you customise?",
          a: "New reports, printouts and forms, Excel and accounting files, booking form questions, WhatsApp messages, workflows and approvals, links to other systems, or a whole new module.",
        },
        { q: "Do you charge for testing?", a: "No. Testing and integration with the rest of your system are always free." },
      ],
      contact: {
        title: "Tell us what you'd like to change",
        badge: "Clear quote first",
        text: "Our AI estimates the hours and you see the price before we start. Testing and integration are free.",
      },
    },
    migration: {
      label: "Data migration",
      name: "Data Migration",
      blurb: "Bring your data from any system, charged by time, not volume.",
      points: [
        "PDF, Excel, CSV or TXT files",
        "AI scans old systems that can't export",
        "Planned with our software engineers",
        "Charged by time, not data volume",
      ],
      cta: "See how data migration works",
      meta: {
        title: "Data Migration Services Malaysia | KL, JB & Penang",
        socialTitle: "Data Migration | Techub Software",
        description:
          "Data migration in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: Excel, PDF, CSV, TXT or old systems that can't export. AI screen scanning, charged by time, not data volume.",
        keywords: [
          "data migration Malaysia",
          "data migration service",
          "import Excel data",
          "PDF data extraction",
          "OCR data extraction",
          "legacy system migration",
          "migrate clinic records",
          "AI data extraction",
        ],
      },
      eyebrow: "Data Migration",
      heading: "Bring your data, *from any system*",
      intro: "PDF, Excel, CSV or TXT, our software engineers move it into Techub. Old system can't export? Our AI reads it from the screen, page by page.",
      primary: "Talk to an engineer",
      message: "Hi Techub, I'd like to move my data to Techub. Can I talk to your engineer?",
      price: "About RM {migration} / hour",
      chips: ["Clinics", "Hair salons", "Beauty centres", "Spas", "Online sellers", "Any business"],
      highlights: ["PDF, Excel, CSV & TXT", "AI screen scanning", "Checked by engineers", "Charged by time", "Big data? No worry", "Ready to use in Techub"],
      formatsEyebrow: "Any format",
      formatsTitle: "Send us what you have, *we bring it in*",
      formatsIntro: "Our software engineers look at your files with you first, then plan the move.",
      formats: { pdf: "Reports & scans", excel: "Spreadsheets", csv: "System exports", txt: "Text files" },
      formatsMore: "Another format? Send us a sample.",
      spotlights: {
        scan: {
          eyebrow: "AI screen scanning",
          title: "No export button? *Our AI reads it.*",
          points: ["Our AI tools scan your old system's screens", "Data captured page by page, field by field", "Each field matched to its place in Techub", "Checked by our software engineers"],
        },
        check: {
          eyebrow: "Quality check",
          title: "Clean data from *day one*",
          points: ["Duplicates found and merged", "Phone numbers and dates tidied up", "Unclear records sent for review", "Checked before it goes live"],
        },
      },
      timeEyebrow: "Fair pricing",
      timeTitle: "Charged by time, *not data volume*",
      timeText: "A few thousand records or years of history, you pay for the engineer's time, not the size of your data. So big data stays affordable.",
      timeSmall: "A few thousand records",
      timeBig: "Years of history",
      timeSame: "Same hourly rate",
      stepsTitle: "How it works",
      steps: ["Talk to our engineer", "Get a quote by time", "We move and check it", "Go live in Techub"],
      faqs: [
        {
          q: "Which formats can you import?",
          a: "PDF, Excel, CSV and TXT, and most other exports. Send us a sample and our software engineers will look at it with you first.",
        },
        {
          q: "My old system can't export. Can you still move my data?",
          a: "Yes. Our AI tools scan the old system's screens page by page and capture the data, and our engineers check it before it goes into Techub.",
        },
        {
          q: "How is data migration priced?",
          a: "By the time it takes, not by the amount of data, usually about RM {migration} per hour. You get the estimate after a talk with our software engineer.",
        },
        { q: "I have years of records. Is that a problem?", a: "No. We charge by time, not by data volume, so years of records are no worry." },
        {
          q: "Is my data safe after the move?",
          a: "Yes. In Techub your database is encrypted at rest and every connection uses SSL/TLS, on enterprise servers in Malaysia.",
        },
      ],
      contact: {
        title: "Tell us where your data is today",
        badge: "Charged by time",
        text: "Excel, PDF, CSV, TXT or an old system: our software engineers will plan the move with you.",
      },
    },
    email: {
      label: "Business email",
      name: "Business Email",
      blurb: "Email on your own domain, RM {emailYear} a year, set up for you.",
      points: ["Email on your own domain", "{emailStorage} of storage, RM {emailYear} a year", "We set it all up for you", "Domain not included"],
      cta: "See business email",
      meta: {
        title: "Business Email Malaysia | KL, JB & Penang",
        socialTitle: "Business Email | Techub Software",
        description:
          "Business email on your own domain for companies in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia. RM {emailYear} a year, {emailStorage} of storage, set up for you. Domain not included.",
        keywords: [
          "business email Malaysia",
          "email hosting Malaysia",
          "company email",
          "custom domain email",
          "professional email address",
          "email with own domain",
          "affordable email hosting",
        ],
      },
      eyebrow: "Business Email",
      heading: "Your own email, *on your own domain*",
      intro: "Swap your free email for hello@yourbusiness.com. RM {emailYear} a year with {emailStorage} of storage, and we set it all up for you.",
      primary: "Get business email",
      message: "Hi Techub, I'd like business email on my own domain.",
      price: "RM {emailYear} / year",
      chips: ["Clinics", "Salons & spas", "Online sellers", "Offices", "Startups", "Any business"],
      highlights: ["Your own domain", "RM {emailYear} a year", "{emailStorage} of storage", "Set up for you", "Phone, iPad & PC", "Support on WhatsApp"],
      usesEyebrow: "Use cases",
      usesTitle: "An address *customers trust*",
      uses: [
        { who: "Clinic", address: "booking@yourclinic.com.my", text: "Patients and panel companies email the clinic, not someone's personal account." },
        { who: "Salon & spa", address: "hello@yoursalon.com.my", text: "Booking enquiries and supplier invoices in one tidy inbox." },
        { who: "Online seller", address: "orders@yourshop.com.my", text: "Order emails from your own brand look trustworthy." },
        { who: "Any company", address: "finance@yourcompany.com.my", text: "The address stays with the business when staff change." },
      ],
      spotlights: {
        setup: {
          eyebrow: "Set up for you",
          title: "We set it all up, *you just use it*",
          points: ["We connect your domain", "We create your mailboxes", "We add them to your phones and PCs", "We test sending and receiving"],
        },
        devices: {
          eyebrow: "Every device",
          title: "Your inbox on *every phone and PC*",
          points: ["iPhone, Android, iPad, Windows and Mac", "New emails arrive right away", "{emailStorage} of storage", "Help on WhatsApp when you need it"],
          badges: ["New enquiry", "Your own domain"],
        },
      },
      faqs: [
        { q: "How much is business email?", a: "RM {emailYear} a year with {emailStorage} of storage, and we set it up for you." },
        {
          q: "Is the domain included?",
          a: "No, the price doesn't include the domain. Use a domain you already have, or buy one such as .com or .com.my, and we'll connect it for you.",
        },
        {
          q: "Do you set it up for me?",
          a: "Yes. We connect your domain, create your mailboxes and add them to your phones and computers, then test sending and receiving.",
        },
        { q: "Can I use it on my phone?", a: "Yes, on iPhone and Android phones, iPads, and Windows or Mac computers." },
        {
          q: "Why not use a free email address?",
          a: "An address on your own domain looks more professional and builds trust, and it stays with your business even when staff change.",
        },
      ],
      contact: {
        title: "Get your business email set up",
        badge: "RM {emailYear} a year",
        text: "Tell us your domain, or the one you'd like, and we'll set everything up for you.",
      },
    },
    website: {
      label: "Website design",
      name: "Website Design",
      blurb: "Beautiful, fast websites from RM {website}, hosted for you.",
      points: [
        "Designed for your brand, up to {websitePages} pages",
        "Pages change instantly, with no reload",
        "Free domain for the first year",
        "Cloudflare hosting: over 1 million views a minute",
      ],
      cta: "See website designs",
      meta: {
        title: "Website Design Malaysia | KL, JB & Penang",
        socialTitle: "Website Design | Techub Software",
        description:
          "Website design in Kuala Lumpur, Johor Bahru, Penang and all of Malaysia: up to {websitePages} pages, no-reload page changes, Cloudflare hosting, SEO ready. RM {website} with a free domain for year one.",
        keywords: [
          "website design Malaysia",
          "web design Malaysia",
          "landing page design",
          "website for small business",
          "affordable website design",
          "Cloudflare hosting",
          "SEO website Malaysia",
          "website with free domain",
        ],
      },
      eyebrow: "Website Design",
      heading: "Beautiful websites that *feel instant*",
      intro: "Designed for your brand and hosted on Cloudflare, from RM {website} with a free domain for the first year. Pages change instantly, with no reload.",
      primary: "Get a website",
      message: "Hi Techub, I'd like a website designed and hosted.",
      price: "RM {website} · free domain",
      chips: ["Clinics", "Salons & spas", "Cafés", "Homestays", "Studios", "Professional firms"],
      highlights: ["Designed for your brand", "No reload between pages", "Perfect on phones", "Cloudflare hosting", "SEO & AI search ready", "Free domain, first year"],
      galleryEyebrow: "Example designs",
      galleryTitle: "Designed to *impress*",
      galleryIntro: "Concept designs for sample businesses. Yours is designed for your own brand.",
      gallery: { skin: "Skin clinic", dental: "Dental clinic", cafe: "Café", homestay: "Villa stay", interior: "Interior design", accounting: "Accounting firm" },
      spotlights: {
        instant: {
          eyebrow: "Single-page technology",
          title: "Pages change *instantly*",
          points: ["Built with React and Next.js", "The address changes, the page doesn't reload", "No white flash, no waiting", "Feels like an app on phones"],
          badge: "No reload",
        },
        fast: {
          eyebrow: "Cloudflare hosting",
          title: "Fast everywhere, *ready for crowds*",
          points: ["Hosted on Cloudflare's global network", "Handles over 1 million views a minute", "Optimised for SEO and AI search", "Free domain for the first year"],
          badge: "1M+ views a minute",
        },
      },
      faqs: [
        {
          q: "How much does a website cost?",
          a: "RM {website} for design and hosting, with a free domain for the first year. After that it's RM {websiteYear} a year for maintenance.",
        },
        { q: "How many pages can I have?", a: "Up to {websitePages} pages. We build static websites, without product listings or a blog." },
        {
          q: "What does \"no reload\" mean?",
          a: "Your website is built with React and Next.js as a single-page app. When visitors open another page, the address changes but the browser doesn't reload, so it feels smooth and instant.",
        },
        { q: "Can my website handle a lot of visitors?", a: "Yes. It's hosted on Cloudflare and handles over 1 million views a minute." },
        {
          q: "Will customers find my website?",
          a: "Every website is optimised for SEO and AI search, so search engines and AI assistants can read and understand your pages.",
        },
        {
          q: "Can you add an online shop or a blog?",
          a: "Our websites are static, without product listings or a blog. To sell online during live sessions, ask about our Live Selling System.",
        },
      ],
      contact: {
        title: "Let's design your website",
        badge: "RM {website} · free domain",
        text: "Tell us about your business and the look you like. We'll design it, host it and get it live.",
      },
    },
  },

  /* ---------- Cities we serve (local search): a section and an FAQ on every use case page ---------- */
  local: {
    eyebrow: "Kuala Lumpur · Johor Bahru · Penang",
    title: "{phrase} in *Kuala Lumpur, Johor Bahru & Penang*",
    text: "Techub serves {who} in Kuala Lumpur and the Klang Valley, Johor Bahru, Penang and the rest of Malaysia. Everything runs on enterprise servers in Malaysia, with support on WhatsApp in English, Malay and Chinese.",
    cities: [
      { name: "Kuala Lumpur & Klang Valley", places: ["Kuala Lumpur", "Petaling Jaya", "Subang Jaya", "Shah Alam", "Cheras", "Puchong"] },
      { name: "Johor Bahru", places: ["Johor Bahru", "Skudai", "Iskandar Puteri", "Kulai", "Pasir Gudang", "Mount Austin"] },
      { name: "Penang", places: ["George Town", "Bayan Lepas", "Butterworth", "Bukit Mertajam", "Gelugor", "Tanjung Tokong"] },
    ],
    more: "Somewhere else in Malaysia? We serve every state.",
    faq: {
      q: "Do you serve {who} in Kuala Lumpur, Johor Bahru and Penang?",
      a: "Yes. Techub serves {who} in Kuala Lumpur and the Klang Valley, Johor Bahru, Penang and every other state in Malaysia, with support on WhatsApp. Everything runs on enterprise servers in Malaysia.",
    },
    pages: {
      useCases: { phrase: "Business systems", who: "clinics, salons, spas, beauty centres, live sellers and trading companies" },
      clinic: { phrase: "Clinic management system", who: "clinics" },
      salon: { phrase: "Salon booking system", who: "hair salons" },
      beauty: { phrase: "Beauty appointment system", who: "beauty centres" },
      spa: { phrase: "Spa and massage booking system", who: "spas and massage centres" },
      live: { phrase: "Live selling system", who: "live sellers" },
      inventory: { phrase: "Inventory management system", who: "trading companies, wholesalers and retailers" },
      customSystems: { phrase: "Custom software development", who: "businesses" },
      customisation: { phrase: "Software customisation", who: "businesses" },
      migration: { phrase: "Data migration", who: "businesses" },
      email: { phrase: "Business email", who: "businesses" },
      website: { phrase: "Website design", who: "businesses" },
    },
  },

  shots: {
    clinicDashboard: {
      title: "Clinic dashboard on iPad",
      alt: "Techub clinic management system on an iPad showing the live queue, today's appointments confirmed on WhatsApp, revenue and low stock alerts",
    },
    medication: {
      title: "Patient records & medication tracking",
      alt: "Patient medication history on an iPad with a penicillin allergy alert and a suggested alternative medicine",
    },
    bodyChart: {
      title: "Hand-drawn body chart",
      alt: "iPad body chart with the doctor's hand-drawn notes and the patient's digital consent signature",
    },
    clinicStock: {
      title: "Medicine stock & AI insights",
      alt: "Clinic medicine stock movement log on an iPad with an AI reorder suggestion and expiring batches",
    },
    clinicPermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff activity log and role-based permissions for doctors, nurses, pharmacy and cashiers on an iPad, showing who did what and when",
    },
    whatsappClinic: {
      title: "WhatsApp appointment reminder",
      alt: "WhatsApp appointment confirmation and reminder sent automatically to a clinic patient",
    },
    scanClinic: {
      title: "AI delivery note scan",
      alt: "Phone scanning a medicine supplier's delivery note while AI reads each item, batch and expiry and updates clinic stock",
    },
    icScanClinic: {
      title: "IC scanner for patient registration",
      alt: "Phone camera scanning a sample IC while OCR on the device reads the name, IC number and address and fills in a new patient's registration",
    },
    paymentClinic: {
      title: "Online payment & deposit",
      alt: "A patient paying a RM 50 deposit for a health screening on a phone, by online banking (FPX), card, e-wallet or DuitNow QR, paid straight to the clinic's own merchant account",
    },
    queueTv: {
      title: "Queue number calling display",
      alt: "Clinic queue number calling TV display showing now calling A023 to Room 2 in English, Malay and Chinese",
    },
    printouts: {
      title: "Receipts, MC & labels",
      alt: "Sample printed receipt, medical certificate and medicine label produced by the Techub clinic system",
    },
    salonCalendar: {
      title: "Hair salon booking calendar",
      alt: "Hair salon appointment calendar on an iPad by stylist, with colour, rebonding and keratin bookings, walk-ins and WhatsApp confirmations",
    },
    salonPos: {
      title: "Salon POS checkout",
      alt: "Hair salon POS checkout on an iPad with services, retail products, stylist commission and DuitNow QR payment",
    },
    salonStock: {
      title: "Salon product stock & AI insights",
      alt: "Hair salon product stock movement log on an iPad with an AI reorder suggestion",
    },
    salonPermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff activity log and role-based permissions for the salon owner, manager, stylists and receptionist on an iPad",
    },
    whatsappSalon: {
      title: "WhatsApp booking reminder",
      alt: "WhatsApp booking confirmation and reminder sent automatically to a hair salon customer, who confirms with one tap",
    },
    salonCustomer: {
      title: "Customer profile & colour formula",
      alt: "Hair salon customer profile on a phone with visit history, colour formula, favourite stylist and member points",
    },
    scanSalon: {
      title: "AI delivery note scan",
      alt: "Phone scanning a hair products delivery note while AI reads each item and updates salon stock",
    },
    paymentSalon: {
      title: "Online booking deposit",
      alt: "A customer paying a RM 50 booking deposit for a hair colour and treatment on a phone, by online banking (FPX), card, e-wallet or DuitNow QR, paid straight to the salon's own merchant account",
    },
    depositsSalon: {
      title: "Booking deposits",
      alt: "Salon booking deposits on an iPad, each held until the service is done, with its deposit receipt and a one-click Convert to income button",
    },
    depositInvoiceSalon: {
      title: "Deposit to income in one click",
      alt: "Invoice made automatically on an iPad after one click turned a RM 50 salon deposit into income, with the deposit already deducted",
    },
    depositNotesSalon: {
      title: "Invoices, refund notes & credit notes",
      alt: "Salon deposits on an iPad with the invoice, refund note or credit note the system made for each one, with no accounting knowledge needed",
    },
    beautyCalendar: {
      title: "Beauty centre booking calendar",
      alt: "Beauty centre appointment calendar on an iPad with facials, lash and brow, nails and slimming bookings and package sessions",
    },
    faceChart: {
      title: "Face chart, photos & consent",
      alt: "Facial treatment face chart on an iPad with the beautician's hand-drawn skin notes, before and after photos and the customer's e-signature",
    },
    beautyPos: {
      title: "Beauty POS checkout",
      alt: "Beauty centre POS checkout on an iPad with treatments, package redemption, products and staff commission",
    },
    beautyStock: {
      title: "Beauty product stock & AI insights",
      alt: "Beauty centre product stock movement log on an iPad with an AI reorder suggestion",
    },
    beautyPermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff activity log and role-based permissions for the beauty centre owner, manager, beauticians and receptionist on an iPad",
    },
    whatsappBeauty: {
      title: "WhatsApp booking reminder",
      alt: "WhatsApp booking confirmation and reminder sent automatically to a beauty centre customer, with package sessions left",
    },
    beautyPackage: {
      title: "Packages & treatment history",
      alt: "Beauty centre customer profile on a phone with facial and lash packages, sessions left, skin notes and next appointment",
    },
    scanBeauty: {
      title: "AI delivery note scan",
      alt: "Phone scanning a beauty supplies delivery note while AI reads each item and updates stock",
    },
    paymentBeauty: {
      title: "Online booking deposit",
      alt: "A customer paying a RM 30 booking deposit for a Hydra Facial on a phone, by online banking (FPX), card, e-wallet or DuitNow QR, paid straight to the beauty centre's own merchant account",
    },
    depositsBeauty: {
      title: "Booking deposits",
      alt: "Beauty centre booking deposits on an iPad, each held until the service is done, with its deposit receipt and a one-click Convert to income button",
    },
    depositInvoiceBeauty: {
      title: "Deposit to income in one click",
      alt: "Invoice made automatically on an iPad after one click turned a RM 30 beauty centre deposit into income, with the deposit already deducted",
    },
    depositNotesBeauty: {
      title: "Invoices, refund notes & credit notes",
      alt: "Beauty centre deposits on an iPad with the invoice, refund note or credit note the system made for each one, with no accounting knowledge needed",
    },
    spaCalendar: {
      title: "Spa booking calendar",
      alt: "Spa appointment calendar on an iPad by therapist and room, with massage, body scrub and couple spa bookings",
    },
    bodyChartSpa: {
      title: "Treatment map & signature",
      alt: "iPad treatment map with the therapist's hand-drawn massage areas and the customer's digital signature",
    },
    spaPos: {
      title: "Spa POS checkout",
      alt: "Spa POS checkout on an iPad with massage packages, retail products, therapist commission and payment options",
    },
    spaStock: {
      title: "Spa stock & AI insights",
      alt: "Spa stock movement log for oils, scrubs and towels on an iPad with an AI reorder suggestion",
    },
    spaPermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff activity log and role-based permissions for the spa owner, manager, therapists and receptionist on an iPad",
    },
    whatsappSpa: {
      title: "WhatsApp booking reminder",
      alt: "WhatsApp booking confirmation and reminder sent automatically to a spa customer, who confirms with one tap",
    },
    spaPackage: {
      title: "Packages & memberships",
      alt: "Spa customer profile on a phone with package sessions left, next appointment and massage preferences",
    },
    scanSpa: {
      title: "AI delivery note scan",
      alt: "Phone scanning a spa supplies delivery note while AI reads each item and updates stock",
    },
    paymentSpa: {
      title: "Online booking deposit",
      alt: "A customer paying a RM 40 booking deposit for a Balinese massage on a phone, by online banking (FPX), card, e-wallet or DuitNow QR, paid straight to the spa's own merchant account",
    },
    depositsSpa: {
      title: "Booking deposits",
      alt: "Spa booking deposits on an iPad, each held until the service is done, with its deposit receipt and a one-click Convert to income button",
    },
    depositInvoiceSpa: {
      title: "Deposit to income in one click",
      alt: "Invoice made automatically on an iPad after one click turned a RM 40 spa deposit into income, with the deposit already deducted",
    },
    depositNotesSpa: {
      title: "Invoices, refund notes & credit notes",
      alt: "Spa deposits on an iPad with the invoice, refund note or credit note the system made for each one, with no accounting knowledge needed",
    },
    permissionsDesktop: {
      title: "Staff activity tracking on PC",
      alt: "Staff activity log and permission control in a web browser on a PC, with every discount and refund recorded",
    },
    clinicDashboardDesktop: {
      title: "Techub dashboard on PC",
      alt: "Techub cloud dashboard in a web browser on a PC showing the live queue, today's appointments, weekly revenue and an AI stock suggestion",
    },
    reportsClinic: {
      title: "Clinic reports",
      alt: "Clinic report on an iPad generated in under 100 ms: patients seen, consultations, collections and sales by doctor",
    },
    reportsSalon: {
      title: "Salon reports",
      alt: "Salon sales report on an iPad generated in under 100 ms: sales by stylist, services and retail",
    },
    reportsBeauty: {
      title: "Beauty centre reports",
      alt: "Beauty centre report on an iPad generated in under 100 ms: package sales, sessions redeemed and top treatments",
    },
    reportsSpa: {
      title: "Spa reports",
      alt: "Spa report on an iPad generated in under 100 ms: therapist utilisation, room occupancy and packages sold",
    },
    staffSalon: {
      title: "Stylist's own profile",
      alt: "A stylist's own profile on a phone with today's appointments, their status and this month's commission",
    },
    staffBeauty: {
      title: "Beautician's own profile",
      alt: "A beautician's own profile on a phone with today's appointments, their status and this month's commission",
    },
    staffSpa: {
      title: "Therapist's own profile",
      alt: "A therapist's own profile on a phone with today's appointments, their status and this month's commission",
    },
    payrollSalon: {
      title: "Salon payroll",
      alt: "Monthly payroll on an iPad with basic salary, commission from sales, allowances and net pay for each stylist",
    },
    payrollBeauty: {
      title: "Beauty centre payroll",
      alt: "Monthly payroll on an iPad with basic salary, commission from sales, allowances and net pay for each beautician",
    },
    payrollSpa: {
      title: "Spa payroll",
      alt: "Monthly payroll on an iPad with basic salary, commission from sales, allowances and net pay for each therapist",
    },
    eInvoice: {
      title: "LHDN e-Invoice",
      alt: "An e-Invoice validated through LHDN MyInvois, with its unique identifier and QR code",
    },
    inventoryDashboard: {
      title: "Inventory & ERP dashboard on iPad",
      alt: "Techub inventory and ERP dashboard on an iPad showing stock value, today's sales, deliveries, a live activity feed from batch stock in to a return, and the accounting documents made automatically",
    },
    stockIn: {
      title: "Batch stock in",
      alt: "Batch stock in on an iPad: 1,240 units in 8 batches posted at once, each with its rack, barcode and QR labels printed and the supplier bill sent to Accounts",
    },
    stockTrail: {
      title: "Full stock activity trail",
      alt: "Stock activity trail of one batch on an iPad, from stock in, labels and put away to sale, packing and delivery, showing who did each step, when, and on which document",
    },
    barcodeLabels: {
      title: "Barcode & QR labels",
      alt: "Printed batch label with a QR code, product barcode stickers, a rack label and a carton label for a delivery order",
    },
    erpSales: {
      title: "Sales linked to accounting",
      alt: "Sales invoice on an iPad with the rest done automatically: delivery order, stock deducted, journal entries, customer ledger and LHDN e-Invoice",
    },
    erpReturn: {
      title: "One-click return & credit note",
      alt: "One-click return on an iPad: the credit note is created automatically, the stock goes back to its rack and the accounts are reversed",
    },
    reportsInventory: {
      title: "Sales & stock reports",
      alt: "Monthly report of sales, gross profit, best sellers and slow movers, generated in 74 ms on an iPad",
    },
    inventoryPermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff permissions for owner, account, sales, storekeeper and driver roles on an iPad, with a staff activity log and a price change waiting for approval",
    },
    stockScan: {
      title: "Scan a barcode with your phone",
      alt: "Phone camera scanning a carton barcode to find the item, its stock on hand, rack location and last activity",
    },
    erpDesktop: {
      title: "Custom ERP system",
      alt: "Example of a custom ERP dashboard with sales, purchasing, inventory, accounting and HR modules",
    },
    plateScanner: {
      title: "Number plate scanner",
      alt: "Example of a number plate scanner system reading a car plate at a barrier gate, with an entry and exit log",
    },
    objectDetection: {
      title: "AI object detection",
      alt: "Example of an AI object detection system marking people, safety helmets, boxes and vehicles on camera feeds",
    },
    liveDashboard: {
      title: "Live sale dashboard",
      alt: "Live selling dashboard on an iPad during a live sale, with 1,286 visitors online, orders per minute, sales so far and stock left for each product",
    },
    liveVisitors: {
      title: "Live visitors by page",
      alt: "Live visitors screen on an iPad showing how many people are on the shop right now, which page each is on, and a live feed of orders and payments",
    },
    liveQueue: {
      title: "Kafka order queue",
      alt: "Order queue monitor on an iPad: Kafka queue healthy with 0 waiting, a spike of 412 orders a minute processed smoothly, and orders over stock stopped",
    },
    liveProducts: {
      title: "Products & selling dates",
      alt: "Product list on an iPad with a new product being added, its price, stock and the selling date and time it opens for sale",
    },
    reportsLive: {
      title: "Live sale report",
      alt: "Live sale report on an iPad generated in under 100 ms: sales, orders, visitors, conversion, payment methods and best sellers",
    },
    livePermissions: {
      title: "Staff activity tracking & permissions",
      alt: "Staff activity log and permissions for the live shop owner, manager, live hosts, packers and customer service on an iPad, with price changes during a live needing approval",
    },
    liveShop: {
      title: "Sale page on the buyer's phone",
      alt: "A live sale page on a phone with a LIVE badge, 1,286 people on the shop, products with stock left and sold-out items closed",
    },
    liveProduct: {
      title: "Only 3 left",
      alt: "Product page on a phone showing only 3 left, a live stock bar, 121 people viewing and a Buy now button",
    },
    liveCheckout: {
      title: "Order confirmed",
      alt: "Order confirmed on a buyer's phone, paid by online banking, with the official receipt sent to WhatsApp",
    },
    livePayment: {
      title: "Online payment at checkout",
      alt: "A buyer paying RM 77.80 for a live sale order on a phone, by online banking (FPX), card, e-wallet or DuitNow QR, paid straight to the shop's own merchant account",
    },
    customRequest: {
      title: "Customisation request on WhatsApp",
      alt: "A clinic asking Techub on WhatsApp for a new panel claim export and getting a quote of 6 work hours at RM 80, with free testing and integration",
    },
    customEstimate: {
      title: "AI work-hour estimate & quote",
      alt: "Customisation request on an iPad with an AI estimate of 6 work hours and a quote of RM 480 on the 48-month plan, testing and integration free",
    },
    customTesting: {
      title: "Free testing & integration",
      alt: "Testing and integration of a new clinic feature on an iPad, every check passed, at no charge",
    },
    customClaims: {
      title: "Customer A: panel claim export",
      alt: "Clinic panel claims for October on an iPad with a new export button that makes the panel company's own Excel format",
    },
    customSalesExport: {
      title: "Customer B: sales in the accountant's format",
      alt: "Hair salon monthly sales report on an iPad, exported in the accountant's own Excel format",
    },
    customFoundUs: {
      title: "Customer C: \"How did you find us?\"",
      alt: "Spa booking form on an iPad with a new question, how did you find us, and a report of the answers from 312 bookings",
    },
    customCourier: {
      title: "Customer D: courier upload file",
      alt: "Online seller's 214 orders of the day on an iPad, ready to download as the courier's bulk upload file",
    },
    migrationImport: {
      title: "Import from any format",
      alt: "Data migration workspace reading Excel, PDF, CSV and TXT files from an old clinic system, with AI matching each old column to a Techub field",
    },
    migrationScan: {
      title: "AI screen scanning",
      alt: "AI scanning an old system's screens page by page and pulling out each field, for a system that can't export its data",
    },
    migrationCheck: {
      title: "Every record checked",
      alt: "Data migration check of 143,861 records with duplicates merged, phone numbers fixed and a few records sent for review",
    },
    migrationDone: {
      title: "Migration complete",
      alt: "Data migration complete with 143,861 records live in Techub, charged by engineer time, not by data volume",
    },
    migrationChat: {
      title: "Data migration on WhatsApp",
      alt: "A clinic sends its Excel and scanned PDF files to Techub on WhatsApp, gets a migration plan charged by time, then hears its 143,861 records are live",
    },
    emailInbox: {
      title: "Business email on your own domain",
      alt: "A hair salon's inbox on an iPad at its own domain address, with a bridal hair enquiry open",
    },
    emailSetup: {
      title: "Email set up for you",
      alt: "Business email set up by Techub: domain connected, four mailboxes created, staff phones and PCs added, 5 GB of storage",
    },
    emailPhone: {
      title: "Email on your phone",
      alt: "A new customer enquiry arriving in the salon's business email inbox on a phone",
    },
    siteHome: {
      title: "Website design: skin clinic",
      alt: "Example website for a skin clinic in Bangsar, Kuala Lumpur, with an elegant home page and a Book a consultation button",
    },
    siteTreatments: {
      title: "Treatments page, no reload",
      alt: "The skin clinic website's treatments page with prices in RM, opened instantly without reloading the page",
    },
    siteContact: {
      title: "Booking & WhatsApp page",
      alt: "The skin clinic website's booking page with a booking form, a WhatsApp button, opening hours and a map",
    },
    sitePhone: {
      title: "Website on a phone",
      alt: "The skin clinic website on a phone with its headline and a Book button",
    },
    siteDental: {
      title: "Website design: dental clinic",
      alt: "Example website for a family dental clinic in Petaling Jaya with treatments from RM prices and appointment booking",
    },
    siteCafe: {
      title: "Website design: café",
      alt: "Example website for an artisan bakery café in George Town, Penang, with a menu of kopi, kaya toast and pastries in RM",
    },
    siteCafePhone: {
      title: "Café website on a phone",
      alt: "The bakery café website on a phone with its menu and an order for pickup button",
    },
    siteHomestay: {
      title: "Website design: villa stay",
      alt: "Example website for a private pool villa stay in Langkawi with an availability search and prices per night",
    },
    siteHomestayPhone: {
      title: "Villa website on a phone",
      alt: "The villa stay website on a phone with a check availability button",
    },
    siteInterior: {
      title: "Website design: interior studio",
      alt: "Example website for an interior design studio in Kuala Lumpur with a gallery of projects",
    },
    siteAccounting: {
      title: "Website design: accounting firm",
      alt: "Example website for an accounting and tax firm for SMEs in Johor Bahru with services and a free consultation button",
    },
  },
};

export default en;
export type Dict = typeof en;
