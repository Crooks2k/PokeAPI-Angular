import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
