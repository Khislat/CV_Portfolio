"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-padding py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-700 text-sm">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <div className="flex gap-6">
          <a href="#about" className="text-zinc-700 hover:text-primary text-sm transition-colors">
            {t.footer.about}
          </a>
          <a href="#contact" className="text-zinc-700 hover:text-primary text-sm transition-colors">
            {t.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
