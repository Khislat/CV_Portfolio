"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudy() {
  const { t } = useLanguage();
  const sections = t.caseStudySections;
  return (
    <section id="case-study" className="section-padding bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <h2 className="section-title">{t.sections.caseStudy}</h2>
          <p className="section-subtitle">{t.sections.caseStudySub}</p>
          <div className="section-accent" />
        </div>
        <p className="text-zinc-700 text-sm max-w-2xl mb-12">
          {t.caseStudyIntro}
        </p>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6 md:p-8 card-hover"
            >
              <h3 className="font-display font-semibold text-xl text-primary mb-4">
                {section.title}
              </h3>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, j) => (
                    <li key={j} className="text-zinc-700 flex gap-3">
                      <span className="text-primary shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-700 leading-relaxed">{section.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
