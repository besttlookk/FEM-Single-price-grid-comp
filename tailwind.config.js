module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        primary: "hsl(179, 62%, 43%)",
        "primary-light": "hsl(179, 62%, 48%)",

        secondary: "hsl(71, 73%, 54%)",
        "gray-light": "hsl(204, 43%, 93%)",
        "gray-blue": "hsl(218, 22%, 67%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },
    },
  },
  plugins: [],
};
