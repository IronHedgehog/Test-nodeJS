const current = async (req, res) => {
  const { email, name, address, phone } = req.user;
  res.status(200).json({ email, name, address, phone });
};

module.exports = current;
