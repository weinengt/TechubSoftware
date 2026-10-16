// Run by .github/workflows/indexnow.yml after a push to main: waits until the live sitemap shows the new dates in
// lib/page-dates.json, then sends those pages to IndexNow (Bing, Yandex, Seznam, Naver and others share it).
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";

const host = "techubsoftware.com";
const key = readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.slice(0, -4);
if (!key) throw new Error("No IndexNow key file in public/");

const now = JSON.parse(readFileSync("lib/page-dates.json", "utf8"));
let before = {};
try {
  const ref = /^0+$/.test(process.env.BEFORE ?? "") ? "HEAD~1" : process.env.BEFORE || "HEAD~1";
  before = JSON.parse(execFileSync("git", ["show", `${ref}:lib/page-dates.json`], { encoding: "utf8" }));
} catch {}

const changed = Object.keys(now).filter((path) => before[path]?.date !== now[path].date);
if (changed.length === 0) {
  console.log("No page dates changed.");
  process.exit(0);
}

// Cloudflare builds and deploys after the push; wait for it (up to 15 minutes).
const live = async () => {
  const xml = await (await fetch(`https://${host}/sitemap.xml`, { cache: "no-store" })).text();
  return changed.every((path) => xmlDate(xml, path) === now[path].date);
};
const xmlDate = (xml, path) => xml.split(`<loc>https://${host}${path}</loc>`)[1]?.match(/<lastmod>([^<]*)<\/lastmod>/)?.[1];
for (let i = 0; !(await live()); i++) {
  if (i >= 30) throw new Error("The live sitemap never showed the new dates; is the Cloudflare build still running or failed?");
  await new Promise((r) => setTimeout(r, 30_000));
}

const urlList = changed.map((path) => `https://${host}${path}`);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} pages`);
console.log(urlList.join("\n"));
if (res.status >= 400) process.exit(1);
