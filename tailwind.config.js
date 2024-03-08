/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["ui-sans-serif", "system-ui"],
      //   serif: ["ui-serif", "Georgia"],
      //   mono: ["ui-monospace", "SFMono-Regular"],
      //   display: ['"Chronicle Display"'],
      //   body: [
      //     '"Optima nova LT Pro"',
      //     "optimaNova",
      //     // '"OptimaNovaLTPro"',
      //     // "Chronicle Display",
      //     // "system-ui",
      //   ],
      // },
      fontFamily: {
        optimaNova: "optimaNova",
        display: "display",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        goldy: {
          DEFAULT: "var(--goldy)",
        },
      },
    },
  },
  plugins: [],
};
