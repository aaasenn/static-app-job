/** @type {import('tailwindcss').Config} */
import { teal, gray } from 'tailwindcss/colors';

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: teal[500],
          light: teal[500],
          dark: teal[500]
        },
        secondary: {
          DEFAULT: gray[100],
          light: gray[100],
          dark: gray[700]
        },
        background: {
          DEFAULT: teal[50],
        },
        text: {
          primary: gray[800],
          secondary: gray[600],
        },
      }
    },
  },
  plugins: [],
}

