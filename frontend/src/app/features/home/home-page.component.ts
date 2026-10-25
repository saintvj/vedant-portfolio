import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section.component';
import { ProjectsGridSectionComponent } from './components/projects-grid-section.component';
import { ExtraCurricularVibeSectionComponent } from './components/extra-curricular-vibe-section.component';
import { FriendsGallerySectionComponent } from './components/friends-gallery-section.component';
import { ProfessionalHubComponent } from './components/professional-hub.component';
import { TrackerSectionComponent } from './components/tracker-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProjectsGridSectionComponent,
    ExtraCurricularVibeSectionComponent,
    FriendsGallerySectionComponent,
    ProfessionalHubComponent,
    TrackerSectionComponent,
    TestimonialsSectionComponent
  ],
  template: `
    <div class="relative bg-pop-bg">
      <!-- 1. Pop Studio Hero with 3D Tilt Card and Bold Call to Action -->
      <app-hero-section></app-hero-section>

      <!-- 2. Selected Apps & Projects Modular Grid -->
      <app-projects-grid-section></app-projects-grid-section>

      <!-- 3. Extra-Curricular Vibe: Daily Cycling, 21km Marathon, Fearless Mindset -->
      <app-extra-curricular-vibe-section></app-extra-curricular-vibe-section>

      <!-- 4. Friends Carousel (Cheerful Photo Cards with Vibrant Borders) -->
      <app-friends-gallery-section></app-friends-gallery-section>

      <!-- 5. Tech Radar & Engineering Hub -->
      <app-professional-hub></app-professional-hub>

      <!-- 6. Building in Public: Telemetry & Commits -->
      <app-tracker-section></app-tracker-section>

      <!-- 7. Peer & Mentor Testimonials -->
      <app-testimonials-section></app-testimonials-section>
    </div>
  `
})
export class HomePageComponent {}
