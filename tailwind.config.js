module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        white_A700: "#ffffff",
        bluegray_200: "#bac1ce",
        gray_50: "#f9fbff",
        blue_A700: "#0061ff",
        colors: "#0061ffff",
        bluegray_100: "#d6dae2",
        bluegray_300: "#9ea8ba",
        gray_900: "#0d1624",
        bluegray_900: "#262b35",
        colors1: "#262b35ff",
        bluegray_400: "#74839d",
        colors2: "#74839dff",
        gray_700_11: "#55555511",
      },
      borderRadius: { radius4: "4px", radius6: "6px" },
      fontFamily: { gilroy: "Gilroy", opensans: "Open Sans" },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
