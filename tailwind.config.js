/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0445E5",
        playground: "#B1C5F7",
        grayground: "#E6ECFC",
        lightgreen: "#4E4E4E" 
      },
    },
  },
  plugins: [],
};
