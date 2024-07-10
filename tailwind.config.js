/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow:{
        'custom-text-shadow': '1px 1px 0 var(--tw-shadow-color)',
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(45deg, #2B2D42, #8D99AE)',
        'secondary-gradient': 'linear-gradient(45deg, #EF233C, #D90429)',
        'stone': 'url(\'../public/img/stonetexture.jpg\')',
        'dirt': 'url(\'../public/img/dirt.jpeg\')',
      },
      backgroundColor: {
        'custom-white': 'rgb(228,228,228)',
        'custom-dark': '#2B2D42',
        'custom-secondary': '#D90429',
        'custom-primary': '#2B2D42',
        'custom-primary-light': '#8D99AE',
        'custom-secondary-light': '#EF233C',
        'minecraft-button': '#AAAAAA',
        'minecraft-hover': 'rgb(125,163,246)',
        'minecraft-shadow-color': '#1f2937',
      },
      colors: {
        'custom-white': '#EDF2F4',
        'custom-dark': '#2B2D42',
        'custom-secondary': '#D90429',
      },
      ringColor: {
        'custom-secondary': '#D90429',
      },
      borderColor: {
        'custom-secondary': '#D90429',
        'custom-primary': '#2B2D42',
        'custom-primary-light': '#8D99AE',
        'custom-secondary-light': '#EF233C',
        'custom-white': 'rgb(228,228,228)',
        'custom-dark-grey':'rgb(72,72,72)',
      },
      content:{
        'custom-test': '',
      }
    }
  },
  variants: {
    extend: {
      transform: ['hover'],
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

