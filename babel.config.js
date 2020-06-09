const path = require('path');

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('.')],
      extensions: ['.js', '.jsx', '.json', '.android.js', '.android.jsx'],
      alias: {
        '@app-screens': './app/screens',
        '@app-components': './app/components',
        '@app-utils': './app/utils',
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: plugins,
  };
};
