/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF8F8',
          100: '#FAF1F2',
          200: '#F5DEE1',
          300: '#EBBEC5',
          400: '#DF9AA5',
          500: '#CE7584',
          600: '#B55566',
        },
        gold: {
          50: '#FAF8F2',
          100: '#F4EEDF',
          200: '#E8DDBF',
          300: '#DCB96D',
          400: '#D4AF37', // Pure champagne gold
          500: '#C59F2A',
          600: '#A9841B',
          700: '#856612',
        },
        luxury: {
          dark: '#1C1617',
          charcoal: '#2D2526',
          muted: '#6B5E60',
          border: '#EEDDD8',
          goldborder: 'rgba(212, 175, 55, 0.28)',
          card: '#FFFFFF',
          cream: '#FFFDF9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(212, 175, 55, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04)',
        'luxury-hover': '0 20px 40px -10px rgba(212, 175, 55, 0.16), 0 12px 24px -8px rgba(0, 0, 0, 0.06)',
        'soft': '0 4px 20px -2px rgba(235, 190, 197, 0.2)',
        'modal': '0 25px 60px -15px rgba(45, 37, 38, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.35s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
