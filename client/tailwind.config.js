/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/App.js', './screens/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}