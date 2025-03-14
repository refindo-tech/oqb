import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        'infinite-scroll': 'infinite-scroll 20s linear infinite'
      },
      fontFamily:{
        roboto:['Roboto', 'serif'],
        poppins:['Poppins', 'serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        biru: '#2F55D4',
        navy: '#041155',
        purple: '#8576FF',
        blueWhite: '#7BC9FF',
        greenWhite: '#A3FFD6',
        softBlue: "#5879C4",
        jungleGreen: "#22A585",
        mintGreen: "#37C287",
        cherryRed:  "#D92632",
        deepBlue: "#004EB2",
        skyBlue: "#2F96F4",
        lightBlue: "#BCE3F9",
        gold: "#F7C257",
        primerText: "#404040",
        secondaryText: "#404856",
        border: "#E2E1DE",
        lightGray: "#F7F5F2",
        subtleGray: "#F8F9FC"
      },
    },
  },
  plugins: [],
} satisfies Config;
