import { model, Schema } from 'mongoose';

const classSchema = new Schema({
  classCode: String,
  password: String,
  students: [Schema.ObjectId],
  admins: [Schema.ObjectId],
  tasks: [Schema.ObjectId],
  subjects: [Schema.ObjectId],
  schedule: Schema.ObjectId
});

export const Class = model('Class', classSchema);
