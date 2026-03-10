import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette: white / slate / dark blue civic-tech aesthetic
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7ff',
          300: '#a4bbfc',
          400: '#7f96f7',
          500: '#5b6ef0',
          600: '#3d50e3',
          700: '#2e3dc9',
          800: '#2533a3',
          900: '#1e2a7e',
          950: '#131a52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
