import { Injectable, inject } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SupabaseService } from '../../services/supabase.service';
import { Testimonial, Project, FriendPhoto } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {
  private supabaseService = inject(SupabaseService);

  // Fallback initial data to ensure the UI is 100% functional out-of-the-box
  private mockTestimonials: Testimonial[] = [
    {
      id: '1',
      author_name: 'Aarav Sharma',
      author_role: 'Senior Engineering Lead',
      company: 'CloudScale Inc.',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      content: 'Vedant writes backend services like he lives life: bold, uncompromising on reliability, and lightning fast. Fixed our deadlock issue before morning standup.',
      rating: 5,
      relationship_tag: 'Tech Lead'
    },
    {
      id: '2',
      author_name: 'Priya Nair',
      author_role: 'Lead Frontend Architect',
      company: 'HyperLoop Labs',
      avatar_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      content: 'Pairing with Vedant is pure electricity. His eye for high-polish dark cosmic themes combined with rock-solid Angular architecture blew our stakeholders away.',
      rating: 5,
      relationship_tag: 'Design Partner'
    },
    {
      id: '3',
      author_name: 'Rohan Deshmukh',
      author_role: 'Staff DevOps Engineer',
      company: 'Apex Systems',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      content: 'The kind of engineer who tackles complex distributed systems problems with a grin and a witty joke. Total game-changer on any mission-critical squad.',
      rating: 5,
      relationship_tag: 'Mentor'
    }
  ];

  private mockProjects: Project[] = [
    {
      id: '1',
      title: 'Store Management and Ordering Web Application',
      punchline: 'Full-stack store management system with WhatsApp workflow',
      description: 'Built and deployed a full-stack store management platform using Java 17, Spring Boot, Thymeleaf, and PostgreSQL. Features Spring Security with BCrypt encryption, role-based access control, WhatsApp-based ordering workflow, and containerized deployment on Render with automated CI/CD pipelines.',
      tech_stack: ['Java 17', 'Spring Boot', 'Thymeleaf', 'PostgreSQL', 'Docker', 'Render'],
      github_url: 'https://github.com/saintvj',
      live_url: 'https://store-springboot-q3ha.onrender.com/',
      stars_count: 24,
      featured: true,
      display_order: 1
    },
    {
      id: '2',
      title: 'Online Exam Portal',
      punchline: 'Full-stack examination platform with automated evaluation',
      description: 'Developed an online examination portal using Spring Boot, Angular, Hibernate, and MySQL. Features reactive forms and component architecture with TypeScript, JWT-based authentication, role-based authorization, and automated exam grading.',
      tech_stack: ['Angular', 'TypeScript', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
      github_url: 'https://github.com/saintvj',
      live_url: 'https://github.com/saintvj',
      stars_count: 18,
      featured: true,
      display_order: 2
    },
    {
      id: '3',
      title: 'SnapProof – Digital Evidence Generator',
      punchline: 'Python-based SaaS converting WhatsApp exports into court-admissible PDFs',
      description: 'Engineered a specialized Python SaaS tool to convert exported WhatsApp chat archives into verified, tamper-evident court-admissible PDF packages; containerized and deployed live on Render.',
      tech_stack: ['Python', 'SaaS', 'PDF Automation', 'Render', 'Docker'],
      github_url: 'https://github.com/saintvj',
      live_url: 'https://snapproof-tool.onrender.com/',
      stars_count: 15,
      featured: true,
      display_order: 3
    }
  ];

  private mockPhotos: FriendPhoto[] = [
    {
      id: '1',
      caption: 'Summit conquest at dawn — 4,200m above sea level with the core crew',
      image_url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      location: 'Himalayan Ridge',
      memory_date: '2026-05-18',
      vibe_tag: 'Summit'
    },
    {
      id: '2',
      caption: '36-hour hackathon sprint. 4 coffees in, 0 bugs tolerated',
      image_url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
      location: 'Bengaluru Hack House',
      memory_date: '2026-08-12',
      vibe_tag: 'Late Night Hack'
    },
    {
      id: '3',
      caption: 'Midnight desert stargazing run — recalibrating cosmic perspective',
      image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      location: 'Spiti Valley',
      memory_date: '2026-09-04',
      vibe_tag: 'Adventure'
    },
    {
      id: '4',
      caption: 'Weekend track day & adrenaline therapy with the brothers',
      image_url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      location: 'BIC Circuit',
      memory_date: '2026-03-22',
      vibe_tag: 'Adrenaline'
    }
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return from(this.supabaseService.client.from('testimonials').select('*')).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return this.mockTestimonials;
        }
        return res.data as Testimonial[];
      }),
      catchError(() => of(this.mockTestimonials))
    );
  }

  getProjects(): Observable<Project[]> {
    return from(
      this.supabaseService.client
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true })
    ).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return this.mockProjects;
        }
        return res.data as Project[];
      }),
      catchError(() => of(this.mockProjects))
    );
  }

  getFriendPhotos(): Observable<FriendPhoto[]> {
    return from(this.supabaseService.client.from('friends_gallery').select('*')).pipe(
      map(res => {
        if (res.error || !res.data || res.data.length === 0) {
          return this.mockPhotos;
        }
        return res.data as FriendPhoto[];
      }),
      catchError(() => of(this.mockPhotos))
    );
  }
}

