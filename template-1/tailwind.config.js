// tailwind.config = {
//   theme: {
//     extend: {
//       fontFamily: {
//         quicksand: "'Quicksand', sans-serif",
//         poppins: "'Poppins', sans-serif",
//       },
//     },
//   },
// };
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
