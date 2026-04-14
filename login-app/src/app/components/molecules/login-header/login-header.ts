import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from '../../atoms/app-logo/app-logo';

@Component({
  selector: 'app-login-header',
  standalone: true,
  imports: [CommonModule, AppLogoComponent],
  templateUrl: './login-header.html',
  styleUrls: ['./login-header.css']
})
export class LoginHeaderComponent {
  @Input() title: string = 'Iniciar sesión';
  @Input() subtitle: string = 'Ingresa tus credenciales';
}