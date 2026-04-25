import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input';
import { ButtonComponent } from '../../atoms/button/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Buscar...';
  searchTerm: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm.trim());
    }
  }

  onClear() {
    this.searchTerm = '';
    this.search.emit('');
  }

  onInputChange(value: string) {
    this.searchTerm = value;
  }
}