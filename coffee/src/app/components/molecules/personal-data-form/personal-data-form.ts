import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputField } from '../../atoms/input-field/input-field';
import { SelectField } from '../../atoms/select-field/select-field';

@Component({
  selector: 'app-personal-data-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputField, SelectField],
  templateUrl: './personal-data-form.html',
  styleUrls: ['./personal-data-form.css']
})
export class PersonalDataFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  ciudadOptions = [
    { value: 'bogota', label: 'Bogotá' },
    { value: 'medellin', label: 'Medellín' },
    { value: 'cali', label: 'Cali' },
    { value: 'barranquilla', label: 'Barranquilla' },
    { value: 'cartagena', label: 'Cartagena' },
    { value: 'bucaramanga', label: 'Bucaramanga' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.parentForm) {
      this.parentForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        ciudad: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  isInvalid(field: string): boolean {
    const control = this.parentForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}