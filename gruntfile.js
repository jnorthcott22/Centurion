
module.exports = function (grunt) {

  grunt.initConfig({

'sass': {
  target: {
    options: {
      precision: 4, // makes all decimals round to 4 places
      sourcemap: 'auto', // adds a sourcemap to compiled CSS for inspecting
      includePaths: ['node_modules/centurion-framework/lib/sass/']
    },
    files: {
      'stylesheets/index.css': 'stylesheets/index.scss'
    }
  }
},

watch: {
    files: ['stylesheets/index.scss'],
    tasks: ['sass']
   }
 });

 //grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-sass');

 grunt.registerTask('default', ['sass', 'watch']);

};
