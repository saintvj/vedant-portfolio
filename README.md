# Vedant Jakarwar - Personal Portfolio (`vedantjakarwar.com`)

Modern, high-impact personal portfolio showcasing a fun-loving, adventurous persona paired with rock-solid engineering credentials for recruiters.

---

## 📁 System Architecture

```text
vedant-portfolio/
├── database/                     # Free-tier PostgreSQL / Supabase / Neon ready
│   ├── schema.sql                # Table definitions (testimonials, projects, friends_gallery)
│   └── seed.sql                  # Realistic high-energy seed data
├── backend/                      # Java 22 + Spring Boot 3.3.x REST API
│   ├── pom.xml                   # Maven dependencies (Web, JPA, Actuator, Postgres, H2)
│   └── src/main/
│       ├── java/com/vedant/portfolio/
│       │   ├── PortfolioApplication.java
│       │   ├── config/CorsConfig.java
│       │   ├── controller/
│       │   ├── model/
│       │   ├── repository/
│       │   └── service/
│       └── resources/application.properties
└── frontend/                     # Modern Angular 18 + Tailwind CSS
    ├── package.json
    ├── angular.json
    ├── tailwind.config.js
    └── src/
        ├── app/
        │   ├── features/
        │   │   ├── home/         # Hero, Professional Hub, Telemetry, Testimonials, Crew Gallery
        │   │   └── resume/       # Spacewalk / Cosmic CV Sub-route
        │   └── shared/
        └── styles.css            # Dark space styling, glow accents, glassmorphism
```

---

## 🚀 Quickstart Guide

### 1. Database (PostgreSQL)
Import the schema and seed scripts into any local or hosted PostgreSQL instance (such as Supabase or Neon):
```bash
psql -h <host> -U <user> -d <database> -f database/schema.sql
psql -h <host> -U <user> -d <database> -f database/seed.sql
```

### 2. Backend (Java 22 + Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
- API Base URL: `http://localhost:8080/api`
- Health check: `http://localhost:8080/api/health`
- Testimonials CRUD: `http://localhost:8080/api/testimonials`
- Friends Gallery: `http://localhost:8080/api/friends-gallery`
- Projects: `http://localhost:8080/api/projects`

### 3. Frontend (Angular 18)
```bash
cd frontend
npm install
npm start
```
- Frontend Live at: `http://localhost:4200`
- Cosmic Spacewalk Resume: `http://localhost:4200/resume`
