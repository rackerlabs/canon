module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: ['.sass-cache', 'build', 'dist', 'package']
    },
    compass: {
      all: {
        config: 'config/compass.rb'
      }
    },
    cssmin: {
      all: {
        files: {
          'dist/canon.min.css': ['dist/canon.css']
        }
      }
    },
    requirejs: {
      all: {
        options: {
          baseUrl: 'lib/javascripts',
          name: '../../node_modules/almond/almond',
          include: ['canon'],
          paths: {
            'klass': '../../node_modules/klass/klass'
          },
          wrap: {
            startFile: 'config/start.js',
            endFile: 'config/end.js'
          },
          optimize: 'none',
          out: 'dist/canon.js'
        }
      }
    },
    uglify: {
      all: {
        files: {
          'dist/canon.min.js': ['dist/canon.js']
        }
      }
    },
    copy: {
      all: {
        files: [
          { expand: true, cwd: 'lib/fonts/', src: '*', dest: 'dist/', filter: 'isFile' },
          { expand: true, cwd: 'lib/images/', src: '*', dest: 'dist/', filter: 'isFile' }
        ]
      }
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
      },
    },
    karma: {
      dev: {
        configFile: 'config/karma.dev.js'
      },
      ci: {
        configFile: 'config/karma.ci.js'
      }
    },
    connect: {
      server: {
        options: {
          middleware: function (connect) {
            var livereload = require('connect-livereload');

            return [
              livereload(),
              connect.static('dist'),
              connect.static('examples'),
              connect.directory('examples')
            ]
          }
        }
      }
    },
    exec: {
      rspec: {
        cmd: function (pattern) {
          var command = 'bundle exec rspec ' + pattern;

          if (process.env.CANON_ENV === 'test') {
            command += ' --format CI::Reporter::RSpec'
          }

          return command;
        }
      }
    },
    watch: {
      all: {
        files: ['lib/javascripts/**/*.js', 'lib/stylesheets/**/*.scss'],
        tasks: ['build'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint', 'build', 'test']);

  grunt.registerTask('build', ['clean', 'compass', 'requirejs', 'cssmin', 'uglify', 'copy']);

  grunt.registerTask('test', ['karma:ci', 'exec:rspec:spec/screenshot', 'exec:rspec:spec/functional']);

  grunt.registerTask('server', ['build', 'connect:server', 'watch']);
};
