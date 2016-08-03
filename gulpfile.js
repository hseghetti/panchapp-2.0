// VENDOR LIBS
var _ = require('lodash');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var fs = require('fs');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var reactify = require('reactify');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

// PRIVATE VARS
var list = fs.readdirSync('./app/components');

gulp.task('bundle', function () {
    return browserify({
        entries: './app/main.js',
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function () {
    gulp.src('./app/components/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy', ['bundle', 'sass'], function () {
    return gulp.src(['app/index.html','app/lib/bootstrap-css/css/bootstrap.min.css','app/style.css'])
        .pipe(gulp.dest('app/dist'));
});

gulp.task('rimraf', function () {
    rimraf.sync('app/dist');
});

gulp.task('start-server', ['copy'], function () {
    nodemon({
        script: 'server/server.js',
        env: {'NODE_ENV': 'development'}
    });
});

gulp.task('watch', ['build', 'start-server'], function () {
    gulp.watch('app/components/**/*', ['build']);
})

gulp.task('build',['rimraf', 'copy'], function () {
   console.log('Gulp completed...');
});

gulp.task('default', ['watch']);

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
