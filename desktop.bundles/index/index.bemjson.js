({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        'Code blocks highlighted with Highlight.js',
        {
            block: 'highlight',
            mods: { theme: 'far' },
            lang: 'html',
            content: '<div class="my-block">'
        },
        {
            block: 'highlight',
            mods: { theme: 'solarized-dark' },
            lang: 'js',
            content: 'var $el = $(".el")'
        },
        { elem: 'js', url: '_index.js' }
    ]
})
