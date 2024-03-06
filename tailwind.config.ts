import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        red: '19',
        green: '18',
        blue: '18'
      }
    },
  },
  plugins: [],
}
export default config
