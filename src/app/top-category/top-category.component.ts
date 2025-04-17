import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-top-category',
  imports: [CardComponent],
  templateUrl: './top-category.component.html',
  styleUrl: './top-category.component.css'
})
export class TopCategoryComponent {
  products !: Product[];
    constructor(x:ProductService){
      this.products = x.products.filter((product) => product.category === 'jewelery');
    }
}
