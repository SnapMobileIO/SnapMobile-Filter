'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import ngHtml2Js from 'gulp-ng-html2js';

function handleError(error) {
  gutil.log(gutil.colors.magenta(error.message));
  if (error.stack) { gutil.log(gutil.colors.cyan(error.stack)); }
  process.exit(1);
}

gulp.task('babel', function() {
  return gulp.src(['./src/filter/*.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/filter'))
    .on('error', handleError);
});

gulp.task('htmlify', function() {
  return gulp.src("./src/filter/*.html")
    .pipe(ngHtml2Js({
      moduleName: "FilterModule",
      prefix: "/components/filter/"
    }))
    .pipe(gulp.dest("./dist/filter"))
    .on('error', handleError);
});

gulp.task('dist', ['babel', 'htmlify']);