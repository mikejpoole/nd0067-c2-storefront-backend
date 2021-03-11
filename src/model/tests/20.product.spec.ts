import { ProductStore } from '../product';
import { validProduct, validProductWithID } from '../mocks/product';

const productStore = new ProductStore();

describe("product Model", () => {
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  // it('should have a update method', () => {
  //   expect(productStore.update).toBeDefined();
  // });

  it('should have a delete method', () => {
    expect(productStore.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await productStore.create({
      name: validProduct.name,
      price: validProduct.price
    });
    expect(result.name).toEqual(validProduct.name);
  });

  it('index method should return a list of products', async () => {
    const result = await productStore.index();
    expect(result[0].name).toEqual(validProduct.name);
  });

  it('show method should return the correct product', async () => {
    const result = await productStore.show(1);
    expect(result.name).toEqual(validProduct.name);
  });

  // Should not be able to delete items because of foreign key constraint
  // it('delete method should remove the product', async () => {
  //   productStore.delete(1);
  //   const result = await productStore.index();
  //   expect(result).toEqual(undefined);
  // });
});