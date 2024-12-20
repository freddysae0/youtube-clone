/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        primary: {
          light: '#FF0000', // Color para el tema claro
          dark: '#800000',  // Color para el tema oscuro
        },
        secondary: {
          light: '#EE0000',
          dark: '#660000',
        },
        inputBg: {
          light: '#F5F5F5',
          dark: '#911',
        },
        yellow: {
          light: '#facc15',
          dark: '#eaac05',
        },
      }
    },
  },
  plugins: [],
}



