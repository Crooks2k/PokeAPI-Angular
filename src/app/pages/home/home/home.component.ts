import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home_contain = {
    baner: "/assets/images/Banner.svg",
    alt: "Baner pokemon",
    form: {
      placeHolder: "Pikachu, Charizard, Ratata.."
    }
  }
}
