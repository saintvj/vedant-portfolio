# Project Workflow & Implementation Checklist // vedantjakarwar.com

This document governs the phased execution of Vedant Jakarwar's portfolio. Each phase must be checked off sequentially to ensure zero hallucination, verifiable test coverage, and smooth multi-agent handovers.

---

## 🚦 Phase Overview & Current Status

- [x] **Phase 1: Project Setup, Governance & Architecture Scaffolding** *(Completed)*
- [ ] **Phase 2: Backend Persistence & REST API Verification**
- [ ] **Phase 3: Frontend Cosmic UI & Standalone Components Polish**
- [ ] **Phase 4: Live Telemetry Integrations (GitHub, LeetCode, Strava/Activity)**
- [ ] **Phase 5: Performance, Responsive Testing & Security Audit**
- [ ] **Phase 6: Free-Tier Deployment & Custom Domain Go-Live**

---

## 📋 Detailed Interactive Checklist

### Phase 1: Project Setup & Governance
- [x] Create project directory layout (`database/`, `backend/`, `frontend/`).
- [x] Generate PostgreSQL DDL schema (`database/schema.sql`).
- [x] Generate realistic high-energy seed data (`database/seed.sql`).
- [x] Configure Spring Boot 3 `pom.xml` with Java 22, JPA, Web, Validation, and Actuator.
- [x] Implement backend Models, Repositories, Services, and REST Controllers.
- [x] Setup CORS configuration for `localhost:4200` and `vedantjakarwar.com`.
- [x] Create Angular 18 standalone configuration, routing, and Tailwind dark cosmic palette.
- [x] Build core home sections (Hero, Recruiter Hub, Telemetry Tracker, Testimonials, Crew Gallery).
- [x] Build `/resume` Cosmic Spacewalk route with print/PDF support.
- [x] Create multi-agent governance docs: `index.md`, `workflow.md`, `architecture.md`, `CHANGELOG.md`.
- [x] Create `frontend/src/assets/images/README_IMAGES.md` for personal photo drop.

---

### Phase 2: Backend & Database Verification
- [ ] Verify local/remote PostgreSQL connectivity with Spring Boot `application.properties`.
- [ ] Test `GET /api/health` status response.
- [ ] Verify CRUD for Testimonials:
  - [ ] `GET /api/testimonials` (approved only)
  - [ ] `POST /api/testimonials` (with payload validation)
  - [ ] `PATCH /api/testimonials/{id}/approval`
- [ ] Verify Projects retrieval:
  - [ ] `GET /api/projects`
  - [ ] `GET /api/projects/featured`
- [ ] Verify Friends Gallery retrieval:
  - [ ] `GET /api/friends-gallery`
  - [ ] `POST /api/friends-gallery`
- [ ] Add Spring Boot unit/integration tests with `@SpringBootTest` and MockMvc.

---

### Phase 3: Frontend Cosmic UI & Interaction Polish
- [ ] Verify responsive layout across mobile (<640px), tablet (768px), and desktop (1280px+).
- [ ] Replace Unsplash placeholder images with Vedant's real adventure & friends photos.
- [ ] Fine-tune Testimonial Carousel auto-play and keyboard navigation.
- [ ] Implement Lightbox Modal for Friends Gallery photo zoom and location details.
- [ ] Polish Hero micro-animations (orbital spin, floating tech badges, neon text glow).
- [ ] Add smooth anchor scrolling between navbar links and page sections.
- [ ] Verify Cosmic Spacewalk Resume printable CSS view (`@media print`).

---

### Phase 4: Integrations (Live Telemetry & Activity Feeds)
- [ ] Connect GitHub REST API to fetch live repo counts and public commit activity.
- [ ] Connect LeetCode public profile metrics (solved counts, ranking, contest rating).
- [ ] Optional: Integrate Strava / Fitness activity feed (cycling mileage, summit runs).
- [ ] Build graceful fallback mechanism so third-party API rate-limits never degrade page rendering.

---

### Phase 5: Security, Accessibility & Performance Audit
- [ ] Input sanitization on public Testimonial submission form (prevent XSS / SQLi).
- [ ] Rate-limiting filter on Spring Boot POST endpoints.
- [ ] Lighthouse Performance Audit:
  - [ ] Performance score > 90
  - [ ] Accessibility score > 95
  - [ ] SEO & Best Practices > 95
- [ ] Core Web Vitals check (LCP < 2.0s, CLS < 0.05, FID/INP optimal).
- [ ] Validate Open Graph (OG) tags and Twitter card preview for `vedantjakarwar.com`.

---

### Phase 6: Deployment & Domain Configuration
- [ ] Deploy PostgreSQL database to Supabase or Neon (Free Tier).
- [ ] Deploy Spring Boot Backend to Render, Railway, or AWS Elastic Beanstalk.
- [ ] Deploy Angular Frontend to Vercel, Netlify, or Cloudflare Pages.
- [ ] Configure custom domain `vedantjakarwar.com` with SSL/TLS certificates.
- [ ] Setup automated GitHub Actions CI/CD pipeline for frontend and backend builds.
- [ ] Conduct live sanity check on production URL.
