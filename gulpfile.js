/**
* @Author: deepak
* @Date:   2017-01-06T22:56:56+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-06T23:03:53+11:00
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./styles"))
        .pipe(browserSync.stream());
});

// Static Server + watching files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
