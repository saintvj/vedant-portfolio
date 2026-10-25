-- =============================================================================
-- Vedant Jakarwar Portfolio Database Schema (PostgreSQL / Supabase / Neon ready)
-- Target Host: Free-tier PostgreSQL
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_name VARCHAR(120) NOT NULL,
    author_role VARCHAR(150) NOT NULL,
    company VARCHAR(150),
    avatar_url TEXT,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
    relationship_tag VARCHAR(80) DEFAULT 'Colleague',
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    punchline VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tech_stack TEXT[] NOT NULL DEFAULT '{}',
    github_url TEXT,
    live_url TEXT,
    stars_count INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Friends Gallery Table
CREATE TABLE IF NOT EXISTS friends_gallery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caption VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    location VARCHAR(120),
    memory_date DATE,
    vibe_tag VARCHAR(80) DEFAULT 'Adventure',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured, display_order ASC);
CREATE INDEX IF NOT EXISTS idx_friends_created ON friends_gallery(created_at DESC);
