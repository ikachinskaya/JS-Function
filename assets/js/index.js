const isAdult = function (age) {
  if (isNaN(age) || age <= 0) {
    return null;
  }
  return age >= 18 ? true : false;
};

const checkMultiplicity = function (number1, number2) {
  if (isNaN(number1 - number2) || number1 === 0) {
    return null;
  }
  return number1 % number2 === 0 ? true : false;
};

const isTriangle = function (a, b, c) {
  if (isNaN(a - b - c) || a <= 0 || b <= 0 || c <= 0) {
    return null;
  }
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
};

