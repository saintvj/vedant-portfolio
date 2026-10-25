import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-hub',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 px-6 relative bg-pop-bg border-t border-pop-border">
      <div class="max-w-6xl mx-auto space-y-16">
        
        <!-- Header -->
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pop-border text-xs font-mono font-bold text-pop-coral shadow-sm">
            <span>RECRUITER & HIRING RADAR</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-pop-dark tracking-tight">
            Engineering Competence. Zero Fluff.
          </h2>
          <p class="text-pop-slate max-w-2xl mx-auto text-base">
            Architected to scale gracefully under pressure. Here is what I bring to high-performing product engineering teams on Day One.
          </p>
        </div>

        <!-- 3 Core Pillar Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Pillar 1: Backend & Java -->
          <div class="pop-card p-7 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-2xl font-bold font-mono">
                ☕
              </div>
              <h3 class="text-xl font-black text-pop-dark">Java & Enterprise Core</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Clean, idiomatic modern Java (17/21/22). Spring Boot 3 microservices, resilient connection pooling, multi-threading, concurrency safety, and RESTful service design.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Java 22</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Spring Boot 3</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Spring Data JPA</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">JUnit / Mockito</span>
              </div>
            </div>
          </div>

          <!-- Pillar 2: Database & SQL Architecture -->
          <div class="pop-card p-7 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl font-bold font-mono">
                🗄️
              </div>
              <h3 class="text-xl font-black text-pop-dark">SQL & Data Persistence</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Relational schema modeling, index optimization, execution plan (EXPLAIN ANALYZE) diagnosis, ACID transactions, and query tuning with PostgreSQL.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">PostgreSQL</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Complex Joins</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Index Optimization</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Supabase / Neon</span>
              </div>
            </div>
          </div>

          <!-- Pillar 3: Frontend & Modern Web -->
          <div class="pop-card p-7 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold font-mono">
                ⚡
              </div>
              <h3 class="text-xl font-black text-pop-dark">Angular & Interactive UI</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Modern Angular standalone components, RxJS state flows, reactive Angular Signals, high-performance styling with Tailwind CSS, and strict TypeScript safety.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Angular 18</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">TypeScript</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Tailwind CSS</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">RxJS & Signals</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Career Goals & Hiring Pitch Banner -->
        <div class="bg-white p-8 sm:p-10 rounded-3xl border-2 border-pop-border shadow-pop-card flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-3 max-w-2xl text-center lg:text-left">
            <div class="text-xs font-mono font-black text-pop-coral uppercase tracking-wider">Mission Target</div>
            <h3 class="text-2xl sm:text-3xl font-black text-pop-dark">Looking for roles where ownership and high expectations meet.</h3>
            <p class="text-pop-slate text-sm leading-relaxed">
              Whether you're breaking down monoliths into resilient event-driven microservices or shipping a mission-critical web application, I bring relentless curiosity, rapid execution, and a positive team atmosphere.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a href="mailto:vedantjakarwar@gmail.com" class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-pop-coral hover:bg-pop-orange text-white font-black text-center text-sm transition-all shadow-md shadow-pop-coral/30">
              Initiate Conversation
            </a>
            <a href="https://linkedin.com/in/vedantjakarwar" target="_blank" class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-pop-bg hover:bg-white text-pop-dark border border-pop-border text-center text-sm font-bold transition-all">
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ProfessionalHubComponent {}
