import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoContentComponent } from './core/layout/no-content/no-content.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('.//core/layout/layout.module').then(m=> m.LayoutModule)
  },
  {
    path: 'products',
    loadChildren: () => import('.//features/products/products.module').then(m=> m.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('.//features/shopping-cart/shopping-cart.module').then(m=> m.ShoppingCartModule)
  },
  {
    path: '**',
    component: NoContentComponent
  },
  { path:'', redirectTo: '',pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
