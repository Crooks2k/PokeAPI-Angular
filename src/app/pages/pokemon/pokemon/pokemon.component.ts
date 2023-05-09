import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  @Input() pokemon!: Pokemon

  PokemonLogoCard = "/assets/images/pokemonLogo.svg"
  FiguraCardName = "/assets/images/FiguraCardName.svg"
}
