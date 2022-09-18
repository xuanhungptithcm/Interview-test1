/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'content-primary': 'var(--content-primary)',
        'white': 'var(--text-white)',
        'secondary': 'var(--text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        yellow: 'var(--bg-yellow)',
        secondary: 'var(--bg-secondary)',
        white: 'var(--bg-white)',
        pink: 'var(--bg-pink)',
        blue: 'var(--bg-blue)',
        orange: 'var(--bg-orange)',
      },
    },
    screens: {
      'md': '823px',
    }
  },
  plugins: [],
};
