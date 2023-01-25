import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseIDShoppingCart, ShoppingCart } from '../core/models/ShoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  @Output() carId: EventEmitter<ResponseIDShoppingCart> = new EventEmitter();
  @Output() addProductToCart: EventEmitter<string> = new EventEmitter();

  private cartIdSubject = new BehaviorSubject({});
  cartId$ = this.cartIdSubject.asObservable();

  private productSubject = new BehaviorSubject({});
  products$ = this.productSubject.asObservable();

  constructor() { }

  sharedCardId(item:ResponseIDShoppingCart) {
    this.cartIdSubject.next(item);
  }
  
  sharedProducts(item:ShoppingCart) {
    this.productSubject.next(item);
  }

}
