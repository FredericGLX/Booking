import { CustomError } from '../types/type';

export const createError = (status: number, message: string) => {
  const err: CustomError = new Error();
  err.status = status;
  err.message = message;
  return err;
};
