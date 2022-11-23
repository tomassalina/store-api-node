const faker = require('faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 20;

    const products = [];

    for (let i = 0; i < limit; i++) {
      products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
    }

    this.products = products;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  async create(data) {
    const newProduct = { id: faker.datatype.uuid(), ...data };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('product not found');

    const product = this.products[index];
    this.products[index] = { ...product, ...changes };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('product not found');
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
