import { Component, HostBinding, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar.component';
import { FooterComponent } from './shared/components/footer.component';
import { ThemeTransitionService } from './core/services/theme-transition.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  template: `
    <div 
      class="min-h-screen flex flex-col justify-between transition-colors duration-700"
      [ngClass]="{
        'bg-pop-bg text-pop-dark selection:bg-pop-coral selection:text-white': themeService.currentTheme() === 'pop',
        'bg-cosmic-950 text-slate-100 selection:bg-cyan-500 selection:text-black dark': themeService.currentTheme() === 'cosmic'
      }">
      
      <!-- Top Navigation bar dynamically styled per theme -->
      <app-navbar></app-navbar>

      <!-- MacBook-Style Window Minimization & Zoom Outer Wrapper -->
      <main 
        class="flex-grow macbook-window-container"
        [class.macbook-window-minimizing]="themeService.isMinimizing()"
        [class.macbook-window-maximizing]="themeService.isMaximizing()">
        <router-outlet></router-outlet>
      </main>

      <!-- Dynamic Footer -->
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  protected themeService = inject(ThemeTransitionService);
}
