/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans, sans-serif"],
        inter: ["Inter, sans-serif"],
        roboto: ["Roboto, sans-serif"]
      }
    },
  },
  plugins: [],
}

