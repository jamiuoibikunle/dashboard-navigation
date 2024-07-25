/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        xs: "16rem",
        sm: "20rem",
        md: "24rem",
        lg: "28rem",
        xl: "32rem",
      },
      height: {
        full: "100dvh",
      },
    },
  },
  plugins: [],
};
