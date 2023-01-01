import jwt from 'jsonwebtoken';
import { createError } from './error';
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../types/type';
import { UserDocument } from '../types/type';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
  callback: Function
) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'You are not authenticated!'));
  }

  jwt.verify(token, process.env.JWT, (err: CustomError, user: UserDocument) => {
    if (err) return next(createError(403, 'Token is not valid!'));
    req.user = user;
    next();
  });
};

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, 'You are not authorized!'));
    }
  });
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, 'You are not authorized!'));
    }
  });
};
