CREATE TABLE "orderline" (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES product(id),
    quantity INTEGER
);