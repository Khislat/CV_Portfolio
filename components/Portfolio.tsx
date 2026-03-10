"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Portfolio() {
	const { t, locale } = useLanguage();
	const projectTitle = (p: (typeof projects)[0]) => (locale === "ko" && p.titleKo ? p.titleKo : p.title);
	const projectSubtitle = (p: (typeof projects)[0]) => (locale === "ko" && p.subtitleKo ? p.subtitleKo : p.subtitle);
	const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

	const handleImageError = (key: string) => {
		setFailedImages((prev) => new Set(prev).add(key));
	};

	return (
		<section
			id="portfolio"
			data-section="portfolio"
			className="px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-24 lg:py-20 max-w-7xl mx-auto bg-background">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5 }}>
				<div className="section-header">
					<h2 className="section-title">{t.sections.portfolio}</h2>
					<p className="section-subtitle">{t.sections.portfolioSub}</p>
					<div className="section-accent" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
					{projects.map((project, i) => (
						<motion.article
							key={project.slug}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}>
							<Link
								href={`/project/${project.slug}`}
								className="group block rounded-2xl overflow-hidden border border-border bg-surface card-hover">
								<div className="relative aspect-video bg-surfaceHover">
									{failedImages.has(project.slug) ? (
										<div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm">
											Rasm qo&apos;shing
										</div>
									) : (
										<Image
											src={project.coverImage}
											alt={projectTitle(project)}
											fill
											className="object-contain transition-transform duration-300 group-hover:scale-105"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											onError={() => handleImageError(project.slug)}
										/>
									)}
								</div>
								<div className="p-3 sm:p-4">
									<h3 className="font-display font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-2">
										{projectTitle(project)}
									</h3>
									{projectSubtitle(project) && (
										<p className="text-xs sm:text-sm text-zinc-700 mt-0.5 truncate">
											{projectSubtitle(project)}
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
