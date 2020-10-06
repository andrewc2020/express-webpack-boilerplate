"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var app = express_1.default(), DIST_DIR = __dirname, HTML_FILE = path_1.default.join(DIST_DIR, 'index.html');
app.use(express_1.default.static(DIST_DIR));
app.get('*', function (req, res) {
    res.sendFile(HTML_FILE);
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening to " + PORT + "....");
    console.log('Press Ctrl+C to quit.');
});
