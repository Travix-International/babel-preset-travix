const moduleExportsPlugin = require('babel-plugin-add-module-exports');
const babelPresetEs2015 = require('babel-preset-es2015');
const babelPresetStage3 = require('babel-preset-stage-3');
const babelPresetReact = require('babel-preset-react');
const babelPluginTransformExportDefault = require('babel-plugin-transform-export-default');
const babelPluginTransformEs2015ObjectSuper = require('babel-plugin-transform-es2015-object-super');
const babelPluginTransformFunctionBind = require('babel-plugin-transform-function-bind');

module.exports = {
  presets: [
    babelPresetEs2015,
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
