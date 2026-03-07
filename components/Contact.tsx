"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactModal from "./ContactModal";

export default function Contact() {
  const { t, locale } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const cvPdfHref = locale === "ko" ? "/cv-ko.pdf" : "/cv-en.pdf";
  return (
    <section id="contact" className="section-padding bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="section-header">
          <h2 className="section-title">{t.sections.contact}</h2>
          <p className="section-subtitle">{t.sections.contactSub}</p>
          <div className="section-accent" />
        </div>
        <p className="text-zinc-700 mt-6 mb-8 leading-relaxed">
          If you&apos;re looking for a Senior Full-Stack Engineer who can own architecture, delivery, 
          and operations — from multi-tenant ERPs to AI integrations and cloud infrastructure — 
          let&apos;s talk. I&apos;m based in South Korea (E-7) and open to full-time roles and 
          strategic partnerships with teams that care about quality, security, and impact.
        </p>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primaryDim transition-all glow"
          >
            Contact Me
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-zinc-800 hover:border-primary/50 hover:text-primary transition-all"
          >
            LinkedIn
          </a>
          <a
            href={cvPdfHref}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-zinc-800 hover:border-primary/50 hover:text-primary transition-all"
          >
            Download CV (PDF)
          </a>
        </div>
        <p className="mt-8 text-sm text-zinc-700">
          Open to opportunities at Naver, Coupang, Toss, and ambitious startups.
        </p>
      </motion.div>
    </section>
  );
}
