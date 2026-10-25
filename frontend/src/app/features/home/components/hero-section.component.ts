import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section id="about" class="relative pt-36 pb-20 px-6 overflow-hidden">
      <!-- Ambient Glow Orbs -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-sky-500/10 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        <!-- Left: Punchy Text & Persona -->
        <div class="flex-1 text-center lg:text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner">
            <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SYSTEM STATUS: FULL THROTTLE</span>
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build fast. <br>
            <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Live fearlessly.
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            I'm <span class="text-white font-semibold">Vedant Jakarwar</span> — a software engineer crafting high-throughput backend services, resilient SQL architectures, and pixel-precise interfaces.
          </p>

          <p class="text-sm sm:text-base text-slate-400 max-w-lg mx-auto lg:mx-0 italic font-mono border-l-2 border-cyan-500/50 pl-4 py-1">
            "Life's too short for flaky microservices, boring code, or living like there's always a tomorrow."
          </p>

          <!-- Action buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#skills" class="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2">
              <span>Recruiter Briefing</span>
              <span>⚡</span>
            </a>
            <a href="#tracker" class="px-6 py-3 rounded-full bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-cyan-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2">
              <span>Telemetry Tracker</span>
              <span class="text-cyan-400">📊</span>
            </a>
          </div>

          <!-- Quick Stats Pills -->
          <div class="grid grid-cols-3 gap-3 pt-6 max-w-md mx-auto lg:mx-0 text-left">
            <div class="glass-panel p-3 rounded-xl border border-slate-800">
              <div class="text-xl sm:text-2xl font-bold font-mono text-cyan-400">99.9%</div>
              <div class="text-[11px] text-slate-400 font-medium">Uptime Mindset</div>
            </div>
            <div class="glass-panel p-3 rounded-xl border border-slate-800">
              <div class="text-xl sm:text-2xl font-bold font-mono text-violet-400">500+</div>
              <div class="text-[11px] text-slate-400 font-medium">Problems Crushed</div>
            </div>
            <div class="glass-panel p-3 rounded-xl border border-slate-800">
              <div class="text-xl sm:text-2xl font-bold font-mono text-amber-400">100%</div>
              <div class="text-[11px] text-slate-400 font-medium">Grit & Passion</div>
            </div>
          </div>
        </div>

        <!-- Right: Modern Visual Avatar / Space-Suit Node -->
        <div class="flex-1 flex justify-center relative">
          <div class="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
            <!-- Orbital rings -->
            <div class="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style="animation-duration: 25s;"></div>
            <div class="absolute -inset-4 rounded-full border border-dashed border-violet-500/20 animate-spin" style="animation-duration: 40s; animation-direction: reverse;"></div>

            <!-- Glowing core card -->
            <div class="w-full h-full rounded-3xl overflow-hidden glass-panel border-2 border-cyan-500/30 p-2 shadow-2xl shadow-cyan-500/20 relative group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                alt="Vedant Jakarwar" 
                class="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />

              <!-- Overlay Badge -->
              <div class="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Vedant Jakarwar</span>
                    <span class="text-emerald-400 text-[10px]">● Online</span>
                  </div>
                  <div class="text-[10px] text-slate-400 font-mono">Location: Bengaluru / Remote Orbit</div>
                </div>
                <div class="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-mono text-xs font-bold">
                  VJ
                </div>
              </div>
            </div>

            <!-- Floating Micro-Badges -->
            <div class="absolute -top-3 -right-3 glass-panel px-3 py-1.5 rounded-full border border-cyan-400/50 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 animate-float">
              <span>☕</span>
              <span>Java 22 + Spring</span>
            </div>
            <div class="absolute -bottom-3 -left-3 glass-panel px-3 py-1.5 rounded-full border border-purple-400/50 text-xs font-mono text-purple-300 flex items-center gap-1.5 shadow-lg shadow-purple-500/20 animate-float" style="animation-delay: 1.5s;">
              <span>⚡</span>
              <span>Angular & SQL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroSectionComponent {}
