// After `next build`: set <html lang> on the Bahasa Melayu and Chinese pages in out/.
// All pages share one root layout, which is built with lang="en-MY".
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const langs = { ms: "ms-MY", zh: "zh-Hans" };

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

let count = 0;
for (const [dir, lang] of Object.entries(langs)) {
  for await (const file of htmlFiles(join("out", dir))) {
    const html = await readFile(file, "utf8");
    const next = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
    if (next === html && !html.includes(`<html lang="${lang}"`)) throw new Error(`No <html lang> found in ${file}`);
    await writeFile(file, next);
    count++;
  }
}
if (count === 0) throw new Error("No Bahasa Melayu or Chinese pages found in out/");
console.log(`Set <html lang> on ${count} pages.`);
