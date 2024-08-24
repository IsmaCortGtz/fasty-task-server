import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  tasksCompleted: [Schema.ObjectId],
  config: {},
  courses: [{
    _id: Schema.ObjectId,
    isAdmin: Boolean
  }]
});

export const User = model('User', userSchema);
