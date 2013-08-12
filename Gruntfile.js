module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['.sass-cache', 'build', 'package']
    },
    jshint: {
      options: {
        camelcase: true,
        eqeqeq: true,
        expr: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        trailing: true,
        undef: true,
        unused: true
      },
      grunt: {
        src: ['Gruntfile.js'],
        options: {
          node: true
        }
      },
      source: {
        src: ['lib/javascripts/**/*.js', 'spec/unit/**/*.js'],
        options: {
          browser: true,
          jquery: true,
          globals: {
            // RequireJS
            define: true,
            require: true,
            requirejs: true,

            // Jasmine
            afterEach: true,
            beforeEach: true,
            describe: true,
            expect: true,
            it: true,
            jasmine: true,

            // jasmine-jquery
            sandbox: true
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['clean', 'jshint']);
};
