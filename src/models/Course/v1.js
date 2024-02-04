import { model, Schema } from 'mongoose';

const courseSchema = new Schema({
  classcode: String,
  password: String,
  subjects: [Schema.ObjectId],
  tasks: [Schema.ObjectId],
  sessions: [Schema.ObjectId]
});

export const Course = model('Course', courseSchema);
