const ULID = require("ulid");

class Customer {
  constructor(conn) {
    this.conn = conn;
  }

  create(data, callback) {
    const { name, email, birthday, cpf, typeAccount } = data;
    const ulid = ULID.ulid();
    const sql = `INSERT INTO customers (id, name, email, birthday, cpf, typeAccount) VALUES('${ulid}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}');`;
    this.conn.run(sql, callback.bind(this, ulid));
  }

  findAll(callback) {
    const sql = `SELECT * FROM customers`;
    this.conn.all(sql, callback);
  }

  findOne(id, callback) {
    const sql = `SELECT * FROM customers WHERE id='${id}';`;
    this.conn.all(sql, callback);
  }

  updateComplete(data, callback) {
    const { id, name, email, birthday, cpf, typeAccount } = data;

    const sql = `UPDATE customers SET 
                    name = '${name}',
                    email = '${email}',
                    birthday = '${birthday}',
                    cpf = '${cpf}',
                    typeAccount = '${typeAccount}'
                 WHERE 
                    id = '${id}';`;

    this.conn.run(sql, callback);
  }
  
  updatePartial(id, data, callback) {
    const fields = [];
    
    for (const key in data) {
      fields.push(`${key}='${data[key]}'`);
    }
  
    const sql = `UPDATE customers SET 
                    ${fields}
                 WHERE 
                    id = '${id}';`;

    this.conn.run(sql, callback);
  }

  removeOne(id, callback) {
    const sql = `DELETE FROM customers WHERE id = '${id}'`;
    this.conn.run(sql, callback);
  }

}

module.exports = (conn) => {
  return new Customer(conn);
}



