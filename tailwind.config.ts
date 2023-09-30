import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      
      colors: {
        // primary: tradewind
        // secondary: Contessa
        // Accent: Celery

        tradewind: {
          50: "#eff9f7",
          100: "#e0f2ef",
          200: "#d0ece7",
          300: "#c0e5df",
          400: "#b1dfd7",
          500: "#a1d8ce",
          600: "#91d2c6",
          700: "#81cbbe",
          800: "#72c5b6",
          900: "#62beae",
        },
        contessa: {
          50: "#f9eff1",
          100: "#f2e0e3",
          200: "#ecd0d5",
          300: "#e5c0c7",
          400: "#dfb1b9",
          500: "#d8a1aa",
          600: "#d2919c",
          700: "#cb818e",
          800: "#c57280",
          900: "#be6272",
        },
        celery: {
          50: "#f6f9ef",
          100: "#ecf2e0",
          200: "#e3ecd0",
          300: "#d9e5c0",
          400: "#d0dfb1",
          500: "#c6d8a1",
          600: "#bdd291",
          700: "#b3cb81",
          800: "#aac572",
          900: "#a0be62",
        },
        dark: {
          50: "#315f57",
          100: "#274c46",
          200: "#1d3934",
          300: "#142623",
          400: "#0a1311",
          500: "#000000",
        }
      },
     
    },
  },
  plugins: [],
}
export default config
