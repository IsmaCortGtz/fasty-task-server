import { model, Schema } from 'mongoose';

const courseSchema = new Schema({
  classCode: String,
  password: String,
  schedule: Schema.ObjectId,
  students: [Schema.ObjectId],
  admins: [Schema.ObjectId],
  subjects: [Schema.ObjectId],
  tasks: [Schema.ObjectId],
  sessions: [Schema.ObjectId]
});

export const Course = model('Course', courseSchema);
