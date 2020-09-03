// Import Express
const express = require("express");

// Express Initialize
const app = express();

// Body Parser to get request body
const bodyParser = require("body-parser");

// Body Parser MiddleWare
app.use(bodyParser.json());

// Start the APP at PORT 
const port = 8000;
app.listen(port, () => {
  console.log("listen port 8000");
});

// Route to get the data response
app.post("/getFizzBuzzData", (req, res) => {
  let isError = false;
  let error = null;
  let responseData = [];

  if (req.body.number) {
    if (typeof req.body.number == "number") {
      showSuccess(res, { isError, responseData });
    } else {
      isError = true;
      error = "Please Enter Numbers only value";
      showError(res, { isError, isError });
    }
  } else {
    (isError = true), (error = "Please Enter value");
    showError(res, { isError, error });
  }
});

// Helper function for Error
const showError = (res, errorResponse = {}) => {
  res.status(400).json(errorResponse);
};

// Helper function for Success response
const showSuccess = (res, successResponse = {}) => {
  res.status(200).json(successResponse);
};
