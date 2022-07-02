const { Schema, model } = require("mongoose");
const Joi = require("joi");

const categories = [
  "Pizza",
  "Sushi",
  "Salads",
  "strips",
  "drinks",
  "Backets",
  "Burgers",
  "favorites",
];

const shops = ["MAC", "KVC", "MFU", "PSU"];

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    price: {
      type: Number,
      required: [true, "Set price for product"],
    },
    shop: {
      type: String,
      enum: shops,
      required: [true, "Set shop for product"],
    },
    categories: {
      type: String,
      enum: categories,
      required: [true, "Set category for product"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    productInfo: {
      type: String,
      default: "You  description is here",
    },
    image: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const addProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  shop: Joi.string()
    .valid(...shops)
    .required(),
  categories: Joi.string()
    .valid(...categories)
    .required(),
  productInfo: Joi.string().required(),
  image: Joi.string(),
});

const updateProduct = Joi.object({
  image: Joi.string().required(),
  price: Joi.number().required(),
  name: Joi.string().required(),
  info: Joi.string().required(),
});

const favoriteSchema = {
  favorite: Joi.boolean().required(),
};

const schemas = {
  addProduct,
  updateProduct,
  favoriteSchema,
};

const Product = model("product", productSchema);

module.exports = {
  Product,
  schemas,
};
