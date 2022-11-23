const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 4001;

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
