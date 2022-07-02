const { Product } = require("../../models/product");
// const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");

const productsDir = path.join(__dirname, "../../", "public", "products");

const add = async (req, res) => {
  try {
    const { filename, path: filePath } = req.file;
    const newDir = path.join(productsDir, filename);
    await fs.rename(filePath, newDir);
    // const image = await Jimp.read(newDir);
    // image.resize(200, 200);
    // image.write(newDir);

    const productsURL = path.join("products", filename);


    const addedProduct = await Product.create({
      ...req.body,
      image: productsURL,
    });
    res.status(201).json(addedProduct);
    // const result = await User.findByIdAndUpdate({ productsURL }, { new: true });
    // res.json({
    //   avatarURL: result.avatarURL,
    // });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = add;
