/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f2',
          100: '#e8e1dd',
          200: '#d4c3bc',
          300: '#b89c91',
          400: '#a07d6f',
          500: '#8d6557',
          600: '#7a5246',
          700: '#64433a',
          800: '#523a33',
          900: '#45332e',
          950: '#261b18',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c7c7c7',
          400: '#a3a3a3',
          500: '#878787',
          600: '#6f6f6f',
          700: '#5f5f5f',
          800: '#4f4f4f',
          900: '#454545',
          950: '#262626',
        },
        background: '#fafafa',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'ios': '1.25rem',
      },
      boxShadow: {
        'ios': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'ios-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'feature': '0 2px 40px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 