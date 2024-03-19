import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      height: {
        screen: '100svh'
      },
      colors: {
        'base-black': '#141414',
        'base-white': '#e1e3e6',
        primary: '#222222'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
