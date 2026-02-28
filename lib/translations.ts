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
		};
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
			badge: "Senior Full-Stack Engineer · System Architect",
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
		},
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
				role: "Senior Full-Stack Engineer",
				period: "Current",
				company: "Multi-Tenant Clinic ERP (SaaS) · Solo Technical Lead",
				points: [
					"Architected and delivered a production-grade multi-tenant ERP platform for medical clinics and suppliers (B2B/B2C), designed for scalability, strict tenant isolation, and operational resilience.",
					"Led the entire lifecycle solo — from system architecture and database schema design (50+ tables) to 100+ REST APIs, frontend applications (Next.js 14), and production deployment (Docker, Nginx, VPS).",
					"Implemented tenant-aware architecture (RLS strategy), JWT authentication, and role-based access control (Owner/Admin/Manager/Clerk) ensuring secure data isolation across tenants.",
					"Integrated Google Cloud Vision OCR to automate document processing and reduced manual administrative workflows by ~80%.",
					"Built real-time observability layer: health checks, slow-query detection, database size monitoring, and Telegram-based production alerting for proactive issue handling.",
					"Optimized database performance with composite indexing, connection pooling (pgBouncer), and ACID transaction handling for financial-grade consistency.",
					"Delivered the full production-ready system in 3 months using AI-assisted development workflows, achieving enterprise-level output with lean execution.",
				],
			},
			{
				role: "Full-Stack Developer (Remote)",
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
				role: "Frontend Developer (Remote)",
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
				title: "Enterprise ERP & Full-Stack Systems",
				subtitle: "B2B / B2C · Multi-Tenant · SaaS",
				description:
					"End-to-end architecture and delivery of production-grade multi-tenant platforms for clinics, suppliers, and B2B/B2C ecosystems. From schema design (50+ tables) and 100+ REST/GraphQL APIs to Next.js and React SPAs, with tenant isolation (RLS), JWT, RBAC, and scalable relational/NoSQL data (PostgreSQL, MongoDB, MySQL). Delivered solo or in teams for international and large-scale projects, with clean architecture (MVC, DI, middleware) and secure deployment.",
			},
			{
				title: "AI Implementation & Automation",
				subtitle: "OCR · Workflows · LLM Agents",
				description:
					"Integration of AI into real products: Google Cloud Vision OCR for documents and forms, cutting manual administrative workflows by ~80%. LLM-based agents for workflow automation and support. Pixel-perfect UI/UX from wireframes, i18n (React-i18next) for multilingual platforms, and AI-assisted development for enterprise-level delivery in lean timelines. Focus on reliability, cost, and clear business outcomes.",
			},
			{
				title: "Infrastructure, Observability & Security",
				subtitle: "Nginx · Docker · Monitoring · DevOps",
				description:
					"Production-grade setup: Nginx, Docker, AWS (EC2/S3), Linux VPS, PM2. Health checks, Grafana, Prometheus, performance logging, and Telegram alerts for proactive issue handling. Security-conscious design: JWT, RBAC, least privilege, secrets management, firewall configuration, and checklist-driven hardening. Real-time features (WebSocket/Socket.IO), CI/CD basics, and Monorepo (GitHub/GitLab) workflows.",
			},
		],
		footer: {
			copyright: "Senior Full-Stack Engineer. South Korea (E-7).",
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
			badge: "시니어 풀스택 엔지니어 · 시스템 아키텍트",
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
		},
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
				role: "시니어 풀스택 엔지니어",
				period: "현재",
				company: "멀티 테넌트 Clinic ERP (SaaS) · 단독 기술 리드",
				points: [
					"의료 클리닉 및 공급업체(B2B/B2C)를 위한 프로덕션 수준의 멀티 테넌트 ERP 플랫폼을 설계하고 구축했습니다. 확장성과 엄격한 테넌트 데이터 분리, 높은 운영 안정성을 중심으로 설계되었습니다.",
					"시스템 아키텍처 설계와 50개 이상의 데이터베이스 테이블 구조 설계부터, 100개 이상의 REST API 개발, Next.js 14 기반 프론트엔드 구현, Docker·Nginx·VPS를 활용한 프로덕션 배포까지 전체 라이프사이클을 단독으로 주도했습니다.",
					"RLS 기반의 테넌트 인지 아키텍처와 JWT 인증, 역할 기반 접근 제어(Owner/Admin/Manager/Clerk)를 구현하여 테넌트 간 데이터 완전 분리를 보장했습니다.",
					"Google Cloud Vision OCR을 도입하여 문서 처리 과정을 자동화하고, 행정 업무의 약 80%를 자동화했습니다.",
					"헬스 체크, 슬로우 쿼리 감지, 데이터베이스 용량 모니터링, Telegram 기반 실시간 알림 시스템을 구축하여 프로덕션 환경에서의 선제적 장애 대응 체계를 마련했습니다.",
					"복합 인덱싱, pgBouncer 기반 커넥션 풀링, ACID 트랜잭션 처리를 통해 데이터베이스 성능과 무결성을 최적화했습니다.",
					"AI 기반 개발 워크플로우를 활용하여 전체 시스템을 3개월 만에 프로덕션 수준으로 완성했으며, 소규모 리소스로 엔터프라이즈급 결과를 달성했습니다.",
				],
			},
			{
				role: "풀스택 개발자 (원격)",
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
				role: "Frontend Developer (원격 근무)",
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
				title: "엔터프라이즈 ERP 및 풀스택 시스템",
				subtitle: "B2B / B2C · 멀티테넌트 · SaaS",
				description:
					"클리닉, 공급업체, B2B/B2C 생태계를 위한 프로덕션 수준의 멀티테넌트 플랫폼 설계 및 구축. 50개 이상 테이블 스키마 설계, 100개 이상 REST/GraphQL API, Next.js 및 React SPA 개발. 테넌트 격리(RLS), JWT, RBAC, PostgreSQL·MongoDB·MySQL 기반 확장 가능한 데이터 모델. 국제 및 대규모 프로젝트 단독 또는 팀 수행. 클린 아키텍처(MVC, DI, 미들웨어) 및 안전한 배포.",
			},
			{
				title: "AI 구현 및 자동화",
				subtitle: "OCR · 워크플로우 · LLM 에이전트",
				description:
					"실제 제품에 AI 통합: Google Cloud Vision OCR로 문서·양식 처리, 행정 업무 약 80% 자동화. LLM 기반 에이전트로 워크플로우 자동화 및 지원. 와이어프레임 기반 픽셀 단위 UI/UX, React-i18next 다국어 지원, AI 기반 개발로 단기간 내 엔터프라이즈급 납품. 신뢰성, 비용, 명확한 비즈니스 성과에 초점.",
			},
			{
				title: "인프라, 관측성 및 보안",
				subtitle: "Nginx · Docker · 모니터링 · DevOps",
				description:
					"프로덕션급 구성: Nginx, Docker, AWS(EC2/S3), Linux VPS, PM2. 헬스 체크, Grafana, Prometheus, 성능 로깅, Telegram 알림으로 선제적 장애 대응. JWT, RBAC, 최소 권한, 시크릿 관리, 방화벽 설정, 체크리스트 기반 보안 강화. 실시간 기능(WebSocket/Socket.IO), CI/CD 기초, Monorepo(GitHub/GitLab) 워크플로우.",
			},
		],
		footer: {
			copyright: "시니어 풀스택 엔지니어. 대한민국 (E-7).",
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
		skillsCategories: t.skillsCategories,
		skillsSubLabels: t.skillsSubLabels,
		resumeTimeline: t.resumeTimeline,
		servicesList: t.servicesList,
		footer: t.footer,
		lang: t.lang,
	};
}
