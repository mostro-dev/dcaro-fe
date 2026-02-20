import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Colors from Figma Design System (Caro_ prefix stripped)
      colors: {
        black: '#232C33',
        red: '#F05D5E',
        blue: '#A0C1D1',
        grey: '#B5B2C2',
      },
      // Font families from Figma Design System
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        jura: ['Jura', 'sans-serif'],
      },
      // Font sizes from Figma Design System (with lineHeight 1 = 100%)
      fontSize: {
        // Caro_H1: Montserrat Medium, 20px
        'h1': ['20px', { lineHeight: '1', letterSpacing: '0', fontWeight: '500' }],
        // Caro_H2: Montserrat Medium, 16px
        'h2': ['16px', { lineHeight: '1', letterSpacing: '0', fontWeight: '500' }],
        // Caro_H3: Montserrat Regular, 15px
        'h3': ['15px', { lineHeight: '1', letterSpacing: '0', fontWeight: '400' }],
        // Caro_Regular: Montserrat Regular, 15px
        'regular': ['15px', { lineHeight: '1', letterSpacing: '0', fontWeight: '400' }],
        // Caro_Small: Jura Regular, 11px
        'small': ['11px', { lineHeight: '1', letterSpacing: '0', fontWeight: '400' }],
        // Caro_Xsmall: Jura Regular, 7px
        'xsmall': ['7px', { lineHeight: '1', letterSpacing: '0', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}

export default config
