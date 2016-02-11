# babel-preset-travix

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
