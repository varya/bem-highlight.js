modules.define('highlight__core', function(provide) {

/*borschik:include:../highlight-source/highlight.js*/;
/*borschik:include:../highlight-source/languages/css.js*/;
/*borschik:include:../highlight-source/languages/javascript.js*/;
/*borschik:include:../highlight-source/languages/xml.js*/;

provide(hljs);

});
