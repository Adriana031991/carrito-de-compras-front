import { Action, createReducer, on } from '@ngrx/store';
import { ResponseIDShoppingCart, ShoppingCart } from 'src/app/core/models/ShoppingCart.model';
import * as actions from '../actions/shopping-cart.actions';


export interface ShoppingCartState {
  updatedQuantity: number | null,
  addedQuantity: number | null,
  idCart: ResponseIDShoppingCart | null,
  carts: ShoppingCart[] ,
  isLoading:boolean,
  error: any
}

export const initialShoppingCartState: ShoppingCartState = {
  updatedQuantity: null,
  addedQuantity: null,
  idCart: null,
  carts: [] ,
  isLoading: false,
  error: null,
};

const _shoppingCartReducer = createReducer(
  initialShoppingCartState,

  on(actions.loadShoppingCarts, (state) => ({ ...state, isLoading: true })),

  on(actions.loadShoppingCartsSuccess, (state, { carts }) => ({
      ...state,
      isLoading: false,
      carts: [...carts],
  })),

  on(actions.loadShoppingCartsFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadCreateShoppingCart, (state) => ({ ...state, isLoading: true })),

  on(actions.loadCreatedShoppingCartSuccess, (state, { idCart }) => ({
      ...state,
      isLoading: false,
      idCart
  })),

  on(actions.loadCreatedShoppingCartFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadAddProductToShoppingCart, (state) => ({ ...state, isLoading: true })),

  on(actions.loadAddProductToShoppingCartSuccess, (state, { addedQuantity }) => ({
      ...state,
      isLoading: false,
      addedQuantity
  })),

  on(actions.loadAddProductToShoppingCartFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadUpdateQuantityProductShoppingCart, (state) => ({ ...state, isLoading: true })),

  on(actions.loadUpdateQuantityProductShoppingCartSuccess, (state, { updatedQuantity }) => ({
      ...state,
      isLoading: false,
      updatedQuantity
  })),

  on(actions.loadUpdateQuantityProductShoppingCartFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

);

export function shoppingCartReducer(state: ShoppingCartState | undefined, action: Action) {
  return _shoppingCartReducer(state, action);
}