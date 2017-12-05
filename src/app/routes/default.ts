/**
 * defaultルーター
 * @ignore
 */

import { Router } from 'express';

import masterRouter from './master';
import reserveRouter from './reserve';

const router = Router();

router.use(
    masterRouter,
    reserveRouter
);

export default router;
