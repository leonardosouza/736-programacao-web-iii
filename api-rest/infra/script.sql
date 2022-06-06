DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE PRIMARY KEY,
  birthday TEXT NOT NULL,
  cpf INTEGER NOT NULL,
  typeAccount TEXT NOT NULL
);

INSERT INTO customers (id, name, email, birthday, cpf, typeAccount) VALUES('ABC123', 'Leonardo Souza', 'leonardo.souza@letscode.com', '08/10/1982', '30356278490', 'PF');

SELECT * FROM customers;

/* ======== */

CREATE TABLE products (
	id TEXT UNIQUE NOT NULL,
	name TEXT NOT NULL UNIQUE PRIMARY KEY,
	price REAL NOT NULL,
	quantity INTEGER DEFAULT 0
);

INSERT INTO products (id, name, price, quantity) VALUES('ABC123', 'Celular', 1850.00, 25);

SELECT * FROM products;

/* ======== */

CREATE TABLE orders (
  id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  date_time TEXT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers (id)
    ON DELETE CASCADE 
    ON UPDATE NO ACTION,
  FOREIGN KEY (product_id) REFERENCES products (id)
    ON DELETE CASCADE 
    ON UPDATE NO ACTION
);

