import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CardProductsComponent } from './card-products/card-products.component';
import { TableProductsComponent } from './table-products/table-products.component';


@NgModule({
  declarations: [
    CardProductsComponent,
    TableProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
