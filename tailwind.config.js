/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "border-color": "#F0F0F5",
        "quantity-background": "#e5e5e5",
        "label-color": "#808080",
        "border-top": "#E6E6EB",
        "button-color": "#F67599",
      },
    },
  },
  plugins: [],
};
