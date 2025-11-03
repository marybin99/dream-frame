/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
    },
  },
};
