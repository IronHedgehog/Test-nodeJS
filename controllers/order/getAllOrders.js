const { Order } = require("../../models/shop");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  // const { page = 1, limit = 1 } = req.query;
  // const skip = (page - 1) * limit;
  const orders = await Order.find({ owner }, "-createdAt -updatedAt", {
    // skip,
    // limit: Number(limit),
  });
  res.json(orders);
};

module.exports = getAll;
