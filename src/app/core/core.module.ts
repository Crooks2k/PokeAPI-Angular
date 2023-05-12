import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './layouts/footer/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    
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
