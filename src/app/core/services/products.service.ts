import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsPaginated } from '../models/ProductsPaginated';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private env = environment;
  private UrlListsProducts = this.env.urlListsProducts;


  constructor( private http: HttpClient) { }

  getListsProducts(): Observable<ProductsPaginated[]> {
    return this.http.get<ProductsPaginated[]>(`${this.UrlListsProducts}`)
    
  }

}
