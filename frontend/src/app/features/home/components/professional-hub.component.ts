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
              <h3 class="text-xl font-black text-pop-dark">Java & Microservices</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Enterprise financial transaction systems using Java, Spring Boot microservices, Spring Security, and REST APIs. Automated Unix/Linux batch processing, cutting testing times by 40%.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Java 17/11</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Spring Boot</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Microservices</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Batch Processing</span>
              </div>
            </div>
          </div>

          <!-- Pillar 2: Database & SQL Architecture -->
          <div class="pop-card p-7 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl font-bold font-mono">
                🗄️
              </div>
              <h3 class="text-xl font-black text-pop-dark">Databases & Modernization</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Relational databases (Oracle SQL, PostgreSQL, MySQL) and legacy Sybase-to-Oracle migrations. Backend logic with PL/SQL, schema design, and 90% regression test coverage.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Oracle SQL</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">PostgreSQL</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">PL/SQL</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Hibernate JPA</span>
              </div>
            </div>
          </div>

          <!-- Pillar 3: Frontend & Modern Web -->
          <div class="pop-card p-7 flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold font-mono">
                ⚡
              </div>
              <h3 class="text-xl font-black text-pop-dark">Frontend, DevOps & AI</h3>
              <p class="text-pop-slate text-sm leading-relaxed">
                Modular responsive frontends with Angular & TypeScript, CI/CD with Docker and Jenkins, plus workflow acceleration using GitHub Copilot, Claude, and Gemini.
              </p>
            </div>
            
            <div class="mt-6 pt-4 border-t border-pop-border space-y-2">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Angular</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Docker</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">CI/CD / Jenkins</span>
                <span class="px-2.5 py-1 text-xs font-mono font-medium bg-pop-bg text-pop-dark rounded-md border border-pop-border">Python</span>
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
