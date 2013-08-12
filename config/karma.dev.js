var options = require('./karma.base');

options.autoWatch = true;
options.singleRun = false;
options.reporters = ['progress'];

module.exports = function (config) {
  config.set(options);
};
