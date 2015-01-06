var gulp = require('gulp');

gulp.task('copy-source', function(){

  return gulp.src([
      'libs/highlight.js/src/*.js',
      'libs/highlight.js/src/*/*.js'
    ]).pipe(gulp.dest('blocks/highlight/src'));

});

gulp.task('default', ['copy-source']);
