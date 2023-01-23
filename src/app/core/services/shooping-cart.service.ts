import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseIDShoppingCart } from '../models/RespIdShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {


  private env = environment;
  private UrlCreateShoppingCart = this.env.urlCreateShoppingCart;

  
  constructor( private http: HttpClient) { }
  
  createShoppingCart(): Observable<ResponseIDShoppingCart> {
    return this.http.post<ResponseIDShoppingCart>(`${this.UrlCreateShoppingCart}`, {} )
  }
}
