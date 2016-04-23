/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n',
    // Task configuration.
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/css/scss',
          src: ['*.scss'],
          dest: 'src/assets/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'src/assets/js/main.js':
            [
              'src/assets/js/scripts/function1.js',
              'src/assets/js/scripts/function2.js'
            ]
        }
      }
    },
    watch: {
      scss: {
        files: ['src/assets/css/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ['src/assets/js/scripts/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
    }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
