import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'red': '#e50914'
      },
      flexShrink: {
        4: '4'
      },
      letterSpacing: {
        3: '3px'
      }
    },
    fontSize: {
      loginTitle: '32px',
      fontTitle: '3rem'
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}