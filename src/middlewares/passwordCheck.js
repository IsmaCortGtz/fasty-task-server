import { PasswordNeeded, PasswordRequirements } from './errors.js';

export function meetRequirements (password) {
  if (password.length < 8) return false; // Min length
  if (password.length > 50) return false; // Max length
  if (password === password.toLowerCase()) return false; // Has Uppercase
  if (password === password.toUpperCase()) return false; // Has Lowerercase
  if (!/\d/.test(password)) return false; // Has Numbers
  if (!/(?=.*[!@#$%^&*.\-_{}[\]="/()?¡'¿\\+^~¨·|¬])/.test(password)) return false; // Has symbols

  return true;
}

export function passwordCheck (request, response, next) {
  const { password } = request.body;
  if (!password) {
    return next(new PasswordNeeded('password needed'));
  }

  if (!meetRequirements(password)) {
    return next(new PasswordRequirements("password doesn't meet the requirements"));
  }

  return next();
}
