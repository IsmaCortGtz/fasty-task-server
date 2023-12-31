import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema({
  classID: Schema.ObjectId,
  monday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  tuesday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  wednesday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  thursday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  friday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  saturday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }],
  sunday: [{
    subjectID: Schema.ObjectId,
    startTime: Date,
    endTime: Date,
    classroom: String
  }]
});

export const Schedule = model('Schedule', scheduleSchema);
