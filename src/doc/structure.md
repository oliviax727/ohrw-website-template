## Project Structure

For the directories and files listed in code blocks below:
| Symbol | Reccomended Treatment (Directories) | Reccomended Treatment  (Files) |
|--|--|--|
| 🔵 | Modify and Customise |"|
| 🟢 | No reccomended or encouraged actions | " |
| 🟡 | Add and edit new custom files to directory | Avoid modifying unless you want additional customisation|
| 🟠 | Avoid modifying or adding to unless neccesary| " |
| 🔴 | Avoid modification or addition whatsoever | " |

### Directories

The directory structure looks given as below — in brackets next to each directory is an explanation of what that directory is for.

```
.
└── src 🟢
    ├── css (CSS style files) 🟡
    ├── data (XML and JSON data) 🟢
    ├── html (HTML files corresponding to section contents) 🔵
    ├── img 🟢
    │   ├── assets (General images) 🔵
    │   ├── favicons (Icons used in the page title) 🔵
    │   └── icons (Button icons) 🟡
    ├── layout (Generic, template, and special-use HTML files) 🟡
    └── scripts (Program scripts) 🟡
        ├── app (Compiled Javascript node.js modules) 🔴
        ├── cmd (Bash scripts for automation) 🟡
        ├── dist (Output of typescript compiler) 🔴
        ├── lib (Javascript client-side modules) 🟡
        ├── ts (Typescript node.js modules) 🔵
        └── types (Typescript type declarations) 🔴
```

### Files

Below is the list of top-level files — in brackets next to each file is an explanation of what that file is for.

```
.
├── _config.yml (Github Pages YAML configuration) 🟡
├── 404.html (404 Page) 🟠
├── babel.config.json (Babelify configuration) 🟠
├── bundle.js (Node.js module entry point) 🔴
├── eslint.config.ts (ESLint linting rules) 🟡
├── index.html (HTML entry point) 🟠
├── index.js (Client-side module entry point) 🔵
├── LICENSE 🔴
├── node_modules 🔴
├── notes.txt (Personal Notes) 🔵
├── package-lock.json 🔴
├── package.json 🔵
├── README.md 🔵
├── robots.txt (Communicate with web scrapers) 🟢
├── style.css (Main styling configuration) 🟠
└── tsconfig.json (Typescript compilation settings) 🟠
```
