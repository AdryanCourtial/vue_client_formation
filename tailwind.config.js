/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  /** @type {import('tailwindcss').Config} */
  theme: {
    extend: {
    colors: {
      'primary-color': '#B99AB4',
      'secondary-color': '#5EBAA9',
      'black': '#3D3D3D',
      'my-white': '#F2EBE8',
      'green-button': '#3CB371'
    },
    dropShadow: {
      'result-annuaire': '0 10px 4px rgba(0, 0, 0, 0.25)',
    }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

