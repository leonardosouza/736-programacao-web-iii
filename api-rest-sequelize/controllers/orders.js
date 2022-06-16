const conn = require("../infra/connection");
const Order = require("../dao/order")(conn);

exports.createOne = (req, res) => {
  try {
    Order.create(req.body, (err, id) => {
      if(err) {
        res.status(400).json({ message: err });
      } else {
        res.status(201).json({ order_id: id });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.findOne = (req, res) => {
  Order.findOne(req.params.id, (err, rows) => {
    if(err) {
      res.status(400).json({ message: err });
    } else {
      res.status(200).json(rows);
    }
  });
}
