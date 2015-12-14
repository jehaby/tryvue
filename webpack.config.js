'use strict';

var webpack = require('webpack');

module.exports = {
    entry: ["./src/js/main.js"],
    output: {
        filename: "build/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\data.js$/,
                loader: "babel-loader"
            }
        ]
    }
    //watchOptions: {
    //    aggregateTimeout: 100
    //},
    //devtool: "source-map"
    //devtool: "cheap-inline-module-source-map"

}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
