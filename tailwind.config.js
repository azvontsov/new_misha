/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightYellow: 'rgb(246, 174, 45)',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
