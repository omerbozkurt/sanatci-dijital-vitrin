/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Lüks & sanatsal derinlik paleti
        ink: {
          900: '#0C0C0E', // en koyu zemin
          800: '#121214', // koyu antrasit (ana zemin)
          700: '#17171B',
          600: '#1E1E25',
        },
        night: {
          900: '#0B1020', // gece mavisi derin
          700: '#13203B',
          500: '#1B2C50',
        },
        gold: {
          300: '#F4DE9E',
          400: '#E7C766',
          500: '#D4AF37', // premium gold (vurgu)
          600: '#B8902A',
        },
        copper: {
          400: '#C9854F', // sıcak bakır / ahşap tını
          500: '#A9663A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.18), 0 20px 60px -20px rgba(212,175,55,0.25)',
        card: '0 30px 80px -30px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #F4DE9E 0%, #D4AF37 45%, #B8902A 100%)',
        'radial-fade': 'radial-gradient(1200px 600px at 70% -10%, rgba(27,44,80,0.55), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
