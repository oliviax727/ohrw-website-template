## UI Features

Below is a comprehensive list of the available/unique features of this webpage application template. This section will focus exclusively on how to use these features within the webpage UI, i.e. in the HTML source files.

You can additionally inspect the source code of this webpage and the other linked websites to get a better idea of how to practically use these features.

### HTML Loading

HTML files can be loaded using the client-side XHTTP request. To load the contents of an HTML file, add a container `<div>` element with the attribute `html-ref` to the tag, setting it to the path of the HTML file _relative to the repository's top-level directory_. For example:

```html
<div html-ref="src/layout/rss-feed.html" style="display: inline;"></div>
```

In `index.js` the window's `onload` event is set to call the function `Navigator.initPage` by default. You can optionally add other functions to this event listener. Avoid loading the page multiple times automatically.

### Page Navigation

Before setting up page navigation, make sure you have included in the `src/html` directory the content HTML file you wish to navigate to. As a naming convention, always name the HTML file as `[<section-category>-]<section name>.html`. Additionally, you should add an entry to the `SECTION_COLOR_DICT` declaration in `index.js`:

```javascript
["file name (without extension)", section_hue];
```

This will set the section's defined hue, which is important for the CSS to understand what colour scheme to use for the webpage. If you do not set a colour, then it will default to transparent background colours. The default section is listed as `home`, however you can change this by doing the above steps and then setting the `DEFAULT_SECTION` declaration in `index.js` to the desired default page. To navigate to a specific section, you _can_ simply add the `?s=[<section-category>-]<section name>` to the website's URL, however it is recommended you instead call the function `Navigator.goToSection` method.

To allow users to navigate using the ribbon/menu, you must add an extra HTML `<a>` tag to allow for navigation. The CSS provides functionality to group sections together under a category. Within the ribbon and menu, to add a category of sections, add the following:

```html
<div hidden class="dropdown" id="drop-wrapper-<section-category>">
	<div hidden class="dropdown-content" id="drop-<section-category>">Add links here.</div>
</div>

<a
	class="dropbtn"
	onclick="Navigator.showSubList('<section-category>');"
	onmouseleave="Navigator.hideSubList('<section-category>');"
>
	Documentation
</a>
```

> In src/layout/ribbon.html

```html
<span>Documentation</span>
<div class="sublist" id="docs-sublist">Add links here.</div>
```

> In src/layout/menu.html

### Styling

Defined in the document root in `style.css`, there are a series of standard colour values that are set to change with each section, according to the `SECTION_COLOR_DICT` constant in `index.js`. There are 9 non-greyscale colours, shown using a hue of 300˚:

<table style="empty-cells: hide;">
    <tr>
        <th></th>
        <th></th>
        <th colspan="3" style="text-align: center">Brightness</th>
    </tr>
    <tr>
        <th></th>
        <th>(%S, %B)</th>
        <th>Dark</th>
        <th>Light</th>
        <th>Wash</th>
    </tr>
    <tr>
        <th rowspan="3">Saturation</th>
        <th>Pale</th>
        <td style="background-color: hsl(300, 25%, 25%)">(25, 25)</td>
        <td style="background-color: hsl(300, 25%, 50%)">(25, 50)</td>
        <td style="background-color: hsl(300, 25%, 75%)">(25, 75)</td>
    </tr>
    <tr>
        <th>Mid</th>
        <td style="background-color: hsl(300, 50%, 25%)">(50, 25)</td>
        <td style="background-color: hsl(300, 50%, 50%)">(50, 50)</td>
        <td style="background-color: hsl(300, 50%, 75%)">(50, 75)</td>
    </tr>
    <tr>
        <th>Vibrant</th>
        <td style="background-color: hsl(300, 100%, 25%)">(100, 25)</td>
        <td style="background-color: hsl(300, 100%, 50%)">(100, 50)</td>
        <td style="background-color: hsl(300, 100%, 75%)">(100, 75)</td>
    </tr>
</table>

The CSS also contains three other colour variables, including the `--base-hue` variable:

```css
/* Base Colour */
--base-hue; /* A number from 0-360, set by the SECTION_COLOR_DICT constant */

/* Greyscale */
--dark-gray: #444;
--mid-gray: #666;
--light-gray: #ddd;
```

### Dynamic Span Elements

Below is a list of custom classes that will allow for span elements to update dynamically:

| Class Name | Parameters | Function | Example HTML Output |
|--|--|--|--|
| `sectionname` | N/A | Updates (beautified version of) current section's name | Documentation: Features |
| `current-date` | N/A | Shows today's current (local time) date | Wed Jun 24 2026 |
| `age` | `date`: {format: `yyyy-mm-dd`}; `showdate` | Displays the total amount of years elapsed since a given `date`, rounded down | 16 (1/2/2010) |

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
