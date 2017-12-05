/**
 * 認可ルーター
 * @ignore
 */

import { Router } from 'express';
import * as moment from 'moment';

const authRouter = Router();

authRouter.post(
    '/token/access_token',
    (__, res) => {
        res.json({
            access_token: 'access_token',
            expired_at: moment().add(1, 'hour').unix()
        });
    });

export default authRouter;
