// Dependencies
import { Router } from 'express';
import { checkJWT } from '../../middlewares/jwt.js';
import versionHandler from '../../middlewares/version.js';

// Import routes
import session from '../../controllers/session/index.js';

// Define router
const sessionRouter = Router({ mergeParams: true });

// Subject routes
sessionRouter.post('/new', versionHandler(1), checkJWT, session.new.v1);
sessionRouter.post('/update', versionHandler(1), checkJWT, session.update.v1);
sessionRouter.delete('/delete/:sessionId', versionHandler(1), checkJWT, session.delete.v1);
sessionRouter.get('/get/:sessionId', versionHandler(1), checkJWT, session.get.v1);

export default sessionRouter;
