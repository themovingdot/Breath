import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['source-han-serif-sc', 'serif'],
        'kai': ['LXGW WenKai', 'serif'],
      },
      animation: {
        'breathe': 'breathe 8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'breathe-delayed': 'breathe 8s cubic-bezier(0.37, 0, 0.63, 1) infinite 1s',
        'fade-in': 'fadeIn 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.72',
          },
          '50%': {
            transform: 'scale(1.12)',
            opacity: '1',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '0.4',
          },
        },
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

export default config
