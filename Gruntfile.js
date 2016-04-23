/*global module:false*/
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n',
    // Task configuration
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
              'node_modules/jquery/dist/jquery.js',
              'src/assets/js/scripts/functions.js'
            ]
        }
      },
      options: {
        mangle: false,
        sourceMap : true,
        sourceMapName : 'src/assets/js/main.js.map'
      },
    },
    watch: {
      scss: {
        files: ['src/assets/css/scss/**/*.scss'],
        tasks: ['sass', 'notify:sass'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ['src/assets/js/scripts/**/*.js'],
        tasks: ['uglify', 'notify:js'],
        options: {
          spawn: false,
        },
      },
    },

    notify: {
      sass: {
        options: {
          title: '<%= pkg.title || pkg.name %> - SCSS',
          message: 'SCSS Compile finished running',
        }
      },
      js: {
        options: {
          title: '<%= pkg.title || pkg.name %> - JS',
          message: 'JS Uglify finished running',
        }
      },
    }

  });

  // Load Nom dep
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');

  // Tasks
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
