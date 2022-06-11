// Importing Modules
const app = require("express")();
const { ENV } = require("dotenv").config().parsed;

// Middlewares Config (All Routes)
if(ENV == "dev") {
  const cors = require("cors");
  app.use(cors());
}

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Routes
const customers = require("../routes/customers");
app.use("/customers", customers);

const products = require("../routes/products");
app.use("/products", products);

const orders = require("../routes/orders");
app.use("/orders", orders);

// App Listening
app.listen(5000, () => console.log("Server running at 5000"));
