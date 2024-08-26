import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '84px',
        footer: '256px',
      },
      minHeight: {
        main: 'calc(100% - 84px - 256px)',
      },
      maxWidth: {
        container: '1440px',
      },
      backgroundColor: {
        header: 'var(--background-header)',
        main: 'var(--background)',
        footer: 'var(--background-footer)',
        card: 'var(--background-card)',
      },
      colors: {
        primary: 'var(--background)',
        header: 'var(--text-header)',
        main: 'var(--text-primary)',
        footer: 'var(--text-header)',
        title: 'var(--text-title)',
        'text-blue': 'var(--text-blue)',
        'text-success': 'var(--color-success)',
        'text-warning': 'var(--color-warning)',
        'text-in-progress': 'var(--color-in-progress)',
        'bg-success': 'var(--bg-success)',
        'bg-warning': 'var(--bg-warning)',
        'bg-in-progress': 'var(--bg-in-progress)',
      },
    },
    container: {
      center: true,
      padding: '15px',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
}
export default config
