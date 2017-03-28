'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-stylus');

    return {
        dist: {
            files: {
                '.dist/public/css/site.css': 'src/public/css/site.styl', // this is the site's styl file
                '.dist/public/css/bu.css': 'src/public/css/bu.styl' // this is the site's styl file
            }
        }
    };
};
