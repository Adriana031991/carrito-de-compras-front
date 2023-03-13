import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products.model';
import { ProductsPaginated } from '../models/ProductsPaginated.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private env = environment;
  private UrlListsProducts = this.env.urlListsProducts;
  private UrlCreateProduct = this.env.urlProduct;
  private UrlUpdateProduct = this.env.urlUpdateProduct;
  private UrlDeleteProduct = this.env.urlDeleteProduct;
  private UrlGetProductByName = this.env.urlGetProductByName;
  private UrlGetProductById = this.env.urlGetProductById;


  constructor(private http: HttpClient) { }

  getListsProducts(page: number, size:number): Observable<ProductsPaginated[]> {

    let options = {
      params: new HttpParams().set('page', page).set('pId', size),
    }
    return this.http.get<ProductsPaginated[]>(`${this.UrlListsProducts}`, options)

  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.UrlGetProductById}/${productId}`)
  }

  getProductByName(productName: string): Observable<Product> {
    return this.http.get<Product>(`${this.UrlGetProductByName}/${productName}`)
  }

  createProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(`${this.UrlCreateProduct}`, body);
  }

  updateProduct(body: Product, productId: string): Observable<Product> {
    return this.http.put<Product>(`${this.UrlUpdateProduct}/${productId}`, body);
  }

  deleteProduct(productId: string): Observable<string> {
    return this.http.delete<string>(`${this.UrlDeleteProduct}/${productId}`);
  }



}
