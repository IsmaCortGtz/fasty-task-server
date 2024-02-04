// Dependencies
import { Router } from 'express';
import { checkJWT } from '../../middlewares/jwt.js';
import versionHandler from '../../middlewares/version.js';

// Import routes
import task from '../../controllers/task/index.js';

// Define router
const taskRouter = Router({ mergeParams: true });

// Subject routes
taskRouter.post('/new', versionHandler(1), checkJWT, task.new.v1);
taskRouter.post('/update', versionHandler(1), checkJWT, task.update.v1);
taskRouter.delete('/delete/:taskId', versionHandler(1), checkJWT, task.delete.v1);
taskRouter.get('/get/:taskId', versionHandler(1), checkJWT, task.get.v1);

export default taskRouter;
