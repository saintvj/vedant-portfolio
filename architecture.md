# System Architecture & Technical Decisions // vedantjakarwar.com

This document details the architectural decisions, design rationale, data schemas, API contracts, and security boundaries implemented in **Vedant Jakarwar's** personal portfolio platform.

---

## 1. Architectural Drivers & Goals

1. **Recruiter & Engineering Leader Appeal**: Directly demonstrates core mastery of **Java 22**, **Spring Boot 3**, **PostgreSQL**, and modern **Angular 18**.
2. **Distinct Dual-Tone Identity**: Combines a witty, adventurous, "live-like-it's-your-last-day" persona with pristine, scalable, enterprise-grade software patterns.
3. **Zero-Latency Resilience**: Frontend remains snappy and interactive even if third-party APIs (GitHub, LeetCode) or the backend service are temporarily unavailable.
4. **Cost Efficiency**: Designed to run comfortably within 100% free-tier cloud architectures (e.g., Neon/Supabase for Postgres, Render/Railway for Spring Boot, and Vercel/Cloudflare Pages for Angular).

---

## 2. Technology Selection Rationale

### Backend: Java 22 + Spring Boot 3.3.x
- **Why Java/Spring Boot instead of Node/Python?**: Vedant's competitive advantage lies in enterprise distributed backend engineering, strong typing, clean concurrency models, and resilient microservices.
- **Jakarta Persistence (JPA) / Hibernate**: Clean ORM mapping, type-safe queries, automatic auditing, and separation of concerns.
- **Jakarta Validation**: Enforces payload integrity across all write endpoints.

### Frontend: Angular 18 (Standalone Components) + Tailwind CSS
- **Why Angular Standalone?**: Modern Angular has eliminated unnecessary NgModule boilerplate, delivering blazing-fast bundle sizes, Signals-based reactivity, and strict TypeScript guarantees.
- **Tailwind CSS + Glassmorphism**: Provides complete control over the bespoke cosmic color palette (`#06070b`, glowing cyan `#38bdf8`, and neon violet `#a855f7`) with hardware-accelerated animations.

### Database: PostgreSQL (Supabase / Neon Ready)
- **Why PostgreSQL?**: Industry benchmark for ACID compliance, indexing capabilities (B-tree, GIN), array datatype support (`TEXT[]` for project tech stacks), and seamless free-tier serverless branching on Neon/Supabase.

---

## 3. Data Flow & System Topology

```
                  [ User / Recruiter Browser ]
                               │
               HTTPS Requests  │  Static Assets / SPA Routing
                               ▼
            ┌────────────────────────────────────┐
            │   Angular 18 Frontend Application  │
            │   (Vercel / Cloudflare Pages)      │
            └─────────────────┬──────────────────┘
                              │
                    REST API  │  CORS: Whitelisted
                              ▼
            ┌────────────────────────────────────┐
            │   Java Spring Boot 3.3.x REST API   │
            │   (Render / Railway / AWS ECS)     │
            └─────────────────┬──────────────────┘
                              │
                 JDBC / JPA   │  PostgreSQL Wire Protocol
                              ▼
            ┌────────────────────────────────────┐
            │   PostgreSQL Relational Database   │
            │   (Neon / Supabase Free Tier)      │
            └────────────────────────────────────┘
```

---

## 4. REST API Contracts

### Base URL: `http://localhost:8080/api` (or `https://api.vedantjakarwar.com/api`)

#### 4.1 Health Check
- `GET /health`
- **Response `200 OK`**:
```json
{
  "status": "UP",
  "service": "vedant-portfolio-backend",
  "persona": "live-like-its-your-last-day",
  "timestamp": 1792938472910
}
```

#### 4.2 Testimonials
- `GET /testimonials`: Returns list of approved peer & mentor reviews ordered chronologically descending.
- `POST /testimonials`: Submits a new testimonial (validated schema, default `isApproved=true` or pending review).
- `PATCH /testimonials/{id}/approval?approved=true`: Toggles approval visibility.
- `DELETE /testimonials/{id}`: Removes an entry.

#### 4.3 Projects
- `GET /projects`: Returns all engineering projects sorted by `displayOrder`.
- `GET /projects/featured`: Returns only highlighted projects for the primary showcase.
- `POST /projects`: Adds a new project.
- `PUT /projects/{id}`: Updates existing project metadata.

#### 4.4 Friends & Adventure Gallery
- `GET /friends-gallery`: Returns photographic expedition cards and metadata.
- `POST /friends-gallery`: Adds a new photo memory.
- `DELETE /friends-gallery/{id}`: Removes a photo memory.

---

## 5. Security & Cross-Origin Resource Sharing (CORS)

Configured centrally in `com.vedant.portfolio.config.CorsConfig`:
```java
registry.addMapping("/api/**")
        .allowedOrigins("http://localhost:4200", "https://vedantjakarwar.com", "https://www.vedantjakarwar.com")
        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .allowedHeaders("*")
        .allowCredentials(true)
        .maxAge(3600);
```
- Restricts origin access strictly to trusted domains.
- Pre-flight OPTIONS requests cached for 1 hour to reduce network round-trips.
- Payload input validation with Jakarta `@NotBlank`, `@Min`, `@Max` prevents malformed inputs.
