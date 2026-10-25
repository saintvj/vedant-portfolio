import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section.component';
import { ProfessionalHubComponent } from './components/professional-hub.component';
import { TrackerSectionComponent } from './components/tracker-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section.component';
import { FriendsGallerySectionComponent } from './components/friends-gallery-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProfessionalHubComponent,
    TrackerSectionComponent,
    TestimonialsSectionComponent,
    FriendsGallerySectionComponent
  ],
  template: `
    <div class="relative">
      <app-hero-section></app-hero-section>
      <app-professional-hub></app-professional-hub>
      <app-tracker-section></app-tracker-section>
      <app-testimonials-section></app-testimonials-section>
      <app-friends-gallery-section></app-friends-gallery-section>
    </div>
  `
})
export class HomePageComponent {}
