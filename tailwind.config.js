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
        primary: '#2A2A2A',
        secondary: '#007AFF',
        accent: '#FF9500',
        background: '#F2F2F7',
        'gray-ios': {
          50: '#F2F2F7',
          100: '#E5E5EA',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#2C2C2E',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'ios': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'ios-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '32': '8rem',
      },
      borderRadius: {
        'ios': '1.5rem',
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
} 