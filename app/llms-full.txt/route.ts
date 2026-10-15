import { fill, getDict } from "@/content";
import { getLegal } from "@/content/legal";
import { customSystems, services, techIcons } from "@/components/Company";
import { getFeatures, planText } from "@/components/Sections";
import { plain } from "@/components/Text";
import { localeName, locales, lp } from "@/lib/i18n";
import { rm, site, systems, type Plan } from "@/lib/site";

export const dynamic = "force-static";

// Plain-text summary for AI assistants and answer engines (llmstxt.org), from the English text.
export function GET() {
  const t = getDict("en");
  const legal = getLegal("en");
  const list = (items: string[]) => items.map((x) => `- ${x}`).join("\n");
  const product = (k: (typeof systems)[number]["key"]) => {
    const p = t.products[k];
    const sys = systems.find((s) => s.key === k)!;
    return `### ${t.systems[k].name} (${site.url}${sys.path})
${p.meta.description}
For: ${p.whoFor.join(", ")}.
Modules: ${Object.values(p.modules).join(", ")}.
${Object.values(p.spotlights)
  .map((s) => `- ${s.eyebrow}: ${s.points.join("; ")}`)
  .join("\n")}
Questions:
${p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}`;
  };

  const body = `# ${site.name}

> ${site.description}

Website: ${site.url}
WhatsApp: ${site.whatsappDisplay} (https://wa.me/${site.whatsappNumber})
Email: ${site.email}
Country: Malaysia
Company registration: SSM ${site.ssm} (Companies Commission of Malaysia)
Languages: ${locales.map((l) => `${localeName[l]} (${site.url}${lp(l, "/")})`).join(", ")}

## About (${site.url}/about/)
${t.about.intro}
${t.home.hero.badge}. ${t.home.hero.intro}
${Object.values(t.about.values)
  .map((v) => `- ${v.title}: ${v.text}`)
  .join("\n")}

## Highlights
${Object.values(t.home.highlights.items)
  .map((v) => `- ${v.title}: ${v.text}`)
  .join("\n")}

## Services (${site.url}/services/)
${services.map((s) => `- ${t.services.items[s.key].title}: ${t.services.items[s.key].text}`).join("\n")}

## Use cases: ready systems (${site.url}/use-cases/)
${systems.map((s) => product(s.key)).join("\n\n")}

## Custom systems (${site.url}/custom-systems/)
${plain(t.custom.intro)}
${customSystems.map((c) => `- ${t.custom.items[c.key].title}: ${t.custom.items[c.key].text}`).join("\n")}

## Technology (${site.url}/technology/)
${(Object.keys(techIcons) as (keyof typeof techIcons)[]).map((k) => `- ${t.tech.items[k].title}: ${t.tech.items[k].text}`).join("\n")}
${Object.values(t.techPage.spotlights)
  .map((s) => `- ${s.eyebrow}: ${s.points.join("; ")}`)
  .join("\n")}

## Features
${getFeatures("en")
  .map((f) => `- ${f.title}: ${f.text}`)
  .join("\n")}

## Hardware
${list(Object.values(t.hardware.items))}

## Pricing (${site.url}/pricing/)
- ${t.pricing.plan}: from RM ${site.priceFrom} per month.
${site.plans
  .map((p: Plan) => {
    const x = planText("en", p);
    const name = [x.offer, x.name, x.free].filter(Boolean).join(", ") + (p.recommended ? ` (${t.pricing.recommended.toLowerCase()})` : "");
    return `- ${name}: RM ${p.price} per month. ${x.lines.map((l) => l.text).join(". ")}.`;
  })
  .join("\n")}
- ${t.pricing.free}
- Included: ${t.pricing.included.join("; ")}.
- ${t.pricing.liveTitle}: from RM ${site.livePriceFrom} per month. ${t.pricing.liveText}
- Live Selling System includes: ${t.pricing.liveIncluded.join("; ")}.
- ${t.pricing.customTitle}: from RM ${site.customFrom} per work hour. ${t.pricing.customText} ${t.pricing.customPoints.join(". ")}.
- ${t.pricing.customRates}: ${site.plans
  .filter((p: Plan) => p.hourly)
  .map((p: Plan) => `${planText("en", p).name} RM ${p.hourly}`)
  .join(", ")}.
- ${t.pricing.examplesTitle}: ${t.pricing.examples
  .map((x, i) => {
    const h = site.customExamples[i] ?? 0;
    return `${x.type}, ${x.task.toLowerCase()}: ${fill(t.pricing.exampleHours, { n: String(h) }).toLowerCase()}, RM ${rm(h * site.plans[0].hourly)}`;
  })
  .join("; ")}. ${t.pricing.examplesNote}
- ${t.pricing.extrasTitle} (also on ${site.url}/services/):
${(["migration", "email", "website"] as const)
  .map((k) => {
    const x = t.pricing.extras[k];
    const price = { migration: site.migrationHour, email: site.emailYear, website: site.websitePrice }[k];
    const cost = [x.label.toLowerCase(), `RM ${rm(price)}`, x.unit.replace("/ ", "per ")].filter(Boolean).join(" ");
    return `  - ${x.title}: ${cost}. ${x.text} ${x.points.join(". ")}.${x.note ? ` ${x.note}` : ""}`;
  })
  .join("\n")}

## Frequently asked questions (${site.url}/faq/)
${[...t.faq.items, ...t.techPage.faqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## In Bahasa Melayu and Chinese
Every page also exists in Bahasa Melayu (/ms/) and Simplified Chinese (/zh/), with titles and text in that language:
${(["ms", "zh"] as const)
  .map((l) => {
    const d = getDict(l);
    return `### ${localeName[l]} (${site.url}${lp(l, "/")})
${d.home.meta.description}
${systems.map((s) => `- ${d.systems[s.key].name} (${site.url}${lp(l, s.path)}): ${d.products[s.key].meta.description}`).join("\n")}`;
  })
  .join("\n\n")}

## Legal
- ${legal.nav.terms}: ${site.url}/terms/
- ${legal.nav.privacy}: ${site.url}/privacy/ (${legal.privacy.meta.description})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
