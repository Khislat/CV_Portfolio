"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section-padding bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          {t.sections.contact}
        </h2>
        <p className="text-zinc-800 mt-4 mb-8 leading-relaxed">
          If you&apos;re looking for a Senior Full-Stack Engineer who can own architecture, delivery, 
          and operations — from multi-tenant ERPs to AI integrations and cloud infrastructure — 
          let&apos;s talk. I&apos;m based in South Korea (E-7) and open to full-time roles and 
          strategic partnerships with teams that care about quality, security, and impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primaryDim transition-all glow"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-zinc-800 hover:border-primary/50 hover:text-primary transition-all"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-zinc-800 hover:border-primary/50 hover:text-primary transition-all"
          >
            View Resume
          </a>
        </div>
        <p className="mt-8 text-sm text-zinc-700">
          Open to opportunities at Naver, Coupang, Toss, and ambitious startups.
        </p>
      </motion.div>
    </section>
  );
}
