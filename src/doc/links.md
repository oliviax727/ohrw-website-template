## Reference Links and Notes

This is a list of links to further documentation on how to best use this repository.

### Web Development

[**Mozilla Javascript Documentation**](https://developer.mozilla.org) — An excellent place to find directed HTML, JS, and CSS documentation.
[**W3 Schools**](https://www.w3schools.com) – Tutorials and documentation on basically anything involving the web.

### Node and Typescript

Note that “ECMAScript” refers to the language standard that defines the rules of javascript and its derivatives. It was made in order to standardise javascript integration internet-wide, even for web applications that have different language requirements to traditional javascript. Other notable ECMAScript derivatives include: Office Scripts, Google Scripts, CoffeeScript, ActionScript, etc.

[**Node.js**](https://nodejs.org) – The homepage for Node.js. It is what allows JS and TS to be truly robust languages.
[**NPM**](https://www.npmjs.com) – One of the central package managers for Node.js and other related ECMAScript projects.
[**Typescript**](https://www.typescriptlang.org) – A superset language of javascript, made by Microsoft (unfortunately), that incorporates typing into javascript for safer development and runtime execution.
[**ESLint**](https://eslint.org) – A ECMAScript linting tool that helps you write better code, catching errors and problems that you otherwise might not see.

### Functional Programming

#### What

[Functional programming](https://en.wikipedia.org/wiki/Functional_programming) is a [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming) paradigm that treats functions as the fundamental building block of code. Similar to how Object-Oriented programming treats everything as an object, functional programming treats everything like a function.

Functions, in a mathematical sense, involve any process that takes an input and returns an output. For example the following is an example of a classical high-school-level function, a multivariable function, and a parametric function:

$$
f\left(x\right) = x^2 + x + 1
\\
g\left(\vec{x}\right) = g\left(x_1, x_2, ..., x_n\right) = f\left(\left|\vec{x}\right|\right)+2x_1+2x_n
\\
\vec{u}\left(\vec{x}\right) = \frac{g\left(\vec{x}\right) }{f\left(\left|\vec{x}\right|\right)}
$$

In high-level code, since we deal with more than just simple numbers and often require typing systems, we may write functions using the following [Haskell-style](https://www.haskell.org/tutorial/functions.html) notation:

```haskell
addTwo :: (Integer, Integer) -> Integer
addTwo (a, b) = a + b
```

We can take advantage of the principle of [currying](https://wiki.haskell.org/Currying) to make things easier to write:

```haskell
add :: Integer -> Integer -> Integer
addTwo a b = a + b
```

What this does is make `addTwo` a two-step function. It takes an integer `a` and returns a function that takes an integer `b` that returns an integer `a + b`. Currying can be extremely useful as it allows for things like [partial application](https://wiki.haskell.org/Partial_application).

As a last step let's make this function more generic:

```haskell
add :: Num a => [a] -> a
add (a:as) = a + add as
add (a:[]) = a
add [] = 0
```

Haskell, honestly, is kind of a terrible language to program in — that's less to do with the functional paradigm itself but because it *insists* on making you use the functional paradigm, even when it's not the best paradigm to use; you wouldn't use Python to program a website, TSQL to program a video game, etc.

What Haskell *is* good at, is teaching concepts in functional programming, as a functional version of pseudocode, and as a means of mathematically analysing code.

Typescript is better at doing FP because it has a more robust typing system, is faster, is cleaner, has more support/documentation, and is more versatile.

#### Why

So [why functional programming](https://github.com/readme/guides/functional-programming-basics)? It's mainly in the [extra features](https://www.geeksforgeeks.org/blogs/functional-programming-paradigm) I glossed over in the simple explainer above.

Similar to how OOP has extra core concepts such as inheritance, abstraction, statics, etc. Functional programming relies primarily on the following concepts:
- <u>Purity</u>: 
  - <u>Direct Effects Only</u>: functions do not affect other parts of the program or memory.
  - <u>Type Immutability</u>: Variables cannot change value, they are always the same as long as they exist in memory
  - <u>Deterministic Consistency</u>: Inputting a specific value A will *always* output a value B, no matter what, where, or when the function is called
- <u>Recursion</u>: Instead of using `for` or `while` loops, functions call themselves as many times as needed or iterate recursively through data collections.
- <u>Referential Transparency</u>: Variables are never actually assigned. Thus, every function is equipped to handle *any* variable of its type. Making every function surjective.
- <u>Higher-Order/Generic-Type Operations</u>: You can generalise functions to abstract certain behaviour to more general concepts.

These concepts are really useful for a lot of programming applications, here are just some benefits:
- Everything is in one call stack, making tracing the source of errors much easier; no endless jumping around files trying to find where the program changed a variable to cause an error.
- Consistency in output means you can always recreate an error when one occurs.
- Functions can handle every possible input of the given type, the conditional guarding is built-in.
- Compressed and shorter code. I've seen entire procedures of 50+ lines, being turned into single-line statements without too much loss of readability.
- Higher-order functions are basically infinitely reusable, becoming as essential as primitive types are
- Everything is there and explicitly defined, there is no hidden components or secret operations, it is what it is
- No aliasing. Aliasing is evil.
- It's much harder to brick your computer, as long as your linter can actually flag issues with base cases (partly why Haskell sucks).

There are obvious disadvantages. But generally speaking, this is why it's so useful to program in websites – the assurance that “it just works” and “everything is there” is *extremely* helpful.

Here's an [IEEE](https://spectrum.ieee.org/functional-programming) article on it too.

#### How

In typescript, functional programming is rather simple. After all, [typescript is designed with support for functional programming (most especially, currying) in mind](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html).

For ESLint, there is a plugin that helps enforce functional rules called [`eslint-plugin-functional`](https://github.com/eslint-functional/eslint-plugin-functional). For client-side development, large already-programmed code bases, and/or top-level entry files, a lite configuration is preferred. In modules themselves, recommended settings are, well, recommended.

[`fp-ts`](https://gcanti.github.io/fp-ts/) is a helpful library for all things functional. It provides functionality for various aspects of functional programming to make writing code easier and safer. `fp-ts` already assumes you know how to use functional programming, though, in my experience, what's more important is that you understand how [generic typing](https://www.typescriptlang.org/docs/handbook/2/generics.html) and [collections](https://www.xjavascript.com/blog/typescript-collection-types) work in typescript. For the functional side of things, `fp-ts` has some [learning resources](https://gcanti.github.io/fp-ts/learning-resources/) that I recommend you check out.

### Smaller Bits

Here's a list of some extra links that are worth looking into:
- HTML markdown embedding with [Zero-MD](https://zerodevx.github.io/zero-md).
- Using [XHTTP requests](https://www.w3schools.com/xml/xml_http.asp) to read and [include HTML files](https://www.w3schools.com/howto/howto_html_include.asp) within other HTML files.
- What [RSS feeds](https://www.w3schools.com/xml/xml_rss.asp) are and how to use them.
- Compiling node modules into browser-friendly code with [Browserify](https://browserify.org).
- Translating ESNext imports into CommonJS via [Babelify](https://github.com/babel/babelify).
- Adding consistent and clean icon sets with [Flaticon](https://www.flaticon.com) – this repository uses exclusively the [Google Icon Pack](https://www.flaticon.com/authors/google-material-design/monochrome).

### More Documentation/Websites From Me

Here are some of my personal projects and websites that I think you should take a look at, especially if you want an example of how to use this repository to its fullest extent, see my:
- [Homepage](https://oliviax727.github.io) and its [README](https://github.com/oliviax727/oliviax727.github.io?tab=readme-ov-file)
- [RSS Newsreader](https://oliviax727.github.io/RSS-ohrw) and its [README](https://github.com/oliviax727/RSS-ohrw?tab=readme-ov-file)
- [Custom Bash-RC Shell Project](https://github.com/oliviax727/bash-rc)
- [GitHub Profile](https://github.com/oliviax727)

### Inspirations/Cool Sites

Here are some cool websites, channels, and media that inspired my work:
- [My First Webpage](https://github.com/oliviax727/Trade-Wars) – the origin of a lot of my web programming know-how, as well as the start of my career in programming.
- [Universal Paperclips](https://www.decisionproblem.com/paperclips/index2.html) – a great, yet simple, clicker game
- [Christoph Federath's Webpage](https://www.mso.anu.edu.au/~chfeder/people.html) – one of my professors from my honours' year, and a basis for creating my own website as well as the source design for the CSS styling
- [Why Object-Oriented Programming Sucks](https://www.youtube.com/watch?v=QM1iUe6IofM) (Video) – Personally I think OOP isn't that bad. But this guy does make some good points
- [Tantacrul](https://www.youtube.com/@Tantacrul) – A YouTube channel who has an excellent series on the (terrible) software design of music notation applications, and an excellent guide in what *not* to do when designing UIs
- [Jekyll Website Templates](https://jekyllthemes.io/free) – A series of GitHub Pages templates that inspired me to make my own.
- [Jekyll RSS/Atom Feed](https://github.com/jekyll/jekyll-feed) – An RSS feed generator for your GitHub repository.
- [The Art of Code](https://www.youtube.com/watch?v=6avJHaC3C2U) (Video) – Really cool video.
