import { reducer, initialProductsState } from '../../store/reducer/products.reducer';

describe('Products Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialProductsState, action);

      expect(result).toBe(initialProductsState);
    });
  });
});
