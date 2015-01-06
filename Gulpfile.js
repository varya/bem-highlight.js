var gulp = require('gulp'),
    run = require('gulp-run');

gulp.task('copy-source', function(){

  return gulp.src([
      'libs/highlight.js/highlight.pack.js',
    ]).pipe(gulp.dest('blocks/highlight'));

});

gulp.task('build', function(){

  var borschikOpts = {
    input: 'blocks/highlight/highlight.src.js',
    output: 'blocks/highlight/highlight.js'
  };

  run('./node_modules/borschik/bin/borschik -i ' + borschikOpts.input + ' -o ' + borschikOpts.output + ' -m no').exec();


});

gulp.task('default', ['copy-source', 'build']);
