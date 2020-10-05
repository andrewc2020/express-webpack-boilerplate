"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var webpack_1 = __importDefault(require("webpack"));
var webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
var webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
var webpack_dev_config_1 = __importDefault(require("../../webpack.dev.config"));
var app = express_1.default(), DIST_DIR = __dirname, HTML_FILE = path_1.default.join(DIST_DIR, 'index.html'), compiler = webpack_1.default(webpack_dev_config_1.default);
app.use(webpack_dev_middleware_1.default(compiler, {
    publicPath: webpack_dev_config_1.default.output.publicPath
}));
app.use(webpack_hot_middleware_1.default(compiler));
app.get('*', function (req, res, next) {
    compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "....");
    console.log('Press Ctrl+C to quit.');
});
