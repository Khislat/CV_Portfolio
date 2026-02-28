"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    title: "The Challenge",
    content:
      "Medical clinics and their suppliers needed a single, reliable system: orders, inventory, supplier management, compliance, and reporting — all in a multi-tenant setup where each organization's data stays isolated. Manual processes, spreadsheets, and legacy tools were slow, error-prone, and didn't scale. The ask: design and build this system from scratch, with one lead engineer owning architecture and delivery.",
  },
  {
    title: "Engineering Solution",
    content: [
      "Multi-tenant architecture: shared codebase, tenant-scoped data and auth (JWT + RBAC).",
      "Google Cloud Vision OCR: automated extraction from prescriptions, forms, and documents to cut manual data entry.",
      "Real-time visibility: Grafana dashboards for system health, performance, and business metrics; Telegram bot for critical alerts so issues are acted on quickly.",
      "Security: JWT-based auth, role-based access, and a security checklist (auth, input validation, audit logging, secrets) applied across design and rollout.",
      "Stack: NestJS, Next.js (App Router), TypeScript, PostgreSQL (Prisma), Redis, Docker, Nginx, AWS — built for availability and maintainability.",
    ],
  },
  {
    title: "Business Impact",
    content: [
      "~80% automation of previously manual order and document workflows.",
      "10+ tenant organizations onboarded with isolated, secure environments.",
      "Faster incident response and higher confidence in system health thanks to monitoring and Telegram alerts.",
      "Scalable foundation for adding more clinics and suppliers without re-architecting.",
    ],
  },
];

export default function CaseStudy() {
  const { t } = useLanguage();
  return (
    <section id="case-study" className="section-padding bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          {t.sections.caseStudy}
        </h2>
        <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
          {t.sections.caseStudySub}
        </p>
        <p className="text-zinc-700 text-sm max-w-2xl mb-12">
          Multi-tenant ERP for medical clinics and suppliers — from zero to production as Solo Lead.
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
