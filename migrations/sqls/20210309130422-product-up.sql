CREATE TABLE "product" (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL
);

-- INSERT INTO "product" (name, price) values ('Fluffy', '17.95');
-- INSERT INTO "product" (name, price) values ('Avalanche', '7.95');