/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BgFirstPage: '#131213',
        selectSong: '#5B5A5B',
        hoverSong: '#2a2a2a',
        'n-floating': '#282929',
        'h-floating': '#3f3f3e',
        'n-playlist': '#1a1a1a',
        'h-playlist': '#222322',
        'n-createPlaylist': '#292928',
        'n-inputCreatePlaylist': '#3e3e3e',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
