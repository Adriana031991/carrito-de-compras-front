import { createAction, props } from '@ngrx/store';
import { ResponseIDShoppingCart, ShoppingCart } from 'src/app/core/models/ShoppingCart.model';

export const loadShoppingCarts = createAction(
  '[ShoppingCart] Load ShoppingCarts'
);

export const loadShoppingCartsSuccess = createAction(
  '[ShoppingCart] Load ShoppingCarts Success',
  props<{ carts: ShoppingCart[] }>()
);

export const loadShoppingCartsFailure = createAction(
  '[ShoppingCart] Load ShoppingCarts Failure',
  props<{ error: any }>()
);

export const loadCreateShoppingCart = createAction(
  '[ShoppingCart] Load ShoppingCarts'
);

export const loadCreatedShoppingCartSuccess = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Success',
  props<{ idCart: ResponseIDShoppingCart }>()
);

export const loadCreatedShoppingCartFailure = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Failure',
  props<{ error: any }>()
);

export const loadAddProductToShoppingCart = createAction(
  '[ShoppingCart] Load ShoppingCarts'
);

export const loadAddProductToShoppingCartSuccess = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Success',
  props<{ addedQuantity: number }>()
);

export const loadAddProductToShoppingCartFailure = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Failure',
  props<{ error: any }>()
);

export const loadUpdateQuantityProductShoppingCart= createAction(
  '[ShoppingCart] Load ShoppingCarts'
);

export const loadUpdateQuantityProductShoppingCartSuccess = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Success',
  props<{ updatedQuantity: number }>()
);

export const loadUpdateQuantityProductShoppingCartFailure = createAction(
  '[ShoppingCart] Load Created ShoppingCarts Failure',
  props<{ error: any }>()
);
