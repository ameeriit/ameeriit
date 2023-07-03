module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        bulgatti: ["Bulgatti", "cursive"],
        itim: ["Itim", "sans-serif"],
      },
      colors: {
        "green-cm": "#004D40",
        "orange-cm": "#FF9F1C",
        "red-cm": "#ff4f3c",
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
        animate1: {
          "0%": { "stroke-dashoffset": 380 },
          "100%": { "stroke-dashoffset": 0 },
        },
        animate2: {
          "0%": { "stroke-dashoffset": 360 },
          "100%": { "stroke-dashoffset": 0 },
        },
        animate3: {
          "0%": { "stroke-dashoffset": 90 },
          "100%": { "stroke-dashoffset": 0 },
        },
        animate4: {
          "0%": { "stroke-dashoffset": 260 },
          "100%": { "stroke-dashoffset": 0 },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "rotate-img": "swing 5s ease-in-out infinite",
        animate1: "animate1 2s forwards",
        animate2: "animate2 2s forwards",
        animate3: "animate3 2s forwards",
        animate4: "animate3 2s forwards",
      },
    },
  },
  plugins: [],
};
