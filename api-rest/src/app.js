// Importing Modules
const app = require("express")();

// Middlewares Config (All Routes)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Routes
const customers = require("../routes/customers");
app.use("/customers", customers);

const products = require("../routes/products");
app.use("/products", products);

// App Listening
app.listen(5000, () => console.log("Server running at 5000"));
