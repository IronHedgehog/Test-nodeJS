const { Order } = require("../../models/shop");
const { createError } = require("../../helpers");

const addOrder = async (req, res) => {
  try {
    const { _id: owner } = req.user;
    const addOrder = await Order.create({
      ...req.body,
      owner,
    });
    res.status(201).json(addOrder);
  } catch (error) {
    throw createError(400);
  }
};

module.exports = addOrder;
