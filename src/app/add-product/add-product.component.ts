import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../model/product';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  constructor(
    private productService: ProductServiceService,
  ) { }
  product: Product = {
    calories: "",
    carbos: "",
    description: "",
    fats: "",
    headline: "",
    id: "",
    image: "",
    name: "",
    proteins: "",
  };
  router = inject(Router)

  addProduct() {    
    //Generate Random Id
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijgklmnopqrstuvwxyz0123456789'
    for (let i = 0; i <= characters.length; i++) {
      this.product.id += String(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    this.productService.addNewProduct(this.product).subscribe(result => {
      this.router.navigateByUrl('');
    });
  }
}
