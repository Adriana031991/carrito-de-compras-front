import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer/index';


export interface AppState {
   invoices: reducers.InvoiceState,
   products: reducers.ProductsState, 
   shoppingCart: reducers.ShoppingCartState
}



export const appReducers: ActionReducerMap<AppState> = {
   invoices: reducers.invoiceReducer,
   products: reducers.productsReducer,
   shoppingCart: reducers.shoppingCartReducer,
}