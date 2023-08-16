const defaultTheme = require("tailwindcss/defaultTheme");

// max-sm	 (min-width: 640px)
// max-md	 (min-width: 768px)
// max-lg	 (min-width: 1024px)
// max-xl	 (min-width: 1280px)
// max-2xl (min-width: 1536px)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "@/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      start: "100px",
      xs: "350px",
      xxs: "450px",
      sm: "540px",
      xsm: "640px",
      md: "830px",
      lg: "1024px",
      xl: "1430px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
