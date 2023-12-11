/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
      },
      colors : {
        themeColor1: '#C31815',
        themeColor2: '#0E1E32',
        themeColor3: '#F1F2F3'
      }
    },
  },
  plugins: [
    
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}

