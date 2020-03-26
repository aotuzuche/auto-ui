let gulp = require('gulp');
let scss = require('gulp-sass');
let px2rem = require('gulp-px2rem');
let removeScss = require('./scripts/gulp-remove.js');

const px2remOptions = {
  replace: true,
  minPx: 2,
};

const postCssOptions = {
  map: true,
};

gulp.task('compileScss', function() {
  gulp
    .src('examples_src/src/auto-ui/components/**/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(px2rem(px2remOptions, postCssOptions))
    .pipe(gulp.dest('lib/'));
});

gulp.task('removeScssRequire', function() {
  gulp
    .src('lib/**/*.js')
    .pipe(removeScss())
    .pipe(gulp.dest('lib/'));
});

gulp.task('removeScssTsImport', function() {
  gulp
    .src('lib/**/*.d.ts')
    .pipe(removeScss())
    .pipe(gulp.dest('lib/'));
});

gulp.task('default', ['compileScss', 'removeScssRequire', 'removeScssTsImport']);
