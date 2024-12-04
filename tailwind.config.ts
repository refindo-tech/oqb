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
        greenWhite: '#A3FFD6'
      },
    },
  },
  plugins: [],
} satisfies Config;
