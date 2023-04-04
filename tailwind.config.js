/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#FA7C54',
      dark_red: '#EC2C5A',
      red_icon: '#F76A56',
      black: '#4D4D4D',
      bg_primary: '#F3F3F7',
      white: '#FFFFFF',
      gray: '#A7A7A7',
      dark_gray: '#8A8A8A',
      green: '#4AC156',
      dark_green: '#42BB4E',
      violet: '#926CFF',
      orange: '#F27851',
    },
    fontFamily: {
      primary_fonts: ['Inter', 'sans-serif'],
      secondary_fonts: ['Orbitron', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
