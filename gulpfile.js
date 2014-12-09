// Include gulp
var gulp = require('gulp');

// Include plugins
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

// Config
var src = {
    js: 'src/js',
    css: 'src/css',
    sass: 'src/sass'
};
var build = {
    js: 'build/js',
    css: 'build/css'
};


// Concatenate & Minify JS
gulp.task('scripts', function() {
    del([build.js + '/*']);
    return gulp.src(src.js + '/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        //.pipe(notify("Scripts processed..."))
        .pipe(gulp.dest(build.js));
});

// SASS that thing
gulp.task('sass', function() {
    del([build.css + '/*']);
    return gulp.src(src.sass + '/style.scss')
        //.pipe(concat('src/css/normalize.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))

        .pipe(sourcemaps.write())
        .pipe(sass({
            //style: 'compressed',
            compass: true
        }).on('error', gutil.log))
        //.pipe(notify("SASS processed..."))

        .pipe(gulp.dest(build.css));
});

// Watch it
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch(src.js + '/*.js', ['scripts']);
    // Watch .scss files
    gulp.watch(src.sass + '/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);
