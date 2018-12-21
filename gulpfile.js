'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
// const source = require('vinyl-source-stream');
const stylelint = require('gulp-stylelint');
// const uglify = require('gulp-uglify');
const zip = require('gulp-zip');

gulp.task('stylelint', () => {
  return gulp.src([
    './_assets/scss/**/*.scss',
    '!./_assets/scss/vendor/_normalize.scss',
    '!./_assets/scss/fonts/*.scss'
  ])
  .pipe(stylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
});


gulp.task('sass', () => {
  return gulp.src('./app/assets/_scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./app/assets/css/'));
});


gulp.task('build', ['sass']);

gulp.task('watch', () => {
  gulp.watch('./app/assets/_scss/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'watch']);
