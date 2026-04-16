import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page';
import { RegisterPageComponent } from './pages/register-page/register-page';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '**', redirectTo: 'auth/login' }
];