/** @type {import('tailwindcss').Config} */
import { teal, gray } from 'tailwindcss/colors'

// 1 tailwind size is equal to 4px

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
          accent: teal[600],
          base: teal[100],
        },
        text: {
          primary: gray[800],
          secondary: gray[400],
          accent: teal[600]
        }
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px'
      }
    }
  },
  plugins: []
}
