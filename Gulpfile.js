var gulp = require('gulp'),
    es = require('event-stream'),
    postcss = require('postcss'),
    run = require('gulp-run'),
    rename = require('gulp-rename');

gulp.task('copy-source', ['copy-js', 'copy-css']);

gulp.task('copy-js', function(){

  return gulp.src([
      'libs/highlight.js/highlight.pack.js',
    ]).pipe(gulp.dest('blocks/highlight'));

});

var prefixSelectors = function(fn) {

  var transformSelector = postcss(function (css, file) {
    css.eachRule(function(rule){
      rule.selectors = rule.selectors.map(function(i){
        return fn(i, file)
      })
    })
  })

  return es.map(function(file, cb){

    file.contents = new Buffer(transformSelector.process(file.contents, file.relative).css);

    cb(null, file);
  })
}

gulp.task('copy-css', function(){

  return gulp.src([
      'libs/highlight.js/styles/*.css',
    ])
    .pipe(rename(function(path){
      path.basename = 'highlight_theme_' + path.basename.replace('_', '-').replace('.', '-');
    }))
    .pipe(prefixSelectors(function(selector, file){
      var prefix = file.substr(0, file.indexOf('.css'));
      return '.' + prefix + ' ' + selector;
    }))
    .pipe(gulp.dest('blocks/highlight/_theme'));

});

gulp.task('build', function(){

  var borschikOpts = {
    input: 'blocks/highlight/highlight.src.js',
    output: 'blocks/highlight/highlight.js'
  };

  run('./node_modules/borschik/bin/borschik -i ' + borschikOpts.input + ' -o ' + borschikOpts.output + ' -m no').exec();


});

gulp.task('default', ['copy-source', 'build']);
