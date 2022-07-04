const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp =
  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,100})$/i;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userNameRegExp = /^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9.]{2,12}$/;
const orderSchema = Schema(
  {
    username: {
      type: String,
      match: userNameRegExp,
      required: [true, "Set name for owner"],
    },
    phone: {
      type: Number,
      match: phoneRegExp,
      required: [true, "Set phone for owner"],
    },
    address: {
      type: String,
      required: [true, "Set shop for product"],
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
  phone: Joi.number().required(),
  address: Joi.string().required(),
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
