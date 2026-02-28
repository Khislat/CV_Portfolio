"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (key: string) => {
    setFailedImages((prev) => new Set(prev).add(key));
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          {t.sections.portfolio}
        </h2>
        <p className="text-primary font-mono text-sm uppercase tracking-widest mb-12">
          {t.sections.portfolioSub}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/project/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-surface card-hover"
              >
                <div className="relative aspect-video bg-surfaceHover">
                  {failedImages.has(project.slug) ? (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm">
                      Rasm qo&apos;shing
                    </div>
                  ) : (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={() => handleImageError(project.slug)}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-zinc-700 mt-0.5 truncate">
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
