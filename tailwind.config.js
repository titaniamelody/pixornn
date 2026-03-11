/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'general': ['General Sans', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'zentry': ['zentry', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
