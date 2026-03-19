/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        pitch: '#111111',
        grass: '#0F2A25',
        gold: '#C6A85B',
        'gold-light': '#D4BA7F',
        chalk: '#EDEDED',
        'warm-gray': '#8A8478'
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
