/****
 Task Automation File
 */

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            compile: {
                src: 'assets/style/style.scss',
                dest: 'dist/assets/css/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default',['sass']);
};