/**
 * バリデーターミドルウェア
 * リクエストのパラメータ(query strings or body parameters)に対するバリデーション
 * @module middlewares.validator
 */

import * as createDebug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { } from 'express-validator';
import { BAD_REQUEST } from 'http-status';

const debug = createDebug('coa-api-mock:middlewares:validator');

export default async (req: Request, res: Response, next: NextFunction) => {
    const validatorResult = await req.getValidationResult();
    if (!validatorResult.isEmpty()) {
        // const errors = validatorResult.array().map((mappedRrror) => {
        //     return new sskts.factory.errors.Argument(mappedRrror.param, mappedRrror.msg);
        // });
        debug('validation result not empty...', validatorResult.array());

        const result = {
            message: `${validatorResult.array()[0].param}:${validatorResult.array()[0].msg}`,
            status: 'Invalid parameters'
        };
        res.status(BAD_REQUEST).json(result);
    } else {
        next();
    }
};
