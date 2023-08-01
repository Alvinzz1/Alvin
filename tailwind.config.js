/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },
    extend: {
      colors: {
        primary: '#b91c1c',
        dark: '#0f172a',
        secondary: '#64748b',

      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
