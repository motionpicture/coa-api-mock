/**
 * マスタールーター
 * @ignore
 */

import { Router } from 'express';
import * as fs from 'fs';

const masterRouter = Router();

masterRouter.get(
    '/theater/:theaterCode/theater/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/theater`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/title/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/title`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/screen/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/screen`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/schedule/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/schedule`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/ticket/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/ticket`).pipe(res);
    }
);

masterRouter.get(
    '/theater/:theaterCode/kubun_name/',
    (__, res) => {
        fs.createReadStream(`${__dirname}../../../data/kubunName`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/mvtk_ticketcode/',
    (__, res) => {
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

export default masterRouter;
