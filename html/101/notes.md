# HTML 101

## HTML forms the structure of all web pages

HTML - Hyper text markup language

DOCTYPE signals that it should be read as an html file

The `<head>` tag configures the page and is not rendered by the browser.
The `title` contains the name of the page and is rendered in the browser's tab.
Tags that have opening and closing elements are knowns as container elements.
Tags that do not have opening and closing elements are not container elements and are called seld-closing tags(`/>`).
To make reading an HTML file easier, lines are nested within their parent element.
Browsers read HTML and in a sense, HTML is like a big long string
Browsers can read files or you can start a server in VS code with **Go LIve**

### Some of the most common elements are

#### Semantic elements include

```
<ul> - unordered list
<ol> - ordered list
<li> - list item must be contained by `<ul>` or an `<ol>
<header> - the header area of a page
<main> - the main area of a page
<body> - contains all other rendering HTML elements
<footer> - the footer area of a page
<nav> - contains navigation elements, usually found inside of `<header>`
<p> - used for single paragraph of text
<img /> - used for images(self closing), must have `src` attribute
<a> anchor tag, used to hyperlink elements with the `href` attribute
<h1> header text (largest)
<h2> header text
<h3> header text
<h4> header text
<h5> header text
<h6> header text (smallest)
```

#### generic elements

```
<div> - generic containing element
<section> - defines a section for child elements
```

#### tags used inside of `<head>`

```
<link> -  used to link a stylesheet
```