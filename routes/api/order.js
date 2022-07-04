const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { order: ctrl } = require("../../controllers");

const { validation, auth } = require("../../middlewares");

const { schemas } = require("../../models/shop");

const router = express.Router();

router.post(
  "/addOrder",
  auth,
  validation(schemas.addOrder),
  ctrlWrapper(ctrl.addOrder)
);

router.get("/getHistoryOrders", auth, ctrlWrapper(ctrl.getAllOrders));

module.exports = router;
