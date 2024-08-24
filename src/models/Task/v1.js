import { model, Schema } from 'mongoose';
import { User } from '../User/v1.js';

const taskSchema = new Schema({
  subject: Schema.ObjectId,
  open: Date,
  close: Date,
  name: String,
  description: String,
  links: [String]
});

taskSchema.pre('remove', async (next) => {
  // Eliminar la tarea de los usuarios
  User.updateMany({ tasksCompleted: this._id }, { $pull: { tasksCompleted: this._id } });
  
  // Pasar al siguiente middleware
  next();
});

export const Task = model('Task', taskSchema);
