import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema({
  course: Schema.ObjectId,
  monday: [Schema.ObjectID], // Session Id
  tuesday: [Schema.ObjectID],
  wednesday: [Schema.ObjectID],
  thursday: [Schema.ObjectID],
  friday: [Schema.ObjectID],
  saturday: [Schema.ObjectID],
  sunday: [Schema.ObjectID]
});

export const Schedule = model('Schedule', scheduleSchema);
