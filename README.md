# CSS/JavaScript BEM block for code highlighting

This repository contains `bem-highlight.js` block library. The library provides
a `highlight` BEM block that adds syntax highlighting to code examples on web pages.
The block uses well-known [Highlight.js](http://highlightjs.org/).

*bem-core compatible*

Usage example:
http://varya.me/bem-highlight.js/desktop.bundles/index/index.html

## HTML markup

Here's the markup for highlight blocks:

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

The markup can be built with templates like `bemhtml`. See the
[example](https://github.com/varya/bem-highlight.js/blob/master/desktop.bundles/index/blocks/highlight/highlight.bemhtml).

Just link the compiled JavaScript to a page in your BEM project to have your code highlighed!

## Using the library

* Link library to the bem project using bower<br/>
Example: https://github.com/varya/varya.github.com/blob/master/bower.json
* Add library levels to the list of used block levels<br/>
https://github.com/varya/varya.github.com/blob/master/.bem/make.js#L60
* Include `highlight` block into the project<br/>
https://github.com/varya/varya.github.com/blob/master/desktop.blocks/page/page.deps.js#L13

Hacks can be easily added thanks to flexible BEM-based redefining:
https://github.com/varya/varya.github.com/tree/master/desktop.blocks/highlight

## Developing with the library

### Installation Requirements:

- [node.js](http://nodejs.org/)

You may also consider [installing bem-tools locally in your environment](http://bem.info/tools/bem/installation/) for [ease of use](#an-easier-more-beautiful-way), though it is **not required**

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

(here is a link: [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html))

---

[BEM](http://bem.info) is an abbreviation for Block-Element-Modifier.  [BEM](http://bem.info) is a way to write code which is easy to support and develop.

For more information about the BEM metodology check out [http://bem.info](http://bem.info/).
