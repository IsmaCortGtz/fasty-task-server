import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  studentClass: [Schema.ObjectId],
  adminClass: [Schema.ObjectId],
  tasksCompleted: [Schema.ObjectId],
  config: {}
});

export const User = model('User', userSchema);
