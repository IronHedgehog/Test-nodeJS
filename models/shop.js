const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp =
  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,100})$/i;

const userNameRegExp = /^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9.]{2,12}$/;
const orderSchema = Schema(
  {
    username: {
      type: String,
      match: userNameRegExp,
      required: [true, "Set name for owner"],
    },
    email: {
      type: String,
      match: emailRegExp,
      required: [true, "Set email for owner"],
    },
    cart: {
      type: Array,
      required: [true, "no order"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const addOrder = Joi.object({
  username: Joi.string().pattern(userNameRegExp).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  cart: Joi.array().items(Joi.object()),
});

const schemas = {
  addOrder,
};

const Order = model("order", orderSchema);

module.exports = {
  Order,
  schemas,
};
