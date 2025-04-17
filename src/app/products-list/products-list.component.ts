import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { TopCategoryComponent } from "../top-category/top-category.component";
import { ProductComponent } from "../product/product.component";
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'app-products-list',
  imports: [TopCategoryComponent, ProductComponent, LoadingComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  
}
