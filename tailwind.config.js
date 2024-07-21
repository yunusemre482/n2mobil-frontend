/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6C00',
          100: '#FFD9B3',
          200: '#FFC285',
          300: '#FFB056',
          400: '#FFA028',
          500: '#FF6C00',
          600: '#FF3A00',
          700: '#FF0700',
          800: '#CC0600',
          900: '#990400',
        },
        title:{
          DEFAULT:'#26303E',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#000000',
        },
        subtitle:{
          DEFAULT: '#5C6672',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#000000',
        },
        border:{
          DEFAULT: '#D8D9DD',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#000000',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}

