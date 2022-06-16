const express = require("express");
const router = express.Router();
const ordersCtrl = require("../controllers/orders");

router.post("/", ordersCtrl.createOne);

router.get("/:id", ordersCtrl.findOne);

module.exports = router;
