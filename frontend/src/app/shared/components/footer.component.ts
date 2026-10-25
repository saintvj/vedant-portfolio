import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-slate-800/80 bg-cosmic-950/80 py-12 px-6 relative z-10">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <div class="flex items-center gap-2">
            <span class="font-black text-lg tracking-wider text-white">VEDANT JAKARWAR</span>
            <span class="px-2 py-0.5 text-[10px] uppercase font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 rounded-full">Orbit v2026.4</span>
          </div>
          <p class="text-xs text-slate-400 mt-1 max-w-sm">
            "Live like it's your last day, write code like it will execute for a billion users."
          </p>
        </div>

        <div class="flex items-center gap-6 text-sm text-slate-400 font-mono">
          <a href="https://github.com/vedantjakarwar" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/vedantjakarwar" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">LeetCode</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" class="hover:text-cyan-400 transition-colors">X / Twitter</a>
        </div>

        <div class="text-xs text-slate-500 font-mono text-center md:text-right">
          © 2026 Vedant Jakarwar. Hand-crafted with Angular 18 & Java Spring Boot.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
