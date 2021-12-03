// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const router = require('../routes');


// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
});

// Categories have many Products
Category.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
