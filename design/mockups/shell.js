// Builds the left sidebar: <aside class="side" data-shell="clinic|salon|beauty|spa|live|trade" data-active="Patients"></aside>
// A ?v=clinic|salon|beauty|spa|live|trade query string overrides data-shell; data-active-salon="POS" etc. overrides the active item.
(() => {
  const NAV = {
    clinic: {
      place: "Demo Clinic · KL",
      items: [["home", "Dashboard"], ["queue", "Queue", 7], ["cal", "Appointments"], ["users", "Patients"], ["steth", "Consultation"],
        ["pill", "Pharmacy"], ["box", "Inventory"], ["card", "Billing"], ["chart", "Reports"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["LW", "Dr. Lim Wei Jie", "Doctor · Room 2"],
    },
    salon: {
      place: "Demo Hair Salon",
      items: [["home", "Dashboard"], ["cal", "Calendar"], ["queue", "Walk-in Queue", 3], ["users", "Customers"], ["gift", "Packages"],
        ["card", "POS"], ["box", "Inventory"], ["wa", "WhatsApp", 2], ["chart", "Commission"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["KL", "Kelly Lim", "Manager · Damansara"],
    },
    beauty: {
      place: "Demo Beauty Centre",
      items: [["home", "Dashboard"], ["cal", "Calendar"], ["users", "Customers"], ["face", "Treatment Notes"], ["gift", "Packages"],
        ["card", "POS"], ["box", "Inventory"], ["wa", "WhatsApp", 4], ["chart", "Commission"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["SN", "Sarah Ng", "Manager · Subang Jaya"],
    },
    spa: {
      place: "Demo Day Spa",
      items: [["home", "Dashboard"], ["cal", "Calendar"], ["bed", "Rooms"], ["users", "Customers"], ["gift", "Packages"],
        ["card", "POS"], ["box", "Inventory"], ["wa", "WhatsApp", 3], ["chart", "Commission"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["JL", "Jenny Lau", "Manager · Bangsar"],
    },
    live: {
      place: "Demo Live Shop",
      items: [["home", "Dashboard"], ["video", "Live Sales"], ["tag", "Products"], ["box", "Orders", 14], ["users", "Visitors"],
        ["card", "Payments"], ["file", "Invoices"], ["chart", "Reports"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["AR", "Aina Rahman", "Owner · Shah Alam"],
    },
    trade: {
      place: "Demo Trading · Puchong",
      items: [["home", "Dashboard"], ["stockin", "Stock In"], ["box", "Inventory"], ["cart", "Sales"], ["truck", "Deliveries", 2],
        ["undo", "Returns"], ["wallet", "Accounting"], ["users", "Customers"], ["chart", "Reports"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["HT", "Henry Tan", "Owner · Puchong"],
    },
  };
  const v = new URLSearchParams(location.search).get("v");
  document.querySelectorAll("aside[data-shell]").forEach((el) => {
    const key = NAV[v] ? v : el.dataset.shell;
    const n = NAV[key];
    const active = el.dataset[`active${key[0].toUpperCase()}${key.slice(1)}`] || el.dataset.active;
    el.innerHTML = `<div class="brand"><img src="icon.png" alt=""><div>Techub<small>${n.place}</small></div></div>
      <nav class="nav">${n.items.map(([i, t, c]) => `<a class="${t === active ? "on" : ""}"><i data-i="${i}"></i>${t}${c ? `<span class="cnt">${c}</span>` : ""}</a>`).join("")}</nav>
      <div class="me"><span class="av">${n.me[0]}</span><div><b>${n.me[1]}</b><br><span style="color:#8fb3d4">${n.me[2]}</span></div></div>`;
  });
})();
