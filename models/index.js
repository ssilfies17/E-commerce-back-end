// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});


Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  }
});


Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  }
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};