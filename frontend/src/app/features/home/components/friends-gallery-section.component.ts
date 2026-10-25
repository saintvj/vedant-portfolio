import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { FriendPhoto } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-friends-gallery-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="friends" class="py-24 px-6 relative bg-cosmic-950">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-700/50 text-xs font-mono text-pink-400">
              <span>EXPLORATION UNIT & SQUAD</span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-white">The Flight Crew & Expeditions</h2>
            <p class="text-slate-400 text-sm max-w-xl">
              Code powers the intellect, but the tribe powers the soul. Highlights with the friends, climbers, and hackathon accomplices who keep the fire blazing.
            </p>
          </div>
          <div class="text-xs font-mono text-slate-500">
            Rule #1: Work hard, explore relentlessly.
          </div>
        </div>

        <!-- Grid of Friends Photos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            *ngFor="let photo of photos" 
            class="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10">
            
            <!-- Photo Image -->
            <div class="h-64 overflow-hidden relative">
              <img 
                [src]="photo.imageUrl" 
                [alt]="photo.caption" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-cosmic-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <!-- Tag badge -->
              <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-cyan-300">
                #{{ photo.vibeTag }}
              </div>
            </div>

            <!-- Content Card -->
            <div class="p-4 space-y-2">
              <p class="text-xs text-slate-200 font-medium line-clamp-2 leading-relaxed">
                {{ photo.caption }}
              </p>
              <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <span class="flex items-center gap-1">
                  <span>📍</span>
                  <span>{{ photo.location }}</span>
                </span>
                <span class="text-slate-500">{{ photo.memoryDate }}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class FriendsGallerySectionComponent implements OnInit {
  private api = inject(PortfolioApiService);
  photos: FriendPhoto[] = [];

  ngOnInit(): void {
    this.api.getFriendPhotos().subscribe(data => {
      this.photos = data;
    });
  }
}
