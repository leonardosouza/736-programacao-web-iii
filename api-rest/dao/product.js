const ULID = require("ulid");

class Product {
  constructor(conn) {
    this.dbConn = conn;
  }

  create(data, callback) {
     const { name, price, quantity } = data;
     const id = ULID.ulid();
     const sql = `INSERT INTO products (id, name, price, quantity) VALUES (?, ?, ?, ?);`;
     this.dbConn.run(sql, [ id, name, price, quantity ], callback.bind(this, id));
  }
}

module.exports = (conn) => {
  return new Product(conn);
};
