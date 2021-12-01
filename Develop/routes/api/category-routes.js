const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then(categoryData => 
    res.status(200).json(categoryData))
    .catch(err => 
      res.status(500).json(err))
  // try {
  //   const categoryData = await Category.findAll();
  //   res.status(200).json(categoryData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});
// find one category by its `id` value
// be sure to include its associated Products
// router.get('/:id', async (req, res) => {
//   try {
//     const categoryData = await Category.findByPk(req.params.id, {
//       include: [{model: products, through: Tag, as:
//       'category_ecommerce'}]
//     })
//   }
// });

// if (!categoryData) {
//   res.status(404).json({ message: 'No category found with this id!'})
// }


// // create a new category
// router.post('/', async (req, res) => {
//    try {
//      const catagoryData = await Category.create(req.body);
//      res.status(200).json(categoryData);
//    } catch (err) {
//      res.status(400).json(err);
//    }
// });

// // update a category by its `id` value
// router.put('/:id', (req, res) => {

// });

// // delete a category by its `id` value
// router.delete('/:id', async (req, res) => {
// try {
//   const categoryData = await Category.destroy({
//     where: {
//       id: req.params.id
//     }
//   });

//   if (!categoryData) {
//     res.status(404).json({ message: "No category found with this id!"});
//     return;
//   }

//   res.status(200).json(categoryData);
// } catch (err) {
//   res.status(500).json(err);
// }
// });

module.exports = router;
