import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        border: 'var(--border)',
        cardbg: 'var(--card-bg)',
        hoverbg: 'var(--hover-bg)',
        headerbg: 'var(--header-bg)',
        buttonbg: 'var(--button-bg)',
        buttontext: 'var(--button-text)',
        buttonhover: 'var(--button-hover)',
      },
      // ... diğer extend ayarları ...
    }
  },
  plugins: [],
};
export default config;
