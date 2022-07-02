const { Product } = require("../../models/product");

const { createError } = require("../../helpers");

const getById = async (req, res) => {
  const { productId } = req.params;
  const neededContact = await Product.findById(
    productId,
    "-createdAt -updatedAt"
  );
  if (!neededContact) {
    throw createError(404);
  }
  res.json(neededContact);
};

module.exports = getById;
