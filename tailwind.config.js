/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(45deg, #2B2D42, #8D99AE)',
        'secondary-gradient': 'linear-gradient(45deg, #EF233C, #D90429)',
      },
      backgroundColor: {
        'custom-white': '#EDF2F4',
        'custom-dark': '#2B2D42',
        'custom-secondary': '#D90429',
        'custom-primary': '#2B2D42',
        'custom-primary-light': '#8D99AE',
        'custom-secondary-light': '#EF233C',
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
      },
    }
  },
  variants: {
    extend: {
      transform: ['hover'],
    }
  },
  plugins: [],
}

