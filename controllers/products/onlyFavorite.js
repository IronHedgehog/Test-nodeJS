const { Product } = require("../../models/product");

const { createError } = require("../../helpers");

const onlyFavorite = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const allFavorites = await Product.find(
    { favorite: true },
    "-createdAt -updatedAt",
    {
      skip,
      limit: Number(limit),
    }
  ).populate("owner", "email");
  if (!allFavorites) {
    throw createError(204, "no favorite contacts");
  }
  res.json(allFavorites);
};

module.exports = onlyFavorite;
