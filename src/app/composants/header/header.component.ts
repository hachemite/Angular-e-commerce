import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProduitComponent } from '../../produit/produit.component';
import { PanierComponent } from '../../panier/panier.component';

export const routes: Routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'panier', component: PanierComponent},
];


@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

}
