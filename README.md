# babel-preset-travix [![npm](https://img.shields.io/npm/v/babel-preset-travix.svg)](https://www.npmjs.com/package/babel-preset-travix) [![Build Status](https://img.shields.io/travis/Travix-International/babel-preset-travix/master.svg)](https://travis-ci.org/Travix-International/babel-preset-travix) [![License](https://img.shields.io/github/license/Travix-International/babel-preset-travix.svg)](https://github.com/Travix-International/babel-preset-travix/blob/master/LICENSE)

> A babel preset for transforming your JavaScript for Travix.

## Install

```sh
$ npm install --save-dev babel-preset-travix
```

## Usage

### `.babelrc`

```json
{
  "presets": ["travix"]
}
```

### CLI

```sh
$ babel es6.js --presets travix
```

### API

```js
require('babel-core').transform('foo', {
  presets: ['travix']
});
```

## License

MIT © [Travix International](http://travix.com)
