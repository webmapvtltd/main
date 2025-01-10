/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          700: '#1a2a3d',
          800: '#0d1b2a',
        },
        'gold': {
          400: '#f5a623',
        },
      },
    },
  },
  plugins: [],
}