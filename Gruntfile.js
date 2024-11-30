module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false,
                },
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/*.js'],
                dest: 'js/script.js',
            },
        },
        uglify: {
            options: {
                sourceMap: true,
            },
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js'],
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('js', ['concat', 'uglify']);
};
