/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "#FFEDE8",
        foreground: "#351500",
        ink: "#351500",

        primary: {
          DEFAULT: "#FF8533",
          50: "#FFEDE8",
          100: "#FFBFA8",
          200: "#FF8533",
          300: "#CC6400",
          400: "#964700",
          500: "#632D00",
          600: "#351500",
        },

        secondary: {
          DEFAULT: "#33ADFF",
          50: "#E8F2FF",
          100: "#A7D0FF",
          200: "#33ADFF",
          300: "#0087CC",
          400: "#006296",
          500: "#003F63",
          600: "#001F34",
        },

        neutral: {
          DEFAULT: "#ADA5A2",
          50: "#F1F0F0",
          100: "#D1CDCB",
          200: "#ADA5A2",
          300: "#86807E",
          400: "#615D5B",
          500: "#3F3C3A",
          600: "#1F1D1D",
        },
      },

      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-dela-gothic-one)", "sans-serif"],
        logo: ["var(--font-dyna-puff)", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;
