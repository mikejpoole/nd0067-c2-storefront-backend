CREATE TABLE "orderline" (
    id SERIAL NOT NULL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES product(id),
    quantity INTEGER
);

-- INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 1, 1);
-- INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 2, 5);
-- INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 3, 10);