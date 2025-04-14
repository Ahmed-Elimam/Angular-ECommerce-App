import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] =[
    {
      id: 1,
      productName: 'Whey Protein',
      productPrice: 49.99,
      productImage: 'assets/products/protein.jpg',
      onSale: true
    },
    {
      id: 2,
      productName: 'Creatine Monohydrate',
      productPrice: 29.99,
      productImage: 'assets/products/creatine.png',
      onSale: false
    },
    {
      id: 3,
      productName: 'Shaker Bottle',
      productPrice: 12.99,
      productImage: 'assets/products/shaker.png',
      onSale: true
    }
  ]
}
