/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#030014',
          card: '#0B081E',
          cardBorder: '#1F1A3A',
          purple: '#7C3AED',
          purpleHover: '#6D28D9',
          blue: '#2563EB',
          cyan: '#06B6D4',
          gray: '#94A3B8',
          editorBg: '#090714',
          editorBorder: '#16122C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 12s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.03)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translate(10px, 10px) scale(1)' },
          '50%': { transform: 'translate(-10px, -15px) scale(0.97)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 15px rgba(124, 58, 237, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)' },
        }
      },
      boxShadow: {
        'glass-glow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'premium-glow': '0 0 50px -12px rgba(124, 58, 237, 0.3)',
      }
    },
  },
  plugins: [],
}
