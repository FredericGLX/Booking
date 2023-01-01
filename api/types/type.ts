import mongoose from 'mongoose';

// status property does not exist on default Error interface
export interface CustomError extends Error {
  status?: number;
}

interface UserModel {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface HotelModel extends mongoose.Document {
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: [string];
  title: string;
  desc: string;
  rating: number;
  rooms: [string];
  cheapestPrice: number;
  featured: boolean;
}

interface RoomNumber {
  number: number;
  unavailableDates: Date;
}
export interface RoomModel extends mongoose.Document {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: [RoomNumber];
}

// _doc contains all mongoose data e.g. _id, createdAt etc.
export interface UserDocument extends UserModel, mongoose.Document {
  _doc?: any;
}
