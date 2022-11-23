const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;

  const products = [];

  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999')
    return res.status(404).json({
      message: 'not found',
    });

  res.status(200).json({
    id,
    name: 'Producto 2',
    price: 3000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
