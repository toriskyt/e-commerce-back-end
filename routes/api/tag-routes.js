const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll().then(tagData => 
    res.status(200).json(tagData))
    .catch(err => 
      res.status(500).json(err))
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
      try {
        const tagData = await Tag.findByPk(req.params.id, {
          include: [{model: products, through: Tag, as:
          'tag_ecommerce'}]
        }); 
        console.log(tagData)
      }
      catch(err) {
        res.json(err)
      }
      // if (!tagData) {
      //   res.status(404).json({message: "No tag found with this id!"})
      // }
});
 

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
 });

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(req.body);
  res.status(200).json(tagData);
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
     where: {
       id: req.params.id
     } 
    })
  }
  catch (err) {
    res.json(err);
  }
});

module.exports = router;
