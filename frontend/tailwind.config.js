/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pop: {
          bg: '#fcf8f5',
          card: '#ffffff',
          coral: '#ff3366',
          orange: '#ff6b4a',
          peach: '#ffe8e0',
          yellow: '#ffbe3b',
          dark: '#1e1c24',
          slate: '#4a4656',
          border: '#f0e6df',
          accent: '#7928ca'
        },
        cosmic: {
          950: '#06070b',
          900: '#0b0d17',
          850: '#111425',
          800: '#181d33',
          700: '#262f52',
          cyan: '#38bdf8',
          neon: '#00f2fe',
          violet: '#a855f7',
          glow: '#4facfe'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'pop-gradient': 'linear-gradient(135deg, #ff3366 0%, #ff6b4a 50%, #ffbe3b 100%)',
        'pop-subtle': 'radial-gradient(circle at 10% 20%, rgba(255, 51, 102, 0.05) 0%, rgba(255, 107, 74, 0.03) 90%)',
        'cosmic-gradient': 'radial-gradient(ellipse at top, #1b2347 0%, #0b0d17 70%)',
        'nebula-glow': 'radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
      },
      boxShadow: {
        'pop-button': '0 8px 0 #d91b4c, 0 14px 20px rgba(255, 51, 102, 0.35)',
        'pop-button-active': '0 2px 0 #d91b4c, 0 6px 12px rgba(255, 51, 102, 0.25)',
        'pop-card': '0 12px 36px -8px rgba(30, 28, 36, 0.07), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'pop-card-hover': '0 20px 48px -12px rgba(255, 51, 102, 0.2), 0 8px 24px rgba(0, 0, 0, 0.06)'
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    },
  },
  plugins: [],
}
