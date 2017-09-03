'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	series = require('gulp-series'),
	sourcemaps = require('gulp-sourcemaps'),
	path = require('path');
	// var webserver = require('gulp-webserver');

// gulp.task('webserver', function() {
//   gulp.src('./')
//     .pipe(webserver({
// 	  host: '0.0.0.0',
//       livereload: true,
//       directoryListing: true,
//       open: true
//     }));
// });

gulp.task('sass', function() {
	return gulp.src('sass/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css'))
	.pipe(gulp.dest('../landing/css'))
});

gulp.task('scripts', function() {
	return gulp.src('js/*.js')
	.pipe(gulp.dest('../landing/js'))
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
  gulp.watch('js/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('views', 'sass', 'scripts', 'watch'));
