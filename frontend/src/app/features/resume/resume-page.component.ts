import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-cosmic-950">
      
      <!-- Cosmic Space Walk Background Elements -->
      <div class="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <!-- Top Back Bar & Action Controls -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-6">
          <a routerLink="/" class="text-sm font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group">
            <span class="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Orbit</span>
          </a>

          <div class="flex items-center gap-3">
            <button 
              onclick="window.print()" 
              class="px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all">
              <span>Print / Save PDF</span>
              <span>🖨️</span>
            </button>
            <a 
              href="mailto:vedantjakarwar@gmail.com" 
              class="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all">
              <span>Contact Vedant</span>
              <span>⚡</span>
            </a>
          </div>
        </div>

        <!-- Space-Walk Dossier Card Header -->
        <div class="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-[11px] font-mono text-cyan-400">
                <span>MISSION DOSSIER // RECRUITER VERIFIED</span>
              </div>
              <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">VEDANT JAKARWAR</h1>
              <p class="text-base text-cyan-300 font-mono">Software Engineer • Distributed Systems & Full-Stack</p>
              <p class="text-xs text-slate-400">Bengaluru / Remote • vedantjakarwar.com • vedantjakarwar&#64;gmail.com</p>
            </div>

            <div class="flex flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
              <span class="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800">Status: Available for Roles</span>
              <span>Clearance: Full-Stack / Enterprise</span>
            </div>
          </div>
        </div>

        <!-- 1. Executive Summary -->
        <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <span>01 // EXECUTIVE SUMMARY</span>
          </h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            High-velocity software engineer with deep focus on backend services, concurrency, relational query optimization, and modern reactive web applications. Passionate about architecting zero-latency microservices with Java 22 and Spring Boot, optimizing PostgreSQL execution plans, and assembling dynamic user interfaces with Angular 18. Driven by high ownership, adventure, and relentless curiosity.
          </p>
        </div>

        <!-- 2. Core Technical Radar -->
        <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            02 // TECHNICAL ORBITS & WEAPONS OF CHOICE
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Backend & Runtimes:</span>
              <p class="text-slate-400">Java 22/21/17, Spring Boot 3, Spring Data JPA, Hibernate, REST APIs, Microservices, JUnit, Mockito</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Databases & Infrastructure:</span>
              <p class="text-slate-400">PostgreSQL, SQL Tuning, EXPLAIN ANALYZE, Docker, Git, Linux, Supabase, Neon</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Frontend & Interactive:</span>
              <p class="text-slate-400">Angular 18, TypeScript, RxJS, Tailwind CSS, HTML5/CSS3, Responsive Glassmorphism</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Practices & Mindset:</span>
              <p class="text-slate-400">Distributed Consensus, High Concurrency, Agile Sprints, Clean Architecture, High Ownership</p>
            </div>
          </div>
        </div>

        <!-- 3. Professional Experience & Projects Orbit -->
        <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-8">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            03 // EXPEDITIONS & IMPACT
          </h2>

          <!-- Role 1 -->
          <div class="relative pl-6 border-l-2 border-cyan-500/40 space-y-2">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-cyan-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 class="text-base font-bold text-white">Full-Stack Software Engineer</h3>
              <span class="text-xs font-mono text-cyan-400">2024 - Present</span>
            </div>
            <div class="text-xs font-mono text-slate-400">Core Services & Product Platforms</div>
            <ul class="list-disc list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed pt-1">
              <li>Engineered high-performance REST microservices in Java 22 / Spring Boot 3, handling millions of monthly data point aggregations with sub-40ms latency.</li>
              <li>Re-indexed mission-critical PostgreSQL tables, eliminating sequential table scans and cutting p99 query latency by 62%.</li>
              <li>Led frontend architectural refactor migrating legacy views into modular Angular 18 standalone components with reactive signal state.</li>
            </ul>
          </div>

          <!-- Featured Project 1 -->
          <div class="relative pl-6 border-l-2 border-violet-500/40 space-y-2">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-violet-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 class="text-base font-bold text-white">NebulaStore — Distributed High-Speed Cache</h3>
              <span class="text-xs font-mono text-violet-400">Featured System</span>
            </div>
            <div class="text-xs font-mono text-slate-400">Java 22, Raft Consensus, Concurrency, Gossip Protocol</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Designed a fault-tolerant in-memory cluster capable of dynamic leader election and hash-ring data partitioning. Benchmark tested with 100 concurrent worker threads maintaining zero data corruption under network partitions.
            </p>
          </div>

        </div>

        <!-- 4. Education & Certifications -->
        <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            04 // ACADEMIC FOUNDATION
          </h2>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
            <div>
              <h4 class="font-bold text-white text-sm">Bachelor of Technology in Computer Science & Engineering</h4>
              <p class="text-slate-400 font-mono">Core Focus: Distributed Systems, Operating Systems, Relational DBMS, Algorithms</p>
            </div>
            <span class="font-mono text-slate-400 mt-1 sm:mt-0">First Class with Distinction</span>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ResumePageComponent {}
