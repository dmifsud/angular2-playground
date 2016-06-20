const webpackMerge = require('webpack-merge');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  debug: true,
  context: __dirname + '/src',
  entry: {
      app: './app/app.ts',
      vendor: [
        // 'core-js', //polyfills
        'zone.js',
        'reflect-metadata'
      ]
  },
  output: {
    filename: '[name].js',
    sourceMapFileName: '[name].map',
    path: __dirname + '/build'
  },

  devServer: {
    port: 5000,
    contentBase: __dirname + '/build',
    // historyApiFallback: true,
    // stats: 'minimal',
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000
    // },
    //outputPath: __dirname + '/build'
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],

    //moduleDirectories: ['node_modules'],

    root: root(),


    // alias: {
    //   'angular2/core': 'node_modules/@angular/core/index.js',
    //   'angular2/platform/browser': 'node_modules/@angular/platform-browser/index.js',
    //   'angular2/testing': 'node_modules/@angular/testing/index.js',
    //   'angular2/router': 'node_modules/@angular/router-deprecated/index.js',
    //   'angular2/http': 'node_modules/@angular/http/index.js',
    //   'angular2/http/testing': 'node_modules/@angular/http/testing.js'
    // }

  },
  module: {
    preLoaders: [

      {
        test: /\.ts$/,
        loader: 'tslint',
        exclude: [/\.(spec|e2e)\.ts$/]
      }

    ],

    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      body: 'Understanding webpack :)',
      entry: 'app/index.ejs', // Load a custom template (ejs by default but can be changed)
      fileName: 'index.html',
      template: 'index.ejs',
      hash: true
    })
  ]
};
