'use strict';

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json' }
    ],
    postLoaders: [
      { test: /\/test\/.*\.tsx?$/, loader: 'webpack-espower-loader' }
    ]
  }
};
