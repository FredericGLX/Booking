export interface CustomError extends Error {
  status?: number;
}

export interface InputsModel {
  id: number | string;
  label: string;
  type: string;
  placeholder?: string;
}

export interface UserData {
  _id: number;
  username: string;
  age: number;
  img: string;
  email: string;
  country?: string;
  phone?: string | number;
  status: string;
}

export interface HotelData {
  _id: number;
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

export interface RoomNumber {
  number: number;
  unavailableDates: Date;
}
export interface RoomData {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: [RoomNumber];
  _id: number;
}

export interface CellParams {
  row: {
    _id: string;
    img?: string;
    username?: string;
  };
}

export interface ColumnModel {
  field: string;
  headerName: string;
  width: number;
}

export interface ListData {
  _id: number;
}
