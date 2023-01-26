import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Product, ResponseDeleteProduct } from 'src/app/core/models/products.model';
import { ProductsPaginated } from 'src/app/core/models/ProductsPaginated';
import { ProductsService } from 'src/app/core/services/products.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


interface DataItem {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn<Product> | null;
  listOfFilter?: any;
  filterFn?: NzTableFilterFn<Product> | null;
}


@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css'],

})
export class TableProductsComponent implements OnInit, OnDestroy {

  listProducts: ProductsPaginated[] = [];
  products!: any;
  pageIndex: any;
  pageSize: any;
  totalElements: any;
  cartID!: string | null;

  destroySubjectListProducts = new Subject<void>();
  destroySubjectDeleteProduct = new Subject<void>();

  constructor(private productsService: ProductsService, private modalService: NzModalService) { }


  ngOnInit(): void {
    this.cartID = localStorage.getItem('idCart');

    this.productsService.getListsProducts(this.pageIndex = '', this.pageSize = '')
      .pipe(takeUntil(this.destroySubjectListProducts))
      .subscribe(products => {
        this.listProducts = products;


        const arr = Object.entries(products);
        arr.forEach(product => {

          if (product[0] === "content") {
            this.products = product[1];
          }
          if (product[0] === "numberOfElements") {
            this.totalElements = product[1]
          }
          if (product[0] === "size") {
            this.pageSize = product[1];

          }
          if (product[0] === "number") {
            this.pageIndex = product[1];
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.destroySubjectListProducts.next();
    this.destroySubjectListProducts.complete();
  }

  listOfColumns: ColumnItem[] = [
    {
      name: 'Imagen',
    },
    {
      name: 'Nombre',
      sortOrder: null,
      sortFn: (a: Product, b: Product) => a.name.localeCompare(b.name),
    },
    {
      name: 'Valor',
      sortOrder: null,
      sortFn: (a: Product, b: Product) => a.value - b.value,
    },
    {
      name: 'Cantidad',
      sortFn: (a: Product, b: Product) => a.quantity - b.quantity,
      sortOrder: null,
    },
    {
      name: 'Acciones',
    }
  ];


  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }



  editProduct(data: Product) {

    this.modalService.create({
      nzTitle: 'Editar Producto',
      nzContent: EditProductComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: "80%",
      nzStyle: { top: "20px" },
      nzComponentParams: {
        data: data,
      },

    });



  }

  deleteProduct(data: Product) {
    this.modalService.confirm({
      nzTitle: 'Eliminar producto',
      nzContent: `Esta seguro de eliminar el producto ${data.name}`,
      nzOkText: "Borrar",
      nzCancelText: "Cancelar",
      nzOnOk: ()=> this.deleteProductService(data)

    });


  }

  deleteProductService(product: Product): void{
    const productId = product.id;
    if (productId != null || productId != undefined) {
      this.productsService.deleteProduct(productId)
        .pipe(takeUntil(this.destroySubjectDeleteProduct))
        .subscribe(
          {
            next: (data: any) => {
              this.modalConfirmDelete(data, product);
            },
            
            error: (err: HttpErrorResponse) => {
              this.modalService.error({
                nzTitle: 'Producto no eliminado ',
                nzContent: `No se ha podido eliminar el producto`,
                nzMaskClosable: false,
                nzFooter: null,
                nzWidth: "80%",
                nzStyle: { top: "20px" },
              })
            }
          }
          
        //   response => {
        //   this.modalConfirmDelete(response, product);
        // }
        );
      this.deleteRow(productId);
    }
  }

  modalConfirmDelete(response: ResponseDeleteProduct, product: Product) {
    this.modalService.create({
      nzTitle: response.response,
      nzContent: `Ha eliminado el producto ${product.name}`,
    })

  }

  addRow(): void {
    // this.listOfData = [
    //   ...this.listOfData,
    //   {
    //     id: `${this.i}`,
    //     name: `Edward King ${this.i}`,
    //     age: '32',
    //     address: `London, Park Lane no. ${this.i}`
    //   }
    // ];
    // this.i++;

    this.modalService.create({
      nzTitle: 'Crear producto',
      nzContent: CreateProductComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: "50%",
      nzStyle: { top: "20px" },

    });
  }

  deleteRow(id: string): void {
    this.products = this.products.filter((d: { id: string; }) => d.id !== id);
  }


}
