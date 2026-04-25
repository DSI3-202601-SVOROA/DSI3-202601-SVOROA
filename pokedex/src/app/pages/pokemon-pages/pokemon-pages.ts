import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonDetailDto } from '../../models/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-pages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-pages.html',
  styleUrl: './pokemon-pages.css'
})
export class PokemonPages implements OnInit, OnDestroy {
  selectedPokemon: PokemonDetailDto | null = null;
  pokemons: PokemonDetailDto[] = [];
  currentOffset = 0;
  limit = 20;
  isLoading = false;
  searchTerm = '';
  maxStatValue = 255;
  errorMessage = '';
  isSearchMode = false;
  
  private subscriptions: Subscription[] = [];

  // Inyectar ChangeDetectorRef para forzar la actualización de la vista
  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('🚀 PokemonPages iniciado');
  }

  ngOnInit() {
    console.log('📌 ngOnInit - Cargando datos iniciales');
    this.loadPokemons();
    this.loadPokemonDetail('pikachu');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadPokemons() {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.errorMessage = '';
    this.isSearchMode = false;
    
    console.log('🔄 Cargando Pokémon con offset:', this.currentOffset);
    
    const sub = this.pokemonService.getPokemonsWithDetails(this.currentOffset, this.limit)
      .subscribe({
        next: (data) => {
          console.log('✅ Datos recibidos:', data?.length);
          if (data && data.length > 0) {
            this.pokemons = [...data]; // Crear una nueva referencia
            console.log('🎉 Pokémon cargados:', this.pokemons.length);
          } else {
            this.pokemons = [];
          }
          this.isLoading = false;
          // 🔴 FORZAR ACTUALIZACIÓN DE LA VISTA
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('❌ Error:', err);
          this.errorMessage = `Error: ${err.message || 'No se pudieron cargar los Pokémon'}`;
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    
    this.subscriptions.push(sub);
  }

  loadPokemonDetail(nameOrId: string) {
    const sub = this.pokemonService.getPokemonDetail(nameOrId)
      .subscribe({
        next: (data) => {
          if (data) {
            this.selectedPokemon = data;
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          console.error('❌ Error cargando detalle:', err);
        }
      });
    
    this.subscriptions.push(sub);
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.isSearchMode = false;
      this.currentOffset = 0;
      this.loadPokemons();
      return;
    }
    
    this.isLoading = true;
    this.isSearchMode = true;
    this.errorMessage = '';
    
    const sub = this.pokemonService.getPokemonDetail(this.searchTerm.toLowerCase())
      .subscribe({
        next: (data) => {
          if (data) {
            this.pokemons = [data];
            this.selectedPokemon = data;
          } else {
            this.pokemons = [];
            this.errorMessage = 'Pokémon no encontrado';
          }
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('❌ Error en búsqueda:', err);
          this.errorMessage = 'Pokémon no encontrado';
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    
    this.subscriptions.push(sub);
  }

  onPokemonClick(pokemon: PokemonDetailDto) {
    this.selectedPokemon = pokemon;
    this.cdr.detectChanges();
  }

  nextPage() {
    if (this.isSearchMode) {
      this.isSearchMode = false;
      this.searchTerm = '';
      this.currentOffset = 0;
      this.loadPokemons();
    } else {
      this.currentOffset += this.limit;
      this.loadPokemons();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  previousPage() {
    if (this.isSearchMode) {
      this.isSearchMode = false;
      this.searchTerm = '';
      this.currentOffset = 0;
      this.loadPokemons();
    } else if (this.currentOffset >= this.limit) {
      this.currentOffset -= this.limit;
      this.loadPokemons();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  retryLoad() {
    this.errorMessage = '';
    this.loadPokemons();
  }

  backToGallery() {
    this.isSearchMode = false;
    this.searchTerm = '';
    this.currentOffset = 0;
    this.errorMessage = '';
    this.loadPokemons();
  }

  getStatValue(statKey: string): number {
    const stat = this.selectedPokemon?.stats?.find(s => s.stat.name === statKey);
    return stat?.base_stat || 0;
  }

  getStatPercentage(statKey: string): number {
    return (this.getStatValue(statKey) / this.maxStatValue) * 100;
  }
}