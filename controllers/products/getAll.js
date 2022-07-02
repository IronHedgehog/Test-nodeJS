const { Product } = require("../../models/product");

const getAll = async (req, res) => {
  // const { page = 1, limit = 2 } = req.query;
  // const skip = (page - 1) * limit;
  const contacts = await Product.find({}, "-createdAt -updatedAt", {
    // skip,
    // limit: Number(limit),
  }).populate("owner", "email");
  res.json(contacts);
};

module.exports = getAll;
