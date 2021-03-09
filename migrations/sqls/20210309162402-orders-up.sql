CREATE TABLE "orders" (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    order_complete BOOLEAN
);