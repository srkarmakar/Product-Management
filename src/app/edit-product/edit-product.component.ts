import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    public activatedRoute: ActivatedRoute) { }

  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: [''],
    description: [''],
    headline: [''],
    calories: [''],
    carbos: [''],
    fats: [''],
    proteins: [''],
    image: ['']
  })
  router=inject(Router);
  ngOnInit(): void {
    let productID = this.activatedRoute.snapshot.params["id"]
    this.productService.getProductDetails(productID).subscribe(result =>
      this.productForm.patchValue(result)
    )
  }

  editProduct() {
    this.productService.editProduct(this.productForm.value).subscribe(result =>
      this.router.navigateByUrl('')
    )
  }

}
