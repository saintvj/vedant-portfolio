import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { Testimonial } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-24 px-6 relative overflow-hidden bg-pop-bg border-t border-pop-border">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pop-border text-xs font-mono font-bold text-pop-coral shadow-sm">
            <span>PEER REVIEWS & VOUCHES</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-pop-dark tracking-tight">
            Peer & Mentor Transmissions
          </h2>
          <p class="text-pop-slate max-w-xl mx-auto text-base">
            What engineering leads, architect partners, and teammates say about shipping alongside Vedant.
          </p>
        </div>

        <!-- Slider Container -->
        <div class="relative max-w-3xl mx-auto">
          <div *ngIf="testimonials.length > 0" class="pop-card p-8 sm:p-12 relative">
            
            <!-- Big Quote Mark -->
            <div class="absolute top-6 right-8 text-7xl font-serif text-pop-peach select-none">“</div>

            <div class="space-y-6 relative z-10">
              <!-- Star rating -->
              <div class="flex items-center gap-1 text-amber-500 text-lg">
                <span *ngFor="let s of [1,2,3,4,5]">★</span>
                <span class="ml-2 text-xs font-mono font-bold text-pop-coral bg-pop-peach px-2.5 py-0.5 rounded-full">
                  {{ currentTestimonial.relationshipTag }}
                </span>
              </div>

              <!-- Quote Body -->
              <p class="text-lg sm:text-2xl text-pop-dark font-medium leading-relaxed italic">
                "{{ currentTestimonial.content }}"
              </p>

              <!-- Author Info -->
              <div class="flex items-center gap-4 pt-4 border-t border-pop-border">
                <img 
                  [src]="currentTestimonial.avatarUrl" 
                  [alt]="currentTestimonial.authorName"
                  class="w-14 h-14 rounded-full object-cover border-2 border-pop-coral shadow-md"
                />
                <div>
                  <h4 class="font-black text-pop-dark text-base">{{ currentTestimonial.authorName }}</h4>
                  <p class="text-xs text-pop-slate font-mono">{{ currentTestimonial.authorRole }} • <span class="text-pop-coral font-bold">{{ currentTestimonial.company }}</span></p>
                </div>
              </div>
            </div>

            <!-- Slide Navigation Controls -->
            <div class="flex items-center justify-between mt-8 pt-4 border-t border-pop-border">
              <div class="flex items-center gap-2">
                <button 
                  *ngFor="let t of testimonials; let i = index"
                  (click)="currentIndex = i"
                  [ngClass]="i === currentIndex ? 'w-8 bg-pop-coral' : 'w-2 bg-slate-300'"
                  class="h-2 rounded-full transition-all duration-300">
                </button>
              </div>

              <div class="flex items-center gap-3">
                <button 
                  (click)="prev()" 
                  class="w-10 h-10 rounded-full bg-pop-bg border border-pop-border hover:bg-pop-dark hover:text-white text-pop-dark flex items-center justify-center font-bold transition-all active:scale-95 shadow-sm">
                  ←
                </button>
                <button 
                  (click)="next()" 
                  class="w-10 h-10 rounded-full bg-pop-bg border border-pop-border hover:bg-pop-dark hover:text-white text-pop-dark flex items-center justify-center font-bold transition-all active:scale-95 shadow-sm">
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
