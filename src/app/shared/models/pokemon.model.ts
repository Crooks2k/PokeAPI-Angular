export interface Pokemon{
  id: number,
  name: string,
  image: string,
  type: string,
  hp: number,
  attack: number,
  defense: number,
  speed: number,
  ability: string,
  sprites: Sprites
}

interface Sprites{
  front_default: string,
}
