const { Product } = require("../../models/product");

const getAllWithOwner = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Product.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");
  res.json(contacts);
};

module.exports = getAllWithOwner;
