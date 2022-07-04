const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { products: ctrl } = require("../../controllers");

const { validation, isValidId, auth, upload } = require("../../middlewares");

const { schemas } = require("../../models/product");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/withOwner", auth, ctrlWrapper(ctrl.getAllWithOwner));

router.get("/favorite", auth, ctrlWrapper(ctrl.onlyFavorite));

router.get("/:productId", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  upload.single("image"),
  validation(schemas.addProduct),
  ctrlWrapper(ctrl.add)
);

router.post(
  "/withOwner",
  auth,
  validation(schemas.addProduct),
  ctrlWrapper(ctrl.addWithOwner)
);

router.delete("/:productId", auth, isValidId, ctrlWrapper(ctrl.removeById));

router.put(
  "/:productId",
  auth,
  isValidId,
  validation(schemas.addProduct),
  ctrlWrapper(ctrl.updateByID)
);

router.patch(
  "/:productId/updateProduct",
  auth,
  isValidId,
  validation(schemas.favoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
