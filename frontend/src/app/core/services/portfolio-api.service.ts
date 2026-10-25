import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Testimonial, Project, FriendPhoto } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api';

  // Fallback initial data to ensure the UI is 100% functional out-of-the-box
  private mockTestimonials: Testimonial[] = [
    {
      id: '1',
      authorName: 'Aarav Sharma',
      authorRole: 'Senior Engineering Lead',
      company: 'CloudScale Inc.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      content: 'Vedant writes backend services like he lives life: bold, uncompromising on reliability, and lightning fast. Fixed our deadlock issue before morning standup.',
      rating: 5,
      relationshipTag: 'Tech Lead'
    },
    {
      id: '2',
      authorName: 'Priya Nair',
      authorRole: 'Lead Frontend Architect',
      company: 'HyperLoop Labs',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      content: 'Pairing with Vedant is pure electricity. His eye for high-polish dark cosmic themes combined with rock-solid Angular architecture blew our stakeholders away.',
      rating: 5,
      relationshipTag: 'Design Partner'
    },
    {
      id: '3',
      authorName: 'Rohan Deshmukh',
      authorRole: 'Staff DevOps Engineer',
      company: 'Apex Systems',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      content: 'The kind of engineer who tackles complex distributed systems problems with a grin and a witty joke. Total game-changer on any mission-critical squad.',
      rating: 5,
      relationshipTag: 'Mentor'
    }
  ];

  private mockProjects: Project[] = [
    {
      id: '1',
      title: 'NebulaStore - Distributed Cache',
      punchline: 'Zero-latency memory grid with cosmic fault tolerance',
      description: 'A high-throughput distributed key-value store built in Java 22 featuring consistent hashing, cluster gossip protocols, and Raft consensus replication.',
      techStack: ['Java 22', 'Spring Boot', 'PostgreSQL', 'Docker', 'gRPC'],
      githubUrl: 'https://github.com/vedantjakarwar/nebulastore',
      liveUrl: 'https://nebulastore.vedantjakarwar.com',
      starsCount: 142,
      featured: true,
      displayOrder: 1
    },
    {
      id: '2',
      title: 'AstroMetrics Portfolio Engine',
      punchline: 'Next-gen developer showcase with real-time analytics',
      description: 'Full-stack portfolio engine orchestrating live GitHub commits, LeetCode progress telemetry, and modern micro-interactions.',
      techStack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'Java Spring Boot'],
      githubUrl: 'https://github.com/vedantjakarwar/vedant-portfolio',
      liveUrl: 'https://vedantjakarwar.com',
      starsCount: 89,
      featured: true,
      displayOrder: 2
    },
    {
      id: '3',
      title: 'QueryNova SQL Visualizer',
      punchline: 'Turn complex recursive CTEs into intuitive cosmic orbital maps',
      description: 'Interactive database query explainer that diagrams deep relational query execution plans into smooth, step-by-step visual graphs.',
      techStack: ['Java', 'SQL', 'PostgreSQL EXPLAIN', 'Angular'],
      githubUrl: 'https://github.com/vedantjakarwar/querynova',
      liveUrl: 'https://querynova.vedantjakarwar.com',
      starsCount: 64,
      featured: true,
      displayOrder: 3
    }
  ];

  private mockPhotos: FriendPhoto[] = [
    {
      id: '1',
      caption: 'Summit conquest at dawn — 4,200m above sea level with the core crew',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      location: 'Himalayan Ridge',
      memoryDate: '2026-05-18',
      vibeTag: 'Summit'
    },
    {
      id: '2',
      caption: '36-hour hackathon sprint. 4 coffees in, 0 bugs tolerated',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
      location: 'Bengaluru Hack House',
      memoryDate: '2026-08-12',
      vibeTag: 'Late Night Hack'
    },
    {
      id: '3',
      caption: 'Midnight desert stargazing run — recalibrating cosmic perspective',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      location: 'Spiti Valley',
      memoryDate: '2026-09-04',
      vibeTag: 'Adventure'
    },
    {
      id: '4',
      caption: 'Weekend track day & adrenaline therapy with the brothers',
      imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      location: 'BIC Circuit',
      memoryDate: '2026-03-22',
      vibeTag: 'Adrenaline'
    }
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.baseUrl}/testimonials`).pipe(
      catchError(() => of(this.mockTestimonials))
    );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`).pipe(
      catchError(() => of(this.mockProjects))
    );
  }

  getFriendPhotos(): Observable<FriendPhoto[]> {
    return this.http.get<FriendPhoto[]>(`${this.baseUrl}/friends-gallery`).pipe(
      catchError(() => of(this.mockPhotos))
    );
  }
}
