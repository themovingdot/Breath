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
        'breathe': 'breathe 8s ease-in-out infinite',
        'breathe-delayed': 'breathe 8s ease-in-out infinite 1s',
        'fade-in': 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'scale(1.03)',
            opacity: '1',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '0.4',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
