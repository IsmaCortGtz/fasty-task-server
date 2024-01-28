import { model, Schema } from 'mongoose';

const sessionSchema = new Schema({
  subject: Schema.ObjectId,
  course: Schema.ObjectId,
  starts: Date,
  ends: Date,
  classroom: String,
  links: [String]
});

export const Session = model('Session', sessionSchema);
