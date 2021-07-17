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

const getAreaRhombus = function (a, h) {
  if (isNaN(a - h) || a <= 0 || h <= 0) {
    return null;
  }
  return a * h;
};

const PI = 3.14;
const getAreaCylinder = function (h, R) {
  if (isNaN(h - R) || h <= 0 || R <= 0) {
    return null;
  }
  return 2 * PI * R * (h + R);
};

const getAreaTriangle = function (a, h) {
  if (isNaN(a - h) || a <= 0 || h <= 0) {
    return null;
  }
  return 0.5 * a * h;
};

const getAreaRectangle = function (a, b) {
  if (isNaN(a - b) || a <= 0 || b <= 0) {
    return null;
  }
  return a * b;
};

const isPrimeNumber = function (number) {
  if (isNaN(number) || number <= 1 || !Number.isInteger(number)) {
    return null;
  }
  let i = 2;
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      break;
    }
  }
  if (i < number) return false;
  else return true;
};

const getPowerNumber = function (number, power) {
  if (isNaN(number - power)) {
    return null;
  }
  if (power === 0) {
    return 1;
  }
  if (power < 0) {
    number = 1 / number;
    power *= -1;
  }
  
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
};