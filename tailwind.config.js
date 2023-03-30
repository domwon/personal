/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF6161",
          "secondary": "#E85BFF",
          "accent": "#5b9dff",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#45d1ed",
          "success": "#52E49E",
          "warning": "#ffc75b",
          "error": "#ff655b",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
