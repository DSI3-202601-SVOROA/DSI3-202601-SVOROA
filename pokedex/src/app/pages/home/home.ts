import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../components/templates/main-layout/main-layout';
import { HeaderComponent } from '../../components/organisms/header/header';
import { PokemonGalleryComponent } from '../../components/organisms/pokemon-gallery/pokemon-gallery';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonDetailDto } from '../../models/model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, HeaderComponent, PokemonGalleryComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  pokemons: PokemonDetailDto[] = [];
  isLoading = false;
  searchTerm = '';

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading = true;
    this.pokemonService.getPokemonsWithDetails(0, 20).subscribe({
      next: (data) => {
        this.pokemons = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    if (term) {
      this.pokemonService.getPokemonDetail(term).subscribe({
        next: (pokemon) => {
          this.pokemons = [pokemon];
          this.isLoading = false;
        },
        error: () => {
          this.pokemons = [];
          this.isLoading = false;
        }
      });
    } else {
      this.loadPokemons();
    }
  }

  onPokemonClick(pokemon: PokemonDetailDto) {
    console.log('Pokémon seleccionado:', pokemon.name);
    // Aquí navegar al detalle
  }
}