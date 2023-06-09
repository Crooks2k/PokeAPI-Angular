import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { HttpClientModule } from "@angular/common/http"
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from '../core/common/Loader/loader/loader.component';
import { FooterComponent } from '../core/layouts/footer/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    HomeComponent,
    PokemonComponent,
    LoaderComponent,
    FooterComponent
  ]
})
export class PagesModule { }
