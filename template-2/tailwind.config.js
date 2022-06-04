module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // add or change fonts
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        vacation:
          "url('./src/assets/img/pexels-thorsten-technoman-338504.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
