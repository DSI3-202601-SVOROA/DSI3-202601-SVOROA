import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button';
import { LinkTextComponent } from '../../atoms/link-text/link-text';

@Component({
  selector: 'app-form-actions',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LinkTextComponent],
  templateUrl: './form-actions.html',
  styleUrls: ['./form-actions.css']
})
export class FormActionsComponent {
  @Input() buttonLabel: string = 'Ingresar';
  @Input() loading: boolean = false;
  @Input() prefixText: string = '¿No tienes cuenta?';
  @Input() linkText: string = 'Regístrate';
  @Input() linkPath: string = '/auth/register';
}