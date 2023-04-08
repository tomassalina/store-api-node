const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');
const config = require('./config');

const app = express();
const port = config.port;
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

// Strategies
require('./utils/auth');

// routes
app.get('/', (req, res) => {
  res.send('Platzi Store API');
});

routerApi(app);

app.get('/api-key', checkApiKey, (req, res) => {
  res.json({ apiKey: req.headers['api'] });
});

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
