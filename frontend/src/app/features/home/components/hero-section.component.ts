import { Component, ElementRef, ViewChild, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTransitionService } from '../../../core/services/theme-transition.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-36 pb-24 px-6 overflow-hidden bg-pop-bg">
      <!-- Playful Decorative Ambient Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-pop-peach/60 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -left-20 w-80 h-80 bg-pop-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- Subtle Grid Pattern Background -->
      <div class="absolute inset-0 bg-[radial-gradient(#f0e6df_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none"></div>

      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
        
        <!-- Left: Bold Pop Studio Typography & High Energy Intro -->
        <div class="flex-1 text-center lg:text-left space-y-7">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-pop-border shadow-sm text-xs font-mono font-bold text-pop-coral">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-pop-coral animate-ping"></span>
            <span>VEDANT JAKARWAR // FULL-THROTTLE DEV & RUNNER</span>
          </div>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-7xl font-black tracking-tight text-pop-dark leading-[1.05]">
            Build fast. <br class="hidden sm:inline">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pop-coral via-pop-orange to-pop-yellow">
              Ship fearlessly.
            </span>
          </h1>

          <!-- Punchy Bio -->
          <p class="text-lg sm:text-xl text-pop-slate max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Backend-focused Software Engineer with 3.8+ years of enterprise experience building scalable, secure, and high-performance applications with Java, Spring Boot, SQL, and modern web architectures.
          </p>

          <!-- Core Focus Callout -->
          <div class="p-4 rounded-2xl bg-white border border-pop-border/80 shadow-sm max-w-lg mx-auto lg:mx-0 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-pop-peach flex items-center justify-center text-2xl flex-shrink-0 animate-wiggle">
              ⚡
            </div>
            <div class="text-xs text-pop-slate text-left">
              <span class="font-bold text-pop-dark block text-sm">Senior Software Engineer at LTIMindtree</span>
              Specialized in transaction processing, microservices, database modernization, and cloud automation.
            </div>
          </div>

          <!-- Massive Unmissable Bouncy CTA Button -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              (click)="openCosmicResume()"
              class="group relative w-full sm:w-auto px-9 py-5 rounded-2xl bg-gradient-to-r from-pop-coral via-pop-orange to-pop-coral text-white font-black text-base sm:text-lg tracking-wide uppercase shadow-pop-button hover:translate-y-1 active:translate-y-2 active:shadow-pop-button-active transition-all duration-200 flex items-center justify-center gap-3">
              <span>HIRE ME / VIEW RESUME</span>
              <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
            </button>

            <a 
              href="#projects" 
              class="w-full sm:w-auto px-7 py-5 rounded-2xl bg-white hover:bg-pop-peach/40 text-pop-dark font-bold text-sm tracking-wide border-2 border-pop-border transition-all flex items-center justify-center gap-2 hover:border-pop-coral shadow-sm">
              <span>EXPLORE PROJECTS</span>
              <span class="text-pop-coral">⚡</span>
            </a>
          </div>

          <!-- Quick Stats Pills in Pop Studio Style -->
          <div class="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0 text-left">
            <div class="bg-white p-4 rounded-2xl border border-pop-border shadow-sm hover:border-pop-coral/40 transition-colors">
              <div class="text-2xl font-black text-pop-coral font-mono">3.8+</div>
              <div class="text-xs text-pop-slate font-bold mt-0.5">Years Experience</div>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-pop-border shadow-sm hover:border-pop-orange/40 transition-colors">
              <div class="text-2xl font-black text-pop-orange font-mono">90%</div>
              <div class="text-xs text-pop-slate font-bold mt-0.5">Test Coverage</div>
            </div>
            <div class="bg-white p-4 rounded-2xl border border-pop-border shadow-sm hover:border-pop-yellow/80 transition-colors">
              <div class="text-2xl font-black text-pop-dark font-mono">40%</div>
              <div class="text-xs text-pop-slate font-bold mt-0.5">Batch Automation</div>
            </div>
          </div>

        </div>

        <!-- Right: 3D Mouse-Tilt Avatar Card -->
        <div class="flex-1 flex justify-center relative perspective-1000">
          <div 
            #tiltCard
            (mousemove)="onMouseMove($event)"
            (mouseleave)="onMouseLeave()"
            [style.transform]="cardTransform"
            class="relative w-80 h-96 sm:w-96 sm:h-[450px] rounded-3xl transition-transform duration-150 ease-out transform-style-3d cursor-pointer select-none">
            
            <!-- Shadow Card Layer behind -->
            <div class="absolute -inset-2 bg-gradient-to-r from-pop-coral via-pop-orange to-pop-yellow rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <!-- Card Container -->
            <div class="relative w-full h-full rounded-3xl bg-white p-3 border-4 border-white shadow-2xl flex flex-col justify-between overflow-hidden">
              
              <!-- Clean Avatar Photo (No Goggles/Tilt Badges) -->
              <div class="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden bg-pop-peach">
                <img 
                  [src]="heroPhotoUrl" 
                  (error)="handleImageError()"
                  alt="Vedant Jakarwar" 
                  class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <!-- Card Bottom info bar -->
              <div class="p-3 bg-pop-bg rounded-2xl border border-pop-border flex items-center justify-between">
                <div>
                  <h3 class="font-black text-sm text-pop-dark">Vedant Jakarwar</h3>
                  <p class="text-[11px] text-pop-slate font-medium">Senior Software Engineer • LTIMindtree</p>
                </div>
                <div class="w-9 h-9 rounded-xl bg-pop-coral flex items-center justify-center text-white font-mono font-black text-xs shadow-md shadow-pop-coral/30">
                  VJ
                </div>
              </div>

            </div>

            <!-- Floating Micro-Pill: Java & Spring -->
            <div 
              class="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-white border-2 border-pop-orange/40 text-xs font-mono font-black text-pop-dark shadow-xl flex items-center gap-2 animate-bounce-subtle">
              <span>☕</span>
              <span>Java + Spring Boot</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroSectionComponent {
  private themeService = inject(ThemeTransitionService);

  @ViewChild('tiltCard') tiltCardRef!: ElementRef<HTMLDivElement>;

  heroPhotoUrl = 'assets/images/profile/vedant-hero.jpg';
  cardTransform = 'rotateX(0deg) rotateY(0deg)';

  onMouseMove(e: MouseEvent): void {
    const card = this.tiltCardRef?.nativeElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max rotation angles (e.g., 18 degrees)
    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    this.cardTransform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
  }

  onMouseLeave(): void {
    this.cardTransform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  handleImageError(): void {
    // Fallback if local photo isn't available
    this.heroPhotoUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
  }

  openCosmicResume(): void {
    this.themeService.transitionTo('/resume');
  }
}
