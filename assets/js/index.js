const isAdult = function (age) {
  if (isNaN(age) || age <= 0) {
    return null;
  }
  return age >= 18 ? true : false;
};

