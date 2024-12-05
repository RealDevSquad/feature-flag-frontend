// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#1d1283',
          light: '#041187',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#aeaeae',
        },
        accent: '#87d870',
      },
    },
  },
  plugins: [],
};
