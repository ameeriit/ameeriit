module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        itim: ["Itim", "sans-serif"],
        brunoace: ["BrunoAce", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        bulgatti: ["Bulgatti", "cursive"],
      },
      colors: {
        "green-cm": "#004D40",
        "orange-cm": "#FF9F1C",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        swing: {
          "0%": { transform: "rotate(0)", transformOrigin: "center" },
          "45%": { transform: "rotate(-45deg)", transformOrigin: "center" },
          "75%": { transform: "rotate(75deg)", transformOrigin: "center" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "rotate-img": "swing 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
