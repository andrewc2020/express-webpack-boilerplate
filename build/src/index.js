"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./js/logger"));
require("./css/style.css");
// Log message to console
logger_1.default('A very warm welcome to Expack!');
// Needed for Hot Module Replacement
// eslint-disable-next-line no-undef
if (typeof (module.hot) !== 'undefined') {
    module.hot.accept(); // eslint-disable-line no-undef  
}
