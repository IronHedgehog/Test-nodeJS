const { Product } = require("../../models/product");

const { createError } = require("../../helpers");

const getById = async (req, res) => {
  const { productId } = req.params;
  const neededProduct = await Product.findById(
    productId,
    "-createdAt -updatedAt"
  );
  if (!neededProduct) {
    throw createError(404);
  }
  res.json(neededProduct);
};

module.exports = getById;
