// VENDOR LIBS
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var fs = require('fs');
var gulp = require('gulp');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

// PRIVATE VARS
var list = fs.readdirSync('./app/components');

gulp.task('bundle', function () {
    return browserify({entries: './app/main.js', debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function () {
    gulp.src('./app/components/**/*.scss')
        .pipe(scsslint({config: 'lint.yml'}))
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy', ['bundle', 'sass'], function () {
    return gulp.src(['app/index.html','app/lib/bootstrap-css/css/bootstrap.min.css','app/style.css'])
        .pipe(gulp.dest('app/dist'));
});

gulp.task('rimraf', function () {
    rimraf.sync('app/dist');
});

gulp.task('watch', ['copy'], function () {
    gulp.watch(['app/**/*', '!app/dist/**/*'], ['copy']);
});

gulp.task('build',['rimraf', 'watch'], function () {
   console.log('Gulp completed...');
});

gulp.task('default', ['build']);
