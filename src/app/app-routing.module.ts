import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {BienvenueComponent} from "./bienvenue/bienvenue.component";


const routes: Routes = [
  {
    path:"products",component:ProduitsComponent
  },
  {
    path:"new-product",component:NewProductComponent
  },
  {
    path:"", redirectTo:"/accueil",pathMatch:'full'
  },
  {
    path:"edit-product/:id",component:EditProductComponent
  },
  {
    path:"accueil",component:AccueilComponent
  },
  {
    path:"hello",component:BienvenueComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
