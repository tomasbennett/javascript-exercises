const add = function(...params) {
	if(params.length == 1) params = [...params[0]];
  let result = params.reduce((elem, acc) => acc += elem, 0);
  return parseInt(result);

};

const subtract = function(...params) {
	if(params.length == 1) params = [...params[0]];
  let result = params.reduceRight((elem, acc) => acc -= elem, 0);
  return parseInt(result);
};

const sum = function(...params) {
	if(params.length == 1) params = [...params[0]];
  let result = params.reduce((elem, acc) => acc += elem, 0);
  return parseInt(result);
};

const multiply = function(...params) {
  if(params.length == 1) params = [...params[0]];
  let result = params.reduce((elem, acc) => acc *= elem, 1);
  return parseInt(result);
};

const power = function(...params) {
	if(params.length == 1) params = [...params[0]];
  return params[0] ** params[1];
};

const factorial = function(...params) {
	let result = 1;
  for(let i = 2; i <= params[0]; i++){
    result *= i;
  }
  return result;
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
