# CSS/JavaScript BEM block for code highlighting

This repository contains `bem-highlight.js` block library. The library serves
the `highlight` BEM block whose JavaScript paint code on a page with the help of
remarkable [Highlight.js](http://highlightjs.org/).

*bem-core compalible*

Example of usage:
http://varya.me/bem-highlight.js/desktop.bundles/index/index.html

## HTML markup

You provide a markup for highlight blocks:

```
<div class="highlight highlight_theme_far i-bem" data-bem="{ 'highlight' : {
  'lang' : 'xml' }}">
  <pre>
    <code class="highlight__code">
      &lt;div class="my-block"/&gt;
    </code>
  </pre>
</div>
```

The markup can be build with templates like `bemhtml`. Look at the
[example](https://github.com/varya/bem-highlight.js/blob/master/desktop.bundles/index/blocks/highlight/highlight.bemhtml).

With linking compiled JavaScript to the page you have you code highlighed within
your BEM project!

## Using the library

* Link library to the bem project using bower<br/>
Example: https://github.com/varya/varya.github.com/blob/master/bower.json
* Add library levels in the list of using block levels<br/>
https://github.com/varya/varya.github.com/blob/master/.bem/make.js#L60
* Include `highlight` block into the project<br/>
https://github.com/varya/varya.github.com/blob/master/desktop.blocks/page/page.deps.js#L13

Hacks can be easily provided thanks to flexible BEM redefining.
https://github.com/varya/varya.github.com/tree/master/desktop.blocks/highlight

## Developing the library

### Installation Requirements:

- [node.js](http://nodejs.org/)

You may also consider [installing bem-tools locally to your environment](http://bem.info/tools/bem/installation/) for [ease of use](#an-easier-more-beautiful-way), though it is **not required**

---

### Installation:

So, how easy is it to get started with BEM?  *Super easy*.

It's as easy as...
    
1. ›`git clone git://github.com/bem/project-stub.git`
2. ›`cd project-stub`
3. >`npm install`
4. ›`./node_modules/bem/bin/bem server`

*(hint: execute the above commands in your terminal)*

Now that `bem server` is running, check it out:

````
Navigate to: http://localhost:8080/desktop.bundles/index/index.html
````

(here, have a link: [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html))

---

[BEM](http://bem.info) is an abbreviation for Block-Element-Modifier.  [BEM](http://bem.info) is a way to write code which is easy to support and develop.

For more information about the BEM metodology check out [http://bem.info](http://bem.info/).
