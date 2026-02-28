"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const testimonials = [
  {
    quote:
      "We needed someone who could own our entire platform — not just features, but architecture, security, and operations. He designed and delivered our multi-tenant ERP from zero, with OCR, monitoring, and clear security practices. The system runs reliably and our teams trust it. I would hire him again without hesitation.",
    author: "Managing Director",
    company: "Medical / Healthcare",
  },
  {
    quote:
      "Rare to find an engineer who thinks in terms of business impact and system reliability, not just code. He built our clinic–supplier platform as a solo lead, brought in automation and real-time monitoring, and always had security and scalability in mind. Exactly the profile we need for our next big projects.",
    author: "Managing Director",
    company: "Clinic / Supplier Organization",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          {t.sections.testimonials}
        </h2>
        <p className="text-primary font-mono text-sm uppercase tracking-widest mb-12">
          {t.sections.testimonialsSub}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6 md:p-8 card-hover"
            >
              <p className="text-zinc-800 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-zinc-700">{item.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
