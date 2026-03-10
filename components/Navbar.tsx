"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const PORTFOLIO_ICON = "/portfolio-icon.jpg";

const navLinks = [
	{ href: "#about", key: "about" },
	{ href: "#resume", key: "resume" },
	{ href: "#services", key: "services" },
	{ href: "#skills", key: "skills" },
	{ href: "#portfolio", key: "portfolio" },
	{ href: "#case-study", key: "caseStudy" },
	{ href: "#contact", key: "contact" },
] as const;

export default function Navbar() {
	const { locale, setLocale, t } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [iconError, setIconError] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
					: "bg-transparent"
			}`}>
			<nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
				<a
					href="#"
					className="flex items-center gap-2.5 font-display font-bold text-lg text-primary">
					<span className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/50 shrink-0 bg-surface">
						{!iconError ? (
							<Image
								src={PORTFOLIO_ICON}
								alt=""
								fill
								className="object-cover"
								sizes="32px"
								onError={() => setIconError(true)}
							/>
						) : (
							<span className="absolute inset-0 flex items-center justify-center text-primary/70 text-xs font-bold">
								P
							</span>
						)}
					</span>
					{t.nav.portfolio}
				</a>

				<ul className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="text-sm text-zinc-700 hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
								{t.nav[link.key]}
							</a>
						</li>
					))}
				</ul>

				<div className="hidden md:flex items-center gap-3">
					<div className="flex rounded-lg border border-border bg-surface/50 p-0.5">
						{(["en", "ko"] as const).map((lang) => (
							<button
								key={lang}
								type="button"
								onClick={() => setLocale(lang)}
								className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
									locale === lang
										? "bg-primary text-background"
										: "text-zinc-700 hover:text-foreground"
								}`}
								aria-label={lang === "en" ? "English" : "한국어"}>
								{t.lang[lang]}
							</button>
						))}
					</div>
					<a
						href="#contact"
						className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-background font-medium text-sm hover:bg-primaryDim transition-colors">
						{t.nav.hireMe}
					</a>
				</div>

				<button
					type="button"
					aria-label="Toggle menu"
					className="md:hidden p-2 text-zinc-700 hover:text-foreground"
					onClick={() => setMobileOpen(!mobileOpen)}>
					{mobileOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</nav>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="md:hidden bg-surface border-b border-border overflow-hidden">
						<ul className="px-6 py-4 flex flex-col gap-4">
							{navLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="block text-zinc-700 hover:text-primary transition-colors py-1"
										onClick={(e) => {
											e.preventDefault();
											setMobileOpen(false);
											const id = link.href.replace("#", "");
											const el = document.getElementById(id);
											const scrollToSection = () => {
												if (el) {
													el.scrollIntoView({ behavior: "smooth", block: "start" });
													window.history.replaceState(null, "", link.href);
												} else {
													window.location.href = link.href;
												}
											};
											setTimeout(scrollToSection, 150);
										}}>
										{t.nav[link.key]}
									</a>
								</li>
							))}
							<li className="flex gap-3 items-center pt-2">
								<div className="flex rounded-lg border border-border bg-surface/50 p-0.5">
									{(["en", "ko"] as const).map((lang) => (
										<button
											key={lang}
											type="button"
											onClick={() => setLocale(lang)}
											className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
												locale === lang
													? "bg-primary text-background"
													: "text-zinc-700 hover:text-foreground"
											}`}>
											{t.lang[lang]}
										</button>
									))}
								</div>
								<a
									href="#contact"
									className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-background font-medium text-sm"
									onClick={(e) => {
										e.preventDefault();
										setMobileOpen(false);
										const el = document.getElementById("contact");
										const scrollToSection = () => {
											if (el) {
												el.scrollIntoView({ behavior: "smooth", block: "start" });
												window.history.replaceState(null, "", "#contact");
											} else {
												window.location.href = "#contact";
											}
										};
										setTimeout(scrollToSection, 150);
									}}>
									{t.nav.hireMe}
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
