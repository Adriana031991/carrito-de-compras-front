import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/products.model';
import { ResponseIDShoppingCart } from 'src/app/core/models/ShoppingCart.model';
import { ProductsService } from 'src/app/core/services/products.service';
import { ShoopingCartService } from 'src/app/core/services/shooping-cart.service';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { ProductsPaginated, Content } from '../../../core/models/ProductsPaginated';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit, OnDestroy {

  listProducts: ProductsPaginated[] = [];
  products!: any;
  pageIndex: any;
  pageSize: any;
  totalElements: any;

  subscription!: Subscription;
  subscriptionSharedService!: Subscription;
  cartID!:ResponseIDShoppingCart;
  cartID2!:string | null;

  constructor(
    private modal: NzModalService,
    private service: ProductsService, 
    private sharedService: SharedDataService, 
    private shoopingCartService:ShoopingCartService) {

    this.cartID2 = localStorage.getItem('idCart');

     }


  ngOnInit(): void {
    this.subscription = this.service.getListsProducts(this.pageIndex='', this.pageSize= '').subscribe(products => {
      this.listProducts = products;

      const arr = Object.entries(this.listProducts);
      arr.forEach(product => {
        if (product[0] === "content") {
          product.forEach((k, v) => {
            this.products = k;
          })
        }
        if (product[0]==="numberOfElements") {
          product.forEach((k, v) => {
            this.totalElements = k
          })
        }
        if (product[0]==="size") {
          product.forEach((k, v) => {
            this.pageSize = k
           })
        }
        if (product[0]==="number") {
          product.forEach((k, v) => {
            this.pageIndex = k
            })
        }
      });
    });


  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionSharedService) {
      this.subscriptionSharedService.unsubscribe();
    }
  }

  addToCart(product:Content){
    const cartId = this.cartID2;
    const productId = product.id;
    if (product.quantity === 0 || product.quantity === null ) {
      this.modal.create({
        nzTitle: 'Producto no tiene cantidad',
        nzContent: `Producto con cantidad en ${product.quantity}`,
        nzClosable: false,
        nzOnOk: () => new Promise(resolve => setTimeout(resolve, 100))
      });
    }
    if (cartId != null) {
      this.shoopingCartService.addProductToShoppingCart(cartId,productId).subscribe(
        {
          next: (data: any) => {
            this.modal.success({
              nzTitle: 'Se ha añadido el producto',
              nzContent: `Se ha añadido correctamente al carrito el producto: ${data.name}`,
              nzMaskClosable: false,
              nzFooter: null,
              nzWidth: "80%",
              nzStyle: { top: "20px" },
            })
            this.sharedService.addProductToCart.emit( data );
          },
          
          error: (err: HttpErrorResponse) => {
            this.modal.error({
              nzTitle: 'Producto no agregado ',
              nzContent: `No se ha podido agregar el producto al carrito`,
              nzMaskClosable: false,
              nzFooter: null,
              nzWidth: "80%",
              nzStyle: { top: "20px" },
            })
          }
        });
      //   result=>{
      //   let response = (result === 1) ? 'addProductOk': 'notProductAdded';
      //   this.sharedService.addProductToCart.emit( response )
      // })
      
    }
  }

}
