# Supabase PostgreSQL Database Setup & Data Guide

This document details the PostgreSQL database configuration hosted on **Supabase** for the Vedant Jakarwar Portfolio project, including connection parameters, table schemas, and administrative procedures for updating or adding data.

---

## 1. Connection Configuration

The backend Spring Boot service connects to Supabase PostgreSQL using JDBC over SSL. 

### Location:
[`backend/src/main/resources/application.properties`](file:///u:/store%20room/projects/vedant-portfolio/backend/src/main/resources/application.properties)

```properties
# Supabase PostgreSQL Connection
spring.datasource.url=${DB_URL:jdbc:postgresql://db.uagiujstleraajwpneos.supabase.co:5432/postgres?sslmode=require}
spring.datasource.username=${DB_USER:postgres}
spring.datasource.password=${DB_PASSWORD:SquarePad!1047}
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA & Hibernate Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

### Environment Variables:
For production or CI/CD deployments, override defaults using standard environment variables:
- `DB_URL`: JDBC URL containing the Supabase host, port 5432, target database (`postgres`), and `sslmode=require`.
- `DB_USER`: Database username (default: `postgres`).
- `DB_PASSWORD`: Database user password.

---

## 2. Table Schemas & Columns

Required extension:
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

### 2.1. `testimonials`
Stores endorsements and recommendations from colleagues, leads, and collaborators.

| Column | Type | Constraints / Defaults | Description |
|---|---|---|---|
| `id` | `UUID` | `PRIMARY KEY DEFAULT uuid_generate_v4()` | Unique testimonial identifier |
| `author_name` | `VARCHAR(120)` | `NOT NULL` | Full name of the endorser |
| `author_role` | `VARCHAR(150)` | `NOT NULL` | Professional title (e.g., "Senior Engineering Lead") |
| `company` | `VARCHAR(150)` | Nullable | Organization or company name |
| `avatar_url` | `TEXT` | Nullable | Direct image link to profile avatar |
| `content` | `TEXT` | `NOT NULL` | Testimonial quote or review text |
| `rating` | `INTEGER` | `CHECK (rating >= 1 AND rating <= 5) DEFAULT 5` | Star rating (1 to 5) |
| `relationship_tag`| `VARCHAR(80)` | `DEFAULT 'Colleague'` | Association context (e.g., 'Tech Lead', 'Mentor') |
| `is_approved` | `BOOLEAN` | `DEFAULT TRUE` | Moderation flag; only approved records are served |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of creation |

**Index:**
```sql
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, created_at DESC);
```

---

### 2.2. `projects`
Stores portfolio engineering projects, open-source work, and tech showcases.

| Column | Type | Constraints / Defaults | Description |
|---|---|---|---|
| `id` | `UUID` | `PRIMARY KEY DEFAULT uuid_generate_v4()` | Unique project identifier |
| `title` | `VARCHAR(150)` | `NOT NULL` | Project headline title |
| `punchline` | `VARCHAR(255)` | `NOT NULL` | Catchy one-line summary / elevator pitch |
| `description` | `TEXT` | `NOT NULL` | Detailed technical architecture and feature summary |
| `tech_stack` | `TEXT[]` | `NOT NULL DEFAULT '{}'` | Array of technology tags (e.g., `ARRAY['Java', 'Angular']`) |
| `github_url` | `TEXT` | Nullable | Repository link |
| `live_url` | `TEXT` | Nullable | Deployment / live demo URL |
| `stars_count` | `INTEGER` | `DEFAULT 0` | GitHub stars count |
| `featured` | `BOOLEAN` | `DEFAULT FALSE` | Highlighted on top portfolio grid sections |
| `display_order` | `INTEGER` | `DEFAULT 0` | Custom sort order (ascending: `1`, `2`, `3`...) |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of creation |

**Index:**
```sql
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured, display_order ASC);
```

---

### 2.3. `friends_gallery`
Stores authentic memories, team snapshots, hackathon moments, and adventures.

| Column | Type | Constraints / Defaults | Description |
|---|---|---|---|
| `id` | `UUID` | `PRIMARY KEY DEFAULT uuid_generate_v4()` | Unique memory photo identifier |
| `caption` | `VARCHAR(255)` | `NOT NULL` | Short story or memory description |
| `image_url` | `TEXT` | `NOT NULL` | Public URL to the photo / image |
| `location` | `VARCHAR(120)` | Nullable | Geolocation or event location |
| `memory_date` | `DATE` | Nullable | Date when memory occurred (`YYYY-MM-DD`) |
| `vibe_tag` | `VARCHAR(80)` | `DEFAULT 'Adventure'` | Category / vibe tag (e.g., 'Summit', 'Hackathon') |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT CURRENT_TIMESTAMP` | Timestamp of creation |

**Index:**
```sql
CREATE INDEX IF NOT EXISTS idx_friends_created ON friends_gallery(created_at DESC);
```

---

## 3. Data Management Instructions

Future agents and developers can maintain and manipulate the data layer using either the **Supabase Web Console** or **SQL Editor / Client**.

### Option A: Using the Supabase Dashboard UI (Table Editor)
1. Navigate to your project on the [Supabase Dashboard](https://supabase.com/dashboard).
2. Click **Table Editor** on the left navigation bar.
3. Select the desired table (`testimonials`, `projects`, or `friends_gallery`).
4. **Insert Row**: Click **"Insert" > "Insert row"**, populate values, and click **Save**.
   - Note: For `UUID` fields (`id`), leave blank or allow default generation.
   - For `tech_stack` on `projects`, input entries as a PostgreSQL array format or JSON list according to the editor.
5. **Edit Row**: Double-click any cell directly to edit its value and press Enter.
6. **Delete Row**: Right-click the row or check the row selector and click **Delete**.

---

### Option B: Using SQL Queries (Supabase SQL Editor or psql)

#### 1. Adding a Testimonial
```sql
INSERT INTO testimonials (author_name, author_role, company, avatar_url, content, rating, relationship_tag, is_approved)
VALUES (
    'Sarah Chen',
    'Principal Architect',
    'Nova Cloud',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    'Vedant delivers robust, well-architected systems and brings great energy to the team.',
    5,
    'Mentor',
    TRUE
);
```

#### 2. Adding a Project
```sql
INSERT INTO projects (title, punchline, description, tech_stack, github_url, live_url, stars_count, featured, display_order)
VALUES (
    'CosmoSync Engine',
    'Real-time state synchronization over WebSockets',
    'Low-latency bidirectional streaming engine supporting multi-client collaboration.',
    ARRAY['Java 22', 'Spring Boot', 'WebSockets', 'PostgreSQL'],
    'https://github.com/vedantjakarwar/cosmosync',
    'https://cosmosync.vedantjakarwar.com',
    110,
    TRUE,
    4
);
```

#### 3. Adding a Friend / Adventure Memory
```sql
INSERT INTO friends_gallery (caption, image_url, location, memory_date, vibe_tag)
VALUES (
    'All-night hackathon demo day triumph',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'Tech Hub Bangalore',
    '2026-10-15',
    'Late Night Hack'
);
```

#### 4. Updating Records
```sql
-- Update GitHub stars or feature flag
UPDATE projects
SET stars_count = 175, featured = TRUE
WHERE title = 'NebulaStore - Distributed Cache';

-- Approve or moderate a testimonial
UPDATE testimonials
SET is_approved = TRUE
WHERE author_name = 'Sarah Chen';
```

#### 5. Resetting or Seeding from Scratch
To reset or re-seed initial data, execute the repository SQL scripts in order:
1. Run [`database/schema.sql`](file:///u:/store%20room/projects/vedant-portfolio/database/schema.sql)
2. Run [`database/seed.sql`](file:///u:/store%20room/projects/vedant-portfolio/database/seed.sql)
