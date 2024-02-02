import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    boxShadow: {
      DEFAULT: "0 10px 20px 0 rgba(0,0,0,0.25)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: {
          50: "#eef8ff",
          100: "#dcf1ff",
          200: "#b2e5ff",
          300: "#6dd1ff",
          400: "#20baff",
          500: "#00a1ff",
          600: "#0080df",
          700: "#0065b4",
          800: "#005695",
          900: "#00467a",
          950: "#003561",
        },
        yellow: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff887",
          300: "#ffec43",
          400: "#ffda0a",
          500: "#efc203",
          600: "#ce9600",
          700: "#a46b04",
          800: "#88530b",
          900: "#734410",
          950: "#432305",
        },
        orange: {
          "50": "#fffbec",
          "100": "#fff7d3",
          "200": "#ffeba5",
          "300": "#ffdb6d",
          "400": "#ffbf32",
          "500": "#ffa80a",
          "600": "#f58b00",
          "700": "#cc6a02",
          "800": "#a1520b",
          "900": "#82450c",
          "950": "#462104",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
