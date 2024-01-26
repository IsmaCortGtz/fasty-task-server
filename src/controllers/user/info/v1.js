// Dependencies
import { User } from '../../../models/User/v1.js';
import { JsonWebTokenError } from '../../../middlewares/errors.js';

// Route
export async function userInfoV1 (req, res, next) {
  User.findById(req._id)
    .then(user => {
      if (!user) return next(new JsonWebTokenError());
      const { _id, __v, password, ...result } = user.toObject();
      return res.send(result);
    })
    .catch(error => next(error));
}

// Route keys
export async function userInfoKeyV1 (req, res, next) {
  User.findById(req._id)
    .then(user => {
      if (!user) return next(new JsonWebTokenError());
      const result = {};
      const search = req.params.key.split(',');
      const { _id, __v, password, ...userData } = user.toObject();

      search.forEach(value => {
        if (Object.keys(userData).includes(value)) {
          result[value] = userData[value];
          return;
        }

        if (value.startsWith('config.')) {
          const configValue = value.split('.')[1];
          if (!userData.config) return;
          if (!userData.config[configValue]) return;
          if (!result.config) result.config = {};
          result.config[configValue] = userData.config[configValue];
        }
      });

      return res.send(result);
    })
    .catch(error => next(error));
}
