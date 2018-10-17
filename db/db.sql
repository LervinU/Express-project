CREATE DATABASE IF NOT EXISTS storage_manager;

CREATE TABLE products (
	id INT(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    quantity INT(11) NOT NULL,
    product_value FLOAT(11) NOT NULL,
    description VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE products MODIFY COLUMN product_value FLOAT;

INSERT INTO products value
(2,'Pencil', 200, 0.25, 'Just a pencil'),
(3,'Eraser', 150, 0.10, 'Just an ereaser');

DELETE FROM products WHERE id = 3;
SELECT * FROM products;

DESCRIBE products;

