## UI Features

Below is a comprehensive list of the available/unique features of this webpage application template. This section will focus exclusively on how to use these features within the webpage UI, i.e. in the HTML source files.

You can additionally inspect the source code of this webpage and the other linked websites to get a better idea of how to practically use these features.

### HTML Loading

HTML files can be loaded using the client-side XHTTP request. To load the contents of an HTML file, add a container `<div>` element with the attribute `html-ref` to the tag, setting it to the path of the HTML file *relative to the repository's top-level directory*. For example:

``` html
<div html-ref="src/layout/rss-feed.html" style="display: inline;"></div>
```

In `index.js` the window's `onload` event is set to call the function `Navigator.initPage` by default. You can optionally add other functions to this event listener. Avoid loading the page multiple times automatically.

### Page Navigation

Before setting up page navigation, make sure you have included in the `src/html` directory the HTML file you wish to navigate to. As a naming convention, always name the HTML file as `[<section-category>-]<section name>.html`. Additionally, you should add an entry to the `SECTION_COLOR_DICT` declaration in `index.js`:

```javascript
[ "file name (without extension)", section_hue ]
```

This will set the section's defined hue, which is important for the CSS to understand what colour scheme to use for the webpage. If you do not set a colour, then it will default to transparent background colours. The default section is listed as `home`, however you can change this by doing the above steps and then setting the `DEFAULT_SECTION` declaration in `index.js` to the desired default page. To navigate to a specific section, you *can* simply add the `?s=[<section-category>-]<section name>` to the website's URL, however it is recommended you instead call the function `Navigator.goToSection` method.

To allow users to navigate using the ribbon/menu, you must add an extra HTML `<a>` tag to allow for navigation. The CSS provides functionality to group sections together under a category. Within the ribbon and menu, to add a category of sections, add the following:

``` html
<div hidden class="dropdown" id="drop-wrapper-<section-category>">
    <div hidden class="dropdown-content" id="drop-<section-category>">
        Add links here.
      </div>
</div>

<a
    class="dropbtn"
    onclick="Navigator.showSubList('<section-category>');"
    onmouseleave="Navigator.hideSubList('<section-category>');"
>   Documentation
</a>
```
> In src/layout/ribbon.html

``` html
<span>Documentation</span>
<div class="sublist" id="docs-sublist">
    Add links here.
</div>
```
> In src/layout/menu.html

### Styling

Defined in the document root in `style.css`, there are a series of standard colour values that are set to change with each section, according to the `SECTION_COLOR_DICT` constant in `index.js`

### Content

- Content inclusions

### Section Naming

- Current section
- Naming section contents
- Current section tag

### Ages and Dates

- Age and date tags

### Mobile Compatibility

- Crunch events

### Markdown Embedding

- zero-md element

### Footer Minigame

- Current section

### Cookies and JQuery

- Helper functions

### RSS Feeds

- Everything RSS
