export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#00D9B5',
        'mint-light': '#1DE9B6',
      },
      fontFamily: {
        'impact': ['Impact', 'Arial Black', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-xl': '-0.05em',
      },
    },
  },
  plugins: [],
}