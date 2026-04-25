import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class IconComponent {
  @Input() name: 'search' | 'arrow-left' | 'arrow-right' | 'close' = 'search';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  getSize(): string {
    const sizes = { sm: '16', md: '24', lg: '32' };
    return sizes[this.size];
  }

  getPath(): string {
    const paths = {
      search: 'M10 18a8 8 0 100-16 8 8 0 000 16zm6-8a6 6 0 11-12 0 6 6 0 0112 0zm4 12l-4.5-4.5',
      'arrow-left': 'M10 19l-7-7m0 0l7-7m-7 7h18',
      'arrow-right': 'M14 5l7 7m0 0l-7 7m7-7H3',
      close: 'M6 18L18 6M6 6l12 12'
    };
    return paths[this.name];
  }
}