const conn = require("../infra/connection");
const Customer = require("../models/customer");

// exports.createOne = (req, res) => {
//   Customer.create(req.body, (id, err) => {
//     if(err) {
//       res.status(400).send({ msg: err });
//     } else {
//       res.status(201).send({ id, ...req.body });
//     }
//   });
// };

exports.getAll = (req, res) => {
  Customer.find((err, customers) => {
    console.log(customers);
    if(err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(200).send(customers);
    }
  });
};

exports.getOne = (req, res) => {
  Customer.find({ _id: req.params.id } , (err, customers) => {
    if(err) {
      res.status(400).send({ msg: err });
    } else if(customers.length) {
      res.status(200).send(customers[0]);
    } else {
      res.status(404).send({ msg: `customer not found` });
    }
  }); 
};

// exports.changeAllData = (req, res) => {
//   const data = { id: req.params.id, ...req.body };

//   Customer.updateComplete(data, (err) => {
//     if (err) {
//       res.status(400).send({ msg: err });
//     } else {
//       res.status(204).end();
//     }
//   });
// };

// exports.changeOneData = (req, res) => {
//   Customer.updatePartial(req.params.id, req.body, (err) => {
//     if (err) {
//       res.status(400).send({ msg: err });
//     } else {
//       res.status(204).end();
//     }
//   });
// };

// exports.removeOne = (req, res) => {
//   Customer.removeOne(req.params.id, (err) => {
//     if (err) {
//       res.status(400).send({ msg: err });
//     } else {
//       res.status(204).end();
//     }
//   });
// };
