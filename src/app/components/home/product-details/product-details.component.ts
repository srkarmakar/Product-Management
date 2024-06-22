import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    public activatedRoute: ActivatedRoute
  ) { }
  product!: Product;
  ngOnInit(): void {
    let productID = this.activatedRoute.snapshot.params["id"]
    this.productService.getProductDetails(productID).subscribe(result =>
      this.product = result
    )
  }
}
