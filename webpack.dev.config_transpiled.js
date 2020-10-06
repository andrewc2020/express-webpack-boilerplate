"use strict";
exports.__esModule = true;
var path_1 = require("path");
var webpack_1 = require("webpack");
var html_webpack_plugin_1 = require("html-webpack-plugin");
var eslint_webpack_plugin_1 = require("eslint-webpack-plugin");
var config = module.exports;
config = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.ts']
    },
    output: {
        path: './dist',
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    // we don't want any declaration file in the bundles
                    // folder since it wouldn't be of any use ans the source
                    // map already include everything for debugging
                    declaration: false
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new html_webpack_plugin_1({
            template: "./src/html/index.html",
            filename: "./index.html",
            excludeChunks: ['server']
        }),
        new webpack_1.HotModuleReplacementPlugin(),
        new eslint_webpack_plugin_1({
            emitWarning: true,
            failOnError: false,
            failOnWarning: false
        }),
        new webpack_1.NoEmitOnErrorsPlugin()
    ]
};
exports["default"] = config;
