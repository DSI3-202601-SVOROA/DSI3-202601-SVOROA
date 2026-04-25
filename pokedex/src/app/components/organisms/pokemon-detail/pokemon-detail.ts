import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeBadgeComponent } from '../../atoms/type-badge/type-badge';
import { PokemonStatsComponent } from '../../molecules/pokemon-stats/pokemon-stats';
import { PokemonDetailDto } from '../../../models/model';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, TypeBadgeComponent, PokemonStatsComponent],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetailComponent {
  @Input() pokemon!: PokemonDetailDto;

  getStats() {
    if (!this.pokemon?.stats) return [];
    
    return this.pokemon.stats.map(stat => ({
      name: this.getStatName(stat.stat.name),
      value: stat.base_stat
    }));
  }

  getStatName(name: string): string {
    const names: { [key: string]: string } = {
      hp: 'HP',
      attack: 'ATAQUE',
      defense: 'DEFENSA',
      'special-attack': 'AT. ESPECIAL',
      'special-defense': 'DEF. ESPECIAL',
      speed: 'VELOCIDAD'
    };
    return names[name] || name.toUpperCase();
  }
}