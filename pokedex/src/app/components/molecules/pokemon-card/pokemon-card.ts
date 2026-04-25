import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeBadgeComponent } from '../../atoms/type-badge/type-badge';
import { PokemonDetailDto } from '../../../models/model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, TypeBadgeComponent],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonDetailDto;
  @Output() cardClick = new EventEmitter<PokemonDetailDto>();

  onClick() {
    this.cardClick.emit(this.pokemon);
  }
}