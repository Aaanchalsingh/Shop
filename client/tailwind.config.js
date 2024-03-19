/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Authentication/Login/**/*.jsx",
    "./src/components/Authentication/Register/**/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
