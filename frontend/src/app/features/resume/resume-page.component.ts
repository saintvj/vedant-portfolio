import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTransitionService } from '../../core/services/theme-transition.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-cosmic-950 text-slate-100">
      
      <!-- Cosmic Space Walk Background Elements & Deep Nebulas -->
      <div class="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-20 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Subtle starfield overlay -->
      <div class="absolute inset-0 bg-[radial-gradient(#38bdf8_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-15 pointer-events-none"></div>

      <div class="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <!-- Top Back Bar & Action Controls -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-6">
          <button 
            (click)="returnToHome()" 
            class="text-sm font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group transition-all">
            <span class="transition-transform group-hover:-translate-x-1 font-bold">←</span>
            <span>Return to Portfolio</span>
          </button>

          <div class="flex items-center gap-3">
            <button 
              onclick="window.print()" 
              class="px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all">
              <span>Print / Save PDF</span>
              <span>🖨️</span>
            </button>
            <a 
              href="mailto:jakarwarvedant@gmail.com" 
              class="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25">
              <span>Contact Vedant</span>
              <span>⚡</span>
            </a>
          </div>
        </div>

        <!-- Space-Walk Dossier Card Header -->
        <div id="summary" class="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 relative shadow-2xl shadow-cyan-500/10">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-[11px] font-mono text-cyan-400">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>PROFESSIONAL RESUME DOSSIER</span>
              </div>
              <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">VEDANT JAKARWAR</h1>
              <p class="text-base text-cyan-300 font-mono">Senior Software Engineer • Backend & Enterprise Systems</p>
              <p class="text-xs text-slate-400 font-mono">
                Navi Mumbai, Maharashtra, India • +91 8446861047 • jakarwarvedant&#64;gmail.com • 
                <a href="https://github.com/saintvj" target="_blank" class="text-cyan-400 hover:underline">github.com/saintvj</a>
              </p>
            </div>

            <div class="flex flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
              <span class="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800">Experience: 3.8+ Years</span>
              <span>LTIMindtree (06/2022 – Present)</span>
            </div>
          </div>
        </div>

        <!-- 1. Executive Summary -->
        <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <span>01 // PROFESSIONAL SUMMARY</span>
          </h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Backend-focused Software Engineer with 3.8+ years of experience building scalable, secure, and high-performance enterprise applications. Strong expertise in Java, Spring Boot, SQL, and automation with hands-on experience in CI/CD pipelines, Docker, and cloud deployments. Proficient in DSA, Low-Level Design (LLD), RESTful API design, and Agile software development.
          </p>
        </div>

        <!-- 2. Technical Skills Catalog -->
        <div id="skills" class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            02 // TECHNICAL SKILLS & STACK
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Languages:</span>
              <p class="text-slate-400">Java, Python, Shell Scripting, JavaScript, TypeScript</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Frameworks:</span>
              <p class="text-slate-400">Spring Boot, Spring MVC, Spring Security, Hibernate, Angular</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Databases:</span>
              <p class="text-slate-400">Oracle SQL, PostgreSQL, MySQL</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <span class="text-cyan-300 font-semibold">Tools & Cloud:</span>
              <p class="text-slate-400">Git, Jenkins, AutoSys, Bitbucket, JIRA, Maven, Gradle, Docker, Render, GitHub Copilot</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 sm:col-span-2">
              <span class="text-cyan-300 font-semibold">Core Concepts:</span>
              <p class="text-slate-400">OOP, REST APIs, Microservices, CI/CD, Agile, DevOps, DSA, LLD, Batch Processing, Cloud Deployment</p>
            </div>
          </div>
        </div>

        <!-- 3. Work Experience -->
        <div id="experience" class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-8">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            03 // WORK EXPERIENCE
          </h2>

          <!-- Senior Software Engineer @ LTIMindtree -->
          <div class="relative pl-6 border-l-2 border-cyan-500/40 space-y-3">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-cyan-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h3 class="text-base font-bold text-white">Senior Software Engineer</h3>
                <p class="text-xs font-mono text-cyan-300 font-semibold">LTIMindtree • Mumbai, India</p>
              </div>
              <span class="text-xs font-mono text-cyan-400 mt-1 sm:mt-0 font-bold">06/2022 – Present</span>
            </div>
            <ul class="list-disc list-inside text-xs text-slate-300 space-y-2 leading-relaxed pt-1">
              <li>Contributed to enterprise-scale financial systems focused on transaction processing, automation, and backend modernization.</li>
              <li>Developed backend services using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>RESTful APIs</strong> following <strong>Microservices Architecture</strong>; worked on frontend modules using <strong>Angular</strong> with TypeScript for responsive UI and REST API integration.</li>
              <li>Leveraged <strong>GitHub Copilot, Claude, and Gemini</strong> to accelerate development, improve code quality, and streamline debugging workflows.</li>
              <li>Developed and optimized Java and Shell-based batch jobs in <strong>Unix/Linux</strong> environments; executed Unix commands for server management, log analysis, and automated workflows.</li>
              <li>Migrated legacy Sybase databases to Oracle and implemented backend logic using Java and PL/SQL.</li>
              <li>Automated database refresh and batch workflows, reducing environment setup and testing time by <strong>40%</strong>.</li>
              <li>Increased unit and regression test coverage from 50% to <strong>90%</strong> through refactoring and test automation.</li>
              <li>Migrated a legacy Struts application to a modern Gradle-based build architecture.</li>
              <li>Collaborated with Agile teams to deliver enhancements and ensure stable SIT and UAT releases.</li>
            </ul>
          </div>
        </div>

        <!-- 4. Projects (Freelance / Personal) -->
        <div id="projects" class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-8">
          <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            04 // FEATURED PROJECTS & SAAS
          </h2>

          <!-- Project 1 -->
          <div class="relative pl-6 border-l-2 border-violet-500/40 space-y-2">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-violet-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 class="text-base font-bold text-white">Store Management and Ordering Web Application</h3>
              <a href="https://store-springboot-q3ha.onrender.com/" target="_blank" class="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                <span>Live on Render</span>
                <span>↗</span>
              </a>
            </div>
            <div class="text-xs font-mono text-slate-400">Java 17, Spring Boot, Thymeleaf, PostgreSQL, Docker, Render</div>
            <ul class="list-disc list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed pt-1">
              <li>Built and deployed a full-stack store management system using Java 17, Spring Boot, Thymeleaf, and PostgreSQL.</li>
              <li>Implemented secure authentication using Spring Security with BCrypt encryption and role-based access control.</li>
              <li>Integrated WhatsApp-based ordering workflow and deployed on Render using Docker with CI/CD pipelines.</li>
              <li>Utilized Claude and GitHub Copilot for rapid development and reliability testing.</li>
            </ul>
          </div>

          <!-- Project 2 -->
          <div class="relative pl-6 border-l-2 border-cyan-500/40 space-y-2">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-cyan-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 class="text-base font-bold text-white">Online Exam Portal</h3>
              <span class="text-xs font-mono text-cyan-400">Full-Stack Application</span>
            </div>
            <div class="text-xs font-mono text-slate-400">Spring Boot, Angular, Hibernate, MySQL, JWT, TypeScript</div>
            <ul class="list-disc list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed pt-1">
              <li>Developed a full-stack examination platform using Spring Boot, Angular, Hibernate, and MySQL.</li>
              <li>Built responsive frontend with Angular using component-based architecture, reactive forms, and TypeScript.</li>
              <li>Implemented JWT-based authentication, role-based access control, and automated exam evaluation.</li>
            </ul>
          </div>

          <!-- Project 3 -->
          <div class="relative pl-6 border-l-2 border-amber-500/40 space-y-2">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-amber-400"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 class="text-base font-bold text-white">SnapProof – Digital Evidence Generator</h3>
              <a href="https://snapproof-tool.onrender.com/" target="_blank" class="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                <span>Live on Render</span>
                <span>↗</span>
              </a>
            </div>
            <div class="text-xs font-mono text-slate-400">Python, SaaS Architecture, PDF Generation, Render Deployment</div>
            <p class="text-xs text-slate-300 leading-relaxed pt-1">
              Python-based SaaS tool engineered to convert exported WhatsApp chat archives into tamper-evident, court-admissible PDF packages; containerized and deployed on Render.
            </p>
          </div>

        </div>

        <!-- 5. Education & Certifications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Education -->
          <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
            <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              05 // EDUCATION
            </h2>
            <div class="space-y-1 text-xs">
              <h4 class="font-bold text-white text-sm">Bachelor of Engineering in Computer Science</h4>
              <p class="text-cyan-300 font-mono">Ramrao Adik Institute of Technology, Navi Mumbai</p>
              <div class="flex items-center justify-between pt-2 text-slate-400 font-mono">
                <span>2018 – 2022</span>
                <span class="text-emerald-400 font-bold">CGPA: 8.25</span>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
            <h2 class="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              06 // CERTIFICATIONS
            </h2>
            <div class="space-y-3 text-xs font-mono">
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div class="text-white font-bold">Oracle Certified Professional</div>
                <div class="text-cyan-300">Java SE 11 Developer (2022)</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div class="text-white font-bold">AWS Certified Cloud Practitioner</div>
                <div class="text-cyan-300">Amazon Web Services (2022)</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `
})
export class ResumePageComponent {
  private themeService = inject(ThemeTransitionService);

  returnToHome(): void {
    this.themeService.transitionTo('/');
  }
}

