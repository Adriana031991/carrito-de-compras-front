import { reducer, initialShoppingCartState } from './shoppin-cart.reducer';

describe('ShoppinCart Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialShoppingCartState, action);

      expect(result).toBe(initialShoppingCartState);
    });
  });
});
