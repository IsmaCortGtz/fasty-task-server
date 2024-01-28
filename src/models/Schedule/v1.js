import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema({
  course: Schema.ObjectId,
  monday: [Schema.ObjectId], // Session Id
  tuesday: [Schema.ObjectId],
  wednesday: [Schema.ObjectId],
  thursday: [Schema.ObjectId],
  friday: [Schema.ObjectId],
  saturday: [Schema.ObjectId],
  sunday: [Schema.ObjectId]
});

export const Schedule = model('Schedule', scheduleSchema);
