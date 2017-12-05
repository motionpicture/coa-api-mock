/**
 * defaultルーター
 * @ignore
 */

import { Router } from 'express';

import authRouter from './auth';
import masterRouter from './master';
import reserveRouter from './reserve';

const router = Router();

router.use(
    '/',
    authRouter
);

router.use(
    '/api/v1',
    masterRouter,
    reserveRouter
);

export default router;
