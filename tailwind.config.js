/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2B46',
          light: '#1A3A5C',
          dark: '#091E30',
          50: '#e8eff5',
          100: '#c5d4e3',
          200: '#9ab6cc',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#E8C870',
          dark: '#B8902E',
          50: '#fdf8ec',
          100: '#f9ecc7',
        },
        trust: '#2D8A4E',
        charcoal: '#1A1A2E',
        'warm-white': '#FAFAF7',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
