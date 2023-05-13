const convertToCelsius = function(numF) {
  return Number(((numF - 32)*(5/9)).toFixed(1))
};

const convertToFahrenheit = function(numC) {
  return Number((numC*(9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
