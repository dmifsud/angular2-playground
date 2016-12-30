var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  context: __dirname + '/src',
  entry: {
      app: './app/app.ts',
      sass: './app/index.scss',
      vendor: [
        // 'core-js', //polyfills
        'rxjs',
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
    contentBase: __dirname + '/build'
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
  },
  module: {
    preLoaders: [

      {
        test: /\.ts$/,
        loader: 'tslint',
        exclude: [/\.(node_modules|spec|e2e)\.ts$/]
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
            test: /\.template.html$/,
            loader: 'html'
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
          }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
          }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
          }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
          }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
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
