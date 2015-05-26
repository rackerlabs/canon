/* global module */
/* global process */

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: ['.sass-cache', '_site', 'build', 'dist', 'package']
    },
    sprite:{
      all: {
        src: 'lib/images/icon/*.png',
        dest: 'lib/images/icons.png',
        imgPath: 'icons.png',
        destCss: 'lib/stylesheets/_spritesheet.scss',
        padding: 10,
        algorithm: 'top-down',
        cssOpts: {functions: false}
      }
    },
    sass: {
      options: {
        includePaths: ['./components'],
        outputStyle: 'compact'
      },
      dist: {
        files: {
          'dist/canon.css': 'lib/stylesheets/canon.scss'
        }
      }
    },
    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        src: 'dist/canon.css',
        dest: 'dist/canon.css'
      },
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
      fonts: {
        files: [
          { expand: true, cwd: 'lib/fonts/', src: '*', dest: 'dist/', filter: 'isFile' }
        ]
      },
      images: {
        files: [
          { expand: true, cwd: 'lib/images/', src: '*', dest: 'dist/', filter: 'isFile' }
        ]
      },
      website: {
        files: [
          { expand: true, cwd: 'dist/', src: '*', dest: '_site/assets', filter: 'isFile' }
        ]
      }
    },
    jshint: {
      options: {
        // Options
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
        unused: true,

        // Environments
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
      },
      all: {
        src: ['Gruntfile.js', 'lib/javascripts/**/*.js', 'spec/unit/**/*.js']
      }
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
      options: {
        middleware: function (connect) {
          var livereload = require('connect-livereload');

          return [
            livereload(),
            connect.static('dist'),
            connect.static('examples'),
            connect.static('_site'),
            connect.directory('examples'),
          ];
        }
      },
      server: {
        options: {
          port: process.env.CANON_PORT || 8000
        }
      },
      test: {
        options: {
          port: process.env.CANON_TEST_PORT || 9000
        }
      }
    },
    exec: {
      rspec: {
        cmd: function (pattern) {
          var command = 'bundle exec rspec ' + pattern;

          if (process.env.CANON_ENV === 'test') {
            command += ' --format CI::Reporter::RSpec';
          }

          return command;
        }
      },
      jekyll: {
        cmd: 'bundle exec jekyll build --config config/jekyll.dev.yml'
      },
      jekyllProd: {
        cmd: 'bundle exec jekyll build'
      }
    },
    watch: {
      css: {
        files: ['lib/stylesheets/**/*.scss'],
        tasks: ['build:css'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['lib/javascripts/**/*.js'],
        tasks: ['build:js'],
        options: {
          livereload: true
        }
      },
      website: {
        files: ['docs/**/*'],
        tasks: ['build:website'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['examples/**/*.html'],
        options: {
          livereload: true
        }
      },
      copy: {
        files: ['lib/fonts/**/*', 'lib/images/**/*'],
        tasks: ['build'],
        options: {
          livereload: true
        }
      },
      jshint: {
        files: ['Gruntfile.js', 'lib/javascripts/**/*.js', 'spec/unit/**/*.js'],
        tasks: ['jshint:all']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['build', 'test']);

  grunt.registerTask('build', ['clean', 'copy:fonts', 'sprite', 'copy:images', 'build:css', 'build:js', 'build:website']);
  grunt.registerTask('build:css', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('build:js', ['requirejs', 'uglify']);
  grunt.registerTask('build:website', ['exec:jekyll', 'copy:website']);
  grunt.registerTask('build:websiteProd', ['exec:jekyllProd', 'copy:website']);

  grunt.registerTask('server', ['build', 'connect:server', 'watch']);

  grunt.registerTask('test', function () {
    grunt.task.run([
      'jshint:all',
      'karma:ci'
    ]);
  });
  grunt.registerTask('test:screenshot', ['connect:test']);
};
