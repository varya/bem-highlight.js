modules.define('highlight__core', function(provide) {

/*borschik:include:./src/highlight.js*/;
/*borschik:include:./src/languages/css.js*/;
/*borschik:include:./src/languages/javascript.js*/;
/*borschik:include:./src/languages/xml.js*/;

provide(hljs);

});
