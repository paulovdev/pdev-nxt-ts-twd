import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p: "var(--p)",
        p2: "var(--p-2)",
        p3: "var(--p-3)",
        bg: "var(--bg)",
        bg2: "var(--bg-2)",
        bg2h: "var(--bg-2-hover)",
        bg3: "var(--bg-3)",
        bgn: "var(--bg-nav)",
        bL: "var(--bg-linear)",
        border: "var(--border)",
      },
      screens: {
        'mobile': '400px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
