import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  courses: [Schema.ObjectId],
  adminCourses: [Schema.ObjectId],
  tasksCompleted: [Schema.ObjectId],
  config: {}
});

export const User = model('User', userSchema);
