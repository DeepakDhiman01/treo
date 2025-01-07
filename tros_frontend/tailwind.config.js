/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': '#75C4E7',
      'opacity-color': '#B9E1F3',
    },
    extend: {
      backgroundImage:{
        'main-image': "url('./src/assets/images/Section_background_image.jpg')"
      },
      textStrokeWidth: {
        sm: "1px",
        md: "2px",
        lg: "3px",
      },
    },
  },
  plugins: [],
}