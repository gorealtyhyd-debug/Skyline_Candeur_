import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#182340',
        panel: '#111A33',
        cream: '#F6F1E6',
        paper: '#F7F4EE',
        gold: '#E2CD8F',
        goldlight: '#F1E2B4',
        golddeep: '#9A7F3E',
        sand: '#E8D49C',
        taupe: '#A08F78',
        line: '#DCD3C3',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1440px' },
    },
  },
  plugins: [],
};

export default config;
