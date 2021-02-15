module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#989EA7',
        'primary-light': '#E8EDF3',
        'primary-dark': '#313E4F',
        'accent-blue': '#33A6BA',
        'accent-red': '#FF7B92',
        'background-color': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
