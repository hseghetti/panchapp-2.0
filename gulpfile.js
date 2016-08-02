// VENDOR LIBS
var _ = require('lodash');
var browserify = require('browserify');
var concat = require('gulp-concat');
var fs = require('fs');
var gulp = require('gulp');
var jshint = require("gulp-jshint");
var reactify = require('reactify');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

// PRIVATE VARS
var list = fs.readdirSync('./app/components');

gulp.task('bundle', function () {
    return browserify({
        entries: './app/main.js',
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish", {verbose: true}))
        .pipe(jshint.reporter("fail"))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function () {
    gulp.src('./app/components/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy', ['bundle', 'sass'], function () {
    return gulp.src(['app/index.html','app/lib/bootstrap-css/css/bootstrap.min.css','app/style.css'])
        .pipe(gulp.dest('app/dist'));
});

gulp.task('default',['copy'], function () {
   console.log('Gulp completed...');
});

var filterScss = function (list) {
    return _.filter(list, function (item) {
        return item.indexOf('.scss') !== -1;
    });
};

var filterJs = function (list) {
    return _.filter(list, function (item) {
        return item.indexOf('.js') !== -1;
    });
};
