import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    PokemonComponent
  ]
})
export class PagesModule { }
