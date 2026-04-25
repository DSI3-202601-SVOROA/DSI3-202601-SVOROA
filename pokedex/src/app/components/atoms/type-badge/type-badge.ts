import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-badge.html',
  styleUrl: './type-badge.css'
})
export class TypeBadgeComponent {
  @Input() type: string = 'normal';

  getTypeClass(): string {
    return `type-badge type-badge--${this.type.toLowerCase()}`;
  }
}