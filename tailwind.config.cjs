/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 40s linear infinite'
      },
      keyframes: {
        slide: {
          '0%': {
            '-webkit-transform': 'translate3d(0, 0, 0)',
            '-moz-transform': 'translate3d(0, 0, 0)',
            'transform': 'translate3d(0, 0, 0)',
          },
          '100%': {
            '-webkit-transform': 'translate3d(-100%,0,0)',
            '-moz-transform': 'translate3d(-100%,0,0)',
            'transform': 'translate3d(-100%,0,0)',
          }
        }
      }
    },
  },
  plugins: [],
}
