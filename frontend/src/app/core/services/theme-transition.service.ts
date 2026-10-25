import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export type AppTheme = 'pop' | 'cosmic';

@Injectable({
  providedIn: 'root'
})
export class ThemeTransitionService {
  readonly currentTheme = signal<AppTheme>('pop');
  readonly isMinimizing = signal<boolean>(false);
  readonly isMaximizing = signal<boolean>(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const isResume = event.urlAfterRedirects.startsWith('/resume');
      this.currentTheme.set(isResume ? 'cosmic' : 'pop');
    });
  }

  /**
   * Triggers a macOS-style fluid window minimization / zoom transition
   * to navigate smoothly between Pop Studio Home and Cosmic Resume.
   */
  transitionTo(targetUrl: string): void {
    if (this.router.url === targetUrl) return;

    // Trigger genie minimize animation
    this.isMinimizing.set(true);

    setTimeout(() => {
      this.router.navigateByUrl(targetUrl).then(() => {
        this.isMinimizing.set(false);
        this.isMaximizing.set(true);

        setTimeout(() => {
          this.isMaximizing.set(false);
        }, 600);
      });
    }, 450);
  }
}
