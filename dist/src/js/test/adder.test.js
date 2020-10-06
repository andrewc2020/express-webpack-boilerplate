"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
var adder_1 = __importDefault(require("../adder"));
describe('Adder', function () {
    test('adds two numbers', function () {
        expect(adder_1.default(5, 3)).toEqual(8);
    });
});
