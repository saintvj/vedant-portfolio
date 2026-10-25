import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extra-curricular-vibe-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vibe" class="py-24 px-6 bg-pop-bg relative overflow-hidden">
      <!-- Decorative Backdrop circles -->
      <div class="absolute -top-10 right-1/4 w-80 h-80 bg-pop-peach/80 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-6xl mx-auto space-y-14 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-mono font-bold text-pop-coral border border-pop-border shadow-sm">
            <span>UNSTOPPABLE DRIVE // LIFESTYLE & ADVENTURE</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-pop-dark tracking-tight">
            Extra-Curricular Vibe & Grit
          </h2>
          <p class="text-pop-slate max-w-2xl mx-auto text-base">
            Writing scalable systems requires peak mental resilience. How daily endurance cycling, 21km road running, and adrenaline therapy translate directly into writing bulletproof software.
          </p>
        </div>

        <!-- 3 Modern Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: Daily Office Cycling -->
          <div class="pop-card p-8 flex flex-col justify-between group hover:border-pop-coral/40">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-pop-peach flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🚴‍♂️
              </div>
              <h3 class="text-2xl font-black text-pop-dark">Daily Office Commute on Two Wheels</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Rain or shine, pedaling through morning rush hour clears the mind, tests endurance, and turns daily travel into an aerobic warmup before deep coding sessions.
              </p>
            </div>
            
            <div class="mt-8 pt-4 border-t border-pop-border flex items-center justify-between text-xs font-mono">
              <span class="font-bold text-pop-coral">Daily Routine</span>
              <span class="text-pop-slate">Zero Traffic Excuses</span>
            </div>
          </div>

          <!-- Card 2: 21km Half Marathon Prep -->
          <div class="pop-card p-8 flex flex-col justify-between group hover:border-pop-orange/40">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🏃‍♂️
              </div>
              <h3 class="text-2xl font-black text-pop-dark">21km Half-Marathon Prep</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Long-distance pacing is identical to debugging high-concurrency race conditions: it demands patience, deliberate cadence, heart rate control, and relentless grit till the finish line.
              </p>
            </div>
            
            <div class="mt-8 pt-4 border-t border-pop-border flex items-center justify-between text-xs font-mono">
              <span class="font-bold text-pop-orange">Target: Sub 1h 45m</span>
              <span class="text-pop-slate">Consistent Miles</span>
            </div>
          </div>

          <!-- Card 3: Fearless Adventurous Mindset -->
          <div class="pop-card p-8 flex flex-col justify-between group hover:border-amber-400">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🏔️
              </div>
              <h3 class="text-2xl font-black text-pop-dark">Fearless Adventurous Mindset</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Trekking Himalayan ridges, track-day motoring, and tackling uncharted codebases. Never shy away from steep learning curves or mission-critical production problems.
              </p>
            </div>
            
            <div class="mt-8 pt-4 border-t border-pop-border flex items-center justify-between text-xs font-mono">
              <span class="font-bold text-amber-600">Always Curious</span>
              <span class="text-pop-slate">Peak Ownership</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ExtraCurricularVibeSectionComponent {}
