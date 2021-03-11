import connection from '../database';

export type Order = {
  id?: number;
  user_id: number;
  order_complete?: boolean;
};

export type OrderLine = {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
};

export class OrderStore {
  async index(userId: number): Promise<Order[]> {
    try {
      const conn = await connection.connect();

      let sql = "SELECT * FROM orders";
      sql += " WHERE order_complete IS null";

      let result;

      if (userId === -1) {
        // All open orders
        result = await conn.query(sql);
      } else {
        // Open orders for a specific user
        console.log('Getting orders for user', userId);
        sql += " AND user_id = ($1)";
        result = await conn.query(sql, [userId]);
      }

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  async show(orderId: number): Promise<OrderLine[]> {
    // console.log('Getting order', orderId);
    try {
      let sql = "SELECT ol.quantity, p.name";
      sql += " FROM orderline AS ol";
      sql += " INNER JOIN product AS p";
      sql += " ON ol.product_id = p.id";
      sql += " WHERE ol.order_id = ($1)";

      const conn = await connection.connect();
      const result = await conn.query(sql, [orderId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find order ${orderId}. Error: ${err}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const sql = 'INSERT INTO orders (user_id) VALUES ($1) RETURNING *';
      const conn = await connection.connect();
      const result = await conn.query(sql, [o.user_id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order for user ${o.user_id}. Error: ${err}`);
    }
  }

  // Order Lines
  async createLine(line: OrderLine): Promise<Order> {
    try {
      const sql = 'INSERT INTO orderline (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *';
      const conn = await connection.connect();
      const result = await conn.query(sql, [line.order_id, line.product_id, line.quantity]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new line for order ${line.order_id}. Error: ${err}`);
    }
  }

}
