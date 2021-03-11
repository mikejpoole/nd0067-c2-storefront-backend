import { UserStore } from '../user';
import { validUser, validUserWithId } from '../mocks/user';

const userStore = new UserStore();

describe("User Model", () => {
  it('should have an index method', () => {
    expect(userStore.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(userStore.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(userStore.authenticate).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(userStore.delete).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await userStore.create({
      firstname: validUser.firstname,
      lastname: validUser.lastname
    });
    expect(result.firstname).toEqual(validUser.firstname);
  });

  it('index method should return a list of users', async () => {
    const result = await userStore.index();
    expect(result[0].firstname).toEqual(validUser.firstname);
  });

  // Don't test this normally because need the user for the order test
  // it('delete method should remove the user', async () => {
  //   userStore.delete(1);
  //   const result = await userStore.delete(1);
  //   expect(result).toEqual(undefined);
  // });
});