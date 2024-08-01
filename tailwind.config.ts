import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#f5f5f0',
        'acn-bg': '#e1b7f7',
        'deloitte-bg': '#bcd68d',
        'kbtg-bg': '#f0bcc1',
        'border-custom': '#ecede5'
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
