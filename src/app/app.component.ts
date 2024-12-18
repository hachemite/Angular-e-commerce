import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './composants/header/header.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';


}
