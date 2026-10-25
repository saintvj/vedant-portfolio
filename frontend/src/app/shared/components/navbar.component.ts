import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-8">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full glass-panel border border-slate-700/50 backdrop-blur-xl shadow-2xl">
        <!-- Logo / Brand -->
        <a routerLink="/" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-violet-500 p-[2px] transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-cyan-500/30">
            <div class="w-full h-full bg-cosmic-950 rounded-full flex items-center justify-center">
              <span class="text-xs font-bold text-cyan-400 font-mono tracking-tighter">VJ</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">VEDANT JAKARWAR</span>
            <span class="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              LIVE-MODE: ACTIVE
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a routerLink="/" fragment="about" class="hover:text-cyan-400 transition-colors">Mission</a>
          <a routerLink="/" fragment="skills" class="hover:text-cyan-400 transition-colors">Radar</a>
          <a routerLink="/" fragment="tracker" class="hover:text-cyan-400 transition-colors">Telemetry</a>
          <a routerLink="/" fragment="testimonials" class="hover:text-cyan-400 transition-colors">Transmissions</a>
          <a routerLink="/" fragment="friends" class="hover:text-cyan-400 transition-colors">Crew</a>
          <a routerLink="/resume" routerLinkActive="text-cyan-400 border-cyan-400 font-semibold" class="px-3 py-1 rounded-full border border-slate-700 hover:border-cyan-400/80 hover:text-cyan-300 transition-all flex items-center gap-1 text-xs">
            <span>Cosmic CV</span>
            <span class="text-cyan-400">⚡</span>
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center gap-3">
          <a href="mailto:vedantjakarwar@gmail.com" class="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95">
            <span class="relative z-10 flex items-center gap-1.5">
              <span>Hire Me</span>
              <span class="text-sm">🚀</span>
            </span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {}
