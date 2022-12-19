module.exports = {
  purge: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        game: [
        '"Press Start 2P"',
        ]
      }
    },
  },
  variants: {
    extend: {
      scale: ["hover"]
    },
  },
  plugins: [],
}
