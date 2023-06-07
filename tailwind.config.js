module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        skobeloff: "#116D6E",
        "blue-sapphire": "#116A7B",
        "dark-vanilla": "#CDC2AE",
        "dirty-white": "#ECE5C7",s
        "columbia-blue": "#C2DEDC",
        "blue-yonder": "#4F709C",
        temptress: "#321E1E",
      },
      keyframes: {
        blink: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
