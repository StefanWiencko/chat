/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "MAIN-azure": "#85DCFF",
        "MAIN-pink": "#FF85BE",
        "MAIN-lapis": "#2F6690",
        "MAIN-indygo": "#16425B",
        "MAIN-mindaro": "#CAFF8A",
      },
    },
  },
  plugins: [],
};
