// Import Express
const express = require("express");

// Import helper functions
// import { getFizzBuzz, showSuccess, showError  } from "./helperFunctions.js";
const { getFizzBuzz, showSuccess, showError  } =  require("./helperFunctions");

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

  if (req.body.count) {
    if (typeof req.body.count == "number") {
      responseData = getFizzBuzz(req.body.count);
      showSuccess(res, { isError, responseData });
    } else {
      isError = true;
      error = "Please Enter Numbers only value";
      showError(res, { isError, isError });
    }
  } else {
    (isError = true), (error = "Please pass the parameter named count (In Request Body).");
    showError(res, { isError, error });
  }
});

