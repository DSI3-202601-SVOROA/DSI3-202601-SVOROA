import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-field.html',
  styleUrls: ['./select-field.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectFieldComponent),
    multi: true
  }]
})
export class SelectFieldComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = 'Selecciona una opción';
  @Input() options: { value: string; label: string }[] = [];
  @Input() hasError: boolean = false;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  onSelect(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
    this.onChange(this.value);
  }

  writeValue(value: string): void { this.value = value || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
}