
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {

    extend: {
      fontFamily:{
        'pop':'Poppins',
        'in':'Inter'
      }
    },
  },
  plugins: [],
}
