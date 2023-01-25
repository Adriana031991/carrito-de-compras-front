// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlListsProducts: 'http://localhost:8080/products/paginated?page&size',
  urlProduct: 'http://localhost:8080/products',
  urlGetProductByName: 'http://localhost:8080/products/product-by-name',
  urlGetProductById: 'http://localhost:8080/products/product-by-id',
  urlUpdateProduct: 'http://localhost:8080/products/update',
  urlDeleteProduct: 'http://localhost:8080/products/delete',
  urlListShoppingCart: 'http://localhost:8080/shopping-car',
  urlShoppingCart: 'http://localhost:8080/shopping-car/get-cart-by-carId',
  urlCreateShoppingCart: 'http://localhost:8080/shopping-car/create-shopping-car',
  urlAddProductToShoppingCart: 'http://localhost:8080/shopping-car/add-product-to-car',
  urlUpdateQuantityProductShoppingCart: 'http://localhost:8080/shopping-car/update-quantity',
  urlInvoicesList:'http://localhost:8080/invoice',
  urlCreateIdInvoice:'http://localhost:8080/invoice/create-invoice',
  urlCreateInvoice:'http://localhost:8080/invoice/car',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
