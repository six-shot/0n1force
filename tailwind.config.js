/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          200: "#171717",
          600: "#222",
        },
        primary: "#EB5855",
      },
    },
  },
  plugins: [],
};
