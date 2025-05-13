/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'bloom-fade-in': 'bloom-fade-in 1s linear alternate infinite',
        'revealing-fade-in': 'revealing-fade-in 1s ease-in alternate infinite',
        'zoom-fade-in': 'zoom-fade-in 1s ease-in alternate infinite',
      },
      keyframes: {
        'bloom-fade-in': {
          '0%': {
            opacity: 0,
            filter: 'brightness(1) blur(20px)',
          },
          '20%': {
            opacity: 0,
            filter: 'brightness(1) blur(20px)',
          },
          '30%': {
            opacity: 1,
            filter: 'brightness(2) blur(10px)',
          },
          '80%': {
            opacity: 1,
            filter: 'brightness(1) blur(0)',
          },
          '100%': {
            opacity: 1,
            filter: 'brightness(1) blur(0)',
          },
        },
        'revealing-fade-in': {
          '20%': {
            mask: 'linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400% no-repeat',
            opacity: '0.2',
          },
          '80%': {
            mask: 'linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat',
            opacity: '1',
          },
        },
        'zoom-fade-in': {
          '20%': {
            opacity: '0',
            'clip-path': 'inset(5%)',
            transform: 'scale(111.11%)',
          },
          '80%': {
            opacity: '1',
            'clip-path': 'inset(0)',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
