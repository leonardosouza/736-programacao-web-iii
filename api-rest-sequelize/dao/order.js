const ULID = require("ulid");
const { DateTime } = require("luxon");

class Order {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  create(data, callback) {
    const order_id = ULID.ulid();
    const { customer_id, products } = data;
    const date_time = DateTime.now().setZone('America/Sao_Paulo').toISO();
    
    const sql = `INSERT INTO orders (id, customer_id, product_id, date_time) VALUES (?, ?, ?, ?)`;

    if(products.length) {
      products.forEach((product) => {
        const { product_id } = product;
        this.dbConn.run(sql, [ order_id, customer_id, product_id, date_time ]);
      });

      callback.call(this, null, order_id);
    } else {
      throw new Error(`Failed! Without products!`);
    }
  }

  findOne(id, callback) {
    const sql = `SELECT 
                    orders.id AS order_id,
                    products.id AS product_id,
                    products.name,
                    products.price,
                    customers.id AS customer_id,
                    customers.cpf
                 FROM 
                    orders
                 INNER JOIN
                    products ON products.id = orders.product_id
                 INNER JOIN
                    customers ON customers.id = orders.customer_id
                 WHERE 
                    orders.id = ?`;
    this.dbConn.all(sql, [ id ], callback);
  }
}

module.exports = (conn) => {
  return new Order(conn);
}
