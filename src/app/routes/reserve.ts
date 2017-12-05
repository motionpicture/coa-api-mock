/**
 * 予約ルーター
 * @ignore
 */

import { Router } from 'express';
import * as fs from 'fs';

const reserveRouter = Router();

reserveRouter.get(
    '/theater/:theaterCode/count_free_seat/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/countFreeSeat.json`).pipe(res);
    });

reserveRouter.get(
    '/theater/:theaterCode/state_reserve_seat/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/stateReserveSeat.json`).pipe(res);
    });

reserveRouter.get(
    '/theater/:theaterCode/upd_tmp_reserve_seat/',
    (__, res) => {
        res.json({
            status: 0,
            message: '',
            list_tmp_reserve: [
                {
                    seat_num: 'Ｈ－１６',
                    seat_section: '   '
                }
            ],
            // tslint:disable-next-line:no-suspicious-comment
            tmp_reserve_num: 47296 // TODO モック環境でもユニークな予約番号を生成する
        });
    });

reserveRouter.get(
    '/theater/:theaterCode/del_tmp_reserve/',
    (__, res) => {
        res.json({
            status: 0,
            message: ''
        });
    });

reserveRouter.get(
    '/theater/:theaterCode/upd_reserve/',
    (__, res) => {
        res.json({
            status: 0,
            message: '',
            list_qr: [
                {
                    seat_num: 'Ｈ－１６',
                    seat_section: '   ',
                    seat_qrcode: '1182017112100057186001'
                }
            ],
            // tslint:disable-next-line:no-suspicious-comment
            reserve_num: 47296 // TODO モック環境でもユニークな予約番号を生成する
        });
    });

reserveRouter.get(
    '/theater/:theaterCode/del_reserve/',
    (__, res) => {
        res.json({
            status: 0,
            message: ''
        });
    });

reserveRouter.get(
    '/theater/:theaterCode/state_reserve/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/stateReserve.json`).pipe(res);
    });

reserveRouter.get(
    '/theater/:theaterCode/sales_ticket/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/salesTicket.json`).pipe(res);
    });

export default reserveRouter;
