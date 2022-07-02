const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { createError } = require("../../helpers");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log("email,password", email, password);
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const avatarUrl = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    avatarUrl,
    password: hashPassword,
  });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarUrl,
    },
  });
};

module.exports = signup;
