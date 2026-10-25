import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTransitionService } from '../../core/services/theme-transition.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-8 pointer-events-none">
      <div 
        class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full pointer-events-auto transition-all duration-500 shadow-xl"
        [ngClass]="{
          'bg-white/85 backdrop-blur-xl border border-pop-border/90 text-pop-dark shadow-pop-coral/5': themeService.currentTheme() === 'pop',
          'glass-panel border-slate-700/50 backdrop-blur-xl text-white shadow-2xl shadow-cyan-500/10': themeService.currentTheme() === 'cosmic'
        }">
        
        <!-- Logo / Brand -->
        <a 
          (click)="navigateTo('/')" 
          class="flex items-center gap-3 group cursor-pointer">
          <div 
            class="w-10 h-10 rounded-2xl flex items-center justify-center font-bold font-mono tracking-tighter text-sm transition-transform duration-300 group-hover:scale-105 shadow-md"
            [ngClass]="{
              'bg-gradient-to-tr from-pop-coral to-pop-orange text-white shadow-pop-coral/30': themeService.currentTheme() === 'pop',
              'bg-gradient-to-tr from-cyan-500 via-sky-400 to-violet-500 text-cosmic-950 shadow-cyan-500/30': themeService.currentTheme() === 'cosmic'
            }">
            VJ
          </div>
          <div class="flex flex-col">
            <span 
              class="font-black text-sm tracking-wide transition-colors"
              [ngClass]="{
                'text-pop-dark group-hover:text-pop-coral': themeService.currentTheme() === 'pop',
                'text-white group-hover:text-cyan-300': themeService.currentTheme() === 'cosmic'
              }">
              VEDANT JAKARWAR
            </span>
            <span 
              class="text-[10px] font-mono flex items-center gap-1.5"
              [ngClass]="{
                'text-pop-slate': themeService.currentTheme() === 'pop',
                'text-slate-400': themeService.currentTheme() === 'cosmic'
              }">
              <span class="w-2 h-2 rounded-full animate-ping" [ngClass]="themeService.currentTheme() === 'pop' ? 'bg-pop-coral' : 'bg-emerald-400'"></span>
              <span>{{ themeService.currentTheme() === 'pop' ? 'POP STUDIO // LIVE' : 'COSMIC ORBIT // ACTIVE' }}</span>
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
          <ng-container *ngIf="themeService.currentTheme() === 'pop'">
            <a href="#projects" class="text-pop-slate hover:text-pop-coral transition-colors">Apps & Work</a>
            <a href="#vibe" class="text-pop-slate hover:text-pop-coral transition-colors">Lifestyle & Vibe</a>
            <a href="#friends" class="text-pop-slate hover:text-pop-coral transition-colors">Crew</a>
            <a href="#skills" class="text-pop-slate hover:text-pop-coral transition-colors">Tech Radar</a>
          </ng-container>

          <ng-container *ngIf="themeService.currentTheme() === 'cosmic'">
            <a (click)="navigateTo('/')" class="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer">← Home Studio</a>
            <a href="#summary" class="text-slate-300 hover:text-cyan-400 transition-colors">Executive</a>
            <a href="#experience" class="text-slate-300 hover:text-cyan-400 transition-colors">Expeditions</a>
            <a href="#skills" class="text-slate-300 hover:text-cyan-400 transition-colors">Stack Radar</a>
          </ng-container>

          <!-- Cosmic CV / macOS Route Transition Trigger -->
          <button 
            (click)="toggleResumeRoute()"
            class="px-4 py-1.5 rounded-full font-mono text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
            [ngClass]="{
              'bg-gradient-to-r from-cosmic-900 to-cosmic-850 text-cyan-300 border border-slate-700 hover:border-cyan-400 shadow-md': themeService.currentTheme() === 'pop',
              'bg-gradient-to-r from-pop-coral to-pop-orange text-white font-bold shadow-lg shadow-pop-coral/30': themeService.currentTheme() === 'cosmic'
            }">
            <span>{{ themeService.currentTheme() === 'pop' ? 'Cosmic CV' : 'Pop Studio' }}</span>
            <span>{{ themeService.currentTheme() === 'pop' ? '🌌' : '🎨' }}</span>
          </button>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center gap-3">
          <a 
            href="mailto:vedantjakarwar@gmail.com" 
            class="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 active:scale-95 shadow-md"
            [ngClass]="{
              'bg-pop-dark hover:bg-pop-coral text-white shadow-pop-coral/20': themeService.currentTheme() === 'pop',
              'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25': themeService.currentTheme() === 'cosmic'
            }">
            <span class="relative z-10 flex items-center gap-1.5">
              <span>Hire Me</span>
              <span class="text-sm">🔥</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  protected themeService = inject(ThemeTransitionService);

  navigateTo(url: string): void {
    this.themeService.transitionTo(url);
  }

  toggleResumeRoute(): void {
    if (this.themeService.currentTheme() === 'pop') {
      this.themeService.transitionTo('/resume');
    } else {
      this.themeService.transitionTo('/');
    }
  }
}
