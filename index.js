const moduleExportsPlugin = require('babel-plugin-add-module-exports');
const babelPresetEs2015 = require('babel-preset-es2015');
const babelPresetStage0 = require('babel-preset-stage-0');
const babelPresetReact = require('babel-preset-react');
const babelPluginTransformEs2015ObjectSuper = require('babel-plugin-transform-es2015-object-super');

module.exports = {
  presets: [
    babelPresetEs2015,
    babelPresetStage0,
    babelPresetReact,
  ],
  plugins: [
    moduleExportsPlugin.default ? moduleExportsPlugin.default : moduleExportsPlugin,
    babelPluginTransformEs2015ObjectSuper,
  ],
};
