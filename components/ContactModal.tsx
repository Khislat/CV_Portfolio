"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const contactInfo = {
	avatar: "/portfolio-icon.jpg", // public/contact-avatar.jpg qo‘ying
	fullName: "Olimov Khislatbek (Roy)",
	phone: "+82 10-2145-5662",
	email: "khislatolimov29@gmail.com",
	languages: ["English", "한국어 (Korean)", "Russian", "O'zbek"],
};

type ContactModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
						onClick={onClose}
						aria-hidden
					/>
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="w-full max-w-md pointer-events-auto rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
							role="dialog"
							aria-modal="true"
							aria-labelledby="contact-modal-title"
							onClick={(e) => e.stopPropagation()}>
							{/* Header */}
							<div className="relative px-6 pt-6 pb-4 border-b border-border bg-gradient-to-b from-primary/5 to-transparent flex gap-4 items-center">
								<div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-hover">
									<Image
										src={contactInfo.avatar}
										alt=""
										fill
										className="object-cover"
										sizes="56px"
									/>
								</div>
								<div className="min-w-0 flex-1 pr-10">
									<h2
										id="contact-modal-title"
										className="font-display font-bold text-xl text-foreground">
										Contact me
									</h2>
									<p className="text-sm text-zinc-600 mt-0.5">
										Get in touch — open to opportunities
									</p>
								</div>
								<button
									type="button"
									onClick={onClose}
									className="absolute top-4 right-4 p-2 rounded-xl text-zinc-500 hover:text-foreground hover:bg-surface-hover transition-colors"
									aria-label="Close">
									<svg
										className="w-5 h-5"
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
								</button>
							</div>

							{/* Content */}
							<div className="p-6 space-y-5">
								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											/>
										</svg>
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
											Full Name
										</p>
										<p className="font-semibold text-foreground mt-0.5">
											{contactInfo.fullName}
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
											Phone Number
										</p>
										<a
											href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
											className="font-semibold text-primary hover:underline mt-0.5 block">
											{contactInfo.phone}
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
											Email Address
										</p>
										<a
											href={`mailto:${contactInfo.email}`}
											className="font-semibold text-primary hover:underline mt-0.5 block break-all">
											{contactInfo.email}
										</a>
									</div>
								</div>

								<div className="pt-2 ">
									<p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
										Languages
									</p>
									<div className="flex flex-wrap gap-2  flex align-center justify-between ">
										{contactInfo.languages.map((lang) => (
											<span
												key={lang}
												className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium text-sm border border-primary/20">
												{lang}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Footer CTA */}
							<div className="px-6 pb-6">
								<a
									href={`mailto:${contactInfo.email}`}
									className="block w-full py-3 rounded-xl bg-primary text-background font-semibold text-center hover:bg-primaryDim transition-colors shadow-[0_0_20px_-5px_rgba(0,184,148,0.3)]">
									Send email
								</a>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
