import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../atoms/input-field/input-field';
import { ErrorMessageComponent } from '../../atoms/error-message/error-message';

@Component({
  selector: 'app-credentials-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputFieldComponent, ErrorMessageComponent],
  templateUrl: './credentials-form.html',
  styleUrls: ['./credentials-form.css']
})
export class CredentialsFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() showError: boolean = false;
  @Input() errorMessage: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.parentForm) {
      this.parentForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  isInvalid(field: string): boolean {
    const control = this.parentForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}