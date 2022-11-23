const express = require('express');

const app = express();
const port = 4001;

const routerApi = require('./routes');

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
