CREATE TABLE "product" (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL
);

INSERT INTO "product" (name, price) values ('Fluffy', '17.95');