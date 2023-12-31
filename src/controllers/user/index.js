// Controllers imports
/* Info */
import { userInfoV1, userInfoKeyV1 } from './info/v1.js';

/* Login */
import userLoginV1 from './login/v1.js';

/* Singup */
import userSingupV1 from './singup/v1.js';

/* Update */
import userUpdateV1 from './update/v1.js';

// Declare routes
const user = {
  info: { v1: userInfoV1 },
  infoKey: { v1: userInfoKeyV1 },
  login: { v1: userLoginV1 },
  singup: { v1: userSingupV1 },
  update: { v1: userUpdateV1 }
};

// Export routes
export default user;
