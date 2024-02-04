// Controllers imports
/* Info */
import { sessionNewV1 } from './new/v1.js';
import { sessionDeleteV1 } from './delete/v1.js';
import { sessionUpdateV1 } from './update/v1.js';
import { sessionGetV1 } from './get/v1.js';

// Declare routes
const session = {
  new: { v1: sessionNewV1 },
  update: { v1: sessionUpdateV1 },
  delete: { v1: sessionDeleteV1 },
  get: { v1: sessionGetV1 }
};

// Export routes
export default session;
