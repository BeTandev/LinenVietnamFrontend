/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      width: {
        'calc': 'calc',
      },
      colors: {
        'background-200': '#F6F5ED',
        'background-400': '#F1EFE6',
        'dark': '#000000',
        'gold':{
          '200': '#C19A5B',
          '400': '#B48B48'
        },
      },
      keyframes:{
        slideLeft:{
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'}
        },
        fadeIn:{
          from: {
            opacity: 0
          },
          to:{
            opacity: 1
          }
        },
        slideRight:{
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'}
        },
        fadeOut:{
          from: {
            opacity: 1
          },
          to:{
            opacity: 0
          }
        },
      },
      animation:{
        slideLeft: 'slideLeft 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideRight: 'slideRight 0.4s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out'
      },
      screens:{
        'xs': '480px',
      },
      translate: {
        '40%': '40%',
      },
      fontWeight:{
        'dropdown-menu': '400'
      },
    }
  },
  plugins: [],
}

