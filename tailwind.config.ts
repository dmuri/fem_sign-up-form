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
        'red-primary': '#f54545',
        'green-primary': '#4edc91',
        'blue-accent': '#6d7aa8',
        'dark-blue-neutral': '#2a2f42',
        'grayish-blue-neutral': '#c5c9df'
      },
      backgroundImage: {
              'image': 'url("../public/images/bg-intro-desktop.png")',
      },
    },
  },
  plugins: [],
}
export default config
