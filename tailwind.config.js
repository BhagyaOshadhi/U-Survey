module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',// or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active','group-focus'],
      divideColor: ['group-hover'],
      scale: ['focus-within'],
      opacity: ['disabled'],
      textColor: ['visited'],
       // darkMode: 'media',
      textOpacity: ['dark'],
      // darkMode: 'class',

    },
  },
  plugins: [],
}
