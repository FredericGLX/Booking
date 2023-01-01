import { Express } from 'express';
import { UserDocument } from '../../types/type';

// Allows req.user with TypeScript
declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
}
