import { Express } from 'express';
import { UserDocument } from '../../interfaces/interfaces';

// Allows req.user with TypeScript
declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
}
