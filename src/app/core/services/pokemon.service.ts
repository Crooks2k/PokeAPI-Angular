import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PokemonList } from 'src/app/shared/models/pokemonList.model';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private url: string = environment.api
  constructor(private http: HttpClient) {
  }

  getPokemonList() {
    //retorna un observable al hacer la petición a la API (luego se usa .suscribe en home para obtener la lista y pasarla a getAllPokemonDetals)
    return this.http.get<PokemonList>(this.url)
  }

  //esta funcion se ejecutara una vez por cada pokemon dentro de la función getAllPokemnDetails
  //Se hace con el fin de realizar una petición a la url de cada pokemon y usar forkjoin para devolver un array con los datos de todos los pokemon.
  getPokemonDetails(pokemonUrl: string) {
    //se crea un observable y se almacena en el array pokemonRequest
    return this.http.get<Pokemon>(pokemonUrl)
  }

  getAllPokemonDetails(pokemonList: PokemonList) {
    //se declara un map sobre el listado de pokemones y se pasa su url a la funcion getPokemonDetails.
    const pokemonRequests = pokemonList.results.map((pokemon) =>
      this.getPokemonDetails(pokemon.url)
    )
    //se toma el array de observables y se realizan todas las peticiones a cada una de las url de los pokemones y una vez resuelta retorna un array con toda la información
    return forkJoin(pokemonRequests)
  }
}
