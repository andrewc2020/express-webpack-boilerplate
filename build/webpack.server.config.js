"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
module.exports = function (env, argv) {
    var SERVER_PATH = (argv.mode === 'production') ?
        './src/server/server-prod.js' :
        './src/server/server-dev.js';
    return ({
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path_1.default.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,
            __filename: false,
        },
        externals: [webpack_node_externals_1.default()],
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
