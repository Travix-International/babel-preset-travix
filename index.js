var moduleExportsPlugin = require('babel-plugin-add-module-exports');

module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
  ],
  plugins: [
    moduleExportsPlugin.default
      ? moduleExportsPlugin.default
      : moduleExportsPlugin,
    require('babel-plugin-transform-es2015-object-super')
  ],
};
