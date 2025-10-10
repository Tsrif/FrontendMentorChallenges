export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'preset1': ['22px', { lineHeight: '1.2' }],
        'preset2': ['15px', { lineHeight: '1.4' }],
      },
      letterSpacing: {
        tightest: '0.0125em',
      },
    },
  },
  plugins: [],
}
