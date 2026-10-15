import Link from "next/link";
import type { ReactNode } from "react";

// The small part of Markdown the blog posts use: "## " and "### " headings, paragraphs, "- " and "1. " lists,
// pipe tables, **bold** and [links](/path/). Each "## " section comes in as it scrolls into view.

type Block =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

/** Joins a paragraph's lines; no space between Chinese characters. */
const join = (lines: string[]) =>
  lines
    .map((l) => l.trim())
    .join(" ")
    .replace(/([　-鿿＀-￯])\s+(?=[　-鿿＀-￯])/g, "$1");

const cells = (row: string) =>
  row
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());

export function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ kind: "p", text: join(para) });
    para = [];
  };
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (!t) { flush(); continue; }
    const h = t.match(/^(#{2,3}) (.*)$/);
    if (h) { flush(); blocks.push({ kind: h[1] === "##" ? "h2" : "h3", text: h[2].trim() }); continue; }
    const li = t.match(/^(?:([-*])|(\d+)[.)]) (.*)$/);
    if (li) {
      flush();
      const kind = li[1] ? "ul" : "ol";
      const last = blocks[blocks.length - 1];
      if (last && last.kind === kind) last.items.push(li[3]);
      else blocks.push({ kind, items: [li[3]] });
      continue;
    }
    if (t.startsWith("|")) {
      flush();
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++].trim());
      i--;
      const [head, , ...body] = rows; // the second row is the |---| line
      blocks.push({ kind: "table", head: cells(head), rows: body.map(cells) });
      continue;
    }
    // A line indented under a list item carries on that item.
    const last = blocks[blocks.length - 1];
    if (!para.length && /^\s+/.test(line) && last && (last.kind === "ul" || last.kind === "ol")) {
      last.items[last.items.length - 1] = join([last.items[last.items.length - 1], t]);
      continue;
    }
    para.push(t);
  }
  flush();
  return blocks;
}

/** **bold** and [text](href): links to our own pages stay in the site, others open in a new tab. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let at = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > at) out.push(text.slice(at, m.index));
    if (m[1] !== undefined) out.push(<strong key={m.index} className="font-semibold text-slate-800">{m[1]}</strong>);
    else if (m[3].startsWith("/"))
      out.push(<Link key={m.index} href={m[3]} className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-500">{m[2]}</Link>);
    else
      out.push(<a key={m.index} href={m[3]} target="_blank" rel="noopener" className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-500">{m[2]}</a>);
    at = m.index + m[0].length;
  }
  if (at < text.length) out.push(text.slice(at));
  return <>{out}</>;
}

function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case "h2":
      return <h2 className="text-2xl font-bold tracking-tight text-slate-900"><Inline text={b.text} /></h2>;
    case "h3":
      return <h3 className="mt-6 text-lg font-semibold text-slate-900"><Inline text={b.text} /></h3>;
    case "p":
      return <p className="mt-4 leading-relaxed text-slate-600"><Inline text={b.text} /></p>;
    case "ul":
    case "ol": {
      const L = b.kind;
      return (
        <L className={`mt-4 space-y-2 pl-5 leading-relaxed text-slate-600 ${L === "ul" ? "list-disc marker:text-brand-500" : "list-decimal marker:font-semibold marker:text-brand-600"}`}>
          {b.items.map((it, i) => (
            <li key={i} className="pl-1"><Inline text={it} /></li>
          ))}
        </L>
      );
    }
    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-900">
              <tr>{b.head.map((c, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold"><Inline text={c} /></th>)}</tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className="px-4 py-3 align-top"><Inline text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/** A post's body: what comes before the first heading, then one section per "## " heading. */
export default function Markdown({ text }: { text: string }) {
  const sections: Block[][] = [[]];
  for (const b of parseBlocks(text)) {
    if (b.kind === "h2") sections.push([]);
    sections[sections.length - 1].push(b);
  }
  return (
    <>
      {sections.map((s, i) =>
        s.length ? (
          <section key={i} className={i ? "mt-12" : ""} data-reveal>
            {s.map((b, j) => <BlockView key={j} b={b} />)}
          </section>
        ) : null,
      )}
    </>
  );
}
