var gulp = require('gulp'),
    pug = require('gulp-pug'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss'),
    postcss = require('gulp-postcss'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    styl = require('gulp-stylus'),
    validator = require('gulp-html'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger');

gulp.task('html', function() {
    return gulp.src('app/html/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('pug', function buildHTML() {
    return gulp.src('app/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/pug'))
        .pipe(browserSync.reload({ stream: true }))
});


gulp.task('styl', function() {
    return gulp.src('app/styl/*.styl')
        .pipe(styl({
            compress: true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }))
});


gulp.task('css', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 5 versions']
        }),
        cssnext,
        precss
    ];
    return gulp.src('app/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', ['browser-sync', 'pug', 'styl', 'css', 'html'], function() {
    gulp.watch('app/html/*.html', ['html'], browserSync.reload)
    gulp.watch('app/pug/*.pug', ['pug'])
    gulp.watch('app/css/*.css', ['css'], browserSync.reload)
    gulp.watch('app/styl/*.styl', ['styl'])
    gulp.watch('app/js/*.js', browserSync.reload)
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('scripts', function() {
    return gulp.src([
            'app/js/*.js'
        ])
        // .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function() {
    gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.reload({ stream: true }))
    gulp.watch('app/fonts/*', ['fonts'])
})


gulp.task('image', function() {
    gulp.src('app/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({ stream: true }))
    gulp.watch('app/img/*', ['image'])
});

gulp.task('dhtml', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }))
    gulp.watch('app/index.html', ['dhtml'])
});

gulp.task('default', ['styl', 'pug', 'css', 'watch', 'browser-sync', 'scripts', 'html', 'fonts', 'image', 'dhtml']);