module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        itim: ["Itim", "sans-serif"],
        brunoace: ["BrunoAce", "sans-serif"],
      },
      colors: {
        skobeloff: "#116D6E",
        "blue-sapphire": "#116A7B",
        "dark-vanilla": "#CDC2AE",
        "dirty-white": "#ECE5C7",
        "columbia-blue": "#C2DEDC",
        "blue-yonder": "#4F709C",
        temptress: "#321E1E",
        "cetacean-blue": "#0E0F34",
        "picton-blue": "#45B1E8 ",
        malachite: "#5FDB86",
        iris: "#6147C6",
        "smoky-black": "#0C0D0F",
      },

      // keyframes: {
      //   blink: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" },
      //   },
      //   typing: {
      //     "100%": {
      //       left: "100%",
      //       margin: "0 15px",
      //     },
      //   },
      //   slide: {
      //     "100%": {
      //       top: "-80px",
      //     },
      //   },
      // },
      // animation: {
      //   ani: "typing 1.5s steps(9) infinite",
      //   sli: "slide 3s steps(2) infinite",
      // },
    },
  },
  plugins: [],
};
