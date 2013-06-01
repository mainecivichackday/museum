module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "index.html": "src/view/index.jade"
        }
      }
    },

    stylus: {
      compile: {
        files: {
          'main.css': 'src/stylesheets/main.styl'
        }
      }
    },

    watch: {
      files: 'src/**/*',
      tasks: ['jade', 'stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jade', 'stylus']);

};
