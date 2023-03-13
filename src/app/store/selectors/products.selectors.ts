import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducer/products.reducer';

const selectProduct = createFeatureSelector<ProductsState>('products');


const getProducts = createSelector(
    selectProduct,
    (state: ProductsState) => state.productsPaginated
);

const product = createSelector(
    selectProduct,
    (state: ProductsState) => state.product
);

const isLoading = createSelector(
    selectProduct,
    (state: ProductsState) => state.isLoading
);

const messageDeleted = createSelector(
    selectProduct,
    (state: ProductsState) => state.message
);

const productError = createSelector(
    selectProduct,
    (state: ProductsState) => state.error
);

export const ProductsQuery = {
    getProducts,
    product,
    isLoading,
    messageDeleted,
    productError
}