// Dependencies
import { Router } from 'express';
import { checkJWT } from '../../middlewares/jwt.js';
import versionHandler from '../../middlewares/version.js';

// Import routes
import subject from '../../controllers/subject/index.js';

// Define router
const subjectRouter = Router({ mergeParams: true });

// Subject routes
subjectRouter.post('/new', versionHandler(1), checkJWT, subject.new.v1);
subjectRouter.delete('/delete/:subjectId', versionHandler(1), checkJWT, subject.delete.v1);

export default subjectRouter;
