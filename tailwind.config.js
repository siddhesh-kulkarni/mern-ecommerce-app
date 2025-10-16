/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252', // Custom primary color
      },
    },
  },
  plugins: [],
}
