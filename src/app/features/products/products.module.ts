import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CardProductsComponent } from './card-products/card-products.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { UiModule } from 'src/app/shared/ui.module';
import { EditProductComponent } from './table-products/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './table-products/create-product/create-product.component';


@NgModule({
  declarations: [
    CardProductsComponent,
    TableProductsComponent,
    EditProductComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
