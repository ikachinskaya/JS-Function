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


