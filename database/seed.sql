-- =============================================================================
-- Seed Data for Vedant Jakarwar Portfolio
-- =============================================================================

INSERT INTO testimonials (author_name, author_role, company, avatar_url, content, rating, relationship_tag)
VALUES
('Aarav Sharma', 'Senior Engineering Lead', 'CloudScale Inc.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', 'Vedant writes backend services like he lives life: bold, uncompromising on reliability, and lightning fast. Fixed our deadlock issue before morning standup.', 5, 'Tech Lead'),
('Priya Nair', 'Lead Frontend Architect', 'HyperLoop Labs', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', 'Pairing with Vedant is pure electricity. His eye for high-polish dark cosmic themes combined with rock-solid Angular architecture blew our stakeholders away.', 5, 'Design Partner'),
('Rohan Deshmukh', 'Staff DevOps Engineer', 'Apex Systems', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', 'The kind of engineer who tackles complex distributed systems problems with a grin and a witty joke. Total game-changer on any mission-critical squad.', 5, 'Mentor');

INSERT INTO projects (title, punchline, description, tech_stack, github_url, live_url, stars_count, featured, display_order)
VALUES
('NebulaStore - Distributed Cache', 'Zero-latency memory grid with cosmic fault tolerance', 'A high-throughput distributed key-value store built in Java 22 featuring consistent hashing, cluster gossip protocols, and Raft consensus replication.', ARRAY['Java 22', 'Spring Boot', 'PostgreSQL', 'Docker', 'gRPC'], 'https://github.com/vedantjakarwar/nebulastore', 'https://nebulastore.vedantjakarwar.com', 142, TRUE, 1),
('AstroMetrics Portfolio Engine', 'Next-gen developer showcase with real-time analytics', 'Full-stack portfolio engine orchestrating live GitHub commits, LeetCode progress telemetry, and modern micro-interactions.', ARRAY['Angular 18', 'TypeScript', 'Tailwind CSS', 'Java Spring Boot'], 'https://github.com/vedantjakarwar/vedant-portfolio', 'https://vedantjakarwar.com', 89, TRUE, 2),
('QueryNova SQL Visualizer', 'Turn complex recursive CTEs into intuitive cosmic orbital maps', 'Interactive database query explainer that diagrams deep relational query execution plans into smooth, step-by-step visual graphs.', ARRAY['Java', 'SQL', 'PostgreSQL EXPLAIN', 'Angular'], 'https://github.com/vedantjakarwar/querynova', 'https://querynova.vedantjakarwar.com', 64, TRUE, 3);

INSERT INTO friends_gallery (caption, image_url, location, memory_date, vibe_tag)
VALUES
('Summit conquest at dawn — 4,200m above sea level with the core crew', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', 'Himalayan Ridge', '2026-05-18', 'Summit'),
('36-hour hackathon sprint. 4 coffees in, 0 bugs tolerated', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', 'Bengaluru Hack House', '2026-08-12', 'Late Night Hack'),
('Midnight desert stargazing run — recalibrating cosmic perspective', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', 'Spiti Valley', '2026-09-04', 'Adventure'),
('Weekend track day & adrenaline therapy with the brothers', 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80', 'BIC Circuit', '2026-03-22', 'Adrenaline');
