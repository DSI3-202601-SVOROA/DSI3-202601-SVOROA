import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHeaderComponent } from '../../molecules/login-header/login-header';
import { CredentialsFormComponent } from '../../molecules/credentials-form/credentials-form';
import { FormActionsComponent } from '../../molecules/form-actions/form-actions';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginHeaderComponent,
    CredentialsFormComponent,
    FormActionsComponent
  ],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  showError = false;
  errorMessage = 'Credenciales incorrectas';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.showError = false;

    setTimeout(() => {
      this.loading = false;
      const { email, password } = this.loginForm.value;
      if (email === 'admin@elbosque.edu.co' && password === '123456') {
        alert('¡Bienvenido!');
      } else {
        this.showError = true;
      }
    }, 1500);
  }
}