import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService, RegisterRequest } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  authService = inject(AuthService);
  errorMessage = '';
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerRequest: RegisterRequest = {
        ...this.registerForm.value,
        role: 'USER' // Always set the role to 'USER'
      };
      this.authService.register(registerRequest).subscribe();
    } else {
      this.errorMessage = 'Please fill in all the required fields.';
    }
  }
}
