import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { UiModule } from 'src/app/shared/ui.module';
import { TableCartComponent } from './cart/table-cart/table-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    TableCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    UiModule
  ]
})
export class ShoppingCartModule { }
