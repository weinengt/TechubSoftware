// All English text on the site. ms.ts (Bahasa Melayu) and zh.ts (Simplified Chinese) have the same keys.
//
// Placeholders are filled in from lib/site.ts, so prices and contact details only change there:
//   {name} company name · {price} monthly price · {months} free months · {custom} customisation price
//   {uptime} uptime · {phone} WhatsApp number · {email} email address
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
    whatsappMessage: "Hi Techub Software, I'm interested in your system. Can I get a free demo?",
    emailSubject: "Enquiry about Techub system",
    priceLine: "From RM {price}/month · {months} months free",
    enlarge: "Enlarge picture",
  },

  nav: {
    useCases: "Use Cases",
    technology: "Technology",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
  },

  menu: {
    useCases: "Use cases",
    otherTitle: "Another kind of business?",
    otherText: "We build custom systems too.",
  },

  // The business types with a ready system. Each has its own page.
  systems: {
    clinic: {
      label: "Clinic",
      name: "Clinic Management System",
      blurb: "Patient records, medication tracking, queue and printing.",
      points: [
        "Patient records tracking",
        "Medication tracking system",
        "Queue number calling on TV",
        "X-ray machine & printer connection",
        "Detailed reports in under 100 ms",
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
        "Detailed reports in under 100 ms",
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
        "Detailed reports in under 100 ms",
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
        "Detailed reports in under 100 ms",
      ],
      cta: "See the spa system",
    },
  },

  footer: {
    blurb:
      "{name} is a Malaysian software company. We build smart, low-cost systems for clinics, hair salons, beauty centres and spas, and custom systems such as ERP, AI object detection and number plate scanners. {uptime} uptime guarantee, from RM {price}/month.",
    useCases: "Use cases",
    custom: "Custom systems",
    company: "Company",
    about: "About us",
    services: "Services",
    technology: "Technology",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Smart, low-cost business systems in Malaysia.",
  },

  bubble: {
    hello: "Hi there! 👋",
    text: "Want a free demo? Your first {months} months are free.",
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
      title: "Techub Software | Appointment & Clinic Systems Malaysia",
      description:
        "Malaysia's appointment system with AI: advanced booking, WhatsApp notifications, stock control and reports in under 100 ms for clinics, salons, beauty centres and spas. {uptime} uptime. From RM {price}/month, first {months} months free.",
      keywords: [
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
        "Real-time updates, WhatsApp notifications and stock control on an enterprise-level database, with {uptime} uptime and guaranteed speed.",
      secondary: "Explore use cases",
      note: "First {months} months free, including installation and staff training.",
      statUptime: "Uptime",
      statReports: "Reports in",
      statReportsValue: "<100 ms",
      statFrom: "From",
      perMonth: "/mo",
      deviceBadge: "Cloud · iPad, phone & PC",
    },
    highlights: {
      eyebrow: "Why Techub",
      title: "Fast, smart and *always online*",
      items: {
        booking: { title: "Advanced booking", text: "Staff, rooms, services and walk-ins in one calendar." },
        ai: { title: "AI integration", text: "AI reads delivery notes and predicts stock." },
        uptime: { title: "{uptime} uptime", text: "Your system stays online, guaranteed." },
        database: { title: "Enterprise-level database", text: "Indexed NoSQL on enterprise servers." },
        speed: { title: "Guaranteed speed", text: "Detailed reports in under 100 ms." },
        realtime: { title: "Real-time updates", text: "Every device updates instantly." },
        whatsapp: { title: "WhatsApp notifications", text: "Confirmations and reminders, sent for you." },
        stock: { title: "Stock control", text: "Every item in and out, tracked." },
      },
    },
    softwareName: "Techub Appointment Management System",
    softwareCategory: "Appointment scheduling and business management",
    useCasesListName: "Techub Software use cases",
    servicesListName: "Techub Software services",
  },

  about: {
    eyebrow: "About Techub",
    title: "Malaysian software, *simple and affordable*",
    intro:
      "We build systems that help businesses take bookings, serve customers and manage stock. Then we set everything up for you.",
    values: {
      cost: { title: "Low cost", text: "From RM {price}/month. Customisation from RM {custom}, based on your needs." },
      online: { title: "Always online", text: "{uptime} uptime guarantee, with multi-region backups." },
      done: { title: "Done for you", text: "We install, connect your hardware and train your staff." },
      custom: { title: "Built your way", text: "We customise forms, workflows, reports and printouts." },
    },
  },

  uptime: {
    label: "uptime guarantee",
    text: "Less than 22 minutes of downtime a month, on average.",
    chips: ["Servers in Malaysia", "Monitored", "Encrypted backups"],
  },

  services: {
    eyebrow: "Our services",
    title: "What we do for you",
    intro: "Ready-made or built for you. We set it all up and train your team.",
    items: {
      systems: { title: "Ready-made systems", text: "Appointment systems for clinics, salons, beauty centres and spas." },
      custom: {
        title: "Custom system development",
        text: "ERP, AI object detection, number plate scanners and more. Customisation from RM {custom}.",
      },
      hardware: {
        title: "Hardware setup",
        text: "Label printers, number calling systems, X-ray machines and more, installed and connected.",
      },
      support: { title: "Training & support", text: "Free installation and staff training, then local support on WhatsApp." },
    },
    howTitle: "How we work",
    howText: "Customisation starts from RM {custom}, based on your requirements.",
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
    intro: "Tap a business to see its system on iPad and phone.",
    tabsLabel: "Use cases",
  },

  custom: {
    eyebrow: "Custom systems",
    title: "Need another system? *We build it.*",
    intro: "Beyond appointment systems, we build custom systems for any business. Customisation from RM {custom}, based on your requirements.",
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
    intro: "Malaysian enterprise servers, a fast NoSQL database, AI and WhatsApp, working together on every device.",
    explore: "Explore our technology",
    items: {
      servers: {
        title: "Enterprise servers in Malaysia",
        text: "Hosted on servers such as IPServerOne and Amazon Web Services. We are open about where your data is kept.",
      },
      database: { title: "Fast NoSQL database", text: "Indexed data, so detailed reports load in under 100 ms." },
      security: { title: "Encrypted & backed up", text: "All saved data is encrypted, with multi-layer backups across regions." },
      ai: { title: "AI integration", text: "AI reads delivery notes, updates stock and suggests what to reorder." },
      realtime: { title: "Real-time updates", text: "Every iPad, phone and PC sees changes instantly." },
      whatsapp: { title: "WhatsApp notifications", text: "Booking confirmations and reminders go out automatically." },
      hardware: { title: "Multi-hardware connect", text: "Label printers, number calling systems, X-ray machines and more." },
      einvoice: { title: "LHDN e-Invoice", text: "e-Invoices submitted to LHDN through MyInvois." },
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
      title: "Technology | Malaysian Servers, NoSQL, AI, WhatsApp & e-Invoice",
      socialTitle: "Technology | Techub Software",
      description:
        "The technology behind {name}: enterprise servers in Malaysia (IPServerOne, Amazon Web Services), an indexed NoSQL database with reports in under 100 ms, encrypted multi-region backups, AI, WhatsApp, LHDN e-Invoice and hardware such as label printers and X-ray machines. {uptime} uptime.",
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
    intro: "Malaysian enterprise servers, a fast NoSQL database, AI and WhatsApp, on any device. {uptime} uptime guaranteed.",
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
      "Your bookings, queue screens and payments stay online. That is less than 22 minutes of downtime a month on average.",
    uptimePoints: [
      "Enterprise servers in Malaysia",
      "Multi-layer, multi-region backups",
      "All saved data encrypted",
      "Local support on WhatsApp",
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
        a: "All saved data is encrypted and sent over encrypted connections. Backups are kept in multiple layers across multiple regions, role-based permissions control what each staff member can see, and an audit trail records every action.",
      },
      {
        q: "Why are Techub reports so fast?",
        a: "Techub uses an indexed NoSQL database, so even detailed reports are generated in under 100 milliseconds, without lag. Servers in Malaysia keep the response fast for Malaysian businesses.",
      },
      {
        q: "What does the {uptime} uptime guarantee mean?",
        a: "The system is available at least {uptime} of the time. That is less than 22 minutes of downtime a month on average.",
      },
      {
        q: "How does the AI delivery note scanning work?",
        a: "Snap or scan a supplier delivery note and the AI reads the items, quantities, batch and expiry details, then adjusts your stock automatically. Every inventory movement is logged, so you can trace stock in, stock out, transfers and adjustments.",
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
    permissions: { title: "Staff permission control", text: "Decide who can view, edit, discount, refund or export." },
    einvoice: { title: "LHDN e-Invoice", text: "e-Invoices submitted to LHDN through MyInvois." },
    hardware: { title: "Multi-hardware connect", text: "Label printers, number callers, X-ray machines and more." },
    drawing: { title: "Hand drawing & e-signature", text: "Draw on charts and capture consent on a tablet." },
    devices: { title: "Works on iPad, phone & PC", text: "Cross-platform: iPhone, Android, Windows and Mac." },
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
    title: "Affordable for every business",
    offer: "New customer offer",
    plan: "Techub Standard Plan",
    from: "from",
    perMonth: "/ month",
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
      "Local support on WhatsApp",
    ],
    customTitle: "Customisation",
    customFrom: "from",
    customText: "Based on your requirements: new features, reports, printouts, integrations or a whole new system.",
    customCta: "Get a quote",
    customMessage: "Hi Techub, I need a customised system quote.",
    customEmail: "Email us",
    customEmailSubject: "Customised system quote",
    offerText: "From RM {price} per month. First {months} months free for new users, including installation and staff training.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions? We have answers",
    // Home page questions. The Technology page and each system page have their own.
    items: [
      {
        q: "What does Techub Software do?",
        a: "Techub Software is a Malaysian software company. We build smart, low-cost systems for businesses: ready appointment systems for clinics, hair salons, beauty centres and spas, and custom systems such as ERP, AI object detection and number plate scanners.",
      },
      {
        q: "How much does it cost?",
        a: "Plans start from RM {price} per month, and new customers get the first {months} months free, including installation and staff training. Customisation starts from RM {custom}, depending on your requirements.",
      },
      {
        q: "How fast is the system?",
        a: "Very fast. Techub uses an indexed NoSQL database on enterprise servers in Malaysia, so detailed reports are generated in under 100 milliseconds and every device updates in real time.",
      },
      {
        q: "What uptime do you guarantee?",
        a: "We guarantee {uptime} system uptime. That is less than 22 minutes of downtime a month on average, so your front desk, queue screens and bookings stay online.",
      },
      {
        q: "Where is my data stored, and is it safe?",
        a: "Your data is kept on enterprise-level servers in Malaysia, such as IPServerOne and Amazon Web Services, and we tell you where it is. All saved data is encrypted, with multi-layer backups across multiple regions.",
      },
      {
        q: "What technology does Techub use?",
        a: "Techub runs in the cloud on Malaysian enterprise servers, with an indexed NoSQL database, AI that reads delivery notes and manages stock, automatic WhatsApp notifications, LHDN e-Invoice, and connections to hardware such as label printers, number calling systems and X-ray machines.",
      },
      {
        q: "Do you support LHDN e-Invoice?",
        a: "Yes. Techub supports LHDN e-Invoice, so invoices can be submitted and validated through MyInvois.",
      },
      {
        q: "Can you build other systems, such as ERP?",
        a: "Yes. We build custom systems such as ERP, AI object detection and number plate scanners, and we customise our systems for other businesses. WhatsApp us at {phone} to discuss your idea.",
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
    text: "From RM {price}/month. Installation and staff training included.",
    whatsappLabel: "WhatsApp · fastest reply",
    emailLabel: "Email us",
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
        title: "Clinic Management System Malaysia | Patient Records, Queue & Medication",
        socialTitle: "Clinic Management System Malaysia | Techub Software",
        description:
          "Clinic management system for Malaysian clinics: patient records and medication tracking, queue number calling, EMR, AI medicine stock, X-ray and printer connection, LHDN e-Invoice and reports in under 100 ms. From RM {price}/month, {months} months free.",
        keywords: [
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
        ],
      },
      category: "Clinic management, EMR and patient queue",
      eyebrow: "Clinic Management System",
      heading: "A smarter *clinic system* for faster, safer care",
      intro: "Patient records, medication tracking, queue, billing and stock. On iPad, phone and PC.",
      heroBadge: "{uptime} uptime",
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
          eyebrow: "Queue number calling",
          title: "Call the next patient in one tap",
          points: ["TV display with voice announcement", "Rooms, pharmacy & payment counters", "English, Malay & Chinese", "A calmer, shorter wait"],
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
          eyebrow: "Permission control",
          title: "The right access for every staff",
          points: ["Doctor, nurse, pharmacy & cashier roles", "Manager approval for discounts", "Branch access control", "Full audit trail"],
        },
      },
      modules: {
        records: "Patient registration & records",
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
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        permissions: "Permission control",
        devices: "Works on iPad, phone & PC",
        realtime: "Real-time updates",
      },
      faqs: [
        {
          q: "Is the Techub clinic system suitable for small clinics?",
          a: "Yes. It is designed for single-doctor clinics up to multi-branch groups. Plans start from RM {price}/month and new clinics get the first {months} months free, including installation and staff training.",
        },
        {
          q: "Can I track patient records and medication?",
          a: "Yes. Each patient has a full record with visits, diagnoses, prescriptions and dispensing history. The medication tracking system shows dosage, frequency, batch and allergy alerts before you prescribe.",
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
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the clinic system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the clinic management system.",
    },

    salon: {
      meta: {
        title: "Salon Appointment System Malaysia | Booking, Staff Profiles, Payroll & POS",
        socialTitle: "Salon Appointment System Malaysia | Techub Software",
        description:
          "Hair salon appointment system for Malaysia: stylist booking calendar, automatic WhatsApp notifications, staff profiles, payroll and commission, POS, inventory tracking and reports in under 100 ms. Works on iPad, phone and PC. From RM {price}/month, {months} months free.",
        keywords: [
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
        ],
      },
      category: "Hair salon booking, staff, payroll and POS",
      eyebrow: "Hair Salon Appointment System",
      heading: "Keep every *stylist* fully booked",
      intro: "Bookings, automatic WhatsApp notifications, staff profiles, payroll and POS. On iPad, phone and PC.",
      heroBadge: "Confirmed on WhatsApp",
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
          eyebrow: "POS & commission",
          title: "Fast checkout. Commission done for you.",
          points: ["Services and retail in one bill", "Commission per stylist", "Cash, card, DuitNow QR & e-wallet", "Packages & member discounts"],
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
          eyebrow: "Staff & permission control",
          title: "The right access for every staff",
          points: ["Owner, manager, stylist & reception roles", "Manager approval for discounts", "Hide customer phone numbers", "Full audit trail"],
        },
      },
      modules: {
        calendar: "Booking calendar by stylist",
        walkin: "Walk-in queue",
        whatsapp: "Automatic WhatsApp notifications",
        profiles: "Staff profiles & own bookings",
        customers: "Customer history & colour formula",
        packages: "Packages & member points",
        pos: "POS & retail sales",
        commission: "Stylist commission",
        payroll: "Payroll calculation",
        ai: "AI stock control",
        inventory: "Inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        printing: "Receipt printing",
        permissions: "Permission control",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the salon appointment system?",
          a: "It starts from RM {price}/month. New salons get the first {months} months free, including installation and staff training.",
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
          q: "Does it calculate payroll and commission?",
          a: "Yes. Commission on services and product sales is calculated from your POS, and monthly payroll adds basic salary and allowances for each staff member.",
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
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the salon system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the salon appointment system.",
    },

    beauty: {
      meta: {
        title: "Beauty Centre Appointment System Malaysia | Booking, Packages & Payroll",
        socialTitle: "Beauty Centre Appointment System Malaysia | Techub Software",
        description:
          "Appointment system for beauty centres in Malaysia: booking calendar, automatic WhatsApp reminders, treatment packages, face charts with photos and e-signature, staff profiles and payroll, POS, inventory tracking and reports in under 100 ms. From RM {price}/month, {months} months free.",
        keywords: [
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
        ],
      },
      category: "Beauty centre booking, packages and treatment records",
      eyebrow: "Beauty Centre Appointment System",
      heading: "The *beauty centre system* that brings customers back",
      intro: "Bookings, packages, face charts, staff payroll and automatic WhatsApp reminders. On iPad, phone and PC.",
      heroBadge: "Package sessions tracked",
      whoFor: ["Beauty centres", "Facial & skincare", "Lash & brow studios", "Nail salons", "Slimming centres", "Aesthetic centres", "Bridal make-up"],
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
      },
      modules: {
        calendar: "Booking calendar",
        whatsapp: "Automatic WhatsApp reminders",
        packages: "Packages & sessions",
        customers: "Customer profiles & skin notes",
        faceChart: "Face chart & e-signature",
        profiles: "Staff profiles & own bookings",
        pos: "POS & retail sales",
        commission: "Staff commission",
        payroll: "Payroll calculation",
        ai: "AI stock control",
        inventory: "Inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        printing: "Receipt printing",
        permissions: "Permission control",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the beauty centre appointment system?",
          a: "It starts from RM {price}/month. New beauty centres get the first {months} months free, including installation and staff training.",
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
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the beauty centre system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the beauty centre appointment system.",
    },

    spa: {
      meta: {
        title: "Spa Appointment System Malaysia | Therapists, Rooms, Packages & Payroll",
        socialTitle: "Spa Appointment System Malaysia | Techub Software",
        description:
          "Spa and massage appointment system for Malaysia: therapist and room scheduling, automatic WhatsApp reminders, packages and memberships, staff profiles and payroll, POS, inventory tracking and reports in under 100 ms. Works on iPad, phone and PC. From RM {price}/month, {months} months free.",
        keywords: [
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
        ],
      },
      category: "Spa and massage booking, rooms and memberships",
      eyebrow: "Spa Appointment System",
      heading: "A calm front desk and *fully booked* therapists",
      intro: "Therapists, rooms, packages, payroll and automatic WhatsApp reminders. On iPad, phone and PC.",
      heroBadge: "Confirmed on WhatsApp",
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
          eyebrow: "Staff & permission control",
          title: "Your team, under control",
          points: ["Owner, manager, therapist & reception roles", "Manager approval for discounts", "Branch access control", "Full audit trail"],
        },
      },
      modules: {
        scheduling: "Therapist & room scheduling",
        whatsapp: "Automatic WhatsApp reminders",
        packages: "Packages & memberships",
        group: "Couple & group bookings",
        treatmentMap: "Treatment map & e-signature",
        profiles: "Staff profiles & own bookings",
        pos: "POS & retail sales",
        commission: "Therapist commission",
        payroll: "Payroll calculation",
        ai: "AI stock control",
        inventory: "Inventory tracking",
        einvoice: "LHDN e-Invoice",
        reports: "Reports in under 100 ms",
        printing: "Receipt printing",
        permissions: "Permission control",
        devices: "Cross-platform: iPad, phone & PC",
      },
      faqs: [
        {
          q: "How much is the spa appointment system?",
          a: "It starts from RM {price}/month. New spas get the first {months} months free, including installation and staff training.",
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
          q: "How do I get a demo?",
          a: "WhatsApp us at {phone} or email {email}. We will show you the spa system live, for free.",
        },
      ],
      demoMessage: "Hi Techub, I'd like a free demo of the spa appointment system.",
    },
  },

  /* ---------- Example screens: picture titles and alt text ---------- */
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
      title: "Staff permission control",
      alt: "Role-based permissions for doctors, nurses, pharmacy and cashiers on an iPad, with an audit trail",
    },
    whatsappClinic: {
      title: "WhatsApp appointment reminder",
      alt: "WhatsApp appointment confirmation and reminder sent automatically to a clinic patient",
    },
    scanClinic: {
      title: "AI delivery note scan",
      alt: "Phone scanning a medicine supplier's delivery note while AI reads each item, batch and expiry and updates clinic stock",
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
      title: "Staff permission control",
      alt: "Role-based permissions for the salon owner, manager, stylists and receptionist on an iPad, with an audit trail",
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
      title: "Staff permission control",
      alt: "Role-based permissions for the spa owner, manager, therapists and receptionist on an iPad, with an audit trail",
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
    permissionsDesktop: {
      title: "Staff permission control on PC",
      alt: "Staff roles and permission control in a web browser on a PC, with an audit trail of discounts and refunds",
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
  },
};

export default en;
export type Dict = typeof en;
