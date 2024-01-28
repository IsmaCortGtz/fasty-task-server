import { model, Schema } from 'mongoose';

const subjectSchema = new Schema({
  course: Schema.ObjectId,
  teacher: String,
  teacherEmail: String,
  subjectName: String,
  links: [String]
});

export const Subject = model('Subject', subjectSchema);
