import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from '../../../../core/models/products.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() data!: Product;
  editId: string | null = null;

  destroySubjectEditProduct = new Subject<void>();

  constructor(private modal: NzModalRef, private productsService: ProductsService, private modalService: NzModalService) { }

  ngOnInit(): void {
  }


  destroyModal(): void {
    this.modal.destroy();
  }
  
  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  updateProduct(){
    if (this.data.id) {
      this.productsService.updateProduct(this.data, this.data.id)
      .pipe(takeUntil(this.destroySubjectEditProduct)).subscribe(
      {
        next: (data: any) => {
          this.modalService.success({
            nzTitle: 'Se ha actualizado el producto',
            nzContent: `Se ha actualizado el producto: ${this.data.name}`,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: "80%",
            nzStyle: { top: "20px" },
          })
          this.destroyModal();
        },
        
        error: (err: HttpErrorResponse) => {
          this.modalService.error({
            nzTitle: 'Producto no actualizado ',
            nzContent: `No se ha podido actualizar el producto`,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: "80%",
            nzStyle: { top: "20px" },
          })
          this.destroyModal();
        }
      });
    }
  }


}
