import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { Testimonial } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-24 px-6 relative overflow-hidden">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/60 text-xs font-mono text-violet-400">
            <span>UNFILTERED COMMUNIQUE</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white">Peer & Mentor Transmissions</h2>
          <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            What engineering leads, architect partners, and teammates say about shipping alongside Vedant.
          </p>
        </div>

        <!-- Slider Container -->
        <div class="relative max-w-4xl mx-auto">
          <div *ngIf="testimonials.length > 0" class="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 relative">
            
            <!-- Big Quote Mark -->
            <div class="absolute top-6 right-8 text-7xl font-serif text-cyan-500/10 select-none">“</div>

            <div class="space-y-6 relative z-10">
              <!-- Star rating -->
              <div class="flex items-center gap-1 text-amber-400 text-lg">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
                <span class="ml-2 text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800/50">
                  {{ currentTestimonial.relationshipTag }}
                </span>
              </div>

              <!-- Quote Body -->
              <p class="text-lg sm:text-2xl text-slate-100 font-light leading-relaxed italic">
                "{{ currentTestimonial.content }}"
              </p>

              <!-- Author Info -->
              <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img 
                  [src]="currentTestimonial.avatarUrl" 
                  [alt]="currentTestimonial.authorName"
                  class="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20"
                />
                <div>
                  <h4 class="font-bold text-white text-base">{{ currentTestimonial.authorName }}</h4>
                  <p class="text-xs text-slate-400 font-mono">{{ currentTestimonial.authorRole }} • <span class="text-cyan-400">{{ currentTestimonial.company }}</span></p>
                </div>
              </div>
            </div>

            <!-- Slide Navigation Controls -->
            <div class="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/60">
              <div class="flex items-center gap-2">
                <button 
                  *ngFor="let t of testimonials; let i = index"
                  (click)="currentIndex = i"
                  [ngClass]="i === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'"
                  class="h-2 rounded-full transition-all duration-300">
                </button>
              </div>

              <div class="flex items-center gap-3">
                <button (click)="prev()" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white flex items-center justify-center transition-all active:scale-95">
                  ←
                </button>
                <button (click)="next()" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white flex items-center justify-center transition-all active:scale-95">
                  →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class TestimonialsSectionComponent implements OnInit {
  private api = inject(PortfolioApiService);
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex] || {
      authorName: '',
      authorRole: '',
      content: '',
      rating: 5
    };
  }

  ngOnInit(): void {
    this.api.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
