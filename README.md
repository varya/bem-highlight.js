# CSS/JavaScript BEM block for code highlighting

This repository contains `bem-highlight.js` block library. The library serves
the `highlight` BEM block whose JavaScript paint code on a page with the help of
remarkable [Highlight.js](http://highlightjs.org/).

**bem-core compalible**

Example of usage:
http://varya.me/bem-highlight.js/desktop.bundles/index/index.html

## Advantages
- Highlight.js implemented with BEM stack<br/>
  No manual linking files to the project! You use the `highlight` block and
  everything goes automatically. This is BEM, baby!
- Code blocks are independent and can be highlighted with different themes.
- Easy to redefine for your project structure

## Usage
### With full bem stack

 1. Link the library to your project
    
    a. With `bower`
    
       `bower.json`
    
       ```
    {
      "name": "bem-project-stub",
      "version": "0.0.1",
      "dependencies": {
          ...
          "bem-highlight.js" : "varya/bem-highlight.js"
      }
    }
	   ```
    b. With `repo.db`
 2. Add library levels in the list of levels for the bundles
    
    Example for `bem tools 1.0.0`
    
    ```
    .setBundleBuildLevels([
          'bem-core',
          'bem-components',
          'bem-highlight.js'
     ].reduce(function(levels, lib) {
         return levels.concat([
             environ.getLibPath(lib, 'common.blocks'),
             environ.getLibPath(lib, 'desktop.blocks'),
             environ.getLibPath(lib, 'blocks')
         ]);
     },
     ```
 3. Place a block into your page bemjson code:
   
    ```
    {
       block: 'highlight',
       mods: { theme: 'far' },
       lang: 'html',
       content: '<div class="my-block">'
     }
     ```
     You can use any of [implemented
     themes](https://github.com/varya/bem-highlight.js/tree/master/blocks/highlight/_theme).<br/>
     Now supported languages are:
     * xml
     * html (xml)
     * js (javascript)
 4. Look at the page compiled

Feel free to redefine the `highlight` block technologies for a bundle or the whole project.<br/>
You can easily provide CSS for all the `highlight` blocks within your project by placing `highlight/highlight.css` file into your project block level.<br/>
Default theme can be provided with redefining `highlight/highlight.bemhtml` template.
       
### With static BEM

If you do not use BEMHTML to produce HTML markup for your project:

 1. Provide valid HTML markup for the blocks
 
    ```
    <div class="highlight highlight_theme_far i-bem" data-bem="{ 'highlight' : {
      'lang' : 'html' }}">
      <pre>
        <code class="highlight__code">
          &lt;div class="my-block"/&gt;
        </code>
      </pre>
    </div>
    ```
 2. Provide dependency to ensure that your static files will have a proper highlight block:
    `page/page.deps.js`
     
    ```
    ({
        shouldDeps: [
            {
                block: 'highlight',
                mods: { 'theme': ['far']}
            }
        ]
    })
    ```
 3. Compile your static files
 4. With linking compiled JavaScript to the page you have you code highlighed within
your BEM project!

## Developing the library

### Installation Requirements:

- [node.js](http://nodejs.org/)

You may also consider [installing bem-tools locally to your environment](http://bem.info/tools/bem/installation/) for [ease of use](#an-easier-more-beautiful-way), though it is **not required**

### Building the library

```
gulp
```
