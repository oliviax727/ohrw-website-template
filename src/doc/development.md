
## Code Development

This section covers the aspects of the project that involve implementing additional functionality to the website template via code. Below is a flowchart diagram displaying the entire development, structure, and call sequence of the template repository:

![Flowchart](../img/assets/development_structure_flowchart.png)

### Frontend Modules

Client-side and/or frontend modules are found in the `src/scripts/lib` directory. All files are written in JavaScript with ESLint configured to recognise it as an HTML-integrated script.

These modules are generally trivial to develop, as they do not require additional compilation or configuration. As long as any desired classes from these files are imported in `index.js` the files will be integrated into the website's source script. 

It is important to recognise that classes and objects defined in `src/scripts/lib` or `index.js` will not be available to the HTML pages by default, they must be set as a custom field in the `window` or `document` object. For example:

```javascript
import { MyClass, myFunction } from 'src/scripts/lib/my_modules.js';

window.MyClass = MyClass;

window.onload = myFunction();
```

### Backend Structure

- Modules, execution points, index.ts, and entry points
- Why functional, why typescript, why ESNext
- Bundling and CommonJS in entry.js

### Configuring the Backend

- ESLint
- TSConfig
- npm packages

### Command-Line Interface

- Creating bash commands
- Existing two files

### Miscellaneous

- Config.yml
- Jekyll pages
- Documents and Images
- Robots
- CDNs
