module.exports = function (grunt) {
  grunt.initConfig({});

  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', 'Build the CSS and documentation', ['build:css', 'build:docs']);
  grunt.registerTask('build:css', 'Build the CSS', []);
  grunt.registerTask('build:docs', 'Build the documentation', []);

  grunt.registerTask('release', 'Deploy Canon CSS and documentation', []);

  grunt.registerTask('server', 'Start the Canon development server', ['build', 'connect:server', 'watch']);

  grunt.registerTask('test:record', 'Record Janus screenshots', []);
  grunt.registerTask('test:validate', 'Validate Janus screenshots', []);
};
