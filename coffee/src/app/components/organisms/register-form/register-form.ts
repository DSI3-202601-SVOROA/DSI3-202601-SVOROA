import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterHeader } from '../../molecules/register-header/register-header';
import { PersonalDataFormComponent } from '../../molecules/personal-data-form/personal-data-form';
import { FormActions } from '../../molecules/form-actions/form-actions';
import { LoginService } from '../../../services/login';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterHeader,
    PersonalDataFormComponent,
    FormActions
  ],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  showError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.showError = false;

    const nuevoUsuario: User = {
      cedula: this.registerForm.value.cedula,
      nombre: this.registerForm.value.nombre,
      apellidos: this.registerForm.value.apellidos,
      email: this.registerForm.value.email,
      ciudad: this.registerForm.value.ciudad,
      password: this.registerForm.value.password
    };

    const resultado = this.loginService.register(nuevoUsuario);

    setTimeout(() => {
      this.loading = false;
      if (resultado.success) {
        alert('¡Cuenta creada exitosamente!');
        this.router.navigate(['/auth/login']);
      } else {
        this.showError = true;
        this.errorMessage = resultado.message;
      }
    }, 1000);
  }
}