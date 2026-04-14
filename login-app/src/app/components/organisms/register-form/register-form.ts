import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterHeaderComponent } from '../../molecules/register-header/register-header';
import { PersonalDataFormComponent } from '../../molecules/personal-data-form/personal-data-form';
import { FormActionsComponent } from '../../molecules/form-actions/form-actions';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterHeaderComponent,
    PersonalDataFormComponent,
    FormActionsComponent
  ],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      cedula: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      carrera: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      alert('¡Cuenta creada exitosamente!');
      this.router.navigate(['/auth/login']);
    }, 1500);
  }
}