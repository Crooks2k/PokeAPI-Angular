import { Component} from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokemonList } from 'src/app/shared/models/pokemonList.model';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  home_contain = {
    baner: "/assets/images/Banner.png",
    alt: "Baner pokemon",
    form: {
      placeHolder: "Pikachu, Charizard, Ratata..."
    }
  }

  constructor(private pokemonService: PokemonService){
  }

  //pokemon
  pokemonList!: PokemonList;
  originalPokemons: Pokemon[] = []
  filteredPokemons: Pokemon[] = []
  inputValue: string = ""

  //pagination config
  itemsPerPage: number = 6;
  currentPage: number = 1;


  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = data
      this.pokemonService.getAllPokemonDetails(this.pokemonList).subscribe((response) => {
        this.originalPokemons = response
        this.filteredPokemons = response
      })
    })
  }

  //filter pokemons and display filter
  pokemon__onChange = (event: any) => {
    event.preventDefault()
    this.inputValue = event.target.value.toLowerCase()

    if (this.inputValue === "") {
      this.filteredPokemons = this.originalPokemons
    } else {
      this.filteredPokemons = this.originalPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.inputValue)
      )
    }
  }
}
