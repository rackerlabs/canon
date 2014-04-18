module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: ['.sass-cache', '_site', 'dist']
    },
    connect: {
      docs: {
        options: {
          base: '_site',
          port: 8000,
          livereload: true
        }
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        src: 'doc'
      },
      doctor: {
        options: {
          doctor: true
        }
      },
      build: {

      }
    },
    sass: {
      options: {
        bundleExec: true,
        sourcemap: true
      },
      build: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/canon.css': 'lib/stylesheets/canon.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/canon.min.css': 'lib/stylesheets/canon.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      docs: {
        files: ['doc/**/*'],
        tasks: ['build:docs']
      },
      sass: {
        files: ['lib/**/*'],
        tasks: ['build:css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', 'Build the CSS and documentation.', ['clean:all', 'build:css', 'build:docs']);
  grunt.registerTask('build:css', 'Build the CSS.', ['sass:build', 'sass:dist']);
  grunt.registerTask('build:docs', 'Build the documentation.', ['jekyll:build']);
  grunt.registerTask('release', 'Deploy Canon CSS and documentation.', []);
  grunt.registerTask('server', 'Start the Canon development server.', ['build', 'connect:docs', 'watch']);
  grunt.registerTask('test:record', 'Record Janus screenshots.', []);
  grunt.registerTask('test:validate', 'Validate Janus screenshots.', []);
};
