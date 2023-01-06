/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.twig', '*.twig'],
  darkMode: 'media',
  mode: 'jit',
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
    require("autoprefixer"),
    require("postcss")
  ],

  daisyui: {
    styled: true,
    // themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // dark: true
  }
};