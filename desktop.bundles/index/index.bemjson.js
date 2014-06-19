({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.min.css', ie: false },
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
        {
            block: 'highlight',
            lang: 'html',
            content: '<div class="my-block">'
        },
        {
            block: 'highlight',
            lang: 'js',
            content: 'var $el = $(".el")'
        },
        { elem: 'js', url: 'index.min.js' }
    ]
})
