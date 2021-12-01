// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const router = require('../routes');

router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/tag', tagRoutes);
router.use('/productTag', productTagRoutes);

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
