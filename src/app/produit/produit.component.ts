import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-produit',
  standalone: false,

  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
          produits = [
            {
              nom: 'Luigi Mansion 3',

              categorie: 'Jeu d\'aventure et d\'action',
              image: 'https://www.game.co.uk/images/products/94242490_h.jpg',
              prix: 59.99,
            },
            {
              nom: 'Pokemon Scarlet',

              categorie: 'Jeu de rôle et d\'aventure',
              image: 'https://www.game.co.uk/images/products/39570390_h.jpg',
              prix: 54.99,

            },
            {
              nom: 'super mario wonder ',

              categorie: 'Jeu de plateforme',
              image: 'https://www.game.co.uk/images/products/77616390_h.jpg',
              prix: 59.99,

            },
            {
              nom: 'the Legend of Zelda Echoes of wisdom',

              categorie: 'Jeu d\'action et d\'aventure',
              image: 'https://www.game.co.uk/images/products/92581472_h.jpg',
              prix: 69.99,
            },
            {
              nom: 'Animal Crossing New Horizons',

              categorie: 'Jeu de simulation de vie',
              image: 'https://www.game.co.uk/images/products/91022990_h.jpg',
              prix: 49.99,

            },
            {
              nom: 'Stray',

              categorie: 'Jeu d\'aventure',
              image: 'https://www.game.co.uk/images/products/94138369_h.jpg',
              prix: 39.99,

            },
            {
              nom: 'Shin Megami Tensei V',

              categorie: 'Jeu de rôle tactique',
              image: 'https://www.game.co.uk/images/products/98809891_h.jpg',
              prix: 44.99,
            },
            {
              nom: 'Tomb Raider',

              categorie: 'Jeu d\'action et d\'aventure',
              image: 'https://www.game.co.uk/images/products/98795391_h.jpg',
              prix: 29.99,

            },
            {
              nom: 'FC25',

              categorie: 'Jeu de sport',
              image: 'https://www.game.co.uk/images/products/92832391_h.jpg',
              prix: 64.99
            }
          ];


        paniers : any[] = JSON.parse(localStorage.getItem('panier') || '[]');

        ajouterAuPanier(produit: any) {
          this.paniers.push(produit);
          localStorage.setItem('panier', JSON.stringify(this.paniers));
          console.log(`${produit.nom} ajouté au panier!`);
        }

}
