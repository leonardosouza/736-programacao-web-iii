const conn = require("../infra/connection");
const Customer = require("../dao/customer")(conn);

exports.createOne = (req, res) => {
  Customer.create(req.body, (id, err) => {
    if(err) {
      res.status(400).send({ msg: err }); // TODO: 409
    } else {
      res.status(201).send({ id });
    }
  });
};

exports.getAll = (req, res) => {

  Customer.findAll();

  res.status(200).send({ message: "Getting customers..." });
};

exports.getOne = (req, res) => {
  console.log(req.params);
  
  Customer.findOne(req.params.id);
  
  res.status(200).send({ message: `Getting customer... ${req.params.id}` });
};

exports.changeAllData = (req, res) => {
  console.log(req.body);
  console.log(req.params);

  Customer.updateComplete(req.params.id, req.body);


  res.status(205).send({ message: `Updating customer... ${req.params.id}` });
};

exports.changeOneData = (req, res) => {
  console.log(req.body);
  console.log(req.params);

  Customer.updatePartial(req.params.id, req.body);

  res.status(206).send({ message: `Updating customer... ${req.params.id}` });
};

exports.removeOne = (req, res) => {
  console.log(req.params);

  Customer.removeOne(req.params.id);

  res.status(204).send({ message: `Deleting customer... ${req.params.id}` });
};


