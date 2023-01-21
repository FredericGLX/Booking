export interface bookingOptions {
  adult: number;
  children: number;
  room: number;
}

export interface headerProps {
  type: string;
}

export interface RoomNumber {
  number: number;
  unavailableDates: [Date];
  _id: string;
}

export interface RoomModel {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: [RoomNumber];
  _id: string;
}
