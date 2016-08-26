// VENDOR LIBS
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var path = require("path");
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('lint', function () {
    return gulp.src(['./app/**/*.js','!./node_modules/**', '!./dist/**'])
        .pipe(eslint())
        .pipe(eslint.format())
});

gulp.task('bundle', function () {
    return browserify({
            entries: './app/main.js', debug: true,
            paths: [path.join(__dirname, '/app')],
        })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle-prod', function () {
    return browserify({entries: './app/main.js'})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    gulp.src('./app/components/**/*.scss')
        .pipe(scsslint({config: 'lint.yml'}))
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', ['lint', 'bundle', 'sass'], function () {
    return gulp.src(['app/index.html', 'app/style.css'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-prod', ['bundle-prod', 'sass'], function () {
    return gulp.src(['app/index.html', 'app/style.css'])
        .pipe(gulp.dest('dist'));
});

gulp.task('rimraf', function () {
    rimraf.sync('dist');
});

gulp.task('watch', ['copy'], function () {
    gulp.watch(['app/**/*', '!dist/**/*'], ['copy']);
});

gulp.task('build',['rimraf', 'watch'], function () {
   console.log('Gulp completed...');
});

gulp.task('build-prod',['copy-prod'], function () {
   console.log('Gulp for production completed...');
});

gulp.task('default', ['build']);
