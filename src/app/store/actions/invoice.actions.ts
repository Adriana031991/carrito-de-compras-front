import { createAction, props } from '@ngrx/store';
import { Invoice, ResponseCreateIdInvoice } from 'src/app/core/models/invoice.model';

export const loadInvoices = createAction(
  '[Invoice] Load Invoices'
);

export const loadInvoicesSuccess = createAction(
  '[Invoice] Load Invoices Success',
  props<{ invoices: Invoice[] }>()
);

export const loadInvoicesFailure = createAction(
  '[Invoice] Load Invoices Failure',
  props<{ error: any }>()
);

export const loadIdInvoice = createAction(
  '[Invoice] Load Id Invoice'
);

export const loadIdInvoiceSuccess = createAction(
  '[Invoice] Load Id Invoice Success',
  props<{ idInvoice: ResponseCreateIdInvoice }>()
);

export const loadIdInvoiceFailure = createAction(
  '[Invoice] Load Id Invoice Failure',
  props<{ error: any }>()
);

export const loadCreateInvoice = createAction(
  '[Invoice] Load Create Invoice'
);

export const loadCreateInvoiceSuccess = createAction(
  '[Invoice] Load Create Invoice Success',
  props<{ invoice: Invoice  }>()
);

export const loadCreateInvoiceFailure = createAction(
  '[Invoice] Load Create Invoice Failure',
  props<{ error: any }>()
);
