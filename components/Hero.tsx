"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_PHOTO = "/hero-photo.jpg";

export default function Hero() {
	const { t } = useLanguage();
	const [photoError, setPhotoError] = useState(false);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

			<div className="section-padding text-center relative z-10">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
					{t.hero.badge}
				</motion.p>
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
					{t.hero.headline}
					<span className="gradient-text">{t.hero.headlineHighlight}</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-6 text-lg sm:text-xl text-zinc-800 max-w-2xl mx-auto">
					{t.hero.subheadline}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.35 }}
					className="mt-10 flex flex-wrap justify-center gap-4">
					<a
						href="#contact"
						className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primaryDim transition-all glow hover:shadow-primary/20">
						{t.hero.ctaPrimary}
					</a>
					<a
						href="#case-study"
						className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-zinc-800 hover:border-primary/50 hover:text-primary transition-all">
						{t.hero.ctaSecondary}
					</a>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.45 }}
					className="mt-12 flex justify-center">
					<div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_-8px_rgba(0,212,170,0.25)] ring-4 ring-background/80">
						{!photoError ? (
							<Image
								src={HERO_PHOTO}
								alt=""
								fill
								className="object-cover"
								sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
								priority
								onError={() => setPhotoError(true)}
							/>
						) : (
							<div className="absolute inset-0 bg-surface flex items-center justify-center text-primary/50">
								<svg
									className="w-16 h-16"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
						)}
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-700">
					<span className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						NestJS · Next.js · TypeScript
					</span>
					<span className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-accent" />
						PostgreSQL · Docker · AWS
					</span>
					<span className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-emerald-500" />
						Based in South Korea (E-7)
					</span>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2">
				<a
					href="#about"
					className="flex flex-col items-center gap-2 text-zinc-700 hover:text-primary transition-colors">
					<span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
					<svg
						className="w-5 h-5 animate-bounce"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</a>
			</motion.div>
		</section>
	);
}
