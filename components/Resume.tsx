"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Resume() {
  const { t } = useLanguage();
  const timeline = t.resumeTimeline;
  return (
    <section id="resume" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <h2 className="section-title">{t.sections.resume}</h2>
          <p className="section-subtitle">{t.sections.resumeSub}</p>
          <div className="section-accent" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-12">
            {timeline.map((item, i) => (
              <motion.li
                key={`${item.role}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12 md:pl-12"
              >
                <span className="absolute left-0 w-3 h-3 rounded-full bg-primary top-1.5 -translate-x-[5px]" />
                <div className="bg-surface border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {item.role}
                    </h3>
                    <span className="text-sm text-primary font-mono">{item.period}</span>
                  </div>
                  <p className="text-zinc-700 text-sm mb-4">{item.company}</p>
                  <ul className="space-y-2 text-zinc-700 text-sm leading-relaxed">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
