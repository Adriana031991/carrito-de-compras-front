import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/products.model';
import { ProductsPaginated } from 'src/app/core/models/ProductsPaginated.model';
import * as actions from '../actions/products.actions';


export interface ProductsState {
  productsPaginated:ProductsPaginated[] | null;
  product: Product | null;
  isLoading: boolean;
  error: any;
  message: string;
  
}

export const initialProductsState: ProductsState = {
  productsPaginated:null,
  product: null,
  isLoading: false,
  error: null,
  message: ''

};

const _productsReducer = createReducer(
  initialProductsState,

  on(actions.loadProducts, (state) => ({ ...state, isLoading: true })),

  on(actions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      isLoading: false,
      productsPaginated: [...products],
  })),

  on(actions.loadProductsFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadCreateProduct, (state) => ({ ...state, isLoading: true })),

  on(actions.loadCreateProductSuccess, (state, { product }) => ({
      ...state,
      isLoading: false,
      product,
  })),

  on(actions.loadCreateProductFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadProductById, (state) => ({ ...state, isLoading: true })),

  on(actions.loadProductByIdSuccess, (state, { product }) => ({
      ...state,
      isLoading: false,
      product,
  })),

  on(actions.loadProductByIdFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadProductByName, (state) => ({ ...state, isLoading: true })),

  on(actions.loadProductByNameSuccess, (state, { product }) => ({
      ...state,
      isLoading: false,
      product,
  })),

  on(actions.loadProductByNameFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadProductDelete, (state) => ({ ...state, isLoading: true })),

  on(actions.loadProductDeleteSuccess, (state, { message }) => ({
      ...state,
      isLoading: false,
      message,
  })),

  on(actions.loadProductDeleteFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),

  on(actions.loadProductUpdate, (state) => ({ ...state, isLoading: true })),

  on(actions.loadProductUpdateSuccess, (state, { product }) => ({
      ...state,
      isLoading: false,
      product,
  })),

  on(actions.loadProductUpdateFailure, (state, { error }) => ({
      ...state,
      isLoading: false,
      error: { ...error },
  })),


);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return _productsReducer(state, action);
}