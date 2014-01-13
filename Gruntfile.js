module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      dist: ['.sass-cache', 'dist']
    },
    sass: {
      options: {
        style: 'expanded',
        loadPath: ['bower_components']
      },
      dist: {
        files: {
          'dist/canon.base.css': 'lib/base/stylesheets/main.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['dist/**.css'],
        dest: 'dist/canon.css'
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/canon.min.css': 'dist/canon.css',
          'dist/canon.base.min.css': 'dist/canon.base.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['dist']);
  grunt.registerTask('dist', ['clean', 'sass', 'concat', 'cssmin']);
};
