

import { nextui } from '@nextui-org/theme'

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(tabs|modal|avatar|divider|spinner).js'
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
      fontFamily: {
        trap: ['var(--font-trap)']
      },

      colors: {
        // primary: tradewind
        // Secondary: Celery
        // Accent: Contessa

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
      keyframes: {
        "accordion-down": {
          from: { height: '0'},
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
}
export default config
