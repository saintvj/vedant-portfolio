import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTransitionService } from '../../core/services/theme-transition.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer 
      class="py-14 px-6 relative z-10 transition-colors duration-500 border-t"
      [ngClass]="{
        'bg-white border-pop-border text-pop-dark': themeService.currentTheme() === 'pop',
        'bg-cosmic-950 border-slate-800 text-slate-100': themeService.currentTheme() === 'cosmic'
      }">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div class="flex items-center gap-3">
            <span class="font-black text-xl tracking-tight">VEDANT JAKARWAR</span>
            <span 
              class="px-2.5 py-0.5 text-[10px] uppercase font-mono font-bold rounded-full"
              [ngClass]="{
                'bg-pop-peach text-pop-coral border border-pop-coral/30': themeService.currentTheme() === 'pop',
                'bg-cyan-950/80 text-cyan-400 border border-cyan-800/50': themeService.currentTheme() === 'cosmic'
              }">
              {{ themeService.currentTheme() === 'pop' ? 'Pop Studio v2026.4' : 'Cosmic Orbit v2026.4' }}
            </span>
          </div>
          <p 
            class="text-xs max-w-sm leading-relaxed"
            [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate' : 'text-slate-400'">
            "Live fearlessly, cycle fiercely, code like a billion users depend on your distributed heartbeat."
          </p>
        </div>

        <div class="flex items-center gap-6 text-sm font-semibold">
          <a href="https://github.com/vedantjakarwar" target="_blank" rel="noreferrer" 
             [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate hover:text-pop-coral' : 'text-slate-400 hover:text-cyan-400'"
             class="transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/vedantjakarwar" target="_blank" rel="noreferrer" 
             [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate hover:text-pop-coral' : 'text-slate-400 hover:text-cyan-400'"
             class="transition-colors">LinkedIn</a>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer" 
             [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate hover:text-pop-coral' : 'text-slate-400 hover:text-cyan-400'"
             class="transition-colors">LeetCode</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" 
             [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate hover:text-pop-coral' : 'text-slate-400 hover:text-cyan-400'"
             class="transition-colors">X / Twitter</a>
        </div>

        <div 
          class="text-xs font-mono text-center md:text-right"
          [ngClass]="themeService.currentTheme() === 'pop' ? 'text-pop-slate/80' : 'text-slate-500'">
          © 2026 Vedant Jakarwar. Hand-crafted with Angular 18, Tailwind & Spring Boot.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  protected themeService = inject(ThemeTransitionService);
}
