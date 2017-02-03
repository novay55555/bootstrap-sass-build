const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const config = require('./config');

gulp.task('default', ['bootstarp-css', 'bootstrap-js']);

gulp.task('bootstarp-css', () =>
  sass('./src/test.scss', { sourcemap: true })
  .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: config.browsers,
    cascade: false
  }))
  .pipe(sourcemaps.write('maps', {
    includeContent: false,
    sourceRoot: 'src'
  }))
  .pipe(gulp.dest(config.path.dist))
  .pipe(cleancss())
  .pipe(rename('test.min.css'))
  .pipe(gulp.dest(config.path.dist))
);

gulp.task('bootstrap-js', () => {
  const banner = ['/**',
    ' * <%= pkg.version %>',
    ' * <%= pkg.description %>',
    ' * <%= pkg.license %>',
    ' */',
    '\n'
  ].join('\n');
  return gulp.src(['./src/jquery-checkout.js', './assets/javascripts/bootstrap/*.js'])
    .pipe(concat('test.js'))
    .pipe(header(banner, { pkg: config.header.bootstarp }))
    .pipe(gulp.dest(config.path.dist))
    .pipe(uglify())
    .pipe(header(banner, { pkg: config.header.bootstarp }))
    .pipe(rename('test.min.js'))
    .pipe(gulp.dest(config.path.dist))
});
