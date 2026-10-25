export interface Testimonial {
  id?: string;
  authorName: string;
  authorRole: string;
  company?: string;
  avatarUrl?: string;
  content: string;
  rating: number;
  relationshipTag?: string;
  isApproved?: boolean;
  createdAt?: string;
}

export interface Project {
  id?: string;
  title: string;
  punchline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  starsCount?: number;
  featured?: boolean;
  displayOrder?: number;
  createdAt?: string;
}

export interface FriendPhoto {
  id?: string;
  caption: string;
  imageUrl: string;
  location?: string;
  memoryDate?: string;
  vibeTag: string;
  createdAt?: string;
}

export interface MetricCard {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}
