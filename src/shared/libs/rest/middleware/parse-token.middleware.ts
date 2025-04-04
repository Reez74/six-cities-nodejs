import { NextFunction, Request, Response } from 'express';
import { jwtVerify } from 'jose';
import { StatusCodes } from 'http-status-codes';
import { createSecretKey } from 'node:crypto';

import { Middleware } from './middleware.interface.js';
import { HttpError } from '../errors/index.js';
import { TokenPayload } from '../../../modules/auth/index.js';
import { ENCODING_DEFAULT } from '../../../constant/index.js';

export class ParseTokenMiddleware implements Middleware {
  constructor(private readonly jwtSecret: string) {}

  private isTokenPayload(payload: unknown): payload is TokenPayload {
    return (
      (typeof payload === 'object' && payload !== null) &&
      ('id' in payload && typeof payload.id === 'string') &&
      ('email' in payload && typeof payload.email === 'string')
    );
  }

  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const authorizationHeader = req.headers?.authorization?.split(' ');

    if (!authorizationHeader) {
      return next();
    }

    const [, token] = authorizationHeader;

    try {
      const { payload } = await jwtVerify(token, createSecretKey(this.jwtSecret, ENCODING_DEFAULT));

      if (this.isTokenPayload(payload)) {
        req.tokenPayload = payload;
        return next();
      } else {
        throw new Error('Token is invalid or expired');
      }
    } catch {
      return next(new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Invalid token',
        'AuthenticateMiddleware')
      );
    }
  }
}
