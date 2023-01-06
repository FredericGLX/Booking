export interface CustomError extends Error {
  status?: number;
}

export interface HotelModel {
  _id: string;
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
