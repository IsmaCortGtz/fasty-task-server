// Dependencies
import mongoose from 'mongoose';
import { User } from '../models/User/v1.js';

export function connectDB () {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected!'))
    .catch(err => console.error(err));
}

export async function countUsers () {
  return await User.countDocuments({});
}
