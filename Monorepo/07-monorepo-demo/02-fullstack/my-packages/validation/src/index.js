function validateNumber(num) {
  if (!num) {
    return { valid: false, message: 'Todo item must have a number' };
  }

  if (num < 1 || num > 100) {
    return { valid: false, message: 'Todo item must be between 1 and 100' };
  }

  return { valid: true, message: '1 - 100' };
}


module.exports = {
  validateNumber,
};