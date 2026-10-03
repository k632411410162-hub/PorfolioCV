/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#050505',
        card: '#111111',
        footer: '#080808',
        lime: {
          primary: '#DCFF00',
          variant: '#D8F90A',
          hover: '#c9ea00',
        },
        portfolio: {
          main: '#F2F2F2',
          secondary: '#E8E8E8',
          muted: '#83837D',
          border: '#8F8E88',
          darkText: '#0A0A0A',
          darkVariant: '#1E1E1E',
        }
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
