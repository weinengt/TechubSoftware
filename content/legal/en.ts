// Terms of Use and Privacy Policy in English. ms.ts and zh.ts in this folder have the same shape.
//
// Placeholders work as in content/en.ts: {name} {ssm} {price} {months} {custom} {uptime} {phone} {email}.
// Each section's body is a list of blocks: a string is a paragraph, an array of strings is a bullet list.
// The Privacy Policy is written as the notice required by Malaysia's Personal Data Protection Act 2010
// (as amended in 2024), which must be offered in Bahasa Melayu and English.

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  sections: LegalSection[];
};
export type Legal = {
  nav: { terms: string; privacy: string };
  updatedLabel: string;
  updated: string;
  /** Shown at the top of translated pages; empty in English. */
  translationNote: string;
  contactTitle: string;
  contactText: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  emailSubject: string;
  terms: LegalDoc;
  privacy: LegalDoc;
};

const legal: Legal = {
  nav: { terms: "Terms of Use", privacy: "Privacy Policy" },
  updatedLabel: "Last updated",
  updated: "14 October 2026",
  translationNote: "",
  contactTitle: "Questions about this page?",
  contactText: "Talk to us on WhatsApp or send us an email. We usually reply within one working day.",
  whatsapp: "WhatsApp us",
  whatsappMessage: "Hi Techub, I have a question about your terms or privacy policy.",
  email: "Email us",
  emailSubject: "Question about Techub terms or privacy",

  terms: {
    meta: {
      title: "Terms of Use",
      description:
        "The terms for using the {name} website, demos and offers: prices, the {months} months free offer, service levels, third-party services, intellectual property and Malaysia law.",
    },
    title: "Terms of Use",
    intro:
      "These terms apply when you use the {name} website, ask us for a demo or take up an offer shown here. By using this website, you agree to them. If you subscribe to a Techub system, your quotation and service agreement also apply, and where they differ from these terms, they take priority.",
    sections: [
      {
        title: "About us",
        body: [
          "{name} (\"Techub\", \"we\", \"us\") is a software company based in Malaysia, registered with the Companies Commission of Malaysia (SSM) under registration number {ssm}. We provide appointment systems for clinics, hair salons, beauty centres and spas, and build custom systems for businesses in Malaysia.",
          "You can reach us on WhatsApp at {phone} or by email at {email}.",
        ],
      },
      {
        title: "Using this website",
        body: [
          "You may browse this website, share links to it and contact us through it. Please do not:",
          [
            "use it for anything unlawful or misleading, or pretend to be someone else",
            "try to break into, overload or disrupt the website or our systems",
            "copy large parts of it, scrape it or reuse it for commercial purposes without our written permission",
            "upload or send viruses or other harmful code",
          ],
        ],
      },
      {
        title: "Information on this website",
        body: [
          "We keep the information on this website accurate and up to date as best we can, but it is general information and may change without notice.",
          "The screens shown are examples with sample data (such as Demo Clinic and made-up customers). The system you use may look different, and some features depend on your plan, setup and hardware.",
        ],
      },
      {
        title: "Prices and offers",
        body: [
          [
            "Prices are in Ringgit Malaysia (RM). \"From RM {price}/month\" is our starting price; the price for your business is in your quotation and depends on your plan, users, branches and options.",
            "Customisation is charged by the work hour, from RM {custom} an hour depending on your plan, and quoted based on your requirements before work starts.",
            "The \"first {months} months free\" offer is for new customers and includes installation and staff training, on the terms in your quotation.",
            "Hardware, customisation and third-party charges (such as payment terminal or messaging fees) are not included unless your quotation says so.",
            "Taxes such as SST are added where they apply.",
            "We may change or end an offer at any time. This does not affect a quotation you have already accepted.",
          ],
        ],
      },
      {
        title: "Demos",
        body: ["Demos are free and come with no obligation to buy."],
      },
      {
        title: "Service levels and support",
        body: [
          "Our {uptime} uptime guarantee and our support commitments for subscribed customers are set out in the service agreement, including how uptime is measured, planned maintenance and what happens if we fall short.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "Some features work with services run by others, such as WhatsApp, LHDN MyInvois, payment providers and hardware makers. Their own terms apply to those services, and we are not responsible for their availability or changes.",
          "When you use e-Invoice features, you remain responsible for the details on your invoices and for meeting your LHDN e-Invoice obligations. Techub gives you the tools to issue and submit them.",
        ],
      },
      {
        title: "Your data",
        body: [
          "The data your business puts into a Techub system belongs to your business. We look after it as described in our Privacy Policy and your service agreement.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "This website, the Techub name and logo, our software, designs and example screens belong to {name} or the people who license them to us. You may view and share them for your own information, but you may not copy, change or use them commercially without our written permission.",
        ],
      },
      {
        title: "Links to other websites",
        body: ["Links to other websites are for your convenience. We do not control those websites and are not responsible for their content."],
      },
      {
        title: "Our responsibility",
        body: [
          "This website is provided as it is. As far as Malaysia law allows, we are not liable for any indirect or consequential loss from using this website or relying on its information. Nothing in these terms limits any responsibility that cannot be limited by law.",
        ],
      },
      {
        title: "Changes to these terms",
        body: [
          "We may update these terms from time to time. The date at the top of this page shows the latest version, and using the website after a change means you accept the updated terms.",
        ],
      },
      {
        title: "Malaysia law",
        body: ["These terms are governed by the laws of Malaysia, and the courts of Malaysia have jurisdiction over any dispute about them."],
      },
      {
        title: "Language",
        body: ["These terms are available in English, Bahasa Melayu and Chinese. If the versions differ, the English version applies."],
      },
    ],
  },

  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "How {name} collects, uses and protects personal data under Malaysia's Personal Data Protection Act 2010 (PDPA): what we collect, why, who we share it with, where it is stored and your rights.",
    },
    title: "Privacy Policy",
    intro:
      "This policy explains how {name} collects, uses and protects personal data, in line with Malaysia's Personal Data Protection Act 2010 (PDPA). It covers this website, the enquiries you send us and the Techub systems we provide to businesses.",
    sections: [
      {
        title: "Who we are",
        body: [
          "{name} (\"Techub\", \"we\", \"us\") is a software company based in Malaysia, registered with the Companies Commission of Malaysia (SSM) under registration number {ssm}. For the personal data described in this policy we are the data controller, except for data that our clients store in their own Techub systems (see \"Data in your Techub system\" below).",
          "Contact us about your personal data on WhatsApp at {phone} or by email at {email}.",
        ],
      },
      {
        title: "Personal data we collect",
        body: [
          [
            "Contact details you give us: name, phone or WhatsApp number, email address, business name and role.",
            "Your enquiries and messages, including what you tell us about your business needs.",
            "Customer account details: your business's billing and contact details, the users and staff accounts you ask us to set up, and payment records.",
            "Support and security records: support conversations and system logs such as login times, device and browser type, and IP address.",
          ],
          "This website does not use advertising or analytics cookies. Our hosting provider processes technical data such as your IP address to deliver and protect the website, and the chat bubble uses your browser's session storage to remember that you closed it.",
        ],
      },
      {
        title: "Where it comes from",
        body: [
          "We get personal data directly from you (on WhatsApp, by email or phone, during a demo or setup), from your employer or business when it adds you as a user of its Techub system, and automatically when you use this website or our systems.",
        ],
      },
      {
        title: "Why we use it",
        body: [
          [
            "To answer your enquiries and arrange demos.",
            "To set up, run, maintain and support your Techub system, including installation and training.",
            "To bill you, collect payments and keep accounting records.",
            "To send service messages such as maintenance notices, security alerts and changes to our terms.",
            "To tell you about our products and offers, if you agree. You can say no at any time.",
            "To keep our website and systems secure, improve them and prevent fraud or misuse.",
            "To meet our legal duties, such as tax, LHDN e-Invoice and record keeping.",
          ],
        ],
      },
      {
        title: "Do you have to give us your data?",
        body: [
          "Giving us personal data is voluntary. If you do not give us the data we need, such as a contact number or billing details, we may not be able to answer your enquiry, set up your account or provide the service.",
        ],
      },
      {
        title: "Data in your Techub system",
        body: [
          "Clinics, salons, beauty centres, spas and other businesses use Techub to store personal data about their own customers, patients and staff, such as appointments, contact details, treatment or medical records and payroll. For that data, the business is the data controller. Techub processes it only on the business's instructions to provide the service, keeps it confidential, and never sells it or uses it for our own marketing.",
          "Medical and health records are sensitive personal data under the PDPA. The clinic or business is responsible for getting its customers' or patients' consent; we protect the data with encryption and access controls.",
          "If you are a customer or patient of a business that uses Techub, please contact that business about your personal data. We will help them answer your request.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          [
            "Service providers who help us run Techub, under contract: hosting and data centre providers in Malaysia (such as IPServerOne and Amazon Web Services), messaging providers such as WhatsApp, and email, payment and accounting services.",
            "LHDN through MyInvois, when you use the e-Invoice features.",
            "Our professional advisers, such as auditors and lawyers, who must keep it confidential.",
            "Government authorities, regulators or courts, when the law requires it.",
            "A buyer or successor if our business is reorganised, merged or sold, who must protect it in the same way.",
          ],
          "We do not sell personal data.",
        ],
      },
      {
        title: "Where it is stored",
        body: [
          "Personal data in Techub systems is stored on servers in Malaysia. Some service providers, such as WhatsApp and our email provider, may process data outside Malaysia to deliver messages and email. We only transfer personal data out of Malaysia as the PDPA allows, for example where it is needed to provide the service you asked for or where the destination protects it adequately.",
        ],
      },
      {
        title: "How we protect it",
        body: [
          "All stored data is encrypted and sent over encrypted connections. We keep multi-layer backups across multiple regions, use role-based access so each person only sees what they need, keep audit logs, and limit our own team's access to what is needed to support you.",
          "If a personal data breach happens, we will notify the Personal Data Protection Commissioner, and the people affected where required, as the PDPA requires.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "We keep personal data only as long as we need it for the purposes above or as the law requires. For example, tax and accounting records are generally kept for 7 years.",
          "When a client stops using Techub, we return or delete the data in their system as agreed in their service agreement. Copies in backups are then removed on the normal backup cycle.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Under the PDPA, you can:",
          [
            "ask for a copy of the personal data we hold about you",
            "ask us to correct personal data that is wrong, incomplete, misleading or out of date",
            "ask us to send your personal data to another organisation, where this is technically possible",
            "withdraw your consent or limit how we use your data, for example to stop marketing messages",
          ],
          "Send your request on WhatsApp to {phone} or by email to {email}. We may need to confirm who you are first, and we will reply within the time the PDPA allows (21 days for access and correction requests).",
          "If you are not satisfied with our answer, you can complain to the Personal Data Protection Commissioner of Malaysia (Jabatan Perlindungan Data Peribadi).",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "We may update this policy from time to time. The date at the top of this page shows the latest version, and we will let our clients know about important changes.",
        ],
      },
      {
        title: "Language",
        body: ["This policy is available in English, Bahasa Melayu and Chinese. If the versions differ, the English version applies."],
      },
    ],
  },
};

export default legal;
