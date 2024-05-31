import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightSlateGray: '#D9E1F0',
      },
    },
  },
  plugins: [],
};

export default config;
