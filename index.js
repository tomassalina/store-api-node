const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 4000;
const whitelist = ['http://localhost:5500', 'https://myapp.co'];

// middlewares
app.use(express.json());

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

// routes
app.get('/', (req, res) => {
  res.send('Platzi Store API');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
