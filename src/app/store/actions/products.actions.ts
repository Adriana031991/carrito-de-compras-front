import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/products.model';
import { ProductsPaginated } from 'src/app/core/models/ProductsPaginated.model';

export const loadProducts = createAction(
  '[Products] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: ProductsPaginated[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

export const loadCreateProduct = createAction(
  '[Products] Load create Product'
);

export const loadCreateProductSuccess = createAction(
  '[Products] Load create Product Success',
  props<{ product: Product }>()
);

export const loadCreateProductFailure = createAction(
  '[Products] Load create Product Failure',
  props<{ error: any }>()
);

export const loadProductByName = createAction(
  '[Products] Load Product By Name'
);

export const loadProductByNameSuccess = createAction(
  '[Products] Load Product By Name Success',
  props<{ product: Product }>()
);

export const loadProductByNameFailure = createAction(
  '[Products] Load Product By Name Failure',
  props<{ error: any }>()
);

export const loadProductById = createAction(
  '[Products] Load Product By Id'
);

export const loadProductByIdSuccess = createAction(
  '[Products] Load Product By Id Success',
  props<{ product: Product }>()
);

export const loadProductByIdFailure = createAction(
  '[Products] Load Product By Id Failure',
  props<{ error: any }>()
);

export const loadProductUpdate = createAction(
  '[Products] Load Product Update'
);

export const loadProductUpdateSuccess = createAction(
  '[Products] Load Product Update Success',
  props<{ product: Product }>()
);

export const loadProductUpdateFailure = createAction(
  '[Products] Load Product Update Failure',
  props<{ error: any }>()
);

export const loadProductDelete = createAction(
  '[Products] Load Product Delete'
);

export const loadProductDeleteSuccess = createAction(
  '[Products] Load Product Delete Success',
  props<{ message: string }>()
);

export const loadProductDeleteFailure = createAction(
  '[Products] Load Product Delete Failure',
  props<{ error: any }>()
);
