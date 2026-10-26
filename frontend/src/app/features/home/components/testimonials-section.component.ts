import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../../services/supabase.service';
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
                  {{ currentTestimonial.relationshipTag || currentTestimonial.relationship_tag }}
                </span>
              </div>

              <!-- Quote Body -->
              <p class="text-lg sm:text-2xl text-pop-dark font-medium leading-relaxed italic">
                "{{ currentTestimonial.content }}"
              </p>

              <!-- Author Info -->
              <div class="flex items-center gap-4 pt-4 border-t border-pop-border">
                <img 
                  [src]="currentTestimonial.avatarUrl || currentTestimonial.avatar_url" 
                  [alt]="currentTestimonial.authorName || currentTestimonial.author_name"
                  class="w-14 h-14 rounded-full object-cover border-2 border-pop-coral shadow-md"
                />
                <div>
                  <h4 class="font-black text-pop-dark text-base">{{ currentTestimonial.authorName || currentTestimonial.author_name }}</h4>
                  <p class="text-xs text-pop-slate font-mono">{{ currentTestimonial.authorRole || currentTestimonial.author_role }} • <span class="text-pop-coral font-bold">{{ currentTestimonial.company }}</span></p>
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
  private supabaseService = inject(SupabaseService);
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  private defaultTestimonials: Testimonial[] = [
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

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex] || {
      author_name: '',
      author_role: '',
      content: '',
      rating: 5
    };
  }

  async ngOnInit(): Promise<void> {
    try {
      const { data, error } = await this.supabaseService.client
        .from('testimonials')
        .select('*');

      if (error || !data || data.length === 0) {
        this.testimonials = this.defaultTestimonials;
      } else {
        this.testimonials = data as Testimonial[];
      }
    } catch {
      this.testimonials = this.defaultTestimonials;
    }
  }

  next(): void {
    if (this.testimonials.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }
  }

  prev(): void {
    if (this.testimonials.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    }
  }
}

