export interface PokemonsDto {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonsListDto[];
}

export interface PokemonsListDto {
  name: string;
  url: string;
}

export interface PokemonDetailDto {
  id: number;
  name: string;
  types: PokemonDetailListTypeDTO[];
  sprites: PokemonDetailSpriteDto;
  stats: PokemonStatDto[];
}

export interface PokemonDetailListTypeDTO {
  slot: number;
  type: PokemonDetailTypeDTO;
}

export interface PokemonDetailTypeDTO {
  name: string;
  url: string;
}

export interface PokemonDetailSpriteDto {
  front_default: string;
}

export interface PokemonStatDto {
  base_stat: number;
  stat: {
    name: string;
  };
}