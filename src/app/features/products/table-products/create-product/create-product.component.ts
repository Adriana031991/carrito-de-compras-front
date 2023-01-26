import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductForm!: FormGroup;
  valueAndQuantityRegex = /^\d*$/;

  constructor(
    private fb: FormBuilder, 
    private modal: NzModalRef, 
    private productsService: ProductsService, 
    private modalService: NzModalService) { }

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required, Validators.minLength(3)]],
      value: ['', [Validators.required, Validators.pattern(this.valueAndQuantityRegex)]],
      quantity: ['', [Validators.required, Validators.pattern(this.valueAndQuantityRegex)]],
    });
  }


  destroyModal(): void {
    this.modal.destroy();
  }

  createProduct(): void{
    const body: Product = {
      name: this.createProductForm.controls['name'].value,
      image: this.createProductForm.controls['image'].value,
      value: this.createProductForm.controls['value'].value,
      quantity: this.createProductForm.controls['quantity'].value
    }
    
    this.productsService.createProduct(body).subscribe(
      {
        next: (data: any) => {
          this.modalService.success({
            nzTitle: 'Se ha creado el producto',
            nzContent: `Se ha creado el producto: ${data.name}`,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: "80%",
            nzStyle: { top: "20px" },
          })
          this.resetForm();
          this.destroyModal();
        },
        
        error: (err: HttpErrorResponse) => {
          this.modalService.error({
            nzTitle: 'Producto no creado ',
            nzContent: `No se ha podido crear el producto`,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: "80%",
            nzStyle: { top: "20px" },
          })
          this.destroyModal();
        }
      });
  }


  resetForm(): void {
    this.createProductForm.reset({
      name: '',
      image: '',
      value: '',
      quantity: ''

    });
  }

}
