import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';
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


  constructor(private service: ProductsService) { }


  ngOnInit(): void {
    this.subscription = this.service.getListsProducts('', '').subscribe(products => {
      this.listProducts = products;
      console.log('first', this.listProducts)

      const arr = Object.entries(this.listProducts);
      arr.forEach(product => {
        if (product[0] === "content") {
          product.forEach((k, v) => {
            this.products = k;
            console.log('this.products', this.products)
          })
        }
        if (product[0]==="numberOfElements") {
          product.forEach((k, v) => {
            this.totalElements = k
            console.log('this.totalElements', this.totalElements)
          })
        }
        if (product[0]==="size") {
          product.forEach((k, v) => {
            this.pageSize = k
            console.log('this.totalElements', this.pageSize)
          })
        }
        if (product[0]==="number") {
          product.forEach((k, v) => {
            this.pageIndex = k
            console.log('this.totalElements', this.pageIndex)
          })
        }
      });
    });

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



}
