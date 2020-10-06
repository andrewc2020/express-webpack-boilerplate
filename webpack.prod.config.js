"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
var optimize_css_assets_webpack_plugin_1 = __importDefault(require("optimize-css-assets-webpack-plugin"));
module.exports = {
    entry: {
        main: './build/src/index.js'
    },
    output: {
        path: path_1.default.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
    // Webpack 4 does not have a CSS minifier, although
    // Webpack 5 will likely come with one
    optimization: {
        minimize: true,
        minimizer: [new terser_webpack_plugin_1.default({
                sourceMap: true,
                parallel: true
            }), new optimize_css_assets_webpack_plugin_1.default()],
    },
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                // Loads images into CSS and Javascript files
                test: /\.jpg$/,
                use: [{ loader: "url-loader" }]
            },
            {
                // Loads CSS into a file when you import it via Javascript
                // Rules are set in MiniCssExtractPlugin
                test: /\.css$/,
                use: [mini_css_extract_plugin_1.default.loader, 'css-loader']
            },
        ]
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: "./src/html/index.html",
            filename: "./index.html"
        }),
        new mini_css_extract_plugin_1.default({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
