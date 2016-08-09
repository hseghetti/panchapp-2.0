// VENDOR LIBS
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var react = require('gulp-react');
var reactify = require('reactify');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

// PRIVATE VARS
var list = fs.readdirSync('./app/components');

gulp.task('js-lint', function () {
    gulp.src('./app/components/**/*.js')
        .pipe(react())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

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
        .pipe(scsslint({config: 'lint.yml'}))
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy', ['js-lint', 'bundle', 'sass'], function () {
    return gulp.src(['app/index.html','app/lib/bootstrap-css/css/bootstrap.min.css','app/style.css'])
        .pipe(gulp.dest('app/dist'));
});

gulp.task('rimraf', function () {
    rimraf.sync('app/dist');
});

gulp.task('start-server', function () {
    nodemon({
        script: 'server/server.js',
        env: {'NODE_ENV': 'development'}
    });
});

gulp.task('watch', ['copy'], function () {
    gulp.watch(['app/**/*', '!app/dist/**/*'], ['copy']);
})

gulp.task('build',['rimraf', 'watch'], function () {
   console.log('Gulp completed...');
});

gulp.task('default', ['build', 'start-server']);
