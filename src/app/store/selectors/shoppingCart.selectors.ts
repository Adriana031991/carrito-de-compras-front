import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState, shoppingCartReducer } from '../reducer/shoppin-cart.reducer';


const selectshoppingCart = createFeatureSelector<ShoppingCartState>('products');


const getShoppingCarts = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.carts
);

const getIdCart = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.idCart
);

const addedQuantity = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.addedQuantity
);

const updatedQuantity = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.updatedQuantity
);

const isLoading = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.isLoading
);

const shoppingCartError = createSelector(
    selectshoppingCart,
    (state: ShoppingCartState) => state.error
);

export const shoppingCartQuery = {
    getShoppingCarts,
    getIdCart,
    addedQuantity,
    updatedQuantity,
    isLoading,
    shoppingCartError
}