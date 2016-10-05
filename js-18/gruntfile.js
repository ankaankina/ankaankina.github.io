module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/build/main.js'
      }
    },
    uglify: [{
      dist: {
        src: ['js/build/main.js'],
        dest: 'js/build/main.min.js'
      }
    },
    {
      dist: {
        src: ['css/style.css'],
        dest: 'css/style.min.css'
      }
    }]
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
