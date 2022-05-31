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

  findAll() {

  }

  findOne(id) {

  }

  updateComplete(id, data) {

  }
  
  updatePartial(id, data) {
    
  }

  removeOne(id) {

  }

}

module.exports = (conn) => {
  return new Customer(conn);
}



