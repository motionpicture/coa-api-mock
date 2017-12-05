/**
 * error handler
 * エラーハンドラーミドルウェア
 * @module middlewares.errorHandler
 */

import { NextFunction, Request, Response } from 'express';

export default (err: any, __1: Request, __2: Response, next: NextFunction) => {
    next(err);
};
