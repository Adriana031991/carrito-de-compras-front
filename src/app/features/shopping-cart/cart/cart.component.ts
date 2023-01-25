import { Component, OnInit, OnDestroy } from '@angular/core';
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
  


  constructor(private shoopingCartService: ShoopingCartService, private sharedService: SharedDataService,) { 
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
      this.subscription = this.shoopingCartService.getCart(this.cartID).subscribe((cart: ShoppingCart) => {
        this.sharedService.sharedProducts(cart);
      })
      
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {

  }
  
}
