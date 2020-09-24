export function isEmpty(variable) {
  if (variable.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

export function verifyInputEmail(email) {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regex.test(email);
}

export function verifyInputPassword(password) {
  if (password.trim().length >= 8) {
    return true;
  } else {
    return false;
  }
}
