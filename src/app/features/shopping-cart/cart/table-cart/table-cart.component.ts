import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Subject, takeUntil } from 'rxjs';
import { ItemsCar, ShoppingCart } from 'src/app/core/models/ShoppingCart.model';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { Product } from '../../../../core/models/products.model';

@Component({
  selector: 'app-table-cart',
  templateUrl: './table-cart.component.html',
  styleUrls: ['./table-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TableCartComponent implements OnInit {


  destroyConfigure$ = new Subject<void>();
  products!: ShoppingCart;
  itemsCar: ItemsCar[] = [];


  products$ = this.sharedService.products$
    .pipe(
      map((resp: any) => (resp)),
      takeUntil(this.destroyConfigure$))
    .subscribe((result: any) => {
      this.itemsCar = result.itemsCar
      console.log('result --', result)
      this.changeDetection.detectChanges();
    });

  constructor(
    private modal: NzModalService,
    private sharedService: SharedDataService,
    private changeDetection: ChangeDetectorRef,) { }

  ngOnInit(): void {

  }


  deleteProduct(product: Product) {
    console.log('data', product)
    let indx = this.itemsCar.findIndex(p => p.product.id === product.id);
    this.itemsCar.splice(indx, 1);
    console.log('indx', this.itemsCar)
    this.modal.confirm({
      nzTitle: 'Eliminar producto de la lista',
      nzContent: `Esta seguro de eliminar el producto ${product.name}`,
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => {
        //TODO: disparar actualizar pagina y revisar que los productos si se resten de la db
        setTimeout(resolve, 100)
      })
    });
  }
}
