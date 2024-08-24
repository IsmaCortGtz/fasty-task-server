import { model, Schema } from 'mongoose';
import { User } from '../User/v1.js';
import { Subject } from '../Subject/v1.js';

const courseSchema = new Schema({
  classcode: String,
  password: String
});

courseSchema.pre('remove', async (next) => {
  // Eliminar el curso de los usuarios
  User.updateMany({ courses: { _id: this._id } }, { $pull: { courses: { _id: this._id } } });

  // Elmiminar las asignaturas del curso
  Subject.deleteMany({ course: this._id });

  // Pasar al siguiente middleware
  next();
});

export const Course = model('Course', courseSchema);
