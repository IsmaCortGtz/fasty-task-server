// Dependencies
import mongoose from 'mongoose';

export function connectDB () {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected!'))
    .catch(err => console.error(err));
}