import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracker-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tracker" class="py-20 px-6 relative bg-cosmic-900/50">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-xs font-mono text-emerald-400">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE TELEMETRY FEED</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white mt-3">Building in Public</h2>
            <p class="text-slate-400 text-sm max-w-lg mt-1">
              Transparent, measurable momentum. Verified daily commits, algorithmic problem-solving streaks, and live repository metrics.
            </p>
          </div>
          <div class="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>SYNC FREQUENCY: 15 MIN</span>
          </div>
        </div>

        <!-- Telemetry Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- GitHub Card -->
          <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-white">
                  GH
                </div>
                <div>
                  <h3 class="font-bold text-white text-base">GitHub Activity Matrix</h3>
                  <a href="https://github.com/vedantjakarwar" target="_blank" class="text-xs text-cyan-400 font-mono hover:underline">@vedantjakarwar</a>
                </div>
              </div>
              <div class="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-[11px] font-mono text-emerald-300">
                Active Year 2026
              </div>
            </div>

            <!-- GitHub Metric Pills -->
            <div class="grid grid-cols-3 gap-3 font-mono">
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div class="text-slate-400 text-xs">Total Commits</div>
                <div class="text-xl font-bold text-white mt-1">1,248</div>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div class="text-slate-400 text-xs">Repositories</div>
                <div class="text-xl font-bold text-cyan-400 mt-1">32</div>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div class="text-slate-400 text-xs">Longest Streak</div>
                <div class="text-xl font-bold text-purple-400 mt-1">74 days</div>
              </div>
            </div>

            <!-- Heatmap Visualization Grid Simulation -->
            <div class="space-y-2">
              <div class="text-xs text-slate-400 font-mono flex justify-between">
                <span>Recent Commit Density</span>
                <span>High Velocity 🟢</span>
              </div>
              <div class="grid grid-cols-16 gap-1.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <div *ngFor="let cell of contributionCells" 
                     [ngClass]="cell.intensity" 
                     class="h-3.5 rounded-sm transition-transform hover:scale-125"
                     [title]="cell.date + ': ' + cell.count + ' contributions'">
                </div>
              </div>
            </div>
          </div>

          <!-- LeetCode Card -->
          <div class="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400">
                  LC
                </div>
                <div>
                  <h3 class="font-bold text-white text-base">Algorithmic Problem Solving</h3>
                  <span class="text-xs text-amber-400 font-mono">Data Structures & Graph Mastery</span>
                </div>
              </div>
              <div class="px-2.5 py-1 rounded-full bg-amber-950 border border-amber-800 text-[11px] font-mono text-amber-300">
                Top 8.4%
              </div>
            </div>

            <!-- LeetCode Distribution -->
            <div class="grid grid-cols-3 gap-3 font-mono">
              <div class="p-3 bg-slate-900/80 rounded-xl border border-emerald-900/30">
                <div class="text-emerald-400 text-xs font-semibold">Easy</div>
                <div class="text-xl font-bold text-white mt-1">180<span class="text-xs text-slate-500">/200</span></div>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-amber-900/30">
                <div class="text-amber-400 text-xs font-semibold">Medium</div>
                <div class="text-xl font-bold text-white mt-1">290<span class="text-xs text-slate-500">/350</span></div>
              </div>
              <div class="p-3 bg-slate-900/80 rounded-xl border border-rose-900/30">
                <div class="text-rose-400 text-xs font-semibold">Hard</div>
                <div class="text-xl font-bold text-white mt-1">45<span class="text-xs text-slate-500">/60</span></div>
              </div>
            </div>

            <!-- Core Domains -->
            <div class="space-y-3 pt-2">
              <div class="text-xs text-slate-400 font-mono">Dominant Skill Clusters</div>
              <div class="flex flex-wrap gap-2 text-xs font-mono">
                <span class="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">Dynamic Programming (92%)</span>
                <span class="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">Graphs / BFS / DFS</span>
                <span class="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">Binary Tree Traversal</span>
                <span class="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">Sliding Window</span>
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
      'bg-slate-800',
      'bg-emerald-900/60',
      'bg-emerald-700',
      'bg-emerald-500',
      'bg-emerald-400 shadow-sm shadow-emerald-400/50'
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
