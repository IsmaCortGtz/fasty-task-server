import { model, Schema } from 'mongoose';

const taskSchema = new Schema({
  subject: Schema.ObjectId,
  course: Schema.ObjectId,
  deadline: Date,
  openDate: Date,
  taskName: String,
  taskDescription: String,
  links: [String]
});

export const Task = model('Task', taskSchema);
