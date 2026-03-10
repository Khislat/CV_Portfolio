export type Locale = "en" | "ko";

/** Keys for skills category labels (Core Stack, Databases & Infra, etc.) */
export type SkillGroupKey =
	| "coreStack"
	| "databasesInfra"
	| "securityEngineering"
	| "ecosystemTools";
/** Keys for skills sub-labels (Languages, Backend, Monitoring & Observability, etc.) */
export type SkillsSubLabelKey =
	| "languages"
	| "backend"
	| "frontend"
	| "databases"
	| "devOps"
	| "realtimeApi"
	| "monitoringObservability"
	| "security"
	| "efficiency"
	| "tools";

export const translations: Record<
	Locale,
	{
		aboutHeadline: string;
		aboutBody: string[];
		nav: {
			about: string;
			resume: string;
			services: string;
			skills: string;
			portfolio: string;
			caseStudy: string;
			testimonials: string;
			contact: string;
			hireMe: string;
		};
		hero: {
			badge: string;
			headline: string;
			headlineHighlight: string;
			subheadline: string;
			ctaPrimary: string;
			ctaSecondary: string;
			scroll: string;
		};
		sections: {
			about: string;
			aboutSub: string;
			resume: string;
			resumeSub: string;
			services: string;
			servicesSub: string;
			skills: string;
			skillsSub: string;
			portfolio: string;
			portfolioSub: string;
			caseStudy: string;
			caseStudySub: string;
			testimonials: string;
			testimonialsSub: string;
			contact: string;
			contactSub: string;
			contactIntro: string;
		};
		caseStudyIntro: string;
		caseStudySections: { title: string; content: string | string[] }[];
		skillsCategories: {
			coreStack: string;
			databasesInfra: string;
			securityEngineering: string;
			ecosystemTools: string;
		};
		skillsSubLabels: {
			languages: string;
			backend: string;
			frontend: string;
			databases: string;
			devOps: string;
			realtimeApi: string;
			monitoringObservability: string;
			security: string;
			efficiency: string;
			tools: string;
		};
		resumeTimeline: {
			role: string;
			period: string;
			company: string;
			points: string[];
		}[];
		servicesList: {
			title: string;
			subtitle: string;
			description: string;
		}[];
		footer: {
			copyright: string;
			about: string;
			contact: string;
		};
		lang: {
			en: string;
			ko: string;
		};
	}
> = {
	en: {
		aboutHeadline:
			"Delivering Senior-Level Impact through Business-Driven Engineering and AI Efficiency.",
		aboutBody: [
			"I am a Strong Middle Full-Stack Engineer based in South Korea, holding an E-7 (Professional Worker) visa. My approach to software development is rooted in a deep understanding of the intersection between IT infrastructure and business profitability.",
			"I don't just build features; I solve business bottlenecks. By leveraging AI-assisted development pipelines, I've mastered the art of high-efficiency engineering.",
			"A testament to this is my recent solo-led Multi-tenant Medical ERP project: I architected, developed, and deployed the entire production-ready system in just 3 months—a timeline that typically requires a much larger team.",
			"My focus is on drastically reducing manual input and human error. In my last project, I automated 80% of administrative tasks through AI-powered OCR and smart workflow orchestration.",
			"I take full ownership of the lifecycle—from NestJS backend architecture to Dockerized deployment and Nginx security hardening. I value the precision of Korean business culture and prioritize ROI in every line of code.",
			"I build observable, maintainable, and scalable systems designed for real-world impact. If you need an engineer who thinks like a business owner and executes with modern AI-driven speed, let's connect.",
		],
		nav: {
			about: "About",
			resume: "Resume",
			services: "Services",
			skills: "Skills",
			portfolio: "Portfolio",
			caseStudy: "Case Study",
			testimonials: "Testimonials",
			contact: "Contact",
			hireMe: "Hire Me",
		},
		hero: {
			badge: "Full-Stack Engineer · System Architect",
			headline: "I don't just write code — ",
			headlineHighlight: "I ship systems that scale.",
			subheadline:
				"Problem Solver who turns complex requirements into reliable, high-availability systems. From zero to production — solo or with a team.",
			ctaPrimary: "Let's work together",
			ctaSecondary: "See my work",
			scroll: "Scroll",
		},
		sections: {
			about: "About Me",
			aboutSub: "E-7 Visa · South Korea · High-Availability Systems",
			resume: "Professional Resume",
			resumeSub: "Impact-driven career timeline",
			services: "Services",
			servicesSub: "What I build for businesses",
			skills: "Technical Skills",
			skillsSub: "Engineering-first stack",
			portfolio: "Portfolio",
			portfolioSub: "Selected projects",
			caseStudy: "Case Study",
			caseStudySub: "The ERP Project",
			testimonials: "Social Proof",
			testimonialsSub: "What leaders say",
			contact: "Ready to build systems that scale?",
			contactSub: "Contact",
			contactIntro:
				"If you're looking for a Full-Stack Engineer who can own architecture, delivery, and operations — from multi-tenant ERPs to AI integrations and cloud infrastructure — let's talk. I'm based in South Korea (E-7) and open to full-time roles and strategic partnerships with teams that care about quality, security, and impact.",
		},
		caseStudyIntro:
			"Multi-tenant ERP for medical clinics and suppliers — from zero to production as Solo Lead.",
		caseStudySections: [
			{
				title: "The Challenge",
				content:
					"Medical clinics and their suppliers needed a single, reliable system: orders, inventory, supplier management, compliance, and reporting — all in a multi-tenant setup where each organization's data stays isolated. Manual processes, spreadsheets, and legacy tools were slow, error-prone, and didn't scale. The ask: design and build this system from scratch, with one lead engineer owning architecture and delivery.",
			},
			{
				title: "Engineering Solution",
				content: [
					"Multi-tenant architecture: shared codebase, tenant-scoped data and auth (JWT + RBAC).",
					"Google Cloud Vision OCR: automated extraction from prescriptions, forms, and documents to cut manual data entry.",
					"Real-time visibility: Grafana dashboards for system health, performance, and business metrics; Telegram bot for critical alerts so issues are acted on quickly.",
					"Security: JWT-based auth, role-based access, and a security checklist (auth, input validation, audit logging, secrets) applied across design and rollout.",
					"Stack: NestJS, Next.js (App Router), TypeScript, PostgreSQL (Prisma), Redis, Docker, Nginx, AWS — built for availability and maintainability.",
				],
			},
			{
				title: "Business Impact",
				content: [
					"~80% automation of previously manual order and document workflows.",
					"10+ tenant organizations onboarded with isolated, secure environments.",
					"Faster incident response and higher confidence in system health thanks to monitoring and Telegram alerts.",
					"Scalable foundation for adding more clinics and suppliers without re-architecting.",
				],
			},
		],
		skillsCategories: {
			coreStack: "Core Stack",
			databasesInfra: "Databases & Infrastructure",
			securityEngineering: "Security & Engineering",
			ecosystemTools: "Ecosystem & Tools",
		},
		skillsSubLabels: {
			languages: "Languages",
			backend: "Backend",
			frontend: "Frontend",
			databases: "Databases",
			devOps: "DevOps",
			realtimeApi: "Real-time & API",
			monitoringObservability: "Monitoring & Observability",
			security: "Security",
			efficiency: "Efficiency",
			tools: "Tools",
		},
		resumeTimeline: [
			{
				role: "Full-Stack Engineer",
				period: "Current",
				company: "Multi-Tenant Clinic ERP (SaaS) · Solo Technical Lead",
				points: [
					"Architected and delivered a production-grade multi-tenant ERP platform for medical clinics and suppliers (B2B/B2C), designed for scalability, strict tenant isolation, and operational resilience.",
					"Led the entire lifecycle solo — from system architecture and database schema design (50+ tables) to 100+ REST APIs, frontend applications (Next.js 14), and production deployment (Docker, AWS EC2, Nginx, VPS).",
					"Implemented tenant-aware architecture (RLS strategy), JWT authentication, and role-based access control (Owner/Admin/Manager/Clerk) ensuring secure data isolation across tenants.",
					"Integrated Google Cloud Vision OCR to automate document processing and reduced manual administrative workflows by ~80%.",
					"Built real-time observability layer: health checks, slow-query detection, database size monitoring, and Telegram-based production alerting for proactive issue handling.",
					"Optimized database performance with composite indexing, connection pooling (pgBouncer), and ACID transaction handling for financial-grade consistency.",
					"Delivered the full production-ready system in 3 months using AI-assisted development workflows, achieving enterprise-level output with lean execution.",
				],
			},
			{
				role: "Full-Stack Developer",
				period: "2023 – 2025",
				company: "Exadot LLC — Tashkent, Uzbekistan",
				points: [
					"Contributed to large-scale web and custom software projects as part of a 50+ engineer team delivering 250+ solutions for international clients.",
					"Developed scalable backend services using Node.js, TypeScript, NestJS, Java, and Spring Boot.",
					"Designed and optimized GraphQL APIs and managed relational/non-relational databases (MySQL, MongoDB, JPA/Hibernate).",
					"Implemented secure authentication & authorization with JWT, Spring Security, and session management.",
					"Built real-time features using WebSocket / Socket.IO and automated scheduled tasks.",
					"Applied clean architecture principles (MVC, Dependency Injection, Middleware) for maintainable systems.",
					"Deployed containerized applications using Docker on Linux VPS (AWS EC2) with NGINX configuration.",
					"Collaborated using GitHub/GitLab in a Monorepo-based workflow.",
				],
			},
			{
				role: "Frontend Developer",
				period: "2021 – 2023",
				company: "Colibrisoft IT Company — Tashkent, Uzbekistan",
				points: [
					"Colibrisoft is a technology company specializing in web, mobile, e-commerce, and IoT solutions, with a team of 10–49 professionals.",
					"Developed scalable Single Page Applications (SPA) using React, TypeScript, and EJS.",
					"Translated UI/UX wireframes and design mockups into pixel-perfect, responsive interfaces.",
					"Implemented efficient state management using Redux and React Context API.",
					"Integrated internationalization (i18n) with React-i18next for multilingual platforms.",
					"Improved styling architecture using SCSS/SASS, and performed code refactoring for maintainability.",
					"Optimized application performance and ensured cross-device responsiveness.",
					"Managed project dependencies and package integrity using Yarn, npm, and nvm.",
					"Collaborated closely with UX/UI designers and backend developers to ensure seamless feature delivery.",
				],
			},
		],
		servicesList: [
			{
				title: "Business Platforms & Internal Systems",
				subtitle:
					"B2B / B2C · Multi-Tenant · SaaS · ERP · Operations Automation",
				description:
					"I build systems that help companies manage operations, orders, inventory, and internal workflows more efficiently. These platforms replace manual processes with digital tools, allowing businesses to track products, manage suppliers, control stock, and automate operational tasks. Built using scalable backend architectures with Node.js, NestJS, Java, and modern database systems, supporting real business environments and large datasets. Result: businesses gain better visibility, automation, and operational efficiency.",
			},
			{
				title: "Customer-Facing Web Products",
				subtitle: "Marketplaces · Ordering Systems · Web Platforms",
				description:
					"I develop modern web applications that allow businesses to sell products, interact with customers, and deliver digital services online. These platforms include marketplaces, ordering systems, dashboards, and interactive applications with real-time updates, search, filtering, and responsive user experiences. Built with React, Next.js, and real-time technologies, ensuring smooth performance across devices. Result: businesses get scalable digital products that improve customer experience and increase engagement.",
			},
			{
				title: "Reliable Infrastructure & Production Monitoring",
				subtitle: "AWS · Docker · Security · Monitoring & Observability",
				description:
					"I design and deploy production-ready infrastructure that keeps applications stable, secure, and monitored. Systems are deployed using Docker on AWS EC2 and Linux VPS, with NGINX reverse proxy and PM2 for reliable runtime performance. For observability and proactive issue detection, I implement Grafana and Prometheus monitoring, along with Telegram alert systems for real-time notifications on critical events. Security includes JWT authentication, RBAC access control, and secure environment configuration. Result: stable infrastructure, real-time monitoring, and faster response to operational issues as systems scale.",
			},
		],
		footer: {
			copyright: "Full-Stack Engineer. South Korea (E-7).",
			about: "About",
			contact: "Contact",
		},
		lang: {
			en: "EN",
			ko: "KO",
		},
	},
	ko: {
		aboutHeadline:
			"비즈니스 중심 엔지니어링과 AI 효율성을 통해 시니어 수준의 임팩트를 제공합니다.",
		aboutBody: [
			"저는 대한민국에서 활동 중인 Strong Middle Full-Stack 엔지니어이며, E-7(전문직 취업) 비자를 보유하고 있습니다. 저의 소프트웨어 개발 접근 방식은 IT 인프라와 비즈니스 수익성이 만나는 지점을 깊이 이해하는 데 기반하고 있습니다.",
			"저는 단순히 기능을 개발하지 않습니다. 비즈니스의 병목 현상을 해결합니다. AI 기반 개발 파이프라인을 적극 활용하여 고효율 엔지니어링을 실현해 왔습니다.",
			"최근에는 멀티 테넌트 의료 ERP 시스템을 단독으로 총괄하여 설계, 개발, 배포까지 전 과정을 3개월 만에 완료했습니다. 이는 일반적으로 훨씬 더 큰 팀이 필요한 프로젝트 규모였습니다.",
			"저는 수작업 입력과 인적 오류를 획기적으로 줄이는 데 집중합니다. 최근 프로젝트에서는 AI 기반 OCR과 스마트 워크플로우 오케스트레이션을 통해 행정 업무의 80%를 자동화했습니다. 또한 NestJS 백엔드 아키텍처 설계부터 Docker 기반 배포, Nginx 보안 강화까지 전체 라이프사이클에 대한 책임을 직접 수행합니다.",
			"저는 한국 비즈니스 문화의 정밀함과 속도를 존중하며, 모든 코드에 ROI를 최우선 가치로 둡니다. 단순히 작동하는 시스템이 아닌, 관측 가능하고(Observable), 유지보수가 용이하며, 확장 가능한 시스템을 구축합니다.",
			"비즈니스 오너의 시각으로 사고하고, AI 기반의 현대적인 속도로 실행하는 엔지니어가 필요하시다면 언제든지 연락해 주세요.",
		],
		nav: {
			about: "소개",
			resume: "이력",
			services: "서비스",
			skills: "기술",
			portfolio: "포트폴리오",
			caseStudy: "사례 연구",
			testimonials: "후기",
			contact: "연락",
			hireMe: "채용 문의",
		},
		hero: {
			badge: "풀스택 엔지니어 · 시스템 아키텍트",
			headline: "코드만 작성하지 않습니다 — ",
			headlineHighlight: "확장 가능한 시스템을 만듭니다.",
			subheadline:
				"복잡한 요구사항을 안정적이고 고가용성 시스템으로 바꾸는 문제 해결사. 기획부터 프로덕션까지 — 단독 또는 팀과 함께.",
			ctaPrimary: "함께 일해요",
			ctaSecondary: "프로젝트 보기",
			scroll: "스크롤",
		},
		sections: {
			about: "소개",
			aboutSub: "E-7 비자 · 대한민국 · 고가용성 시스템",
			resume: "경력",
			resumeSub: "성과 중심 경력 타임라인",
			services: "서비스",
			servicesSub: "비즈니스를 위한 구축",
			skills: "기술 스택",
			skillsSub: "엔지니어링 중심",
			portfolio: "포트폴리오",
			portfolioSub: "선택 프로젝트",
			caseStudy: "사례 연구",
			caseStudySub: "ERP 프로젝트",
			testimonials: "후기",
			testimonialsSub: "리더들의 평가",
			contact: "확장 가능한 시스템을 함께 만들까요?",
			contactSub: "연락하기",
			contactIntro:
				"아키텍처, 배포, 운영을 책임질 수 있는 풀스택 엔지니어를 찾고 계시다면 — 멀티테넌트 ERP부터 AI 연동, 클라우드 인프라까지 — 이야기 나눠요. 대한민국(E-7) 거주 중이며, 풀타임 포지션과 품질·보안·임팩트를 중시하는 팀과의 전략적 파트너십에 열려 있습니다.",
		},
		caseStudyIntro:
			"의료 기관 및 공급업체를 위한 멀티테넌트 ERP — 단독 리드로 제로부터 프로덕션까지.",
		caseStudySections: [
			{
				title: "과제",
				content:
					"의료 기관과 공급업체는 주문, 재고, 공급업체 관리, 규정 준수, 리포팅을 하나의 신뢰할 수 있는 시스템으로 통합해야 했으며, 멀티테넌트 환경에서 조직별 데이터가 격리되어야 했습니다. 수작업, 스프레드시트, 레거시 도구는 느리고 오류에 취약하며 확장이 어려웠습니다. 요구사항: 한 명의 리드 엔지니어가 아키텍처와 납품을 책임지고 처음부터 설계·구축.",
			},
			{
				title: "엔지니어링 해결",
				content: [
					"멀티테넌트 아키텍처: 공유 코드베이스, 테넌트 단위 데이터·인증(JWT + RBAC).",
					"Google Cloud Vision OCR: 처방전·양식·문서에서 자동 추출로 수동 입력 감소.",
					"실시간 가시성: Grafana 대시보드(시스템 상태, 성능, 비즈니스 지표), Telegram 봇으로 중요 알림·신속 대응.",
					"보안: JWT 기반 인증, 역할 기반 접근, 보안 체크리스트(인증, 입력 검증, 감사 로그, 시크릿) 설계·배포 전반 적용.",
					"스택: NestJS, Next.js(App Router), TypeScript, PostgreSQL(Prisma), Redis, Docker, Nginx, AWS — 가용성·유지보수성 중심 구축.",
				],
			},
			{
				title: "비즈니스 임팩트",
				content: [
					"기존 수동 주문·문서 워크플로의 약 80% 자동화.",
					"10개 이상 테넌트 조직 온보딩, 격리·보안 환경 제공.",
					"모니터링·Telegram 알림으로 신속한 장애 대응 및 시스템 상태 신뢰도 향상.",
					"재설계 없이 클리닉·공급업체 추가가 가능한 확장 기반 마련.",
				],
			},
		],
		skillsCategories: {
			coreStack: "코어 스택",
			databasesInfra: "데이터베이스 및 인프라",
			securityEngineering: "보안 및 엔지니어링",
			ecosystemTools: "생태계 및 도구",
		},
		skillsSubLabels: {
			languages: "언어",
			backend: "백엔드",
			frontend: "프론트엔드",
			databases: "데이터베이스",
			devOps: "DevOps",
			realtimeApi: "실시간 및 API",
			monitoringObservability: "모니터링 및 관측성",
			security: "보안",
			efficiency: "효율",
			tools: "도구",
		},
		resumeTimeline: [
			{
				role: "풀스택 엔지니어",
				period: "현재",
				company: "멀티 테넌트 Clinic ERP (SaaS) · 단독 기술 리드",
				points: [
					"의료 클리닉 및 공급업체(B2B/B2C)를 위한 프로덕션 수준의 멀티 테넌트 ERP 플랫폼을 설계하고 구축했습니다. 확장성과 엄격한 테넌트 데이터 분리, 높은 운영 안정성을 중심으로 설계되었습니다.",
					"시스템 아키텍처 설계와 50개 이상의 데이터베이스 테이블 구조 설계부터, 100개 이상의 REST API 개발, Next.js 14 기반 프론트엔드 구현, Docker,AWS EC2,Nginx,VPS를 활용한 프로덕션 배포까지 전체 라이프사이클을 단독으로 주도했습니다.",
					"RLS 기반의 테넌트 인지 아키텍처와 JWT 인증, 역할 기반 접근 제어(Owner/Admin/Manager/Clerk)를 구현하여 테넌트 간 데이터 완전 분리를 보장했습니다.",
					"Google Cloud Vision OCR을 도입하여 문서 처리 과정을 자동화하고, 행정 업무의 약 80%를 자동화했습니다.",
					"헬스 체크, 슬로우 쿼리 감지, 데이터베이스 용량 모니터링, Telegram 기반 실시간 알림 시스템을 구축하여 프로덕션 환경에서의 선제적 장애 대응 체계를 마련했습니다.",
					"복합 인덱싱, pgBouncer 기반 커넥션 풀링, ACID 트랜잭션 처리를 통해 데이터베이스 성능과 무결성을 최적화했습니다.",
					"AI 기반 개발 워크플로우를 활용하여 전체 시스템을 3개월 만에 프로덕션 수준으로 완성했으며, 소규모 리소스로 엔터프라이즈급 결과를 달성했습니다.",
				],
			},
			{
				role: "풀스택 개발자",
				period: "2023 – 2025",
				company: "Exadot LLC — 타슈켄트, 우즈베키스탄",
				points: [
					"50명 이상의 엔지니어로 구성된 팀의 일원으로서, 250개 이상의 국내외 웹 및 맞춤형 소프트웨어 프로젝트 개발에 기여했습니다.",
					"Node.js, TypeScript, NestJS, Java, Spring Boot 기반의 확장 가능한 백엔드 서비스 개발.",
					"GraphQL API 설계 및 최적화, MySQL, MongoDB, JPA/Hibernate를 활용한 데이터 모델링 및 관리.",
					"JWT 및 Spring Security 기반 인증·인가 시스템 구현.",
					"WebSocket / Socket.IO를 활용한 실시간 기능 개발 및 스케줄링 자동화 작업 수행.",
					"MVC, Dependency Injection, Middleware 등 클린 아키텍처 원칙 적용.",
					"Docker 기반 컨테이너화 및 AWS EC2 (Linux VPS) 환경 배포, NGINX 설정 및 운영.",
					"GitHub / GitLab 기반 협업 및 Monorepo 구조 관리.",
				],
			},
			{
				role: "Frontend Developer",
				period: "2021 – 2023",
				company: "Colibrisoft IT Company — 타슈켄트, 우즈베키스탄",
				points: [
					"Colibrisoft는 웹 개발, 모바일 애플리케이션, 전자상거래 및 IoT 솔루션을 전문으로 하는 IT 기업으로, 10~49명의 전문가로 구성되어 있습니다.",
					"React, TypeScript, EJS 기반의 현대적인 SPA(Single Page Application) 개발",
					"UI/UX 와이어프레임 및 디자인을 픽셀 단위까지 정확한 반응형 인터페이스로 구현",
					"Redux 및 React Context API를 활용한 상태 관리 시스템 구축",
					"React-i18next를 통한 다국어 지원(국제화) 구현",
					"SCSS/SASS 기반 스타일 구조 개선 및 코드 리팩토링 수행",
					"웹 애플리케이션 성능 최적화 및 반응형 디자인 적용",
					"Yarn, npm, nvm을 활용한 패키지 및 의존성 관리",
					"UX/UI 디자이너 및 백엔드 개발자와 협업하여 기능 통합 수행",
				],
			},
			{
				role: "소프트웨어 엔지니어",
				period: "초기",
				company: "풀스택 기능 개발",
				points: [
					"풀스택 기능을 기획부터 배포까지 담당; TypeScript, 테스트, CI/CD 도입.",
					"보안 및 컴플라이언스(체크리스트 기반 리뷰)에 기여.",
				],
			},
		],
		servicesList: [
			{
				title: "Business Platforms & Internal Systems",
				subtitle:
					"B2B / B2C · Multi-Tenant · SaaS · ERP · Operations Automation",
				description:
					"기업이 운영, 주문, 재고, 내부 워크플로우를 더 효율적으로 관리할 수 있도록 비즈니스 플랫폼과 내부 시스템을 개발합니다.이러한 시스템은 수작업으로 진행되던 업무를 디지털 도구로 전환하여 제품 추적, 공급업체 관리, 재고 관리, 운영 자동화를 가능하게 합니다. Node.js, NestJS, Java 기반의 확장 가능한 백엔드 구조와 현대적인 데이터베이스 시스템을 사용하여 실제 비즈니스 환경과 대규모 데이터를 처리할 수 있는 시스템을 구축합니다. 결과: 기업은 더 높은 운영 가시성, 자동화, 그리고 업무 효율성을 얻을 수 있습니다.",
			},
			{
				title: "Customer-Facing Web Products",
				subtitle: "Marketplaces · Ordering Systems · Web Platforms",
				description:
					"기업이 제품을 판매하고 고객과 상호작용하며 디지털 서비스를 제공할 수 있는 현대적인 웹 애플리케이션을 개발합니다.이러한 플랫폼에는 마켓플레이스, 주문 시스템, 대시보드, 실시간 업데이트, 검색 및 필터 기능을 포함한 인터랙티브 웹 서비스가 포함됩니다.React, Next.js 및 실시간 기술을 활용하여 다양한 디바이스에서 부드럽게 동작하는 웹 애플리케이션을 구축합니다. 결과: 기업은 고객 경험을 개선하고 사용자 참여도를 높일 수 있는 확장 가능한 디지털 제품을 얻을 수 있습니다.",
			},
			{
				title: "Reliable Infrastructure & Production Monitoring",
				subtitle: "AWS · Docker · Security · Monitoring & Observability",
				description:
					"애플리케이션이 안정적이고 안전하며 지속적으로 모니터링되는 운영 환경을 구축합니다.Docker 기반 애플리케이션을 AWS EC2 및 Linux VPS 환경에 배포하고,NGINX 리버스 프록시와 PM2를 사용하여 안정적인 실행 환경을 구성합니다. 또한 Grafana와 Prometheus 기반 모니터링 시스템과 문제 발생 시 즉시 알림을 보내는 Telegram 알림 시스템을 구축합니다. 보안 측면에서는 JWT 인증, RBAC 권한 관리, 안전한 환경 설정을 적용합니다. 결과: 기업은 안정적인 인프라, 실시간 모니터링, 그리고 문제 발생 시 빠른 대응이 가능한 시스템을 갖추게 됩니다.",
			},
		],
		footer: {
			copyright: "풀스택 엔지니어. 대한민국 (E-7).",
			about: "소개",
			contact: "연락",
		},
		lang: {
			en: "EN",
			ko: "KO",
		},
	},
};

export function getT(locale: Locale) {
	const t = translations[locale];
	return {
		aboutHeadline: t.aboutHeadline,
		aboutBody: t.aboutBody,
		nav: t.nav,
		hero: t.hero,
		sections: t.sections,
		caseStudyIntro: t.caseStudyIntro,
		caseStudySections: t.caseStudySections,
		skillsCategories: t.skillsCategories,
		skillsSubLabels: t.skillsSubLabels,
		resumeTimeline: t.resumeTimeline,
		servicesList: t.servicesList,
		footer: t.footer,
		lang: t.lang,
	};
}
