({
  baseUrl: '../lib/javascripts',
  name: '../../node_modules/almond/almond',
  include: ['canon'],
  optimize: 'none',
  wrap: {
    startFile: 'start.js',
    endFile: 'end.js'
  },
  out: "../build/canon.js"
})
