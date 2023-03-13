import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState } from '../reducer/invoice.reducer';

const selectInvoice = createFeatureSelector<InvoiceState>('invoice');


const getInvoice = createSelector(
    selectInvoice,
    (state: InvoiceState) => state.invoice
);

const getIdInvoice = createSelector(
    selectInvoice,
    (state: InvoiceState) => state.idInvoice
);

const getInvoices = createSelector(
    selectInvoice,
    (state: InvoiceState) => state.invoices
);

const isLoading = createSelector(
    selectInvoice,
    (state: InvoiceState) => state.isLoading
);

const invoiceError = createSelector(
    selectInvoice,
    (state: InvoiceState) => state.error
);

export const InvoiceQuery = {
    getInvoice,
    getIdInvoice,
    getInvoices,
    isLoading,
    invoiceError
}