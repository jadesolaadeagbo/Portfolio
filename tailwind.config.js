/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, hsla(51, 100%, 1%, 1) 80%, hsla(7, 49%, 30%, 1) 100%)',
        'about-gradient': 'linear-gradient(to top right, hsla(180, 8%, 3%, 1) 80%, hsla(7, 49%, 30%, 1) 100%)',
        'experience-gradient': 'linear-gradient(to top left, hsla(180, 8%, 3%, 1) 71%, hsla(7, 49%, 30%, 1) 100%)',
        'project-gradient': 'linear-gradient(to top right, hsla(180, 8%, 3%, 1) 71%, hsla(7, 49%, 30%, 1) 100%)',
      },
      colors: {
        'customOrange': '#D65341',
        'opaqueOrange': 'rgba(214, 83, 65, 0.1)'
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}