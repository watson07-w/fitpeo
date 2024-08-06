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
      textcolor: "#ffffff",
      order: "#3b82f6",
      delivered: "#22c55e",
      cancel: "#ef4444",
      revenue: "#db2777",
      star: "#eab308",
      shadowcolor: "#5b687b",
      iconsBackground:"#454648"
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
