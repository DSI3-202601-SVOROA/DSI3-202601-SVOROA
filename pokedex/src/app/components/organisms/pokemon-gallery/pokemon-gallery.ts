import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card';
import { PokemonDetailDto } from '../../../models/model';

@Component({
  selector: 'app-pokemon-gallery',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-gallery.html',
  styleUrl: './pokemon-gallery.css'
})
export class PokemonGalleryComponent {
  @Input() pokemons: PokemonDetailDto[] = [];
  @Input() isLoading: boolean = false;
  @Output() pokemonClick = new EventEmitter<PokemonDetailDto>();

  onPokemonClick(pokemon: PokemonDetailDto) {
    this.pokemonClick.emit(pokemon);
  }
}