import { model, Schema } from 'mongoose';

const taskSchema = new Schema({
  classID: Schema.ObjectId,
  subjectID: Schema.ObjectId,
  deadline: Date,
  openDate: Date,
  taskName: String,
  taskDescription: String
});

export const Task = model('Task', taskSchema);
