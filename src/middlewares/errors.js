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

// Password
export const PasswordNeeded = errorMaker('PasswordNeeded');
export const PasswordRequirements = errorMaker('PasswordRequirements');

// JWT
export const JsonWebTokenError = errorMaker('JsonWebTokenError');
