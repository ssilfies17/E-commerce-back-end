const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      fields: ['id'],
      include: [{ model: Product }]
    });

    res.status(200).json(categoryData);

  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  };
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({message: "No category with this id."});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(200).json(newCategory);

  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  };
});

router.put('/:id', (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {id: req.params.id,}
    });

    res.status(200).json(updatedCategory);

  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
