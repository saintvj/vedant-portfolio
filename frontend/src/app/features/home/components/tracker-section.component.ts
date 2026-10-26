import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracker-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tracker" class="py-20 px-6 relative bg-white border-t border-pop-border">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-700">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>LIVE TELEMETRY FEED</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-pop-dark mt-3">Building in Public</h2>
            <p class="text-pop-slate text-sm max-w-lg mt-1 font-normal">
              Transparent, measurable momentum. Verified daily commits, algorithmic problem-solving streaks, and live repository metrics.
            </p>
          </div>
          <div class="flex items-center gap-2 font-mono text-xs text-pop-slate bg-pop-bg px-3.5 py-2 rounded-xl border border-pop-border">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>SYNC FREQUENCY: 15 MIN</span>
          </div>
        </div>

        <!-- Telemetry Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- GitHub Card -->
          <div class="pop-card p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-pop-border pb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-pop-dark flex items-center justify-center font-bold text-white text-sm">
                  GH
                </div>
                <div>
                  <h3 class="font-black text-pop-dark text-base">GitHub Activity Matrix</h3>
                  <a href="https://github.com/saintvj" target="_blank" class="text-xs text-pop-coral font-mono font-bold hover:underline">&#64;saintvj</a>
                </div>
              </div>
              <div class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold">
                Active Year 2026
              </div>
            </div>

            <!-- GitHub Metric Pills -->
            <div class="grid grid-cols-3 gap-3 font-mono">
              <div class="p-3 bg-pop-bg rounded-2xl border border-pop-border">
                <div class="text-pop-slate text-xs font-medium">Total Commits</div>
                <div class="text-xl font-black text-pop-dark mt-1">1,248</div>
              </div>
              <div class="p-3 bg-pop-bg rounded-2xl border border-pop-border">
                <div class="text-pop-slate text-xs font-medium">Repositories</div>
                <div class="text-xl font-black text-pop-coral mt-1">32</div>
              </div>
              <div class="p-3 bg-pop-bg rounded-2xl border border-pop-border">
                <div class="text-pop-slate text-xs font-medium">Longest Streak</div>
                <div class="text-xl font-black text-pop-orange mt-1">74 days</div>
              </div>
            </div>

            <!-- Heatmap Visualization Grid Simulation -->
            <div class="space-y-2">
              <div class="text-xs text-pop-slate font-mono flex justify-between font-medium">
                <span>Recent Commit Density</span>
                <span class="text-emerald-600 font-bold">High Velocity 🟢</span>
              </div>
              <div class="grid grid-cols-16 gap-1.5 p-3 rounded-2xl bg-pop-bg border border-pop-border">
                <div *ngFor="let cell of contributionCells" 
                     [ngClass]="cell.intensity" 
                     class="h-3.5 rounded-sm transition-transform hover:scale-125"
                     [title]="cell.date + ': ' + cell.count + ' contributions'">
                </div>
              </div>
            </div>
          </div>

          <!-- LeetCode Card -->
          <div class="pop-card p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-pop-border pb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center font-black text-amber-700 text-sm">
                  LC
                </div>
                <div>
                  <h3 class="font-black text-pop-dark text-base">Algorithmic Problem Solving</h3>
                  <span class="text-xs text-amber-600 font-mono font-bold">Data Structures & Graph Mastery</span>
                </div>
              </div>
              <div class="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-mono font-bold">
                Top 8.4%
              </div>
            </div>

            <!-- LeetCode Distribution -->
            <div class="grid grid-cols-3 gap-3 font-mono">
              <div class="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-200">
                <div class="text-emerald-700 text-xs font-bold">Easy</div>
                <div class="text-xl font-black text-pop-dark mt-1">180<span class="text-xs text-pop-slate">/200</span></div>
              </div>
              <div class="p-3 bg-amber-50/60 rounded-2xl border border-amber-200">
                <div class="text-amber-700 text-xs font-bold">Medium</div>
                <div class="text-xl font-black text-pop-dark mt-1">290<span class="text-xs text-pop-slate">/350</span></div>
              </div>
              <div class="p-3 bg-rose-50/60 rounded-2xl border border-rose-200">
                <div class="text-rose-700 text-xs font-bold">Hard</div>
                <div class="text-xl font-black text-pop-dark mt-1">45<span class="text-xs text-pop-slate">/60</span></div>
              </div>
            </div>

            <!-- Core Domains -->
            <div class="space-y-3 pt-2">
              <div class="text-xs text-pop-slate font-mono font-bold">Dominant Skill Clusters</div>
              <div class="flex flex-wrap gap-2 text-xs font-mono">
                <span class="px-3 py-1 bg-pop-bg text-pop-dark rounded-xl border border-pop-border font-medium">Dynamic Programming (92%)</span>
                <span class="px-3 py-1 bg-pop-bg text-pop-dark rounded-xl border border-pop-border font-medium">Graphs / BFS / DFS</span>
                <span class="px-3 py-1 bg-pop-bg text-pop-dark rounded-xl border border-pop-border font-medium">Binary Tree Traversal</span>
                <span class="px-3 py-1 bg-pop-bg text-pop-dark rounded-xl border border-pop-border font-medium">Sliding Window</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class TrackerSectionComponent {
  contributionCells: Array<{ count: number; date: string; intensity: string }> = [];

  constructor() {
    const intensities = [
      'bg-slate-200',
      'bg-emerald-300',
      'bg-emerald-400',
      'bg-emerald-500',
      'bg-emerald-600 shadow-sm'
    ];
    for (let i = 0; i < 64; i++) {
      const idx = Math.floor(Math.random() * intensities.length);
      this.contributionCells.push({
        count: idx * 2 + 1,
        date: `2026-Day-${i + 1}`,
        intensity: intensities[idx]
      });
    }
  }
}
