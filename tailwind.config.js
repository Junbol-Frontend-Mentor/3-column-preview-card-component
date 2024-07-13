module.exports = {
  content: [
    './src/**/*.{html,js,css}', // Include all CSS, HTML, and JS files in src directory
    './index.html', // Include the main HTML file
  ],
  theme: {
    extend: {
      height: {
        1000: '1000px', // Custom height class
      },
      minWidth: {
        50: '50px',
        200: '200px',
        600: '600px',
      },
      colors: {
        primary: {
          'bright-orange': 'hsl(31, 77%, 52%)',
          'dark-cyan': 'hsl(184, 100%, 22%)',
          'very-dark-cyan': 'hsl(179, 100%, 13%)',
        },
        neutral: {
          'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
          'very-light-gray': 'hsl(0, 0%, 95%)',
        },
      },
      fontFamily: {
        lexendDeco: ['Lexend Deco', 'sans-serif'],
        bigShoulders: ['Big Shoulders Display', 'sans-serif'],
      },
      screens: {
        '2xl': '1372px', // Custom breakpoint for 1372px
      },
    },
  },
  plugins: [],
};

