module.exports = {
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.rotate-y-3d': {
          transform: 'rotateY(10deg)',
        },
      })
    }
  ]
}