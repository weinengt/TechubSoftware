import SiteShell from "@/components/SiteShell";
import { getDict } from "@/content";
import { htmlLang, locales, lp } from "@/lib/i18n";

// One 404 page for every language, so it shows the message in all three.
export default function NotFound() {
  return (
    <SiteShell lang="en">
      <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24 pb-16 text-center">
        <div className="rise">
          <p className="text-gradient text-7xl font-extrabold">404</p>
          <ul className="mt-6 space-y-6">
            {locales.map((l) => {
              const t = getDict(l).notFound;
              return (
                <li key={l} lang={htmlLang[l]}>
                  <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">{t.title}</h1>
                  <p className="mt-1 text-slate-600">{t.text}</p>
                  <a href={lp(l, "/")} className="mt-3 inline-block font-semibold text-brand-600 hover:underline">
                    {t.back}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
