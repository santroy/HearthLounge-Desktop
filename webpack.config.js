const { resolve } = require('path');
const webpack = require('webpack');
const fs = require('fs');


module.exports = {
    target: 'electron',
    devtool: 'inline-cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, "dist/"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        }]
    }
};