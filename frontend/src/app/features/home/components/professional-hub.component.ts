import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-hub',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 px-6 relative">
      <div class="max-w-6xl mx-auto space-y-16">
        
        <!-- Header -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400">
            <span>RECRUITER & HIRING HUB</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Competence. Zero Fluff.
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-base">
            Architected to scale gracefully under pressure. Here is what I bring to high-performing product engineering teams on Day One.
          </p>
        </div>

        <!-- 3 Core Pillar Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Pillar 1: Backend & Java -->
          <div class="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-2xl font-bold font-mono">
                ☕
              </div>
              <h3 class="text-xl font-bold text-white">Java & Enterprise Core</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Clean, idiomatic modern Java (17/21/22). Spring Boot 3 microservices, resilient connection pooling, multi-threading, concurrency safety, and RESTful service design.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-orange-300 rounded-md border border-orange-900/40">Java 22</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-orange-300 rounded-md border border-orange-900/40">Spring Boot 3</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-orange-300 rounded-md border border-orange-900/40">Spring Data JPA</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-orange-300 rounded-md border border-orange-900/40">JUnit / Mockito</span>
              </div>
            </div>
          </div>

          <!-- Pillar 2: Database & SQL Architecture -->
          <div class="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold font-mono">
                🗄️
              </div>
              <h3 class="text-xl font-bold text-white">SQL & Data Persistence</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Relational schema modeling, index optimization, execution plan (EXPLAIN ANALYZE) diagnosis, ACID transactions, and query tuning with PostgreSQL.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 rounded-md border border-cyan-900/40">PostgreSQL</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 rounded-md border border-cyan-900/40">Complex Joins</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 rounded-md border border-cyan-900/40">Indexing Strategies</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 rounded-md border border-cyan-900/40">Neon / Supabase</span>
              </div>
            </div>
          </div>

          <!-- Pillar 3: Frontend & Modern Web -->
          <div class="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl font-bold font-mono">
                ⚡
              </div>
              <h3 class="text-xl font-bold text-white">Angular & Interactive UI</h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                Modern Angular standalone components, RxJS state flows, reactive Angular Signals, high-performance styling with Tailwind CSS, and strict TypeScript safety.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-purple-300 rounded-md border border-purple-900/40">Angular 18</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-purple-300 rounded-md border border-purple-900/40">TypeScript</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-purple-300 rounded-md border border-purple-900/40">Tailwind CSS</span>
                <span class="px-2.5 py-1 text-xs font-mono bg-slate-900 text-purple-300 rounded-md border border-purple-900/40">RxJS & Signals</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Career Goals & Hiring Pitch -->
        <div class="glass-panel p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="space-y-3 max-w-2xl text-center lg:text-left">
              <div class="text-xs font-mono text-cyan-400 uppercase tracking-wider">Mission Target</div>
              <h3 class="text-2xl font-bold text-white">Looking for roles where ownership and high expectations meet.</h3>
              <p class="text-slate-300 text-sm leading-relaxed">
                Whether you're breaking down monoliths into resilient event-driven microservices or shipping a mission-critical web application, I bring relentless curiosity, rapid execution, and a positive team atmosphere.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a href="mailto:vedantjakarwar@gmail.com" class="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-center text-sm transition-all shadow-lg shadow-cyan-500/20">
                Initiate Conversation
              </a>
              <a href="https://linkedin.com/in/vedantjakarwar" target="_blank" class="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-center text-sm font-semibold transition-all">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ProfessionalHubComponent {}
