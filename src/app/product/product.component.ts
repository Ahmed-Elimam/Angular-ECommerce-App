import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-product',
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products!: Product[] ;
  constructor(x:ProductService){
    this.products = x.products;
  }

}
