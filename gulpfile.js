let gulp = require('gulp');
let scss = require('gulp-sass');
let px2rem = require('gulp-px2rem');
let rename = require('gulp-rename');
let gulpSequence = require('gulp-sequence');
let removeScss = require('./scripts/gulp-remove.js');
let renameScssRequire = require('./scripts/gulp-rename-scss.js');

const px2remOptions = {
  rootValue: 100,
  replace: true,
  minPx: 2,
};

const postCssOptions = {
  map: true,
};

gulp.task('compileScss', function() {
  return gulp
    .src('examples_src/src/auto-ui/components/**/*.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(px2rem(px2remOptions, postCssOptions))
    .pipe(gulp.dest('lib'));
});

gulp.task('removeScssRequire', function() {
  return gulp
    .src(['lib/**/*.js', 'lib/**/*.d.ts'])
    .pipe(removeScss())
    .pipe(gulp.dest('lib/'));
});

gulp.task('renameScssRequire', function() {
  return gulp
    .src(['lib/**/style/*.js', 'lib/**/style/*.d.ts'])
    .pipe(renameScssRequire())
    .pipe(gulp.dest('lib/'));
});

gulp.task('renameIndexToCss', function() {
  return gulp
    .src('lib/**/style/index.js')
    .pipe(
      rename(function(path) {
        path.basename = 'css';
      })
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('default', gulpSequence('compileScss', ['removeScssRequire', 'renameScssRequire'], 'renameIndexToCss'));
