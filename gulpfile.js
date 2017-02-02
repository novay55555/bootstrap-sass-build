const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');

const config = require('./config');

gulp.task('default', ['sass-build', 'bootstrap-js']);

gulp.task('sass-build', () =>
  sass('./src/test.scss', { sourcemap: true })
  .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: [
      "Android 2.3",
      "Android >= 4",
      "Chrome >= 20",
      "Firefox >= 24",
      "Explorer >= 8",
      "iOS >= 6",
      "Opera >= 12",
      "Safari >= 6"
    ],
    cascade: false
  }))
  .pipe(sourcemaps.write('maps', {
    includeContent: false,
    sourceRoot: 'src'
  }))
  .pipe(gulp.dest(config.path.dist))
);

gulp.task('bootstrap-js', () => {
  let banner = ['/**',
    ' * <%= pkg.version %>',
    ' * <%= pkg.description %>',
    ' * <%= pkg.license %>',
    ' */',
    '\n'
  ].join('\n');
  gulp.src(['./src/jquery-checkout.js', './assets/javascripts/bootstrap/*.js'])
    .pipe(concat('test.js'))
    .pipe(header(banner, { pkg: config.header.bootstarp }))
    .pipe(gulp.dest(config.path.dist))
});
