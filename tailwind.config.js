/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables manual dark mode switching
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        equinox: ['Equinox', 'sans-serif'], // Add Equinox here
      },
    },
  },
  
  plugins: [],
};
