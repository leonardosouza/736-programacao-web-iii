const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");

// Create
router.post("/", productsCtrl.createOne);

// Retrieve
router.get("/", () => {});

router.get("/:id", () => {});

// Update
router.put("/:id", () => {});

// Delete
router.delete("/:id", () => {});


module.exports = router;
