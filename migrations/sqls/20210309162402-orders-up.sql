CREATE TABLE "orders" (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    order_complete BOOLEAN
);