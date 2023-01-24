import { EventEmitter, Injectable, Output } from '@angular/core';
import { ResponseIDShoppingCart } from '../core/models/ShoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  @Output() carId: EventEmitter<ResponseIDShoppingCart> = new EventEmitter();

  constructor() { }
}
