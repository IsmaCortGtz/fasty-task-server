// Dependencies
import { User } from '../../../models/User/v1.js';
import { Class } from '../../../models/Class/v1.js';

// Route
export default async function userDeleteV1 (req, res) {
  const user = await User.findById(req._id);
  let succes = true;

  user.studentClass.forEach(async classID => {
    const classDocument = await Class.findById(classID);
    const index = classDocument.students.indexOf(user._id);
    if (index !== -1) classDocument.students.splice(index, 1);
    const result = await classDocument.save();
    if (result !== classDocument) succes = false;
  });

  user.adminClass.forEach(async classID => {
    const classDocument = await Class.findById(classID);
    const index = classDocument.admins.indexOf(user._id);
    if (index !== -1) classDocument.admins.splice(index, 1);
    const result = await classDocument.save();
    if (result !== classDocument) succes = false;
  });

  const deleted = await User.findByIdAndDelete(req._id);

  if (succes && deleted) {
    return res.status(201).end();
  }

  res.status(500).send({ error: 'Unknow error deleting user data' });
}
