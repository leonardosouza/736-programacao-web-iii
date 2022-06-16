const Product = require("../models/product");
const ULID = require("ulid");

exports.createOne = (req, res) => {
  const data = { id: ULID.ulid(), ...req.body };

  Product
    .create(data)
    .then(() => res.status(201).json(data))
    .catch((err) =>res.status(400).json({ message: err.message }));
};

exports.findAll = (req, res) => {
  Product
    .findAll()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product
    .findAll({ where: { id }})
    .then((product) => res.status(200).json(product[0]))
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.updateOne = (req, res) => {
  const id = req.params.id;

  Product
    .update(req.body, { where: { id } })
    .then((product) => res.status(205).json(product[0]))
    .catch((err) => res.status(400).json({ message: err.message }));
}

exports.removeOne = (req, res) => {
  const id = req.params.id;

  Product
    .destroy({ where: { id }})
    .then(() => res.status(204).json())
    .catch((err) => res.status(400).json({ message: err.message }));
}


