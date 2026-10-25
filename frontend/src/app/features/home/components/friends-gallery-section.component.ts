import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { FriendPhoto } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-friends-gallery-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="friends" class="py-24 px-6 relative bg-white border-t border-pop-border">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-peach text-xs font-mono font-bold text-pop-coral border border-pop-coral/30">
              <span>THE SQUAD & EXPEDITIONS</span>
            </div>
            <h2 class="text-4xl sm:text-5xl font-black text-pop-dark tracking-tight">
              Friends Carousel & High-Vibe Crew
            </h2>
            <p class="text-pop-slate text-base max-w-xl">
              Code powers the intellect, but the tribe powers the soul. Cheerful moments with climbers, marathon partners, and hackathon accomplices.
            </p>
          </div>
          <div class="text-xs font-mono font-bold text-pop-coral bg-pop-peach/70 px-4 py-2 rounded-xl">
            ✨ Energy: 100% Uncapped
          </div>
        </div>

        <!-- Cheerful Photo Cards with Vibrant Borders & Carousel Flow -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            *ngFor="let photo of photos; let i = index" 
            class="group relative rounded-3xl overflow-hidden bg-white p-2.5 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-pop-card-hover"
            [ngClass]="getVibrantBorderClass(i)">
            
            <!-- Photo Image with Vibrant Frame -->
            <div class="h-64 rounded-2xl overflow-hidden relative bg-pop-peach">
              <img 
                [src]="photo.imageUrl" 
                [alt]="photo.caption" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-pop-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <!-- Vibrant Tag badge -->
              <div 
                class="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[10px] font-mono font-bold shadow-md"
                [ngClass]="getVibrantTagClass(i)">
                #{{ photo.vibeTag }}
              </div>
            </div>

            <!-- Content Details -->
            <div class="p-4 space-y-2">
              <p class="text-xs text-pop-dark font-bold line-clamp-2 leading-relaxed">
                {{ photo.caption }}
              </p>
              <div class="flex items-center justify-between text-[11px] font-mono text-pop-slate pt-2 border-t border-pop-border">
                <span class="flex items-center gap-1 font-semibold">
                  <span>📍</span>
                  <span>{{ photo.location }}</span>
                </span>
                <span class="text-pop-coral font-bold">{{ photo.memoryDate }}</span>
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

  getVibrantBorderClass(index: number): string {
    const borders = [
      'border-pop-coral/40 hover:border-pop-coral',
      'border-pop-orange/40 hover:border-pop-orange',
      'border-pop-yellow hover:border-pop-orange',
      'border-pink-400 hover:border-pink-500'
    ];
    return borders[index % borders.length];
  }

  getVibrantTagClass(index: number): string {
    const tags = [
      'bg-pop-coral',
      'bg-pop-orange',
      'bg-amber-500',
      'bg-pink-500'
    ];
    return tags[index % tags.length];
  }
}
