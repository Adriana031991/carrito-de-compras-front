import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Subject, Subscription, takeUntil } from 'rxjs';
import { ShoopingCartService } from 'src/app/core/services/shooping-cart.service';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { ResponseIDShoppingCart, ShoppingCart } from '../../../core/models/ShoppingCart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  isVisible!:boolean;

  subscription!: Subscription;

  cartID!:string | null;
  


  constructor( 
    private modalService: NzModalService, 
    private shoopingCartService: ShoopingCartService, 
    private sharedService: SharedDataService,) { 
    this.cartID = localStorage.getItem('idCart');

  }
  
  
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    
    }

  }


  showModal(): void {
    this.isVisible = true;
    if (this.cartID != null) {
      this.subscription = this.shoopingCartService.getCart(this.cartID).subscribe(
        
        {
          next: (data: ShoppingCart) => {
            this.sharedService.sharedProducts(data);
          },
          
          error: (err: HttpErrorResponse) => {
            this.modalService.error({
              nzTitle: 'Producto no creado ',
              nzContent: `No se ha podido crear el producto`,
              nzMaskClosable: false,
              nzFooter: null,
              nzWidth: "80%",
              nzStyle: { top: "20px" },
            })
          }
        });
      //   (cart: ShoppingCart) => {
      //   this.sharedService.sharedProducts(cart);
      // })
      
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.modalService.closeAll();
  }
  
}
