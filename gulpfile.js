var gulp = require('gulp'),
    critical = require('critical');


gulp.task('css', function(){
    return critical.generate({
        base: './',
        src: 'https://hom3chuk.github.io/furry-octo-succotash/',
        dest: './critical.css',
        extract: false,
        width: 2560,
        height: 1440,
        timeout: 300000,
        minify: false,
        renderWaitTime: 5000,
        blockJSRequests: false,
        ignore: []
    });
});

gulp.task('default', ['css']);
