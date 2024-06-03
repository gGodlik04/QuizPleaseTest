/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        '0.75': '0.75rem',
        '0.875': '0.875rem',
      },
      width: {
        '0.875': '0.875rem',
      },
      height: {
        '0.875': '0.875rem',
      }
    },
  },
  plugins: [],
}

