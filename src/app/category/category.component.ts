import { Component } from '@angular/core';
import { Category } from '../category'; 
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] =[
    {
        id: 1,
        title: 'Supplements',
        price: 150,
        image: 'assets/Categories/supplements.webp'
    },
    {
        id: 2,
        title: 'Clothing',
        price: 50,
        image: 'assets/Categories/clothing.png'
    },
    {
        id: 3,
        title: 'Equipment',
        price: 200,
        image: 'assets/Categories/equipment.png'
    },
  ]
}
