import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      textColor: "var(--text-color)",
      white: "var(--white-color)",
      black: "var(--black-color)",
      headingColor: "var(--text-color)",
      statsBg: "var(--stats-bg-color)",
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      outline: "var(--outline-color)",
    },
  },
  plugins: [],
};
export default config;
