import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F5F5F5',
        border: '#E5E5E5',
        text: '#171717',
        'text-muted': '#6B7280',
        accent: '#404040', /* Updated: gray accent primary */
        'accent-hover': '#171717', /* Added: darker gray for hover states */
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;