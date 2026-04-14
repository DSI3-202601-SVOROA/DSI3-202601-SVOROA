import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from '../../atoms/app-logo/app-logo';

@Component({
  selector: 'app-register-header',
  standalone: true,
  imports: [CommonModule, AppLogoComponent],
  templateUrl: './register-header.html',
  styleUrls: ['./register-header.css']
})
export class RegisterHeaderComponent {
  @Input() title: string = 'Crear cuenta';
  @Input() subtitle: string = 'Completa el formulario';
}