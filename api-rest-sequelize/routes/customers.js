const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers");
const { body } = require("express-validator");

// Validation
const validation = [
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("cpf").notEmpty().isNumeric(),
  body("birthday").notEmpty(),
  body("typeAccount").notEmpty()
];

// Create a resource
router.post("/", validation, customersCtrl.createOne);

// Retrieve all resources
router.get("/", customersCtrl.getAll);

// Retrieve a resources
router.get("/:id", customersCtrl.getOne);

// Update a resource (complete)
router.put("/:id", customersCtrl.changeAllData);

// Update a resource (partial)
router.patch("/:id", customersCtrl.changeOneData);

// Delete a resource
router.delete("/:id", customersCtrl.removeOne);

module.exports = router;
