/**
 * マスタールーター
 * @ignore
 */

import { Router } from 'express';
import * as fs from 'fs';
import * as moment from 'moment';
// tslint:disable-next-line:no-require-imports no-var-requires
require('moment-timezone');

const masterRouter = Router();

masterRouter.get(
    '/theater/:theaterCode/theater/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/theater.json`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/title/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/title.json`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/screen/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/screen.json`).pipe(res);
    });

masterRouter.get(
    '/theater/:theaterCode/schedule/',
    (req, res) => {
        const schedules: any[] = [];
        fs.readFile(`${__dirname}/../../../data/schedule.json`, (__2, buffer) => {
            const data = JSON.parse(buffer.toString());

            const startDate = moment(`${req.query.begin} 00:00:00+09:00`, 'YYYYMMDD HH:mm:ssZ');
            const endDate = moment(`${req.query.end} 00:00:00+09:00`, 'YYYYMMDD HH:mm:ssZ').add(1, 'day');
            const days = endDate.diff(startDate, 'days');

            // tslint:disable-next-line:no-increment-decrement
            for (let i = 0; i < days; i++) {
                const dateJouei = moment(startDate).add(i, 'days');
                schedules.push(...(<any[]>data.list_schedule).map((schedule) => {
                    return {
                        ...schedule,
                        date_jouei: dateJouei.tz('Asia/Tokyo').format('YYYYMMDD'),
                        // tslint:disable-next-line:no-magic-numbers
                        rsv_start_date: moment(dateJouei).add(-2, 'days').tz('Asia/Tokyo').format('YYYYMMDD'),
                        rsv_end_date: dateJouei.tz('Asia/Tokyo').format('YYYYMMDD')
                    };
                }));
            }

            data.list_schedule = schedules;
            res.json(data);
        });
    });

masterRouter.get(
    '/theater/:theaterCode/ticket/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/ticket.json`).pipe(res);
    }
);

masterRouter.get(
    '/theater/:theaterCode/kubun_name/',
    (__, res) => {
        fs.createReadStream(`${__dirname}/../../../data/kubunName.json`).pipe(res);
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
