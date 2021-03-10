CREATE TABLE "orderline" (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES product(id),
    quantity INTEGER
);

INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 1, 1);
-- INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 2, 5);
-- INSERT INTO "orderline" (order_id, product_id, quantity) values (1, 3, 10);