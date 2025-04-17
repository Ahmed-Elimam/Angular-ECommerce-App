import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products', loadComponent: () => import('./products-list/products-list.component').then(m => m.ProductsListComponent)},
    
    
    
    
    {path: '**',component: NotFoundComponent}
];
