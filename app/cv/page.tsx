"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { SkillGroupKey, SkillsSubLabelKey } from "@/lib/translations";
import { projects } from "@/data/projects";
import Link from "next/link";

type SubGroup = { key: SkillsSubLabelKey; items: string[] };
const skillGroups: { key: SkillGroupKey; subs: SubGroup[] }[] = [
  { key: "coreStack", subs: [{ key: "languages", items: ["TypeScript", "JavaScript", "Java", "Python", "PHP"] }, { key: "backend", items: ["Nest.js", "Node.js", "Spring Boot", "Express"] }, { key: "frontend", items: ["Next.js 14", "React", "Redux", "Tailwind CSS"] }] },
  { key: "databasesInfra", subs: [{ key: "databases", items: ["PostgreSQL", "MongoDB", "MySQL"] }, { key: "devOps", items: ["Docker", "Nginx", "AWS", "Linux", "PM2"] }, { key: "realtimeApi", items: ["Socket.io", "GraphQL", "REST"] }, { key: "monitoringObservability", items: ["Grafana", "Health Checks", "Prometheus", "Telegram Alerts"] }] },
  { key: "securityEngineering", subs: [{ key: "security", items: ["JWT", "OAuth", "RBAC", "Rate Limiting"] }, { key: "efficiency", items: ["AI-Assisted Dev", "CI/CD"] }] },
  { key: "ecosystemTools", subs: [{ key: "tools", items: ["Git", "Postman", "Vitest/Cypress", "Figma"] }] },
];

const MAX_BULLETS = 4;

export default function CVPage() {
  const { t, locale } = useLanguage();
  const cvPdfHref = locale === "ko" ? "/cv-ko.pdf" : "/cv-en.pdf";
  const timeline = t.resumeTimeline;
  const firstPara = t.aboutBody[0] ?? "";
  const summary = firstPara.length > 280 ? firstPara.slice(0, 280) + "…" : firstPara || t.aboutHeadline;

  const handlePrint = () => window.print();

  return (
    <>
      <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-end items-center gap-3 mb-4 print:hidden no-print" data-hide-print>
          <Link href="/" className="text-sm text-zinc-700 hover:text-primary transition-colors">← Back</Link>
          <a href={cvPdfHref} target="_blank" rel="noopener noreferrer" download className="text-sm text-primary hover:underline">Design CV (PDF)</a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Download PDF
          </button>
        </div>

        <article className="cv-page bg-surface border border-border rounded-2xl shadow-xl p-8 md:p-10 print:rounded-none print:shadow-none print:border-0">
          {/* Header */}
          <header className="border-b border-border pb-4 mb-4">
            <h1 className="font-display font-bold text-2xl text-foreground tracking-tight">
              {t.hero.badge}
            </h1>
            <p className="text-sm text-zinc-700 mt-1">
              {t.footer.copyright} · <a href="mailto:your.email@example.com">your.email@example.com</a> · <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </header>

          {/* Summary */}
          <section className="mb-4">
            <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-1.5">Summary</h2>
            <div className="h-0.5 w-10 bg-primary rounded-full mb-2" />
            <p className="text-xs text-zinc-700 leading-relaxed">{summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-1.5">Experience</h2>
            <div className="h-0.5 w-10 bg-primary rounded-full mb-2" />
            <ul className="space-y-3">
              {timeline.map((job, i) => (
                <li key={i}>
                  <div className="flex flex-wrap justify-between gap-2 items-baseline">
                    <span className="font-display font-semibold text-sm text-foreground">{job.role}</span>
                    <span className="text-xs text-primary font-mono">{job.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 mb-1">{job.company}</p>
                  <ul className="text-xs text-zinc-700 leading-snug space-y-0.5 pl-3 border-l-2 border-primary/30">
                    {job.points.slice(0, MAX_BULLETS).map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-1.5">Technical Skills</h2>
            <div className="h-0.5 w-10 bg-primary rounded-full mb-2" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {skillGroups.map((group) => (
                <div key={group.key}>
                  <span className="font-semibold text-foreground">{t.skillsCategories[group.key]}</span>
                  <p className="text-zinc-700 mt-0.5">
                    {group.subs.flatMap((s) => s.items).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-1.5">Selected Projects</h2>
            <div className="h-0.5 w-10 bg-primary rounded-full mb-2" />
            <p className="text-xs text-zinc-700">
              {projects.slice(0, 5).map((p) => p.title).join(" · ")}
            </p>
          </section>
        </article>

        <p className="text-center text-xs text-zinc-500 mt-6 print:hidden no-print">
          Use &quot;Download PDF&quot; or Ctrl+P → Save as PDF for one-page resume.
        </p>
      </div>
    </>
  );
}
