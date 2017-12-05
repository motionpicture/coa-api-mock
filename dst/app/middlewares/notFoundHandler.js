"use strict";
/**
 * 404ハンドラーミドルウェア
 * @module middlewares.notFoundHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("http-status");
exports.default = (__, res) => {
    res.status(http_status_1.NOT_FOUND).type('text').send('Not Found');
};
