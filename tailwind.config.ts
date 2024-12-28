/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        darkblue: "var(--dark-blue)",
        grayblue: "var(--gray-blue)",
        lightgrayblue: "var(--light-gray-blue)",
        lightgray: "var(--light-gray)",
        modblue: "var(--mod-blue)",
        error: "var(--err-delete)",
        erroractive: "var(--err-delete-active)",
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
export default config;
