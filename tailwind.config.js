const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  content: ["./public/**/*.{html,js}"],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    }, 

    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.5)',
      },
      
      fontFamily: {
        'IBM-Plex-Sans': ['IBM Plex Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Open-Sans': ['Open Sans', 'sans-serif'],
        'Neue-Haas-Grotesk': ['Neue Haas Grotesk'],
        'League-Spartan': ['League Spartan'],
        'Lato': ['Lato'],
      }
     
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
 
  ],
}
   

// npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch