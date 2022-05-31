CREATE TABLE customers (
  id TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE PRIMARY KEY,
  birthday TEXT NOT NULL,
  cpf INTEGER NOT NULL,
  typeAccount TEXT NOT NULL
);

INSERT INTO customers (id, name, email, birthday, cpf, typeAccount) VALUES('ABC123', 'Leonardo Souza', 'leonardo.souza@letscode.com', '08/10/1982', '30356278490', 'PF');

SELECT * FROM customers;
