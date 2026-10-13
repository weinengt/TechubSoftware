// Builds the left sidebar: <aside class="side" data-shell="clinic|spa" data-active="Patients"></aside>
// A ?v=spa / ?v=clinic query string overrides data-shell.
(() => {
  const NAV = {
    clinic: {
      place: "Demo Clinic · KL",
      items: [["home", "Dashboard"], ["queue", "Queue", 7], ["cal", "Appointments"], ["users", "Patients"], ["steth", "Consultation"],
        ["pill", "Pharmacy"], ["box", "Inventory"], ["card", "Billing"], ["chart", "Reports"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["LW", "Dr. Lim Wei Jie", "Doctor · Room 2"],
    },
    spa: {
      place: "Demo Spa & Salon",
      items: [["home", "Dashboard"], ["cal", "Calendar"], ["users", "Customers"], ["gift", "Packages"], ["card", "POS"],
        ["box", "Inventory"], ["wa", "WhatsApp", 3], ["chart", "Commission"], ["lock", "Staff & Roles"], ["gear", "Settings"]],
      me: ["JL", "Jenny Lau", "Manager · Bangsar"],
    },
  };
  const v = new URLSearchParams(location.search).get("v");
  document.querySelectorAll("aside[data-shell]").forEach((el) => {
    const n = NAV[v || el.dataset.shell];
    const active = (v && el.dataset[`active${v[0].toUpperCase()}${v.slice(1)}`]) || el.dataset.active;
    el.innerHTML = `<div class="brand"><img src="icon.png" alt=""><div>Techub<small>${n.place}</small></div></div>
      <nav class="nav">${n.items.map(([i, t, c]) => `<a class="${t === active ? "on" : ""}"><i data-i="${i}"></i>${t}${c ? `<span class="cnt">${c}</span>` : ""}</a>`).join("")}</nav>
      <div class="me"><span class="av">${n.me[0]}</span><div><b>${n.me[1]}</b><br><span style="color:#8fb3d4">${n.me[2]}</span></div></div>`;
  });
})();
