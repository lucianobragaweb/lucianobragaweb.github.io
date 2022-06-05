module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
      serif: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      colors: {
        'gray-100': '#607B96',
        'gray-200': '#1E2D3D',
        'gray-600': '#011627',
        'gray-800': '#010C15',
        'green-link': '#43D9AD'
      }
    },
  },
  plugins: [],
}
