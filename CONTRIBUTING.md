## Contributing

In it’s current early state, this project is very much a work in progress, but here’s a quick outline of the development process.

### HTML

As a single-page application, this project has very little static HTML, and it’s all contained in the single `app/index.html` file. Most of the markup is actually located in EJS templates in the `app/scripts/templates` folder. Those files use standard [Underscore.js](http://underscorejs.org) [templating](http://underscorejs.org/#template). 

### CSS

To expedite the prototype development, the project currently uses a single CSS file. We're in the process of swapping it out for a more modular and maintainable approach based on [LESS](http://lesscss.org).

#### Documentation

A rudimentary CSS-based style guide is [avaiable](http://demo.stemincubator.org/docs/styleguide/), but that is expected to undergo significant revision as the styles are migrated to LESS.

### JavaScript

The application relies on the standard boilerplates created by [Yeoman](http://yeoman.io), specifically the [Backbone generator](https://github.com/yeoman/generator-backbone). A typical workflow for adding new code is:

1. `yo backbone:model <model name>` to create boilerplate application and unit test code for a new model. (Similar commands for new collections and views.)
2. `yo serve` to start a local server for code development.
3. `yo serve:test` to start a local server for unit test development.
4. `yo lint` to check code for style, formatting, etc.
5. `yo test` to execute unit tests.
6. `yo build` to create the production version.

#### Naming Conventions

In general, models are singular nouns (e.g. `Proposal`) , collections are plural (e.g. `Proposals`), and views include the model or collection and a description of how it is rendered (e.g. `ProposalAsHighlight`).

#### Documentation

Much of the code is documented using [literate programming](http://en.wikipedia.org/wiki/Literate_programming). We use [docco](http://jashkenas.github.io/docco/) to automatically generate [live documentation](http://demo.stemincubator.org/docs/js/) as part of the build process.
