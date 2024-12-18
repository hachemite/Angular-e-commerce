import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeaderComponent } from './composants/header/header.component';
import { HomeComponent } from './composants/home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProduitComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
