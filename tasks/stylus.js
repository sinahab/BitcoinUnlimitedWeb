'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-stylus');

    return {
        dist: {
            files: {
                '.dist/public/css/main.css': 'src/public/css/main.styl' // this is our main styl file
            }
        }
    };
};
