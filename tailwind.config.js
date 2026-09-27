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
        skyGrad: {
          light: '#38bdf8',
          DEFAULT: '#0284c7',
          dark: '#0369a1'
        },
        greenGrad: {
          light: '#34d399',
          DEFAULT: '#10b981',
          dark: '#059669'
        },
        brand: {
          primary: 'var(--color-primary, #38bdf8)',
          accent: 'var(--color-accent, #34d399)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(2, 132, 199, 0.08), 0 2px 6px -1px rgba(16, 185, 129, 0.04)',
        'card': '0 10px 30px -5px rgba(2, 132, 199, 0.15)',
        'glow-sky': '0 0 25px rgba(56, 189, 248, 0.45)',
        'glow-emerald': '0 0 25px rgba(52, 211, 153, 0.45)',
        'sidebar': '0 10px 30px -5px rgba(2, 132, 199, 0.2), 0 4px 12px rgba(16, 185, 129, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
