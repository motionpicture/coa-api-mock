/**
 * 予約ルーター
 * @ignore
 */

import { Router } from 'express';
import * as fs from 'fs';
import * as moment from 'moment';
// tslint:disable-next-line:no-require-imports no-var-requires
require('moment-timezone');

const reserveRouter = Router();

reserveRouter.get(
    '/theater/:theaterCode/count_free_seat/',
    (req, res) => {
        fs.readFile(`${__dirname}/../../../data/countFreeSeat.json`, (__2, buffer) => {
            const data = JSON.parse(buffer.toString());

            const startDate = moment(`${req.query.begin} 00:00:00+09:00`, 'YYYYMMDD HH:mm:ssZ');
            const endDate = moment(`${req.query.end} 00:00:00+09:00`, 'YYYYMMDD HH:mm:ssZ').add(1, 'day');
            const days = endDate.diff(startDate, 'days');

            const dates: any[] = [];

            // tslint:disable-next-line:no-increment-decrement
            for (let i = 0; i < days; i++) {
                const dateJouei = moment(startDate).add(i, 'days');
                dates.push({
                    ...data.list_date[0],
                    date_jouei: dateJouei.tz('Asia/Tokyo').format('YYYYMMDD')
                });
            }

            data.list_date = dates;
            res.json(data);
        });
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
            // tslint:disable-next-line:insecure-random no-magic-numbers
            tmp_reserve_num: parseInt(`${Math.floor(Math.random() * 99999999)}`, 10) // ランダムに予約番号発行
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
            // tslint:disable-next-line:insecure-random no-magic-numbers
            tmp_reserve_num: parseInt(`${Math.floor(Math.random() * 99999999)}`, 10) // ランダムに予約番号発行
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
