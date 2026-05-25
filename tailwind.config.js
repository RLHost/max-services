/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        max: {
          blue: '#1E2F4D',
          ice: '#F8F9FA',
          royal: '#0056B3',
          slate: '#6C757D',
          orange: '#FF8C00'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}