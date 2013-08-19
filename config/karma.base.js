module.exports = {
  basePath: '..',
  files: [
    { pattern: 'node_modules/klass/**/*.js', included: false },
    { pattern: 'lib/javascripts/**/*.js', included: false },
    { pattern: 'spec/unit/**/*_spec.js', included: false },
    'components/jquery/jquery.js',
    'components/jasmine-jquery/lib/jasmine-jquery.js',
    'spec/unit/spec_helper.js'
  ],
  frameworks: ['jasmine', 'requirejs'],
  browsers: ['PhantomJS']
};
