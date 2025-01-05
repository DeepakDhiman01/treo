/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': '#75C4E7',
    },
    extend: {
      backgroundImage:{
        'main-image': "url('./src/assets/images/Section_background_image.jpg')"
      }
    },
  },
  plugins: [],
}