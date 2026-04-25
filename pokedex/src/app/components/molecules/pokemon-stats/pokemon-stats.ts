import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBarComponent } from '../../atoms/stat-bar/stat-bar';

export interface Stat {
  name: string;
  value: number;
}

@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [CommonModule, StatBarComponent],
  templateUrl: './pokemon-stats.html',
  styleUrl: './pokemon-stats.css'
})
export class PokemonStatsComponent {
  @Input() stats: Stat[] = [];
  @Input() title: string = 'Estadísticas Base';
}