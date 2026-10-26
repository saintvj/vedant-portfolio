export interface Testimonial {
  id?: string;
  authorName?: string;
  author_name?: string;
  authorRole?: string;
  author_role?: string;
  company?: string;
  avatarUrl?: string;
  avatar_url?: string;
  content: string;
  rating: number;
  relationshipTag?: string;
  relationship_tag?: string;
  isApproved?: boolean;
  is_approved?: boolean;
  createdAt?: string;
  created_at?: string;
}

export interface Project {
  id?: string;
  title: string;
  punchline: string;
  description: string;
  techStack?: string[];
  tech_stack?: string[];
  githubUrl?: string;
  github_url?: string;
  liveUrl?: string;
  live_url?: string;
  starsCount?: number;
  stars_count?: number;
  featured?: boolean;
  displayOrder?: number;
  display_order?: number;
  createdAt?: string;
  created_at?: string;
}

export interface FriendPhoto {
  id?: string;
  caption: string;
  imageUrl?: string;
  image_url?: string;
  location?: string;
  memoryDate?: string;
  memory_date?: string;
  vibeTag?: string;
  vibe_tag?: string;
  createdAt?: string;
  created_at?: string;
}

export interface MetricCard {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

