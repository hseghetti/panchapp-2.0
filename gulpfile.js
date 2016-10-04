// VENDOR LIBS
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var path = require("path");
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var paths = [
    'main.js',
    'components/**/*.js',
    'lib/**/*.js',
    'flux/**/*.js'
];
var scssPaths = [
    '*.scss',
    'components/**/*.scss'
];

gulp.task('lint', function () {
    return gulp.src(paths)
        .pipe(eslint())
        .pipe(eslint.format())
});

gulp.task('bundle', function () {
    return browserify({
            entries: 'main.js', debug: true,
            paths: [path.join(__dirname)],
        })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('bundle-prod', function () {
    return browserify({
            entries: 'main.js',
            paths: [path.join(__dirname)],
        })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    gulp.src(scssPaths)
        .pipe(scsslint({config: 'lint.yml'}))
        .pipe(concat('globals.scss'))
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('copy', ['lint', 'bundle'], function () {
    return gulp.src(['index.html', 'style.css'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-prod', ['bundle-prod', 'sass'], function () {
    return gulp.src(['index.html', 'style.css'])
        .pipe(gulp.dest('dist'));
});

gulp.task('rimraf', function () {
    rimraf.sync('dist');
});

gulp.task('watch', ['copy', 'sass'], function () {
    livereload.listen();
    gulp.watch(paths, ['copy']);
    gulp.watch(scssPaths, ['sass']);
});

gulp.task('build',['rimraf', 'watch'], function () {
    nodemon({
        script: 'server.js',
        watch: 'server.js'
    });
});

gulp.task('build-prod',['copy-prod']);

gulp.task('default', ['build']);
