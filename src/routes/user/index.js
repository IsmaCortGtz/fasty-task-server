// Dependencies
import { Router } from 'express';
import { passwordCheck } from '../../middlewares/passwordCheck.js';
import { checkJWT } from '../../middlewares/jwt.js';
import versionHandler from '../../middlewares/version.js';

// Import routes
import user from '../../controllers/user/index.js';

// Define router
const userRouter = Router({ mergeParams: true });

// User routes
userRouter.get('/info', versionHandler(1), checkJWT, user.info.v1);
userRouter.get('/info/:key', versionHandler(1), checkJWT, user.infoKey.v1);
userRouter.post('/login', versionHandler(1), passwordCheck, user.login.v1);
userRouter.post('/singup', versionHandler(1), passwordCheck, user.singup.v1);
userRouter.post('/update', versionHandler(1), checkJWT, user.update.v1);

export default userRouter;
