/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
        'cosmic-gradient': 'radial-gradient(ellipse at top, #1b2347 0%, #0b0d17 70%)',
        'nebula-glow': 'radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
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
        }
      }
    },
  },
  plugins: [],
}
