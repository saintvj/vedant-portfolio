# Master Project Index & Quickstart // vedantjakarwar.com

> **"Live like it's your last day, write code like it will execute for a billion users."**

Welcome to the central repository for **Vedant Jakarwar's** high-impact personal portfolio website (`vedantjakarwar.com`). This project blends a high-adrenaline, cosmic adventurer aesthetic with clean, enterprise-grade engineering standards built specifically to impress both high-bar technical recruiters and engineering leaders.

---

## ⚡ Quick Navigation

| Documentation File | Purpose |
| :--- | :--- |
| [`index.md`](./index.md) / [`README.md`](./README.md) | Master Project Index, Tech Stack & Quickstart |
| [`workflow.md`](./workflow.md) | Phased Interactive Implementation Checklist & Sprints |
| [`architecture.md`](./architecture.md) | Deep Architectural Decisions, Schema DDL, API Contracts & CORS |
| [`CHANGELOG.md`](./CHANGELOG.md) | Multi-Agent Handover Log (Antigravity ↔ Claude Code) |
| [`frontend/src/assets/images/README_IMAGES.md`](./frontend/src/assets/images/README_IMAGES.md) | Asset Drop Guide for Vedant's Photos |

---

## 🏗️ Repository Architecture

```text
vedant-portfolio/
├── .gitignore                         # Strict Git exclusions (node_modules, target, .env)
├── README.md                          # Primary GitHub entry point
├── index.md                           # Master Project Index
├── workflow.md                        # Phased interactive checklist
├── architecture.md                    # System architecture & decision rationale
├── CHANGELOG.md                       # Agent handover ledger
├── start.bat                          # One-click environment check & launcher
│
├── database/                          # PostgreSQL / Supabase / Neon ready
│   ├── schema.sql                     # DDL for Testimonials, Projects, Friends Gallery
│   └── seed.sql                       # Initial production-ready seed records
│
├── backend/                           # Java 22 + Spring Boot 3.3.x REST API
│   ├── pom.xml                        # Maven dependencies (JPA, Web, Actuator, Postgres, H2)
│   └── src/main/
│       ├── java/com/vedant/portfolio/
│       │   ├── PortfolioApplication.java
│       │   ├── config/CorsConfig.java # Whitelist: localhost:4200 & vedantjakarwar.com
│       │   ├── controller/            # Testimonial, Project, FriendPhoto endpoints
│       │   ├── model/                 # JPA domain entities with Jakarta validations
│       │   ├── repository/            # Spring Data JPA interfaces
│       │   └── service/               # Core business services
│       └── resources/
│           └── application.properties # Connection configuration (Env vars + fallbacks)
│
└── frontend/                          # Angular 18 (Standalone) + Tailwind CSS
    ├── package.json                   # Angular & styling dependencies
    ├── angular.json                   # Modern application build configuration
    ├── tailwind.config.js             # Cosmic dark-mode theme & animations
    ├── tsconfig.json                  # Strict TypeScript configuration
    └── src/
        ├── index.html                 # SEO tags, Outfit, Space Grotesk, JetBrains Mono
        ├── styles.css                 # Cosmic glassmorphism & glow utility tokens
        ├── assets/
        │   └── images/                # Asset directories (profile, adventures, friends)
        │       └── README_IMAGES.md   # Exact photo drop instructions
        └── app/
            ├── core/                  # Models & ApiService with automatic mock fallback
            ├── features/
            │   ├── home/              # Hero, Recruiter Hub, Telemetry, Testimonials, Crew
            │   └── resume/            # Spacewalk Cosmic CV (/resume route)
            └── shared/                # Navbar, Cosmic Footer
```

---

## 🛠️ Technology Stack & Rationale

| Layer | Technology | Primary Rationale |
| :--- | :--- | :--- |
| **Frontend Framework** | **Angular 18+ (Standalone)** | Enterprise type safety, signals reactivity, robust routing, and clean modularity. |
| **Design & UI** | **Tailwind CSS + Custom CSS Tokens** | Custom cosmic palette, glassmorphism, responsive masonry grids, and fluid animations. |
| **Backend Runtime** | **Java 22 + Spring Boot 3.3.x** | Rock-solid enterprise standard; showcases core competence in Java, concurrency, and REST APIs. |
| **Database** | **PostgreSQL (Supabase / Neon)** | Relational rigor, JSON/Array support, instant free-tier deployment, and fast connection pooling. |
| **State & Fallbacks** | **RxJS + Offline Mock Interceptor** | Allows frontend to run 100% interactively out-of-the-box even before local DB connection is established. |

---

## 🚀 Fast-Track Local Setup

### 1. Database Setup (Supabase / Neon / Local PostgreSQL)
Execute the provided scripts in order:
```bash
# Option A: Run via psql CLI
psql -h <host> -U <user> -d <database> -f database/schema.sql
psql -h <host> -U <user> -d <database> -f database/seed.sql

# Option B: Copy & Paste schema.sql & seed.sql directly into Supabase SQL Web Editor.
```

### 2. Backend Boot (Java 22 + Spring Boot)
```bash
cd backend

# Configure environment variables (or rely on defaults in application.properties)
set DB_URL=jdbc:postgresql://localhost:5432/vedant_portfolio
set DB_USER=postgres
set DB_PASSWORD=postgres

# Run Spring Boot
mvn spring-boot:run
```
- **Health Check**: `GET http://localhost:8080/api/health`
- **Projects**: `GET http://localhost:8080/api/projects`
- **Testimonials**: `GET http://localhost:8080/api/testimonials`
- **Friends Gallery**: `GET http://localhost:8080/api/friends-gallery`

### 3. Frontend Boot (Angular 18)
```bash
cd frontend
npm install
npm start
```
- Open browser at `http://localhost:4200`
- Access Cosmic CV route at `http://localhost:4200/resume`
- Note: The frontend automatically serves fallback data if the backend server is offline.
