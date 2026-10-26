import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../../services/supabase.service';
import { Project } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-projects-grid-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-24 px-6 bg-white relative">
      <div class="max-w-6xl mx-auto space-y-14">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-peach text-xs font-mono font-black text-pop-coral border border-pop-coral/30">
              <span>FEATURED SOFTWARE & ARCHITECTURES</span>
            </div>
            <h2 class="text-4xl sm:text-5xl font-black text-pop-dark tracking-tight">
              Selected Apps & Projects
            </h2>
            <p class="text-pop-slate max-w-xl text-base font-normal">
              Zero-latency distributed caches, SQL orbital visualizers, and reactive web applications engineered for speed and scale.
            </p>
          </div>
          
          <div class="flex items-center gap-2 text-xs font-mono text-pop-slate bg-pop-bg px-4 py-2 rounded-xl border border-pop-border">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>DIRECT SUPABASE REST ACTIVE</span>
          </div>
        </div>

        <!-- Project Cards Modular Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let project of projects" 
            class="pop-card p-6 flex flex-col justify-between group hover:border-pop-coral/40 relative">
            
            <div class="space-y-4">
              <!-- Top bar: Stars & Order -->
              <div class="flex items-center justify-between">
                <span class="w-10 h-10 rounded-xl bg-pop-peach flex items-center justify-center text-xl font-bold">
                  ⚡
                </span>
                <div class="flex items-center gap-2">
                  <span *ngIf="project.starsCount || project.stars_count" class="flex items-center gap-1 text-xs font-mono font-bold text-pop-dark bg-pop-bg px-2.5 py-1 rounded-full border border-pop-border">
                    <span class="text-amber-500">★</span>
                    <span>{{ project.starsCount ?? project.stars_count }}</span>
                  </span>
                  <span *ngIf="project.featured" class="px-2.5 py-0.5 rounded-full bg-pop-coral text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>

              <!-- Title & Punchline -->
              <div>
                <h3 class="text-xl font-black text-pop-dark group-hover:text-pop-coral transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-xs font-mono text-pop-coral font-bold mt-1">
                  {{ project.punchline }}
                </p>
              </div>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-pop-slate leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech Stack Tags & Links -->
            <div class="mt-6 pt-4 border-t border-pop-border space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span 
                  *ngFor="let tech of (project.techStack || project.tech_stack || [])" 
                  class="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-pop-bg text-pop-dark border border-pop-border">
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <a 
                  *ngIf="project.githubUrl || project.github_url" 
                  [href]="project.githubUrl || project.github_url" 
                  target="_blank" 
                  class="flex-1 py-2 rounded-xl bg-pop-bg hover:bg-pop-dark hover:text-white text-pop-dark text-xs font-mono font-bold text-center border border-pop-border transition-all flex items-center justify-center gap-1.5">
                  <span>Source Code</span>
                  <span>↗</span>
                </a>
                <a 
                  *ngIf="project.liveUrl || project.live_url" 
                  [href]="project.liveUrl || project.live_url" 
                  target="_blank" 
                  class="flex-1 py-2 rounded-xl bg-pop-coral hover:bg-pop-orange text-white text-xs font-mono font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-pop-coral/30">
                  <span>Live Preview</span>
                  <span>⚡</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsGridSectionComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  projects: Project[] = [];

  private defaultProjects: Project[] = [
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

  async ngOnInit(): Promise<void> {
    try {
      const { data, error } = await this.supabaseService.client
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error || !data || data.length === 0) {
        this.projects = this.defaultProjects;
      } else {
        this.projects = data as Project[];
      }
    } catch {
      this.projects = this.defaultProjects;
    }
  }
}

