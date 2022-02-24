module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5BB89C',
          hover: '#5BB89A',
        },
        secondary: {
          DEFAULT: '#F6F6F6',
        },
        text: {
          DEFAULT: '#444444',
        },
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
