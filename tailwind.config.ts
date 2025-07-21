// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Add correct paths for your project
    './app/**/*.{js,ts,jsx,tsx}', // If you're using App Router
    './pages/**/*.{js,ts,jsx,tsx}', // If using pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
