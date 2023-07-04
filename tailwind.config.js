/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: true,
  prefix: 'tw-',
  content: [
    './layout/',
    './sections/',
    './snippets/',
    './templates/customers/',
    './templates/',
    './assets/*.js',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      height: {
        '600': '48rem',
      },
      fontFamily: {
        'serif': ['Castoro'],
        'poppins': ['Poppins'],
      },
      colors: {
        'color-1': '#f1ba41',
        'color-2': '#292929',
        'color-3': '#957162',
        'color-4': '#404852',
        'color-5': '#808083',
        'color-6': '#bcbec0',
        'color-7': '#d8d8d8',
        'color-8': '#000',
        'dorado': '#957161',
        'gris': '#434F5A',
        'dorado': '#957161',
        'gris': '#434F5A',
        'gris-titular': '#434e5a',
        'gris-lineal': '#d8d8d8',
        'gris-oscuro': '#3E3E3E',
        'amarillo': '#f0ba42',
        'carne':'#F4EEE9',
        'mamey':'#F9F0E5',
        'madre':'#e8bba5',
        'gris-claro':'#f7f7f7',
        'gris-zigzag':'#f8f8f8',
        'gris-zigzag-obscuro':'#f4f4f4',
        'cafe':'#6D4A3A',
        'cremita':'#FDF7F0',
        'hotsale':'#c8273a',
        'brown':'#6D4939',
        'coupon-one':'#F2E0D0',
        'coupon-two':'#FFF5EE',
        'bamboo':'#E6E3D8'
        
      },
      gridRow: {
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
    }
  }, 
  variants: {},
  plugins: [],
}
