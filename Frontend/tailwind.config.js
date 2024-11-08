/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'circle': 'circle(50% at 50% 50%)', // Clip the element into a circle
      },
    },
  },
  plugins: [],
}
