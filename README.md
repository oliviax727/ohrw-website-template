## Oliviax727's Website Template

A GitHub pages template repository, under my own styling and programming implementation, for anyone to use.

https://oliviax727.github.io/ohrw-website-template/

### Setup

After forking the repository, go to **Settings** > **Code and Automation** > **Pages**

![Settings image](./src/img/assets/github_pages_setup.png)

Under “Build and Deployment” select “Deploy From Branch” and under “Branch” select the `main` branch. Then, press the save button. Give GitHub a few minutes to deploy, and then access the website via `https://[your username].github.io/[your repository name]/` or `https://[your username].github.io` if the repository is called `[your username].github.io`.

Next, clone your new repository on your local device, and in the terminal, `cd` into the repository and run:

```
npm install
chmod +x src/scripts/cmd/*
```

If you are using VS Code as your preferred IDE, you can install the ESLint extension to start checking files. After editing any files found in `src/scripts/ts` or `entry.js`, make sure to run:

```
./src/scripts/cmd/compile-app.sh
```

### Documentation

This repository's documentation can be found in the markdown files in the [docs](src/docs) folder. You can also go to the website https://oliviax727.github.io/ohrw-website-template/ to see the documentation in a more stylised format.

Each section describes a different aspect of the codebase:
| Full Name | Name | Markdown Ref. | Website URL |
|--|--|--|--|
| Reference Links | Links | [src/doc/links.md](src/doc/links.md) | [https://oliviax727.github.io/ohrw-website-template/?s=links](https://oliviax727.github.io/ohrw-website-template/?s=links)
| Project Structure | Structure | [src/doc/structure.md](src/doc/structure.md) | [https://oliviax727.github.io/ohrw-website-template/?s=documentation-structure](https://oliviax727.github.io/ohrw-website-template/?s=documentation-structure)
| UI Features | Features | [src/doc/features.md](src/doc/features.md) | [https://oliviax727.github.io/ohrw-website-template/?s=documentation-features](https://oliviax727.github.io/ohrw-website-template/?s=gdocumentation-features)
| Code Development | Development | [src/doc/development.md](src/doc/development.md) | [https://oliviax727.github.io/ohrw-website-template/?s=documentation-development](https://oliviax727.github.io/ohrw-website-template/?s=documentation-development)

### Attributions

All icons created by Google, from the [Google Material Design Monochrome](https://www.flaticon.com/authors/google-material-design/monochrome) icon pack, hosted by Flaticon, modified from black to white. See list of Flaticon attributions:

- [Menu Icons](https://www.flaticon.com/free-icons/menu)
- [Fullscreen Icons](https://www.flaticon.com/free-icons/fullscreen)
- [Minimise Icons](https://www.flaticon.com/free-icons/minimize)
- [Refresh Icons](https://www.flaticon.com/free-icons/refresh)
- [RSS Icons](https://www.flaticon.com/free-icons/rss)
- [Home Page icons](https://www.flaticon.com/free-icons/page)
- [Build Icons](https://www.flaticon.com/free-icons/wrench)

### Copyright

I am fundamentally opposed to copyright and any restriction on the free exchange of information and ideas. Unfortunately we do not live in a world where we can make everything public domain.

This repository has a licence for the pure assurance that any derivative work cannot be made private. It also means I can enforce anti-AI and anti-commercial uses of my project. Additionally, I want to protect any artists (including myself) from having their IP stolen — not because I don't think what they produce shouldn't be used in the reciprocal creativity of art — but to make sure they get their fair share in an economic system that is “Publish or Perish”, for all creatives and scientists.
