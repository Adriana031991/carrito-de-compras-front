import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductsComponent } from './card-products/card-products.component';
import { TableProductsComponent } from './table-products/table-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cards', component: CardProductsComponent },
      { path: 'table', component: TableProductsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
