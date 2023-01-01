import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth';
import usersRoute from './routes/users';
import hotelsRoute from './routes/hotels';
import roomsRoute from './routes/rooms';
import cors from 'cors';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from './types/type';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Middlewares
// app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log('Connected to back end');
});
