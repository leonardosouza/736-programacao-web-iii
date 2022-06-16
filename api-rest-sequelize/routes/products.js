const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");

// Create
router.post("/", productsCtrl.createOne);

// Retrieve
router.get("/", productsCtrl.findAll);

router.get("/:id", productsCtrl.findOne);

// Update
router.put("/:id", productsCtrl.updateOne);

// Delete
router.delete("/:id", productsCtrl.removeOne);


module.exports = router;
