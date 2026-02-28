// Loyiha detali sahifasi uchun ma'lumot. content da matn, rasmlar va rich bloklar aralash.

export type ProjectContentBlock =
	| { type: "text"; content: string }
	| { type: "images"; urls: string[] }
	| { type: "stats"; items: { value: string; label: string }[] }
	| { type: "section_title"; title: string }
	| { type: "challenge_solution"; challenge: string; solution: string }
	| { type: "tech_stack"; groups: { title: string; items: string[] }[] }
	| { type: "architecture"; cards: { title: string; description: string }[] }
	| {
			type: "problem_solving";
			items: { problem: string; solution: string; result: string }[];
	  }
	| { type: "integrations"; items: string[] }
	| { type: "achievements"; items: { value: string; label: string }[] };

export type Project = {
	slug: string;
	title: string;
	subtitle?: string;
	coverImage: string;
	/** Loyiha saytiga yo‘naltiruvchi link (Bowow, Cafeu va boshqalar uchun) */
	liveUrl?: string;
	content: ProjectContentBlock[];
};

export const projects: Project[] = [
	{
		slug: "clinic-erp",
		title: "Clinic ERP System",
		subtitle: "Enterprise multi-tenant SaaS for healthcare clinics & suppliers",
		coverImage: "/projects/jaclit-1.png",
		content: [
			{
				type: "stats",
				items: [
					{ value: "4", label: "Applications" },
					{ value: "20+", label: "Modules" },
					{ value: "50+", label: "DB Tables" },
					{ value: "100+", label: "API Endpoints" },
					{ value: "Real-time", label: "Order & Alerts" },
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Medical clinics and suppliers needed one reliable system: orders, inventory, supplier management, compliance, and reporting — in a multi-tenant setup with strict data isolation. Manual processes and legacy tools didn't scale.",
				solution:
					"Designed and built the full stack from scratch: Turborepo monorepo (Clinic + Supplier backends & frontends), NestJS + Next.js 14, PostgreSQL (Supabase) with Prisma, JWT + RBAC, and production monitoring via Telegram.",
			},
			{
				type: "section_title",
				title: "Tech Stack",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Backend",
						items: [
							"NestJS",
							"TypeScript",
							"Prisma",
							"PostgreSQL",
							"JWT",
							"RBAC",
							"class-validator",
							"Transactions",
						],
					},
					{
						title: "Frontend",
						items: [
							"Next.js 14 (App Router)",
							"React 18",
							"TypeScript",
							"Tailwind CSS",
							"Server Components",
						],
					},
					{
						title: "Infrastructure",
						items: [
							"Docker",
							"Docker Compose",
							"Nginx",
							"VPS",
							"Supabase",
							"Connection pooling",
						],
					},
					{
						title: "Integrations",
						items: [
							"Supabase Auth",
							"Brevo (Email)",
							"Solapi (SMS/Kakao)",
							"Google Cloud Vision (OCR)",
							"Telegram Bot",
							"HIRA API",
							"Data.go.kr",
						],
					},
				],
			},
			{
				type: "section_title",
				title: "Architecture & Design",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Multi-tenancy",
						description:
							"Row-level isolation with tenant_id on every table, JwtTenantGuard, and composite indexes. Scales to thousands of clinics with zero cross-tenant data risk.",
					},
					{
						title: "Clean Architecture",
						description:
							"Controller → Service → Repository → DB. Separation of concerns, testable business logic, and infrastructure-agnostic core.",
					},
					{
						title: "ACID Transactions",
						description:
							"Order creation, inventory updates, and returns wrapped in Prisma transactions. Rollback on any failure; Telegram alerts on production rollbacks.",
					},
					{
						title: "Production Monitoring",
						description:
							"Telegram alerts for DB failures, slow queries, storage thresholds (80%/90%), high-value order failures, and HTTP 5xx. Health check endpoints for Docker and load balancers.",
					},
				],
			},
			{
				type: "section_title",
				title: "Problem Solving",
			},
			{
				type: "problem_solving",
				items: [
					{
						problem: "Multi-tenant data isolation at scale",
						solution:
							"tenant_id on every table, JwtTenantGuard, all queries filtered by tenant. Composite indexes for performance.",
						result:
							"Complete isolation, scalable to thousands of tenants, regulation-ready.",
					},
					{
						problem: "Supabase pgbouncer doesn't support prepared statements",
						solution:
							"Detect pgbouncer in connection string, add pgbouncer=true, disable prepared statements, connection retry logic.",
						result: "Seamless Supabase usage, stable under load.",
					},
					{
						problem: "Order creation across multiple suppliers",
						solution:
							"Order splitting by supplier, each group = separate order with suffix (A, B, C). Single transaction; single webhook with all orders.",
						result: "Accurate multi-supplier orders, no partial state.",
					},
					{
						problem: "Manual certificate data entry",
						solution:
							"Google Cloud Vision OCR → structured parser → pre-filled form with fallback to manual entry.",
						result: "Faster registration, fewer errors, better UX.",
					},
					{
						problem: "Real-time production visibility",
						solution:
							"TelegramNotificationService for DB, storage, API failures, rollbacks. Only in production with feature flag.",
						result: "Immediate alerts, no manual monitoring.",
					},
				],
			},
			{
				type: "section_title",
				title: "Integrations",
			},
			{
				type: "integrations",
				items: [
					"Supabase",
					"Brevo",
					"Solapi",
					"Google Vision",
					"Telegram",
					"HIRA",
					"Data.go.kr",
				],
			},
			{
				type: "section_title",
				title: "Impact",
			},
			{
				type: "achievements",
				items: [
					{ value: "100%", label: "Data isolation per tenant" },
					{ value: "ACID", label: "Financial operations" },
					{ value: "Real-time", label: "Alerts & notifications" },
					{ value: "OCR", label: "Certificate automation" },
				],
			},
			{
				type: "text",
				content:
					"Solo lead from requirements to production. The system is live, serving clinics and suppliers with order management, inventory (batch/FIFO), returns, product catalog, and full RBAC. Built for maintainability and scale.",
			},
		],
	},
	{
		slug: "bowow",
		title: "Bowow",
		subtitle: "Multi-vendor e-commerce platform for pet products",
		coverImage: "/projects/bowow-1.png",
		liveUrl: "http://bowow.uz",
		content: [
			{
				type: "stats",
				items: [
					{ value: "Multi-vendor", label: "Marketplace" },
					{ value: "4", label: "Languages" },
					{ value: "Real-time", label: "Chat & Notifications" },
					{ value: "GraphQL", label: "API + WebSocket" },
					{ value: "Ranking", label: "Members & Products" },
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Pet owners needed one place to find quality food, accessories, grooming care, and veterinary essentials from multiple sellers. Existing solutions lacked real-time vendor–customer communication, multi-language support, and fair visibility for top performers.",
				solution:
					"Built Bowow as a feature-rich multi-vendor e-commerce platform: intelligent search and dynamic filtering, real-time chat, member and product ranking via automated batch servers, secure transactions, and responsive design. Monorepo backend with GraphQL, WebSocket, and role-based access (User/Agent/Admin).",
			},
			{
				type: "section_title",
				title: "Platform Overview",
			},
			{
				type: "text",
				content:
					"Bowow connects various sellers with pet owners in a single marketplace. The platform offers a user-friendly interface, powerful search and filter options, a robust tagging system for product discovery, and secure transactions — so pet lovers can find and purchase everything their furry friends need in one place.",
			},
			{
				type: "images",
				urls: [
					"/projects/bowow-1.png",
					"/projects/bowow-2.png",
					"/projects/bowow-3.png",
				],
			},
			{
				type: "section_title",
				title: "Main Features",
			},
			{
				type: "text",
				content:
					"Role-based authentication, My Page profile management, vendor-only product listings, dynamic filtering, responsive layout, and multilingual support (Korean, English, Russian, Uzbek). Real-time notifications, live chatting, follow/comment/like, dynamic notice/FAQ/terms, and dynamic product brand functionality.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-4.png", "/projects/bowow-5.jpg"],
			},
			{
				type: "section_title",
				title: "Product Detail & UX",
			},
			{
				type: "text",
				content:
					"Comprehensive product detail page with high-resolution images, specifications, pricing, and customer reviews. Interactive image galleries, real-time stock updates, customizable variants, and intuitive UI for adding to cart — all with a responsive, user-friendly interface.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-6.jpg", "/projects/bowow-7.jpg"],
			},
			{
				type: "section_title",
				title: "User Dashboard",
			},
			{
				type: "text",
				content:
					"Dedicated user dashboard: My Favorites for liked products, Recently Visited for quick revisit, My Followers & Followings for social engagement, Articles for community content, Write Article for sharing, My Profile for account details, and secure logout. Designed to enhance shopping and community experience.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-8.jpg"],
			},
			{
				type: "section_title",
				title: "Admin Panel",
			},
			{
				type: "text",
				content:
					"Clean admin interface for product management: sidebar navigation (Users, Products, Community, Customer Service), product list with Member ID, name, price, vendor, category, status. Quick filters (All, Active, Sold, Deleted), color-coded status badges, visual thumbnails, and full controls — activate, deactivate, delete, update. Ensures up-to-date catalog and inventory visibility.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-10.png"],
			},
			{
				type: "section_title",
				title: "Tech Stack",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Frontend",
						items: [
							"TypeScript",
							"Next.js",
							"MUI",
							"CSS",
							"React Router",
							"Redux",
							"Apollo",
							"Socket.IO Client",
							"React Image Magnify",
							"SweetAlert2",
							"Swiper",
							"Toast UI",
						],
					},
					{
						title: "Backend",
						items: [
							"Node.js",
							"NestJS",
							"MongoDB",
							"Mongoose",
							"JWT",
							"Bcrypt",
							"Multer",
							"ShellJS",
							"Socket.IO",
							"GraphQL",
						],
					},
					{
						title: "Deployment & Infra",
						items: [
							"Linux Ubuntu",
							"Docker",
							"Nginx",
							"Firewall",
							"DNS",
							"PM2 Plus",
							"Grafana",
							"VPC / VPS",
						],
					},
				],
			},
			{
				type: "section_title",
				title: "Backend Architecture",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Monorepo",
						description:
							"Main API (core GraphQL + real-time WebSocket), Batch Processing (background jobs, scheduled tasks), and shared libraries for types, utilities, and configuration across services.",
					},
					{
						title: "GraphQL & Real-time",
						description:
							"Flexible querying and real-time updates. MongoDB with Mongoose for high-performance data operations. Unified codebase with shared types and utilities.",
					},
					{
						title: "Security & Roles",
						description:
							"Role-based access control (User / Agent / Admin) with JWT authentication. Industry-standard authorization built for reliability and seamless user experience.",
					},
					{
						title: "Production Ready",
						description:
							"Docker support, CI/CD integration, scalable architecture. Visually appealing, secure, and scalable infrastructure with monitoring via Grafana.",
					},
				],
			},
			{
				type: "achievements",
				items: [
					{ value: "4", label: "Languages" },
					{ value: "Real-time", label: "Chat & ranking" },
					{ value: "Multi-vendor", label: "Marketplace" },
					{ value: "GraphQL", label: "API + WebSocket" },
				],
			},
			{
				type: "text",
				content:
					"Bowow delivers a smooth and engaging shopping experience for pet owners worldwide, with secure transactions, responsive design, and scalable infrastructure — built for quality, convenience, and community.",
			},
		],
	},
	{
		slug: "cafeu",
		title: "Cafeu.uz",
		subtitle: "Modern online food ordering and delivery platform",
		coverImage: "/projects/cafeu-1.png",
		liveUrl: "https://cafeu.uz",
		content: [
			{
				type: "stats",
				items: [
					{ value: "Online", label: "Ordering" },
					{ value: "Responsive", label: "Desktop & Mobile" },
					{ value: "Blog", label: "News & Recipes" },
					{ value: "Secure", label: "JWT Auth" },
					{ value: "Fast", label: "Checkout" },
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Cafeu restaurant needed a modern way for customers to browse the menu, customize orders, and get meals delivered quickly. The experience had to be clean, responsive, and smooth — both online and offline.",
				solution:
					"Built Cafeu.uz as a full-stack food ordering platform: secure sign-up and login, complete menu with sorting and filtering, search, cart, and streamlined checkout. Developed desktop and mobile versions with optimized UI and touch interactions. Added a dynamic News & Blog section for engagement. Deployed with Docker, Nginx, PM2, and Grafana on a secure, scalable VPS.",
			},
			{
				type: "section_title",
				title: "Platform Overview",
			},
			{
				type: "text",
				content:
					"Cafeu.uz allows customers to browse the restaurant menu, customize their orders, and get meals delivered quickly and conveniently. With a clean design, responsive layout, and smooth ordering process, it enhances the dining experience both online and offline.",
			},
			{
				type: "images",
				urls: [
					"/projects/cafeu-1.png",
					"/projects/cafeu-2.jpg",
					"/projects/cafeu-3.jpg",
				],
			},
			{
				type: "section_title",
				title: "Ordering Experience",
			},
			{
				type: "text",
				content:
					"Smooth and intuitive UX: secure sign-up and login, complete menu exploration, easy add-to-cart. Advanced sorting and filtering plus search for instant results. Streamlined checkout ensures fast, hassle-free order placement — so customers can enjoy their favorite meals from home.",
			},
			{
				type: "images",
				urls: ["/projects/cafeu-4.jpg", "/projects/cafeu-5.jpg"],
			},
			{
				type: "section_title",
				title: "Desktop & Mobile",
			},
			{
				type: "text",
				content:
					"Both desktop and mobile versions were developed for a seamless, responsive experience. Modern, user-friendly interface with clear navigation, fast load times, and an engaging layout. On mobile: UI optimized for smaller screens, intuitive touch interactions, and a quick, effortless ordering flow for users on the go. Focus on usability, visual appeal, and performance.",
			},
			{
				type: "images",
				urls: ["/projects/cafeu-6.jpg", "/projects/cafeu-7.jpg"],
			},
			{
				type: "section_title",
				title: "News & Blog",
			},
			{
				type: "text",
				content:
					"Dynamic Latest News & Blog page to keep users engaged with fresh content. Customers can read the latest news, discover culinary tips, and explore recipes within the platform. Responsive card-based layout with post images, titles, short descriptions, publication dates, and Read More links. Visually appealing and easy to navigate on desktop, tablet, and mobile — with fast loading and smooth scrolling. Builds trust and encourages repeat visits.",
			},
			{
				type: "images",
				urls: ["/projects/cafeu-8.jpg", "/projects/cafeu-9.jpg"],
			},
			{
				type: "section_title",
				title: "Key Features",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Design & UX",
						description:
							"Clean, modern card design with high-quality imagery. Latest posts in chronological order. Dedicated Read More links for full articles. Fully responsive across devices.",
					},
					{
						title: "Performance",
						description:
							"Optimized for fast loading and smooth scrolling. Enhances overall experience with valuable non-transactional content.",
					},
				],
			},
			{
				type: "images",
				urls: ["/projects/cafeu-10.jpg"],
			},
			{
				type: "section_title",
				title: "Tech Stack",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Frontend",
						items: [
							"TypeScript",
							"MUI",
							"CSS",
							"React Router DOM",
							"Redux",
							"Axios",
							"React Image Magnify",
							"SweetAlert2",
							"Swiper",
							"Toast UI",
							"EmailJS",
						],
					},
					{
						title: "Backend",
						items: [
							"Node.js",
							"MongoDB",
							"Mongoose",
							"JWT",
							"Bcrypt.js",
							"Multer",
							"ShellJS",
							"Socket.io",
						],
					},
					{
						title: "Deployment & Infra",
						items: [
							"Linux",
							"Docker",
							"Nginx",
							"Firewall",
							"DNS",
							"PM2",
							"Grafana",
							"VPC",
							"VPS",
						],
					},
				],
			},
			{
				type: "section_title",
				title: "Architecture & Design",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "ER & Flow",
						description:
							"Integrated Entity-Relationship modeling and flowchart design for a clear, efficient system architecture.",
					},
					{
						title: "UI & Responsiveness",
						description:
							"Modern, responsive interfaces with Material UI and Bootstrap for a seamless experience across devices.",
					},
					{
						title: "Security",
						description:
							"Secure authentication with JWT and Bcrypt.js for robust user data protection.",
					},
					{
						title: "Real-time",
						description:
							"Optimized real-time features with Socket.io for instant and efficient data updates.",
					},
				],
			},
			{
				type: "achievements",
				items: [
					{ value: "Full-stack", label: "Ordering platform" },
					{ value: "Responsive", label: "Desktop & mobile" },
					{ value: "Blog", label: "News & recipes" },
					{ value: "Secure", label: "JWT + VPS" },
				],
			},
			{
				type: "text",
				content:
					"Cafeu.uz delivers a high-performance, secure, and scalable food ordering experience — designed for optimal speed, strong security, and effortless scalability in production.",
			},
		],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
	return projects.map((p) => p.slug);
}
