
// Helper function for Error
 const showError = (res, errorResponse = {}) => {
    res.status(400).json(errorResponse);
  };
  
  // Helper function for Success response
 const showSuccess = (res, successResponse = {}) => {
    res.status(200).json(successResponse);
  };
  
  
  /**
   * Program to return the FizzBuzz data based on value
   * @param {number} value 
   */
  const getFizzBuzz = (value = 0) => {
    var output = [];
  
    for (var i = 1; i < value; i++) {
      if (i % 15 == 0) output.push("FizzBuzz");
      else if (i % 3 == 0) output.push("Fizz");
      else if (i % 5 == 0) output.push("Buzz");
      else output.push(i);
    }
    return output;
  };


  module.exports = { showError, showSuccess, getFizzBuzz}