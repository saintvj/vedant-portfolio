import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { ResumePageComponent } from './features/resume/resume-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Vedant Jakarwar | Software Engineer & Adventurer'
  },
  {
    path: 'resume',
    component: ResumePageComponent,
    title: 'Resume // Vedant Jakarwar - Cosmic Spacewalk'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
