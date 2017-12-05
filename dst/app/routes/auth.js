"use strict";
/**
 * 認可ルーター
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moment = require("moment");
const authRouter = express_1.Router();
authRouter.post('/token/access_token', (__, res) => {
    res.json({
        access_token: 'access_token',
        expired_at: moment().add(1, 'hour').unix()
    });
});
exports.default = authRouter;
