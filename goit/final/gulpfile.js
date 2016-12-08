'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src('./style/sass/main.scss')
  	.pipe(sourcemaps.init(''))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('style/css/*.css'));
});

gulp.task('clean', function () {
    del(['css']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass');
});

gulp.task('watch', function () {
  gulp.watch('./style/sass/*.scss', ['sass']);
});
