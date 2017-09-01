'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	series = require('gulp-series'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	return gulp.src('sass/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css'))
});

gulp.task('views', function() {
	return gulp.src('pug/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./'))
});

gulp.task('build', gulp.series('sass', 'views'));

gulp.task('watch', function () {
  // Watch for style changes and compile
  gulp.watch('sass/*.scss', gulp.series('sass'));
  // Watch for pug changes and compile
  gulp.watch('pug/*.pug', gulp.series('views'));
});

gulp.task('default', gulp.series('views', 'sass', 'watch'));
