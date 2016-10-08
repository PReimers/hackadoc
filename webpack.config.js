var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      '_': 'lodash',
      jquery: "jquery",
      jQuery: "jquery",
      $: "jquery",
      "window.jQuery": "jquery",
      Visibility: "visibilityjs",
      Cookies: "js-cookie",
      CodeMirror: "codemirror",
      emojify: "emojify.js",
      ot: "ot",
      io: "socket.io-client",
      LZString: "lz-string",
      key: "keymaster"
    }),
    new webpack.DefinePlugin({
      "require.specified": "require.resolve"
    })
  ],

  entry: {
    app: path.join(__dirname, 'public/js/app.js')
  },

  output: {
    path: path.join(__dirname, 'public/build/js'),
    filename: '[name].js'
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ["", ".js"],
    alias: {
      'jquery-ui': 'jquery-ui/ui/widgets'
    }
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader"
      })
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: require.resolve("js-sequence-diagrams"),
      loader: "imports?Raphael=raphael"
    }]
  },

  node: {
    fs: "empty"
  }
};
