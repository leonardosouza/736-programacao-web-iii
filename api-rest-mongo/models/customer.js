const mongoose = require("mongoose");

// Criar um Schema
const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String
});
// console.log(customerSchema);

// Criar um Model
const Customer = mongoose.model("Customer", customerSchema);
// console.log(Customer);

module.exports = Customer;
