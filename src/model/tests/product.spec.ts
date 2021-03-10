import { ProductStore } from '../product';
import { validProduct } from '../mocks/product';

const productStore = new ProductStore();

describe("product Model", () => {
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await productStore.create({
      name: validProduct.name,
      price: validProduct.price
    });
    expect(result).toEqual(validProduct);
  });

  it('index method should return a list of products', async () => {
    const result = await productStore.index();
    expect(result).toEqual([validProduct]);
  });

  it('show method should return the correct product', async () => {
    const result = await productStore.show(1);
    expect(result).toEqual(validProduct);
  });

  it('delete method should remove the product', async () => {
    productStore.delete(1);
    const result = await productStore.index();

    expect(result).toEqual([]);
  });
});