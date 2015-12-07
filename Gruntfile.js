/*!
 * ESRI-Angular-Leaflet's Gruntfile
 * Copyright 2015 Anne Canoune
 * 
 */

module.exports = function (grunt) {

/** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var taskConfig = {

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * ESRI-Angular-Leaflet v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Compiled by Anne Canoune (<%= grunt.template.today() %>)\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' *\n' +
            ' * Please report any bugs you find (<%= pkg.bugs.url %>)\n' +
            '*/\n',
    

    // Task configuration.
    clean: {
      dist: ['dist']
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min'

      },
      dist: {
        files: {
        'dist/esri-angular-leaflet.min.js': ['components/**/*-directive.js']
        } 
      }
    }
};

grunt.initConfig( grunt.util._.extend( taskConfig ) );

/**
* The default task is to build and compile.
*/
  grunt.registerTask( 'default', [ 'build' ] );

/**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask( 'build', [
    'clean', 'uglify'
  ]);

}