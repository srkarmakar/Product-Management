import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductServiceService,
    public activatedRoute: ActivatedRoute,
    public toastrService: ToastrService) { }

  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    headline: ['', Validators.required],
    calories: ['', Validators.required],
    carbos: ['', Validators.required],
    fats: ['', Validators.required],
    proteins: ['', Validators.required],
    image: ['', Validators.required]
  })
  router = inject(Router);
  ngOnInit(): void {
    let productID = this.activatedRoute.snapshot.params["id"]
    this.productService.getProductDetails(productID).subscribe(result =>
      this.productForm.patchValue(result)
    )
  }

  editProduct() {
    if (this.productForm.valid) {
      this.productService.editProduct(this.productForm.value).subscribe(result =>
        this.router.navigateByUrl('')
      )
      this.toastrService.success('Product Updated Successfully!', 'Success')
    } else this.toastrService.error('Please fill all the fields', 'Error')

  }

}
