import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../atoms/input-field/input-field';
import { SelectFieldComponent } from '../../atoms/select-field/select-field';

@Component({
  selector: 'app-personal-data-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputFieldComponent, SelectFieldComponent],
  templateUrl: './personal-data-form.html',
  styleUrls: ['./personal-data-form.css']
})
export class PersonalDataFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  carreraOptions = [
    { value: 'ingenieria-sistemas', label: 'Ingeniería de Sistemas' },
    { value: 'ingenieria-industrial', label: 'Ingeniería Industrial' },
    { value: 'ingenieria-electronica', label: 'Ingeniería Electrónica' },
    { value: 'administracion', label: 'Administración de Empresas' },
    { value: 'medicina', label: 'Medicina' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.parentForm) {
      this.parentForm = this.fb.group({
        cedula: ['', Validators.required],
        nombreCompleto: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        carrera: ['', Validators.required]
      });
    }
  }

  isInvalid(field: string): boolean {
    const control = this.parentForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}