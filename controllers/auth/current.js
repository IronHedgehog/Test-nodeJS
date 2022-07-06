const { User } = require("../../models/user");

const current = async (req, res) => {
  const { email: user } = req.user;
  const { email, name, address, phone } = await User.findOne({ user });
  res.status(200).json({ email, name, address, phone });
};

module.exports = current;
