import { reducer, initialInvoiceState } from '../../store/reducer/invoice.reducer';

describe('Invoice Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialInvoiceState, action);

      expect(result).toBe(initialInvoiceState);
    });
  });
});
