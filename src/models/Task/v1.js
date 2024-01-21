import { model, Schema } from 'mongoose';

const taskSchema = new Schema({
  classID: Schema.ObjectId,
  subject: Schema.ObjectId,
  deadline: Date,
  openDate: Date,
  taskName: String,
  taskDescription: String,
  links: [String]
});

export const Task = model('Task', taskSchema);
