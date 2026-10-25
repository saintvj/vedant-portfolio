# Image Asset Guide & Dropzone // vedantjakarwar.com

Vedant, drop your personal photos into the corresponding directories below. The frontend is configured to consume these paths directly.

---

## 📂 Directory Layout

```text
frontend/src/assets/images/
├── README_IMAGES.md                  # This guide
├── profile/                          # Hero & dossier photos
│   ├── vedant-hero.jpg               # Main hero shot (e.g., skiing/biking goggles or high-impact outdoor look)
│   └── vedant-formal.jpg             # Recruiter dossier / resume profile photo
│
├── adventures/                       # High-adrenaline life quests
│   ├── cycling-tour.jpg              # Long-distance cycling / race shots
│   ├── running-club.jpg              # 10k/Half-marathon or club run photos
│   ├── mountain-summit.jpg           # Trekking / peak summit pictures
│   └── motorsport-track.jpg          # Track day or auto expedition shots
│
├── friends/                          # The Tribe / Friends Gallery
│   ├── hackathon-sprint.jpg          # Late-night coding crew / hackathon wins
│   ├── summit-crew.jpg               # Friends on mountain trails
│   ├── roadtrip-spiti.jpg            # Road trip / camping expeditions
│   └── casual-hangout.jpg            # High-vibe social moments with friends
│
└── projects/                         # Project preview screenshots
    ├── nebulastore-arch.png          # Architecture diagrams or benchmark graphs
    ├── querynova-visualizer.png      # SQL execution graph screenshot
    └── astrometrics-dashboard.png    # Live metric telemetry preview
```

---

## 📐 Recommended Image Specifications

| Asset Type | Recommended Resolution | Aspect Ratio | Format |
| :--- | :--- | :--- | :--- |
| **Profile / Hero** | 1000 × 1000 px | 1:1 (Square) | JPG or WebP (under 300KB) |
| **Friends Gallery** | 1200 × 900 px | 4:3 or 16:9 | JPG or WebP (under 500KB) |
| **Adventure Shots** | 1600 × 1000 px | 16:10 | JPG or WebP (under 600KB) |
| **Project Diagrams** | 1920 × 1080 px | 16:9 | PNG or WebP |

---

## ⚡ How the Frontend Binds Images

The Angular frontend features an automatic fallback mechanism:
1. If local files (e.g. `assets/images/profile/vedant-hero.jpg`) exist, the components render them seamlessly.
2. If personal files are still being gathered, high-resolution cosmic adventure placeholders from Unsplash continue to render cleanly with zero broken images.
