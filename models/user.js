const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    name: {
      type: String,
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
    },
    address: {
      type: String,
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  address: Joi.string(),
  phone: Joi.number(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const joiPatchSchema = Joi.object({
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const schemas = {
  joiRegisterSchema,
  joiLoginSchema,
  joiPatchSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
