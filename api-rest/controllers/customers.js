const conn = require("../infra/connection");
const Customer = require("../dao/customer")(conn);
const { validationResult } = require("express-validator");

conn.on('trace', (...args) => {
  console.log(args);
});

/*exports.validate = (req, res, next) => {
  let errors = 0;

  Object.entries(req.body).forEach((field) => {
    const value = field[1];
    if(value.length === 0) {
      errors++;
    }
  });

  if(errors) {
    res.status(400).send({ msg: "Fields empty!" });
  } else {
    next();
  }  
};*/


exports.createOne = (req, res) => {
  const { errors } = validationResult(req);
  if(errors.length) {
    return res.status(400).send({ msg: errors });
  }

  Customer.create(req.body, (id, err) => {
    if(err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(201).send({ id, ...req.body });
    }
  });
};

exports.getAll = (req, res) => {
  Customer.findAll((err, customers) => {
    if(err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(200).send(customers);
    }
  });
};

exports.getOne = (req, res) => {
  Customer.findOne(req.params.id, (err, customers) => {
    if(err) {
      res.status(400).send({ msg: err });
    } else if(customers.length) {
      res.status(200).send(customers[0]);
    } else {
      res.status(404).send({ msg: `customer not found` });
    }
  }); 
};

exports.changeAllData = (req, res) => {
  const data = { id: req.params.id, ...req.body };

  Customer.updateComplete(data, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};

exports.changeOneData = (req, res) => {
  Customer.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};

exports.removeOne = (req, res) => {
  Customer.removeOne(req.params.id, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};
