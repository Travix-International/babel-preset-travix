const moduleExportsPlugin = require('babel-plugin-add-module-exports');
const babelPresetEnv = require('babel-preset-env');
const babelPresetStage3 = require('babel-preset-stage-3');
const babelPresetReact = require('babel-preset-react');
const babelPluginTransformExportDefault = require('babel-plugin-transform-export-default');
const babelPluginTransformEs2015ObjectSuper = require('babel-plugin-transform-es2015-object-super');
const babelPluginTransformFunctionBind = require('babel-plugin-transform-function-bind');

const targets = {
  node: 'current',
  android: 30,
  chrome: 50,
  edge: 14,
  explorer: 11,
  firefox: 52,
  safari: 9,
  ucandroid: 1
};

module.exports = {
  presets: [
    babelPresetEnv.default(null, { targets }),
    babelPresetStage3,
    babelPresetReact,
  ],
  plugins: [
    moduleExportsPlugin.default ? moduleExportsPlugin.default : moduleExportsPlugin,
    babelPluginTransformEs2015ObjectSuper,
    babelPluginTransformExportDefault,
    babelPluginTransformFunctionBind,
  ],
};
