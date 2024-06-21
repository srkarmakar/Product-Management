import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() parentToChild: any;
  @Output() childToParent = new EventEmitter<string>();

  viewProduct() {
    console.log('viewChild');
    this.childToParent.emit(this.parentToChild.name)
  }
}

