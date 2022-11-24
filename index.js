const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 4001;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
