/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(0,15,44,255)',
        navy: '#0A2540',
      },
    },
  },
  plugins: [],
}
