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
    extend: {},
  },
  plugins: [],
}
