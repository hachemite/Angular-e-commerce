import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: false,
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  paniers: any[] = [];
  uniqueProduitsPanier: any[] = [];

  ngOnInit(): void {
    const storedPanier = localStorage.getItem('panier');
    this.paniers = storedPanier ? JSON.parse(storedPanier) : [];
    this.updateUniqueProduits();
  }

  private updateUniqueProduits(): void {
    this.uniqueProduitsPanier = [];
    this.paniers.forEach((product: { nom: string, categorie: string, image: string, prix: number }) => {
      if (!this.uniqueProduitsPanier.some(p => p.nom === product.nom)) {
        this.uniqueProduitsPanier.push(product);
      }
    });
  }


  calculateItemCount(itemName: string): number {
    return this.paniers.filter(item => item.nom === itemName).length;
  }

  getTotalItemCount(): number {
    return this.paniers.length;
  }

  getTotalPrice(): number {
    let total = 0;
    this.paniers.forEach(item => {
      total += item.prix;
    });
    return Number(total.toFixed(2));
  }

  viderPanier(): void {
    localStorage.removeItem('panier');
    this.paniers = [];
    this.updateUniqueProduits();
  }

  deminuerProduit(produit: any): void {
    const index = this.paniers.indexOf(produit);
    if (index !== -1) {
      this.paniers.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(this.paniers));
      this.updateUniqueProduits();
    }
  }

  augmenterProduit(produit: any): void {
    const index = this.paniers.indexOf(produit);
    if (index !== -1) {
      this.paniers.push(produit);
      localStorage.setItem('panier', JSON.stringify(this.paniers));
      this.updateUniqueProduits();
    }
  }

  supprimerJusteUnProduit(produit: any): void {
    const index = this.paniers.indexOf(produit);
    const nom = produit.nom;
    this.paniers = this.paniers.filter(item => item.nom !== nom);
    localStorage.setItem('panier', JSON.stringify(this.paniers));
    this.updateUniqueProduits();
  }
}
