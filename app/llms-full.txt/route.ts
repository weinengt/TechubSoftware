import { allFeatures } from "@/components/Sections";
import { faqs, site, systems } from "@/lib/site";

export const dynamic = "force-static";

// Plain-text summary for AI assistants and answer engines (llmstxt.org).
export function GET() {
  const body = `# ${site.name}

> ${site.description}

Website: ${site.url}
WhatsApp: ${site.whatsappDisplay} (https://wa.me/${site.whatsappNumber})
Email: ${site.email}
Country: Malaysia

## What Techub Software does
${site.name} is a Malaysian company that provides appointment management systems and customises them for each business. Ready systems:
${systems.map((s, i) => `${i + 1}. ${s.name} (${site.url}${s.href}): ${s.blurb}`).join("\n")}
Other appointment-based businesses can have the system customised at a low cost.

## Features
${allFeatures.map((f) => `- ${f.title}: ${f.text}`).join("\n")}

## Pricing
- From RM ${site.priceFrom} per month.
- New users get the first ${site.freeMonths} months free, including installation and staff training.
- Custom features and integrations are available at a low cost.

## Frequently asked questions
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
