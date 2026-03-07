"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { SkillGroupKey, SkillsSubLabelKey } from "@/lib/translations";

type SubGroup = { key: SkillsSubLabelKey; items: string[] };

const skillGroups: { key: SkillGroupKey; subs: SubGroup[] }[] = [
	{
		key: "coreStack",
		subs: [
			{
				key: "languages",
				items: ["TypeScript", "JavaScript (ES6+)", "Java", "Python", "PHP"],
			},
			{
				key: "backend",
				items: ["Nest.js (Expert)", "Node.js", "Spring Boot", "Express"],
			},
			{
				key: "frontend",
				items: [
					"Next.js 14 (App Router)",
					"React",
					"Redux Toolkit",
					"Tailwind CSS",
				],
			},
		],
	},
	{
		key: "databasesInfra",
		subs: [
			{
				key: "databases",
				items: ["PostgreSQL (Prisma)", "MongoDB (Mongoose)", "MySQL"],
			},
			{
				key: "devOps",
				items: ["Docker", "Nginx", "AWS (EC2/S3)", "Linux (Ubuntu)", "PM2"],
			},
			{
				key: "realtimeApi",
				items: ["Socket.io", "GraphQL", "Axios", "REST (Swagger)"],
			},
		],
	},
	{
		key: "securityEngineering",
		subs: [
			{
				key: "security",
				items: [
					"JWT",
					"Bcrypt",
					"OAuth",
					"Rate Limiting",
					"Firewall configuration",
				],
			},
			{
				key: "efficiency",
				items: ["AI-Assisted Development (Cursor/Copilot)", "CI/CD basics"],
			},
			{
				key: "monitoringObservability",
				items: [
					"Grafana",
					"Health Checks",
					"Performance Logging",
					"Telegram Alerts",
					"Prometheus",
				],
			},
		],
	},
	{
		key: "ecosystemTools",
		subs: [
			{
				key: "tools",
				items: ["Git", "Postman", "Vitest/Cypress (Testing)", "Zsh", "Figma"],
			},
		],
	},
];

export default function Skills() {
	const { t } = useLanguage();
	return (
		<section id="skills" className="section-padding bg-background">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5 }}>
				<div className="section-header">
					<h2 className="section-title">{t.sections.skills}</h2>
					<p className="section-subtitle">{t.sections.skillsSub}</p>
					<div className="section-accent" />
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{skillGroups.map((group, i) => (
						<motion.div
							key={group.key}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
							className="bg-surface border border-border rounded-xl p-5 card-hover">
							<h3 className="font-display font-semibold text-primary mb-4">
								{t.skillsCategories[group.key]}
							</h3>
							<div className="space-y-4">
								{group.subs.map((sub) => (
									<div key={sub.key}>
										<p className="text-zinc-700 text-xs font-medium uppercase tracking-wider mb-2">
											{t.skillsSubLabels[sub.key]}
										</p>
										<ul className="space-y-1.5">
											{sub.items.map((item) => (
												<li
													key={item}
													className="text-zinc-700 text-sm flex items-center gap-2">
													<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
													{item}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
