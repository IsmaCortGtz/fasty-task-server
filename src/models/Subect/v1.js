import { model, Schema } from 'mongoose';

const subjectSchema = new Schema({
  classID: Schema.ObjectId,
  teacher: String,
  subject: String
});

export const Subject = model('Subject', subjectSchema);
