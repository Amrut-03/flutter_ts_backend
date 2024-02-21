"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const tweet_routes_1 = __importDefault(require("./tweet.routes"));
const hello_routes_1 = __importDefault(require("./hello.routes"));
const router = (0, express_1.Router)();
router.use('/hello', hello_routes_1.default); // this route for cecking server is live or not
router.use('/user', user_routes_1.default); // this route for CRUD operations
router.use('/tweet', tweet_routes_1.default); // this route for Tweet CRUD operations
exports.default = router;
