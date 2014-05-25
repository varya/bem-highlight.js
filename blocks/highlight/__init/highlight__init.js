/** @requires BEM */
/** @requires BEM.DOM */

modules.define('highlight', ['i-bem__dom', 'highlight__core', 'jquery'], function(provide, BEMDOM, hljs, $) {

var langAliases = {
    js: 'javascript',
    html: 'xml'
}

provide(BEMDOM.decl({ block: this.name}, {
    onSetMod: {
        "js": {
            "inited" : function() {
                this._langHack();
                hljs.highlightBlock(this.getCodeContainer());
            }
        }
    },
    _langHack: function() {
        var lang = this.params.lang;
        lang = langAliases[lang] || lang;

        this.get$CodeContainer().addClass(lang);
    },
    getCodeContainer: function() {
        this._codeContainer = this._codeContainer || this.elem('code')[0];
        return this._codeContainer;
    },
    get$CodeContainer: function() {
        this._$CodeContainer = this._$CodeContainer || this.elem('code');
        return this._$CodeContainer;
    }
}));

});
