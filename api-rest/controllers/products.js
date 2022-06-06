const conn = require("../infra/connection");
const Product = require("../dao/product")(conn);

exports.createOne = (req, res) => {
  Product.create(req.body, (id, err) => {
    if(err) {
      res.status(400).json({ message: err });
    } else {
      res.status(201).json({ id, ...req.body });
    }
  });
};


