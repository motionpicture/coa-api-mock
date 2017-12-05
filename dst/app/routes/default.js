"use strict";
/**
 * defaultルーター
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("./auth");
const master_1 = require("./master");
const reserve_1 = require("./reserve");
const router = express_1.Router();
router.use('/', auth_1.default);
router.use('/api/v1', master_1.default, reserve_1.default);
exports.default = router;
