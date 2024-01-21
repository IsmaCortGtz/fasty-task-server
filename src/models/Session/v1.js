import { model, Schema } from 'mongoose';

const sessionSchema = new Schema({
  classID: Schema.ObjectId,
  subject: Schema.ObjectId,
  starts: Date,
  ends: Date,
  classroom: String,
  links: [String]
});

export const Session = model('Session', sessionSchema);
