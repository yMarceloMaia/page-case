/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      custom: {
        header: "#252F3D",
        footer: "#252F3D",
        white: "white",
        black: "#000000",
        gray: {
          100: "#FAFAFA",
          200: "#FFFFFF"
        },
        border: "#c2c2c2",
        red: "#fc1100",
        green: "#59AE43",
        blue: {
          500: "#2C7EF8",
          100: "#EDF3FD"
        }
        
      }
    }
  },
  plugins: [],
}
