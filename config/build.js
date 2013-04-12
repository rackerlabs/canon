({
  baseUrl: '../lib/javascripts',
  name: '../../node_modules/almond/almond',
  include: ['canon'],
  paths: {
    'ender-amd': '../../node_modules/ender-amd/lib/ender-amd',
    'ender': '../../node_modules/ender-amd/lib/ender',
    'bean': '../../node_modules/ender-amd/node_modules/bean/bean',
    'bonzo': '../../node_modules/ender-amd/node_modules/bonzo/bonzo',
    'qwery': '../../node_modules/ender-amd/node_modules/qwery/qwery',
    'bean-ender': '../../node_modules/ender-amd/lib/bean-ender',
    'bonzo-ender': '../../node_modules/ender-amd/lib/bonzo-ender',
    'qwery-ender': '../../node_modules/ender-amd/lib/qwery-ender',
    'klass': '../../node_modules/klass/klass'
  },
  wrap: {
    startFile: 'start.js',
    endFile: 'end.js'
  }
})
