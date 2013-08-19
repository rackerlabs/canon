/* jshint camelcase:false */

var file, specs = [];

for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (file.match('_spec')) {
      specs.push(file);
    }
  }
}

requirejs.config({
  paths: {
    'canon': '/base/lib/javascripts/canon',
    'klass': '/base/node_modules/klass/klass'
  },
  deps: specs,
  callback: window.__karma__.start
});

