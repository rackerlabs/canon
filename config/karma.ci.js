var options = require('./karma.base');

options.autoWatch = false;
options.singleRun = true;
options.reporters = ['progress'];

module.exports = function (config) {
  config.set(options);
};
