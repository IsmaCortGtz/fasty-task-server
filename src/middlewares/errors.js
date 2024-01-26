function errorMaker (name) {
  return (class BusinessError extends Error {
    constructor (message) {
      super(message);
      this.name = name;
    }
  });
}

export const UrlNotFound = errorMaker('UrlNotFound');
export const ApiVersionError = errorMaker('ApiVersionError');
export const UnknowError = errorMaker('UnknowError');

// Account
export const PasswordNeeded = errorMaker('PasswordNeeded');
export const PasswordRequirements = errorMaker('PasswordRequirements');
export const InvalidCredentials = errorMaker('InvalidCredentials');
export const UsernameInUse = errorMaker('UsernameInUse');

// JWT
export const JsonWebTokenError = errorMaker('JsonWebTokenError');
