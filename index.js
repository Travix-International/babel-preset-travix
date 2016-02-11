module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-es2015-object-super')
  ],
};
