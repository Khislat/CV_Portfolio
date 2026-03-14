// Loyiha detali sahifasi uchun ma'lumot. content da matn, rasmlar va rich bloklar aralash.

export type ProjectContentBlock =
	| { type: "text"; content: string; contentKo?: string }
	| { type: "intro"; en: string; ko: string }
	| { type: "images"; urls: string[] }
	| { type: "images_desktop_mobile"; desktop: string; mobile: [string, string] }
	| {
			type: "stats";
			items: { value: string; label: string; labelKo?: string }[];
	  }
	| { type: "section_title"; title: string; titleKo?: string }
	| {
			type: "challenge_solution";
			challenge: string;
			solution: string;
			challengeKo?: string;
			solutionKo?: string;
	  }
	| {
			type: "tech_stack";
			groups: { title: string; titleKo?: string; items: string[] }[];
	  }
	| {
			type: "architecture";
			cards: {
				title: string;
				description: string;
				titleKo?: string;
				descriptionKo?: string;
			}[];
	  }
	| {
			type: "problem_solving";
			items: {
				problem: string;
				solution: string;
				result: string;
				problemKo?: string;
				solutionKo?: string;
				resultKo?: string;
			}[];
	  }
	| { type: "integrations"; items: string[] }
	| {
			type: "achievements";
			items: {
				value: string;
				label: string;
				labelKo?: string;
			}[];
	  };

export type Project = {
	slug: string;
	title: string;
	titleKo?: string;
	subtitle?: string;
	subtitleKo?: string;
	coverImage: string;
	/** Loyiha saytiga yo‘naltiruvchi link (Bowow, Cafeu va boshqalar uchun) */
	liveUrl?: string;
	content: ProjectContentBlock[];
};

export const projects: Project[] = [
	{
		slug: "clinic-erp",
		title: "Medical Clinic ERP System",
		titleKo: "멀티테넌트 의료 클리닉 ERP 시스템",
		subtitle: "Enterprise multi-tenant SaaS for healthcare clinics & suppliers · Live in production",
		subtitleKo: "의료 기관 및 공급업체를 위한 엔터프라이즈 멀티테넌트 SaaS · 프로덕션 운영 중",
		coverImage: "/projects/jaclit-2.png",
		content: [
			{
				type: "intro",
				en: "This Medical Clinic ERP System is a digital inventory management platform designed for healthcare institutions. The project focuses on replacing manual stock tracking with a structured digital system that allows clinics to monitor material movement accurately.\n\nIn this project, I contributed as a developer responsible for implementing backend logic, operational workflows, and inventory calculation mechanisms.\n\nHealthcare logistics often faces discrepancies between the quantity of products ordered and the quantity actually delivered. To address this, the system was designed so that if there is a difference between the ordered and received quantities, the system records the discrepancy without interrupting the workflow. This approach makes the system more resilient to real-world operational conditions while maintaining consistent and traceable data.\n\nThe platform architecture is structured into three main layers: Decision layer — dashboards and operational visibility; Operational layer — daily inventory inflow and outflow processes; Data layer — storage of inventory history and structured records.\n\nThe interface follows a safety-focused approach suitable for medical environments. Role-based access control, mandatory input fields, and visual risk indicators help minimize human errors during inventory operations.\n\nAs a result, the system helped transform clinic inventory management from a manual, person-dependent process into a digital, traceable, and reliable operational system. The platform also creates a foundation for future capabilities such as AI-driven procurement prediction, OCR document scanning, and B2B supply systems.",
				ko: "이 프로젝트는 의료 기관을 위한 디지털 재고 관리 플랫폼입니다. 이 프로젝트는 수작업으로 이루어지던 재고 관리 방식을 구조화된 디지털 시스템으로 전환하여 의료 기관이 자재 흐름을 정확하게 추적할 수 있도록 하는 것을 목표로 합니다.\n\n이 프로젝트에서 저는 개발자로서 백엔드 로직 구현, 운영 워크플로우 설계, 재고 계산 로직 개발에 참여했습니다.\n\n의료 물류 환경에서는 주문된 수량과 실제로 전달된 수량 사이에 차이가 발생하는 경우가 자주 있습니다. 이를 해결하기 위해 시스템은 주문 수량과 실제 수령 수량 사이에 차이가 발생하더라도 해당 차이를 기록하고 전체 프로세스를 중단하지 않도록 설계되었습니다. 이 접근 방식은 실제 운영 환경에서도 시스템이 안정적으로 작동할 수 있도록 하면서 데이터의 일관성과 추적 가능성을 유지합니다.\n\n플랫폼 아키텍처는 다음과 같은 세 가지 주요 계층으로 구성됩니다. 의사결정 계층 — 대시보드 및 전체 운영 가시성; 운영 계층 — 재고 입출고 관리; 데이터 계층 — 재고 이력 및 데이터 저장.\n\n또한 의료 환경의 특성을 고려하여 인터페이스는 안전 중심 설계로 만들어졌습니다. 역할 기반 접근 제어, 필수 입력 필드, 시각적 위험 표시 기능을 통해 인적 오류를 최소화할 수 있습니다.\n\n이 시스템은 병원의 재고 관리를 수작업 중심의 방식에서 디지털 기반의 추적 가능하고 안정적인 운영 시스템으로 전환하는 데 도움을 주었습니다. 또한 향후 AI 기반 수요 예측, OCR 문서 인식, B2B 공급 플랫폼 확장을 위한 기반을 제공합니다.",
			},
			{
				type: "stats",
				items: [
					{ value: "4", label: "Applications", labelKo: "애플리케이션" },
					{ value: "20+", label: "Modules", labelKo: "모듈" },
					{ value: "30+", label: "DB Tables", labelKo: "DB 테이블" },
					{ value: "60+", label: "API Endpoints", labelKo: "API 엔드포인트" },
					{
						value: "Real-time",
						label: "Order & Alerts",
						labelKo: "주문 및 알림",
					},
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Medical clinics and suppliers needed one reliable system: orders, inventory, supplier management, compliance, and reporting — in a multi-tenant setup with strict data isolation. Manual processes and legacy tools didn't scale.",
				solution:
					"Designed and built the full stack from scratch: Turborepo monorepo (Clinic + Supplier backends & frontends), NestJS + Next.js 14, PostgreSQL (Supabase) with Prisma, JWT + RBAC, and production monitoring via Telegram.",
				challengeKo:
					"의료 기관과 공급업체는 주문, 재고, 공급업체 관리, 규정 준수, 리포팅을 하나의 신뢰할 수 있는 멀티테넌트 시스템으로 통합해야 했으며, 엄격한 데이터 격리가 필요했습니다. 수작업과 레거시 도구로는 확장이 어려웠습니다.",
				solutionKo:
					"처음부터 풀스택을 설계 및 구축: Turborepo 모노레포(클리닉 + 공급업체 백엔드·프론트엔드), NestJS + Next.js 14, PostgreSQL(Supabase) + Prisma, JWT + RBAC, Telegram 기반 프로덕션 모니터링.",
			},
			{
				type: "section_title",
				title: "Tech Stack",
				titleKo: "기술 스택",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Backend",
						titleKo: "백엔드",
						items: [
							"NestJS",
							"TypeScript",
							"Prisma",
							"PostgreSQL",
							"JWT",
							"RBAC",
							"Transactions",
						],
					},
					{
						title: "Frontend",
						titleKo: "프론트엔드",
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
						titleKo: "인프라",
						items: [
							"Docker",
							"Docker Compose",
							"AWS EC2",
							"Nginx",
							"VPS",
							"Supabase",
							"Connection pooling",
						],
					},
					{
						title: "Integrations",
						titleKo: "연동",
						items: [
							"AWS EC2",
							"Supabase",
							"Brevo",
							"Solapi",
							"Google Vision",
							"Telegram",
							"HIRA",
							"Data.go.kr",
							"Grafana",
							"Prometheus",
							"Health Checks",
							"Performance Logging",
							"Telegram Alerts",
							"Rate Limiting",
							"Firewall Configuration",
							"Secrets Management",
							"Audit Logging",
							"GS1 barcode scanning",
						],
					},
				],
			},
			{
				type: "section_title",
				title: "Architecture & Design",
				titleKo: "아키텍처 및 설계",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Multi-tenancy",
						titleKo: "멀티테넌시",
						description:
							"Row-level isolation with tenant_id on every table, JwtTenantGuard, and composite indexes. Scales to thousands of clinics with zero cross-tenant data risk.",
						descriptionKo:
							"모든 테이블에 tenant_id 기반 행 수준 격리, JwtTenantGuard, 복합 인덱스. 수천 개 클리닉까지 확장 가능하며 테넌트 간 데이터 혼합 위험 없음.",
					},
					{
						title: "Clean Architecture",
						titleKo: "클린 아키텍처",
						description:
							"Controller → Service → Repository → DB. Separation of concerns, testable business logic, and infrastructure-agnostic core.",
						descriptionKo:
							"Controller → Service → Repository → DB. 관심사 분리, 테스트 가능한 비즈니스 로직, 인프라에 독립적인 코어.",
					},
					{
						title: "ACID Transactions",
						titleKo: "ACID 트랜잭션",
						description:
							"Order creation, inventory updates, and returns wrapped in Prisma transactions. Rollback on any failure; Telegram alerts on production rollbacks.",
						descriptionKo:
							"주문 생성, 재고 갱신, 반품을 Prisma 트랜잭션으로 래핑. 실패 시 롤백; 프로덕션 롤백 시 Telegram 알림.",
					},
					{
						title: "Production Monitoring",
						titleKo: "프로덕션 모니터링",
						description:
							"Telegram alerts, Grafana, Prometheus for DB failures and other issues, slow queries, storage thresholds (80%/90%), high-value order failures, and HTTP 5xx. Health check endpoints for Docker and load balancers.",
						descriptionKo:
							"DB 장애·이슈, 슬로우 쿼리, 스토리지 임계값(80%/90%), 고액 주문 실패, HTTP 5xx에 대한 Telegram 알림, Grafana, Prometheus. Docker 및 로드밸런서용 헬스체크 엔드포인트.",
					},
				],
			},
			{
				type: "section_title",
				title: "Engineering Decisions",
				titleKo: "엔지니어링 결정",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Why monorepo instead of microservices",
						titleKo: "마이크로서비스 대신 모노레포를 선택한 이유",
						description:
							"Faster development iteration, shared domain models across Clinic and Supplier apps, and lower operational complexity for a small team. Single deploy pipeline and consistent tooling.",
						descriptionKo:
							"빠른 개발 반복, 클리닉·공급업체 앱 간 공유 도메인 모델, 소규모 팀에 맞는 낮은 운영 복잡도. 단일 배포 파이프라인과 일관된 도구.",
					},
					{
						title: "Why PostgreSQL",
						titleKo: "PostgreSQL을 선택한 이유",
						description:
							"Strong ACID guarantees required for financial operations, order and inventory transactions. Reliable transaction handling and mature ecosystem (Prisma, Supabase).",
						descriptionKo:
							"재무·주문·재고 트랜잭션에 필요한 강한 ACID 보장. 안정적인 트랜잭션 처리와 성숙한 생태계(Prisma, Supabase).",
					},
					{
						title: "Why NestJS",
						titleKo: "NestJS를 선택한 이유",
						description:
							"Structured architecture out of the box, dependency injection for testability, and TypeScript-first. Fits long-lived backend services and team collaboration.",
						descriptionKo:
							"구조화된 아키텍처, 테스트 용이성을 위한 DI, TypeScript 우선. 장기 운영 백엔드와 팀 협업에 적합.",
					},
				],
			},
			{
				type: "section_title",
				title: "Problem Solving",
				titleKo: "문제 해결",
			},
			{
				type: "problem_solving",
				items: [
					{
						problem: "Multi-tenant data isolation at scale",
						problemKo: "대규모 멀티테넌트 데이터 격리",
						solution:
							"tenant_id on every table, JwtTenantGuard, all queries filtered by tenant. Composite indexes for performance.",
						solutionKo:
							"모든 테이블에 tenant_id, JwtTenantGuard, 모든 쿼리 테넌트 필터. 성능을 위한 복합 인덱스.",
						result:
							"Complete isolation, scalable to thousands of tenants, regulation-ready.",
						resultKo: "완전한 격리, 수천 테넌트 확장 가능, 규제 대응.",
					},
					{
						problem: "Supabase pgbouncer doesn't support prepared statements",
						problemKo: "Supabase pgbouncer가 prepared statement 미지원",
						solution:
							"Detect pgbouncer in connection string, add pgbouncer=true, disable prepared statements, connection retry logic.",
						solutionKo:
							"연결 문자열에서 pgbouncer 감지, pgbouncer=true 추가, prepared statement 비활성화, 재시도 로직.",
						result: "Seamless Supabase usage, stable under load.",
						resultKo: "원활한 Supabase 사용, 부하 시 안정적.",
					},
					{
						problem: "Order creation across multiple suppliers",
						problemKo: "다수 공급업체에 걸친 주문 생성",
						solution:
							"Order splitting by supplier, each group = separate order with suffix (A, B, C). Single transaction; single webhook with all orders.",
						solutionKo:
							"공급업체별 주문 분할, 각 그룹 = 접미사(A, B, C)가 있는 별도 주문. 단일 트랜잭션; 모든 주문이 포함된 단일 웹훅.",
						result: "Accurate multi-supplier orders, no partial state.",
						resultKo: "정확한 다중 공급업체 주문, 부분 상태 없음.",
					},
					{
						problem: "Manual certificate data entry",
						problemKo: "수동 인증서 데이터 입력",
						solution:
							"Google Cloud Vision OCR → structured parser → pre-filled form with fallback to manual entry.",
						solutionKo:
							"Google Cloud Vision OCR → 구조화 파서 → 수동 입력 폴백이 있는 사전 입력 폼.",
						result: "Faster registration, fewer errors, better UX.",
						resultKo: "더 빠른 등록, 오류 감소, 개선된 UX.",
					},
					{
						problem: "Real-time production visibility",
						problemKo: "실시간 프로덕션 가시성",
						solution:
							"TelegramNotificationService, Grafana, Prometheus for DB, storage, API failures, rollbacks. Only in production with feature flag.",
						solutionKo:
							"DB, 스토리지, API 장애, 롤백에 대한 TelegramNotificationService, Grafana, Prometheus. 기능 플래그로 프로덕션에서만.",
						result: "Immediate alerts and manual monitoring.",
						resultKo: "즉시 알림 및 모니터링.",
					},
				],
			},
			// {
			// 	type: "section_title",
			// 	title: "Integrations",
			// },
			// {
			// 	type: "integrations",
			// 	items: [

			// 	],
			// },
			{
				type: "section_title",
				title: "Impact",
				titleKo: "성과",
			},
			{
				type: "achievements",
				items: [
					{
						value: "Live",
						label: "In production",
						labelKo: "프로덕션 운영 중",
					},
					{
						value: "100%",
						label: "Data isolation per tenant",
						labelKo: "테넌트별 데이터 격리",
					},
					{
						value: "ACID",
						label: "Financial operations",
						labelKo: "재무 운영",
					},
					{
						value: "Real-time",
						label: "Alerts & notifications",
						labelKo: "알림 및 알리미",
					},
					{
						value: "OCR",
						label: "Certificate automation",
						labelKo: "인증서 자동화",
					},
				],
			},
			{
				type: "text",
				content:
					"Solo lead from requirements to production. The system is live, serving clinics and suppliers with order management, inventory (batch/FIFO), returns, product catalog, and full RBAC. Built for maintainability and scale.",
				contentKo:
					"요구사항부터 프로덕션까지 단독 리드. 시스템은 라이브이며, 클리닉과 공급업체에 주문 관리, 재고 (배치/FIFO), 반품, 제품 카탈로그, 전체 RBAC를 제공합니다. 유지보수 및 확장을 위해 설계되었습니다.",
			},
		],
	},
	{
		slug: "bowow",
		title: "Bowow",
		titleKo: "Bowow",
		subtitle: "Multi-vendor e-commerce platform for pet products",
		subtitleKo: "반려동물 용품 멀티 벤더 이커머스 플랫폼",
		coverImage: "/projects/bowow-1.png",
		liveUrl: "http://bowow.uz",
		content: [
			{
				type: "stats",
				items: [
					{
						value: "Multi-vendor",
						label: "Marketplace",
						labelKo: "마켓플레이스",
					},
					{ value: "4", label: "Languages", labelKo: "언어" },
					{
						value: "Real-time",
						label: "Chat & Notifications",
						labelKo: "채팅 및 알림",
					},
					{
						value: "GraphQL",
						label: "API + WebSocket",
						labelKo: "API + WebSocket",
					},
					{
						value: "Ranking",
						label: "Members & Products",
						labelKo: "회원 및 상품 랭킹",
					},
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Pet owners needed one place to find quality food, accessories, grooming care, and veterinary essentials from multiple sellers. Existing solutions lacked real-time vendor–customer communication, multi-language support, and fair visibility for top performers.",
				solution:
					"Built Bowow as a feature-rich multi-vendor e-commerce platform: intelligent search and dynamic filtering, real-time chat, member and product ranking via automated batch servers, secure transactions, and responsive design. Monorepo backend with GraphQL, WebSocket, and role-based access (User/Agent/Admin).",
				challengeKo:
					"반려동물 주인들이 여러 판매자로부터 질 좋은 사료, 용품, 그루밍, 수의용품을 한곳에서 찾을 수 있어야 했습니다. 기존 솔루션에는 실시간 판매자-고객 소통, 다국어 지원, 우수 판매자 노출이 부족했습니다.",
				solutionKo:
					"Bowow을 기능 중심 멀티 벤더 이커머스로 구축: 스마트 검색·동적 필터, 실시간 채팅, 자동 배치 서버 기반 회원·상품 랭킹, 안전한 결제, 반응형 디자인. GraphQL·WebSocket·역할 기반 접근(User/Agent/Admin) 모노레포 백엔드.",
			},
			{
				type: "section_title",
				title: "Platform Overview",
				titleKo: "플랫폼 개요",
			},
			{
				type: "text",
				content:
					"Bowow connects various sellers with pet owners in a single marketplace. The platform offers a user-friendly interface, powerful search and filter options, a robust tagging system for product discovery, and secure transactions — so pet lovers can find and purchase everything their furry friends need in one place.",
				contentKo:
					"Bowow은 하나의 마켓플레이스에서 다양한 판매자와 반려동물 주인을 연결합니다. 직관적 UI, 강력한 검색·필터, 상품 발견용 태깅, 안전한 결제를 제공해 반려인들이 필요한 것을 한곳에서 찾고 구매할 수 있게 합니다.",
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
				titleKo: "주요 기능",
			},
			{
				type: "text",
				content:
					"Role-based authentication, My Page profile management, vendor-only product listings, dynamic filtering, responsive layout, and multilingual support (Korean, English, Russian, Uzbek). Real-time notifications, live chatting, follow/comment/like, dynamic notice/FAQ/terms, and dynamic product brand functionality.",
				contentKo:
					"역할 기반 인증, 마이페이지 프로필, 판매자 전용 상품 등록, 동적 필터, 반응형 레이아웃, 다국어(한국어, 영어, 러시아어, 우즈베크어). 실시간 알림, 라이브 채팅, 팔로우·댓글·좋아요, 공지/FAQ/약관, 상품 브랜드 기능.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-4.png", "/projects/bowow-5.png"],
			},
			{
				type: "section_title",
				title: "Product Detail & UX",
				titleKo: "상품 상세 및 UX",
			},
			{
				type: "text",
				content:
					"Comprehensive product detail page with high-resolution images, specifications, pricing, and customer reviews. Interactive image galleries, real-time stock updates, customizable variants, and intuitive UI for adding to cart — all with a responsive, user-friendly interface.",
				contentKo:
					"고해상도 이미지, 스펙, 가격, 리뷰가 있는 상품 상세 페이지. 갤러리, 실시간 재고, 옵션 변형, 장바구니 담기 UI. 반응형·사용자 친화적 인터페이스.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-6.png", "/projects/bowow-7.png"],
			},
			{
				type: "section_title",
				title: "User Dashboard",
				titleKo: "사용자 대시보드",
			},
			{
				type: "text",
				content:
					"Dedicated user dashboard: My Favorites for liked products, Recently Visited for quick revisit, My Followers & Followings for social engagement, Articles for community content, Write Article for sharing, My Profile for account details, and secure logout. Designed to enhance shopping and community experience.",
				contentKo:
					"마이페이지: 찜한 상품, 최근 본 상품, 팔로워·팔로잉, 커뮤니티 글, 글쓰기, 프로필, 로그아웃. 쇼핑과 커뮤니티 경험 향상을 위해 구성.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-8.png"],
			},
			{
				type: "section_title",
				title: "Admin Panel",
				titleKo: "관리자 패널",
			},
			{
				type: "text",
				content:
					"Clean admin interface for product management: sidebar navigation (Users, Products, Community, Customer Service), product list with Member ID, name, price, vendor, category, status. Quick filters (All, Active, Sold, Deleted), color-coded status badges, visual thumbnails, and full controls — activate, deactivate, delete, update. Ensures up-to-date catalog and inventory visibility.",
				contentKo:
					"상품 관리용 관리자 화면: 사이드바(회원, 상품, 커뮤니티, 고객지원), 회원ID·이름·가격·판매자·카테고리·상태 목록. 필터(전체·활성·판매완료·삭제), 상태 뱃지, 썸네일, 활성/비활성/삭제/수정. 최신 카탈로그·재고 가시성 확보.",
			},
			{
				type: "images",
				urls: ["/projects/bowow-10.png"],
			},
			{
				type: "section_title",
				title: "Tech Stack",
				titleKo: "기술 스택",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Frontend",
						titleKo: "프론트엔드",
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
						titleKo: "백엔드",
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
						titleKo: "배포 및 인프라",
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
				titleKo: "백엔드 아키텍처",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Monorepo",
						titleKo: "모노레포",
						description:
							"Main API (core GraphQL + real-time WebSocket), Batch Processing (background jobs, scheduled tasks), and shared libraries for types, utilities, and configuration across services.",
						descriptionKo:
							"메인 API(GraphQL + 실시간 WebSocket), 배치(백그라운드·스케줄 작업), 타입·유틸·설정 공유 라이브러리.",
					},
					{
						title: "GraphQL & Real-time",
						titleKo: "GraphQL 및 실시간",
						description:
							"Flexible querying and real-time updates. MongoDB with Mongoose for high-performance data operations. Unified codebase with shared types and utilities.",
						descriptionKo:
							"유연한 쿼리와 실시간 업데이트. MongoDB·Mongoose로 고성능 데이터 처리. 공유 타입·유틸 기반 단일 코드베이스.",
					},
					{
						title: "Security & Roles",
						titleKo: "보안 및 역할",
						description:
							"Role-based access control (User / Agent / Admin) with JWT authentication. Industry-standard authorization built for reliability and seamless user experience.",
						descriptionKo:
							"JWT 기반 역할 접근(User/Agent/Admin). 안정성과 사용자 경험을 위한 표준 인가.",
					},
					{
						title: "Production Ready",
						titleKo: "프로덕션 준비",
						description:
							"Docker support, CI/CD integration, scalable architecture. Visually appealing, secure, and scalable infrastructure with monitoring via Grafana.",
						descriptionKo:
							"Docker, CI/CD, 확장 가능한 아키텍처. Grafana 모니터링, 안전하고 확장 가능한 인프라.",
					},
				],
			},
			{
				type: "achievements",
				items: [
					{ value: "4", label: "Languages", labelKo: "언어" },
					{
						value: "Real-time",
						label: "Chat & ranking",
						labelKo: "채팅 및 랭킹",
					},
					{
						value: "Multi-vendor",
						label: "Marketplace",
						labelKo: "마켓플레이스",
					},
					{
						value: "GraphQL",
						label: "API + WebSocket",
						labelKo: "API + WebSocket",
					},
				],
			},
			{
				type: "text",
				content:
					"Bowow delivers a smooth and engaging shopping experience for pet owners worldwide, with secure transactions, responsive design, and scalable infrastructure — built for quality, convenience, and community.",
				contentKo:
					"Bowow은 안전한 결제, 반응형 디자인, 확장 가능한 인프라로 전 세계 반려인에게 쇼핑 경험을 제공합니다. 품질, 편의, 커뮤니티를 위해 구축되었습니다.",
			},
		],
	},
	{
		slug: "cafeu",
		title: "Cafeu",
		titleKo: "Cafeu",
		subtitle: "Modern online food ordering and delivery platform",
		subtitleKo: "모던 온라인 음식 주문·배달 플랫폼",
		coverImage: "/projects/cafeu-1.png",
		liveUrl: "https://cafeu.uz",
		content: [
			{
				type: "stats",
				items: [
					{ value: "Online", label: "Ordering", labelKo: "주문" },
					{
						value: "Responsive",
						label: "Desktop & Mobile",
						labelKo: "데스크톱 및 모바일",
					},
					{ value: "Blog", label: "News & Recipes", labelKo: "뉴스 및 레시피" },
					{ value: "Secure", label: "JWT Auth", labelKo: "JWT 인증" },
					{ value: "Fast", label: "Checkout", labelKo: "결제" },
				],
			},
			{
				type: "challenge_solution",
				challenge:
					"Cafeu restaurant needed a modern way for customers to browse the menu, customize orders, and get meals delivered quickly. The experience had to be clean, responsive, and smooth — both online and offline.",
				solution:
					"Built Cafeu as a full-stack food ordering platform: secure sign-up and login, complete menu with sorting and filtering, search, cart, and streamlined checkout. Developed desktop and mobile versions with optimized UI and touch interactions. Added a dynamic News & Blog section for engagement. Deployed with Docker, Nginx, PM2, and Grafana on a secure, scalable VPS.",
				challengeKo:
					"Cafeu 레스토랑은 고객이 메뉴를 보고, 주문을 맞춤 설정하고, 빠르게 배달받을 수 있는 현대적 방식을 원했습니다. 온·오프라인 모두 깔끔하고 반응형이며 매끄러운 경험이 필요했습니다.",
				solutionKo:
					"풀스택 음식 주문 플랫폼 Cafeu 구축: 안전한 회원가입·로그인, 정렬·필터·검색, 장바구니·간편 결제. 데스크톱·모바일 버전, 터치 최적화 UI. 뉴스·블로그 섹션으로 참여 유도. Docker, Nginx, PM2, Grafana로 안전·확장 가능한 VPS 배포.",
			},
			{
				type: "section_title",
				title: "Platform Overview",
				titleKo: "플랫폼 개요",
			},
			{
				type: "text",
				content:
					"Cafeu allows customers to browse the restaurant menu, customize their orders, and get meals delivered quickly and conveniently. With a clean design, responsive layout, and smooth ordering process, it enhances the dining experience both online and offline.",
				contentKo:
					"Cafeu는 고객이 메뉴를 탐색하고, 주문을 맞춤 설정하며, 빠르고 편하게 배달받을 수 있게 합니다. 깔끔한 디자인, 반응형 레이아웃, 매끄러운 주문 흐름으로 온·오프라인 식사 경험을 높입니다.",
			},
			{
				type: "images",
				urls: [
					"/projects/cafeu-1.png",
					"/projects/cafeu-2.png",
					"/projects/cafeu-3.png",
				],
			},
			{
				type: "section_title",
				title: "Ordering Experience",
				titleKo: "주문 경험",
			},
			{
				type: "text",
				content:
					"Smooth and intuitive UX: secure sign-up and login, complete menu exploration, easy add-to-cart. Advanced sorting and filtering plus search for instant results. Streamlined checkout ensures fast, hassle-free order placement — so customers can enjoy their favorite meals from home.",
				contentKo:
					"매끄럽고 직관적인 UX: 안전한 가입·로그인, 메뉴 탐색, 쉬운 장바구니 담기. 정렬·필터·검색으로 즉시 결과. 간편 결제로 빠르고 부담 없는 주문 — 집에서 좋아하는 메뉴를 즐길 수 있습니다.",
			},
			{
				type: "images",
				urls: ["/projects/cafeu-4.png", "/projects/cafeu-5.png"],
			},
			{
				type: "section_title",
				title: "Desktop & Mobile",
				titleKo: "데스크톱 및 모바일",
			},
			{
				type: "text",
				content:
					"Both desktop and mobile versions were developed for a seamless, responsive experience. Modern, user-friendly interface with clear navigation, fast load times, and an engaging layout. On mobile: UI optimized for smaller screens, intuitive touch interactions, and a quick, effortless ordering flow for users on the go. Focus on usability, visual appeal, and performance.",
				contentKo:
					"데스크톱·모바일 모두 매끄럽고 반응형 경험으로 개발. 명확한 네비게이션, 빠른 로딩, 보기 좋은 레이아웃. 모바일: 작은 화면에 맞춘 UI, 직관적 터치, 이동 중에도 빠르고 편한 주문. 사용성, 시각적 매력, 성능에 초점.",
			},
			{
				type: "images_desktop_mobile",
				desktop: "/projects/cafeu-6.png",
				mobile: ["/projects/cafeu-7.jpg", "/projects/cafeu-mobile-2.png"],
			},
			{
				type: "section_title",
				title: "News & Blog",
				titleKo: "뉴스 및 블로그",
			},
			{
				type: "text",
				content:
					"Dynamic Latest News & Blog page to keep users engaged with fresh content. Customers can read the latest news, discover culinary tips, and explore recipes within the platform. Responsive card-based layout with post images, titles, short descriptions, publication dates, and Read More links. Visually appealing and easy to navigate on desktop, tablet, and mobile — with fast loading and smooth scrolling. Builds trust and encourages repeat visits.",
				contentKo:
					"최신 뉴스·블로그 페이지로 신선한 콘텐츠 제공. 최신 소식, 요리 팁, 레시피 탐색. 카드형 레이아웃에 이미지, 제목, 요약, 날짜, 더보기 링크. 데스크톱·태블릿·모바일에서 보기 좋고 탐색 쉬움. 빠른 로딩·스크롤. 신뢰와 재방문 유도.",
			},
			{
				type: "images",
				urls: ["/projects/cafeu-8.png"],
			},
			{
				type: "section_title",
				title: "Key Features",
				titleKo: "주요 기능",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "Design & UX",
						titleKo: "디자인 및 UX",
						description:
							"Clean, modern card design with high-quality imagery. Latest posts in chronological order. Dedicated Read More links for full articles. Fully responsive across devices.",
						descriptionKo:
							"고품질 이미지의 깔끔한 카드 디자인. 최신 글 시간순. 전문 더보기 링크. 모든 기기 반응형.",
					},
					{
						title: "Performance",
						titleKo: "성능",
						description:
							"Optimized for fast loading and smooth scrolling. Enhances overall experience with valuable non-transactional content.",
						descriptionKo:
							"빠른 로딩·스크롤 최적화. 가치 있는 콘텐츠로 전체 경험 향상.",
					},
				],
			},
			// {
			// 	type: "images",
			// 	urls: ["/projects/cafeu-10.jpg"],
			// },
			{
				type: "section_title",
				title: "Tech Stack",
				titleKo: "기술 스택",
			},
			{
				type: "tech_stack",
				groups: [
					{
						title: "Frontend",
						titleKo: "프론트엔드",
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
						titleKo: "백엔드",
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
						titleKo: "배포 및 인프라",
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
				titleKo: "아키텍처 및 설계",
			},
			{
				type: "architecture",
				cards: [
					{
						title: "ER & Flow",
						titleKo: "ER 및 플로우",
						description:
							"Integrated Entity-Relationship modeling and flowchart design for a clear, efficient system architecture.",
						descriptionKo:
							"엔티티 관계 모델링과 플로우차트로 명확하고 효율적인 시스템 아키텍처 설계.",
					},
					{
						title: "UI & Responsiveness",
						titleKo: "UI 및 반응형",
						description:
							"Modern, responsive interfaces with Material UI and Bootstrap for a seamless experience across devices.",
						descriptionKo:
							"Material UI·Bootstrap 기반 현대적 반응형 인터페이스로 모든 기기에서 매끄러운 경험.",
					},
					{
						title: "Security",
						titleKo: "보안",
						description:
							"Secure authentication with JWT and Bcrypt.js for robust user data protection.",
						descriptionKo:
							"JWT·Bcrypt.js 기반 안전한 인증으로 사용자 데이터 보호.",
					},
					{
						title: "Real-time",
						titleKo: "실시간",
						description:
							"Optimized real-time features with Socket.io for instant and efficient data updates.",
						descriptionKo:
							"Socket.io로 즉각적·효율적인 데이터 업데이트를 위한 실시간 기능 최적화.",
					},
				],
			},
			{
				type: "achievements",
				items: [
					{
						value: "Full-stack",
						label: "Ordering platform",
						labelKo: "주문 플랫폼",
					},
					{
						value: "Responsive",
						label: "Desktop & mobile",
						labelKo: "데스크톱 및 모바일",
					},
					{ value: "Blog", label: "News & recipes", labelKo: "뉴스 및 레시피" },
					{ value: "Secure", label: "JWT + VPS", labelKo: "JWT + VPS" },
				],
			},
			{
				type: "text",
				content:
					"Cafeu delivers a high-performance, secure, and scalable food ordering experience — designed for optimal speed, strong security, and effortless scalability in production.",
				contentKo:
					"Cafeu는 고성능·안전·확장 가능한 음식 주문 경험을 제공합니다. 속도, 보안, 프로덕션 확장성을 위해 설계되었습니다.",
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
