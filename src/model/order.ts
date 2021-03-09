import connection from '../database';

export type Order = {
  id?: number;
  user_id: number;
  order_complete?: boolean;
};

export class OrderStore {
  async show(userId: number): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = ($1)';
      const conn = await connection.connect();
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find orders for user ${userId}. Error: ${err}`);
    }
  }

  // async create(o: Order): Promise<Order> {
  //   try {
  //     const sql = 'INSERT INTO orders (user_id) VALUES ($1) RETURNING *';
  //     const conn = await connection.connect();
  //     const result = await conn.query(sql, [o.user_id]);
  //     const order = result.rows[0];
  //     conn.release();
  //     return order;
  //   } catch (err) {
  //     throw new Error(`Could not add new order for user ${o.user_id}. Error: ${err}`);
  //   }
  // }

}
