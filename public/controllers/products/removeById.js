const { Product } = require("../../models/product");

const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { productId } = req.params;
  const deletedContact = await Product.findByIdAndDelete(productId);
  if (!deletedContact) {
    throw createError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeById;
