const { Product } = require("../../models/product");

const { createError } = require("../../helpers");

const updateByID = async (req, res) => {
  const { productId } = req.params;
  const updatedContact = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw createError(404);
  }
  res.json(updatedContact);
};

module.exports = updateByID;
