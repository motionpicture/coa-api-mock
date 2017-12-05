"use strict";
/**
 * マスタールーター
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require("fs");
const masterRouter = express_1.Router();
masterRouter.get('/theater/:theaterCode/theater/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/theater.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/title/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/title.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/screen/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/screen.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/schedule/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/schedule.json.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/ticket/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/ticket.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/kubun_name/', (__, res) => {
    fs.createReadStream(`${__dirname}/../../../data/kubunName.json`).pipe(res);
});
masterRouter.get('/theater/:theaterCode/mvtk_ticketcode/', (__, res) => {
    res.json({
        status: 0,
        message: '',
        ticket_code: '',
        ticket_name: '',
        ticket_name_kana: '',
        ticket_name_eng: '',
        add_price: 100,
        add_price_glasses: 100
    });
});
exports.default = masterRouter;
