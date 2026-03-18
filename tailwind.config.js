export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#161616',
        ember: '#E8571A',
        gold: '#C9952A',
        cream: '#F5F0E8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Archivo Black"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif'],
        label: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        ember: '0 32px 100px -40px rgba(232, 87, 26, 0.58)',
        gold: '0 32px 100px -42px rgba(201, 149, 42, 0.45)',
      },
    },
  },
  plugins: [],
}
