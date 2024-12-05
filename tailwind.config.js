/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#669B27",
        playground: "#F0F5E9",
        "light-ground": "#f7f9f6",
        "light-gray": "#979797",
        lightgreen: "#4E4E4E" 
      },
    },
  },
  plugins: [],
};
