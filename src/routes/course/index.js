// Dependencies
import { Router } from 'express';
import { passwordCheck, classcodeCheck } from '../../middlewares/passwordCheck.js';
import { checkJWT } from '../../middlewares/jwt.js';
import versionHandler from '../../middlewares/version.js';

// Import routes
import course from '../../controllers/course/index.js';

// Define router
const courseRouter = Router({ mergeParams: true });

// User routes
courseRouter.post('/new', versionHandler(1), checkJWT, passwordCheck, classcodeCheck, course.new.v1);
courseRouter.delete('/delete/:classcode', versionHandler(1), checkJWT, course.delete.v1);
courseRouter.post('/passwordchange', versionHandler(1), checkJWT, course.passwordChange.v1);
courseRouter.get('/tasks/:classcode', versionHandler(1), checkJWT, course.getId.v1('tasks'));
courseRouter.get('/schedule/:classcode', versionHandler(1), checkJWT, course.getId.v1('schedule'));
courseRouter.get('/subjects/:classcode', versionHandler(1), checkJWT, course.getId.v1('subjects'));

export default courseRouter;
