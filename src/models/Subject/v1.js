import { model, Schema } from 'mongoose';
import { Task } from '../Task/v1.js';
import { Session } from '../Session/v1.js';

const subjectSchema = new Schema({
  course: Schema.ObjectId,
  name: String,
  teacherName: String,
  teacherEmail: String,
  links: [String]
});

subjectSchema.pre('remove', async (next) => {
  // Eliminar las tareas y sesiones de la asignatura
  Task.deleteMany({ subject: this._id });
  Session.deleteMany({ subject: this._id });
  
  // Pasar al siguiente middleware
  next();
});

export const Subject = model('Subject', subjectSchema);
