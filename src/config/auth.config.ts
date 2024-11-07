/* import { auth } from 'express-oauth2-jwt-bearer';
import { expressJwtSecret } from 'jwks-rsa';
import { config } from './environment';

export const checkJwt = auth({
  audience: config.auth.audience,
  issuerBaseURL: config.auth.issuerBaseURL,
  tokenSigningAlg: 'RS256'
});

// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from 'express-jwt';
import { CustomError } from '../utils/custom-error';

export interface AuthRequest extends Request {
  auth?: {
    payload: {
      sub: string;
      permissions?: string[];
      [key: string]: any;
    };
  };
} */