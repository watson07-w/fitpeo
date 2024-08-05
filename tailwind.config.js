/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],

  theme: {
    colors: {
      grey: "#111827",
      primary: "#1e1b4b",
      search: "#94a3b8",
      icon: "#2563eb",
      bgcolor: "#172554",
      textcolor: "#ffffff",
      order: "#3b82f6",
      delivered: "#22c55e",
      cancel: "#ef4444",
      revenue: "#db2777",
      star: "#eab308",
      shadowcolor: "#5b687b",
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
