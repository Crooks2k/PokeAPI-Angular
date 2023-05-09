import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header/header.component';
import { HttpClientModule } from "@angular/common/http"
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
