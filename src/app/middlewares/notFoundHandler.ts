/**
 * 404ハンドラーミドルウェア
 * @module middlewares.notFoundHandler
 */

import { Request, Response } from 'express';
import { NOT_FOUND } from 'http-status';

export default (__: Request, res: Response) => {
    res.status(NOT_FOUND).type('text').send('Not Found');
};
