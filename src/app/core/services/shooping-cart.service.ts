import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseIDShoppingCart, ShoppingCart } from '../models/ShoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {


  private env = environment;
  private UrlCreateShoppingCart = this.env.urlCreateShoppingCart;
  private UrlListShoppingCart = this.env.urlListShoppingCart;
  private UrlShoppingCart = this.env.urlShoppingCart;
  private UrlAddProductToShoppingCart = this.env.urlAddProductToShoppingCart;
  private UrlUpdateQuantityProductShoppingCart = this.env.urlUpdateQuantityProductShoppingCart;

  
  constructor( private http: HttpClient) { }
  
  createShoppingCart(): Observable<ResponseIDShoppingCart> {
    return this.http.post<ResponseIDShoppingCart>(`${this.UrlCreateShoppingCart}`, {} );
  }
  
  getCarts(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.UrlListShoppingCart}`);
    
  }
  
  
  getCart(carId: string): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`${this.UrlShoppingCart}/${carId}`);
    
  }
  
  
  addProductToShoppingCart(carId: string, productId: string): Observable<number> {
    return this.http.post<number>(`${this.UrlAddProductToShoppingCart}/${carId}/${productId}/1`, {} );
  }

  
  
  updateQuantityProductShoppingCart(carId: string, productId: string): Observable<number> {
    return this.http.post<number>(`${this.UrlUpdateQuantityProductShoppingCart}/${carId}/${productId}/1`, {} );
  }

}
