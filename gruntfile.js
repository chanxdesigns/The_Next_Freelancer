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
        },
        copy: {
            html: {
                expand: true,
                cwd: '',
                src: '*.html',
                dest: 'dist/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default',['sass','copy']);
};