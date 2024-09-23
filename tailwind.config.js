/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },

    maxWidth: {
      Container: "1592px",
    },
    colors:{
      BgColorwhite:"#FFFFFF",
      PrimaryColor:"#FF8D4D",
      SecondaryColor:"#1A1A1A",
      ThirdColor:"#4C4C4D"
    }
  },
  plugins: [],
};
