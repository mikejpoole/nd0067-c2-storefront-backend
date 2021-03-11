import { Order, OrderLine, OrderStore } from '../order';
import { validOrder, validOrderWithId, validOrderLine, validOrderLineWithEverything } from '../mocks/order';

const orderStore = new OrderStore();

describe("Order Model", () => {
  it('should have an index method', () => {
    expect(orderStore.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(orderStore.create).toBeDefined();
  });


  // This test will fail if the user was given an id of other than 1 (i.e. subsequent tests)
  it('create method should add a order', async () => {
    const result = await orderStore.create({
      user_id: validOrder.user_id
    });
    expect(result).toEqual(validOrderWithId);
  });


  // This test will fail if the user was given an id of other than 1 (i.e. subsequent tests)
  it('index method should return a list of orders', async () => {
    const result = await orderStore.index(1);
    expect(result[0].user_id).toEqual(validOrder.user_id);
  });


  // Orderlines
  it('should have a createLine method', () => {
    expect(orderStore.createLine).toBeDefined();
  });

  it('should have a show method', () => {
    expect(orderStore.show).toBeDefined();
  });

  it('createLine method should add a line', async () => {
    const result:OrderLine = await orderStore.createLine(validOrderLine);
    expect(result.order_id).toEqual(validOrderLine.order_id);
  });

  it('show method should return the correct order', async () => {
    const result = await orderStore.show(1);
    expect(result[0].name).toEqual(validOrderLineWithEverything.name);
  });
});