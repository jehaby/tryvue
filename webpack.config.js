'use strict';

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
            }
        ]
    }
    //watchOptions: {
    //    aggregateTimeout: 100
    //},
    //devtool: "source-map"
    //devtool: "cheap-inline-module-source-map"

}