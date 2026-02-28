"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
	const { t } = useLanguage();
	const [imgError, setImgError] = useState(false);

	return (
		<section id="about" className="section-padding bg-surface/50">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5 }}
				className="grid lg:grid-cols-[1fr,minmax(280px,380px)] gap-12 lg:gap-16 items-center">
				<div>
					<h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
						{t.sections.about}
					</h2>
					<p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
						{t.sections.aboutSub}
					</p>
					<h3 className="font-display font-semibold text-xl text-foreground mb-6">
						{t.aboutHeadline}
					</h3>
					<div className="space-y-5 text-zinc-700 leading-relaxed">
						{t.aboutBody.map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}
					</div>
				</div>

				{/* Right side: your photo — put your image at public/profile.jpg (or .png) */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface shadow-xl">
					{!imgError ? (
						<Image
							src="/profile.jpg"
							alt="Profile"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 320px, 380px"
							onError={() => setImgError(true)}
							priority
						/>
					) : (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-700 p-6 text-center">
							<div className="w-16 h-16 rounded-full border-2 border-dashed border-zinc-600 flex items-center justify-center">
								<svg
									className="w-8 h-8 text-zinc-800"
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
							<p className="text-sm">Rasmingizni qo‘yish uchun</p>
							<p className="text-xs font-mono text-zinc-800">
								public/profile.jpg
							</p>
						</div>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
}
