import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books = [
    {
      "name": "The Hidden Hindu",
      "genre": "Sci-fi/Thriller",
      "image": "https://m.media-amazon.com/images/I/81ZI8RyyynL._SL1500_.jpg",
    },
    {
      "name": "The Naga Warriors",
      "genre": "Historical",
      "image": "https://m.media-amazon.com/images/I/71MoS+oeovL._SL1500_.jpg",
    },
    {
      "name": "Hindus in Hindu Rashtra",
      "genre": "Historical",
      "image": "https://m.media-amazon.com/images/I/91shv7troSL._SL1500_.jpg",
    }
  ]

  viewProductDetails(event: any) {
    console.log('ViewParent', event);
  }
}
