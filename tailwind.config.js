/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'sm':'475px',
        'md': '705px',
        'lg': '1024px',
        'xl': '1280px'
      },
    },
  },
  plugins: [],
};
