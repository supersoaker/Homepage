module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            build: {
                src: [
                    'js/jquery.min.js',
                    'js/with-jquery.js'
                ],
                dest: 'js/main.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "css/newstyle.css": "css/newstyle.less"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/main.min.css': [
                        'css/fonts.css',
                        'css/newstyle.css'
                    ]
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('all', ['uglify', 'less', 'cssmin']);
    grunt.registerTask('css', ['less', 'cssmin']);
    grunt.registerTask('js', ['uglify']);

    /* before using grunt:
    npm install grunt
    npm install grunt-contrib-uglify
    npm install
    */

};