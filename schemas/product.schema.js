const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(1);
const description = Joi.string().min(10).max(300);
const image = Joi.string().uri();

const getProductSchema = Joi.object({
  id: id.required(),
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({ name, price, description, image });

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
