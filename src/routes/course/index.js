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
courseRouter.post('/passwordchange', versionHandler(1), checkJWT, course.passwordChange.v1);

export default courseRouter;
