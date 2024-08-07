/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],

  theme: {
    colors: {
      grey: "#2a2b2f",
      primary: "#20202a",
      search: "#94a3b8",
      icon: "#7493ff",
      bgcolor: "#141416",
      textcolor: "#b3b4bb",
      order: "#293675",
      green: "#0a6951",
      cancel: "#f25a5d",
      revenue: "#de509b",
      star: "#eab308",
      shadowcolor: "#5b687b",
      icons: "#454648",
      value: "#ffffff",
      heading: "#dcdde1",
      correct: "#0a5845",
      wrong: "#6a3034",
    },
    extend: {
      width: {
        110: "900px",
        100: "550px",
      },
      spacing: {
        110: "170px",
      },
    },
  },
  plugins: [],
};
