// Import Express
import express from 'express';
// Body Parser to get request body
import  bodyParser from 'body-parser';

// Import helper functions
import { getFizzBuzz } from './helperFunctions.js';

// Express Initialize
const app = express();

// dotenv

// Body Parser MiddleWare
app.use(bodyParser.json());

// Start the APP at PORT
const port = 8000;
app.listen(port, () => {
  console.log('listen port 8000');
});

app.use((req, res, next) => {
  res.error = (response, status = 400) => {
    res.status(status).json({  status: 'error', data: response });
  };

  res.api = (response, status = 200) => {
    res.status(status).json({ status: 'ok', data: response});
  };

  next();
});

app.post('/getFizzBuzzData', (req, res) => {
  const { count } = req.body;

  if (!count) {
    return res.error({ error: 'Please pass the parameter named count (In Request Body).' });
  }

  if (typeof count !== 'number') {
    return res.error({ error: 'Please Enter Numbers only value' });
  }

  const responseData = getFizzBuzz(count);
  return res.api(responseData);
});