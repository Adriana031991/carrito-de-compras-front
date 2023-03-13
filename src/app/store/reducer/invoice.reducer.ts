import { Action, createReducer, on } from '@ngrx/store';
import { Invoice, ResponseCreateIdInvoice } from 'src/app/core/models/invoice.model';
import * as actions from '../actions/invoice.actions';



export interface InvoiceState {
  invoice: Invoice | null;
  invoices: Invoice[];
  idInvoice: ResponseCreateIdInvoice | null;
  isLoading: boolean;
  error: any,
}

export const initialInvoiceState: InvoiceState = {
  invoice: null,
  invoices: [],
  idInvoice: null,
  isLoading: false,
  error: null,

};

const _invoiceReducer = createReducer(
  initialInvoiceState,

  on(actions.loadInvoices, (state) => ({ ...state, isLoading: true })),

  on(actions.loadInvoicesSuccess, (state, { invoices }) => ({
      ...state,
      isLoading: false,
      invoices: [...invoices],
  })),

  on(actions.loadInvoicesFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadIdInvoice, (state) => ({ ...state, isLoading: true })),

  on(actions.loadIdInvoiceSuccess, (state, { idInvoice }) => ({
      ...state,
      isLoading: false,
      idInvoice,
  })),

  on(actions.loadInvoicesFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadCreateInvoice, (state) => ({ ...state, isLoading: true })),

  on(actions.loadCreateInvoiceSuccess, (state, { invoice }) => ({
      ...state,
      isLoading: false,
      invoice,
  })),

  on(actions.loadCreateInvoiceFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

);

export function invoiceReducer(state: InvoiceState | undefined, action: Action) {
  return _invoiceReducer(state, action);
}
