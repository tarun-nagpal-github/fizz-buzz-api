/**
 * Program to return the FizzBuzz data based on value
 * @param {number} value
 */
export const getFizzBuzz = (value = 0) => {
  var output = [];

  for (var i = 1; i <= value; i++) {
    if (i % 15 == 0) output.push('FizzBuzz');
    else if (i % 3 == 0) output.push('Fizz');
    else if (i % 5 == 0) output.push('Buzz');
    else output.push(i);
  }
  return output;
};