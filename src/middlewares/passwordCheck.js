import { ParamsNeeded, ParamsRequirements } from './errors.js';

export function meetRequirements (password) {
  if (password.length < 8) return false; // Min length
  if (password.length > 50) return false; // Max length
  if (password === password.toLowerCase()) return false; // Has Uppercase
  if (password === password.toUpperCase()) return false; // Has Lowerercase
  if (!/\d/.test(password)) return false; // Has Numbers
  if (!/(?=.*[!@#$%^&*.\-_{}[\]="/()?¡'¿\\+^~¨·|¬])/.test(password)) return false; // Has symbols

  return true;
}

export function usernameRequirements (username) {
  return /^[a-zA-Z][a-zA-Z0-9]{4,19}$/.test(username);
}

export function passwordCheck (request, response, next) {
  const { password } = request.body;
  if (!password) {
    return next(new ParamsNeeded('Password needed'));
  }

  if (!meetRequirements(password)) {
    return next(new ParamsRequirements("Password does not meet the requirements"));
  }

  return next();
}

export function usernameCheck (request, response, next) {
  const { username } = request.body;
  if (!username) {
    return next(new ParamsNeeded('Username needed'));
  }

  if (!usernameRequirements(username)) {
    return next(new ParamsRequirements("Username does not meet the requirements"));
  }

  return next();
}

export function classcodeCheck (request, response, next) {
  const { classcode } = request.body;
  if (!classcode) {
    return next(new ParamsNeeded('Classcode needed'));
  }

  if (!usernameRequirements(classcode)) {
    return next(new ParamsRequirements("Classcode does not meet the requirements"));
  }

  return next();
}
