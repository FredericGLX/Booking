import mongoose from 'mongoose';
import { RoomModel } from '../interfaces/interfaces';

const RoomSchema = new mongoose.Schema<RoomModel>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: {
    type: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
});

export default mongoose.model<RoomModel>('Room', RoomSchema);
