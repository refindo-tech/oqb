import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'serif'],
        poppins:['Poppins', 'serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        biru: '#2F55D4'
      },
    },
  },
  plugins: [],
} satisfies Config;
