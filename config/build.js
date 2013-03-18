({
  baseUrl: '../lib/javascripts',
  name: '../../node_modules/almond/almond',
  include: ['canon'],
  optimize: 'none',
  paths: {
    'ender': '../../node_modules/ender-library/ender'
  },
  shim: {
    'ender': { exports: 'ender' }
  },
  wrap: {
    startFile: 'start.js',
    endFile: 'end.js'
  },
  out: "../build/canon.js"
})
