export interface Pokemon{
  id: number,
  name: string,
  image: string,
  types: types[],
  hp: number,
  attack: number,
  defense: number,
  speed: number,
  abilities: abilities[],
  sprites: Sprites,
  weight: number
}

interface Sprites{
  front_default: string,
}

interface abilities{
  ability: {
    name: string,
    url: string
  }
}

interface types{
  type:{
    name: string,
  }
}
