const { Product } = require("../../models/product");

const addWithOwner = async (req, res) => {

  const { _id: owner } = req.user;
  const addedProduct = await Product.create({ ...req.body, owner: owner });
  res.status(201).json(addedProduct);
};

module.exports = addWithOwner;
