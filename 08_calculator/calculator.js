const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(numArray) {
  return numArray.reduce((sum, num) => {
    return sum + num
  }, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((mult, num) => {
    return mult * num
  })
};

const power = function(a , b) {
  return a**b
};

const factorial = function(a) {
  if (a === 0) {
    return 1
  }
  let total = a
  for (let i = a; i > 1; i--) {
    total = total * (i-1)
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
