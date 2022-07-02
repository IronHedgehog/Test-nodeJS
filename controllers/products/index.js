const getAll = require("./getAll");
const getAllWithOwner = require("./getAllWithOwner");
const getById = require("./getById");
const add = require("./add");
const addWithOwner = require("./addWithOwner");
const removeById = require("./removeById");
const updateByID = require("./updateById");
const updateFavorite = require("./updateFavorite");
const onlyFavorite = require("./onlyFavorite");

module.exports = {
  getAll,
  getAllWithOwner,
  getById,
  add,
  addWithOwner,
  removeById,
  updateByID,
  updateFavorite,
  onlyFavorite,
};
