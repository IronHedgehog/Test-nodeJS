const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { createError } = require("../../helpers");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const avatarUrl = gravatar.url(email);
  const payload = {
    id: email,
  };
  const token = jwt.sign(payload, SECRET_KEY);
  const newUser = await User.create({
    ...req.body,
    token,
    avatarUrl,
    password: hashPassword,
  });
  res.status(201).json({
    token,
    user: {
      email: newUser.email,
      name: newUser.name,
      avatarUrl,
    },
  });
};

module.exports = signup;
