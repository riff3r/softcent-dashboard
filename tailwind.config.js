/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2980FF",
          secondary: "#1b1b1b",
          accent: "#F6FAFF",
          green: "#19B846",
          neutral: "#f4f4f4",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
