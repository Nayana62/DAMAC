/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/assets/home.jpg')",
        "home-bg-sm": "url('/assets/home-sm.jpg')",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        oswald: "var(--font-oswald)",
      },
      colors: {
        blue: "#17ABFF",
        darkBlue: "#00357B",
        customWhite: "#FCFCFC",
        lightGray: "#E7EBEF",
        lightBlue: "#98C5E8",
        lightCyan: "#F4F9FF",
        footerBg: "#091D41",
      },
      boxShadow: {
        custom: "0px 14px 34px -10px rgba(126, 126, 126, 0.35)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
