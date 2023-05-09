export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonReturn[];
}

export interface PokemonReturn {
  name: string;
  url: string;
}