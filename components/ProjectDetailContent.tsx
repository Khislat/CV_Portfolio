"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectContentBlock } from "@/data/projects";

function VisitSiteButton({ url, label = "Visit live site" }: { url: string; label?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-background transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,212,170,0.2)] hover:shadow-[0_0_24px_-4px_rgba(0,212,170,0.4)]"
    >
      <span>{label}</span>
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.4 },
};

function BlockRenderer({ block, index }: { block: ProjectContentBlock; index: number }) {
  if (block.type === "text") {
    return (
      <motion.div {...motionProps} className="max-w-2xl mx-auto text-center">
        <p className="text-zinc-800 text-lg md:text-xl leading-relaxed">{block.content}</p>
      </motion.div>
    );
  }

  if (block.type === "images") {
    return (
      <motion.div
        {...motionProps}
        className={`grid gap-4 md:gap-6 ${
          block.urls.length === 1
            ? "max-w-4xl mx-auto"
            : block.urls.length === 2
            ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {block.urls.map((url, j) => (
          <div
            key={j}
            className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${
              block.urls.length === 1 ? "aspect-video" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={url}
              alt=""
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes={
                block.urls.length === 1
                  ? "(max-width: 896px) 100vw, 896px"
                  : block.urls.length === 2
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 1024px) 50vw, 33vw"
              }
            />
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "stats") {
    return (
      <motion.div {...motionProps} className="flex flex-wrap justify-center gap-4 md:gap-8">
        {block.items.map((item, j) => (
          <div
            key={j}
            className="text-center px-6 py-4 rounded-2xl bg-surface border border-border min-w-[120px]"
          >
            <div className="font-display font-bold text-2xl md:text-3xl text-primary">
              {item.value}
            </div>
            <div className="text-xs md:text-sm text-zinc-700 mt-1 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "section_title") {
    return (
      <motion.div {...motionProps} className="text-center">
        <span className="inline-block w-8 h-0.5 bg-primary rounded-full mb-4" />
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
          {block.title}
        </h2>
      </motion.div>
    );
  }

  if (block.type === "challenge_solution") {
    return (
      <motion.div {...motionProps} className="max-w-3xl mx-auto space-y-6">
        <div className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8">
          <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-widest mb-3">
            The challenge
          </h3>
          <p className="text-zinc-700 leading-relaxed">{block.challenge}</p>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8">
          <h3 className="font-display font-semibold text-primary text-sm uppercase tracking-widest mb-3">
            The solution
          </h3>
          <p className="text-zinc-800 leading-relaxed">{block.solution}</p>
        </div>
      </motion.div>
    );
  }

  if (block.type === "tech_stack") {
    return (
      <motion.div {...motionProps} className="max-w-3xl mx-auto space-y-8">
        {block.groups.map((group, gi) => (
          <div key={gi}>
            <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-3">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border text-zinc-800 text-sm hover:border-primary/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "architecture") {
    return (
      <motion.div
        {...motionProps}
        className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
      >
        {block.cards.map((card, j) => (
          <div
            key={j}
            className="rounded-2xl border border-border bg-surface p-5 md:p-6 hover:border-primary/30 transition-colors"
          >
            <h4 className="font-display font-semibold text-foreground mb-2">{card.title}</h4>
            <p className="text-zinc-700 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "problem_solving") {
    return (
      <motion.div {...motionProps} className="space-y-6 max-w-3xl mx-auto">
        {block.items.map((item, j) => (
          <div
            key={j}
            className="rounded-2xl border border-border bg-surface p-5 md:p-6 space-y-3 hover:border-primary/20 transition-colors"
          >
            <p className="text-zinc-700 text-sm">
              <span className="text-primary font-medium">Problem:</span> {item.problem}
            </p>
            <p className="text-zinc-700 text-sm">
              <span className="text-primary font-medium">Solution:</span> {item.solution}
            </p>
            <p className="text-zinc-800 text-sm flex items-start gap-2">
              <span className="text-primary shrink-0 mt-0.5">✓</span>
              <span>{item.result}</span>
            </p>
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "integrations") {
    return (
      <motion.div {...motionProps} className="flex flex-wrap justify-center gap-3">
        {block.items.map((item, j) => (
          <span
            key={j}
            className="px-4 py-2 rounded-xl bg-surface border border-border text-zinc-700 text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </motion.div>
    );
  }

  if (block.type === "achievements") {
    return (
      <motion.div
        {...motionProps}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {block.items.map((item, j) => (
          <div
            key={j}
            className="text-center rounded-2xl bg-primary/10 border border-primary/20 p-5"
          >
            <div className="font-display font-bold text-2xl text-primary">{item.value}</div>
            <div className="text-xs text-zinc-700 mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>
    );
  }

  return null;
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-20 left-0 right-0 z-40 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-primary transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background z-10 pointer-events-none" />
        <div className="relative w-full h-[50vh] min-h-[280px] md:h-[65vh] md:min-h-[360px]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 section-padding pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            {project.title}
          </motion.h1>
          {project.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-lg text-zinc-700 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {project.liveUrl && (
        <div className="section-padding pt-4 pb-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <VisitSiteButton url={project.liveUrl} label="Visit project site" />
          </motion.div>
        </div>
      )}

      <div className="section-padding space-y-20 md:space-y-28 pb-24">
        {project.content.map((block, i) => (
          <BlockRenderer key={i} block={block} index={i} />
        ))}
      </div>

      <section className="section-padding py-16 border-t border-border">
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          {project.liveUrl && (
            <VisitSiteButton url={project.liveUrl} label="Visit project site" />
          )}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primaryDim transition-colors"
          >
            View all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
