import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHeader } from '../../molecules/login-header/login-header';
import { CredentialsForm } from '../../molecules/credentials-form/credentials-form';
import { FormActions } from '../../molecules/form-actions/form-actions';
import { LoginService } from '../../../services/login';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginHeader,
    CredentialsForm,
    FormActions
  ],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  showError = false;
  errorMessage = 'Correo o contraseña incorrectos';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

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

    const { email, password } = this.loginForm.value;
    const usuario = this.loginService.login(email, password);

    setTimeout(() => {
      this.loading = false;
      if (usuario) {
        this.loginService.setCurrentUser(usuario);
        this.router.navigate(['/dashboard']);
      } else {
        this.showError = true;
      }
    }, 1000);
  }
}