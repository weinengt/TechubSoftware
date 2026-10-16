// After `next build`: give each page in out/sitemap.xml the date its words or pictures last changed, instead of the
// build time on every page (search engines learn to ignore a <lastmod> that changes on every deploy).
// lib/page-dates.json keeps a fingerprint and date per page. A page whose fingerprint changed (or a new page) gets
// today's date. Commit the updated lib/page-dates.json with your change so the date sticks on later builds.
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const datesFile = "lib/page-dates.json";
const today = new Date().toISOString().slice(0, 10);

/** What a visitor or search engine reads on the page: title, description, visible text and pictures. */
function fingerprint(html) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? html)
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "");
  const images = [...body.matchAll(/<(?:img|source)[^>]*?\s(?:src|srcset|srcSet)="([^"]*)"/g)].map((m) => m[1]).join(" ");
  const text = body
    .replace(/<[^>]+>/g, " ")
    // The free tools fill in today's date as a sample (invoice date and number, pay date): not a change to the page.
    .replace(/\b20\d{2}-?\d{2}-?\d{2}\b|\b\d{1,2} [A-Z][a-z]{2} 20\d{2}\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update([title, description, text, images].join("\n")).digest("hex").slice(0, 16);
}

let saved = {};
try {
  saved = JSON.parse(await readFile(datesFile, "utf8"));
} catch {}

const sitemap = await readFile("out/sitemap.xml", "utf8");
const dates = {};
let changed = 0;
const next = await replaceAsync(sitemap, /<url>([\s\S]*?)<\/url>/g, async (block, inner) => {
  const loc = inner.match(/<loc>([^<]*)<\/loc>/)?.[1];
  if (!loc) throw new Error("A sitemap entry has no <loc>");
  const path = new URL(loc).pathname;
  const hash = fingerprint(await readFile(`out${path}index.html`, "utf8"));
  const keep = saved[path]?.hash === hash;
  if (!keep) changed++;
  dates[path] = { hash, date: keep ? saved[path].date : today };
  if (!block.includes("<lastmod>")) throw new Error(`No <lastmod> for ${loc}`);
  return block.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${dates[path].date}</lastmod>`);
});

await writeFile("out/sitemap.xml", next);
await writeFile(datesFile, JSON.stringify(dates, null, 1) + "\n");
console.log(`Sitemap dates: ${Object.keys(dates).length} pages, ${changed} changed today (${today}).`);

async function replaceAsync(str, re, fn) {
  const parts = [];
  let last = 0;
  for (const m of str.matchAll(re)) {
    parts.push(str.slice(last, m.index), await fn(...m));
    last = m.index + m[0].length;
  }
  return parts.join("") + str.slice(last);
}
