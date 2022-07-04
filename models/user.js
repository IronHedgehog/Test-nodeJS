const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: Number,
      required: [true, "Set phone for owner"],
    },
    address: {
      type: String,
      required: [true, "Set shop for product"],
    },

    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.number(),
  address: Joi.string(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const schemas = {
  joiRegisterSchema,
  joiLoginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
