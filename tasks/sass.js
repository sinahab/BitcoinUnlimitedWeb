'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');

    return {
        dist: {
            files: {
                '.dist/public/css/main.css': 'src/public/css/main.scss' // this is our main scss file
            }
        }
    };
};
