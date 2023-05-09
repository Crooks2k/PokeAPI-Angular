import { Component, OnInit, inject} from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokemonList } from 'src/app/shared/models/pokemonList.model';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

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
      placeHolder: "Pikachu, Charizard, Ratata..."
    }
  }

  constructor(private pokemonService: PokemonService){
  }
  
  pokemonList!: PokemonList
  pokemons: Pokemon[] = []

  ngOnInit(): void{
    this.pokemonService.getPokemonList().subscribe((data) =>{
      this.pokemonList = data
      this.pokemonService.getAllPokemonDetails(this.pokemonList).subscribe((response) => {
        //almacenamiento de cada uno de los pokemones
        this.pokemons = response
        console.log(this.pokemons)
      });
    });
  }
}
