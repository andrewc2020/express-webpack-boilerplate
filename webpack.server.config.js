"use strict";
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
module.exports = function (env, argv) {
    var SERVER_PATH = (argv.mode === 'production') ?
        './src/server/server-prod.js' :
        './src/server/server-dev.js';
    return ({
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    // Transpiles ES6-8 into ES5
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    });
};
