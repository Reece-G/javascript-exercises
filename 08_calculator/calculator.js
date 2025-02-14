const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) 
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let array = [1]
	for (;a > 0; a--) {
    array.push(a);
  }
  return array.reduce((accumulator, currentValue) => accumulator * currentValue)
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
