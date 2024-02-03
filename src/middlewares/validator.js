export function emailValidator (email) {
  if (!email) return false;
  // See https://regexr.com/3e48o for the regex explanation
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}

export function objectIdValidator (id) {
  return /^[0-9a-fA-F]{24}$/g.test(id);
}
